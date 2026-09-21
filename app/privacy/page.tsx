"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Information we collect",
    content: (
      <>
        <p>
          When you contact Atria Web Solutions, request our services, or
          otherwise interact with our website, we may collect information that
          you voluntarily provide to us.
        </p>

        <p>
          This may include your name, email address, company name, telephone
          number, project information, and any other information you choose to
          provide when contacting us.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "How we use your information",
    content: (
      <>
        <p>
          We use the information you provide to respond to enquiries, discuss
          potential projects, provide our services, communicate with you, and
          manage our relationship with clients and prospective clients.
        </p>

        <p>
          We may also use information to improve our website, services, and
          overall customer experience.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Website information",
    content: (
      <>
        <p>
          When you visit our website, certain technical information may be
          collected automatically, such as browser type, device information,
          approximate location, pages visited, and general website usage data.
        </p>

        <p>
          This information may be used to understand how visitors interact
          with our website and to improve its performance and usability.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Cookies",
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to support
          website functionality, understand website usage, and improve the
          visitor experience.
        </p>

        <p>
          You can control or restrict cookies through your browser settings.
          Disabling certain cookies may affect some website functionality.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Sharing information",
    content: (
      <>
        <p>
          We do not sell your personal information. Information may be shared
          with trusted service providers where reasonably necessary to operate
          our business, provide requested services, maintain our website, or
          process enquiries.
        </p>

        <p>
          Where third-party services are used, they may process information in
          accordance with their own privacy policies and applicable
          requirements.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Data security",
    content: (
      <>
        <p>
          We take reasonable measures to protect information against
          unauthorised access, alteration, disclosure, or destruction.
        </p>

        <p>
          However, no method of transmitting or storing information online can
          be guaranteed to be completely secure.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Data retention",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes for which it was collected, including
          fulfilling business, contractual, accounting, legal, or reporting
          requirements.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Your rights",
    content: (
      <>
        <p>
          Depending on your circumstances and applicable law, you may have
          rights concerning your personal information, including rights to
          request access, correction, restriction, or deletion of certain
          information.
        </p>

        <p>
          If you have a question about information we hold about you, please
          contact us using the details below.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Contact",
    content: (
      <>
        <p>
          If you have any questions about this Privacy Policy or how we handle
          personal information, please contact us.
        </p>

        <a
          href="mailto:hello@atriawebsolutions.co.uk"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-[#e21d2b]"
        >
          hello@atriawebsolutions.co.uk
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </a>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#090909]">
      {/* Dark logo / menu for light legal page */}

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-6 pb-24 pt-40 sm:px-10 sm:pb-28 sm:pt-44 lg:px-14 lg:pb-32 lg:pt-48">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#e21d2b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/45">
              Legal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="mt-12 max-w-6xl text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.78] tracking-[-0.08em]"
          >
            Privacy
            <br />
            Policy<span className="text-[#e21d2b]">.</span>
          </motion.h1>

          <div className="mt-16 flex flex-col gap-6 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
              Atria Web Solutions
            </p>

            <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
              Last updated: September 2026
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="border-t border-black/10 bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.45fr_1.55fr] lg:gap-20">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Your privacy
              </span>
            </div>

            <div>
              <p className="max-w-5xl text-[clamp(2rem,4vw,4.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.06em]">
                We respect the information you trust us with
                <span className="text-[#e21d2b]">.</span>
              </p>

              <p className="mt-8 max-w-3xl text-base leading-7 text-black/55">
                This Privacy Policy explains how Atria Web Solutions handles
                information collected through our website and interactions with
                our business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POLICY SECTIONS
      ====================================================== */}
      <section className="bg-[#f7f5f0] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="border-t border-black/15">
            {sections.map((section, index) => (
              <motion.article
                key={section.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.03,
                }}
                className="grid gap-8 border-b border-black/10 py-10 sm:py-14 lg:grid-cols-[0.25fr_0.75fr] lg:gap-12"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#e21d2b]">
                    {section.number}
                  </span>

                  <ArrowDown
                    size={14}
                    strokeWidth={1.2}
                    className="mt-[-1px] text-black/25"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-7 max-w-3xl space-y-5 text-sm leading-7 text-black/55">
                    {section.content}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#0a0a0a] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1.55fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Questions
              </span>
            </div>

            <div>
              <p className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.87] tracking-[-0.06em]">
                Have a question about your data?
                <span className="text-[#e21d2b]">.</span>
              </p>

              <a
                href="mailto:hello@atriawebsolutions.co.uk"
                className="group mt-10 inline-flex items-center gap-3 border-b border-white/20 pb-3 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-[#e21d2b] hover:text-[#e21d2b]"
              >
                Contact Atria
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}