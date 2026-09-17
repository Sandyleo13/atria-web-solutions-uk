"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Web Development",
    href: "/services/web-development",
  },
  {
    label: "E-Commerce",
    href: "/services/ecommerce",
  },
  {
    label: "SEO & Digital Marketing",
    href: "/services/seo-digital-marketing",
  },
  {
    label: "Branding & Design",
    href: "/services/branding-design",
  },
  {
    label: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-16 border-b border-white/10 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-20">
          {/* =================================================
              BRAND / CONTACT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <Link href="/" className="inline-block">
              <Image
                src="/logo/atria-logo-light.webp"
                alt="Atria Web Solutions"
                width={180}
                height={70}
                className="h-auto w-[130px] sm:w-[145px]"
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-6 text-white/45">
              We design, develop and grow digital experiences for ambitious
              businesses.
            </p>

            <a
              href="mailto:hello@atriawebsolutions.co.uk"
              className="group mt-8 inline-flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-[#e21d2b]"
            >
              hello@atriawebsolutions.co.uk

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <p className="mb-7 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30">
              Navigation
            </p>

            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-[#e21d2b] transition-all duration-300 group-hover:w-4" />

                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <p className="mb-7 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30">
              Services
            </p>

            <nav className="flex flex-col gap-4">
              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="group flex w-fit items-start gap-3 text-[10px] leading-4 text-white/45 transition-colors duration-300 hover:text-white"
                >
                  <span className="mt-2 h-px w-0 shrink-0 bg-[#e21d2b] transition-all duration-300 group-hover:w-3" />

                  {service.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="flex flex-col gap-6 py-7 text-[9px] uppercase tracking-[0.22em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}

          <p>© 2026 Atria Web Solutions</p>

          {/* Legal / Location */}

          <div className="flex flex-wrap items-center gap-5">
            {/* Privacy */}

            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </Link>

            {/* Terms */}

            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </Link>

            {/* United Kingdom → Homepage */}

            <Link
              href="/"
              className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
            >
              <span>United Kingdom</span>

              <ArrowUpRight
                size={11}
                strokeWidth={1.4}
                className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}