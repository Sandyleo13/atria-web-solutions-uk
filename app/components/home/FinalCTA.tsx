"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-[#f4f2ed] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border-t border-black/15 pt-7"
        >
          <div className="grid gap-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-end">
            {/* Label */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#e21d2b]" />

                <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-black/40">
                  Let's work together
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em] text-[#0a0a0a]">
                  Ready to start<span className="text-[#e21d2b]">?</span>
                </h2>

                <p className="mt-4 max-w-md text-sx leading-6 text-black/50">
                  Have a project in mind? Let's create something meaningful
                  together.
                </p>
              </div>

              <a
                href="/contact"
                className="group flex w-fit shrink-0 items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#0a0a0a]"
              >
                <span className="border-b border-black/30 pb-2 transition-colors duration-300 group-hover:border-[#e21d2b] group-hover:text-[#e21d2b]">
                  Start a project
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b] group-hover:text-white">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}