export type EcommerceService = {
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

export const ecommerceServices: EcommerceService[] = [
  {
    slug: "shopify-stores",
    number: "01",
    title: "Shopify Stores",
    heroTitle:
      "Commerce experiences built for modern brands.",
    heroDescription:
      "We design and develop Shopify stores that make products easier to discover, understand and purchase.",
    intro:
      "Shopify gives brands a powerful foundation for selling online. We turn that foundation into a distinctive commerce experience through thoughtful UX, strong visual design and carefully implemented functionality.",
    challenges: [
      "Launching a professional online store",
      "Creating a distinctive Shopify experience",
      "Improving product discovery",
      "Reducing friction during checkout",
      "Building a scalable commerce platform",
    ],
    capabilities: [
      "Shopify Store Design",
      "Shopify Theme Development",
      "Custom Sections",
      "Product Experiences",
      "Payment Integration",
      "SEO & Analytics",
    ],
    technologies: [
      "Shopify",
      "Liquid",
      "React",
      "Next.js",
      "JavaScript",
      "Third-Party APIs",
    ],
    approach: [
      {
        title: "Discover",
        description:
          "We understand your products, customers, brand and commercial goals.",
      },
      {
        title: "Design",
        description:
          "We create a Shopify experience that reflects your brand and simplifies the customer journey.",
      },
      {
        title: "Develop",
        description:
          "We implement custom functionality and responsive storefront experiences.",
      },
      {
        title: "Launch",
        description:
          "We test the complete buying journey and prepare the store for launch and growth.",
      },
    ],
  },

  {
    slug: "custom-ecommerce",
    number: "02",
    title: "Custom E-Commerce",
    heroTitle:
      "Commerce platforms designed around the way your business works.",
    heroDescription:
      "We build custom e-commerce experiences for businesses that need more flexibility than an off-the-shelf platform can provide.",
    intro:
      "Every commerce business has different products, customers and operational requirements. When standard platforms are not enough, we create custom digital commerce experiences around your specific business model.",
    challenges: [
      "Supporting complex product structures",
      "Creating custom buying journeys",
      "Connecting business systems",
      "Handling complex commerce workflows",
      "Building scalable infrastructure",
    ],
    capabilities: [
      "Custom E-Commerce Platforms",
      "Headless Commerce",
      "Custom Product Systems",
      "API Integrations",
      "Customer Accounts",
      "Order Management",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Laravel",
      "MySQL",
      "REST APIs",
    ],
    approach: [
      {
        title: "Map",
        description:
          "We understand your products, customers, operations and existing technology.",
      },
      {
        title: "Architect",
        description:
          "We define the technical architecture and commerce flows around your requirements.",
      },
      {
        title: "Build",
        description:
          "We develop the platform in focused stages, validating functionality throughout the process.",
      },
      {
        title: "Scale",
        description:
          "We create a foundation that can support new products, users and functionality as you grow.",
      },
    ],
  },

  {
    slug: "product-experiences",
    number: "03",
    title: "Product Experiences",
    heroTitle:
      "Better digital experiences around the products people buy.",
    heroDescription:
      "We design product experiences that help customers discover, understand and confidently choose what is right for them.",
    intro:
      "Product pages are more than images and descriptions. They are where customers evaluate value, compare options and decide whether to buy. We create product experiences that make those decisions easier.",
    challenges: [
      "Improving product discovery",
      "Communicating product value",
      "Making product information clearer",
      "Supporting product comparison",
      "Increasing customer confidence",
    ],
    capabilities: [
      "Product Page Design",
      "Product Discovery",
      "Product Filtering",
      "Product Comparison",
      "Interactive Experiences",
      "Content Architecture",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Headless CMS",
      "E-Commerce APIs",
      "Analytics",
    ],
    approach: [
      {
        title: "Understand",
        description:
          "We identify how customers discover, compare and evaluate your products.",
      },
      {
        title: "Structure",
        description:
          "We organise product information around the questions customers actually need answered.",
      },
      {
        title: "Design",
        description:
          "We create engaging product interfaces that balance visual impact with clarity.",
      },
      {
        title: "Optimise",
        description:
          "We use analytics and customer behaviour to continuously improve product experiences.",
      },
    ],
  },

  {
    slug: "conversion-optimisation",
    number: "04",
    title: "Conversion Optimisation",
    heroTitle:
      "Turning more digital journeys into meaningful actions.",
    heroDescription:
      "We identify friction across the buying journey and create experiences designed to make conversion easier.",
    intro:
      "Traffic alone does not create a successful commerce business. We look at the complete customer journey — from landing page to checkout — to identify where people drop off and where the experience can be improved.",
    challenges: [
      "Reducing checkout friction",
      "Improving conversion rates",
      "Reducing cart abandonment",
      "Improving product discovery",
      "Making calls to action clearer",
    ],
    capabilities: [
      "Conversion Audits",
      "UX Optimisation",
      "Checkout Optimisation",
      "A/B Testing",
      "Analytics",
      "Customer Journey Analysis",
    ],
    technologies: [
      "Google Analytics",
      "Google Tag Manager",
      "Hotjar",
      "React",
      "Next.js",
      "E-Commerce Platforms",
    ],
    approach: [
      {
        title: "Measure",
        description:
          "We analyse your existing customer journey and identify important points of friction.",
      },
      {
        title: "Identify",
        description:
          "We prioritise the changes that can have the greatest impact on the experience.",
      },
      {
        title: "Test",
        description:
          "We create and test improvements using data rather than assumptions.",
      },
      {
        title: "Improve",
        description:
          "We continuously refine the experience based on measurable results.",
      },
    ],
  },

  {
    slug: "payment-integration",
    number: "05",
    title: "Payment Integration",
    heroTitle:
      "Reliable payment experiences built into the customer journey.",
    heroDescription:
      "We integrate payment systems that make transactions clear, secure and straightforward for customers.",
    intro:
      "Payment is one of the most important moments in an online purchase. We connect commerce platforms with appropriate payment services while keeping the experience simple and consistent.",
    challenges: [
      "Integrating payment providers",
      "Creating smoother checkout experiences",
      "Supporting multiple payment methods",
      "Handling transaction workflows",
      "Connecting payments with business systems",
    ],
    capabilities: [
      "Payment Gateway Integration",
      "Checkout Development",
      "Payment Method Integration",
      "Order Processing",
      "Transaction Workflows",
      "API Integration",
    ],
    technologies: [
      "Razorpay",
      "Stripe",
      "PayPal",
      "Node.js",
      "Laravel",
      "REST APIs",
    ],
    approach: [
      {
        title: "Understand",
        description:
          "We understand your checkout requirements, markets and payment workflows.",
      },
      {
        title: "Integrate",
        description:
          "We connect the required payment services with your commerce platform.",
      },
      {
        title: "Test",
        description:
          "We test transaction flows, failure states and customer-facing interactions.",
      },
      {
        title: "Monitor",
        description:
          "We help ensure the payment experience remains reliable as the business grows.",
      },
    ],
  },

  {
    slug: "store-redesigns",
    number: "06",
    title: "Store Redesigns",
    heroTitle:
      "Transforming online stores into better commerce experiences.",
    heroDescription:
      "We redesign existing stores to improve usability, visual quality, performance and commercial journeys.",
    intro:
      "An online store can become outdated as customer expectations change. We analyse your current experience, identify friction and redesign the store around modern customer behaviour and business objectives.",
    challenges: [
      "Outdated visual design",
      "Poor mobile experience",
      "Slow store performance",
      "Confusing navigation",
      "Low conversion rates",
    ],
    capabilities: [
      "E-Commerce UX Audit",
      "Visual Redesign",
      "Store Modernisation",
      "Mobile Optimisation",
      "Performance Improvements",
      "Platform Migration",
    ],
    technologies: [
      "Shopify",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Modern CMS",
    ],
    approach: [
      {
        title: "Audit",
        description:
          "We analyse your existing store, customer journey, performance and content.",
      },
      {
        title: "Reframe",
        description:
          "We identify what should stay, what should change and where new opportunities exist.",
      },
      {
        title: "Redesign",
        description:
          "We create a modern commerce experience around your customers and products.",
      },
      {
        title: "Rebuild",
        description:
          "We implement the new experience with modern technology and improved performance.",
      },
    ],
  },
];

export function getEcommerceService(slug: string) {
  return ecommerceServices.find(
    (service) => service.slug === slug
  );
}