"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    short: "Websites & digital experiences",
    description:
      "High-performing websites and digital experiences designed around your business goals, your audience and the way people actually use the web.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "E-Commerce",
    short: "Online stores designed to convert",
    description:
      "Thoughtful e-commerce experiences that make products easier to discover, decisions easier to make and purchasing easier to complete.",
    href: "/services/ecommerce",
  },
  {
    number: "03",
    title: "SEO & Digital Marketing",
    short: "Visibility, traffic & growth",
    description:
      "Search and digital marketing strategies designed to put your business in front of the right people and turn attention into meaningful action.",
    href: "/services/seo-digital-marketing",
  },
  {
    number: "04",
    title: "Branding & Design",
    short: "Identities people remember",
    description:
      "Distinctive identities and purposeful design systems that help businesses communicate clearly and create a stronger impression.",
    href: "/services/branding-design",
  },
  {
    number: "05",
    title: "Email Marketing",
    short: "Campaigns that create action",
    description:
      "Strategic email campaigns designed to build relationships, bring customers back and create measurable results.",
    href: "/services/email-marketing",
  },
  {
    number: "06",
    title: "Mobile App Development",
    short: "Useful mobile experiences",
    description:
      "Mobile applications built around usability, performance and the real needs of the people who will use them.",
    href: "/services/mobile-app-development",
  },
  {
    number: "07",
    title: "Online Reputation",
    short: "Building trust online",
    description:
      "Reputation strategies that help businesses build credibility, respond thoughtfully and maintain a stronger digital presence.",
    href: "/services/online-reputation-management",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">

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

            <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-white/40">
              What we do
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
              className="max-w-3xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.76] tracking-[-0.075em]"
            >
              Digital
              <br />
              solutions
              <br />
              with purpose<span className="text-[#e21d2b]">.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex items-end justify-between"
          >
            <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              Strategy, design, technology and digital growth brought together
              around what your business actually needs.
            </p>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden items-center gap-3 text-[14px] uppercase tracking-[0.3em] text-white/30 sm:flex"
            >
              Explore services
              <ArrowDown size={14} strokeWidth={1.4} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-16 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:mb-24">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Our services
              </span>
            </div>

            <p className="max-w-3xl text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-black/75">
              Different businesses need different solutions. We bring together
              the right capabilities to solve the problem in front of us.
            </p>
          </div>

          <div className="border-t border-black/15">
            {services.map((service, index) => (
              <motion.a
                key={service.number}
                href={service.href}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                }}
                className="group grid gap-6 border-b border-black/15 py-9 transition-colors duration-500 hover:bg-[#0a0a0a] hover:text-white sm:grid-cols-[70px_minmax(0,1fr)_minmax(220px,0.55fr)_auto] sm:items-center sm:py-11 lg:py-14"
              >
                <span className="text-[14px] tracking-[0.2em] text-black/30 transition-colors duration-500 group-hover:text-white/30">
                  {service.number}
                </span>

                <div>
                  <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.06em] transition-transform duration-500 group-hover:translate-x-2">
                    {service.title}
                    <span className="text-[#e21d2b]">.</span>
                  </h2>

                  <p className="mt-4 text-[14px] uppercase tracking-[0.22em] text-black/40 transition-colors duration-500 group-hover:text-white/40">
                    {service.short}
                  </p>

                  <p className="mt-5 max-w-2xl text-[14px] leading-6 text-black/45 transition-colors duration-500 group-hover:text-white/50 sm:hidden">
                    {service.description}
                  </p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-all duration-500 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b] group-hover:text-white sm:h-14 sm:w-14">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.4}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </span>

                <div className="hidden max-w-sm text-[14px] leading-6 text-black/40 transition-colors duration-500 group-hover:text-white/50 sm:block">
                  {service.description}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-[#e9e6df] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Our approach
              </span>
            </div>

            <div>
              <p className="max-w-3xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.06em]">
                We don't sell
                <br />
                solutions before
                <br />
                understanding
                <br />
                the problem<span className="text-[#e21d2b]">.</span>
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                Every project begins with questions. What are you trying to
                achieve? Who are you trying to reach? What is getting in the
                way? The answers shape what we recommend and what we build.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1600px] border-t border-black/15 pt-7">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Need a digital partner?
              </span>

              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em]">
                Let's talk<span className="text-[#e21d2b]">.</span>
              </h2>
            </div>

            <a
              href="/contact"
              className="group flex w-fit items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.25em]"
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

    </main>
  );
}
