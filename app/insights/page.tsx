"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const featuredInsight = {
  category: "Digital Strategy",
  title: "What makes a digital experience actually work?",
  description:
    "A good digital experience is not just about appearance. It needs to make information easier to understand, actions easier to take and the brand easier to remember.",
  readTime: "6 min read",
};

const insights = [
  {
    number: "01",
    category: "Web Development",
    title: "Why a website should be designed around the user first",
    description:
      "The best websites balance business goals with the way people actually navigate, search and make decisions.",
    readTime: "5 min read",
  },
  {
    number: "02",
    category: "Branding",
    title: "Your brand is more than your visual identity",
    description:
      "A recognisable brand comes from consistency in what you say, how you look and how people experience you.",
    readTime: "4 min read",
  },
  {
    number: "03",
    category: "E-Commerce",
    title: "Small details that can improve an online shopping experience",
    description:
      "From product discovery to checkout, removing unnecessary friction can make the entire customer journey feel better.",
    readTime: "5 min read",
  },
  {
    number: "04",
    category: "Digital Marketing",
    title: "Why more traffic is not always better traffic",
    description:
      "Digital growth becomes more meaningful when visibility reaches people who are actually relevant to the business.",
    readTime: "4 min read",
  },
  {
    number: "05",
    category: "Technology",
    title: "Choosing technology based on the problem, not the trend",
    description:
      "The right technology should support the experience and business objective instead of becoming the objective itself.",
    readTime: "6 min read",
  },
];

const topics = [
  "Web",
  "Design",
  "Marketing",
  "E-Commerce",
  "Technology",
];

export default function InsightsPage() {
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
              04 / Insights
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
              Ideas
              <br />
              worth
              <br />
              sharing<span className="text-[#e21d2b]">.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex items-end justify-between"
          >
            <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              Perspectives on digital experiences, design, technology and
              growth — built from the things we see, make and learn.
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
                From Atria
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.045em] text-black/80"
            >
              Useful thinking for businesses trying to make better decisions
              in an increasingly digital world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured insight */}
      <section className="px-6 pb-28 sm:px-10 sm:pb-36 lg:px-14 lg:pb-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex items-center justify-between border-b border-black/15 pb-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Featured insight
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-[0.25em] text-black/30">
              {featuredInsight.readTime}
            </span>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="#"
              className="group grid overflow-hidden bg-[#dedbd4] lg:grid-cols-[1.15fr_0.85fr]"
            >
              {/* Visual */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#d4d1ca] lg:aspect-auto lg:min-h-[620px]">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                  <div className="absolute h-72 w-72 rounded-full border border-black/10 sm:h-96 sm:w-96" />

                  <div className="absolute h-52 w-52 rounded-full border border-black/10 sm:h-72 sm:w-72" />

                  <span className="relative text-[clamp(3rem,8vw,8rem)] font-semibold uppercase leading-none tracking-[-0.08em] text-black/[0.07]">
                    Insight
                  </span>
                </div>

                <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#e21d2b] text-white">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e21d2b]">
                    {featuredInsight.category}
                  </span>

                  <h2 className="mt-7 text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.84] tracking-[-0.06em]">
                    {featuredInsight.title}
                  </h2>

                  <p className="mt-8 max-w-xl text-sm leading-6 text-black/50 sm:text-base">
                    {featuredInsight.description}
                  </p>
                </div>

                <div className="mt-14 flex items-center justify-between border-t border-black/15 pt-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
                    Read insight
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-black/30">
                    {featuredInsight.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        </div>
      </section>

      {/* Latest insights */}
      <section className="bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Latest insights
              </span>
            </div>

            <div>
              <h2 className="text-[clamp(4rem,8vw,8.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]">
                Worth
                <br />
                a
                <br />
                read<span className="text-[#e21d2b]">.</span>
              </h2>
            </div>
          </div>

          <div className="mt-20 border-t border-white/10 lg:mt-28">
            {insights.map((insight, index) => (
              <motion.article
                key={insight.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                }}
              >
                <Link
                  href="#"
                  className="group grid gap-6 border-b border-white/10 py-8 transition-colors duration-500 hover:bg-white/[0.03] sm:grid-cols-[70px_0.8fr_1.2fr_auto] sm:items-center sm:px-5 lg:py-10"
                >
                  <span className="text-[10px] tracking-[0.2em] text-white/25 transition-colors group-hover:text-[#e21d2b]">
                    {insight.number}
                  </span>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e21d2b]">
                      {insight.category}
                    </p>

                    <h3 className="mt-3 text-[clamp(1.7rem,3vw,3.3rem)] font-semibold uppercase leading-[0.88] tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-2">
                      {insight.title}
                    </h3>
                  </div>

                  <p className="max-w-lg text-sm leading-6 text-white/35">
                    {insight.description}
                  </p>

                  <div className="flex items-center justify-between gap-5 sm:block">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                      {insight.readTime}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b]">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.4}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Explore topics
              </span>
            </div>

            <div>
              <h2 className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]">
                Find your
                <br />
                interest<span className="text-[#e21d2b]">.</span>
              </h2>

              <div className="mt-12 flex flex-wrap gap-3">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    className="rounded-full border border-black/15 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/50 transition-all duration-300 hover:border-[#e21d2b] hover:bg-[#e21d2b] hover:text-white"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e9e6df] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1600px] border-t border-black/15 pt-7">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Have a question?
              </span>

              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em]">
                Let's talk
                <br />
                about it<span className="text-[#e21d2b]">.</span>
              </h2>
            </div>

            <Link
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
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}