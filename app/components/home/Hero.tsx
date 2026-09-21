"use client";

import { useState, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Search,
  Megaphone,
  Target,
  ShoppingCart,
  Smartphone,
  Sparkles,
} from "lucide-react";

import ParticleNetwork, {
  type TechNode,
} from "./ParticleNetwork";

const techNodes: TechNode[] = [
  {
    id: "web",
    label: "Web Development",
    shortLabel: "Web Development",
    x: 0.60,
    y: 0.22,
  },
  {
    id: "seo",
    label: "SEO",
    shortLabel: "SEO",
    x: 0.79,
    y: 0.25,
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    shortLabel: "Marketing",
    x: 0.88,
    y: 0.40,
  },
  {
    id: "ai",
    label: "AI & Automation",
    shortLabel: "AI & Automation",
    x: 0.90,
    y: 0.61,
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    shortLabel: "Mobile Apps",
    x: 0.77,
    y: 0.80,
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    shortLabel: "E-Commerce",
    x: 0.54,
    y: 0.77,
  },
  {
    id: "strategy",
    label: "Strategy",
    shortLabel: "Strategy",
    x: 0.43,
    y: 0.42,
  },
];

const nodeIcons = {
  web: Code2,
  seo: Search,
  marketing: Megaphone,
  ai: Sparkles,
  mobile: Smartphone,
  ecommerce: ShoppingCart,
  strategy: Target,
};

