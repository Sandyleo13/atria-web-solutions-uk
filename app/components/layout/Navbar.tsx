"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavbarProps = {
  logoVariant?: "light" | "dark";
};

const menuItems = [
  {
    number: "01",
    label: "Work",
    href: "/work",
  },
  {
    number: "02",
    label: "Services",
    href: "/services",
  },
  {
    number: "03",
    label: "About",
    href: "/about",
  },
  {
    number: "04",
    label: "Insights",
    href: "/insights",
  },
  {
    number: "05",
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar({
  logoVariant = "light",
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isDarkLogo = logoVariant === "dark";

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

  /*
   * Normal dark-hero pages:
   * - Light Atria logo
   * - White menu button
   *
   * Contact page:
   * - logoVariant="dark"
   * - Dark logo treatment
   * - Dark menu button
   *
   * When the full-screen menu opens:
   * - Always use the light header styling
   */
  const useLightHeader = menuOpen || !isDarkLogo;

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header
        className={`absolute inset-x-0 top-0 z-[100] ${
          isDarkLogo && !menuOpen
            ? "text-black"
            : "text-white"
        }`}
      >
        <div className="mx-auto flex h-24 w-full max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-14">
          {/* =================================================
              LOGO
          ================================================== */}
          <motion.a
            href="/"
            className="relative z-[110] block"
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.6,
            }}
          >
            <img
              src="/logo/atria-logo-light.webp"
              alt="Atria Web Solutions"
              width={180}
              height={70}
              className={`h-auto w-[125px] transition-all duration-300 sm:w-[145px] ${
                isDarkLogo && !menuOpen
                  ? "brightness-0"
                  : "brightness-100"
              }`}
            />
          </motion.a>

          {/* =================================================
              MENU BUTTON
          ================================================== */}
          <motion.div
            className="relative z-[110]"
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className={`group flex items-center gap-3 rounded-full px-4 py-2.5 backdrop-blur-md transition-all duration-300 ${
                useLightHeader
                  ? "border border-white/25 bg-black/20 text-white hover:border-white hover:bg-white hover:text-black"
                  : "border border-black/15 bg-black/[0.03] text-black hover:border-black hover:bg-black hover:text-white"
              }`}
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

      {/* =====================================================
          FULL SCREEN NAVIGATION
      ====================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[105] bg-[#0a0a0a] text-white"
            initial={{
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              clipPath: "inset(0 0 0% 0)",
            }}
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
              {/* =================================================
                  MENU HEADER
              ================================================== */}
              <motion.div
                className="flex items-center justify-between border-b border-white/15 pb-5"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.5,
                }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Navigation
                </span>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="group flex items-center gap-3 text-xs uppercase tracking-[0.18em]"
                >
                  <span>Close</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#e21d2b] group-hover:bg-[#e21d2b]">
                    <X
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:rotate-90"
                    />
                  </span>
                </button>
              </motion.div>

              {/* =================================================
                  NAVIGATION ITEMS
              ================================================== */}
              <nav className="flex flex-1 items-center">
                <div className="w-full max-w-[745px]">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.number}
                      href={item.href}
                      onClick={handleMenuItemClick}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.2 + index * 0.08,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative flex items-center border-b border-white/10 py-3 sm:py-3.5 lg:py-4"
                    >
                      {/* Number */}
                      <span className="mr-5 w-8 shrink-0 text-[10px] tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-[#e21d2b]">
                        {item.number}
                      </span>

                      {/* Label */}
                      <span className="text-[clamp(2.3rem,5.2vh,5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.055em] transition-all duration-500 group-hover:translate-x-3 group-hover:text-[#e21d2b]">
                        {item.label}
                      </span>

                      {/* Arrow */}
                      <ArrowUpRight
                        size={26}
                        strokeWidth={1.2}
                        className="ml-auto translate-x-[-8px] translate-y-[8px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      />

                      {/* Red hover line */}
                      <span className="absolute bottom-[-1px] left-0 h-px w-0 bg-[#e21d2b] transition-all duration-500 group-hover:w-full" />
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* =================================================
                  MENU FOOTER
              ================================================== */}
              <motion.div
                className="flex flex-col gap-5 border-t border-white/15 pt-5 sm:flex-row sm:items-end sm:justify-between"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.5,
                }}
              >
                {/* Email */}
                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-white/35">
                    Start a conversation
                  </p>

                  <a
                    href="mailto:hello@atriawebsolutions.co.uk"
                    className="text-sm text-white/75 transition-colors duration-300 hover:text-[#e21d2b]"
                  >
                    hello@atriawebsolutions.co.uk
                  </a>
                </div>

                {/* Social / Copyright */}
                <div className="flex gap-5 text-[9px] uppercase tracking-[0.25em] text-white/40">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Instagram
                  </a>

                  <span>© 2026 Atria</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}