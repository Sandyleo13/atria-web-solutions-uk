"use client";

import { useEffect, useRef } from "react";

/* ============================================================
   SERVICE NODES
============================================================ */

const NODES = [
  {
    key: "web",
    label: ["WEB", "DEVELOPMENT"],
    angle: -72,
    dist: 0.30,
    labelSide: "left",
  },
  {
    key: "seo",
    label: ["SEO"],
    angle: -28,
    dist: 0.36,
    labelSide: "right",
  },
  {
    key: "marketing",
    label: ["MARKETING"],
    angle: 8,
    dist: 0.43,
    labelSide: "right",
  },
  {
    key: "ai",
    label: ["AI &", "AUTOMATION"],
    angle: 38,
    dist: 0.47,
    labelSide: "right",
  },
  {
    key: "mobile",
    label: ["MOBILE APPS"],
    angle: 68,
    dist: 0.39,
    labelSide: "right",
  },
  {
    key: "commerce",
    label: ["E-COMMERCE"],
    angle: 118,
    dist: 0.34,
    labelSide: "right",
  },
  {
    key: "strategy",
    label: ["STRATEGY"],
    angle: 168,
    dist: 0.32,
    labelSide: "left",
  },
] as const;

/* ============================================================
   SEEDED RANDOM
   Keeps the network identical between renders.
============================================================ */

function seeded(seed: number) {
  let s = seed;

  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* ============================================================
   TYPES
============================================================ */

type Point = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  phase: number;
  speed: number;
};

type Edge = {
  a: number;
  b: number;
  alpha: number;
};

/* ============================================================
   COMPONENT
============================================================ */

