"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Shopify Stores",
    href: "/services/ecommerce/shopify-stores",
  },
  {
    number: "02",
    title: "Custom E-Commerce",
    href: "/services/ecommerce/custom-ecommerce",
  },
  {
    number: "03",
    title: "Product Experiences",
    href: "/services/ecommerce/product-experiences",
  },
  {
    number: "04",
    title: "Conversion Optimisation",
    href: "/services/ecommerce/conversion-optimisation",
  },
  {
    number: "05",
    title: "Payment Integration",
    href: "/services/ecommerce/payment-integration",
  },
  {
    number: "06",
    title: "Store Redesigns",
    href: "/services/ecommerce/store-redesigns",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We look at your products, customers, competitors and commercial goals before deciding what your store needs.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We create a clear shopping journey that makes products easy to discover and purchasing easy to complete.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We design a distinctive storefront that puts your products first without sacrificing usability.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We develop the store with responsive behaviour, reliable integrations and performance in mind.",
  },
  {
    number: "05",
    title: "Optimise",
    description:
      "After launch, we look at what customers are doing and identify opportunities to improve the experience.",
  },
];

const relatedServices = [
  {
    title: "Web Development",
    href: "/services/web-development",
  },
  {
    title: "SEO & Digital Marketing",
    href: "/services/seo-digital-marketing",
  },
  {
    title: "Branding & Design",
    href: "/services/branding-design",
  },
];

export default function EcommercePage() {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-[#0a0a0a] px-6 pb-20 pt-32 text-white sm:px-10 sm:pb-24 lg:px-14 lg:pb-28">
        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Red glow */}
        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[550px] w-[550px] rounded-full bg-[#e21d2b]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              02 / E-Commerce
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
              Stores
              <br />
              built to
              <br />
              convert
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
              E-commerce experiences designed to make products easier to
              discover, decisions easier to make and purchasing easier to
              complete.
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
                An online store should make the path from discovering a product
                to buying it feel natural.
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                We combine product presentation, user experience, technology
                and conversion thinking to create e-commerce experiences that
                work for both customers and the business behind them.
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
                Shopping
                <br />
                made
                <br />
                simpler
                <span className="text-[#e21d2b]">.</span>
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/45">
                From a focused product store to a more complex e-commerce
                platform, we build around the customer journey and the
                commercial goals behind it.
              </p>
            </div>
          </div>

          {/* =================================================
              CLICKABLE E-COMMERCE SERVICES
          ================================================= */}
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

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMER JOURNEY
      ===================================================== */}
      <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                The customer journey
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-5xl text-[clamp(2.4rem,5vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.06em]">
                Discover.
                <br />
                Consider.
                <br />
                Choose.
                <br />
                Return
                <span className="text-[#e21d2b]">.</span>
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                Every interaction matters. From the first product impression
                through checkout and beyond, we think about how the experience
                can remove friction and build confidence.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {[
              "Clear navigation",
              "Product discovery",
              "Simple checkout",
              "Mobile first",
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
                From
                <br />
                product
                <br />
                to
                <br />
                purchase
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
          PERFORMANCE / GROWTH
      ===================================================== */}
      <section className="bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Built for growth
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-5xl text-[clamp(2.4rem,5vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.06em]">
                A store that
                <br />
                can grow with
                <br />
                the business
                <span className="text-[#e21d2b]">.</span>
              </p>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/45">
                Your e-commerce platform should not become a constraint as
                products, customers and ambitions grow. We consider the future
                while building the experience you need today.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {[
              "Responsive",
              "Performance focused",
              "Secure payments",
              "Scalable architecture",
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

      {/* =====================================================
          RELATED SERVICES
      ===================================================== */}
      <section className="bg-[#0a0a0a] px-6 pb-24 text-white sm:px-10 sm:pb-28 lg:px-14">
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
      <section className="bg-[#f4f2ed] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1600px] border-t border-black/15 pt-7">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Start a conversation
              </span>

              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em]">
                Ready to sell
                <br />
                online
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

    </main>
  );
}