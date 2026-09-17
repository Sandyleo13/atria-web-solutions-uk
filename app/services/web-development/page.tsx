"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const capabilities = [
  {
    number: "01",
    title: "Business Websites",
    href: "/services/web-development/business-websites",
  },
  {
    number: "02",
    title: "Corporate Websites",
    href: "/services/web-development/corporate-websites",
  },
  {
    number: "03",
    title: "Landing Pages",
    href: "/services/web-development/landing-pages",
  },
  {
    number: "04",
    title: "Custom Web Applications",
    href: "/services/web-development/custom-web-applications",
  },
  {
    number: "05",
    title: "CMS Development",
    href: "/services/web-development/cms-development",
  },
  {
    number: "06",
    title: "Website Redesigns",
    href: "/services/web-development/website-redesigns",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals and the role your website needs to play.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We turn those insights into a clear structure, content direction and technical approach.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create an interface that feels distinctive while keeping the experience clear and easy to use.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We develop the experience with performance, responsiveness and maintainability in mind.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After testing and refinement, we make sure everything is ready for a confident launch.",
  },
];

const relatedServices = [
  {
    title: "E-Commerce",
    href: "/services/ecommerce",
  },
  {
    title: "Branding & Design",
    href: "/services/branding-design",
  },
  {
    title: "SEO & Digital Marketing",
    href: "/services/seo-digital-marketing",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[85vh] items-end bg-[#0a0a0a] px-6 pb-20 pt-32 text-white sm:px-10 sm:pb-24 lg:px-14 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#e21d2b]/10 blur-[140px]" />

        <div className="mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              01 / Web Development
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
              Websites
              <br />
              that work
              <br />
              harder
              <span className="text-[#e21d2b]">.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex items-end justify-between"
          >
            <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              We design and build high-performing websites that communicate
              clearly, feel distinctive and help businesses achieve real
              goals.
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

      {/* =====================================================
          INTRO
      ===================================================== */}
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
                Your website should be more than a digital brochure. It should
                help people understand your business and give them a reason to
                take the next step.
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                From a focused landing page to a complex business platform, we
                create websites around the people using them and the outcomes
                your business needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                What we build
              </span>
            </div>

            <div>
              <h2 className="text-[clamp(4rem,8vw,8.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]">
                Built around
                <br />
                the
                <br />
                problem
                <span className="text-[#e21d2b]">.</span>
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/45">
                There is no single website formula. We choose the structure,
                technology and level of complexity based on what your business
                actually needs.
              </p>
            </div>
          </div>

          {/* Clickable capabilities */}
          <div className="mt-20 grid border-l border-t border-white/10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.href}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <Link
                  href={capability.href}
                  className="group relative flex min-h-[190px] w-full flex-col justify-between border-b border-r border-white/10 p-6 transition-colors duration-500 hover:bg-[#e21d2b] sm:min-h-[220px] sm:p-8"
                >
                  <span className="text-[10px] tracking-[0.2em] text-white/25 transition-colors duration-500 group-hover:text-white/65">
                    {capability.number}
                  </span>

                  <div className="flex items-end justify-between gap-5">
                    <h3 className="max-w-[80%] text-xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] sm:text-2xl">
                      {capability.title}
                    </h3>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.4}
                        className="transition-transform duration-500 group-hover:rotate-45"
                      />
                    </span>
                  </div>

                  {/* Red / white hover line */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
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
                From idea
                <br />
                to
                <br />
                launch
                <span className="text-[#e21d2b]">.</span>
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

      {/* =====================================================
          WHY IT MATTERS
      ===================================================== */}
      <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Why it matters
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-5xl text-[clamp(2.2rem,4.5vw,5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em]">
                Fast.
                <br />
                Clear.
                <br />
                Flexible.
                <br />
                Built to grow
                <span className="text-[#e21d2b]">.</span>
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                A good website needs to perform on every level. It should load
                quickly, communicate clearly, work across devices and give your
                business room to evolve.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {[
              "Responsive",
              "Performance focused",
              "Accessible",
              "Scalable",
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

      {/* =====================================================
          RELATED SERVICES
      ===================================================== */}
      <section className="bg-[#0a0a0a] px-6 py-24 text-white sm:px-10 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
              Explore more
            </span>
          </div>

          <div className="border-t border-white/10">
            {relatedServices.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex items-center justify-between border-b border-white/10 py-7 sm:py-9"
              >
                <div className="flex items-center gap-5">
                  <span className="text-[9px] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-none tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#e21d2b]">
                    {service.title}
                  </span>
                </div>

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

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1600px] border-t border-black/15 pt-7">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Start a conversation
              </span>

              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em]">
                Have a website
                <br />
                in mind
                <span className="text-[#e21d2b]">?</span>
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