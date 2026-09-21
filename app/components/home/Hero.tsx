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
        min-h-[100svh]
        overflow-hidden
        bg-[#03070c]
      "
    >
      {/* =====================================================
          LIGHTNING PARTICLE NETWORK
      ===================================================== */}

      <ParticleNetwork />

      {/* =====================================================
          DARK LEFT / MOBILE CONTENT GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-gradient-to-r
          from-[#03070c]/95
          via-[#03070c]/45
          to-transparent

          sm:from-[#03070c]/90
          sm:via-[#03070c]/35
        "
      />

      {/* =====================================================
          MOBILE LOWER NETWORK FADE

          Keeps the particle field visible while preventing
          the lower network from becoming too bright behind CTAs.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[2]
          h-[42%]
          bg-gradient-to-t
          from-[#03070c]/95
          via-[#03070c]/45
          to-transparent

          sm:h-[30%]
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
          h-32
          bg-gradient-to-b
          from-[#03070c]
          to-transparent

          sm:h-40
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
          min-h-[100svh]
          w-full
          max-w-[1600px]
          flex-col
          justify-start

          px-5
          pb-24
          pt-28

          sm:px-8
          sm:pb-24
          sm:pt-32

          md:px-10

          lg:justify-center
          lg:px-14
          lg:pb-20
          lg:pt-32
        "
      >
        <div
          className="
            w-full
            max-w-[590px]

            lg:max-w-[590px]
          "
        >
          {/* =================================================
              EYEBROW
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-5
              flex
              items-center
              gap-2.5

              sm:mb-7
              sm:gap-3
            "
          >
            <span
              className="
                h-px
                w-7
                shrink-0
                bg-blue-400

                sm:w-10
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                leading-4
                tracking-[0.24em]
                text-white/60

                xs:text-[9px]
                sm:text-xs
                sm:tracking-[0.32em]
              "
            >
              Digital solutions for a smarter tomorrow
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.95,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                text-[clamp(2.8rem,13vw,4.5rem)]
                font-light
                leading-[0.88]
                tracking-[-0.065em]
                text-white

                sm:text-[clamp(3.5rem,9vw,6rem)]

                lg:text-[clamp(3.6rem,7.5vw,8.2rem)]
              "
            >
              Technology
              <br />
              that fuels
              <br />

              <span
                className="
                  block
                  pb-3
                  bg-gradient-to-r
                  from-blue-300
                  via-blue-500
                  to-indigo-500
                  bg-clip-text
                  text-transparent

                  sm:pb-4

                  lg:pb-5
                "
              >
                growth.
              </span>
            </motion.h1>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="
              mt-6
              max-w-[390px]
              text-[13px]
              leading-5
              text-white/60

              sm:mt-8
              sm:max-w-[450px]
              sm:text-sm
              sm:leading-6

              lg:text-base
            "
          >
            We build powerful websites, intuitive apps and data-driven
            marketing strategies that help businesses grow, engage and stay
            ahead.
          </motion.p>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
            className="
              mt-7
              flex
              w-full
              flex-col
              gap-3

              sm:mt-8
              sm:w-auto
              sm:flex-row
            "
          >
            {/* Primary CTA */}

            <a
              href="#services"
              className="
                group
                flex
                min-h-[48px]
                w-full
                items-center
                justify-center
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

                sm:w-fit
              "
            >
              <span>Start a Project</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              />
            </a>

            {/* Secondary CTA */}

            <a
              href="#work"
              className="
                group
                flex
                min-h-[48px]
                w-full
                items-center
                justify-center
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

                sm:w-fit
              "
            >
              <span>Explore Our Work</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              />
            </a>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE NETWORK LABEL

            Gives the bottom of the mobile hero some visual
            balance without adding another large element.
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
          className="
            pointer-events-none
            absolute
            bottom-12
            left-5
            right-5
            flex
            items-center
            justify-between

            sm:bottom-10
            sm:left-8
            sm:right-8

            lg:hidden
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/25
            "
          >
            Atria Web Solutions
          </span>

          <span
            className="
              text-[8px]
              tracking-[0.2em]
              text-white/20
            "
          >
            01 / 06
          </span>
        </motion.div>

        {/* =====================================================
            DESKTOP SCROLL
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="
            absolute
            bottom-8
            right-6
            hidden
            items-center
            gap-4
            text-white/40

            lg:flex
            lg:right-14
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
            "
          >
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
            <ArrowDown
              size={16}
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            DESKTOP SECTION NUMBER
        ===================================================== */}

        <div
          className="
            absolute
            bottom-8
            left-6
            hidden
            text-[10px]
            tracking-[0.25em]
            text-white/25

            lg:block
            lg:left-14
          "
        >
          01 / 06
        </div>
      </div>
    </section>
  );
}