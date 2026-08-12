"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const principles = [
  {
    number: "01",
    title: "Strategy",
    description:
      "We start by understanding your business, your audience and what success looks like. Every digital decision has a purpose.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create clear, purposeful experiences that balance visual impact with usability, accessibility and conversion.",
  },
  {
    number: "03",
    title: "Technology",
    description:
      "We use the right technology for the job, creating digital products that are fast, scalable, maintainable and built to last.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Launch is only the beginning. We focus on measurable outcomes and continuous improvements that help your business grow.",
  },
];

export default function WhyAtria() {
  const [active, setActive] = useState(0);

  const activePrinciple = principles[active];

  return (
    <section
      id="why-atria"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              05 / Why Atria
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-6xl text-[clamp(4rem,9vw,9.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]"
          >
            Why
            <br />
            Atria<span className="text-[#e21d2b]">?</span>
          </motion.h2>
        </div>

        {/* Intro statement */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-16 grid gap-8 border-t border-white/15 pt-7 lg:mt-24 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
            Our thinking
          </span>

          <p className="max-w-4xl text-[clamp(1.8rem,3.5vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white/85">
            Good digital work is more than how it looks. It should make your
            business clearer, stronger and easier to choose.
          </p>
        </motion.div>

        {/* Interactive principles */}
        <div className="mt-20 border-t border-white/15 lg:mt-32">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Principles */}
            <div className="border-r border-white/10">
              {principles.map((principle, index) => {
                const isActive = active === index;

                return (
                  <motion.button
                    key={principle.number}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.06,
                    }}
                    className="group flex w-full items-center border-b border-white/10 py-7 text-left sm:py-9 lg:py-11"
                  >
                    <span
                      className={`w-12 shrink-0 text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                        isActive ? "text-[#e21d2b]" : "text-white/25"
                      }`}
                    >
                      {principle.number}
                    </span>

                    <span
                      className={`text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.06em] transition-all duration-500 ${
                        isActive
                          ? "translate-x-3 text-[#e21d2b]"
                          : "text-white/75 group-hover:text-white"
                      }`}
                    >
                      {principle.title}
                    </span>

                    <span
                      className={`ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:h-14 sm:w-14 ${
                        isActive
                          ? "border-[#e21d2b] bg-[#e21d2b] text-white"
                          : "border-white/15 text-white/50"
                      }`}
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.4}
                        className={`transition-transform duration-500 ${
                          isActive ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Active content */}
            <div className="relative flex min-h-[360px] flex-col justify-between p-7 sm:p-10 lg:min-h-[600px] lg:p-14">
              <motion.div
                key={activePrinciple.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#e21d2b]">
                  Principle {activePrinciple.number}
                </span>

                <h3 className="mt-6 text-[clamp(2.8rem,5vw,5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.06em]">
                  {activePrinciple.title}
                  <span className="text-[#e21d2b]">.</span>
                </h3>

                <p className="mt-8 max-w-lg text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                  {activePrinciple.description}
                </p>
              </motion.div>

              {/* Decorative element */}
              <motion.div
                key={`shape-${activePrinciple.number}`}
                initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-10 right-8 h-24 w-24 border border-[#e21d2b]/50 sm:h-32 sm:w-32 lg:bottom-14 lg:right-14 lg:h-44 lg:w-44"
              >
                <div className="absolute inset-5 border border-white/10" />

                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e21d2b]" />
              </motion.div>

              <span className="relative z-10 text-[9px] uppercase tracking-[0.25em] text-white/25">
                Strategy / Design / Technology / Growth
              </span>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col gap-6 border-t border-white/15 pt-7 sm:flex-row sm:items-end sm:justify-between lg:mt-28"
        >
          <p className="max-w-2xl text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em]">
            Built around
            <br />
            your goals<span className="text-[#e21d2b]">.</span>
          </p>

          <a
            href="/about"
            className="group flex w-fit items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em]"
          >
            More about Atria

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b]">
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}