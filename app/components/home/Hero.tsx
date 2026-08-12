"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MouseEvent } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 20,
    mass: 0.5,
  });

  const imageX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const imageY = useTransform(smoothY, [-1, 1], [-10, 10]);

  const accentX = useTransform(smoothX, [-1, 1], [18, -18]);
  const accentY = useTransform(smoothY, [-1, 1], [12, -12]);

  const glowX = useTransform(smoothX, [-1, 1], [-25, 25]);
  const glowY = useTransform(smoothY, [-1, 1], [-18, 18]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#05070a]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* =====================================================
          TECHNOLOGY BACKGROUND
      ===================================================== */}

      <motion.div
        className="absolute inset-[-4%] z-0"
        style={{
          x: imageX,
          y: imageY,
        }}
        animate={{
          scale: [1.04, 1.08, 1.04],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/hero-tech-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      {/* General darkening */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/25" />

      {/* Keep the left side darker for typography */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-black/85 via-black/50 to-black/5" />

      {/* Subtle bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-52 bg-gradient-to-t from-[#05070a] to-transparent" />

      {/* =====================================================
          AMBIENT RED GLOW
      ===================================================== */}

      <motion.div
        className="pointer-events-none absolute right-[8%] top-[22%] z-[3] hidden h-[420px] w-[420px] rounded-full bg-[#e21d2b]/10 blur-[130px] lg:block"
        style={{
          x: glowX,
          y: glowY,
        }}
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SUBTLE BLUE GLOW
      ===================================================== */}

      <motion.div
        className="pointer-events-none absolute right-[28%] top-[40%] z-[3] hidden h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px] lg:block"
        animate={{
          x: [-20, 20, -20],
          y: [10, -15, 10],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          FLOATING TECH ACCENT
      ===================================================== */}

      <motion.div
        className="pointer-events-none absolute right-[12%] top-[28%] z-[4] hidden h-28 w-28 border border-[#e21d2b]/60 lg:block"
        style={{
          x: accentX,
          y: accentY,
          rotate: 45,
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col justify-end px-6 pb-28 pt-32 sm:px-10 sm:pb-32 lg:px-14 lg:pb-36">
        <div className="max-w-[780px]">
          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.9,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/75 sm:text-xs">
              Digital experiences for ambitious businesses
            </span>
          </motion.div>

          {/* Heading */}

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 2,
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-[clamp(3.7rem,8.5vw,9rem)] font-semibold leading-[0.82] tracking-[-0.065em] text-white"
            >
              WE BUILD
              <br />
              <span className="text-white">SOLUTIONS.</span>
              <br />
              <span className="text-[#e21d2b]">YOU GROW.</span>
            </motion.h1>
          </div>

          {/* Description + CTA */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.35,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-md text-sm leading-6 text-white/70 sm:text-base">
              We design, develop and grow digital experiences that help
              ambitious businesses move forward.
            </p>

            <a
              href="#services"
              className="group flex w-fit items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white"
            >
              <span className="relative pb-2">
                Start a project

                <span className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#e21d2b] transition-transform duration-500 group-hover:scale-x-0" />
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b]">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          className="absolute bottom-8 right-6 hidden items-center gap-4 text-white/60 sm:flex lg:right-14"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={16} strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* =====================================================
            SECTION NUMBER
        ===================================================== */}

        <div className="absolute bottom-8 left-6 hidden text-[10px] tracking-[0.25em] text-white/40 sm:block lg:left-14">
          01 / 06
        </div>
      </div>
    </section>
  );
}