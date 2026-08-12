"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const values = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "We stay interested, ask questions and keep learning because good digital work starts with understanding.",
  },
  {
    number: "02",
    title: "Ownership",
    description:
      "We take responsibility for the work we put into the world and the experience it creates for others.",
  },
  {
    number: "03",
    title: "Craft",
    description:
      "We care about the details without losing sight of the bigger picture or the reason behind the work.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "Better ideas happen when different perspectives are encouraged, challenged and brought together.",
  },
];

const positions = [
  {
    title: "Web Developer",
    type: "Full-time",
    location: "UK",
    description:
      "Build thoughtful, responsive digital experiences across modern web technologies.",
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "UK",
    description:
      "Help businesses grow through thoughtful digital strategy, content and performance marketing.",
  },
  {
    title: "UI / Visual Designer",
    type: "Full-time",
    location: "UK",
    description:
      "Create clear, distinctive visual experiences across websites, brands and digital products.",
  },
];

export default function CareersPage() {
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
              06 / Careers
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
              Do work
              <br />
              that
              <br />
              matters<span className="text-[#e21d2b]">.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex items-end justify-between"
          >
            <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              We're interested in people who care about what they make, enjoy
              solving problems and want to keep getting better.
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
                Working at Atria
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-5xl text-[clamp(2.2rem,4.5vw,5rem)] font-medium leading-[1] tracking-[-0.05em] text-black/80">
                Small enough to make a difference. Ambitious enough to make
                things interesting.
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                We work across websites, digital products, branding and
                marketing. That means every project brings a different problem
                to solve and something new to learn.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#e9e6df] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                What matters to us
              </span>
            </div>

            <div>
              <h2 className="text-[clamp(4rem,8vw,8.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]">
                How we
                <br />
                work<span className="text-[#e21d2b]">.</span>
              </h2>
            </div>
          </div>

          <div className="mt-20 grid border-l border-t border-black/15 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group flex min-h-[300px] flex-col justify-between border-b border-r border-black/15 p-6 transition-colors duration-500 hover:bg-[#0a0a0a] hover:text-white sm:p-8 lg:min-h-[340px]"
              >
                <span className="text-[10px] tracking-[0.2em] text-black/30 transition-colors group-hover:text-white/25">
                  {value.number}
                </span>

                <div>
                  <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold uppercase leading-[0.85] tracking-[-0.05em]">
                    {value.title}
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-black/45 transition-colors group-hover:text-white/40">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Opportunities
              </span>
            </div>

            <div>
              <h2 className="text-[clamp(4rem,8vw,8.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]">
                Find your
                <br />
                place<span className="text-[#e21d2b]">.</span>
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/40">
                We're always interested in meeting thoughtful people. Here are
                some of the areas where we'd love to hear from you.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-white/10 lg:mt-28">
            {positions.map((position, index) => (
              <motion.article
                key={position.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
              >
                <Link
                  href="/contact"
                  className="group grid gap-7 border-b border-white/10 py-9 transition-colors duration-500 hover:bg-white/[0.03] sm:grid-cols-[0.9fr_1.1fr_auto] sm:items-center sm:px-5 lg:py-11"
                >
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e21d2b]">
                      {position.type}
                    </p>

                    <h3 className="mt-3 text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-[0.85] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-2">
                      {position.title}
                    </h3>
                  </div>

                  <div>
                    <p className="max-w-lg text-sm leading-6 text-white/35">
                      {position.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/25">
                      <MapPin size={12} strokeWidth={1.3} />
                      {position.location}
                    </div>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b]">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Open application */}
      <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                No perfect match?
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[clamp(3rem,6vw,6.5rem)] font-semibold uppercase leading-[0.8] tracking-[-0.07em]">
                We may still
                <br />
                want to meet
                <br />
                you<span className="text-[#e21d2b]">.</span>
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                If you think you could bring something valuable to Atria but
                don't see a role that fits, send us a note. Tell us what you
                do, what you're interested in and why you'd like to work with
                us.
              </p>

              <Link
                href="/contact"
                className="group mt-10 flex w-fit items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em]"
              >
                Send your details

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b] group-hover:text-white">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e9e6df] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1600px] border-t border-black/15 pt-7">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Come build with us
              </span>

              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em]">
                Let's make
                <br />
                something useful<span className="text-[#e21d2b]">.</span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em]"
            >
              Get in touch

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