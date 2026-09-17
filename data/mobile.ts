export type MobileSubService = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  heroTitle: string[];
  heroDescription: string;
  introLead: string;
  introDescription: string;
  sectionLabel: string;
  sectionTitle: string[];
  sectionDescription: string;
  capabilities: string[];
  process: { number: string; title: string; description: string }[];
  resultTitle: string[];
  resultDescription: string;
  resultPoints: string[];
};

export const mobileSubServices: MobileSubService[] = 
[
  {
    "slug": "ios-applications",
    "number": "01",
    "title": "iOS Applications",
    "eyebrow": "Mobile App Development",
    "heroTitle": [
      "Native",
      "experiences",
      "for iOS."
    ],
    "heroDescription": "Focused iOS applications designed around Apple users, smooth interactions and the needs of the product.",
    "introLead": "Build an iOS experience that feels natural from the first tap.",
    "introDescription": "We create mobile products with clear navigation, thoughtful interfaces and reliable performance, helping businesses turn ideas into useful applications for iPhone and iPad.",
    "sectionLabel": "What we build",
    "sectionTitle": [
      "iOS",
      "built",
      "properly."
    ],
    "sectionDescription": "From focused customer experiences to complete business products, we shape the interface and technical foundation around the job the application needs to do.",
    "capabilities": [
      "iPhone applications",
      "iPad experiences",
      "Native interfaces",
      "API integration",
      "Push notifications",
      "App Store preparation"
    ],
    "process": [
      {
        "number": "01",
        "title": "Discover",
        "description": "Understand the product, users, business goals and the role the iOS application needs to play."
      },
      {
        "number": "02",
        "title": "Define",
        "description": "Prioritise features, user journeys and the technical foundations required for the first release."
      },
      {
        "number": "03",
        "title": "Design",
        "description": "Create a focused interface and interaction system that makes the product easy to understand and use."
      },
      {
        "number": "04",
        "title": "Build",
        "description": "Develop the application with performance, reliability and maintainability in mind."
      },
      {
        "number": "05",
        "title": "Test",
        "description": "Validate flows, interactions and behaviour across supported devices before release."
      },
      {
        "number": "06",
        "title": "Launch",
        "description": "Prepare the application for release and establish the foundation for future improvements."
      }
    ],
    "resultTitle": [
      "Native.",
      "Focused.",
      "Ready."
    ],
    "resultDescription": "The result is an iOS product that gives users a clear experience while giving the business a foundation it can continue to build on.",
    "resultPoints": [
      "Apple focused",
      "Smooth interactions",
      "Reliable performance",
      "Built to evolve"
    ]
  },
  {
    "slug": "android-applications",
    "number": "02",
    "title": "Android Applications",
    "eyebrow": "Mobile App Development",
    "heroTitle": [
      "Android",
      "products",
      "that work."
    ],
    "heroDescription": "Practical Android applications designed for real users, real devices and the goals behind the product.",
    "introLead": "Make your product accessible through an Android experience built for everyday use.",
    "introDescription": "We develop Android applications around clear user journeys, dependable performance and the flexibility businesses need as their products grow.",
    "sectionLabel": "What we build",
    "sectionTitle": [
      "Android",
      "with",
      "purpose."
    ],
    "sectionDescription": "We focus on the experience first, then build the technical foundation needed for a stable and scalable Android product.",
    "capabilities": [
      "Consumer applications",
      "Business applications",
      "Custom interfaces",
      "API integration",
      "Notifications",
      "Release preparation"
    ],
    "process": [
      {
        "number": "01",
        "title": "Discover",
        "description": "Understand users, business objectives, product requirements and the Android environments that matter."
      },
      {
        "number": "02",
        "title": "Define",
        "description": "Turn requirements into focused features, priorities and practical user journeys."
      },
      {
        "number": "03",
        "title": "Design",
        "description": "Shape an intuitive interface that keeps important actions clear and accessible."
      },
      {
        "number": "04",
        "title": "Build",
        "description": "Develop the application with maintainability, performance and future expansion in mind."
      },
      {
        "number": "05",
        "title": "Test",
        "description": "Check functionality and experience across relevant screen sizes, devices and release scenarios."
      },
      {
        "number": "06",
        "title": "Launch",
        "description": "Prepare the product for release and create a clear path for ongoing iteration."
      }
    ],
    "resultTitle": [
      "Useful.",
      "Stable.",
      "Scalable."
    ],
    "resultDescription": "A strong Android application should feel dependable in everyday use while providing the business with room to grow.",
    "resultPoints": [
      "User focused",
      "Device aware",
      "Performance minded",
      "Maintainable"
    ]
  },
  {
    "slug": "cross-platform-apps",
    "number": "03",
    "title": "Cross-Platform Apps",
    "eyebrow": "Mobile App Development",
    "heroTitle": [
      "One",
      "product.",
      "Multiple platforms."
    ],
    "heroDescription": "Cross-platform mobile experiences that balance consistency, development speed and the needs of the product.",
    "introLead": "Reach more users without building disconnected product experiences.",
    "introDescription": "We create cross-platform applications with a shared product direction, consistent experience and technical structure designed to make future changes easier to manage.",
    "sectionLabel": "What we build",
    "sectionTitle": [
      "Shared",
      "code.",
      "Focused experience."
    ],
    "sectionDescription": "The goal is not simply to reuse code. It is to create a coherent product that works naturally across the platforms your users choose.",
    "capabilities": [
      "React Native apps",
      "Flutter apps",
      "Shared components",
      "API integration",
      "Platform adaptation",
      "App store releases"
    ],
    "process": [
      {
        "number": "01",
        "title": "Discover",
        "description": "Identify platforms, users, core features and the product constraints that shape the build."
      },
      {
        "number": "02",
        "title": "Architect",
        "description": "Choose an appropriate cross-platform structure and define the shared technical foundations."
      },
      {
        "number": "03",
        "title": "Design",
        "description": "Create a consistent experience while accounting for platform-specific expectations."
      },
      {
        "number": "04",
        "title": "Build",
        "description": "Develop reusable components and product functionality across the required platforms."
      },
      {
        "number": "05",
        "title": "Validate",
        "description": "Test the experience across operating systems, devices and important user journeys."
      },
      {
        "number": "06",
        "title": "Evolve",
        "description": "Maintain the shared foundation while improving the product based on real usage and feedback."
      }
    ],
    "resultTitle": [
      "Consistent.",
      "Efficient.",
      "Flexible."
    ],
    "resultDescription": "A well-structured cross-platform product can provide a consistent experience while keeping development and future iteration practical.",
    "resultPoints": [
      "Shared foundation",
      "Consistent UI",
      "Faster iteration",
      "Platform aware"
    ]
  },
  {
    "slug": "business-applications",
    "number": "04",
    "title": "Business Applications",
    "eyebrow": "Mobile App Development",
    "heroTitle": [
      "Mobile",
      "tools",
      "for business."
    ],
    "heroDescription": "Purpose-built business applications that help teams work, communicate and access important information wherever they are.",
    "introLead": "Put useful business workflows where your team actually needs them.",
    "introDescription": "We turn operational requirements into mobile applications for internal teams, field staff, managers and organisations that need reliable access beyond the desktop.",
    "sectionLabel": "What we build",
    "sectionTitle": [
      "Workflows",
      "made",
      "mobile."
    ],
    "sectionDescription": "We focus on the tasks people need to complete, reducing unnecessary friction and giving teams a clearer way to work with business systems.",
    "capabilities": [
      "Internal business apps",
      "Field team apps",
      "CRM companion apps",
      "Dashboards",
      "Workflow automation",
      "Secure integrations"
    ],
    "process": [
      {
        "number": "01",
        "title": "Map",
        "description": "Understand existing workflows, users, systems and the operational problems the application should solve."
      },
      {
        "number": "02",
        "title": "Prioritise",
        "description": "Identify the highest-value tasks and define the product scope around them."
      },
      {
        "number": "03",
        "title": "Structure",
        "description": "Design navigation, permissions, data flows and integrations around real business usage."
      },
      {
        "number": "04",
        "title": "Build",
        "description": "Develop the application and connect it with the systems the business already relies on."
      },
      {
        "number": "05",
        "title": "Validate",
        "description": "Test workflows, permissions, data handling and usability with the intended users."
      },
      {
        "number": "06",
        "title": "Improve",
        "description": "Use feedback from real teams to refine the product and expand its useful capabilities."
      }
    ],
    "resultTitle": [
      "Clear.",
      "Connected.",
      "Useful."
    ],
    "resultDescription": "The right business application can remove repetitive friction, connect workflows and make important information easier to access.",
    "resultPoints": [
      "Workflow focused",
      "System connected",
      "Secure by design",
      "Built for teams"
    ]
  },
  {
    "slug": "customer-apps",
    "number": "05",
    "title": "Customer Apps",
    "eyebrow": "Mobile App Development",
    "heroTitle": [
      "Give",
      "customers",
      "a reason to return."
    ],
    "heroDescription": "Customer-facing mobile experiences designed to make interactions simpler, more useful and more connected to your brand.",
    "introLead": "Turn everyday customer interactions into a product experience.",
    "introDescription": "From account areas and bookings to loyalty and service experiences, we build customer apps around the moments that matter to your audience.",
    "sectionLabel": "What we build",
    "sectionTitle": [
      "Better",
      "customer",
      "connections."
    ],
    "sectionDescription": "A customer application should give people a clear reason to use it. We focus on convenience, clarity and useful functionality that supports the wider customer relationship.",
    "capabilities": [
      "Customer portals",
      "Booking apps",
      "Loyalty experiences",
      "Service apps",
      "Account management",
      "Notifications"
    ],
    "process": [
      {
        "number": "01",
        "title": "Understand",
        "description": "Research customer needs, behaviours and the interactions that can be improved through mobile."
      },
      {
        "number": "02",
        "title": "Define",
        "description": "Prioritise features around genuine customer value and the business outcomes they support."
      },
      {
        "number": "03",
        "title": "Design",
        "description": "Create an intuitive journey that makes important actions quick and easy to find."
      },
      {
        "number": "04",
        "title": "Build",
        "description": "Develop the experience with the integrations and functionality required by the product."
      },
      {
        "number": "05",
        "title": "Test",
        "description": "Validate the experience through key customer journeys, devices and real-world scenarios."
      },
      {
        "number": "06",
        "title": "Evolve",
        "description": "Improve the product through feedback, usage patterns and changing customer expectations."
      }
    ],
    "resultTitle": [
      "Useful.",
      "Simple.",
      "Connected."
    ],
    "resultDescription": "A customer app should feel like a natural extension of the relationship between people and the business.",
    "resultPoints": [
      "Customer focused",
      "Easy to use",
      "Connected journeys",
      "Built to improve"
    ]
  },
  {
    "slug": "mvps-prototypes",
    "number": "06",
    "title": "MVPs & Prototypes",
    "eyebrow": "Mobile App Development",
    "heroTitle": [
      "Test",
      "the idea",
      "before the scale."
    ],
    "heroDescription": "Focused prototypes and MVPs that help turn an early idea into something people can see, use and learn from.",
    "introLead": "Move from an idea to a testable product without overbuilding it.",
    "introDescription": "We help teams define the essential experience, prototype the important flows and build a focused first release that can generate useful feedback.",
    "sectionLabel": "What we build",
    "sectionTitle": [
      "Start",
      "small.",
      "Learn fast."
    ],
    "sectionDescription": "An MVP should answer important product questions. We keep the scope focused so teams can validate the experience before committing to a larger build.",
    "capabilities": [
      "Clickable prototypes",
      "MVP applications",
      "Core user journeys",
      "Rapid product builds",
      "Feature validation",
      "Launch-ready foundations"
    ],
    "process": [
      {
        "number": "01",
        "title": "Frame",
        "description": "Clarify the problem, audience, assumptions and the questions the first product needs to answer."
      },
      {
        "number": "02",
        "title": "Scope",
        "description": "Separate essential functionality from future ideas and define a focused first release."
      },
      {
        "number": "03",
        "title": "Prototype",
        "description": "Turn the core journey into an interactive experience that can be reviewed and tested."
      },
      {
        "number": "04",
        "title": "Build",
        "description": "Develop the essential product features with a foundation that can support future growth."
      },
      {
        "number": "05",
        "title": "Learn",
        "description": "Collect feedback and observe how people interact with the first version."
      },
      {
        "number": "06",
        "title": "Iterate",
        "description": "Use what has been learned to decide what to improve, remove or build next."
      }
    ],
    "resultTitle": [
      "Focused.",
      "Testable.",
      "Ready to grow."
    ],
    "resultDescription": "The purpose of an MVP is not to build everything. It is to create enough of the right product to learn what should happen next.",
    "resultPoints": [
      "Lean scope",
      "Fast validation",
      "Real feedback",
      "Growth ready"
    ]
  }
];

export function getMobileSubService(slug: string) {
  return mobileSubServices.find((service) => service.slug === slug);
}