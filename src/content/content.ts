import { parseMarkdown } from "@/lib/markdown";

import brandRaw from "./brand.md?raw";
import homeRaw from "./home.md?raw";
import featuresRaw from "./features.md?raw";
import testimonialsRaw from "./testimonials.md?raw";
import pricingRaw from "./pricing.md?raw";
import faqRaw from "./faq.md?raw";

/* ---------- Shared types ---------- */

export interface NavItem {
  label: string;
  href: string;
}
export interface FooterColumn {
  title: string;
  links: NavItem[];
}
export interface SocialLink {
  label: string;
  href: string;
}
export interface BrandData {
  brand: string;
  tagline: string;
  nav: NavItem[];
  cta_label: string;
  cta_href: string;
  footer: {
    columns: FooterColumn[];
    social: SocialLink[];
    copyright: string;
  };
}

export interface Stat {
  value: string;
  label: string;
}
export interface HomeData {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary_cta: string;
    secondary_cta: string;
  };
  stats: Stat[];
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
  };
}

export interface Feature {
  icon: string;
  title: string;
  body: string;
}
export interface FeaturesData {
  intro: string;
  features: Feature[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
export interface TestimonialsData {
  testimonials: Testimonial[];
}

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}
export interface PricingData {
  intro: string;
  plans: Plan[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
export interface FaqData {
  intro: string;
  items: FaqItem[];
}

/* ---------- Parsed content ---------- */

export const brand = parseMarkdown<BrandData>(brandRaw);
export const home = parseMarkdown<HomeData>(homeRaw);
export const features = parseMarkdown<FeaturesData>(featuresRaw);
export const testimonials = parseMarkdown<TestimonialsData>(testimonialsRaw);
export const pricing = parseMarkdown<PricingData>(pricingRaw);
export const faq = parseMarkdown<FaqData>(faqRaw);

/** Hero texture used in the landing hero and social preview image. */
export const heroImage =
  "https://vibe.filesafe.space/1792922163839111831/assets/4a43f6b9-f324-4b76-b95e-f7b1775dbd15.png";
