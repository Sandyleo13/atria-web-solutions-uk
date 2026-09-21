"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import TeamSection from "../components/about/TeamSection";

export default function TeamPage() {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#0a0a0a] px-6 pb-20 pt-36 text-white sm:px-10 sm:pb-24 lg:px-14 lg:pb-28">

        {/* Subtle red glow */}
        <div className="pointer-events-none absolute right-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#e21d2b]/10 blur-[180px]" />

        {/* Technical grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-white/45">
              06 / Team
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="mt-10 overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="max-w-[1500px] text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.73] tracking-[-0.085em]"
            >
              The people
              <br />
              behind Atria
              <span className="text-[#e21d2b]">.</span>
            </motion.h1>
          </div>

          {/* Bottom content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="mt-12 flex max-w-3xl items-end justify-between gap-12"
          >
            <p className="max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              Meet the people bringing together strategy, creativity and
              technology to build meaningful digital experiences.
            </p>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden shrink-0 items-center gap-3 text-[14px] uppercase tracking-[0.3em] text-white/35 sm:flex"
            >
              Scroll
              <ArrowDown size={15} strokeWidth={1.4} />
            </motion.div>
          </motion.div>

          {/* Bottom section number */}
          <div className="mt-20 text-[14px] tracking-[0.3em] text-white/20">
            06 / 06
          </div>
        </div>
      </section>

      {/* =====================================================
          TEAM SECTION
      ===================================================== */}

      <TeamSection />

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#e9e6df] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-[1600px]">
          <div className="border-t border-black/15 pt-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/35">
                  Work with us
                </p>

                <h2 className="mt-7 max-w-3xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.76] tracking-[-0.075em]">
                  Have a project
                  <br />
                  in mind
                  <span className="text-[#e21d2b]">?</span>
                </h2>
              </div>

              <motion.a
                href="/contact"
                whileHover={{ x: 5 }}
                className="group flex w-fit items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.25em]"
              >
                Start a conversation

                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b] group-hover:text-white">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </motion.a>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}