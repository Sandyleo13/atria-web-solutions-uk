"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
} from "lucide-react";

import type { WebDevelopmentService } from "../../../data/web-development";


type Props = {
  service: WebDevelopmentService;
};

export default function WebDevelopmentSubPage({
  service,
}: Props) {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#0a0a0a] px-6 pb-20 pt-32 text-white sm:px-10 sm:pb-24 lg:px-14 lg:pb-28">

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Red Glow */}
        <div className="pointer-events-none absolute right-[-10%] top-[15%] h-[550px] w-[550px] rounded-full bg-[#e21d2b]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-white/40">
              Web Development / {service.number}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-[1450px] text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.73] tracking-[-0.085em]"
          >
            {service.title}
            <span className="text-[#e21d2b]">.</span>
          </motion.h1>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-end">

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="max-w-3xl text-xl leading-8 text-white/55 sm:text-2xl"
            >
              {service.heroTitle}
            </motion.p>

            <div className="flex items-center gap-4 lg:justify-end">
              <span className="text-[14px] uppercase tracking-[0.3em] text-white/30">
                Scroll to explore
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
                <ArrowDown
                  size={15}
                  strokeWidth={1.4}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-52">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[0.55fr_1.45fr]">

          <div className="flex items-start gap-3">
            <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

            <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/40">
              The service
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-6xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.8] tracking-[-0.075em]">
              {service.heroDescription}
            </h2>

            <p className="mt-14 max-w-3xl text-lg leading-8 text-black/50 sm:text-xl">
              {service.intro}
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CHALLENGES
      ===================================================== */}
      <section className="bg-[#0a0a0a] px-6 py-32 text-white sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-[1600px]">

          <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">

            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-white/40">
                What we solve
              </span>
            </div>

            <div>

              <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.76] tracking-[-0.08em]">
                Built around
                <br />
                your challenges
                <span className="text-[#e21d2b]">.</span>
              </h2>

              <div className="mt-20 divide-y divide-white/10 border-y border-white/10">

                {service.challenges.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="flex items-center gap-6 py-7"
                  >
                    <span className="text-[10px] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg font-medium uppercase tracking-[-0.02em] sm:text-xl">
                      {item}
                    </span>
                  </motion.div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-[1600px]">

          <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">

            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Capabilities
              </span>
            </div>

            <div>

              <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.76] tracking-[-0.08em]">
                What we
                <br />
                build
                <span className="text-[#e21d2b]">.</span>
              </h2>

              <div className="mt-20 grid border-t border-black/10 sm:grid-cols-2">

                {service.capabilities.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group flex min-h-[150px] items-center justify-between border-b border-black/10 p-6 transition-colors duration-300 hover:bg-[#e9e6df] sm:min-h-[180px] sm:p-8"
                  >
                    <div className="flex items-center gap-5">

                      <span className="text-[10px] text-black/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg font-semibold uppercase tracking-[-0.03em] sm:text-xl">
                        {item}
                      </span>

                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.4}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />

                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}
      <section className="bg-[#e9e6df] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-[1600px]">

          <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">

            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Technology
              </span>
            </div>

            <div>

              <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.76] tracking-[-0.08em]">
                Built with
                <br />
                modern tools
                <span className="text-[#e21d2b]">.</span>
              </h2>

              <div className="mt-20 flex flex-wrap border-t border-black/10">

                {service.technologies.map((technology, index) => (
                  <motion.div
                    key={technology}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="flex min-h-[120px] w-full items-center border-b border-r border-black/10 p-6 sm:w-1/2 lg:w-1/3 lg:p-8"
                  >
                    <div className="flex items-center gap-5">

                      <span className="text-[10px] text-black/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xl font-semibold uppercase tracking-[-0.04em]">
                        {technology}
                      </span>

                    </div>
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}
      <section className="px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-[1600px]">

          <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">

            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Our process
              </span>
            </div>

            <div>

              <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.76] tracking-[-0.08em]">
                From idea
                <br />
                to execution
                <span className="text-[#e21d2b]">.</span>
              </h2>

              <div className="mt-20 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">

                {service.approach.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="min-h-[300px] bg-[#f4f2ed] p-8 sm:p-10"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-[14px] font-semibold tracking-[0.25em] text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Check
                        size={17}
                        strokeWidth={1.4}
                        className="text-[#e21d2b]"
                      />

                    </div>

                    <h3 className="mt-24 text-3xl font-semibold uppercase tracking-[-0.05em]">
                      {item.title}
                      <span className="text-[#e21d2b]">.</span>
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-black/45">
                      {item.description}
                    </p>

                  </motion.article>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#0a0a0a] px-6 py-32 text-white sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-[1600px]">

          <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Start a project
              </span>

              <h2 className="mt-8 max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.74] tracking-[-0.08em]">
                Ready to
                <br />
                build
                <span className="text-[#e21d2b]">?</span>
              </h2>

            </div>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-4 rounded-full border border-white/20 px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#e21d2b] hover:bg-[#e21d2b]"
            >
              Let's talk

              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}