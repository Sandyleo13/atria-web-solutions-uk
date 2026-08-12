"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const industries = [
  "Retail",
  "Hospitality",
  "Healthcare",
  "E-Commerce",
  "Professional Services",
  "Startups",
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="overflow-hidden bg-[#f4f2ed] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44"
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

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
              04 / Who We Work With
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
            className="max-w-6xl text-[clamp(3.5rem,8vw,8.5rem)] font-semibold uppercase leading-[0.8] tracking-[-0.07em] text-[#0a0a0a]"
          >
            We work with
            <br />
            ambitious
            <br />
            businesses<span className="text-[#e21d2b]">.</span>
          </motion.h2>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/35">
            Across industries
          </span>

          <p className="max-w-2xl text-lg leading-7 tracking-[-0.02em] text-black/55 sm:text-xl lg:text-2xl lg:leading-9">
            From growing businesses to established brands, we create digital
            experiences around the people they serve and the goals they want
            to achieve.
          </p>
        </motion.div>

        {/* Industry marquee */}
        <div className="relative mt-20 overflow-hidden border-y border-black/15 py-8 lg:mt-28">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={`${industry}-${index}`}
                className="flex items-center"
              >
                <span className="px-6 text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-none tracking-[-0.05em] text-black/85 sm:px-10"
                >
                  {industry}
                </span>

                <span className="text-xl text-[#e21d2b]">•</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Industry grid */}
        <div className="mt-16 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="group flex min-h-[150px] items-end justify-between border-b border-r border-black/15 p-6 transition-colors duration-500 hover:bg-[#0a0a0a] hover:text-white sm:min-h-[190px] sm:p-8"
            >
              <div>
                <span className="mb-5 block text-[9px] tracking-[0.25em] text-black/30 transition-colors duration-500 group-hover:text-white/35">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-semibold uppercase tracking-[-0.04em] sm:text-2xl">
                  {industry}
                </h3>
              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-500 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b]">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col gap-6 border-t border-black/15 pt-7 sm:flex-row sm:items-end sm:justify-between lg:mt-28"
        >
          <p className="max-w-2xl text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em] text-black">
            Your business
            <br />
            could be next<span className="text-[#e21d2b]">.</span>
          </p>

          <a
            href="/contact"
            className="group flex w-fit items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em]"
          >
            Start a conversation

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b] group-hover:text-white">
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