export default function ParticleNetwork() {
  const staticCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const staticCanvas = staticCanvasRef.current;
    const animationCanvas = animationCanvasRef.current;

    if (!staticCanvas || !animationCanvas) return;

    const staticCtx = staticCanvas.getContext("2d", {
      alpha: true,
    });

    const ctx = animationCanvas.getContext("2d", {
      alpha: true,
    });

    if (!staticCtx || !ctx) return;

    let W = 0;
    let H = 0;
    let dpr = 1;

    let raf = 0;
    let time = 0;

    let isVisible = true;

    let touchedNode: string | null = null;

    /* ========================================================
       REDUCED MOTION
    ======================================================== */

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    /* ========================================================
       PARTICLE DATA
    ======================================================== */

    const rng = seeded(82473);

    const particles: Point[] = [];
    const edges: Edge[] = [];

    /*
      Dense central network.

      The screenshot has most of the activity around the
      right side of the hero, rather than the entire canvas.
    */

    const PARTICLE_COUNT = 185;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = rng() * Math.PI * 2;

      /*
        Elliptical distribution around the center.
      */

      const radius = Math.pow(rng(), 0.62);

      const x =
        0.665 +
        Math.cos(angle) * radius * (0.34 + rng() * 0.15);

      const y =
        0.455 +
        Math.sin(angle) * radius * (0.32 + rng() * 0.10);

      particles.push({
        x,
        y,
        r: 0.8 + rng() * 2,
        alpha: 0.28 + rng() * 0.72,
        phase: rng() * Math.PI * 2,
        speed: 0.0008 + rng() * 0.0018,
      });
    }

    /*
      Add a second outer cloud of faint particles.
    */

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: 0.38 + rng() * 0.59,
        y: 0.08 + rng() * 0.78,
        r: 0.55 + rng() * 1.5,
        alpha: 0.14 + rng() * 0.42,
        phase: rng() * Math.PI * 2,
        speed: 0.0005 + rng() * 0.0012,
      });
    }

    /*
      Build deterministic connections.

      We calculate this once instead of checking every pair
      on every animation frame.
    */

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];

        const dx = (a.x - b.x) * 1536;
        const dy = (a.y - b.y) * 1024;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 125 && rng() > 0.42) {
          edges.push({
            a: i,
            b: j,
            alpha: 0.04 + rng() * 0.13,
          });
        }
      }
    }

    /* ========================================================
       RESIZE
    ======================================================== */

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);

      const rect = animationCanvas.getBoundingClientRect();

      W = rect.width;
      H = rect.height;

      for (const canvas of [staticCanvas, animationCanvas]) {
        canvas.width = Math.floor(W * dpr);
        canvas.height = Math.floor(H * dpr);

        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;
      }

      staticCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      drawStaticNetwork();
    };

    /* ========================================================
       CORE POSITION
    ======================================================== */

    const getCore = () => {
      /*
        Desktop reference:
        X ≈ 65.5%
        Y ≈ 44%
      */

      const desktop = W >= 900;

      const baseX = desktop ? W * 0.655 : W * 0.5;
      const baseY = desktop ? H * 0.445 : H * 0.68;

      return {
        x: baseX,
        y: baseY,
      };
    };

    /* ========================================================
       NODE POSITION
    ======================================================== */

    const getNodePosition = (
      node: (typeof NODES)[number]
    ) => {
      const { x: cx, y: cy } = getCore();

      const desktop = W >= 900;

      /*
        On desktop use a radius based primarily on width.
        This gives a much closer match to the reference.
      */

      const radius = desktop
        ? Math.min(W * 0.86, H * 0.9)
        : Math.min(W * 0.72, H * 0.48);

      const angle = (node.angle * Math.PI) / 180;

      return {
        x: cx + Math.cos(angle) * radius * node.dist,
        y: cy + Math.sin(angle) * radius * node.dist,
      };
    };

    /* ========================================================
       ICON DRAWING
    ======================================================== */

    const drawIcon = (
      icon: string,
      x: number,
      y: number,
      scale = 1
    ) => {
      ctx.save();

      ctx.translate(x, y);
      ctx.scale(scale, scale);

      ctx.strokeStyle = "rgba(235,245,255,0.95)";
      ctx.fillStyle = "rgba(235,245,255,0.95)";
      ctx.lineWidth = 1.25;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      /* ---------------- WEB ---------------- */

      if (icon === "web") {
        ctx.beginPath();
        ctx.moveTo(-7, -3);
        ctx.lineTo(-2, 0);
        ctx.lineTo(-7, 3);

        ctx.moveTo(1, 3);
        ctx.lineTo(7, 3);

        ctx.stroke();
      }

      /* ---------------- SEARCH ---------------- */

      if (icon === "seo") {
        ctx.beginPath();
        ctx.arc(-2, -2, 5.5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(2, 2);
        ctx.lineTo(7, 7);
        ctx.stroke();
      }

      /* ---------------- MARKETING ---------------- */

      if (icon === "marketing") {
        ctx.beginPath();

        ctx.moveTo(-7, -3);
        ctx.lineTo(0, -6);
        ctx.lineTo(0, 6);
        ctx.lineTo(-7, 3);
        ctx.closePath();

        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-9, -2);
        ctx.lineTo(-9, 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(3, -3);
        ctx.quadraticCurveTo(7, 0, 3, 3);
        ctx.stroke();
      }

      /* ---------------- AI ---------------- */

      if (icon === "ai") {
        for (let i = 0; i < 8; i++) {
          const a = (Math.PI * 2 * i) / 8;

          const x1 = Math.cos(a) * 3;
          const y1 = Math.sin(a) * 3;

          const x2 = Math.cos(a) * 8;
          const y2 = Math.sin(a) * 8;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      /* ---------------- MOBILE ---------------- */

      if (icon === "mobile") {
        ctx.beginPath();
        ctx.roundRect(-4.5, -7.5, 9, 15, 1.5);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 5, 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      /* ---------------- CART ---------------- */

      if (icon === "commerce") {
        ctx.beginPath();

        ctx.moveTo(-8, -5);
        ctx.lineTo(-5, -5);
        ctx.lineTo(-2, 4);
        ctx.lineTo(6, 4);
        ctx.lineTo(8, -2);
        ctx.lineTo(-4, -2);

        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 7, 1.3, 0, Math.PI * 2);
        ctx.arc(6, 7, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      /* ---------------- STRATEGY ---------------- */

      if (icon === "strategy") {
        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, -8);
        ctx.lineTo(0, 8);

        ctx.moveTo(-8, 0);
        ctx.lineTo(8, 0);

        ctx.stroke();
      }

      ctx.restore();
    };

    /* ========================================================
       STATIC NETWORK
    ======================================================== */

    const drawStaticNetwork = () => {
      staticCtx.clearRect(0, 0, W, H);

      /* Deep blue space lighting behind the right-weighted field. */
      const spaceGlow = staticCtx.createRadialGradient(
        W * 0.66,
        H * 0.45,
        0,
        W * 0.66,
        H * 0.45,
        Math.min(W, H) * 0.72
      );

      spaceGlow.addColorStop(0, "rgba(12,45,130,0.22)");
      spaceGlow.addColorStop(0.38, "rgba(6,24,80,0.12)");
      spaceGlow.addColorStop(1, "rgba(0,4,18,0)");
      staticCtx.fillStyle = spaceGlow;
      staticCtx.fillRect(0, 0, W, H);

      /*
        Network connections
      */

      for (const edge of edges) {
        const a = particles[edge.a];
        const b = particles[edge.b];

        const ax = a.x * W;
        const ay = a.y * H;

        const bx = b.x * W;
        const by = b.y * H;

        staticCtx.beginPath();
        staticCtx.moveTo(ax, ay);
        staticCtx.lineTo(bx, by);

        staticCtx.strokeStyle = `rgba(75,145,255,${
          edge.alpha * 1.35
        })`;
        staticCtx.lineWidth = 0.65;

        staticCtx.stroke();
      }

      /*
        Long atmospheric rays
      */

      const { x: cx, y: cy } = getCore();

      const rayCount = 55;
      const rayRng = seeded(4811);

      for (let i = 0; i < rayCount; i++) {
        const angle = rayRng() * Math.PI * 2;

        const startRadius = 50 + rayRng() * 100;
        const endRadius = 250 + rayRng() * 340;

        const x1 = cx + Math.cos(angle) * startRadius;
        const y1 = cy + Math.sin(angle) * startRadius;

        const x2 = cx + Math.cos(angle) * endRadius;
        const y2 = cy + Math.sin(angle) * endRadius;

        staticCtx.beginPath();
        staticCtx.moveTo(x1, y1);
        staticCtx.lineTo(x2, y2);

        staticCtx.strokeStyle = `rgba(40,100,255,${
          0.025 + rayRng() * 0.055
        })`;

        staticCtx.lineWidth = 0.5;
        staticCtx.stroke();
      }

      /*
        Background particles
      */

      for (const p of particles) {
        const x = p.x * W;
        const y = p.y * H;

        staticCtx.beginPath();
        staticCtx.arc(x, y, p.r, 0, Math.PI * 2);

        staticCtx.fillStyle = `rgba(150,205,255,${p.alpha})`;

        staticCtx.fill();
      }

      /* Tiny distant stars keep the field feeling atmospheric. */
      const starRng = seeded(9137);

      for (let i = 0; i < 70; i++) {
        const x = W * (0.34 + starRng() * 0.66);
        const y = H * (0.05 + starRng() * 0.86);
        const radius = 0.35 + starRng() * 0.8;
        const alpha = 0.12 + starRng() * 0.24;

        staticCtx.beginPath();
        staticCtx.arc(x, y, radius, 0, Math.PI * 2);
        staticCtx.fillStyle = `rgba(125,185,255,${alpha})`;
        staticCtx.fill();
      }
    };

    /* ========================================================
       LIGHTNING
    ======================================================== */

    const drawLightning = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      alpha: number,
      seed: number
    ) => {
      const dx = x2 - x1;
      const dy = y2 - y1;

      const length = Math.hypot(dx, dy);

      if (length < 1) return;

      const nx = -dy / length;
      const ny = dx / length;

      const random = seeded(seed + Math.floor(time / 18));

      const points: [number, number][] = [[x1, y1]];

      const segments = Math.max(16, Math.floor(length / 28));

      for (let i = 1; i < segments; i++) {
        const progress = i / segments;

        /*
          Less chaotic near the endpoints,
          stronger branching around the middle.
        */

        const falloff =
          Math.sin(progress * Math.PI) *
          length *
          0.055;

        const jitter = (random() - 0.5) * falloff;

        points.push([
          x1 + dx * progress + nx * jitter,
          y1 + dy * progress + ny * jitter,
        ]);
      }

      points.push([x2, y2]);

      /* Larger impact particles gather at the node contact point. */
      const contactPoint = points[points.length - 1];
      const contactBefore = points[points.length - 2];
      const contactAngle = Math.atan2(
        contactPoint[1] - contactBefore[1],
        contactPoint[0] - contactBefore[0]
      );

      for (let i = 0; i < 3; i++) {
        const contactProgress = 0.35 + i * 0.28;
        const contactX =
          contactBefore[0] +
          (contactPoint[0] - contactBefore[0]) * contactProgress;
        const contactY =
          contactBefore[1] +
          (contactPoint[1] - contactBefore[1]) * contactProgress;
        const spread = (i - 1) * 3.5;
        const particleX =
          contactX + Math.cos(contactAngle + Math.PI / 2) * spread;
        const particleY =
          contactY + Math.sin(contactAngle + Math.PI / 2) * spread;
        const particleSize = 1.8 + i * 0.45;
        const particleGlow = ctx.createRadialGradient(
          particleX,
          particleY,
          0,
          particleX,
          particleY,
          particleSize * 8
        );

        particleGlow.addColorStop(0, `rgba(245,252,255,${alpha})`);
        particleGlow.addColorStop(
          0.25,
          `rgba(105,195,255,${alpha * 0.75})`
        );
        particleGlow.addColorStop(1, "rgba(0,55,255,0)");

        ctx.fillStyle = particleGlow;
        ctx.beginPath();
        ctx.arc(particleX, particleY, particleSize * 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(240,250,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);
        ctx.fill();
      }

      /* Small luminous particles sit on selected electric waypoints. */
      for (let i = 1; i < points.length - 1; i++) {
        if (random() > 0.55) continue;

        const [particleX, particleY] = points[i];
        const particleSize = 0.6 + random() * 1.4;
        const particleGlow = ctx.createRadialGradient(
          particleX,
          particleY,
          0,
          particleX,
          particleY,
          particleSize * 7
        );

        particleGlow.addColorStop(
          0,
          `rgba(220,245,255,${alpha * 0.9})`
        );
        particleGlow.addColorStop(
          0.25,
          `rgba(80,170,255,${alpha * 0.55})`
        );
        particleGlow.addColorStop(1, "rgba(0,60,255,0)");

        ctx.fillStyle = particleGlow;
        ctx.beginPath();
        ctx.arc(
          particleX,
          particleY,
          particleSize * 7,
          0,
          Math.PI * 2
        );
        ctx.fill();

        ctx.fillStyle = `rgba(225,245,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);
        ctx.fill();
      }

      /*
        Outer glow
      */

      ctx.save();

      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
      }

      ctx.strokeStyle = `rgba(55,145,255,${alpha * 0.2})`;
      ctx.lineWidth = 2.2;
      ctx.shadowBlur = 16;
      ctx.shadowColor = `rgba(65,155,255,${alpha})`;

      ctx.stroke();

      ctx.restore();

      /*
        Main electric line
      */

      ctx.save();

      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
      }

      ctx.strokeStyle = `rgba(125,195,255,${alpha * 0.78})`;
      ctx.lineWidth = 0.55;

      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(110,195,255,${alpha})`;

      ctx.stroke();

      ctx.restore();

      /*
        Bright inner filament
      */

      ctx.save();

      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
      }

      ctx.strokeStyle = `rgba(235,248,255,${alpha * 0.9})`;
      ctx.lineWidth = 0.22;

      ctx.stroke();

      ctx.restore();

      /* Traveling sparks make each connection feel electrically alive. */
      const sparkRandom = seeded(seed + 771);

      for (let i = 0; i < 2; i++) {
        const progress =
          (time * (0.006 + sparkRandom() * 0.004) +
            seed * 0.001 +
            i * 0.47) %
          1;

        const segment = Math.min(
          points.length - 2,
          Math.floor(progress * (points.length - 1))
        );
        const localProgress =
          progress * (points.length - 1) - segment;
        const start = points[segment];
        const end = points[segment + 1];
        const sparkX =
          start[0] + (end[0] - start[0]) * localProgress;
        const sparkY =
          start[1] + (end[1] - start[1]) * localProgress;
        const sparkRadius = 1.5 + alpha * 1.5;
        const sparkGlow = ctx.createRadialGradient(
          sparkX,
          sparkY,
          0,
          sparkX,
          sparkY,
          sparkRadius * 8
        );

        sparkGlow.addColorStop(0, `rgba(220,245,255,${alpha})`);
        sparkGlow.addColorStop(0.25, `rgba(80,165,255,${alpha * 0.6})`);
        sparkGlow.addColorStop(1, "rgba(0,60,255,0)");

        ctx.fillStyle = sparkGlow;
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, sparkRadius * 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(235,250,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, sparkRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      /* Occasional side branches create short electrical discharges. */
      if (length > 180) {
        const branchRandom = seeded(seed + Math.floor(time / 28));

        for (let branch = 0; branch < 2; branch++) {
          if (branchRandom() < 0.5) continue;

          const index =
            4 + Math.floor(branchRandom() * (points.length - 8));
          const [branchX, branchY] = points[index];
          const branchAngle =
            Math.atan2(dy, dx) + (branchRandom() - 0.5) * 1.8;
          const branchLength = 25 + branchRandom() * 75;
          const endX =
            branchX + Math.cos(branchAngle) * branchLength;
          const endY =
            branchY + Math.sin(branchAngle) * branchLength;

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(branchX, branchY);

          for (let segment = 1; segment <= 5; segment++) {
            const progress = segment / 5;
            const jitter = (branchRandom() - 0.5) * 14;

            ctx.lineTo(
              branchX +
                (endX - branchX) * progress +
                Math.cos(branchAngle + Math.PI / 2) * jitter,
              branchY +
                (endY - branchY) * progress +
                Math.sin(branchAngle + Math.PI / 2) * jitter
            );
          }

          ctx.strokeStyle = `rgba(100,180,255,${alpha * 0.35})`;
          ctx.lineWidth = 0.65;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(70,150,255,0.8)";
          ctx.stroke();
          ctx.restore();
        }
      }
    };

    /* ========================================================
       NODE
    ======================================================== */

    const drawNode = (
      x: number,
      y: number,
      key: string,
      pulse: number,
      label: readonly string[],
      labelSide: "left" | "right",
      active = false
    ) => {
      const R = W >= 900 ? 34 : 22;
      const intensity = active ? 1 : pulse;

      /* Transparent eclipse node: glow and rings only, no interior fill. */
      ctx.save();

      const nodeGlow = ctx.createRadialGradient(
        x,
        y,
        R * 0.72,
        x,
        y,
        R * 1.7
      );

      nodeGlow.addColorStop(0, "rgba(40,130,255,0)");
      nodeGlow.addColorStop(
        0.72,
        `rgba(55,145,255,${0.08 + intensity * 0.08})`
      );
      nodeGlow.addColorStop(1, "rgba(0,60,255,0)");

      ctx.fillStyle = nodeGlow;
      ctx.beginPath();
      ctx.arc(x, y, R * 1.7, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.save();

      ctx.beginPath();
      ctx.arc(x, y, R, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(145,215,255,${
        0.62 + intensity * 0.3
      })`;
      ctx.lineWidth = 1.1;
      ctx.shadowBlur = 16;
      ctx.shadowColor = `rgba(65,155,255,${
        0.75 + intensity * 0.2
      })`;
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, R - 4, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(100,190,255,${
        0.28 + intensity * 0.15
      })`;
      ctx.lineWidth = 0.65;
      ctx.stroke();
      ctx.restore();

      /* Electric contact point where the bolt meets the circle. */
      const core = getCore();
      const dx = x - core.x;
      const dy = y - core.y;
      const distance = Math.hypot(dx, dy);

      if (distance > 0) {
        const contactX = x - (dx / distance) * (R - 1);
        const contactY = y - (dy / distance) * (R - 1);
        const contactGlow = ctx.createRadialGradient(
          contactX,
          contactY,
          0,
          contactX,
          contactY,
          15
        );

        contactGlow.addColorStop(
          0,
          `rgba(235,250,255,${active ? 1 : 0.9 + pulse * 0.1})`
        );
        contactGlow.addColorStop(
          0.2,
          `rgba(100,190,255,${0.7 + pulse * 0.2})`
        );
        contactGlow.addColorStop(0.55, "rgba(40,120,255,0.25)");
        contactGlow.addColorStop(1, "rgba(0,50,255,0)");

        ctx.fillStyle = contactGlow;
        ctx.beginPath();
        ctx.arc(contactX, contactY, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(240,250,255,0.98)";
        ctx.beginPath();
        ctx.arc(contactX, contactY, 2.2 + intensity, 0, Math.PI * 2);
        ctx.fill();
      }

      /*
        Icon
      */

      drawIcon(key, x, y, 1.05);

      /*
        Label outside the circle
      */

      if (W >= 640) {
        const labelX =
          labelSide === "right"
            ? x + R + 20
            : x - R - 20;

        ctx.save();
        ctx.font = "500 10px Inter, Arial, sans-serif";
        ctx.fillStyle = active
          ? "rgba(190,230,255,1)"
          : "rgba(245,248,255,0.88)";
        ctx.textAlign = labelSide === "right" ? "left" : "right";
        ctx.textBaseline = "middle";
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(100,170,255,0.2)";

        label.forEach((line, index) => {
          const offset =
            (index - (label.length - 1) / 2) * 14;

          ctx.fillText(line, labelX, y + offset);
        });

        ctx.restore();
      }
    };

    /* A few background links carry slower moving light particles. */
    const drawBackgroundSparks = () => {
      const sparkCount = Math.min(34, edges.length);

      for (let index = 0; index < sparkCount; index++) {
        const edge = edges[index * 3];

        if (!edge) continue;

        const a = particles[edge.a];
        const b = particles[edge.b];
        const progress =
          (time * 0.0025 + index * 0.19) % 1;
        const x =
          a.x * W + (b.x - a.x) * W * progress;
        const y =
          a.y * H + (b.y - a.y) * H * progress;
        const radius = 0.7 + (index % 3) * 0.25;
        const glow = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          radius * 7
        );

        glow.addColorStop(0, "rgba(190,230,255,0.8)");
        glow.addColorStop(0.3, "rgba(55,140,255,0.35)");
        glow.addColorStop(1, "rgba(0,50,255,0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, radius * 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(215,242,255,0.85)";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    /* ========================================================
       CORE
    ======================================================== */

    const drawCore = (cx: number, cy: number) => {
      const pulse =
        1 + Math.sin(time * 0.035) * 0.06;

      const R =
        Math.min(W, H) *
        (W >= 900 ? 0.052 : 0.065) *
        pulse;

      /*
        Massive atmospheric bloom
      */

      const bloom = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        R * 7
      );

      bloom.addColorStop(
        0,
        "rgba(100,180,255,0.17)"
      );

      bloom.addColorStop(
        0.2,
        "rgba(70,140,255,0.10)"
      );

      bloom.addColorStop(
        0.48,
        "rgba(40,100,255,0.045)"
      );

      bloom.addColorStop(
        1,
        "rgba(0,30,150,0)"
      );

      ctx.fillStyle = bloom;

      ctx.beginPath();
      ctx.arc(cx, cy, R * 7, 0, Math.PI * 2);
      ctx.fill();

      /* Eclipse silhouette with a narrow electric corona. */
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.22, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(95,175,255,0.72)";
      ctx.lineWidth = Math.max(1, R * 0.035);
      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(45,130,255,0.85)";
      ctx.stroke();
      ctx.fillStyle = "rgba(1,5,18,0.94)";
      ctx.fill();
      ctx.restore();

      /*
        Concentric energy rings
      */

      for (let i = 1; i <= 6; i++) {
        const ringRadius =
          R * (1.15 + i * 0.42);

        ctx.save();

        ctx.beginPath();
        ctx.arc(
          cx,
          cy,
          ringRadius,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle = `rgba(105,175,255,${
          0.18 - i * 0.018
        })`;

        ctx.lineWidth =
          i === 1 ? 1.2 : 0.6;

        ctx.shadowBlur =
          i <= 2 ? 8 : 3;

        ctx.shadowColor =
          "rgba(80,160,255,0.55)";

        ctx.stroke();

        ctx.restore();
      }

      /*
        Main white/blue core
      */

      const core = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        R * 1.7
      );

      core.addColorStop(0, "rgba(40,95,190,0.16)");

      core.addColorStop(0.07, "rgba(85,160,255,0.28)");

      core.addColorStop(
        0.16,
        "rgba(170,220,255,0.95)"
      );

      core.addColorStop(
        0.34,
        "rgba(85,155,255,0.55)"
      );

      core.addColorStop(
        0.65,
        "rgba(40,90,255,0.15)"
      );

      core.addColorStop(
        1,
        "rgba(0,40,220,0)"
      );

      ctx.save();

      ctx.fillStyle = core;

      ctx.shadowBlur = 35;
      ctx.shadowColor =
        "rgba(100,180,255,0.9)";

      ctx.beginPath();
      ctx.arc(
        cx,
        cy,
        R * 1.7,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();

      /*
        Bright center point
      */

      ctx.save();

      ctx.fillStyle = "rgba(0,4,16,0.96)";

      ctx.shadowBlur = 16;
      ctx.shadowColor = "rgba(90,170,255,0.9)";

      ctx.beginPath();
      ctx.arc(
        cx,
        cy,
        4.5 * pulse,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();
    };

    /* ========================================================
       ANIMATION FRAME
    ======================================================== */

    const animate = () => {
      if (!isVisible) {
        raf = requestAnimationFrame(animate);
        return;
      }

      time += reducedMotion.matches ? 0.25 : 1;

      ctx.clearRect(0, 0, W, H);

      const { x: cx, y: cy } = getCore();

      /*
        Animate subtle particle glow only.
        The expensive network itself is static.
      */

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const x =
          p.x * W +
          Math.sin(
            time * p.speed + p.phase
          ) *
            1.3;

        const y =
          p.y * H +
          Math.cos(
            time * p.speed * 0.8 + p.phase
          ) *
            1.3;

        const pulse =
          0.65 +
          Math.sin(
            time * p.speed * 3 +
              p.phase
          ) *
            0.35;

        /*
          Only glow brighter particles.
        */

        if (p.alpha > 0.28) {
          ctx.beginPath();

          ctx.arc(
            x,
            y,
            p.r * (1 + pulse * 0.35),
            0,
            Math.PI * 2
          );

          ctx.fillStyle = `rgba(205,235,255,${
            p.alpha * pulse
          })`;

          ctx.fill();
        }
      }

      drawBackgroundSparks();

      /*
        Core → service lightning
      */

      NODES.forEach((node, index) => {
        const { x, y } = getNodePosition(node);
        const NODE_RADIUS = W >= 900 ? 34 : 22;
        const dx = x - cx;
        const dy = y - cy;
        const distance = Math.hypot(dx, dy);
        const endX = x - (dx / distance) * NODE_RADIUS;
        const endY = y - (dy / distance) * NODE_RADIUS;

        const pulse =
          0.5 +
          Math.sin(
            time * 0.018 + index * 0.9
          ) *
            0.5;

        drawLightning(
          cx,
          cy,
          endX,
          endY,
          0.65 + pulse * 0.3,
          index * 731 + 42
        );

        drawNode(
          x,
          y,
          node.key,
          pulse,
          node.label,
          node.labelSide,
          touchedNode === node.key
        );
      });

      /*
        Central core on top of everything
      */

      drawCore(cx, cy);

      raf = requestAnimationFrame(animate);
    };

    /* ========================================================
       MOUSE
    ======================================================== */

    const section = animationCanvas.parentElement;

    const getTouchedNode = (event: TouchEvent) => {
      const touch = event.touches[0] ?? event.changedTouches[0];

      if (!touch) return null;

      const rect = section?.getBoundingClientRect();

      if (!rect) return null;

      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;
      const hitRadius = 42;

      for (const node of NODES) {
        const position = getNodePosition(node);
        const distance = Math.hypot(
          touchX - position.x,
          touchY - position.y
        );

        if (distance <= hitRadius) return node.key;
      }

      return null;
    };

    const onTouchStart = (event: TouchEvent) => {
      touchedNode = getTouchedNode(event);
    };

    const onTouchMove = (event: TouchEvent) => {
      touchedNode = getTouchedNode(event);
    };

    const onTouchEnd = () => {
      touchedNode = null;
    };

    section?.addEventListener("touchstart", onTouchStart, {
      passive: true,
    });
    section?.addEventListener("touchmove", onTouchMove, {
      passive: true,
    });
    section?.addEventListener("touchend", onTouchEnd, {
      passive: true,
    });
    section?.addEventListener("touchcancel", onTouchEnd, {
      passive: true,
    });

    /* ========================================================
       VISIBILITY
       Stops animation when hero isn't visible.
    ======================================================== */

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;

          if (isVisible && !raf) {
            raf = requestAnimationFrame(
              animate
            );
          }
        },
        {
          threshold: 0.01,
        }
      );

    observer.observe(animationCanvas);

    /* ========================================================
       INITIALIZE
    ======================================================== */

    resize();

    window.addEventListener(
      "resize",
      resize,
      { passive: true }
    );

    raf = requestAnimationFrame(animate);

    /* ========================================================
       CLEANUP
    ======================================================== */

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener(
        "resize",
        resize
      );

      section?.removeEventListener("touchstart", onTouchStart);
      section?.removeEventListener("touchmove", onTouchMove);
      section?.removeEventListener("touchend", onTouchEnd);
      section?.removeEventListener("touchcancel", onTouchEnd);

      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Static expensive network layer */}
      <canvas
        ref={staticCanvasRef}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[1]
          h-full
          min-h-screen
          w-full
          lg:-left-[7.5%]
          lg:h-[115vh]
          lg:min-h-[900px]
          lg:w-[115%]
        "
      />

      {/* Small animated layer */}
      <canvas
        ref={animationCanvasRef}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[1]
          h-full
          min-h-screen
          w-full
          lg:-left-[7.5%]
          lg:h-[115vh]
          lg:min-h-[900px]
          lg:w-[115%]
        "
      />
    </>
  );
}