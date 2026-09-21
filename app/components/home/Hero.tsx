"use client";

import {
  useRef,
  useState,
  type MouseEvent,
} from "react";

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

/* =========================================================
   TECHNOLOGY NODES
========================================================= */

const techNodes: TechNode[] = [
  {
    id: "web",
    label: "Web Development",
    shortLabel: "Web Development",
    x: 0.57,
    y: 0.23,
  },
  {
    id: "seo",
    label: "SEO",
    shortLabel: "SEO",
    x: 0.73,
    y: 0.25,
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    shortLabel: "Marketing",
    x: 0.84,
    y: 0.39,
  },
  {
    id: "ai",
    label: "AI & Automation",
    shortLabel: "AI & Automation",
    x: 0.86,
    y: 0.60,
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    shortLabel: "Mobile Apps",
    x: 0.74,
    y: 0.79,
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    shortLabel: "E-Commerce",
    x: 0.54,
    y: 0.74,
  },
  {
    id: "strategy",
    label: "Strategy",
    shortLabel: "Strategy",
    x: 0.43,
    y: 0.42,
  },
];

/* =========================================================
   NODE ICONS
========================================================= */

const nodeIcons = {
  web: Code2,
  seo: Search,
  marketing: Megaphone,
  ai: Sparkles,
  mobile: Smartphone,
  ecommerce: ShoppingCart,
  strategy: Target,
};

/* =========================================================
   NODE LABEL POSITION
========================================================= */

const labelPosition: Record<
  string,
  "left" | "right"
