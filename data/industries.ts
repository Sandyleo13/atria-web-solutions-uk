export type Industry = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  challenges: string[];
  services: string[];
  approach: {
    title: string;
    description: string;
  }[];
};

export const industries: Industry[] = [
  {
    slug: "retail",
    number: "01",
    title: "Retail",
    shortTitle: "Retail",
    heroTitle: "Digital experiences built for modern retail.",
    heroDescription:
      "We create digital experiences that help retail brands connect with customers, simplify buying journeys and build stronger online presence.",
    intro:
      "Retail is no longer limited to the physical store. Customers discover products, compare options, interact with brands and purchase across multiple digital touchpoints. We design and develop experiences that connect those touchpoints into one clear journey.",
    challenges: [
      "Creating a strong digital presence",
      "Improving online customer journeys",
      "Increasing conversions",
      "Connecting marketing with technology",
      "Building scalable digital platforms",
    ],
    services: [
      "Website Development",
      "E-Commerce Development",
      "UI / UX Design",
      "SEO & Digital Marketing",
      "Brand Identity",
      "AI Solutions",
    ],
    approach: [
      {
        title: "Understand",
        description:
          "We start by understanding your customers, products, business model and digital goals.",
      },
      {
        title: "Design",
        description:
          "We create clear interfaces and digital journeys designed around real customer behaviour.",
      },
      {
        title: "Build",
        description:
          "Our development team turns the experience into fast, scalable and maintainable technology.",
      },
      {
        title: "Grow",
        description:
          "We continue improving the experience through SEO, analytics, content and digital marketing.",
      },
    ],
  },

  {
    slug: "hospitality",
    number: "02",
    title: "Hospitality",
    shortTitle: "Hospitality",
    heroTitle: "Digital experiences that make hospitality feel effortless.",
    heroDescription:
      "From discovery to booking and beyond, we build digital experiences that help hospitality brands create better guest journeys.",
    intro:
      "Hospitality depends on experience. Your digital presence is often the first interaction a guest has with your brand. We help hotels, restaurants, venues and hospitality businesses turn that first interaction into a meaningful journey.",
    challenges: [
      "Increasing direct bookings",
      "Creating better guest experiences",
      "Presenting locations and services effectively",
      "Improving mobile experiences",
      "Building stronger hospitality brands",
    ],
    services: [
      "Hospitality Websites",
      "Booking Experiences",
      "UI / UX Design",
      "Brand Identity",
      "SEO & Digital Marketing",
      "Digital Platforms",
    ],
    approach: [
      {
        title: "Discover",
        description:
          "We understand your guests, locations, services and the experience you want to create.",
      },
      {
        title: "Shape",
        description:
          "We transform that understanding into a visual and digital experience that reflects your brand.",
      },
      {
        title: "Build",
        description:
          "We develop responsive platforms designed to perform across every device.",
      },
      {
        title: "Improve",
        description:
          "We use data, SEO and ongoing optimisation to continuously improve digital performance.",
      },
    ],
  },

  {
    slug: "healthcare",
    number: "03",
    title: "Healthcare",
    shortTitle: "Healthcare",
    heroTitle: "Clearer digital experiences for healthcare.",
    heroDescription:
      "We design accessible, intuitive and trustworthy digital experiences for healthcare organisations and their audiences.",
    intro:
      "Healthcare experiences need clarity. Patients, professionals and organisations need to find the right information quickly and confidently. We combine thoughtful UX with reliable technology to create digital products that reduce complexity.",
    challenges: [
      "Making complex information easier to understand",
      "Creating accessible digital experiences",
      "Improving patient journeys",
      "Building trustworthy online platforms",
      "Connecting users with the right information",
    ],
    services: [
      "Healthcare Websites",
      "Web Applications",
      "UI / UX Design",
      "Patient Experiences",
      "SEO & Digital Marketing",
      "AI & Automation",
    ],
    approach: [
      {
        title: "Research",
        description:
          "We understand the needs of patients, professionals and other audiences before designing the experience.",
      },
      {
        title: "Simplify",
        description:
          "We structure complex information into clear and intuitive digital journeys.",
      },
      {
        title: "Develop",
        description:
          "We build reliable, responsive platforms with usability and accessibility in mind.",
      },
      {
        title: "Evolve",
        description:
          "We continuously refine the experience based on feedback, analytics and changing requirements.",
      },
    ],
  },

  {
    slug: "ecommerce",
    number: "04",
    title: "E-Commerce",
    shortTitle: "E-Commerce",
    heroTitle: "E-commerce experiences designed to convert.",
    heroDescription:
      "We create high-performance commerce experiences that make discovering, choosing and buying products easier.",
    intro:
      "A successful online store is more than a catalogue and checkout. Every interaction matters. From product discovery to payment, we create e-commerce experiences designed around customers and business growth.",
    challenges: [
      "Improving product discovery",
      "Reducing friction during checkout",
      "Increasing conversion rates",
      "Creating stronger product experiences",
      "Building scalable online stores",
    ],
    services: [
      "E-Commerce Development",
      "Shopify Development",
      "Custom Web Development",
      "UI / UX Design",
      "SEO & Digital Marketing",
      "Payment Integrations",
    ],
    approach: [
      {
        title: "Analyse",
        description:
          "We examine your products, customers and current buying journey to identify opportunities.",
      },
      {
        title: "Design",
        description:
          "We create interfaces that make products easy to discover, understand and purchase.",
      },
      {
        title: "Develop",
        description:
          "We build fast, responsive and scalable commerce experiences.",
      },
      {
        title: "Optimise",
        description:
          "We use SEO, analytics and conversion optimisation to keep improving performance.",
      },
    ],
  },

  {
    slug: "professional-services",
    number: "05",
    title: "Professional Services",
    shortTitle: "Professional Services",
    heroTitle: "Digital platforms that build trust and authority.",
    heroDescription:
      "We help professional service businesses turn expertise into strong digital experiences that attract and convert the right clients.",
    intro:
      "For professional service businesses, your website is often the first place potential clients evaluate your expertise. We create digital experiences that communicate credibility, clarify your offering and create a stronger path to enquiry.",
    challenges: [
      "Communicating expertise clearly",
      "Generating qualified enquiries",
      "Building trust online",
      "Presenting complex services",
      "Creating a stronger digital brand",
    ],
    services: [
      "Corporate Websites",
      "Lead Generation",
      "UI / UX Design",
      "Brand Identity",
      "SEO & Digital Marketing",
      "AI Automation",
    ],
    approach: [
      {
        title: "Position",
        description:
          "We identify what makes your organisation valuable and translate it into a clear digital proposition.",
      },
      {
        title: "Communicate",
        description:
          "We structure your services and expertise into a compelling and easy-to-understand experience.",
      },
      {
        title: "Build",
        description:
          "We develop a fast and scalable platform that supports your business goals.",
      },
      {
        title: "Generate",
        description:
          "We connect the experience with SEO, content and lead-generation strategies.",
      },
    ],
  },

  {
    slug: "startups",
    number: "06",
    title: "Startups",
    shortTitle: "Startups",
    heroTitle: "From ambitious idea to digital product.",
    heroDescription:
      "We help startups turn ideas into scalable digital products, brands and experiences built for growth.",
    intro:
      "Startups move quickly. You need to validate ideas, launch products and learn from users without creating unnecessary technical complexity. We work across strategy, design and development to help turn early ideas into real digital products.",
    challenges: [
      "Turning ideas into products",
      "Launching quickly",
      "Validating product concepts",
      "Building scalable technology",
      "Creating a strong early-stage brand",
    ],
    services: [
      "MVP Development",
      "SaaS Development",
      "Web Applications",
      "UI / UX Design",
      "Brand Identity",
      "AI Solutions",
    ],
    approach: [
      {
        title: "Validate",
        description:
          "We turn your idea into a clear product direction and identify what needs to be built first.",
      },
      {
        title: "Design",
        description:
          "We create the product experience and visual identity around your users and proposition.",
      },
      {
        title: "Launch",
        description:
          "We build and launch a focused first version that can evolve with your business.",
      },
      {
        title: "Scale",
        description:
          "As your product grows, we help expand the technology, experience and digital presence.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}