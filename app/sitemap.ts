import type { MetadataRoute } from "next";

const BASE_URL = "https://www.atriawebsolutions.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Core
    { url: "/",          priority: 1.0,  changeFrequency: "weekly"  },
    { url: "/about",     priority: 0.8,  changeFrequency: "monthly" },
    { url: "/work",      priority: 0.8,  changeFrequency: "weekly"  },
    { url: "/contact",   priority: 0.9,  changeFrequency: "monthly" },
    { url: "/team",      priority: 0.7,  changeFrequency: "monthly" },
    { url: "/insights",  priority: 0.7,  changeFrequency: "weekly"  },
    { url: "/careers",   priority: 0.6,  changeFrequency: "monthly" },

    // Services hub
    { url: "/services",  priority: 0.9,  changeFrequency: "monthly" },

    // Web Development
    { url: "/services/web-development",                          priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/web-development/business-websites",        priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/web-development/cms-development",          priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/web-development/corporate-websites",       priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/web-development/custom-web-applications",  priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/web-development/landing-pages",            priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/web-development/website-redesigns",        priority: 0.75, changeFrequency: "monthly" },

    // E-commerce
    { url: "/services/ecommerce",                                priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/ecommerce/conversion-optimisation",        priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/ecommerce/custom-ecommerce",               priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/ecommerce/payment-integration",            priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/ecommerce/product-experiences",            priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/ecommerce/shopify-stores",                 priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/ecommerce/store-redesigns",                priority: 0.75, changeFrequency: "monthly" },

    // SEO & Digital Marketing
    { url: "/services/seo-digital-marketing",                    priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/seo-digital-marketing/content-strategy",   priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/seo-digital-marketing/local-seo",          priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/seo-digital-marketing/on-page-seo",        priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/seo-digital-marketing/performance-marketing", priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/seo-digital-marketing/search-campaigns",   priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/seo-digital-marketing/technical-seo",      priority: 0.75, changeFrequency: "monthly" },

    // Branding & Design
    { url: "/services/branding-design",                          priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/branding-design/brand-guidelines",         priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/branding-design/brand-strategy",           priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/branding-design/logo-design",              priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/branding-design/marketing-collateral",     priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/branding-design/ui-visual-design",         priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/branding-design/visual-identity",          priority: 0.75, changeFrequency: "monthly" },

    // Email Marketing
    { url: "/services/email-marketing",                          priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/email-marketing/automation",               priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/email-marketing/campaign-design",          priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/email-marketing/email-strategy",           priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/email-marketing/lead-nurturing",           priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/email-marketing/newsletter-systems",       priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/email-marketing/performance-optimisation", priority: 0.75, changeFrequency: "monthly" },

    // Mobile App Development
    { url: "/services/mobile-app-development",                         priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/mobile-app-development/android-applications",    priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/mobile-app-development/business-applications",   priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/mobile-app-development/cross-platform-apps",     priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/mobile-app-development/customer-apps",           priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/mobile-app-development/ios-applications",        priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/mobile-app-development/mvps-prototypes",         priority: 0.75, changeFrequency: "monthly" },

    // Online Reputation Management
    { url: "/services/online-reputation-management",                        priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/online-reputation-management/brand-sentiment",        priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/online-reputation-management/crisis-response",        priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/online-reputation-management/reputation-monitoring",  priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/online-reputation-management/reputation-strategy",    priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/online-reputation-management/review-management",      priority: 0.75, changeFrequency: "monthly" },
    { url: "/services/online-reputation-management/search-presence",        priority: 0.75, changeFrequency: "monthly" },

    // Industries
    { url: "/industries/ecommerce",             priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/healthcare",            priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/hospitality",           priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/professional-services", priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/retail",                priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/startups",              priority: 0.7, changeFrequency: "monthly" },

    // Legal (lower priority, excluded from main nav but still indexed)
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/terms",   priority: 0.3, changeFrequency: "yearly" },
  ] as const;

  return routes.map(({ url, priority, changeFrequency }) => ({
    url:              `${BASE_URL}${url}`,
    lastModified:     new Date(),
    changeFrequency,
    priority,
  }));
}
