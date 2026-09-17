export type SeoService = {
  slug: string;
  number: string;
  title: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  challenges: string[];
  capabilities: string[];
  channels: string[];
  process: {
    title: string;
    description: string;
  }[];
};

export const seoServices: SeoService[] = [
  {
    slug: "technical-seo",
    number: "01",
    title: "Technical SEO",
    heroTitle: "A stronger technical foundation for search.",
    heroDescription:
      "We improve the technical foundations that help search engines crawl, understand and index your website.",
    intro:
      "Search visibility starts with a technically sound website. We identify technical issues, remove unnecessary friction and create a stronger foundation for long-term organic growth.",
    challenges: [
      "Crawlability issues",
      "Indexing problems",
      "Slow page performance",
      "Broken links and redirects",
      "Poor site architecture",
    ],
    capabilities: [
      "Technical SEO Audits",
      "Crawl & Indexation",
      "Site Architecture",
      "Core Web Vitals",
      "Schema Markup",
      "Redirect Management",
    ],
    channels: [
      "Google Search",
      "Google Search Console",
      "Google Analytics",
      "Structured Data",
      "XML Sitemaps",
      "Page Performance",
    ],
    process: [
      {
        title: "Audit",
        description:
          "We analyse your website structure, technical health, crawlability and indexation.",
      },
      {
        title: "Prioritise",
        description:
          "We identify the issues that matter most and create a practical technical roadmap.",
      },
      {
        title: "Fix",
        description:
          "We implement technical improvements across the website and validate the changes.",
      },
      {
        title: "Monitor",
        description:
          "We continuously monitor technical health and identify new opportunities for improvement.",
      },
    ],
  },

  {
    slug: "on-page-seo",
    number: "02",
    title: "On-Page SEO",
    heroTitle: "Pages built to communicate clearly with people and search engines.",
    heroDescription:
      "We optimise the content, structure and relevance of individual pages around what your audience is searching for.",
    intro:
      "Strong on-page SEO connects useful content with the intent behind a search. We improve page structure, metadata, headings and content so each page has a clear purpose.",
    challenges: [
      "Unclear search intent",
      "Weak page structure",
      "Poor metadata",
      "Keyword cannibalisation",
      "Thin or outdated content",
    ],
    capabilities: [
      "Keyword Research",
      "Meta Optimisation",
      "Heading Structure",
      "Internal Linking",
      "Content Optimisation",
      "Search Intent Mapping",
    ],
    channels: [
      "Google Search",
      "Organic Search",
      "Keyword Research",
      "Content Systems",
      "Internal Linking",
      "Search Console",
    ],
    process: [
      {
        title: "Research",
        description:
          "We understand the searches, questions and intent surrounding your products and services.",
      },
      {
        title: "Map",
        description:
          "We connect important search themes with the pages that should address them.",
      },
      {
        title: "Optimise",
        description:
          "We improve page structure, content, metadata and internal linking.",
      },
      {
        title: "Measure",
        description:
          "We monitor visibility and engagement to understand where further improvements are needed.",
      },
    ],
  },

  {
    slug: "local-seo",
    number: "03",
    title: "Local SEO",
    heroTitle: "Helping local businesses become easier to find.",
    heroDescription:
      "We improve local search visibility so customers can discover your business when it matters.",
    intro:
      "For businesses serving specific locations, local search can play an important role in customer acquisition. We create a structured local SEO presence around your locations, services and audience.",
    challenges: [
      "Low local visibility",
      "Inconsistent business information",
      "Weak location pages",
      "Poor Google Business presence",
      "Limited local content",
    ],
    capabilities: [
      "Local SEO Audits",
      "Google Business Optimisation",
      "Location Pages",
      "Local Keyword Research",
      "Citation Management",
      "Local Content",
    ],
    channels: [
      "Google Maps",
      "Google Business Profile",
      "Local Search",
      "Location Pages",
      "Local Directories",
      "Organic Search",
    ],
    process: [
      {
        title: "Map",
        description:
          "We understand your locations, services and the local searches that matter to your business.",
      },
      {
        title: "Optimise",
        description:
          "We improve your local business presence, location pages and supporting information.",
      },
      {
        title: "Build",
        description:
          "We create useful local content and strengthen the signals surrounding each location.",
      },
      {
        title: "Monitor",
        description:
          "We track local visibility and identify opportunities to improve your presence.",
      },
    ],
  },

  {
    slug: "content-strategy",
    number: "04",
    title: "Content Strategy",
    heroTitle: "Content with a purpose beyond filling a page.",
    heroDescription:
      "We create content strategies that connect business goals, audience needs and search opportunities.",
    intro:
      "Good content should answer real questions, demonstrate value and support the wider customer journey. We create structured content strategies designed around what your audience actually needs.",
    challenges: [
      "Inconsistent content",
      "Unclear content priorities",
      "Low organic visibility",
      "Content gaps",
      "Weak customer journeys",
    ],
    capabilities: [
      "Content Audits",
      "Keyword Research",
      "Content Planning",
      "Topic Clusters",
      "Editorial Strategy",
      "Content Briefs",
    ],
    channels: [
      "Website Content",
      "Blogs",
      "Landing Pages",
      "Search",
      "Guides",
      "Resource Hubs",
    ],
    process: [
      {
        title: "Research",
        description:
          "We research your audience, market, competitors and search behaviour.",
      },
      {
        title: "Plan",
        description:
          "We turn those insights into a structured content roadmap.",
      },
      {
        title: "Create",
        description:
          "We develop content directions and page structures around user intent.",
      },
      {
        title: "Improve",
        description:
          "We use performance data to refine and expand the content strategy.",
      },
    ],
  },

  {
    slug: "search-campaigns",
    number: "05",
    title: "Search Campaigns",
    heroTitle: "Paid search campaigns built around measurable goals.",
    heroDescription:
      "We create and manage search campaigns designed to connect your business with relevant audiences.",
    intro:
      "Paid search gives businesses the ability to reach people actively looking for relevant products and services. We structure campaigns around audience intent, clear messaging and measurable objectives.",
    challenges: [
      "Wasted advertising spend",
      "Poor campaign structure",
      "Irrelevant traffic",
      "Weak landing pages",
      "Unclear campaign performance",
    ],
    capabilities: [
      "Google Ads",
      "Campaign Strategy",
      "Keyword Targeting",
      "Ad Copy",
      "Landing Page Optimisation",
      "Campaign Reporting",
    ],
    channels: [
      "Google Ads",
      "Search Campaigns",
      "Shopping Campaigns",
      "Remarketing",
      "Landing Pages",
      "Analytics",
    ],
    process: [
      {
        title: "Research",
        description:
          "We understand your audience, competitors, search landscape and commercial objectives.",
      },
      {
        title: "Structure",
        description:
          "We build campaigns around relevant search themes, audiences and landing pages.",
      },
      {
        title: "Launch",
        description:
          "We launch carefully structured campaigns with clear tracking and measurement.",
      },
      {
        title: "Optimise",
        description:
          "We review campaign data and continuously refine targeting, messaging and performance.",
      },
    ],
  },

  {
    slug: "performance-marketing",
    number: "06",
    title: "Performance Marketing",
    heroTitle: "Digital marketing focused on measurable outcomes.",
    heroDescription:
      "We bring paid channels, creative, landing pages and analytics together around measurable business objectives.",
    intro:
      "Performance marketing works best when every part of the journey is connected. We combine strategy, campaigns, creative and measurement to create a clearer path from attention to action.",
    challenges: [
      "Disconnected marketing channels",
      "Unclear attribution",
      "High acquisition costs",
      "Weak landing experiences",
      "Limited campaign visibility",
    ],
    capabilities: [
      "Performance Strategy",
      "Paid Media",
      "Campaign Management",
      "Landing Pages",
      "Conversion Optimisation",
      "Analytics & Reporting",
    ],
    channels: [
      "Google Ads",
      "Meta Ads",
      "Paid Search",
      "Paid Social",
      "Remarketing",
      "Analytics",
    ],
    process: [
      {
        title: "Define",
        description:
          "We establish the audience, objectives, measurement framework and commercial priorities.",
      },
      {
        title: "Build",
        description:
          "We create campaigns, landing experiences and tracking around those objectives.",
      },
      {
        title: "Launch",
        description:
          "We activate the strategy across the relevant paid channels.",
      },
      {
        title: "Optimise",
        description:
          "We use performance data to refine campaigns and identify new opportunities.",
      },
    ],
  },
];

export function getSeoService(slug: string) {
  return seoServices.find((service) => service.slug === slug);
}