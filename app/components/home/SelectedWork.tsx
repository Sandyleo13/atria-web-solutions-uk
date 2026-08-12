"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Northline Architecture",
    category: "Digital Experience",
    services: "Web Design / Development",
    description:
      "A refined digital experience designed to showcase architecture, spaces and ideas through a strong visual narrative.",
  },
  {
    number: "02",
    name: "Morrow & Co.",
    category: "E-Commerce",
    services: "Branding / Development",
    description:
      "A considered e-commerce experience combining a distinctive identity with a simple, conversion-focused shopping journey.",
  },
  {
    number: "03",
    name: "Verdant Health",
    category: "Digital Platform",
    services: "UX / Development",
    description:
      "A clear and accessible digital platform designed to make complex healthcare information easier to understand and navigate.",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Heading */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              03 / Selected Work
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
            className="text-[clamp(4rem,9vw,9.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]"
          >
            Selected
            <br />
            Work<span className="text-[#e21d2b]">.</span>
          </motion.h2>
        </div>

        {/* Projects */}
        <div className="space-y-28 lg:space-y-44">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              {/* Project image */}
              <a
                href="/work"
                className="block"
                aria-label={`View ${project.name} project`}
              >
                <div className="relative overflow-hidden bg-white/5">
                  <motion.div
                    whileHover={{ scale: 1.035 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative aspect-[16/9]"
                  >
                    <Image
                      src="/images/hero-bg.png"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 90vw"
                      className="object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/5" />

                    {/* Project number */}
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-[10px] tracking-[0.15em] backdrop-blur-sm sm:left-8 sm:top-8 sm:h-14 sm:w-14">
                      {project.number}
                    </div>

                    {/* Hover button */}
                    <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e21d2b] opacity-100 transition-transform duration-500 group-hover:scale-110 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16">
                      <ArrowUpRight
                        size={21}
                        strokeWidth={1.5}
                        className="transition-transform duration-500 group-hover:rotate-45"
                      />
                    </div>
                  </motion.div>
                </div>
              </a>

              {/* Project information */}
              <div className="mt-7 grid gap-6 sm:grid-cols-[0.8fr_1.2fr] lg:grid-cols-[0.25fr_0.85fr_0.9fr] lg:items-start">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                  {project.number}
                </div>

                <div>
                  <h3 className="text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-[0.88] tracking-[-0.05em]">
                    {project.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    <span>{project.category}</span>
                    <span className="text-[#e21d2b]">•</span>
                    <span>{project.services}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6 lg:items-end">
                  <p className="max-w-md text-sm leading-6 text-white/50 lg:text-right">
                    {project.description}
                  </p>

                  <a
                    href="/work"
                    className="group/link flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#e21d2b] hover:text-[#e21d2b]"
                  >
                    View Case Study

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-white/15 pt-8 lg:mt-36"
        >
          <a
            href="/work"
            className="group flex items-center justify-between"
          >
            <span className="text-[clamp(2.5rem,6vw,6rem)] font-semibold uppercase leading-none tracking-[-0.06em] transition-colors duration-500 group-hover:text-[#e21d2b]">
              View all work
            </span>

            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b] sm:h-20 sm:w-20">
              <ArrowUpRight
                size={23}
                strokeWidth={1.4}
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}