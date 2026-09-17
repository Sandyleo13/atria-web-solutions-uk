export type WebDevelopmentService = {
  slug: string;
  number: string;
  title: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  challenges: string[];
  capabilities: string[];
  technologies: string[];
  approach: {
    title: string;
    description: string;
  }[];
};

export const webDevelopmentServices: WebDevelopmentService[] = [
  {
    slug: "business-websites",
    number: "01",
    title: "Business Websites",
    heroTitle:
      "Websites built to turn your digital presence into a business asset.",
    heroDescription:
      "We create strategic, high-performance websites that help businesses communicate clearly, build trust and generate meaningful enquiries.",
    intro:
      "Your website is often the first interaction someone has with your business. We combine strategy, design and technology to create websites that look credible, communicate your value and make it easy for customers to take action.",
    challenges: [
      "Creating a professional online presence",
      "Communicating your services clearly",
      "Generating qualified enquiries",
      "Building customer trust",
      "Creating a scalable digital foundation",
    ],
    capabilities: [
      "Business Website Design",
      "Responsive Development",
      "Lead Generation",
      "Conversion-Focused UX",
      "SEO Foundations",
      "Analytics Integration",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MySQL",
    ],
    approach: [
      {
        title: "Discover",
        description:
          "We understand your business, audience, competitors and objectives before defining the website strategy.",
      },
      {
        title: "Structure",
        description:
          "We create the information architecture and user journeys that make your website easy to navigate.",
      },
      {
        title: "Design",
        description:
          "We turn the strategy into a distinctive visual experience aligned with your brand.",
      },
      {
        title: "Develop",
        description:
          "We build a fast, responsive and scalable website ready to support your business.",
      },
    ],
  },

  {
    slug: "corporate-websites",
    number: "02",
    title: "Corporate Websites",
    heroTitle:
      "Digital platforms that communicate credibility, scale and ambition.",
    heroDescription:
      "We build sophisticated corporate websites for organisations that need their digital presence to reflect the quality of their business.",
    intro:
      "Corporate websites need to communicate more than information. They need to establish authority, present complex organisations clearly and create confidence among customers, partners, investors and employees.",
    challenges: [
      "Communicating a complex organisation",
      "Presenting multiple services or divisions",
      "Building authority and trust",
      "Creating a scalable content structure",
      "Supporting multiple audiences",
    ],
    capabilities: [
      "Corporate Website Design",
      "Information Architecture",
      "Multi-Page Platforms",
      "Content Management",
      "Investor & Partner Experiences",
      "SEO Architecture",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Headless CMS",
      "Node.js",
      "Cloud Platforms",
    ],
    approach: [
      {
        title: "Position",
        description:
          "We define the digital positioning and hierarchy of your organisation.",
      },
      {
        title: "Structure",
        description:
          "We organise complex information into a clear and intuitive experience.",
      },
      {
        title: "Design",
        description:
          "We create a visual system that communicates credibility and distinction.",
      },
      {
        title: "Build",
        description:
          "We develop a scalable platform that can grow alongside the organisation.",
      },
    ],
  },

  {
    slug: "landing-pages",
    number: "03",
    title: "Landing Pages",
    heroTitle:
      "Focused digital experiences designed around one clear objective.",
    heroDescription:
      "We create high-converting landing pages for campaigns, products, services and marketing initiatives.",
    intro:
      "A landing page has one job. Whether the objective is generating leads, promoting a service, launching a product or supporting a campaign, we remove unnecessary friction and focus the experience around the desired action.",
    challenges: [
      "Improving campaign performance",
      "Increasing conversion rates",
      "Communicating an offer quickly",
      "Reducing user friction",
      "Creating campaign-specific experiences",
    ],
    capabilities: [
      "Campaign Landing Pages",
      "Lead Generation Pages",
      "Product Launch Pages",
      "Conversion Optimisation",
      "A/B Testing Foundations",
      "Analytics & Tracking",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Analytics",
      "Marketing Integrations",
    ],
    approach: [
      {
        title: "Objective",
        description:
          "We define the single most important action the landing page needs to drive.",
      },
      {
        title: "Message",
        description:
          "We structure the content around the audience, offer and value proposition.",
      },
      {
        title: "Experience",
        description:
          "We design a focused interface that guides visitors naturally toward action.",
      },
      {
        title: "Optimise",
        description:
          "We prepare the experience for measurement, testing and continuous improvement.",
      },
    ],
  },

  {
    slug: "custom-web-applications",
    number: "04",
    title: "Custom Web Applications",
    heroTitle:
      "Complex ideas turned into scalable digital products.",
    heroDescription:
      "We design and develop custom web applications that solve specific business problems and create new digital capabilities.",
    intro:
      "Off-the-shelf software does not always fit the way a business works. We build custom web applications around your processes, users and requirements — from internal platforms to customer-facing digital products.",
    challenges: [
      "Replacing manual processes",
      "Connecting disconnected systems",
      "Building custom business tools",
      "Creating customer portals",
      "Developing scalable digital products",
    ],
    capabilities: [
      "Custom Web Applications",
      "Business Dashboards",
      "Customer Portals",
      "CRM Platforms",
      "API Integrations",
      "Workflow Automation",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PHP",
      "Laravel",
      "MySQL",
    ],
    approach: [
      {
        title: "Understand",
        description:
          "We map your existing processes, users and technical requirements.",
      },
      {
        title: "Architect",
        description:
          "We define the technical architecture, database structure and application flows.",
      },
      {
        title: "Develop",
        description:
          "We build the application in focused stages so functionality can be tested and refined.",
      },
      {
        title: "Scale",
        description:
          "We design the platform so new functionality can be added as your requirements evolve.",
      },
    ],
  },

  {
    slug: "cms-development",
    number: "05",
    title: "CMS Development",
    heroTitle:
      "Flexible content systems that give your team control.",
    heroDescription:
      "We create content management systems that make it easier for teams to publish, manage and evolve digital experiences.",
    intro:
      "A website should not become dependent on developers for every content change. We create structured content systems that give your team the control they need while maintaining a consistent digital experience.",
    challenges: [
      "Managing website content efficiently",
      "Reducing developer dependency",
      "Creating structured content",
      "Managing large websites",
      "Supporting multiple content types",
    ],
    capabilities: [
      "CMS Architecture",
      "Custom CMS Development",
      "Headless CMS",
      "Content Models",
      "Admin Dashboards",
      "Content Workflows",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Headless CMS",
      "Node.js",
      "MySQL",
    ],
    approach: [
      {
        title: "Map",
        description:
          "We identify the content types, publishing workflows and people who will manage the system.",
      },
      {
        title: "Model",
        description:
          "We create structured content models that keep the system flexible and scalable.",
      },
      {
        title: "Build",
        description:
          "We connect the content system to a fast and modern digital experience.",
      },
      {
        title: "Enable",
        description:
          "We give your team the tools and workflows needed to manage content confidently.",
      },
    ],
  },

  {
    slug: "website-redesigns",
    number: "06",
    title: "Website Redesigns",
    heroTitle:
      "Transforming outdated websites into modern digital experiences.",
    heroDescription:
      "We redesign existing websites to improve usability, visual quality, performance and business results.",
    intro:
      "A website can become outdated long before a business does. We analyse what is working, identify what is holding the experience back and redesign the platform around modern user expectations and business goals.",
    challenges: [
      "Outdated visual design",
      "Poor mobile experience",
      "Slow website performance",
      "Confusing navigation",
      "Low conversion rates",
    ],
    capabilities: [
      "UX Audits",
      "Visual Redesign",
      "Website Modernisation",
      "Performance Optimisation",
      "Mobile Optimisation",
      "Technical Migration",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Modern CMS",
    ],
    approach: [
      {
        title: "Audit",
        description:
          "We analyse your existing website, user experience, performance and content.",
      },
      {
        title: "Reframe",
        description:
          "We identify what should stay, what should change and where new opportunities exist.",
      },
      {
        title: "Redesign",
        description:
          "We create a modern interface and clearer experience around your users.",
      },
      {
        title: "Rebuild",
        description:
          "We implement the new experience with modern technology and improved performance.",
      },
    ],
  },
];

export function getWebDevelopmentService(slug: string) {
  return webDevelopmentServices.find(
    (service) => service.slug === slug
  );
}