export type EmailSubService = {
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

export const emailSubServices: EmailSubService[] = [
  {
    slug: "email-strategy",
    number: "01",
    title: "Email Strategy",
    eyebrow: "Email strategy",
    heroTitle: "Give every email a reason to exist.",
    heroDescription: "A focused email strategy built around your audience, business goals and the moments that matter.",
    introLead: "Good email marketing starts with knowing what to say, who to say it to and why it matters.",
    introDescription: "We create a practical communication strategy that connects audience needs with the right messages, channels and customer journeys.",
    sectionLabel: "What we define",
    sectionTitle: ["Strategy", "before", "sending"],
    sectionDescription: "We establish the foundations that help every campaign and automated journey work toward a clear purpose.",
    capabilities: ["Audience strategy", "Email planning", "Content direction", "Segmentation", "Customer journeys", "Channel planning"],
    process: [
      { number: "01", title: "Understand", description: "We review your business, audience, database and existing email activity." },
      { number: "02", title: "Segment", description: "We identify meaningful audience groups and the different needs they bring." },
      { number: "03", title: "Plan", description: "We map messages, campaigns and journeys around key customer moments." },
      { number: "04", title: "Prioritise", description: "We focus effort on the communications with the clearest opportunity to add value." },
      { number: "05", title: "Activate", description: "We turn the strategy into a practical programme your team can execute and improve." }
    ],
    resultTitle: ["A clearer", "email", "direction"],
    resultDescription: "You get a structured email programme with clearer audiences, messages and priorities.",
    resultPoints: ["Clear strategy", "Better segmentation", "Useful journeys", "Focused planning"]
  },
  {
    slug: "campaign-design",
    number: "02",
    title: "Campaign Design",
    eyebrow: "Campaign design",
    heroTitle: "Make every campaign worth opening.",
    heroDescription: "Email campaigns designed to communicate clearly, feel on-brand and encourage meaningful action.",
    introLead: "A good campaign earns attention before it asks for action.",
    introDescription: "We combine messaging, structure and visual design to create campaigns that are easy to understand and connected to your wider brand.",
    sectionLabel: "What we create",
    sectionTitle: ["Design", "for", "attention"],
    sectionDescription: "Every campaign is shaped around its message, audience and objective rather than a one-size-fits-all template.",
    capabilities: ["Campaign concepts", "Email copy", "Visual design", "Responsive layouts", "CTA direction", "Template systems"],
    process: [
      { number: "01", title: "Brief", description: "We establish the audience, objective, offer and message behind the campaign." },
      { number: "02", title: "Concept", description: "We develop a clear creative direction that fits the campaign and brand." },
      { number: "03", title: "Create", description: "We build the copy, hierarchy and visual design around the central message." },
      { number: "04", title: "Optimise", description: "We refine the experience for clarity, responsiveness and the intended action." },
      { number: "05", title: "Launch", description: "We prepare the final campaign for deployment and ongoing performance review." }
    ],
    resultTitle: ["Clear message.", "Strong", "action"],
    resultDescription: "The finished campaign gives your audience a focused message and a clear next step.",
    resultPoints: ["On-brand design", "Clear messaging", "Responsive", "Action focused"]
  },
  {
    slug: "newsletter-systems",
    number: "03",
    title: "Newsletter Systems",
    eyebrow: "Newsletter systems",
    heroTitle: "Turn newsletters into a habit.",
    heroDescription: "Repeatable newsletter systems that make consistent communication easier to plan, create and deliver.",
    introLead: "Consistency is easier when the system behind the newsletter is designed properly.",
    introDescription: "We create flexible newsletter structures that give your team a reliable way to communicate without making every send feel the same.",
    sectionLabel: "What we build",
    sectionTitle: ["A system", "for", "staying relevant"],
    sectionDescription: "Templates, content structures and repeatable workflows help turn newsletters into a dependable part of your communication.",
    capabilities: ["Newsletter templates", "Content frameworks", "Editorial planning", "Modular sections", "Responsive email", "Production workflows"],
    process: [
      { number: "01", title: "Audit", description: "We review your current newsletters, content and production process." },
      { number: "02", title: "Structure", description: "We define the recurring sections, hierarchy and content rules." },
      { number: "03", title: "Design", description: "We create a flexible visual system that can adapt to different stories and topics." },
      { number: "04", title: "Systemise", description: "We organise reusable components and a workflow that makes production easier." },
      { number: "05", title: "Evolve", description: "We use feedback and performance to keep improving the newsletter system." }
    ],
    resultTitle: ["Consistent", "without", "being repetitive"],
    resultDescription: "A flexible newsletter system gives your team consistency while leaving room for fresh content and ideas.",
    resultPoints: ["Repeatable", "Flexible", "On-brand", "Efficient"]
  },
  {
    slug: "automation",
    number: "04",
    title: "Automation",
    eyebrow: "Email automation",
    heroTitle: "Be there at the right moment.",
    heroDescription: "Automated email journeys that respond to customer behaviour and create useful communication at the right time.",
    introLead: "The best automated emails feel timely, relevant and genuinely useful.",
    introDescription: "We map customer moments and build automated journeys that help businesses communicate consistently without relying on manual sends.",
    sectionLabel: "What we automate",
    sectionTitle: ["Useful", "messages", "on autopilot"],
    sectionDescription: "Automation can support onboarding, engagement, conversion and retention when each journey has a clear purpose.",
    capabilities: ["Welcome journeys", "Abandoned journeys", "Lead automation", "Customer flows", "Re-engagement", "Trigger campaigns"],
    process: [
      { number: "01", title: "Map", description: "We identify the customer moments where timely communication can create value." },
      { number: "02", title: "Trigger", description: "We define the actions, events or conditions that should start each journey." },
      { number: "03", title: "Build", description: "We create the sequence, messaging and experience for each automated flow." },
      { number: "04", title: "Test", description: "We test logic, timing, content and user paths before activation." },
      { number: "05", title: "Improve", description: "We review performance and refine journeys as audience behaviour changes." }
    ],
    resultTitle: ["Right message.", "Right", "moment"],
    resultDescription: "Well-designed automation creates timely communication while reducing repetitive manual work.",
    resultPoints: ["Timely", "Relevant", "Automated", "Scalable"]
  },
  {
    slug: "lead-nurturing",
    number: "05",
    title: "Lead Nurturing",
    eyebrow: "Lead nurturing",
    heroTitle: "Move interest toward action.",
    heroDescription: "Nurture journeys that build trust, answer questions and help prospects move forward at their own pace.",
    introLead: "Not every lead is ready to buy today. Good nurturing keeps the relationship moving.",
    introDescription: "We design sequences that deliver useful information and relevant reasons to continue engaging with your business.",
    sectionLabel: "What we nurture",
    sectionTitle: ["Turn", "interest", "into momentum"],
    sectionDescription: "A thoughtful nurture programme gives prospects the right information at different stages of consideration.",
    capabilities: ["Lead segmentation", "Nurture sequences", "Educational content", "Follow-up journeys", "Re-engagement", "Conversion paths"],
    process: [
      { number: "01", title: "Understand", description: "We identify the questions, barriers and decision stages your prospects experience." },
      { number: "02", title: "Segment", description: "We group leads by behaviour, needs and stage so messages stay relevant." },
      { number: "03", title: "Sequence", description: "We map a progression of useful messages that builds understanding and confidence." },
      { number: "04", title: "Connect", description: "We create clear points where interested prospects can take the next step." },
      { number: "05", title: "Optimise", description: "We learn from engagement and conversion signals to improve the journey." }
    ],
    resultTitle: ["Build trust.", "Create", "momentum"],
    resultDescription: "The result is a more intentional path between first interest and a meaningful next action.",
    resultPoints: ["Relevant journeys", "Better follow-up", "More context", "Clear next steps"]
  },
  {
    slug: "performance-optimisation",
    number: "06",
    title: "Performance Optimisation",
    eyebrow: "Performance optimisation",
    heroTitle: "Make every send work harder.",
    heroDescription: "Ongoing optimisation that uses email performance signals to improve content, journeys and audience engagement.",
    introLead: "Sending more emails is not the same as making email work better.",
    introDescription: "We look at the signals behind performance and use them to identify practical improvements across campaigns, content and journeys.",
    sectionLabel: "What we improve",
    sectionTitle: ["Learn.", "Test.", "Improve."],
    sectionDescription: "Performance work turns campaign data into decisions that can make future communication more relevant and effective.",
    capabilities: ["Performance analysis", "A/B testing", "Audience insights", "Content optimisation", "Journey optimisation", "Reporting"],
    process: [
      { number: "01", title: "Measure", description: "We establish the useful signals and understand how current email activity is performing." },
      { number: "02", title: "Diagnose", description: "We identify patterns, friction and opportunities across audiences and campaigns." },
      { number: "03", title: "Test", description: "We create focused experiments around content, timing, structure or audience." },
      { number: "04", title: "Learn", description: "We interpret the results and separate useful signals from surface-level noise." },
      { number: "05", title: "Improve", description: "We apply the learning to future campaigns and journeys as part of an ongoing cycle." }
    ],
    resultTitle: ["Better decisions.", "Better", "email"],
    resultDescription: "A continuous optimisation cycle helps your email programme become more informed with every campaign and journey.",
    resultPoints: ["Data informed", "Testable", "Iterative", "Measurable"]
  }
];

export function getEmailSubService(slug: string) {
  return emailSubServices.find((service) => service.slug === slug);
}
