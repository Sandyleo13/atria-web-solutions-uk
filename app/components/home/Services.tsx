"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Service = {
  number: string;
  title: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performing websites and digital experiences designed around your business goals.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "E-Commerce",
    description:
      "Conversion-focused online stores built to create better customer experiences and drive growth.",
    href: "/services/ecommerce",
  },
  {
    number: "03",
    title: "SEO & Digital Marketing",
    description:
      "Search and digital strategies that improve visibility, reach the right audience and generate measurable results.",
    href: "/services/seo-digital-marketing",
  },
  {
    number: "04",
    title: "Branding & Design",
    description:
      "Distinctive visual identities and digital design systems that make businesses easier to recognise.",
    href: "/services/branding-design",
  },
  {
    number: "05",
    title: "Email Marketing",
    description:
      "Purposeful email experiences that turn audiences into customers and keep your brand connected.",
    href: "/services/email-marketing",
  },
  {
    number: "06",
    title: "Mobile App Development",
    description:
      "Thoughtful mobile experiences built around usability, performance and real business needs.",
    href: "/services/mobile-app-development",
  },
  {
    number: "07",
    title: "Online Reputation",
    description:
      "Digital reputation strategies that help businesses build trust and maintain a stronger online presence.",
    href: "/services/online-reputation-management",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const activeItem =
    services.find((service) => service.number === activeService) ?? null;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f4f2ed] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#e21d2b]" />

              <span className="text-[15px] font-semibold uppercase tracking-[0.3em] text-black/45">
                02 / Services
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-none whitespace-nowrap text-[clamp(2rem,5vw,5.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.06em] text-[#0a0a0a]"
          >
            What we do<span className="text-[#e21d2b]">.</span>
          </motion.h2>
        </div>

        {/* Services */}
        <div className="relative">
          {services.map((service, index) => {
            const isActive = activeService === service.number;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActiveService(service.number)}
                onMouseLeave={() => setActiveService(null)}
                className="group border-t border-black/15"
              >
                <a
                  href={service.href}
                  className="relative flex min-h-[96px] items-center gap-4 py-6 sm:min-h-[115px] sm:gap-8 sm:py-7 lg:min-h-[145px] lg:py-8"
                >
                  {/* Number */}
                  <span
                    className={`w-8 shrink-0 text-[14px] font-medium tracking-[0.2em] transition-colors duration-300 sm:w-12 ${
                      isActive ? "text-[#e21d2b]" : "text-black/35"
                    }`}
                  >
                    {service.number}
                  </span>

                  {/* Title */}
                  <span
                    className={`text-[clamp(1.5rem,4vw,5.2rem)] font-semibold uppercase leading-[0.85] tracking-[-0.055em] transition-all duration-500 ${
                      isActive
                        ? "translate-x-2 text-[#e21d2b]"
                        : "text-[#0a0a0a]"
                    }`}
                  >
                    {service.title}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:h-14 sm:w-14 ${
                      isActive
                        ? "border-[#e21d2b] bg-[#e21d2b] text-white"
                        : "border-black/20 text-black"
                    }`}
                  >
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:rotate-45"
                    />
                  </span>
                </a>

                {/* Mobile / tablet description */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden lg:hidden"
                    >
                      <div className="grid gap-6 pb-8 pl-12 sm:grid-cols-[1fr_1fr] sm:pl-20">
                        <p className="max-w-md text-sm leading-6 text-black/55">
                          {service.description}
                        </p>

                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#e21d2b]">
                          Explore service ↗
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          <div className="border-t border-black/15" />
        </div>

        {/* Desktop floating preview */}
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div
              key={activeItem.number}
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.35 }}
              className="pointer-events-none fixed right-8 top-1/2 z-40 hidden w-[320px] -translate-y-1/2 overflow-hidden shadow-2xl lg:block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                <Image
                  src="/images/hero-bg.png"
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover grayscale"
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute inset-x-5 bottom-5">
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e21d2b]">
                    {activeItem.number}
                  </p>

                  <p className="text-sm font-medium text-white">
                    {activeItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2 lg:mt-28 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
            Digital, by design.
          </span>

          <p className="max-w-2xl text-xl leading-8 tracking-[-0.02em] text-black/65 sm:text-2xl lg:text-3xl lg:leading-10">
            Strategy, design and technology working together to create digital
            experiences that move businesses forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
}