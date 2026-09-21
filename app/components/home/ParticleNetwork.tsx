"use client";

import { useEffect, useRef, type RefObject } from "react";

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
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
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

const SERVICE_ANCHORS: Record<string, Point> = {
  web: { x: 0.605, y: 0.228 },
  "web-development": { x: 0.605, y: 0.228 },
  seo: { x: 0.722, y: 0.249 },
  marketing: { x: 0.819, y: 0.386 },
  ai: { x: 0.832, y: 0.601 },
  "ai-automation": { x: 0.832, y: 0.601 },
  automation: { x: 0.832, y: 0.601 },
  mobile: { x: 0.717, y: 0.794 },
  "mobile-apps": { x: 0.717, y: 0.794 },
  ecommerce: { x: 0.517, y: 0.745 },
  "e-commerce": { x: 0.517, y: 0.745 },
  "e-commerce-development": { x: 0.517, y: 0.745 },
  strategy: { x: 0.45, y: 0.42 },
};

function normalizeNodeId(node: TechNode) {
  return `${node.id} ${node.label} ${node.shortLabel}`
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getAnchor(node: TechNode): Point {
  const id = normalizeNodeId(node);

  if (SERVICE_ANCHORS[id]) return SERVICE_ANCHORS[id];

  const value = `${node.id} ${node.label} ${node.shortLabel}`.toLowerCase();

  if (value.includes("strategy")) return SERVICE_ANCHORS.strategy;
  if (value.includes("web")) return SERVICE_ANCHORS.web;
  if (value.includes("seo")) return SERVICE_ANCHORS.seo;
  if (value.includes("marketing")) return SERVICE_ANCHORS.marketing;
  if (value.includes("ai") || value.includes("automation")) {
    return SERVICE_ANCHORS.ai;
  }
  if (value.includes("mobile") || value.includes("app")) {
    return SERVICE_ANCHORS.mobile;
  }
  if (value.includes("commerce") || value.includes("ecommerce")) {
    return SERVICE_ANCHORS.ecommerce;
  }

  return { x: node.x, y: node.y };
}

function seeded(seed: number) {
  let value = seed;

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default function ParticleNetwork({
  nodes,
  mouseX = 0,
  mouseY = 0,
  hoveredNode = null,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let destroyed = false;
    let time = 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mobile = window.matchMedia("(max-width: 767px)").matches;

    const particleCount = mobile ? 70 : 235;
    const coreParticleCount = mobile ? 18 : 65;
    const connectionDistance = mobile ? 105 : 155;
    const maxConnections = mobile ? 3 : 5;

    const particles: Particle[] = [];
    const coreDots: CoreDot[] = [];

    let centerX = 0;
    let centerY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      if (width <= 0 || height <= 0) return;

      dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.15 : 1.5);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      centerX = width * 0.69;
      centerY = height * 0.49;

      createParticles();
      createCoreDots();
    };

    const createParticles = () => {
      const rng = seeded(
        Math.floor(width * 17 + height * 31) || 82473
      );

      particles.length = 0;

      const radiusX = Math.min(width * 0.57, 900);
      const radiusY = Math.min(height * 0.48, 470);

      for (let i = 0; i < particleCount; i++) {
        const angle = rng() * TAU;

        // Dense center, thinner outer edge.
        const distance =
          rng() < 0.72
            ? Math.pow(rng(), 0.72) * 0.78
            : 0.78 + rng() * 0.22;

        const horizontalScale = 0.78 + rng() * 0.44;
        const verticalScale = 0.78 + rng() * 0.34;

        const x =
          centerX +
          Math.cos(angle) * radiusX * distance * horizontalScale;

        const y =
          centerY +
          Math.sin(angle) * radiusY * distance * verticalScale;

        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (rng() - 0.5) * 0.12,
          vy: (rng() - 0.5) * 0.12,
          size: rng() > 0.84 ? 1.35 + rng() * 1.5 : 0.55 + rng() * 0.95,
          alpha: 0.25 + rng() * 0.62,
          phase: rng() * TAU,
          speed: 0.00035 + rng() * 0.0011,
          twinkle: 0.5 + rng() * 1.6,
          core: distance < 0.35,
        });
      }
    };

    const createCoreDots = () => {
      const rng = seeded(19473);
      coreDots.length = 0;

      const radius = Math.min(width, height) * 0.185;

      for (let i = 0; i < coreParticleCount; i++) {
        coreDots.push({
          angle: rng() * TAU,
          radius: Math.pow(rng(), 1.65) * radius,
          speed: (0.00035 + rng() * 0.00075) * (rng() > 0.5 ? 1 : -1),
          size: 0.55 + rng() * 1.35,
          alpha: 0.45 + rng() * 0.45,
        });
      }
    };

    const getMouse = () => {
      return {
        x: mouseRef.current.x * width,
        y: mouseRef.current.y * height,
        active: mouseRef.current.active,
      };
    };

    const updateParticles = () => {
      const mouse = getMouse();

      for (const particle of particles) {
        if (!reducedMotion) {
          particle.phase += particle.speed;

          const orbitX = Math.cos(particle.phase) * 0.22;
          const orbitY = Math.sin(particle.phase * 0.85) * 0.16;

          const targetX = particle.baseX + orbitX;
          const targetY = particle.baseY + orbitY;

          particle.vx += (targetX - particle.x) * 0.0009;
          particle.vy += (targetY - particle.y) * 0.0009;

          particle.vx *= 0.985;
          particle.vy *= 0.985;

          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130 && distance > 1) {
            const force = (1 - distance / 130) * 0.22;
            particle.x += (dx / distance) * force;
            particle.y += (dy / distance) * force;
          }
        }
      }
    };

    const drawConnections = () => {
      const activeMouse = getMouse();

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        let connected = 0;

        const candidates: Array<{ index: number; distance: number }> = [];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            candidates.push({ index: j, distance });
          }
        }

        candidates.sort((p, q) => p.distance - q.distance);

        for (const candidate of candidates) {
          if (connected >= maxConnections) break;

          const b = particles[candidate.index];
          const distance = candidate.distance;

          let alpha =
            (1 - distance / connectionDistance) *
            (a.core || b.core ? 0.19 : 0.11);

          if (activeMouse.active) {
            const midX = (a.x + b.x) * 0.5;
            const midY = (a.y + b.y) * 0.5;
            const mouseDistance = Math.hypot(
              midX - activeMouse.x,
              midY - activeMouse.y
            );

            if (mouseDistance < 170) {
              alpha += (1 - mouseDistance / 170) * 0.15;
            }
          }

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(105, 155, 255, ${clamp(alpha, 0, 0.28)})`;
          ctx.lineWidth = distance < 70 ? 0.7 : 0.45;
          ctx.stroke();

          connected++;
        }
      }
    };

    const drawParticles = () => {
      for (const particle of particles) {
        const pulse = reducedMotion
          ? 1
          : 0.72 + Math.sin(time * particle.twinkle + particle.phase) * 0.28;

        const alpha = clamp(particle.alpha * pulse, 0.05, 1);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, TAU);
        ctx.fillStyle = `rgba(153, 190, 255, ${alpha})`;
        ctx.fill();

        if (particle.size > 1.45) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2.6, 0, TAU);
          ctx.fillStyle = `rgba(85, 135, 255, ${alpha * 0.075})`;
          ctx.fill();
        }
      }
    };

    const drawCore = () => {
      const coreRadius = Math.min(width, height) * 0.19;

      // Very subtle central atmosphere.
      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        coreRadius * 1.7
      );

      glow.addColorStop(0, "rgba(75, 120, 255, 0.10)");
      glow.addColorStop(0.48, "rgba(50, 90, 220, 0.035)");
      glow.addColorStop(1, "rgba(20, 40, 100, 0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 1.7, 0, TAU);
      ctx.fill();

      for (const dot of coreDots) {
        if (!reducedMotion) {
          dot.angle += dot.speed;
        }

        const x = centerX + Math.cos(dot.angle) * dot.radius;
        const y =
          centerY +
          Math.sin(dot.angle) * dot.radius * 0.72;

        ctx.beginPath();
        ctx.arc(x, y, dot.size, 0, TAU);
        ctx.fillStyle = `rgba(151, 191, 255, ${dot.alpha})`;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, 2.1, 0, TAU);
      ctx.fillStyle = "rgba(205, 225, 255, 0.95)";
      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(95, 145, 255, 0.95)";
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawBranch = (
      target: Point,
      nodeId: string,
      index: number
    ) => {
      const tx = target.x * width;
      const ty = target.y * height;

      const dx = tx - centerX;
      const dy = ty - centerY;
      const length = Math.hypot(dx, dy);

      if (length < 20) return;

      const nx = -dy / length;
      const ny = dx / length;

      // Slightly irregular multi-segment "thunder" path.
      const segments = mobile ? 8 : 12;
      const points: Point[] = [{ x: centerX, y: centerY }];

      const seed = index * 91.37 + 17.2;

      for (let i = 1; i < segments; i++) {
        const t = i / segments;
        const envelope = Math.sin(Math.PI * t);
        const wobble =
          Math.sin(seed + i * 2.41) *
          (mobile ? 3.5 : 7.5) *
          envelope;

        points.push({
          x: centerX + dx * t + nx * wobble,
          y: centerY + dy * t + ny * wobble,
        });
      }

      points.push({ x: tx, y: ty });

      const active =
        hoveredNode === nodeId ||
        hoveredNode === null;

      // Dim long branch network slightly; hovered branch gets a brighter core.
      const baseAlpha = hoveredNode === nodeId ? 0.62 : 0.24;

      // Soft glow.
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }

      ctx.strokeStyle = `rgba(72, 126, 255, ${baseAlpha * 0.20})`;
      ctx.lineWidth = hoveredNode === nodeId ? 7 : 4;
      ctx.shadowBlur = hoveredNode === nodeId ? 16 : 9;
      ctx.shadowColor = "rgba(70, 125, 255, 0.8)";
      ctx.stroke();
      ctx.restore();

      // Thin electric line.
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }

      ctx.strokeStyle = `rgba(112, 161, 255, ${
        active ? baseAlpha : baseAlpha * 0.55
      })`;
      ctx.lineWidth = hoveredNode === nodeId ? 1.25 : 0.72;
      ctx.stroke();

      // Small energy particles moving along each branch.
      if (!reducedMotion) {
        const progress =
          ((time * (0.00022 + index * 0.000012) + index * 0.137) % 1);

        const segmentFloat = progress * (points.length - 1);
        const segmentIndex = Math.min(
          Math.floor(segmentFloat),
          points.length - 2
        );
        const localT = segmentFloat - segmentIndex;

        const a = points[segmentIndex];
        const b = points[segmentIndex + 1];

        const px = a.x + (b.x - a.x) * localT;
        const py = a.y + (b.y - a.y) * localT;

        ctx.beginPath();
        ctx.arc(px, py, 1.35, 0, TAU);
        ctx.fillStyle = "rgba(190, 218, 255, 0.95)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(80, 140, 255, 0.9)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Filled node endpoint.
      ctx.beginPath();
      ctx.arc(tx, ty, hoveredNode === nodeId ? 4.4 : 3.3, 0, TAU);
      ctx.fillStyle =
        hoveredNode === nodeId
          ? "rgba(190, 220, 255, 1)"
          : "rgba(132, 176, 255, 0.92)";
      ctx.shadowBlur = hoveredNode === nodeId ? 18 : 10;
      ctx.shadowColor = "rgba(75, 130, 255, 0.9)";
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(tx, ty, hoveredNode === nodeId ? 8 : 6, 0, TAU);
      ctx.strokeStyle = `rgba(100, 155, 255, ${
        hoveredNode === nodeId ? 0.36 : 0.16
      })`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    };

    const drawBranches = () => {
      nodes.forEach((node, index) => {
        drawBranch(getAnchor(node), node.id, index);
      });
    };

    const render = (timestamp: number) => {
      if (destroyed) return;

      time = timestamp;

      if (!visible) {
        raf = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      updateParticles();
      drawConnections();
      drawBranches();
      drawParticles();
      drawCore();

      raf = requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouseRef.current.x =
        (event.clientX - rect.left) / Math.max(rect.width, 1);

      mouseRef.current.y =
        (event.clientY - rect.top) / Math.max(rect.height, 1);

      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );

    observer.observe(canvas);

    canvas.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    canvas.addEventListener("pointerleave", handlePointerLeave, {
      passive: true,
    });

    window.addEventListener("resize", resize, { passive: true });

    resize();
    raf = requestAnimationFrame(render);

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();

      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", resize);
    };
  }, [nodes, hoveredNode]);

  // Keep the props intentionally referenced so Hero's motion values remain
  // part of the public component API without forcing a render loop from them.
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