> = {
  web: "left",
  seo: "right",
  marketing: "right",
  ai: "right",
  mobile: "right",
  ecommerce: "right",
  strategy: "left",
};

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  /*
   * IMPORTANT:
   *
   * This ref is read directly by the canvas.
   * Updating it does NOT trigger a React render.
   *
   * This is one of the main performance optimizations.
   */
  const mouseRef = useRef({
    x: 0,
    y: 0,
    active: false,
  });

  const [hoveredNode, setHoveredNode] =
    useState<string | null>(null);

  /* =======================================================
     SUBTLE HERO PARALLAX
  ======================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 24,
    mass: 0.45,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 24,
    mass: 0.45,
  });

  /*
   * VERY small movement.
   *
   * The galaxy should feel alive,
   * not like the entire page is moving.
   */
  const visualX = useTransform(
    smoothX,
    [-1, 1],
    [-7, 7]
  );

  const visualY = useTransform(
    smoothY,
    [-1, 1],
    [-5, 5]
  );

  /* =======================================================
     MOUSE MOVE
  ======================================================= */

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    /*
     * Canvas coordinates.
     *
     * These are written directly into the ref.
     */
    mouseRef.current.x =
      event.clientX - rect.left;

    mouseRef.current.y =
      event.clientY - rect.top;

    mouseRef.current.active = true;

    /*
     * Normalized coordinates for the tiny
     * Framer Motion parallax.
     */
    const x =
      (event.clientX - rect.left) /
      rect.width;

    const y =
      (event.clientY - rect.top) /
      rect.height;

    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  /* =======================================================
     MOUSE LEAVE
  ======================================================= */

  const handleMouseLeave = () => {
    mouseRef.current.active = false;

    mouseX.set(0);
    mouseY.set(0);

    setHoveredNode(null);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#02070d]
      "
    >
      {/* ===================================================
          GALAXY BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Main blue atmosphere */}

        <div
          className="
            absolute
            left-[45%]
            top-[20%]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/[0.045]
            blur-[110px]
          "
        />

        {/* Small central atmosphere */}

        <div
          className="
            absolute
            left-[69%]
            top-[49%]
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.07]
            blur-[90px]
          "
        />

        {/* Canvas particle system */}

        <ParticleNetwork
          nodes={techNodes}
          mouseRef={mouseRef}
        />
      </div>

      {/* ===================================================
          TOP VIGNETTE
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[2]
          h-44
          bg-gradient-to-b
          from-[#02070d]
          to-transparent
        "
      />

      {/* ===================================================
          LEFT GRADIENT
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-gradient-to-r
          from-[#03070c]/72
          via-[#03070c]/48
          to-transparent
        "
      />

      {/* ===================================================
          BOTTOM FADE
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[2]
          h-48
          bg-gradient-to-t
          from-[#02070d]
          to-transparent
        "
      />

      {/* ===================================================
          INTERACTIVE TECHNOLOGY NODES
      =================================================== */}

      <motion.div
        style={{
          x: visualX,
          y: visualY,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-[5]
          hidden
          lg:block
        "
      >
        {techNodes.map((node) => {
          const Icon =
            nodeIcons[
              node.id as keyof typeof nodeIcons
            ];

          const active =
            hoveredNode === node.id;

          const labelSide =
            labelPosition[node.id] ?? "right";

          return (
            <div
              key={node.id}
              className="
                pointer-events-auto
                absolute
                -translate-x-1/2
                -translate-y-1/2
              "
              style={{
                left: `${node.x * 100}%`,
                top: `${node.y * 100}%`,
              }}
              onMouseEnter={() =>
                setHoveredNode(node.id)
              }
              onMouseLeave={() =>
                setHoveredNode(null)
              }
            >
              <div
                className={`
                  flex
                  items-center
                  gap-3
                  ${
                    labelSide === "left"
                      ? "flex-row-reverse"
                      : "flex-row"
                  }
                `}
              >
                {/* NODE */}

                <motion.div
                  animate={{
                    scale: active ? 1.1 : 1,

                    borderColor: active
                      ? "rgba(120,165,255,0.85)"
                      : "rgba(120,155,210,0.38)",

                    boxShadow: active
                      ? "0 0 28px rgba(65,120,255,0.28)"
                      : "0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
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
                    bg-[#030913]/80
                    backdrop-blur-sm
                  "
                >
                  {/* Outer ring */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-[-5px]
                      rounded-full
                      border
                      border-blue-400/[0.08]
                    "
                  />

                  {/* Icon */}

                  <Icon
                    size={17}
                    strokeWidth={1.35}
                    className={`
                      transition-colors
                      duration-300
                      ${
                        active
                          ? "text-blue-200"
                          : "text-white/65"
                      }
                    `}
                  />

                  {/* Small active dot */}

                  <motion.span
                    animate={{
                      opacity: active
                        ? 1
                        : 0,
                      scale: active
                        ? 1
                        : 0.5,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      absolute
                      -right-1
                      -top-1
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-blue-300
                      shadow-[0_0_10px_rgba(110,165,255,0.9)]
                    "
                  />
                </motion.div>

                {/* LABEL */}

                <span
                  className={`
                    whitespace-nowrap
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-white"
                        : "text-white/50"
                    }
                  `}
                >
                  {node.shortLabel}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* ===================================================
          CENTRAL ATRIA CORE
      =================================================== */}

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
        {/* Outer orbit */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -inset-9
            rounded-full
            border
            border-blue-400/[0.09]
          "
        />

        {/* Main core */}

        <motion.div
          animate={{
            scale: [1, 1.035, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            border-blue-300/30
            bg-blue-500/[0.025]
          "
        >
          {/* Inner ring */}

          <span
            className="
              absolute
              inset-2
              rounded-full
              border
              border-blue-300/[0.14]
            "
          />

          {/* Core glow */}

          <span
            className="
              absolute
              h-2.5
              w-2.5
              rounded-full
              bg-blue-100
              shadow-[0_0_18px_rgba(130,180,255,0.95)]
            "
          />

          {/* Label */}

          <span
            className="
              absolute
              -bottom-7
              text-[8px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/35
            "
          >
            Atria
          </span>
        </motion.div>
      </motion.div>

      {/* ===================================================
          HERO CONTENT
      =================================================== */}

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
          pb-24
          pt-32
          sm:px-10
          lg:px-14
        "
      >
        {/*
          ===================================================
          LEFT CONTENT POSITIONING

          The entire content block is lifted slightly on
          desktop so the large heading has enough room below.

          Mobile stays centered naturally.
        ===================================================
        */}

        <div
          className="
            max-w-[650px]
            lg:max-w-[660px]
            lg:-translate-y-10
            xl:-translate-y-12
          "
        >
          {/* =================================================
              EYEBROW
          ================================================= */}

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
              delay: 0.15,
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
                text-white/55
                sm:text-xs
              "
            >
              Digital solutions for a smarter tomorrow
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <div
            className="
              overflow-visible
              pb-3
            "
          >
            <motion.h1
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.95,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                text-[clamp(3.5rem,7.3vw,8rem)]
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
                  from-[#69a9ff]
                  via-[#4c83ff]
                  to-[#6366f1]
                  bg-clip-text
                  text-transparent
              "
              >
                growth.
              </span>
            </motion.h1>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

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
              delay: 0.65,
              duration: 0.7,
            }}
            className="
              mt-6
              max-w-[470px]
              text-sm
              leading-6
              text-white/55
              sm:text-[15px]
              sm:leading-6
            "
          >
            We build powerful websites, intuitive apps and
            data-driven marketing strategies that help
            businesses grow, engage and stay ahead.
          </motion.p>

          {/* =================================================
              CTA
          ================================================= */}

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
              delay: 0.85,
              duration: 0.7,
            }}
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            {/* Primary */}

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
              <span>
                Start a Project
              </span>

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

            {/* Secondary */}

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
                text-white/90
                transition-all
                duration-300
                hover:border-white/40
                hover:bg-white/[0.04]
              "
            >
              <span>
                Explore Our Work
              </span>

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

          {/* =================================================
              MOBILE NETWORK LABEL
          ================================================= */}

          <div
            className="
              mt-16
              grid
              grid-cols-2
              gap-2
              lg:hidden
            "
          >
            {techNodes.slice(0, 6).map(
              (node) => (
                <div
                  key={node.id}
                  className="
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-3
                    py-2
                    text-center
                    text-[8px]
                    uppercase
                    tracking-[0.15em]
                    text-white/45
                  "
                >
                  {node.shortLabel}
                </div>
              )
            )}
          </div>
        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
          className="
            absolute
            bottom-8
            right-6
            hidden
            items-center
            gap-4
            text-white/35
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
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown
              size={16}
              strokeWidth={1.4}
            />
          </motion.div>
        </motion.div>

        {/* =================================================
            SECTION NUMBER
        ================================================= */}

        <div
          className="
            absolute
            bottom-8
            left-6
            hidden
            text-[10px]
            tracking-[0.25em]
            text-white/20
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