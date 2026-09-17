export type BrandingSubService = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  heroTitle: string;
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

export const brandingSubServices: BrandingSubService[] = [
  {
    slug: "brand-strategy",
    number: "01",
    title: "Brand Strategy",
    eyebrow: "Brand strategy",
    heroTitle: "Give your brand a clear direction.",
    heroDescription: "Strategic foundations that define what your brand stands for, who it is for and how it should show up.",
    introLead: "A strong identity starts before the first visual is designed.",
    introDescription: "We clarify your positioning, audience, personality and messaging so every creative decision has a reason behind it.",
    sectionLabel: "What we define",
    sectionTitle: ["Strategy", "before", "style"],
    sectionDescription: "We turn business ambitions into a focused brand direction that can guide design, communication and growth.",
    capabilities: ["Brand positioning", "Audience definition", "Brand personality", "Messaging strategy", "Value proposition", "Brand architecture"],
    process: [
      { number: "01", title: "Discover", description: "We understand the business, market, audience and ambitions behind the brand." },
      { number: "02", title: "Position", description: "We identify the space the brand can own and the reasons people should choose it." },
      { number: "03", title: "Define", description: "We establish personality, messaging and principles that make the direction tangible." },
      { number: "04", title: "Align", description: "We connect the strategy to the visual and communication system that follows." },
      { number: "05", title: "Deliver", description: "We create a practical strategic foundation your team can use as the brand evolves." }
    ],
    resultTitle: ["A brand", "with", "direction"],
    resultDescription: "The outcome is a clearer point of view, stronger messaging and a foundation for consistent brand decisions.",
    resultPoints: ["Clear positioning", "Defined audience", "Strong messaging", "Strategic clarity"]
  },
  {
    slug: "visual-identity",
    number: "02",
    title: "Visual Identity",
    eyebrow: "Visual identity",
    heroTitle: "Make your brand recognisable.",
    heroDescription: "A distinctive visual language built to make your brand clear, memorable and consistent.",
    introLead: "Visual identity turns strategy into something people can see and recognise.",
    introDescription: "We build the visual ingredients that give your brand its own character across digital and physical touchpoints.",
    sectionLabel: "What we create",
    sectionTitle: ["Build a", "visual", "language"],
    sectionDescription: "From typography and colour to imagery and composition, every element works together as one recognisable system.",
    capabilities: ["Art direction", "Colour systems", "Typography systems", "Imagery direction", "Graphic language", "Digital identity"],
    process: [
      { number: "01", title: "Explore", description: "We explore references, visual territories and creative directions that fit the strategy." },
      { number: "02", title: "Concept", description: "We develop a focused visual concept with a clear rationale and point of view." },
      { number: "03", title: "Build", description: "We create the core visual ingredients and define how they work together." },
      { number: "04", title: "Refine", description: "We test the system across relevant applications and refine the details." },
      { number: "05", title: "Deliver", description: "We provide a flexible identity system ready to be used consistently." }
    ],
    resultTitle: ["One identity.", "Many", "expressions"],
    resultDescription: "A coherent visual system gives every touchpoint the same sense of character without making every application look identical.",
    resultPoints: ["Distinctive", "Consistent", "Flexible", "Recognisable"]
  },
  {
    slug: "logo-design",
    number: "03",
    title: "Logo Design",
    eyebrow: "Logo design",
    heroTitle: "Create a mark people remember.",
    heroDescription: "Purposeful logo systems designed to give your business a distinctive and adaptable signature.",
    introLead: "A logo is a small part of a brand, but it carries a lot of responsibility.",
    introDescription: "We design marks that are clear, ownable and practical across the places your business needs to show up.",
    sectionLabel: "What we design",
    sectionTitle: ["A mark", "with", "purpose"],
    sectionDescription: "We focus on clarity and character, creating logo systems that work at every useful size and application.",
    capabilities: ["Logo concepts", "Wordmarks", "Symbol design", "Logo variations", "Responsive marks", "Usage direction"],
    process: [
      { number: "01", title: "Understand", description: "We learn what the business needs the mark to communicate and where it will be used." },
      { number: "02", title: "Explore", description: "We develop conceptual directions grounded in the brand strategy." },
      { number: "03", title: "Develop", description: "We refine the chosen direction into a distinctive and balanced mark." },
      { number: "04", title: "Test", description: "We test the logo across sizes, backgrounds and practical applications." },
      { number: "05", title: "Systemise", description: "We prepare the final logo family and guidance for consistent use." }
    ],
    resultTitle: ["Simple enough", "to remember.", "Strong enough to own"],
    resultDescription: "The final logo becomes a dependable brand asset that can work across digital, print, social and future applications.",
    resultPoints: ["Memorable", "Scalable", "Versatile", "Ownable"]
  },
  {
    slug: "brand-guidelines",
    number: "04",
    title: "Brand Guidelines",
    eyebrow: "Brand guidelines",
    heroTitle: "Keep every touchpoint consistent.",
    heroDescription: "Clear brand guidelines that turn your identity into a practical system your team can use.",
    introLead: "Consistency becomes easier when everyone knows how the brand should work.",
    introDescription: "We document the key visual and verbal rules so your brand stays coherent as more people create, publish and communicate.",
    sectionLabel: "What we document",
    sectionTitle: ["Make the", "system", "usable"],
    sectionDescription: "Guidelines balance enough detail to protect the identity with enough flexibility to let the brand evolve.",
    capabilities: ["Logo usage", "Colour guidelines", "Typography rules", "Layout principles", "Imagery direction", "Brand applications"],
    process: [
      { number: "01", title: "Review", description: "We gather the approved identity elements and understand where consistency matters most." },
      { number: "02", title: "Structure", description: "We organise the rules into a clear hierarchy that is easy for teams to navigate." },
      { number: "03", title: "Document", description: "We define practical rules, examples and do-and-don't guidance." },
      { number: "04", title: "Apply", description: "We show how the identity behaves across representative brand touchpoints." },
      { number: "05", title: "Deliver", description: "We package the guidelines into a practical reference your team can keep using." }
    ],
    resultTitle: ["One brand.", "One clear", "standard"],
    resultDescription: "A useful guideline system helps teams make faster decisions while protecting the consistency that makes a brand recognisable.",
    resultPoints: ["Easy to use", "Consistent", "Practical", "Scalable"]
  },
  {
    slug: "ui-visual-design",
    number: "05",
    title: "UI & Visual Design",
    eyebrow: "UI & visual design",
    heroTitle: "Turn the identity into experiences.",
    heroDescription: "Digital interfaces that translate your brand into clear, considered and engaging experiences.",
    introLead: "A brand should not stop at the logo. It should shape how digital experiences feel.",
    introDescription: "We apply visual identity principles to interfaces, creating a stronger connection between brand, usability and interaction.",
    sectionLabel: "What we design",
    sectionTitle: ["Make digital", "feel", "like you"],
    sectionDescription: "We create interface systems that balance visual character with hierarchy, usability and responsive behaviour.",
    capabilities: ["Website UI", "Landing page design", "Design systems", "Interaction direction", "Responsive layouts", "Visual prototypes"],
    process: [
      { number: "01", title: "Map", description: "We understand the users, journeys, content and business goals behind the experience." },
      { number: "02", title: "Direct", description: "We translate the brand into an interface direction with a clear visual hierarchy." },
      { number: "03", title: "Design", description: "We create key screens, components and layouts for the experience." },
      { number: "04", title: "Prototype", description: "We connect the pieces into a realistic experience and refine the interaction." },
      { number: "05", title: "Handoff", description: "We prepare a clear visual system and design output ready for development." }
    ],
    resultTitle: ["Brand meets", "experience"],
    resultDescription: "The result is a digital interface that feels recognisably yours while remaining clear and usable for the people navigating it.",
    resultPoints: ["On-brand", "Clear", "Responsive", "User focused"]
  },
  {
    slug: "marketing-collateral",
    number: "06",
    title: "Marketing Collateral",
    eyebrow: "Marketing collateral",
    heroTitle: "Give every communication a point of view.",
    heroDescription: "Campaign and marketing assets that carry your identity consistently across the channels that matter.",
    introLead: "Every presentation, campaign and communication is another opportunity to reinforce the brand.",
    introDescription: "We create practical visual assets that help your team communicate with the same clarity and character everywhere.",
    sectionLabel: "What we create",
    sectionTitle: ["Design for", "every", "touchpoint"],
    sectionDescription: "From digital campaigns to sales materials, we extend the identity into useful assets built around real communication needs.",
    capabilities: ["Campaign assets", "Social media design", "Presentations", "Sales materials", "Print collateral", "Digital graphics"],
    process: [
      { number: "01", title: "Brief", description: "We understand the audience, message, channel and objective behind each communication." },
      { number: "02", title: "Concept", description: "We establish a creative direction that fits the campaign and the wider identity." },
      { number: "03", title: "Create", description: "We develop the core assets and layouts required for the campaign or communication." },
      { number: "04", title: "Adapt", description: "We translate the concept across formats while keeping the visual system coherent." },
      { number: "05", title: "Deliver", description: "We organise final assets so they are ready for your team to use and distribute." }
    ],
    resultTitle: ["Consistent", "communication.", "Everywhere"],
    resultDescription: "A strong collateral system makes campaigns feel connected and gives your team useful tools for communicating with confidence.",
    resultPoints: ["Campaign ready", "Consistent", "Flexible", "Practical"]
  }
];

export function getBrandingSubService(slug: string) {
  return brandingSubServices.find((service) => service.slug === slug);
}
