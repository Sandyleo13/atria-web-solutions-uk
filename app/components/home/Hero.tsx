"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#03070c]
      "
    >
      {/* =====================================================
          LIGHTNING PARTICLE NETWORK
      ===================================================== */}

      <ParticleNetwork />

      {/* =====================================================
          DARK LEFT GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-gradient-to-r
          from-[#03070c]/90
          via-[#03070c]/35
          to-transparent
        "
      />

      {/* =====================================================
          TOP GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[2]
          h-40
          bg-gradient-to-b
          from-[#03070c]
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[2]
          h-48
          bg-gradient-to-t
          from-[#03070c]
          to-transparent
        "
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1600px]
          flex-col
          justify-center
          px-6
          pb-20
          pt-32
          sm:px-10
          lg:px-14
        "
      >
        <div className="max-w-[590px]">

          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-blue-400" />
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-white/60
                sm:text-xs
              "
            >
              Digital solutions for a smarter tomorrow
            </span>
          </motion.div>

          {/* Heading */}

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.35, duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
              className="
                text-[clamp(3.6rem,7.5vw,8.2rem)]
                font-light
                leading-[0.86]
                tracking-[-0.065em]
                text-white
              "
            >
              Technology
              <br />
              that fuels
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-blue-300
                  via-blue-500
                  to-indigo-500
                  bg-clip-text
                  text-transparent
                "
              >
                growth.
              </span>
            </motion.h1>
          </div>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="
              mt-8
              max-w-[450px]
              text-sm
              leading-6
              text-white/60
              sm:text-base
            "
          >
            We build powerful websites, intuitive apps and data-driven marketing
            strategies that help businesses grow, engage and stay ahead.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#services"
              className="
                group
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                bg-white
                px-6
                py-3
                text-xs
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-blue-500
                hover:text-white
              "
            >
              <span>Start a Project</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>

            <a
              href="#work"
              className="
                group
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                border
                border-white/20
                px-6
                py-3
                text-xs
                font-medium
                text-white
                transition-all
                duration-300
                hover:border-white/50
                hover:bg-white/5
              "
            >
              <span>Explore Our Work</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </motion.div>
        </div>

        {/* =====================================================
            SCROLL
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="
            absolute
            bottom-8
            right-6
            hidden
            items-center
            gap-4
            text-white/40
            sm:flex
            lg:right-14
          "
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Section number */}

        <div
          className="
            absolute
            bottom-8
            left-6
            hidden
            text-[10px]
            tracking-[0.25em]
            text-white/25
            sm:block
            lg:left-14
          "
        >
          01 / 06
        </div>
      </div>
    </section>
  );
}
