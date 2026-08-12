"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const menuItems = [
  {
    number: "01",
    label: "Work",
    href: "#work",
    description: "Selected digital experiences",
    image: "/images/hero-bg.png",
  },
  {
    number: "02",
    label: "Services",
    href: "#services",
    description: "Digital solutions built to grow",
    image: "/images/hero-bg.png",
  },
  {
    number: "03",
    label: "About",
    href: "#about",
    description: "The people behind Atria",
    image: "/images/hero-bg.png",
  },
  {
    number: "04",
    label: "Insights",
    href: "#insights",
    description: "Ideas, thinking and digital trends",
    image: "/images/hero-bg.png",
  },
  {
    number: "05",
    label: "Contact",
    href: "#contact",
    description: "Let's start something",
    image: "/images/hero-bg.png",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-[100]">
        <div className="mx-auto flex h-24 w-full max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-14">
          <motion.a
            href="/"
            className="relative z-[110]"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <Image
              src="/logo/atria-logo-light.webp"
              alt="Atria Web Solutions"
              width={180}
              height={70}
              priority
              className="h-auto w-[125px] sm:w-[145px]"
            />
          </motion.a>

          <motion.div
            className="relative z-[110] flex items-center gap-5"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
          >
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="group flex items-center gap-3 rounded-full border border-white/25 bg-black/20 px-4 py-2.5 text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                Menu
              </span>

              <Menu
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          </motion.div>
        </div>
      </header>

      {/* Full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[105] bg-[#0a0a0a] text-white"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{
              clipPath: "inset(0 0 100% 0)",
              transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col overflow-hidden px-6 pb-6 pt-24 sm:px-10 lg:px-14">
              {/* Menu header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Navigation
                </span>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="group flex items-center gap-3 text-xs uppercase tracking-[0.18em]"
                >
                  Close
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b]">
                    <X
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:rotate-90"
                    />
                  </span>
                </button>
              </div>

              {/* Main menu */}
              <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 overflow-hidden py-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-8">
                <nav className="flex flex-col justify-center">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.number}
                      href={item.href}
                      onMouseEnter={() => setActiveItem(item)}
                      onFocus={() => setActiveItem(item)}
                      onClick={handleMenuItemClick}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2 + index * 0.08,
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center border-b border-white/10 py-3 sm:py-3.5 lg:py-4"
                    >
                      <span className="mr-5 w-8 text-[10px] tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-[#e21d2b]">
                        {item.number}
                      </span>

                      <span className="text-[clamp(2.3rem,5.2vh,5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.055em] transition-all duration-500 group-hover:translate-x-3 group-hover:text-[#e21d2b]">
                        {item.label}
                      </span>

                      <ArrowUpRight
                        size={28}
                        strokeWidth={1.2}
                        className="ml-auto opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                      />
                    </motion.a>
                  ))}
                </nav>

                {/* Preview */}
                <div className="hidden items-center lg:flex">
                  <motion.div
                    key={activeItem.label}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45 }}
                    className="w-full"
                  >
                    <div className="relative aspect-[16/9] max-h-[42vh] overflow-hidden bg-white/5">
                      <Image
                        src={activeItem.image}
                        alt=""
                        fill
                        sizes="40vw"
                        className="object-cover grayscale"
                      />

                      <div className="absolute inset-0 bg-black/20" />

                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                        <p className="max-w-xs text-sm leading-5 text-white/70">
                          {activeItem.description}
                        </p>

                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e21d2b]">
                          <ArrowUpRight size={17} strokeWidth={1.6} />
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between text-[10px] uppercase tracking-[0.25em] text-white/35">
                      <span>Atria Web Solutions</span>
                      <span>UK</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom */}
              <div className="flex flex-col gap-5 border-t border-white/15 pt-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-white/35">
                    Start a conversation
                  </p>

                  <a
                    href="mailto:hello@atriawebsolutions.com"
                    className="text-sm text-white/75 transition-colors hover:text-[#e21d2b]"
                  >
                    hello@atriawebsolutions.com
                  </a>
                </div>

                <div className="flex gap-5 text-[9px] uppercase tracking-[0.25em] text-white/40">
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>

                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>

                  <span>© 2026 Atria</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
