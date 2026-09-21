"use client";

import {
  useEffect,
  useRef,
  type RefObject,
} from "react";

export type TechNode = {
  id: string;
  label: string;
  shortLabel: string;
  x: number;
  y: number;
};

type MouseState = {
  x: number;
  y: number;
  active: boolean;
};

type Props = {
  nodes: TechNode[];
  mouseRef: RefObject<MouseState>;
};

type Particle = {
  x: number;
  y: number;

  baseX: number;
  baseY: number;

  size: number;
  alpha: number;

  angle: number;
  radius: number;

  speed: number;
  orbit: number;

  driftX: number;
  driftY: number;
};

type CoreParticle = {
  x: number;
  y: number;

  angle: number;
  radius: number;

  speed: number;

  size: number;
  alpha: number;
};

type Connection = {
  a: Particle;
  b: Particle;
  distance: number;
};

const TAU = Math.PI * 2;

/* =========================================================
   VISUAL SERVICE ANCHORS

   These are intentionally independent from node.x / node.y.

   The problem in the previous version was that the canvas
   coordinate system and the DOM node coordinate system were
   not perfectly identical.

   These values match the visual positions of the service
   circles in the hero composition.

   x / y are normalized:
   0 = left/top
   1 = right/bottom
========================================================= */

const SERVICE_ANCHORS: Record<
  string,
  { x: number; y: number }
> = {
  strategy: {
    x: 0.45,
    y: 0.42,
  },

  web: {
    x: 0.605,
    y: 0.228,
  },

  "web-development": {
    x: 0.605,
    y: 0.228,
  },

  seo: {
    x: 0.722,
    y: 0.249,
  },

  marketing: {
    x: 0.819,
    y: 0.386,
  },

  ai: {
    x: 0.832,
    y: 0.601,
  },

  "ai-automation": {
    x: 0.832,
    y: 0.601,
  },

  automation: {
    x: 0.832,
    y: 0.601,
  },

  mobile: {
    x: 0.717,
    y: 0.794,
  },

  "mobile-apps": {
    x: 0.717,
    y: 0.794,
  },

  ecommerce: {
    x: 0.517,
    y: 0.745,
  },

  "e-commerce": {
    x: 0.517,
    y: 0.745,
  },

  "e-commerce-development": {
    x: 0.517,
    y: 0.745,
  },
};

/* =========================================================
   NORMALIZE NODE IDS
========================================================= */

