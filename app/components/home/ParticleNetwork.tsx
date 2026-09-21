"use client";

import { useEffect, useRef } from "react";

export type TechNode = {
  id: string;
  label: string;
  shortLabel: string;
  x: number;
  y: number;
};

interface ParticleNetworkProps {
  mouseX: number;
  mouseY: number;
  hoveredNode: string | null;
  nodes: TechNode[];
}

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

export default function ParticleNetwork({
  mouseX,
  mouseY,
  hoveredNode,
  nodes,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const mouseRef = useRef({
    x: mouseX,
    y: mouseY,
  });

  const hoveredRef = useRef<string | null>(hoveredNode);

  useEffect(() => {
    mouseRef.current = {
      x: mouseX,
      y: mouseY,
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    hoveredRef.current = hoveredNode;
  }, [hoveredNode]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
    });

    if (!ctx) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const isMobile = () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;

    const createParticles = () => {
      const mobile = isMobile();

      const count = mobile ? 42 : 95;

      particles = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00025,
        vy: (Math.random() - 0.5) * 0.00025,
        size: Math.random() * 1.5 + 0.35,
        alpha: Math.random() * 0.55 + 0.15,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const drawNodeConnections = () => {
      const currentMouse = mouseRef.current;
      const currentHovered = hoveredRef.current;

      nodes.forEach((node) => {
        const nx = node.x * width;
        const ny = node.y * height;

        let nodeActive = currentHovered === node.id;

        const dx = currentMouse.x * width - nx;
        const dy = currentMouse.y * height - ny;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 170) {
          nodeActive = true;
        }

        if (nodeActive) {
          ctx.beginPath();
          ctx.moveTo(nx, ny);
          ctx.lineTo(currentMouse.x * width, currentMouse.y * height);

          ctx.strokeStyle = "rgba(80, 140, 255, 0.32)";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const ax = a.x * width;
          const ay = a.y * height;

          const bx = b.x * width;
          const by = b.y * height;

          const dx = bx - ax;
          const dy = by - ay;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 520) continue;

          const active =
            currentHovered === a.id || currentHovered === b.id;

          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);

          ctx.strokeStyle = active
            ? "rgba(86, 139, 255, 0.30)"
            : "rgba(70, 110, 180, 0.10)";

          ctx.lineWidth = active ? 1 : 0.55;
          ctx.stroke();
        }
      }
    };

    const drawParticles = () => {
      const currentMouse = mouseRef.current;

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -0.05) particle.x = 1.05;
        if (particle.x > 1.05) particle.x = -0.05;

        if (particle.y < -0.05) particle.y = 1.05;
        if (particle.y > 1.05) particle.y = -0.05;

        const px = particle.x * width;
        const py = particle.y * height;

        const mx = currentMouse.x * width;
        const my = currentMouse.y * height;

        const dx = px - mx;
        const dy = py - my;

        const distance = Math.sqrt(dx * dx + dy * dy);

        let alpha = particle.alpha;

        if (distance < 190) {
          alpha += (1 - distance / 190) * 0.45;
        }

        ctx.beginPath();

        ctx.arc(
          px,
          py,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(105, 150, 255, ${Math.min(
          alpha,
          0.85
        )})`;

        ctx.fill();
      }
    };

    const drawParticleConnections = () => {
      const maxDistance = isMobile() ? 85 : 115;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const ax = a.x * width;
          const ay = a.y * height;

          const bx = b.x * width;
          const by = b.y * height;

          const dx = bx - ax;
          const dy = by - ay;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > maxDistance) continue;

          const opacity =
            (1 - distance / maxDistance) * 0.16;

          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);

          ctx.strokeStyle = `rgba(70, 125, 235, ${opacity})`;
          ctx.lineWidth = 0.45;

          ctx.stroke();
        }
      }
    };

    const drawCenterGlow = () => {
      const centerX = width * 0.69;
      const centerY = height * 0.49;

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.min(width, height) * 0.27
      );

      gradient.addColorStop(
        0,
        "rgba(85, 125, 255, 0.18)"
      );

      gradient.addColorStop(
        0.35,
        "rgba(65, 100, 255, 0.07)"
      );

      gradient.addColorStop(
        1,
        "rgba(0, 0, 0, 0)"
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        centerX - width * 0.3,
        centerY - height * 0.3,
        width * 0.6,
        height * 0.6
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      drawCenterGlow();
      drawParticleConnections();
      drawNodeConnections();
      drawParticles();

      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [nodes]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}