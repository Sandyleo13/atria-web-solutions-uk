"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Mail, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
  },
  {
    title: "E-Commerce",
  },
  {
    title: "SEO & Digital Marketing",
  },
  {
    title: "Branding & Design",
  },
  {
    title: "Email Marketing",
  },
  {
    title: "Mobile App Development",
  },
  {
    title: "Online Reputation Management",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden bg-[#f7f5f0]">

      {/* Contact */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:pt-10"
            >
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#e21d2b]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/45">
                  Your project
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-10 text-[clamp(4rem,7vw,7.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.075em] text-[#090909]">
                Tell us
                <br />
                more<span className="text-[#e21d2b]">.</span>
              </h1>

              {/* Divider */}
              <div className="mt-14 h-px w-full bg-black/10" />

              {/* Intro */}
              <p className="mt-8 max-w-md text-base leading-7 text-black/60">
                Let's discuss your ideas, goals and how we can help you achieve
                them.
              </p>

              {/* Contact details */}
              <div className="mt-12 space-y-8">
                {/* Email */}
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/15">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>

                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-black/40">
                      Email
                    </span>

                    <a
                      href="mailto:hello@atriawebsolutions.co.uk"
                      className="mt-2 block text-sm font-medium text-black transition-colors hover:text-[#e21d2b]"
                    >
                      hello@atriawebsolutions.co.uk
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/15">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>

                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-black/40">
                      Location
                    </span>

                    <p className="mt-2 text-sm font-medium text-black">
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="mt-12 border-t border-black/10 pt-6">
                <p className="text-xs leading-6 text-black/45">
                  We typically reply within{" "}
                  <span className="font-semibold text-black">
                    24 business hours.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* RIGHT SIDE - FORM CARD */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="rounded-[6px] border border-black/[0.08] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">
                {submitted ? (
                  <SuccessState onReset={() => setSubmitted(false)} />
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* NAME + EMAIL */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <InputField
                        label="Name"
                        name="name"
                        placeholder="Your name"
                        required
                      />

                      <InputField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    {/* COMPANY */}
                    <div className="mt-6">
                      <InputField
                        label="Company"
                        name="company"
                        placeholder="Your company"
                      />
                    </div>

                    {/* SERVICES */}
                    <fieldset className="mt-8">
                      <legend className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/55">
                        What can we help with?
                        <span className="ml-1 text-[#e21d2b]">*</span>
                      </legend>

                      <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => {
                          const selected = selectedServices.includes(
                            service.title,
                          );

                          return (
                            <label
                              key={service.title}
                              className="cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                name="services"
                                value={service.title}
                                checked={selected}
                                onChange={() => {
                                  setSelectedServices((current) =>
                                    selected
                                      ? current.filter(
                                          (item) => item !== service.title,
                                        )
                                      : [...current, service.title],
                                  );
                                }}
                                className="sr-only"
                              />

                              <span
                                className={`flex min-h-[50px] items-center justify-between rounded-[6px] border px-4 py-3 text-[10px] font-medium uppercase tracking-[0.08em] transition-all duration-200 ${
                                  selected
                                    ? "border-[#e21d2b] bg-[#fff4f4] text-black"
                                    : "border-black/10 bg-white text-black/55 hover:border-black/25"
                                }`}
                              >
                                <span className="pr-2">{service.title}</span>

                                <span
                                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border transition-all duration-200 ${
                                    selected
                                      ? "border-[#e21d2b] bg-[#e21d2b]"
                                      : "border-black/20 bg-white"
                                  }`}
                                >
                                  {selected && (
                                    <Check
                                      size={10}
                                      strokeWidth={3}
                                      className="text-white"
                                    />
                                  )}
                                </span>
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    {/* MESSAGE */}
                    <div className="mt-8">
                      <label
                        htmlFor="message"
                        className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-black/55"
                      >
                        Tell us about your project
                        <span className="ml-1 text-[#e21d2b]">*</span>
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="A little context about your project, goals or challenges..."
                        className="mt-4 w-full resize-none rounded-[6px] border border-black/10 bg-white px-4 py-4 text-sm leading-6 text-black outline-none transition-all placeholder:text-black/25 focus:border-[#e21d2b] focus:ring-2 focus:ring-[#e21d2b]/10"
                      />
                    </div>

                    {/* BOTTOM */}
                    <div className="mt-8 flex flex-col gap-6 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                      {/* Privacy */}
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10">
                          <ShieldCheck
                            size={18}
                            strokeWidth={1.4}
                            className="text-black/55"
                          />
                        </div>

                        <p className="max-w-[280px] text-[10px] leading-5 text-black/45">
                          By submitting this form, you agree that we can use the
                          information provided to respond to your enquiry.
                        </p>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="group flex min-h-[54px] shrink-0 items-center justify-between gap-8 rounded-[5px] bg-[#e21d2b] px-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-[#c91825] hover:shadow-[0_10px_30px_rgba(226,29,43,0.2)]"
                      >
                        Send enquiry
                        <span className="flex h-7 w-7 items-center justify-center">
                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:rotate-45"
                          />
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom statement */}
      <section className="bg-[#0a0a0a] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-px w-10 bg-[#e21d2b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                Start here
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold uppercase leading-[0.87] tracking-[-0.06em]">
                Good projects start with good conversations
                <span className="text-[#e21d2b]">.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* --------------------------------
   INPUT COMPONENT
-------------------------------- */

function InputField({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/55">
        {label}

        {required && <span className="ml-1 text-[#e21d2b]">*</span>}
      </span>

      <input
        required={required}
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-3 h-[56px] w-full rounded-[6px] border border-black/10 bg-white px-4 text-sm text-black outline-none transition-all placeholder:text-black/25 focus:border-[#e21d2b] focus:ring-2 focus:ring-[#e21d2b]/10"
      />
    </label>
  );
}

/* --------------------------------
   SUCCESS STATE
-------------------------------- */

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-[620px] flex-col items-center justify-center px-6 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e21d2b] text-white">
        <Check size={27} strokeWidth={1.5} />
      </div>

      <h2 className="mt-8 text-[clamp(3rem,6vw,6rem)] font-semibold uppercase leading-[0.8] tracking-[-0.07em]">
        Thanks<span className="text-[#e21d2b]">.</span>
      </h2>

      <p className="mt-7 max-w-md text-sm leading-6 text-black/50">
        Your enquiry has been received. We'll review the details and get back to
        you as soon as possible.
      </p>

      <button
        onClick={onReset}
        className="mt-8 text-[9px] font-semibold uppercase tracking-[0.25em] text-black/45 transition-colors hover:text-[#e21d2b]"
      >
        Send another enquiry
      </button>
    </motion.div>
  );
}