const normalizeNodeId = (
  node: TechNode
) => {
  return (
    node.id ||
    node.shortLabel ||
    node.label
  )
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

/* =========================================================
   FIND VISUAL ANCHOR

   We first use our corrected visual positions.

   If a node isn't in the map, we safely fall back to
   the coordinates supplied by the parent.
========================================================= */

const getServiceAnchor = (
  node: TechNode
) => {
  const normalized =
    normalizeNodeId(node);

  const direct =
    SERVICE_ANCHORS[normalized];

  if (direct) {
    return direct;
  }

  /* -----------------------------------------------
     Additional semantic matching
  ----------------------------------------------- */

  const value =
    `${node.id} ${node.label} ${node.shortLabel}`
      .toLowerCase();

  if (
    value.includes("strategy")
  ) {
    return SERVICE_ANCHORS.strategy;
  }

  if (
    value.includes("web")
  ) {
    return SERVICE_ANCHORS.web;
  }

  if (
    value.includes("seo")
  ) {
    return SERVICE_ANCHORS.seo;
  }

  if (
    value.includes("marketing")
  ) {
    return SERVICE_ANCHORS.marketing;
  }

  if (
    value.includes("ai") ||
    value.includes("automation")
  ) {
    return SERVICE_ANCHORS.ai;
  }

  if (
    value.includes("mobile") ||
    value.includes("app")
  ) {
    return SERVICE_ANCHORS.mobile;
  }

  if (
    value.includes("commerce") ||
    value.includes("ecommerce")
  ) {
    return SERVICE_ANCHORS.ecommerce;
  }

  return {
    x: node.x,
    y: node.y,
  };
};

export default function ParticleNetwork({
  nodes,
  mouseRef,
}: Props) {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx =
      canvas.getContext("2d", {
        alpha: true,
      });

    if (!ctx) {
      return;
    }

    let width = 0;
    let height = 0;

    let centerX = 0;
    let centerY = 0;

    let particles: Particle[] = [];

    let coreParticles: CoreParticle[] =
      [];

    let frameId = 0;
    let lastFrame = 0;

    let isVisible = true;
    let destroyed = false;

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const isMobile =
      window.matchMedia(
        "(max-width: 767px)"
      ).matches;

    /* =====================================================
       PERFORMANCE
    ===================================================== */

    const PARTICLE_COUNT =
      isMobile ? 55 : 190;

    const CORE_PARTICLE_COUNT =
      isMobile ? 22 : 55;

    const CONNECTION_DISTANCE =
      isMobile ? 145 : 205;

    const MAX_CONNECTIONS =
      isMobile ? 3 : 5;

    const MAX_DPR =
      isMobile ? 1.15 : 1.35;

    /* =====================================================
       RESIZE
    ===================================================== */

    const resize = () => {
      const rect =
        canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      if (
        width <= 0 ||
        height <= 0
      ) {
        return;
      }

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        MAX_DPR
      );

      canvas.width =
        Math.round(width * dpr);

      canvas.height =
        Math.round(height * dpr);

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      /*
       * ATRIA CORE
       *
       * Keep this aligned with the
       * visual center in the screenshot.
       */
      centerX =
        width * 0.69;

      centerY =
        height * 0.49;

      createParticles();

      createCoreParticles();
    };

    /* =====================================================
       OUTER PARTICLES
    ===================================================== */

    const createParticles = () => {
      const radiusX =
        Math.min(
          width * 0.62,
          980
        );

      const radiusY =
        Math.min(
          height * 0.52,
          480
        );

      particles = [];

      for (
        let i = 0;
        i < PARTICLE_COUNT;
        i++
      ) {
        const angle =
          Math.random() * TAU;

        const random =
          Math.random();

        const distance =
          random < 0.62
            ? Math.pow(
                random / 0.62,
                0.72
              ) * 0.72
            : 0.72 +
              Math.random() * 0.28;

        const radius =
          Math.min(
            1,
            distance
          );

        const horizontalScale =
          0.85 +
          Math.random() * 0.3;

        const verticalScale =
          0.82 +
          Math.random() * 0.25;

        const x =
          centerX +
          Math.cos(angle) *
            radiusX *
            radius *
            horizontalScale;

        const y =
          centerY +
          Math.sin(angle) *
            radiusY *
            radius *
            verticalScale;

        const direction =
          Math.random() > 0.5
            ? 1
            : -1;

        particles.push({
          x,
          y,

          baseX: x,
          baseY: y,

          size:
            Math.random() > 0.84
              ? Math.random() * 1.6 +
                1.4
              : Math.random() * 1.05 +
                0.65,

          alpha:
            Math.random() * 0.38 +
            0.38,

          angle,

          radius,

          speed:
            (0.00012 +
              Math.random() *
                0.00028) *
            direction,

          orbit:
            0.45 +
            Math.random() * 1.5,

          driftX:
            (Math.random() - 0.5) *
            0.08,

          driftY:
            (Math.random() - 0.5) *
            0.08,
        });
      }
    };

    /* =====================================================
       CORE PARTICLES
    ===================================================== */

    const createCoreParticles = () => {
      coreParticles = [];

      const coreRadius =
        Math.min(
          width,
          height
        ) * 0.19;

      for (
        let i = 0;
        i < CORE_PARTICLE_COUNT;
        i++
      ) {
        const angle =
          Math.random() * TAU;

        const radius =
          Math.pow(
            Math.random(),
            1.8
          ) * coreRadius;

        coreParticles.push({
          angle,

          radius,

          speed:
            (0.00035 +
              Math.random() * 0.0007) *
            (Math.random() > 0.5
              ? 1
              : -1),

          size:
            Math.random() > 0.8
              ? Math.random() * 1.5 +
                1.1
              : Math.random() * 0.85 +
                0.55,

          alpha:
            Math.random() * 0.3 +
            0.55,

          x:
            centerX +
            Math.cos(angle) *
              radius,

          y:
            centerY +
            Math.sin(angle) *
              radius *
              0.72,
        });
      }
    };

    /* =====================================================
       UPDATE OUTER PARTICLES
    ===================================================== */

    const updateParticles = (
      time: number
    ) => {
      const mouse =
        mouseRef.current;

      const radiusX =
        Math.min(
          width * 0.62,
          980
        );

      const radiusY =
        Math.min(
          height * 0.52,
          480
        );

      for (
        const particle of particles
      ) {
        if (
          !prefersReducedMotion
        ) {
          particle.angle +=
            particle.speed;

          const targetX =
            centerX +
            Math.cos(
              particle.angle
            ) *
              radiusX *
              particle.radius;

          const targetY =
            centerY +
            Math.sin(
              particle.angle
            ) *
              radiusY *
              particle.radius;

          particle.x +=
            (targetX -
              particle.x) *
            0.0022 *
            particle.orbit;

          particle.y +=
            (targetY -
              particle.y) *
            0.0022 *
            particle.orbit;

          particle.x +=
            particle.driftX;

          particle.y +=
            particle.driftY;
        }

        if (
          mouse.active
        ) {
          const dx =
            particle.x -
            mouse.x;

          const dy =
            particle.y -
            mouse.y;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (
            distance < 200 &&
            distance > 1
          ) {
            const force =
              (1 -
                distance / 200) *
              0.75;

            particle.x +=
              (dx / distance) *
              force;

            particle.y +=
              (dy / distance) *
              force;
          }
        }
      }
    };

    /* =====================================================
       UPDATE CORE PARTICLES
    ===================================================== */

    const updateCoreParticles = (
      time: number
    ) => {
      if (
        prefersReducedMotion
      ) {
        return;
      }

      for (
        const particle of coreParticles
      ) {
        particle.angle +=
          particle.speed;

        const breathing =
          1 +
          Math.sin(
            time * 0.0012 +
              particle.angle
          ) *
            0.035;

        particle.x =
          centerX +
          Math.cos(
            particle.angle
          ) *
            particle.radius *
            breathing;

        particle.y =
          centerY +
          Math.sin(
            particle.angle
          ) *
            particle.radius *
            0.72 *
            breathing;
      }
    };

    /* =====================================================
       OUTER CONNECTIONS
    ===================================================== */

    const getConnections =
      (): Connection[] => {
        const result: Connection[] =
          [];

        const connectionCount =
          new Uint8Array(
            particles.length
          );

        for (
          let i = 0;
          i < particles.length;
          i++
        ) {
          const a =
            particles[i];

          for (
            let j = i + 1;
            j < particles.length;
            j++
          ) {
            if (
              connectionCount[i] >=
                MAX_CONNECTIONS ||
              connectionCount[j] >=
                MAX_CONNECTIONS
            ) {
              continue;
            }

            const b =
              particles[j];

            const dx =
              a.x - b.x;

            const dy =
              a.y - b.y;

            const distance =
              Math.sqrt(
                dx * dx +
                  dy * dy
              );

            if (
              distance >
              CONNECTION_DISTANCE
            ) {
              continue;
            }

            result.push({
              a,
              b,
              distance,
            });

            connectionCount[i]++;
            connectionCount[j]++;
          }
        }

        return result;
      };

    /* =====================================================
       OUTER PARTICLE NETWORK
    ===================================================== */

    const drawParticleNetwork =
      () => {
        const connections =
          getConnections();

        for (
          const connection of
            connections
        ) {
          const {
            a,
            b,
            distance,
          } = connection;

          const strength =
            1 -
            distance /
              CONNECTION_DISTANCE;

          const alpha =
            0.07 +
            strength * 0.32;

          const midX =
            (a.x + b.x) *
            0.5;

          const midY =
            (a.y + b.y) *
            0.5;

          const dx =
            b.x - a.x;

          const dy =
            b.y - a.y;

          const length =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          const normalX =
            length > 0
              ? -dy / length
              : 0;

          const normalY =
            length > 0
              ? dx / length
              : 0;

          const curve =
            Math.min(
              distance * 0.055,
              8
            );

          ctx.beginPath();

          ctx.moveTo(
            a.x,
            a.y
          );

          ctx.quadraticCurveTo(
            midX +
              normalX * curve,
            midY +
              normalY * curve,
            b.x,
            b.y
          );

          ctx.strokeStyle =
            `rgba(65,125,255,${alpha})`;

          ctx.lineWidth =
            strength > 0.6
              ? 0.9
              : 0.6;

          ctx.stroke();
        }
      };

    /* =====================================================
       SERVICE → PARTICLE CONNECTIONS
    ===================================================== */

    const drawNodeConnections =
      () => {
        for (
          const node of nodes
        ) {
          const anchor =
            getServiceAnchor(node);

          const nodeX =
            anchor.x * width;

          const nodeY =
            anchor.y * height;

          const nearby =
            particles
              .map(
                (particle) => {
                  const dx =
                    particle.x -
                    nodeX;

                  const dy =
                    particle.y -
                    nodeY;

                  return {
                    particle,
                    distance:
                      Math.sqrt(
                        dx * dx +
                          dy * dy
                      ),
                  };
                }
              )
              .filter(
                (item) =>
                  item.distance <
                  250
              )
              .sort(
                (a, b) =>
                  a.distance -
                  b.distance
              );

          for (
            let i = 0;
            i <
              Math.min(
                5,
                nearby.length
              );
            i++
          ) {
            const item =
              nearby[i];

            const strength =
              1 -
              item.distance /
                250;

            ctx.beginPath();

            ctx.moveTo(
              nodeX,
              nodeY
            );

            const midX =
              (nodeX +
                item.particle.x) *
              0.5;

            const midY =
              (nodeY +
                item.particle.y) *
              0.5;

            ctx.quadraticCurveTo(
              midX,
              midY,
              item.particle.x,
              item.particle.y
            );

            ctx.strokeStyle =
              `rgba(75,145,255,${
                0.12 +
                strength * 0.3
              })`;

            ctx.lineWidth =
              0.85;

            ctx.stroke();
          }
        }
      };

    /* =====================================================
       BEZIER HELPER
    ===================================================== */

    const getBezierPoint = (
      t: number,
      startX: number,
      startY: number,
      controlX: number,
      controlY: number,
      endX: number,
      endY: number
    ) => {
      const inv =
        1 - t;

      return {
        x:
          inv * inv * startX +
          2 *
            inv *
            t *
            controlX +
          t * t * endX,

        y:
          inv * inv * startY +
          2 *
            inv *
            t *
            controlY +
          t * t * endY,
      };
    };

    /* =====================================================
       ★ SERVICE → ATRIA BRANCHES

       This is the important part.

       Branches now use the same corrected visual
       anchors for both:
       - particle connections
       - highlighted ATRIA branches

       Strategy is intentionally much closer.
    ===================================================== */

    const drawServiceCoreConnections =
      (time: number) => {
        const CORE_PADDING =
          isMobile ? 22 : 27;

        const PARTICLE_SPEED =
          0.00032;

        const curveDirections = [
          1,   // Strategy
          -1,  // Web
          1,   // SEO
          -1,  // Marketing
          1,   // AI
          -1,  // Mobile
          1,   // E-Commerce
        ];

        for (
          let i = 0;
          i < nodes.length;
          i++
        ) {
          const node =
            nodes[i];

          const anchor =
            getServiceAnchor(node);

          const nodeX =
            anchor.x * width;

          const nodeY =
            anchor.y * height;

          const dx =
            nodeX - centerX;

          const dy =
            nodeY - centerY;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (
            distance < 1
          ) {
            continue;
          }

          const nx =
            dx / distance;

          const ny =
            dy / distance;

          /* ---------------------------------------------
             START

             Starts just outside the ATRIA ring.
          --------------------------------------------- */

          const startX =
            centerX +
            nx * CORE_PADDING;

          const startY =
            centerY +
            ny * CORE_PADDING;

          /* ---------------------------------------------
             END

             Exact service-node center.
          --------------------------------------------- */

          const endX =
            nodeX;

          const endY =
            nodeY;

          /* ---------------------------------------------
             PERPENDICULAR
          --------------------------------------------- */

          const perpendicularX =
            -ny;

          const perpendicularY =
            nx;

          /* ---------------------------------------------
             CURVE

             Much smaller than before.

             This prevents:
             ATRIA → branch → overshoot → node
             
             and instead creates:
             ATRIA → smooth branch → node
          --------------------------------------------- */

          let curveAmount =
            Math.min(
              distance * 0.045,
              30
            );

          /*
           * Strategy needs to sit close to ATRIA.
           * Make its branch almost direct.
           */
          const normalizedId =
            normalizeNodeId(node);

          if (
            normalizedId ===
              "strategy" ||
            node.label
              .toLowerCase()
              .includes("strategy")
          ) {
            curveAmount = 12;
          }

          curveAmount *=
            curveDirections[
              i %
                curveDirections.length
            ];

          const controlX =
            (startX + endX) *
              0.5 +
            perpendicularX *
              curveAmount;

          const controlY =
            (startY + endY) *
              0.5 +
            perpendicularY *
              curveAmount;

          const createPath =
            () => {
              ctx.beginPath();

              ctx.moveTo(
                startX,
                startY
              );

              ctx.quadraticCurveTo(
                controlX,
                controlY,
                endX,
                endY
              );
            };

          /* =================================================
             1. ATMOSPHERIC GLOW
          ================================================= */

          createPath();

          ctx.save();

          ctx.strokeStyle =
            "rgba(45,120,255,0.06)";

          ctx.lineWidth =
            isMobile ? 8 : 12;

          ctx.lineCap =
            "round";

          ctx.shadowBlur =
            isMobile ? 7 : 14;

          ctx.shadowColor =
            "rgba(45,125,255,0.4)";

          ctx.stroke();

          ctx.restore();

          /* =================================================
             2. BLUE GLOW
          ================================================= */

          createPath();

          ctx.save();

          ctx.strokeStyle =
            "rgba(65,140,255,0.18)";

          ctx.lineWidth =
            isMobile ? 3 : 4.5;

          ctx.lineCap =
            "round";

          ctx.shadowBlur =
            isMobile ? 5 : 10;

          ctx.shadowColor =
            "rgba(65,145,255,0.75)";

          ctx.stroke();

          ctx.restore();

          /* =================================================
             3. MAIN BRANCH
          ================================================= */

          const gradient =
            ctx.createLinearGradient(
              startX,
              startY,
              endX,
              endY
            );

          gradient.addColorStop(
            0,
            "rgba(230,247,255,1)"
          );

          gradient.addColorStop(
            0.08,
            "rgba(135,200,255,0.95)"
          );

          gradient.addColorStop(
            0.28,
            "rgba(65,145,255,0.82)"
          );

          gradient.addColorStop(
            0.58,
            "rgba(55,125,255,0.68)"
          );

          gradient.addColorStop(
            0.82,
            "rgba(65,140,255,0.64)"
          );

          gradient.addColorStop(
            1,
            "rgba(150,210,255,0.92)"
          );

          createPath();

          ctx.save();

          ctx.strokeStyle =
            gradient;

          ctx.lineWidth =
            isMobile ? 1.2 : 1.7;

          ctx.lineCap =
            "round";

          ctx.lineJoin =
            "round";

          ctx.stroke();

          ctx.restore();

          /* =================================================
             4. BRIGHT CORE SECTION
          ================================================= */

          const coreT =
            0.22;

          const corePoint =
            getBezierPoint(
              coreT,
              startX,
              startY,
              controlX,
              controlY,
              endX,
              endY
            );

          const coreGradient =
            ctx.createLinearGradient(
              startX,
              startY,
              corePoint.x,
              corePoint.y
            );

          coreGradient.addColorStop(
            0,
            "rgba(245,252,255,1)"
          );

          coreGradient.addColorStop(
            0.35,
            "rgba(150,210,255,0.92)"
          );

          coreGradient.addColorStop(
            1,
            "rgba(70,145,255,0)"
          );

          ctx.beginPath();

          ctx.moveTo(
            startX,
            startY
          );

          ctx.quadraticCurveTo(
            startX +
              (controlX -
                startX) *
                0.48,

            startY +
              (controlY -
                startY) *
                0.48,

            corePoint.x,
            corePoint.y
          );

          ctx.save();

          ctx.strokeStyle =
            coreGradient;

          ctx.lineWidth =
            isMobile ? 1.9 : 2.6;

          ctx.lineCap =
            "round";

          ctx.shadowBlur =
            isMobile ? 7 : 13;

          ctx.shadowColor =
            "rgba(80,165,255,0.95)";

          ctx.stroke();

          ctx.restore();

          /* =================================================
             5. BRIGHT FINAL NODE APPROACH

             This is what visually "locks" the branch
             into the service circle.
          ================================================= */

          const approachT =
            0.78;

          const approach =
            getBezierPoint(
              approachT,
              startX,
              startY,
              controlX,
              controlY,
              endX,
              endY
            );

          const nodeGradient =
            ctx.createLinearGradient(
              approach.x,
              approach.y,
              endX,
              endY
            );

          nodeGradient.addColorStop(
            0,
            "rgba(65,135,255,0.18)"
          );

          nodeGradient.addColorStop(
            0.45,
            "rgba(100,175,255,0.7)"
          );

          nodeGradient.addColorStop(
            1,
            "rgba(215,242,255,1)"
          );

          ctx.beginPath();

          ctx.moveTo(
            approach.x,
            approach.y
          );

          ctx.quadraticCurveTo(
            approach.x +
              (endX -
                approach.x) *
                0.5,

            approach.y +
              (endY -
                approach.y) *
                0.5,

            endX,
            endY
          );

          ctx.save();

          ctx.strokeStyle =
            nodeGradient;

          ctx.lineWidth =
            isMobile ? 1.5 : 2.1;

          ctx.lineCap =
            "round";

          ctx.shadowBlur =
            isMobile ? 7 : 13;

          ctx.shadowColor =
            "rgba(90,170,255,0.95)";

          ctx.stroke();

          ctx.restore();

          /* =================================================
             6. ANIMATED DATA PARTICLES
          ================================================= */

          if (
            !prefersReducedMotion
          ) {
            const phase =
              (i * 0.137) % 1;

            const t =
              (
                time *
                  PARTICLE_SPEED +
                phase
              ) % 1;

            const secondT =
              (t + 0.48) % 1;

            const drawTravelParticle =
              (
                particleT: number,
                size: number
              ) => {
                const point =
                  getBezierPoint(
                    particleT,
                    startX,
                    startY,
                    controlX,
                    controlY,
                    endX,
                    endY
                  );

                /* Halo */

                ctx.beginPath();

                ctx.arc(
                  point.x,
                  point.y,
                  size * 4,
                  0,
                  TAU
                );

                ctx.fillStyle =
                  "rgba(65,145,255,0.11)";

                ctx.fill();

                /* Bright core */

                ctx.beginPath();

                ctx.arc(
                  point.x,
                  point.y,
                  size,
                  0,
                  TAU
                );

                ctx.save();

                ctx.fillStyle =
                  "rgba(235,249,255,1)";

                ctx.shadowBlur =
                  isMobile
                    ? 7
                    : 12;

                ctx.shadowColor =
                  "rgba(80,165,255,1)";

                ctx.fill();

                ctx.restore();
              };

            drawTravelParticle(
              t,
              isMobile
                ? 1.3
                : 2
            );

            drawTravelParticle(
              secondT,
              isMobile
                ? 0.9
                : 1.35
            );
          }

          /* =================================================
             7. NODE CONNECTION POINT

             Exactly at the center of the service node.
          ================================================= */

          ctx.beginPath();

          ctx.arc(
            endX,
            endY,
            isMobile
              ? 1.7
              : 2.3,
            0,
            TAU
          );

          ctx.save();

          ctx.fillStyle =
            "rgba(215,240,255,1)";

          ctx.shadowBlur =
            isMobile ? 7 : 13;

          ctx.shadowColor =
            "rgba(75,155,255,1)";

          ctx.fill();

          ctx.restore();
        }
      };

    /* =====================================================
       CORE → OUTER PARTICLES
    ===================================================== */

    const drawCoreNetwork =
      () => {
        const nearby =
          particles
            .map(
              (particle) => {
                const dx =
                  particle.x -
                  centerX;

                const dy =
                  particle.y -
                  centerY;

                return {
                  particle,
                  distance:
                    Math.sqrt(
                      dx * dx +
                        dy * dy
                    ),
                };
              }
            )
            .filter(
              (item) =>
                item.distance <
                330
            )
            .sort(
              (a, b) =>
                a.distance -
                b.distance
            );

        for (
          let i = 0;
          i <
            Math.min(
              24,
              nearby.length
            );
          i++
        ) {
          const item =
            nearby[i];

          const strength =
            1 -
            item.distance /
              330;

          const dx =
            item.particle.x -
            centerX;

          const dy =
            item.particle.y -
            centerY;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          const nx =
            distance > 0
              ? -dy / distance
              : 0;

          const ny =
            distance > 0
              ? dx / distance
              : 0;

          const curve =
            (i % 2 === 0
              ? 1
              : -1) * 18;

          ctx.beginPath();

          ctx.moveTo(
            centerX,
            centerY
          );

          ctx.quadraticCurveTo(
            centerX +
              dx * 0.48 +
              nx * curve,

            centerY +
              dy * 0.48 +
              ny * curve,

            item.particle.x,
            item.particle.y
          );

          ctx.strokeStyle =
            `rgba(80,145,255,${
              0.12 +
              strength * 0.3
            })`;

          ctx.lineWidth =
            0.8;

          ctx.stroke();
        }
      };

    /* =====================================================
       INNER CORE NETWORK
    ===================================================== */

    const drawInnerCoreNetwork =
      () => {
        const maxDistance =
          Math.min(
            width,
            height
          ) * 0.075;

        for (
          let i = 0;
          i <
            coreParticles.length;
          i++
        ) {
          const a =
            coreParticles[i];

          for (
            let j = i + 1;
            j <
              coreParticles.length;
            j++
          ) {
            const b =
              coreParticles[j];

            const dx =
              a.x - b.x;

            const dy =
              a.y - b.y;

            const distance =
              Math.sqrt(
                dx * dx +
                  dy * dy
              );

            if (
              distance >
              maxDistance
            ) {
              continue;
            }

            const strength =
              1 -
              distance /
                maxDistance;

            ctx.beginPath();

            ctx.moveTo(
              a.x,
              a.y
            );

            const midX =
              (a.x + b.x) *
              0.5;

            const midY =
              (a.y + b.y) *
              0.5;

            ctx.quadraticCurveTo(
              midX,
              midY,
              b.x,
              b.y
            );

            ctx.strokeStyle =
              `rgba(95,155,255,${
                0.15 +
                strength * 0.36
              })`;

            ctx.lineWidth =
              strength > 0.65
                ? 0.85
                : 0.55;

            ctx.stroke();
          }
        }
      };

    /* =====================================================
       INNER CORE RAYS
    ===================================================== */

    const drawInnerCoreRays =
      (time: number) => {
        const rayCount =
          isMobile ? 8 : 18;

        const maxRadius =
          Math.min(
            width,
            height
          ) * 0.17;

        for (
          let i = 0;
          i < rayCount;
          i++
        ) {
          const angle =
            (i / rayCount) *
              TAU +
            time * 0.00008;

          const length =
            maxRadius *
            (0.55 +
              ((i * 17) % 10) /
                20);

          const startRadius =
            7;

          const startX =
            centerX +
            Math.cos(angle) *
              startRadius;

          const startY =
            centerY +
            Math.sin(angle) *
              startRadius *
              0.72;

          const endX =
            centerX +
            Math.cos(angle) *
              length;

          const endY =
            centerY +
            Math.sin(angle) *
              length *
              0.72;

          const gradient =
            ctx.createLinearGradient(
              startX,
              startY,
              endX,
              endY
            );

          gradient.addColorStop(
            0,
            "rgba(155,205,255,0.45)"
          );

          gradient.addColorStop(
            0.35,
            "rgba(80,140,255,0.22)"
          );

          gradient.addColorStop(
            1,
            "rgba(60,110,255,0)"
          );

          ctx.beginPath();

          ctx.moveTo(
            startX,
            startY
          );

          ctx.lineTo(
            endX,
            endY
          );

          ctx.strokeStyle =
            gradient;

          ctx.lineWidth =
            0.7;

          ctx.stroke();
        }
      };

    /* =====================================================
       GALAXY ARCS
    ===================================================== */

    const drawGalaxyArcs =
      () => {
        const radius =
          Math.min(
            width,
            height
          ) * 0.48;

        const arcCount =
          isMobile ? 3 : 8;

        for (
          let i = 0;
          i < arcCount;
          i++
        ) {
          const angle =
            (i / arcCount) *
              TAU +
            0.2;

          const startRadius =
            radius * 0.08;

          const endRadius =
            radius *
            (0.7 +
              (i % 3) * 0.08);

          const startX =
            centerX +
            Math.cos(angle) *
              startRadius;

          const startY =
            centerY +
            Math.sin(angle) *
              startRadius *
              0.72;

          const endX =
            centerX +
            Math.cos(
              angle + 0.25
            ) *
              endRadius;

          const endY =
            centerY +
            Math.sin(
              angle + 0.25
            ) *
              endRadius *
              0.72;

          const controlX =
            centerX +
            Math.cos(
              angle + 0.12
            ) *
              radius *
              0.43;

          const controlY =
            centerY +
            Math.sin(
              angle + 0.12
            ) *
              radius *
              0.43 *
              0.72;

          ctx.beginPath();

          ctx.moveTo(
            startX,
            startY
          );

          ctx.quadraticCurveTo(
            controlX,
            controlY,
            endX,
            endY
          );

          ctx.strokeStyle =
            "rgba(65,125,255,0.075)";

          ctx.lineWidth =
            0.55;

          ctx.stroke();
        }
      };

    /* =====================================================
       OUTER PARTICLES
    ===================================================== */

    const drawParticles =
      () => {
        for (
          const particle of particles
        ) {
          ctx.beginPath();

          ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            TAU
          );

          ctx.fillStyle =
            `rgba(115,175,255,${particle.alpha})`;

          ctx.fill();

          if (
            particle.size >
            1.25
          ) {
            ctx.beginPath();

            ctx.arc(
              particle.x,
              particle.y,
              particle.size * 3.2,
              0,
              TAU
            );

            ctx.fillStyle =
              "rgba(70,135,255,0.08)";

            ctx.fill();
          }
        }
      };

    /* =====================================================
       INNER PARTICLES
    ===================================================== */

    const drawInnerCoreParticles =
      () => {
        for (
          const particle of
            coreParticles
        ) {
          if (
            particle.size > 1
          ) {
            ctx.beginPath();

            ctx.arc(
              particle.x,
              particle.y,
              particle.size * 3.8,
              0,
              TAU
            );

            ctx.fillStyle =
              "rgba(90,155,255,0.11)";

            ctx.fill();
          }

          ctx.beginPath();

          ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            TAU
          );

          ctx.fillStyle =
            `rgba(165,205,255,${particle.alpha})`;

          ctx.fill();
        }
      };

    /* =====================================================
       CORE ENERGY
    ===================================================== */

    const drawCoreEnergy =
      (time: number) => {
        const pulse =
          prefersReducedMotion
            ? 1
            : 1 +
              Math.sin(
                time * 0.002
              ) *
                0.08;

        const glow =
          ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            150 * pulse
          );

        glow.addColorStop(
          0,
          "rgba(120,175,255,0.22)"
        );

        glow.addColorStop(
          0.25,
          "rgba(75,130,255,0.12)"
        );

        glow.addColorStop(
          0.55,
          "rgba(50,105,255,0.045)"
        );

        glow.addColorStop(
          1,
          "rgba(30,70,255,0)"
        );

        ctx.beginPath();

        ctx.fillStyle =
          glow;

        ctx.arc(
          centerX,
          centerY,
          150 * pulse,
          0,
          TAU
        );

        ctx.fill();
      };

    /* =====================================================
       ATRIA CORE
    ===================================================== */

    const drawCore =
      (time: number) => {
        const pulse =
          prefersReducedMotion
            ? 1
            : 1 +
              Math.sin(
                time * 0.0015
              ) *
                0.06;

        /* Core glow */

        const gradient =
          ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            125
          );

        gradient.addColorStop(
          0,
          "rgba(120,175,255,0.32)"
        );

        gradient.addColorStop(
          0.3,
          "rgba(70,120,255,0.13)"
        );

        gradient.addColorStop(
          1,
          "rgba(40,80,255,0)"
        );

        ctx.beginPath();

        ctx.fillStyle =
          gradient;

        ctx.arc(
          centerX,
          centerY,
          125,
          0,
          TAU
        );

        ctx.fill();

        /* Outer ring */

        ctx.beginPath();

        ctx.arc(
          centerX,
          centerY,
          45 * pulse,
          0,
          TAU
        );

        ctx.strokeStyle =
          "rgba(105,160,255,0.28)";

        ctx.lineWidth =
          0.75;

        ctx.stroke();

        /* Middle ring */

        ctx.beginPath();

        ctx.arc(
          centerX,
          centerY,
          36 * pulse,
          0,
          TAU
        );

        ctx.strokeStyle =
          "rgba(90,145,255,0.16)";

        ctx.lineWidth =
          0.6;

        ctx.stroke();

        /* Inner ring */

        ctx.beginPath();

        ctx.arc(
          centerX,
          centerY,
          29 * pulse,
          0,
          TAU
        );

        ctx.strokeStyle =
          "rgba(135,185,255,0.4)";

        ctx.lineWidth =
          0.85;

        ctx.stroke();

        /* Core point */

        ctx.beginPath();

        ctx.arc(
          centerX,
          centerY,
          4,
          0,
          TAU
        );

        ctx.fillStyle =
          "rgba(230,242,255,1)";

        ctx.shadowBlur =
          20;

        ctx.shadowColor =
          "rgba(90,155,255,1)";

        ctx.fill();

        ctx.shadowBlur = 0;
      };

    /* =====================================================
       RENDER
    ===================================================== */

    const render =
      (time: number) => {
        if (destroyed) {
          return;
        }

        /*
         * ~40 FPS
         */
        if (
          time - lastFrame <
          25
        ) {
          frameId =
            requestAnimationFrame(
              render
            );

          return;
        }

        lastFrame = time;

        if (!isVisible) {
          frameId =
            requestAnimationFrame(
              render
            );

          return;
        }

        ctx.clearRect(
          0,
          0,
          width,
          height
        );

        /* =================================================
           UPDATE
        ================================================= */

        updateParticles(time);

        updateCoreParticles(time);

        /* =================================================
           BACKGROUND
        ================================================= */

        drawGalaxyArcs();

        /* =================================================
           OUTER PARTICLE NETWORK
        ================================================= */

        drawParticleNetwork();

        /* =================================================
           SERVICE → PARTICLE NETWORK
        ================================================= */

        drawNodeConnections();

        /* =================================================
           ★ ATRIA → SERVICE BRANCHES
        ================================================= */

        drawServiceCoreConnections(
          time
        );

        /* =================================================
           CORE → PARTICLE NETWORK
        ================================================= */

        drawCoreNetwork();

        /* =================================================
           INNER CORE
        ================================================= */

        drawInnerCoreRays(time);

        drawInnerCoreNetwork();

        /* =================================================
           PARTICLES
        ================================================= */

        drawParticles();

        drawInnerCoreParticles();

        /* =================================================
           CORE
        ================================================= */

        drawCoreEnergy(time);

        drawCore(time);

        frameId =
          requestAnimationFrame(
            render
          );
      };

    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          isVisible =
            entry.isIntersecting;
        },
        {
          threshold: 0.05,
        }
      );

    observer.observe(canvas);

    /* =====================================================
       TAB VISIBILITY
    ===================================================== */

    const handleVisibility =
      () => {
        isVisible =
          document.visibilityState ===
          "visible";
      };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    /* =====================================================
       INITIALIZE
    ===================================================== */

    resize();

    window.addEventListener(
      "resize",
      resize,
      {
        passive: true,
      }
    );

    frameId =
      requestAnimationFrame(
        render
      );

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      destroyed = true;

      cancelAnimationFrame(
        frameId
      );

      observer.disconnect();

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, [nodes, mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        h-full
        w-full
      "
    />
  );
}