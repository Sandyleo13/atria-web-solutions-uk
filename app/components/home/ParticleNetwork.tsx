"use client";

import { useEffect, useRef } from "react";

export type TechNode = {
  id: string;
  label: string;
  shortLabel: string;
  x: number;
  y: number;
};

type Props = {
  nodes: TechNode[];
  mouseX?: number;
  mouseY?: number;
  hoveredNode?: string | null;
};

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
  speed: number;
  twinkle: number;
  core: boolean;
};

type CoreDot = {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  alpha: number;
};

type Point = {
  x: number;
  y: number;
};

const TAU = Math.PI * 2;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function seeded(seed: number) {
  let value = seed;

  return () => {
    value =
      (value * 16807) %
      2147483647;

    return (
      (value - 1) /
      2147483646
    );
  };
}

function clamp(
  value: number,
  min: number,
  max: number
) {
  return Math.max(
    min,
    Math.min(max, value)
  );
}

function getAnchor(
  node: TechNode
): Point {
  /*
   * IMPORTANT:
   * Use the exact same coordinates
   * as the HTML service nodes in Hero.
   */
  return {
    x: node.x,
    y: node.y,
  };
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function ParticleNetwork({
  nodes,
  mouseX = 0,
  mouseY = 0,
  hoveredNode = null,
}: Props) {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null
    );

  const mouseRef = useRef({
    x: 0,
    y: 0,
    active: false,
  });

  /*
   * Keep hover state available without
   * constantly rebuilding the canvas.
   */
  const hoveredRef =
    useRef<string | null>(
      hoveredNode
    );

  useEffect(() => {
    hoveredRef.current =
      hoveredNode;
  }, [hoveredNode]);

  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d", {
        alpha: true,
        desynchronized: true,
      });

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    let raf = 0;
    let destroyed = false;
    let visible = true;

    let lastFrame = 0;
    let time = 0;

    /* ---------------------------------------------------------------------- */
    /* Performance                                                            */
    /* ---------------------------------------------------------------------- */

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const mobile =
      window.matchMedia(
        "(max-width: 767px)"
      ).matches;

    /*
     * Considerably lighter than the
     * previous 235 particle setup.
     */
    const particleCount =
      mobile ? 45 : 170;

    const coreParticleCount =
      mobile ? 12 : 42;

    const connectionDistance =
      mobile ? 95 : 145;

    const maxConnections =
      mobile ? 2 : 4;

    /*
     * Target roughly 45 FPS instead
     * of rendering unnecessary 60+ FPS.
     */
    const frameInterval =
      mobile
        ? 1000 / 30
        : 1000 / 45;

    const particles: Particle[] =
      [];

    const coreDots: CoreDot[] =
      [];

    let centerX = 0;
    let centerY = 0;

    /* ---------------------------------------------------------------------- */
    /* Spatial grid                                                           */
    /* ---------------------------------------------------------------------- */

    const CELL_SIZE =
      connectionDistance;

    const grid = new Map<
      string,
      number[]
    >();

    const getCellKey = (
      x: number,
      y: number
    ) => {
      const gx =
        Math.floor(
          x / CELL_SIZE
        );

      const gy =
        Math.floor(
          y / CELL_SIZE
        );

      return `${gx}:${gy}`;
    };

    const rebuildGrid = () => {
      grid.clear();

      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        const particle =
          particles[i];

        const key =
          getCellKey(
            particle.x,
            particle.y
          );

        const bucket =
          grid.get(key);

        if (bucket) {
          bucket.push(i);
        } else {
          grid.set(key, [i]);
        }
      }
    };

    /* ---------------------------------------------------------------------- */
    /* Resize                                                                 */
    /* ---------------------------------------------------------------------- */

    const createParticles = () => {
      const rng = seeded(
        Math.floor(
          width * 17 +
            height * 31
        ) || 82473
      );

      particles.length = 0;

      const radiusX =
        Math.min(
          width * 0.52,
          850
        );

      const radiusY =
        Math.min(
          height * 0.44,
          440
        );

      for (
        let i = 0;
        i < particleCount;
        i++
      ) {
        const angle =
          rng() * TAU;

        const distance =
          rng() < 0.74
            ? Math.pow(
                rng(),
                0.72
              ) * 0.78
            : 0.78 +
              rng() * 0.22;

        const horizontalScale =
          0.78 +
          rng() * 0.42;

        const verticalScale =
          0.78 +
          rng() * 0.32;

        const x =
          centerX +
          Math.cos(angle) *
            radiusX *
            distance *
            horizontalScale;

        const y =
          centerY +
          Math.sin(angle) *
            radiusY *
            distance *
            verticalScale;

        particles.push({
          x,
          y,

          baseX: x,
          baseY: y,

          vx:
            (rng() - 0.5) *
            0.1,

          vy:
            (rng() - 0.5) *
            0.1,

          size:
            rng() > 0.86
              ? 1.35 +
                rng() * 1.3
              : 0.55 +
                rng() * 0.85,

          alpha:
            0.22 +
            rng() * 0.58,

          phase:
            rng() * TAU,

          speed:
            0.00035 +
            rng() * 0.0009,

          twinkle:
            0.5 +
            rng() * 1.4,

          core:
            distance < 0.35,
        });
      }
    };

    const createCoreDots = () => {
      const rng =
        seeded(19473);

      coreDots.length = 0;

      const radius =
        Math.min(
          width,
          height
        ) * 0.18;

      for (
        let i = 0;
        i < coreParticleCount;
        i++
      ) {
        coreDots.push({
          angle:
            rng() * TAU,

          radius:
            Math.pow(
              rng(),
              1.65
            ) * radius,

          speed:
            (0.00035 +
              rng() *
                0.00065) *
            (rng() > 0.5
              ? 1
              : -1),

          size:
            0.55 +
            rng() * 1.2,

          alpha:
            0.42 +
            rng() * 0.4,
        });
      }
    };

    const resize = () => {
      const rect =
        canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      if (
        width <= 0 ||
        height <= 0
      ) {
        return;
      }

      /*
       * Lower DPR saves a lot of
       * canvas fill/stroke work.
       */
      dpr = Math.min(
        window.devicePixelRatio ||
          1,
        mobile ? 1 : 1.25
      );

      canvas.width =
        Math.round(
          width * dpr
        );

      canvas.height =
        Math.round(
          height * dpr
        );

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      centerX =
        width * 0.69;

      centerY =
        height * 0.49;

      createParticles();
      createCoreDots();
    };

    /* ---------------------------------------------------------------------- */
    /* Mouse                                                                   */
    /* ---------------------------------------------------------------------- */

    const getMouse = () => ({
      x:
        mouseRef.current.x *
        width,

      y:
        mouseRef.current.y *
        height,

      active:
        mouseRef.current.active,
    });

    const updateParticles =
      () => {
        const mouse =
          getMouse();

        for (
          const particle of
            particles
        ) {
          if (!reducedMotion) {
            particle.phase +=
              particle.speed;

            const targetX =
              particle.baseX +
              Math.cos(
                particle.phase
              ) *
                0.22;

            const targetY =
              particle.baseY +
              Math.sin(
                particle.phase *
                  0.85
              ) *
                0.16;

            particle.vx +=
              (targetX -
                particle.x) *
              0.00085;

            particle.vy +=
              (targetY -
                particle.y) *
              0.00085;

            particle.vx *=
              0.986;

            particle.vy *=
              0.986;

            particle.x +=
              particle.vx;

            particle.y +=
              particle.vy;
          }

          if (mouse.active) {
            const dx =
              particle.x -
              mouse.x;

            const dy =
              particle.y -
              mouse.y;

            const distance =
              Math.sqrt(
                dx * dx +
                  dy * dy
              );

            if (
              distance < 120 &&
              distance > 1
            ) {
              const force =
                (1 -
                  distance /
                    120) *
                0.18;

              particle.x +=
                (dx / distance) *
                force;

              particle.y +=
                (dy / distance) *
                force;
            }
          }
        }
      };

    /* ---------------------------------------------------------------------- */
    /* Optimized particle connections                                         */
    /* ---------------------------------------------------------------------- */

    const drawConnections =
      () => {
        const activeMouse =
          getMouse();

        rebuildGrid();

        for (
          let i = 0;
          i < particles.length;
          i++
        ) {
          const a =
            particles[i];

          const gx =
            Math.floor(
              a.x / CELL_SIZE
            );

          const gy =
            Math.floor(
              a.y / CELL_SIZE
            );

          let connected = 0;

          /*
           * Only inspect nearby cells instead
           * of every other particle.
           */
          for (
            let ox = -1;
            ox <= 1;
            ox++
          ) {
            for (
              let oy = -1;
              oy <= 1;
              oy++
            ) {
              if (
                connected >=
                maxConnections
              ) {
                break;
              }

              const bucket =
                grid.get(
                  `${gx + ox}:${
                    gy + oy
                  }`
                );

              if (!bucket) {
                continue;
              }

              for (
                const j of bucket
              ) {
                if (
                  j <= i ||
                  connected >=
                    maxConnections
                ) {
                  continue;
                }

                const b =
                  particles[j];

                const dx =
                  a.x - b.x;

                const dy =
                  a.y - b.y;

                const distanceSq =
                  dx * dx +
                  dy * dy;

                const maxDistanceSq =
                  connectionDistance *
                  connectionDistance;

                if (
                  distanceSq >=
                  maxDistanceSq
                ) {
                  continue;
                }

                const distance =
                  Math.sqrt(
                    distanceSq
                  );

                let alpha =
                  (1 -
                    distance /
                      connectionDistance) *
                  (a.core ||
                  b.core
                    ? 0.26
                    : 0.15);

                if (
                  activeMouse.active
                ) {
                  const midX =
                    (a.x + b.x) *
                    0.5;

                  const midY =
                    (a.y + b.y) *
                    0.5;

                  const mouseDistance =
                    Math.hypot(
                      midX -
                        activeMouse.x,
                      midY -
                        activeMouse.y
                    );

                  if (
                    mouseDistance <
                    150
                  ) {
                    alpha +=
                      (1 -
                        mouseDistance /
                          150) *
                      0.14;
                  }
                }

                /*
                 * Glow.
                 */
                ctx.beginPath();

                ctx.moveTo(
                  a.x,
                  a.y
                );

                ctx.lineTo(
                  b.x,
                  b.y
                );

                ctx.strokeStyle =
                  `rgba(65,125,255,${
                    clamp(
                      alpha *
                        0.28,
                      0.01,
                      0.11
                    )
                  })`;

                ctx.lineWidth =
                  distance < 65
                    ? 3
                    : 2;

                ctx.stroke();

                /*
                 * Main network line.
                 */
                ctx.beginPath();

                ctx.moveTo(
                  a.x,
                  a.y
                );

                ctx.lineTo(
                  b.x,
                  b.y
                );

                ctx.strokeStyle =
                  `rgba(105,155,255,${
                    clamp(
                      alpha,
                      0.035,
                      0.38
                    )
                  })`;

                ctx.lineWidth =
                  distance < 65
                    ? 1.35
                    : 0.8;

                ctx.stroke();

                connected++;
              }
            }
          }
        }
      };

    /* ---------------------------------------------------------------------- */
    /* Particles                                                               */
    /* ---------------------------------------------------------------------- */

    const drawParticles =
      () => {
        for (
          const particle of
            particles
        ) {
          const pulse =
            reducedMotion
              ? 1
              : 0.74 +
                Math.sin(
                  time *
                    particle.twinkle +
                    particle.phase
                ) *
                  0.26;

          const alpha =
            clamp(
              particle.alpha *
                pulse,
              0.05,
              1
            );

          ctx.beginPath();

          ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            TAU
          );

          ctx.fillStyle =
            `rgba(153,190,255,${alpha})`;

          ctx.fill();

          if (
            particle.size >
            1.45
          ) {
            ctx.beginPath();

            ctx.arc(
              particle.x,
              particle.y,
              particle.size *
                2.4,
              0,
              TAU
            );

            ctx.fillStyle =
              `rgba(85,135,255,${
                alpha *
                0.06
              })`;

            ctx.fill();
          }
        }
      };

    /* ---------------------------------------------------------------------- */
    /* Core                                                                    */
    /* ---------------------------------------------------------------------- */

    const drawCore = () => {
      const coreRadius =
        Math.min(
          width,
          height
        ) * 0.18;

      const glow =
        ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          coreRadius *
            1.65
        );

      glow.addColorStop(
        0,
        "rgba(75,120,255,0.11)"
      );

      glow.addColorStop(
        0.48,
        "rgba(50,90,220,0.035)"
      );

      glow.addColorStop(
        1,
        "rgba(20,40,100,0)"
      );

      ctx.fillStyle =
        glow;

      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        coreRadius * 1.65,
        0,
        TAU
      );

      ctx.fill();

      for (
        const dot of coreDots
      ) {
        if (!reducedMotion) {
          dot.angle +=
            dot.speed;
        }

        const x =
          centerX +
          Math.cos(
            dot.angle
          ) *
            dot.radius;

        const y =
          centerY +
          Math.sin(
            dot.angle
          ) *
            dot.radius *
            0.72;

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          dot.size,
          0,
          TAU
        );

        ctx.fillStyle =
          `rgba(151,191,255,${dot.alpha})`;

        ctx.fill();
      }

      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        2.2,
        0,
        TAU
      );

      ctx.fillStyle =
        "rgba(215,230,255,0.98)";

      ctx.shadowBlur = 16;

      ctx.shadowColor =
        "rgba(95,145,255,0.95)";

      ctx.fill();

      ctx.shadowBlur = 0;
    };

    /* ---------------------------------------------------------------------- */
    /* Branches                                                                */
    /* ---------------------------------------------------------------------- */

    const drawBranch = (
      target: Point,
      nodeId: string,
      index: number
    ) => {
      const tx =
        target.x * width;

      const ty =
        target.y * height;

      const dx =
        tx - centerX;

      const dy =
        ty - centerY;

      const length =
        Math.hypot(
          dx,
          dy
        );

      if (length < 20) {
        return;
      }

      const nx =
        -dy / length;

      const ny =
        dx / length;

      const segments =
        mobile ? 7 : 11;

      const points: Point[] =
        [
          {
            x: centerX,
            y: centerY,
          },
        ];

      const seed =
        index * 91.37 +
        17.2;

      for (
        let i = 1;
        i < segments;
        i++
      ) {
        const t =
          i / segments;

        const envelope =
          Math.sin(
            Math.PI * t
          );

        const wobble =
          Math.sin(
            seed +
              i * 2.41
          ) *
          (mobile
            ? 3.5
            : 7.5) *
          envelope;

        points.push({
          x:
            centerX +
            dx * t +
            nx * wobble,

          y:
            centerY +
            dy * t +
            ny * wobble,
        });
      }

      points.push({
        x: tx,
        y: ty,
      });

      const hovered =
        hoveredRef.current ===
        nodeId;

      const baseAlpha =
        hovered
          ? 0.82
          : 0.48;

      /* Glow */
      ctx.save();

      ctx.beginPath();

      ctx.moveTo(
        points[0].x,
        points[0].y
      );

      for (
        let i = 1;
        i < points.length;
        i++
      ) {
        ctx.lineTo(
          points[i].x,
          points[i].y
        );
      }

      ctx.strokeStyle =
        `rgba(55,110,255,${
          baseAlpha * 0.18
        })`;

      ctx.lineWidth =
        hovered ? 12 : 8;

      ctx.shadowBlur =
        hovered ? 18 : 12;

      ctx.shadowColor =
        "rgba(55,115,255,0.7)";

      ctx.stroke();

      ctx.restore();

      /* Bold branch */
      ctx.beginPath();

      ctx.moveTo(
        points[0].x,
        points[0].y
      );

      for (
        let i = 1;
        i < points.length;
        i++
      ) {
        ctx.lineTo(
          points[i].x,
          points[i].y
        );
      }

      ctx.strokeStyle =
        `rgba(82,139,255,${baseAlpha})`;

      ctx.lineWidth =
        hovered ? 3 : 2.1;

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.stroke();

      /* Bright center */
      ctx.beginPath();

      ctx.moveTo(
        points[0].x,
        points[0].y
      );

      for (
        let i = 1;
        i < points.length;
        i++
      ) {
        ctx.lineTo(
          points[i].x,
          points[i].y
        );
      }

      ctx.strokeStyle =
        `rgba(145,184,255,${
          hovered
            ? 0.82
            : 0.58
        })`;

      ctx.lineWidth =
        hovered ? 1.2 : 0.9;

      ctx.stroke();

      /* Moving energy */
      if (!reducedMotion) {
        const progress =
          (
            time *
              (0.00022 +
                index *
                  0.000012) +
            index * 0.137
          ) % 1;

        const segmentFloat =
          progress *
          (points.length - 1);

        const segmentIndex =
          Math.min(
            Math.floor(
              segmentFloat
            ),
            points.length - 2
          );

        const localT =
          segmentFloat -
          segmentIndex;

        const a =
          points[
            segmentIndex
          ];

        const b =
          points[
            segmentIndex + 1
          ];

        const px =
          a.x +
          (b.x - a.x) *
            localT;

        const py =
          a.y +
          (b.y - a.y) *
            localT;

        ctx.beginPath();

        ctx.arc(
          px,
          py,
          hovered ? 1.8 : 1.4,
          0,
          TAU
        );

        ctx.fillStyle =
          "rgba(215,232,255,1)";

        ctx.shadowBlur =
          hovered ? 15 : 9;

        ctx.shadowColor =
          "rgba(80,145,255,1)";

        ctx.fill();

        ctx.shadowBlur = 0;
      }

      /* Endpoint */
      ctx.beginPath();

      ctx.arc(
        tx,
        ty,
        hovered ? 4.5 : 3.4,
        0,
        TAU
      );

      ctx.fillStyle =
        hovered
          ? "rgba(205,228,255,1)"
          : "rgba(145,190,255,0.95)";

      ctx.shadowBlur =
        hovered ? 16 : 9;

      ctx.shadowColor =
        "rgba(75,135,255,0.9)";

      ctx.fill();

      ctx.shadowBlur = 0;
    };

    const drawBranches =
      () => {
        for (
          let i = 0;
          i < nodes.length;
          i++
        ) {
          const node =
            nodes[i];

          drawBranch(
            getAnchor(node),
            node.id,
            i
          );
        }
      };

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    const render = (
      timestamp: number
    ) => {
      if (destroyed) {
        return;
      }

      raf =
        requestAnimationFrame(
          render
        );

      if (!visible) {
        return;
      }

      /*
       * FPS limiter.
       */
      if (
        timestamp -
          lastFrame <
        frameInterval
      ) {
        return;
      }

      lastFrame = timestamp;
      time = timestamp;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      updateParticles();

      drawConnections();

      drawBranches();

      drawParticles();

      drawCore();
    };

    /* ---------------------------------------------------------------------- */
    /* Pointer                                                                 */
    /* ---------------------------------------------------------------------- */

    const handlePointerMove =
      (event: PointerEvent) => {
        const rect =
          canvas.getBoundingClientRect();

        mouseRef.current.x =
          (event.clientX -
            rect.left) /
          Math.max(
            rect.width,
            1
          );

        mouseRef.current.y =
          (event.clientY -
            rect.top) /
          Math.max(
            rect.height,
            1
          );

        mouseRef.current.active =
          true;
      };

    const handlePointerLeave =
      () => {
        mouseRef.current.active =
          false;
      };

    /* ---------------------------------------------------------------------- */
    /* Visibility                                                              */
    /* ---------------------------------------------------------------------- */

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          visible =
            entry.isIntersecting;
        },
        {
          threshold: 0.01,
        }
      );

    observer.observe(canvas);

    canvas.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    canvas.addEventListener(
      "pointerleave",
      handlePointerLeave,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      resize,
      {
        passive: true,
      }
    );

    resize();

    raf =
      requestAnimationFrame(
        render
      );

    return () => {
      destroyed = true;

      cancelAnimationFrame(
        raf
      );

      observer.disconnect();

      canvas.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      canvas.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, [nodes]);

  void mouseX;
  void mouseY;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}