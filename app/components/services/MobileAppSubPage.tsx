"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import type { MobileSubService } from "../../../data/mobile";

type Props = {
  service: MobileSubService;
};

const relatedServices = [
  { title: "Web Development", href: "/services/web-development" },
  { title: "E-Commerce", href: "/services/ecommerce" },
  { title: "Branding & Design", href: "/services/branding-design" },
];

export default function MobileAppSubPage({ service }: Props) {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">
      <Navbar />

      <section className="relative flex min-h-[85vh] items-end bg-[#0a0a0a] px-6 pb-20 pt-32 text-white sm:px-10 sm:pb-24 lg:px-14 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="pointer-events-none absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-[#e21d2b]/10 blur-3xl" />
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e21d2b]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              {service.number} / {service.eyebrow}
            </span>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="max-w-7xl text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.76] tracking-[-0.075em]"
            >
              {service.heroTitle.map((line, index) => (
                <span key={line} className="block">
                  {line}
                  {index === service.heroTitle.length - 1 && <span className="text-[#e21d2b]">.</span>}
                </span>
              ))}
            </motion.h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="relative mt-10 flex items-end justify-between">
            <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">{service.heroDescription}</p>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="hidden items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/30 sm:flex">
              Explore <ArrowDown size={14} strokeWidth={1.4} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">The service</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }}>
              <p className="max-w-5xl text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.045em] text-black/80">{service.introLead}</p>
              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">{service.introDescription}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">{service.sectionLabel}</span>
            </div>
            <div>
              <h2 className="text-[clamp(4rem,8vw,8.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]">
                {service.sectionTitle.map((line, index) => <span key={line} className="block">{line}{index === service.sectionTitle.length - 1 && <span className="text-[#e21d2b]">.</span>}</span>)}
              </h2>
              <p className="mt-10 max-w-2xl text-base leading-7 text-white/45">{service.sectionDescription}</p>
            </div>
          </div>

          <div className="mt-20 grid border-l border-t border-white/10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
            {service.capabilities.map((capability, index) => (
              <motion.div key={capability} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="group border-b border-r border-white/10">
                <div className="flex min-h-[190px] flex-col justify-between p-6 transition-colors duration-500 hover:bg-[#e21d2b] sm:min-h-[220px] sm:p-8">
                  <span className="text-[10px] tracking-[0.2em] text-white/25 transition-colors group-hover:text-white/60">0{index + 1}</span>
                  <div className="flex items-end justify-between gap-5">
                    <h3 className="text-xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] sm:text-2xl">{capability}</h3>
                    <ArrowUpRight size={17} strokeWidth={1.4} className="shrink-0 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">Mobile thinking</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="max-w-5xl text-[clamp(2.4rem,5vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.06em]">
                Experience<br />comes<br />first<span className="text-[#e21d2b]">.</span>
              </p>
              <p className="mt-10 max-w-2xl text-base leading-7 text-black/50">
                The technology should support the product, not get in the way of it. We keep mobile experiences clear, purposeful and ready for real-world use.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {["User focused", "Performance minded", "Scalable", "Maintainable"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/55">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15"><Check size={13} strokeWidth={1.5} /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e6df] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">The process</span>
            </div>
            <h2 className="text-[clamp(4rem,8vw,8.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.07em]">
              Built<br />with<br />intent<span className="text-[#e21d2b]">.</span>
            </h2>
          </div>

          <div className="mt-20 border-t border-black/15 lg:mt-28">
            {service.process.map((step, index) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.05 }} className="group grid gap-6 border-b border-black/15 py-8 sm:grid-cols-[70px_0.7fr_1.3fr] sm:items-center sm:py-10 lg:py-12">
                <span className="text-[10px] tracking-[0.2em] text-black/30 transition-colors group-hover:text-[#e21d2b]">{step.number}</span>
                <h3 className="text-[clamp(2.2rem,4vw,4.5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-2">{step.title}</h3>
                <p className="max-w-lg text-sm leading-6 text-black/50 sm:text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">The result</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="max-w-5xl text-[clamp(2.4rem,5vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.06em]">
                {service.resultTitle.map((line, index) => <span key={line} className="block">{line}{index === service.resultTitle.length - 1 && <span className="text-[#e21d2b]">.</span>}</span>)}
              </p>
              <p className="mt-10 max-w-2xl text-base leading-7 text-white/45">{service.resultDescription}</p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {service.resultPoints.map((item) => (
              <div key={item} className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15"><Check size={13} strokeWidth={1.5} /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 pb-24 text-white sm:px-10 sm:pb-28 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e21d2b]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">Explore more</span>
          </div>
          <div className="border-t border-white/10">
            {relatedServices.map((item) => (
              <Link key={item.title} href={item.href} className="group flex items-center justify-between border-b border-white/10 py-7 sm:py-9">
                <span className="text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-none tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#e21d2b]">{item.title}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b]">
                  <ArrowUpRight size={17} strokeWidth={1.4} className="transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f2ed] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1600px] border-t border-black/15 pt-7">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">Start a conversation</span>
              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em]">
                Have a mobile<br />idea in mind<span className="text-[#e21d2b]">?</span>
              </h2>
            </div>
            <Link href="/contact" className="group flex w-fit items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em]">
              Start a project
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b] group-hover:text-white">
                <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
