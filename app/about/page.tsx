"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const principles = [
  {
    number: "01",
    title: "Business First",
    description:
      "We start with the business problem, not the technology. Understanding what you are trying to achieve helps us build something genuinely useful.",
  },
  {
    number: "02",
    title: "People First",
    description:
      "Every digital experience has a person on the other side of it. We design around how people think, behave and make decisions.",
  },
  {
    number: "03",
    title: "Keep It Clear",
    description:
      "Complexity is easy to add. Good digital work removes it. We favour clear thinking, purposeful design and technology that earns its place.",
  },
  {
    number: "04",
    title: "Think Long Term",
    description:
      "A website or digital product should not become a limitation six months after launch. We build with the future of the business in mind.",
  },
];

const capabilities = [
  "Strategy",
  "UX & UI",
  "Web Development",
  "E-Commerce",
  "Branding",
  "SEO",
  "Digital Marketing",
  "Technology",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">
      <Navbar />

      {/* ------------------------------------------------
          HERO
      ------------------------------------------------ */}
      <section className="relative flex min-h-[85vh] items-end bg-[#0a0a0a] px-6 pb-20 pt-32 text-white sm:px-10 sm:pb-24 lg:px-14 lg:pb-28">
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              About Atria
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.78] tracking-[-0.075em]"
            >
              Not just
              <br />
              another
              <br />
              agency<span className="text-[#e21d2b]">.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex items-end justify-between"
          >
            <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              We combine strategy, creative thinking and technology to solve
              real business problems through better digital experiences.
            </p>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/30 sm:flex"
            >
              Explore
              <ArrowDown size={14} strokeWidth={1.4} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------
          INTRO
      ------------------------------------------------ */}
      <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-start gap-3"
            >
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                What we believe
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-5xl text-[clamp(2.1rem,4.2vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.045em] text-black/80">
                Digital should make a business easier to understand, easier
                to trust and easier to choose.
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                That belief shapes the way we approach every project. We look
                at the bigger picture first, then bring together the strategy,
                design and technology needed to make it happen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          APPROACH
      ------------------------------------------------ */}
      <section className="bg-[#e9e6df] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Our approach
              </span>
            </div>

            <div>
              <h2 className="text-[clamp(4rem,8vw,8.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em] text-[#0a0a0a]">
                We listen.
                <br />
                We think.
                <br />
                We create.
                <br />
                We improve<span className="text-[#e21d2b]">.</span>
              </h2>
            </div>
          </div>

          <div className="mt-20 border-t border-black/15 lg:mt-28">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="group grid gap-6 border-b border-black/15 py-8 sm:grid-cols-[70px_0.8fr_1.2fr] sm:items-center sm:py-10 lg:py-12"
              >
                <span className="text-[10px] tracking-[0.2em] text-black/30 transition-colors group-hover:text-[#e21d2b]">
                  {principle.number}
                </span>

                <h3 className="text-[clamp(2.2rem,4.5vw,4.8rem)] font-semibold uppercase leading-[0.85] tracking-[-0.055em] transition-colors duration-300 group-hover:text-[#e21d2b]">
                  {principle.title}
                </h3>

                <p className="max-w-lg text-sm leading-6 text-black/50 sm:text-base">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          CAPABILITIES
      ------------------------------------------------ */}
      <section className="bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                What we do
              </span>
            </div>

            <div>
              <h2 className="text-[clamp(4rem,8vw,8.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]">
                One team.
                <br />
                Many
                <br />
                disciplines<span className="text-[#e21d2b]">.</span>
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/45">
                Different projects need different combinations of skills. We
                bring the right disciplines together instead of forcing every
                problem into the same process.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-l border-t border-white/10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <motion.a
                key={capability}
                href="/services"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                className="group flex min-h-[180px] flex-col justify-between border-b border-r border-white/10 p-6 transition-colors duration-500 hover:bg-[#e21d2b] sm:min-h-[210px] sm:p-8"
              >
                <span className="text-[10px] tracking-[0.2em] text-white/25 transition-colors group-hover:text-white/60">
                  0{index + 1}
                </span>

                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] sm:text-2xl">
                    {capability}
                  </h3>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                    className="shrink-0 transition-transform duration-500 group-hover:rotate-45"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          MEET THE TEAM
      ------------------------------------------------ */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="border-t border-black/15 pt-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#e21d2b]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                    The people
                  </span>
                </div>

                <h2 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,6.5rem)] font-semibold uppercase leading-[0.8] tracking-[-0.07em]">
                  Small team.
                  <br />
                  Big thinking<span className="text-[#e21d2b]">.</span>
                </h2>

                <p className="mt-7 max-w-xl text-sm leading-6 text-black/45 sm:text-base">
                  Meet the people behind Atria, bringing together marketing,
                  development and digital expertise to create meaningful
                  experiences.
                </p>
              </div>

              <a
                href="/team"
                className="group flex w-fit shrink-0 items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em]"
              >
                Meet the team

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b] group-hover:text-white">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          CTA
      ------------------------------------------------ */}
      <section className="px-6 pb-24 sm:px-10 lg:px-14 lg:pb-28">
        <div className="mx-auto max-w-[1600px] border-t border-black/15 pt-7">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Let's work together
              </span>

              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em]">
                Have an idea?
                <br />
                Let's talk<span className="text-[#e21d2b]">.</span>
              </h2>
            </div>

            <a
              href="/contact"
              className="group flex w-fit items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em]"
            >
              Start a project

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b] group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}