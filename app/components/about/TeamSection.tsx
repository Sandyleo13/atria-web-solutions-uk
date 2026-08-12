"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { teamMembers } from "../../../data/team";

export default function TeamSection() {
  return (
    <section className="bg-[#f4f2ed] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
              Our team
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-6xl text-[clamp(4rem,8vw,8.5rem)] font-semibold uppercase leading-[0.76] tracking-[-0.075em]">
              The people
              <br />
              behind the work
              <span className="text-[#e21d2b]">.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-7 text-black/50 sm:text-lg">
              A focused team bringing together marketing, development and
              digital expertise to create meaningful experiences for our
              clients.
            </p>
          </motion.div>
        </div>

        {/* Team cards */}
        <div className="mt-28 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
              className="group relative flex min-h-[480px] flex-col justify-between overflow-hidden border border-black/15 bg-[#e9e6df] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-black/30 sm:min-h-[520px] sm:p-9 lg:min-h-[560px]"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-semibold tracking-[0.25em] text-black/30 transition-colors duration-300 group-hover:text-[#e21d2b]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-all duration-500 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b]">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    className="text-black/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-white"
                  />
                </div>
              </div>

              {/* Center content */}
              <div>
                <div className="mb-8 h-px w-10 bg-[#e21d2b] transition-all duration-500 group-hover:w-24" />

                <h3 className="max-w-[420px] text-[clamp(2.5rem,4vw,4.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.065em]">
                  {member.name}
                  <span className="text-[#e21d2b]">.</span>
                </h3>

                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                  {member.role}
                </p>
              </div>

              {/* Social links */}
              <div className="border-t border-black/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-black/30">
                    Connect
                  </span>

                  <div className="flex gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn profile of ${member.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/45 transition-all duration-300 hover:border-[#e21d2b] hover:bg-[#e21d2b] hover:text-white"
                    >
                      <span className="text-[11px] font-bold leading-none">
                        in
                      </span>
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/45 transition-all duration-300 hover:border-[#e21d2b] hover:bg-[#e21d2b] hover:text-white"
                    >
                      <Mail size={14} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#e21d2b] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
