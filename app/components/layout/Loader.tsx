"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] text-white"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src="/logo/atria-logo-light.webp"
              alt="Atria Web Solutions"
              width={220}
              height={220}
              priority
              className="h-auto w-[170px] sm:w-[200px]"
            />
          </motion.div>

          {/* Brand name */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.35,
              ease: "easeOut",
            }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/70">
              Atria Web Solutions
            </p>
          </motion.div>

          {/* Bottom progress line */}
          <div className="absolute bottom-8 left-6 right-6 sm:left-10 sm:right-10">
            <div className="mb-2 flex justify-between text-[9px] uppercase tracking-[0.25em] text-white/40">
              <span>Loading</span>
              <span>Atria UK</span>
            </div>

            <div className="h-px w-full overflow-hidden bg-white/15">
              <motion.div
                className="h-full origin-left bg-[#E3342F]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.45,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