export default function Hero() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(
    null
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 75,
    damping: 22,
    mass: 0.45,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 75,
    damping: 22,
    mass: 0.45,
  });

  const visualX = useTransform(
    smoothX,
    [-1, 1],
    [-8, 8]
  );

  const visualY = useTransform(
    smoothY,
    [-1, 1],
    [-6, 6]
  );

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredNode(null);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-[#03070c]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">
        {/* Deep radial atmosphere */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_70%_48%,rgba(38,78,180,0.13),transparent_32%)]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_82%_30%,rgba(77,104,255,0.08),transparent_24%)]
          "
        />

        {/* Subtle vignette */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.55)_100%)]
          "
        />

        <ParticleNetwork
          mouseX={smoothX.get()}
          mouseY={smoothY.get()}
          hoveredNode={hoveredNode}
          nodes={techNodes}
        />
      </div>

      {/* =====================================================
          TOP GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0 z-[2]
          h-40
          bg-gradient-to-b
          from-[#03070c]
          to-transparent
        "
      />

      {/* =====================================================
          LEFT DARKNESS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0 z-[2]
          bg-gradient-to-r
          from-[#03070c]/95
          via-[#03070c]/70
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0 z-[2]
          h-48
          bg-gradient-to-t
          from-[#03070c]
          to-transparent
        "
      />

      {/* =====================================================
          INTERACTIVE TECHNOLOGY NODES
      ===================================================== */}

      <motion.div
        style={{
          x: visualX,
          y: visualY,
        }}
        className="
          pointer-events-none
          absolute inset-0 z-[5]
          hidden lg:block
        "
      >
        {techNodes.map((node) => {
          const Icon =
            nodeIcons[
              node.id as keyof typeof nodeIcons
            ];

          const active = hoveredNode === node.id;

          return (
            <div
              key={node.id}
              className="pointer-events-auto absolute"
              style={{
                left: `${node.x * 100}%`,
                top: `${node.y * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() =>
                setHoveredNode(node.id)
              }
              onMouseLeave={() =>
                setHoveredNode(null)
              }
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                {/* Node */}
                <motion.div
                  animate={{
                    scale: active ? 1.12 : 1,
                    borderColor: active
                      ? "rgba(105,150,255,0.9)"
                      : "rgba(150,180,255,0.5)",
                    boxShadow: active
                      ? "0 0 30px rgba(70,120,255,0.35)"
                      : "0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-[#050a12]/75
                    backdrop-blur-md
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={1.4}
                    className="text-white/85"
                  />

                  <span
                    className="
                      absolute
                      inset-[-6px]
                      rounded-full
                      border
                      border-blue-400/10
                    "
                  />
                </motion.div>

                {/* Label */}
                <div
                  className={`
                    whitespace-nowrap
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-white"
                        : "text-white/60"
                    }
                  `}
                >
                  {node.shortLabel}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* =====================================================
          CENTRAL CORE
      ===================================================== */}

      <motion.div
        style={{
          x: visualX,
          y: visualY,
        }}
        className="
          pointer-events-none
          absolute
          left-[69%]
          top-[49%]
          z-[4]
          hidden
          -translate-x-1/2
          -translate-y-1/2
          lg:block
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border
            border-blue-300/40
            bg-blue-500/[0.04]
            shadow-[0_0_70px_rgba(65,105,255,0.28)]
            backdrop-blur-sm
          "
        >
          <div
            className="
              absolute
              inset-3
              rounded-full
              border
              border-blue-300/20
            "
          />

          <div
            className="
              absolute
              h-3
              w-3
              rounded-full
              bg-blue-200
              shadow-[0_0_25px_rgba(130,170,255,1)]
            "
          />

          <span
            className="
              absolute
              -bottom-7
              text-[8px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            Atria
          </span>
        </motion.div>
      </motion.div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1600px]
          flex-col
          justify-center
          px-6
          pb-20
          pt-32
          sm:px-10
          lg:px-14
        "
      >
        <div className="max-w-[670px]">
          {/* Eyebrow */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-7
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-blue-400
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-white/60
                sm:text-xs
              "
            >
              Digital solutions for a smarter tomorrow
            </span>
          </motion.div>

          {/* Heading */}

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.95,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                text-[clamp(3.6rem,7.5vw,8.2rem)]
                font-light
                leading-[0.86]
                tracking-[-0.065em]
                text-white
              "
            >
              Technology
              <br />
              that fuels
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-blue-300
                  via-blue-500
                  to-indigo-500
                  bg-clip-text
                  text-transparent
                "
              >
                growth.
              </span>
            </motion.h1>
          </div>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="
              mt-8
              max-w-[480px]
              text-sm
              leading-6
              text-white/60
              sm:text-base
            "
          >
            We build powerful websites, intuitive apps and
            data-driven marketing strategies that help
            businesses grow, engage and stay ahead.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <a
              href="#services"
              className="
                group
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                bg-white
                px-6
                py-3
                text-xs
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-blue-500
                hover:text-white
              "
            >
              <span>Start a Project</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              />
            </a>

            <a
              href="#work"
              className="
                group
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                border
                border-white/20
                px-6
                py-3
                text-xs
                font-medium
                text-white
                transition-all
                duration-300
                hover:border-white/50
                hover:bg-white/5
              "
            >
              <span>Explore Our Work</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              />
            </a>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE NETWORK
        ===================================================== */}

        <div
          className="
            relative
            mt-14
            h-[220px]
            w-full
            lg:hidden
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-16
              w-16
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-blue-400/40
              bg-blue-500/5
              shadow-[0_0_40px_rgba(60,100,255,0.2)]
            "
          >
            <Sparkles
              size={18}
              className="text-blue-300"
            />
          </div>

          {techNodes.slice(0, 5).map((node, index) => {
            const positions = [
              "left-[5%] top-[10%]",
              "right-[5%] top-[12%]",
              "right-[2%] bottom-[8%]",
              "left-[8%] bottom-[5%]",
              "left-1/2 top-[2%]",
            ];

            return (
              <div
                key={node.id}
                className={`
                  absolute
                  ${positions[index]}
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.03]
                  px-3
                  py-2
                  text-[8px]
                  uppercase
                  tracking-[0.16em]
                  text-white/60
                  backdrop-blur-md
                `}
              >
                {node.shortLabel}
              </div>
            );
          })}
        </div>

        {/* =====================================================
            SCROLL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="
            absolute
            bottom-8
            right-6
            hidden
            items-center
            gap-4
            text-white/40
            sm:flex
            lg:right-14
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
            "
          >
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown
              size={16}
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>

        {/* Section number */}

        <div
          className="
            absolute
            bottom-8
            left-6
            hidden
            text-[10px]
            tracking-[0.25em]
            text-white/25
            sm:block
            lg:left-14
          "
        >
          01 / 06
        </div>
      </div>
    </section>
  );
}