"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Creative Direction",
    role: "Strategy & Design",
  },
  {
    name: "Digital Development",
    role: "Technology & Engineering",
  },
  {
    name: "Growth & Marketing",
    role: "SEO & Digital Growth",
  },
];

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4f2ed] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

            <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/40">
              06 / About Atria
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
            className="max-w-3xl text-[clamp(2rem,5vw,5.5rem)] font-semibold uppercase leading-[0.8] tracking-[-0.07em] text-[#0a0a0a]"
          >
            We create
            <br />
            digital
            <br />
            experiences
            <span className="text-[#e21d2b]">.</span>
          </motion.h2>
        </div>

        {/* Intro */}
        <div className="mt-16 grid gap-12 border-t border-black/15 pt-7 lg:mt-24 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/35">
              About us
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="max-w-4xl text-[clamp(1.7rem,3.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-black/75">
              Atria Web Solutions is a digital partner for businesses that
              want to build better experiences, communicate more clearly and
              grow with confidence.
            </p>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-black/50 sm:text-base">
              From strategy and design to development and digital growth, we
              bring the right disciplines together to create digital work that
              has a purpose beyond simply looking good.
            </p>

            <a
              href="/about"
              className="group mt-8 flex w-fit items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.25em]"
            >
              More about Atria

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

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 lg:mt-32"
        >
          <div className="relative aspect-[16/7] overflow-hidden bg-[#0a0a0a]">
            <Image
              src="/images/hero-bg.png"
              alt="Atria Web Solutions"
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover grayscale"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="max-w-3xl px-6 text-center text-[clamp(2rem,5vw,5.5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em] text-white">
                Digital work
                <br />
                with purpose<span className="text-[#e21d2b]">.</span>
              </p>
            </div>

            <div className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.3em] text-white/45 sm:bottom-8 sm:left-8">
              Atria Web Solutions / UK
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <div className="mt-20 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center justify-between border-t border-black/15 pt-7"
          >
            <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/40">
              Our team
            </span>

            <span className="text-[14px] uppercase tracking-[0.25em] text-black/30">
              Strategy / Design / Technology / Growth
            </span>
          </motion.div>

          <div className="grid border-l border-t border-black/15 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group min-h-[210px] border-b border-r border-black/15 p-6 transition-colors duration-500 hover:bg-[#0a0a0a] hover:text-white sm:p-8 lg:min-h-[260px]"
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="text-[14px] tracking-[0.2em] text-black/30 transition-colors duration-500 group-hover:text-white/30">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] sm:text-3xl">
                      {member.name}
                    </h3>

                    <p className="mt-3 text-xl uppercase tracking-[0.2em] text-black/40 transition-colors duration-500 group-hover:text-white/40">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8"
          >
            <a
              href="/team"
              className="group flex w-fit items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.25em]"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}