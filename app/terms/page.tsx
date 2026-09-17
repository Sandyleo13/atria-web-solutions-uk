"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const sections = [
  {
    number: "01",
    title: "About these terms",
    content: (
      <>
        <p>
          These Terms and Conditions govern your use of the Atria Web Solutions
          website and the general provision of services by Atria Web Solutions.
        </p>

        <p>
          By using our website or engaging our services, you agree to comply
          with these terms together with any specific terms agreed for an
          individual project or engagement.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Our services",
    content: (
      <>
        <p>
          Atria Web Solutions provides digital services including web
          development, e-commerce solutions, SEO and digital marketing,
          branding and design, email marketing, mobile application development,
          and online reputation management.
        </p>

        <p>
          The exact scope, deliverables, timelines, responsibilities, and fees
          for a project will be agreed with the client before work begins.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Project agreements",
    content: (
      <>
        <p>
          Where applicable, individual projects may be governed by a proposal,
          statement of work, quotation, contract, or other written agreement.
        </p>

        <p>
          If there is a conflict between these general terms and a specific
          written agreement, the terms of the specific agreement will generally
          apply to the relevant project.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Client responsibilities",
    content: (
      <>
        <p>
          Clients are responsible for providing accurate information, content,
          approvals, access credentials, assets, and other materials reasonably
          required to complete a project.
        </p>

        <p>
          Delays in providing required information or approvals may affect
          project timelines and delivery dates.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Payments",
    content: (
      <>
        <p>
          Fees, payment schedules, deposits, and any applicable taxes or
          additional costs will be communicated as part of the relevant project
          agreement or quotation.
        </p>

        <p>
          Work may be paused where agreed payments are overdue, subject to the
          terms of the applicable project agreement.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Intellectual property",
    content: (
      <>
        <p>
          Ownership and licensing of project materials, source code, designs,
          content, branding assets, and third-party materials will depend on
          the terms agreed for the relevant project.
        </p>

        <p>
          Third-party software, libraries, fonts, stock assets, plugins, APIs,
          and other external resources may remain subject to their own licence
          terms.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Website content",
    content: (
      <>
        <p>
          We aim to keep the information on our website accurate and
          up-to-date. However, website content is provided for general
          information and may change without notice.
        </p>

        <p>
          We do not guarantee that the website will always be available,
          uninterrupted, or completely free from errors.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Limitation of liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Atria Web Solutions will
          not be responsible for losses arising from circumstances outside our
          reasonable control.
        </p>

        <p>
          Nothing in these terms is intended to exclude or restrict liability
          where doing so would not be permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Third-party services",
    content: (
      <>
        <p>
          Digital projects may involve third-party platforms, hosting
          providers, payment providers, APIs, software, plugins, or other
          external services.
        </p>

        <p>
          Such services are generally subject to their own terms and policies,
          and their availability or operation may be outside our direct
          control.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Changes to these terms",
    content: (
      <>
        <p>
          We may update these terms from time to time to reflect changes to our
          services, website, or applicable requirements.
        </p>

        <p>
          The latest version published on this page will apply to future use of
          the website unless different terms have been agreed in writing for a
          specific project.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Contact",
    content: (
      <>
        <p>
          If you have questions about these Terms and Conditions or our
          services, please contact Atria Web Solutions.
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

export default function TermsPage() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#090909]">
      {/* Dark logo / menu for light legal page */}
      <Navbar logoVariant="dark" />

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
            Terms &
            <br />
            Conditions<span className="text-[#e21d2b]">.</span>
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
                Working together
              </span>
            </div>

            <div>
              <p className="max-w-5xl text-[clamp(2rem,4vw,4.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.06em]">
                Clear expectations create better projects
                <span className="text-[#e21d2b]">.</span>
              </p>

              <p className="mt-8 max-w-3xl text-base leading-7 text-black/55">
                These terms set out the general conditions that apply when using
                the Atria Web Solutions website and engaging our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TERMS SECTIONS
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
                Need clarification before we start?
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

      <Footer />
    </main>
  );
}