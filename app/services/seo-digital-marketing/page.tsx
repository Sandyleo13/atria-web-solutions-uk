"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const capabilities = [
  "Technical SEO",
  "On-page SEO",
  "Local SEO",
  "Content strategy",
  "Search campaigns",
  "Performance marketing",
];

const process = [
  {
    number: "01",
    title: "Audit",
    description:
      "We understand where your business is today, what is already working and where opportunities are being missed.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We turn the findings into a focused growth plan built around your audience, market and commercial objectives.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We develop the content, landing pages, campaigns and search improvements needed to put the strategy into action.",
  },
  {
    number: "04",
    title: "Measure",
    description:
      "We track the signals that matter so we can understand what is generating visibility, engagement and meaningful traffic.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Digital growth is iterative. We use what we learn to refine the strategy and keep looking for better opportunities.",
  },
];

const relatedServices = [
  {
    title: "Web Development",
    href: "/services/web-development",
  },
  {
    title: "E-Commerce",
    href: "/services/ecommerce",
  },
  {
    title: "Email Marketing",
    href: "/services/email-marketing",
  },
];

export default function SeoDigitalMarketingPage() {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">
      <Navbar />

      {/* Hero */}
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
              03 / SEO & Digital Marketing
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
              className="max-w-7xl text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.76] tracking-[-0.075em]"
            >
              Be seen.
              <br />
              Be found.
              <br />
              Grow<span className="text-[#e21d2b]">.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex items-end justify-between"
          >
            <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              Search and digital marketing strategies designed to improve
              visibility, attract the right audience and turn attention into
              meaningful business growth.
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
      <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                The service
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-5xl text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.045em] text-black/80">
                Being online is not the same as being visible. The right
                audience needs to find you at the right moment.
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                We combine search strategy, content, technical improvements
                and digital campaigns to build a stronger path between what
                your audience is looking for and what your business offers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
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
                Growth
                <br />
                starts with
                <br />
                being found<span className="text-[#e21d2b]">.</span>
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/45">
                Different growth challenges need different approaches. We
                combine organic and paid strategies around the opportunities
                that matter most to your business.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-l border-t border-white/10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group flex min-h-[190px] flex-col justify-between border-b border-r border-white/10 p-6 transition-colors duration-500 hover:bg-[#e21d2b] sm:min-h-[220px] sm:p-8"
              >
                <span className="text-[10px] tracking-[0.2em] text-white/25 transition-colors group-hover:text-white/60">
                  0{index + 1}
                </span>

                <div className="flex items-end justify-between gap-5">
                  <h3 className="text-xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] sm:text-2xl">
                    {capability}
                  </h3>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                    className="shrink-0 transition-transform duration-500 group-hover:rotate-45"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visibility statement */}
      <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                The goal
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-5xl text-[clamp(2.4rem,5vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.06em]">
                Right people.
                <br />
                Right moment.
                <br />
                Right action<span className="text-[#e21d2b]">.</span>
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                More traffic is not always the answer. We focus on reaching
                people who are relevant to your business and creating a clear
                path from discovery to action.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {[
              "Search visibility",
              "Relevant traffic",
              "Clear messaging",
              "Measurable growth",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/55"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15">
                  <Check size={13} strokeWidth={1.5} />
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#e9e6df] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Our process
              </span>
            </div>

            <div>
              <h2 className="text-[clamp(4rem,8vw,8.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]">
                From
                <br />
                insight
                <br />
                to
                <br />
                impact<span className="text-[#e21d2b]">.</span>
              </h2>
            </div>
          </div>

          <div className="mt-20 border-t border-black/15 lg:mt-28">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="group grid gap-6 border-b border-black/15 py-8 sm:grid-cols-[70px_0.7fr_1.3fr] sm:items-center sm:py-10 lg:py-12"
              >
                <span className="text-[10px] tracking-[0.2em] text-black/30 transition-colors group-hover:text-[#e21d2b]">
                  {step.number}
                </span>

                <h3 className="text-[clamp(2.2rem,4vw,4.5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-2">
                  {step.title}
                </h3>

                <p className="max-w-lg text-sm leading-6 text-black/50 sm:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement */}
      <section className="bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Measure what matters
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-5xl text-[clamp(2.4rem,5vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.06em]">
                Visibility is
                <br />
                only the
                <br />
                beginning<span className="text-[#e21d2b]">.</span>
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/45">
                We look beyond surface-level numbers. The useful signals are
                the ones that help you understand whether digital activity is
                contributing to the wider goals of the business.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {[
              "Organic visibility",
              "Engagement",
              "Qualified traffic",
              "Conversions",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
                  <Check size={13} strokeWidth={1.5} />
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-[#0a0a0a] px-6 pb-24 text-white sm:px-10 sm:pb-28 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
              Explore more
            </span>
          </div>

          <div className="border-t border-white/10">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex items-center justify-between border-b border-white/10 py-7 sm:py-9"
              >
                <span className="text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-none tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#e21d2b]">
                  {service.title}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b]">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </Link>
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
                Start a conversation
              </span>

              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em]">
                Ready to grow
                <br />
                your reach<span className="text-[#e21d2b]">?</span>
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