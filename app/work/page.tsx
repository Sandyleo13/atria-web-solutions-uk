"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const projects = [
  {
    number: "01",
    title: "Digital Experience",
    category: "Web Development",
    description:
      "A focused digital experience designed around clarity, usability and a stronger online presence.",
    image: "/images/work/project-01.webp",
    size: "large",
  },
  {
    number: "02",
    title: "E-Commerce Experience",
    category: "E-Commerce",
    description:
      "A product-first shopping experience designed to make discovery and purchasing feel effortless.",
    image: "/images/work/project-02.webp",
    size: "small",
  },
  {
    number: "03",
    title: "Brand Identity",
    category: "Branding & Design",
    description:
      "A distinctive visual identity created to bring consistency across digital touchpoints.",
    image: "/images/work/project-03.webp",
    size: "small",
  },
  {
    number: "04",
    title: "Growth Platform",
    category: "SEO & Digital Marketing",
    description:
      "A digital growth system focused on visibility, relevant traffic and stronger customer journeys.",
    image: "/images/work/project-04.webp",
    size: "large",
  },
];

const categories = [
  "All",
  "Web Development",
  "E-Commerce",
  "Branding",
  "Digital Marketing",
];

export default function WorkPage() {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-end bg-[#0a0a0a] px-6 pb-20 pt-32 text-white sm:px-10 sm:pb-24 lg:px-14 lg:pb-28">
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              03 / Work
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
              className="max-w-7xl text-[clamp(4.5rem,11vw,11rem)] font-semibold uppercase leading-[0.74] tracking-[-0.08em]"
            >
              Selected
              <br />
              work<span className="text-[#e21d2b]">.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex items-end justify-between"
          >
            <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              A selection of digital experiences, brands and products created
              to solve real problems and move businesses forward.
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

      {/* Intro */}
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Selected projects
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.045em] text-black/80"
            >
              We don't believe good work needs unnecessary decoration.
              It needs a clear idea, thoughtful execution and a reason to
              exist.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="px-6 pb-12 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1600px] flex-wrap gap-2 border-b border-black/15 pb-7">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full border px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                index === 0
                  ? "border-[#e21d2b] bg-[#e21d2b] text-white"
                  : "border-black/15 text-black/45 hover:border-[#e21d2b] hover:text-[#e21d2b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 pb-28 sm:px-10 sm:pb-36 lg:px-14 lg:pb-44">
        <div className="mx-auto grid max-w-[1600px] gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              className={`group ${
                project.size === "large" ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project visual */}
              <Link
                href="/contact"
                className={`relative block overflow-hidden bg-[#dedbd4] ${
                  project.size === "large"
                    ? "aspect-[16/8]"
                    : "aspect-[4/3]"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/[0.03] via-transparent to-black/[0.12]" />

                  <div className="relative text-center">
                    <span className="block text-[clamp(3rem,8vw,9rem)] font-semibold uppercase leading-none tracking-[-0.08em] text-black/[0.08] transition-transform duration-700 group-hover:scale-105">
                      Project
                    </span>

                    <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.35em] text-black/25">
                      Image coming soon
                    </span>
                  </div>
                </div>

                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[9px] font-semibold text-black backdrop-blur-sm">
                  {project.number}
                </div>

                <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e21d2b] text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </div>
              </Link>

              {/* Project information */}
              <div className="flex flex-col gap-4 border-b border-black/15 py-6 sm:flex-row sm:items-start sm:justify-between sm:py-7">
                <div>
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e21d2b]">
                    {project.category}
                  </p>

                  <h2 className="text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-[0.85] tracking-[-0.055em]">
                    {project.title}
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-6 text-black/45 sm:pt-1">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Our approach
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.87] tracking-[-0.06em]">
                Good work
                <br />
                starts with
                <br />
                a good
                <br />
                question<span className="text-[#e21d2b]">.</span>
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/45">
                Before we think about technology, layouts or campaigns, we
                understand the problem. That keeps the final work focused on
                something useful rather than simply something that looks good.
              </p>
            </motion.div>
          </div>

          <div className="mt-20 grid gap-0 border-t border-white/10 sm:grid-cols-3 lg:mt-28">
            {[
              {
                number: "01",
                title: "Understand",
                text: "The business, audience and problem.",
              },
              {
                number: "02",
                title: "Create",
                text: "A focused idea and experience.",
              },
              {
                number: "03",
                title: "Deliver",
                text: "Work designed to move things forward.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-b border-white/10 p-7 first:border-l-0 sm:border-r sm:p-9 lg:p-10"
              >
                <span className="text-[10px] tracking-[0.2em] text-white/25">
                  {item.number}
                </span>

                <h3 className="mt-16 text-2xl font-semibold uppercase leading-none tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-white/35">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f4f2ed] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1600px] border-t border-black/15 pt-7">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Your project could be next
              </span>

              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em]">
                Have something
                <br />
                worth building<span className="text-[#e21d2b]">?</span>
              </h2>
            </div>

            <Link
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
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}