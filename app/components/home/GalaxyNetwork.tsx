"use client";

import {
  useEffect,
  useRef,
  type RefObject,
} from "react";

export type GalaxyNode = {
  id: string;
  x: number;
  y: number;
};

type Props = {
  nodes: GalaxyNode[];
  mouseRef: RefObject<{
    x: number;
    y: number;
    active: boolean;
  }>;
};

type Particle = {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  alpha: number;
  wobble: number;
  wobbleSpeed: number;
  rotation: number;
};

const TAU = Math.PI * 2;

export default function GalaxyNetwork({
  nodes,
  mouseRef,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
    });

    if (!ctx) return;

    let width = 0;
    let height = 0;

    let centerX = 0;
    let centerY = 0;

    let particles: Particle[] = [];

    let animationFrame = 0;
    let lastFrame = 0;

    let visible = true;
    let destroyed = false;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mobile = window.matchMedia(
      "(max-width: 767px)"
    ).matches;

    /*
     * Keep the canvas deliberately small.
     *
     * Desktop: ~72 particles
     * Mobile:  ~32 particles
     *
     * This is enough for the visual density in the reference
     * without creating a heavy particle simulation.
     */
    const PARTICLE_COUNT = reducedMotion
      ? 20
      : mobile
        ? 32
        : 72;

    /*
     * We deliberately cap DPR.
     *
     * A 4K/Retina display can otherwise make canvas rendering
     * unnecessarily expensive.
     */
    const MAX_DPR = mobile ? 1.1 : 1.35;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        MAX_DPR
      );

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      /*
       * Keep the galaxy on the right side.
       *
       * This is intentionally not exactly 50%.
       */
      centerX = width * 0.69;
      centerY = height * 0.49;

      createParticles();
    };

    const createParticles = () => {
      const maxRadius =
        Math.min(width, height) *
        (mobile ? 0.37 : 0.48);

      particles = Array.from(
        { length: PARTICLE_COUNT },
        (_, index) => {
          /*
           * Concentrate some particles around the core,
           * while allowing others to spread outward.
           */
          const normalized =
            index / PARTICLE_COUNT;

          const radius =
            Math.pow(
              Math.random(),
              0.65
            ) * maxRadius;

          return {
            angle:
              Math.random() * TAU,

            radius,

            /*
             * Very slow orbital movement.
             */
            speed:
              (0.0009 +
                Math.random() * 0.0018) *
              (index % 3 === 0 ? -1 : 1),

            size:
              Math.random() < 0.86
                ? Math.random() * 1.15 + 0.35
                : Math.random() * 1.8 + 0.9,

            alpha:
              Math.random() * 0.42 + 0.12,

            wobble:
              Math.random() * TAU,

            wobbleSpeed:
              0.0005 +
              Math.random() * 0.0012,

            rotation:
              normalized *
                Math.PI *
                1.4 +
              (Math.random() - 0.5) *
                0.8,
          };
        }
      );
    };

    const drawCore = (time: number) => {
      /*
       * The central glow is deliberately tiny.
       * Large blurred gradients every frame are expensive.
       */
      const pulse =
        reducedMotion
          ? 1
          : 1 +
            Math.sin(time * 0.0015) *
              0.06;

      const radius = 34 * pulse;

      const gradient =
        ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          radius
        );

      gradient.addColorStop(
        0,
        "rgba(105, 155, 255, 0.30)"
      );

      gradient.addColorStop(
        0.28,
        "rgba(75, 120, 255, 0.11)"
      );

      gradient.addColorStop(
        1,
        "rgba(40, 80, 255, 0)"
      );

      ctx.beginPath();

      ctx.fillStyle = gradient;

      ctx.arc(
        centerX,
        centerY,
        radius,
        0,
        TAU
      );

      ctx.fill();

      /*
       * Small core.
       */
      ctx.beginPath();

      ctx.fillStyle =
        "rgba(205, 225, 255, 0.95)";

      ctx.shadowBlur = 12;
      ctx.shadowColor =
        "rgba(90, 140, 255, 0.9)";

      ctx.arc(
        centerX,
        centerY,
        2.6,
        0,
        TAU
      );

      ctx.fill();

      ctx.shadowBlur = 0;
    };

    const drawOrbit = (
      radius: number,
      opacity: number
    ) => {
      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        radius,
        0,
        TAU
      );

      ctx.strokeStyle = `rgba(74, 123, 230, ${opacity})`;

      ctx.lineWidth = 0.45;

      ctx.stroke();
    };

    const drawNodeConnections = () => {
      nodes.forEach((node) => {
        const x = node.x * width;
        const y = node.y * height;

        /*
         * Curved connection from the central core
         * toward each technology node.
         */
        const dx = x - centerX;
        const dy = y - centerY;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (distance < 10) return;

        const normalX = -dy / distance;
        const normalY = dx / distance;

        /*
         * Slight curve.
         */
        const curve =
          Math.min(distance * 0.18, 80);

        const cpX =
          centerX +
          dx * 0.48 +
          normalX * curve;

        const cpY =
          centerY +
          dy * 0.48 +
          normalY * curve;

        ctx.beginPath();

        ctx.moveTo(
          centerX,
          centerY
        );

        ctx.quadraticCurveTo(
          cpX,
          cpY,
          x,
          y
        );

        ctx.strokeStyle =
          "rgba(72, 118, 225, 0.095)";

        ctx.lineWidth = 0.55;

        ctx.stroke();
      });
    };

    const drawParticles = (
      time: number
    ) => {
      const mouse = mouseRef.current;

      for (const particle of particles) {
        /*
         * Slow orbit.
         */
        if (!reducedMotion) {
          particle.angle +=
            particle.speed *
            (time - lastFrame);
        }

        /*
         * Gentle radial breathing.
         */
        const wobble =
          Math.sin(
            particle.wobble +
              time *
                particle.wobbleSpeed
          ) * 7;

        const radius =
          particle.radius + wobble;

        let x =
          centerX +
          Math.cos(
            particle.angle +
              particle.rotation
          ) *
            radius;

        let y =
          centerY +
          Math.sin(
            particle.angle +
              particle.rotation
          ) *
            radius *
            0.72;

        /*
         * Cursor influence.
         *
         * Very small.
         * The particles should react,
         * not fly around.
         */
        if (mouse.active) {
          const dx =
            mouse.x - x;

          const dy =
            mouse.y - y;

          const distance =
            Math.sqrt(
              dx * dx + dy * dy
            );

          if (distance < 180) {
            const influence =
              (1 - distance / 180) *
              7;

            x +=
              (dx / Math.max(distance, 1)) *
              influence;

            y +=
              (dy / Math.max(distance, 1)) *
              influence;
          }
        }

        /*
         * Particle.
         */
        ctx.beginPath();

        ctx.arc(
          x,
          y,
          particle.size,
          0,
          TAU
        );

        ctx.fillStyle = `rgba(
          100,
          150,
          255,
          ${particle.alpha}
        )`;

        ctx.fill();

        /*
         * Only larger particles receive a tiny glow.
         * This avoids expensive shadows on every particle.
         */
        if (particle.size > 1.5) {
          ctx.beginPath();

          ctx.arc(
            x,
            y,
            particle.size * 2.8,
            0,
            TAU
          );

          ctx.fillStyle =
            "rgba(80, 130, 255, 0.035)";

          ctx.fill();
        }
      }
    };

    const drawFlowLines = () => {
      /*
       * Instead of connecting every particle to every other
       * particle, create a small number of deterministic
       * flowing curves around the core.
       *
       * This gives the "neural galaxy" look without an
       * O(n²) particle connection calculation.
       */
      const lineCount = mobile ? 8 : 15;

      const maxRadius =
        Math.min(width, height) *
        (mobile ? 0.33 : 0.45);

      for (
        let i = 0;
        i < lineCount;
        i++
      ) {
        const angle =
          (i / lineCount) * TAU;

        const startRadius =
          maxRadius * 0.22;

        const endRadius =
          maxRadius *
          (0.7 + (i % 3) * 0.08);

        const startX =
          centerX +
          Math.cos(angle) *
            startRadius;

        const startY =
          centerY +
          Math.sin(angle) *
            startRadius *
            0.72;

        const endX =
          centerX +
          Math.cos(angle + 0.16) *
            endRadius;

        const endY =
          centerY +
          Math.sin(angle + 0.16) *
            endRadius *
            0.72;

        const normalX =
          -Math.sin(angle);

        const normalY =
          Math.cos(angle);

        const curve =
          35 +
          (i % 4) * 18;

        const cpX =
          centerX +
          Math.cos(angle) *
            (maxRadius * 0.46) +
          normalX * curve;

        const cpY =
          centerY +
          Math.sin(angle) *
            (maxRadius * 0.46) *
            0.72 +
          normalY * curve;

        ctx.beginPath();

        ctx.moveTo(
          startX,
          startY
        );

        ctx.quadraticCurveTo(
          cpX,
          cpY,
          endX,
          endY
        );

        ctx.strokeStyle =
          "rgba(58, 105, 220, 0.065)";

        ctx.lineWidth = 0.45;

        ctx.stroke();
      }
    };

    const draw = (time: number) => {
      if (destroyed) return;

      /*
       * Cap animation around 40 FPS.
       *
       * The website doesn't need 120 FPS for this
       * background effect.
       */
      if (
        !reducedMotion &&
        time - lastFrame < 25
      ) {
        animationFrame =
          requestAnimationFrame(draw);

        return;
      }

      lastFrame = time;

      if (!visible) {
        animationFrame =
          requestAnimationFrame(draw);

        return;
      }

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      /*
       * Back-to-front.
       */
      drawOrbit(
        Math.min(width, height) *
          0.13,
        0.08
      );

      drawOrbit(
        Math.min(width, height) *
          0.22,
        0.055
      );

      drawOrbit(
        Math.min(width, height) *
          0.32,
        0.035
      );

      drawFlowLines();

      drawNodeConnections();

      drawParticles(time);

      drawCore(time);

      animationFrame =
        requestAnimationFrame(draw);
    };

    /*
     * Stop rendering when the hero leaves the viewport.
     */
    const observer =
      new IntersectionObserver(
        ([entry]) => {
          visible =
            entry.isIntersecting;
        },
        {
          threshold: 0.05,
        }
      );

    observer.observe(canvas);

    /*
     * Stop rendering when the browser tab
     * is hidden.
     */
    const handleVisibility =
      () => {
        visible =
          document.visibilityState ===
          "visible";
      };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    resize();

    animationFrame =
      requestAnimationFrame(draw);

    window.addEventListener(
      "resize",
      resize,
      {
        passive: true,
      }
    );

    return () => {
      destroyed = true;

      cancelAnimationFrame(
        animationFrame
      );

      observer.disconnect();

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, [nodes, mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        h-full
        w-full
      "
    />
  );
}