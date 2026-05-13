export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Capability {
  label: string;
  value: number;
}

export interface Service {
  number: string;
  title: string;
  icon: "palette" | "cursor" | "lightbulb" | "layout";
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  slug: string;
  category: "UI·UX" | "Graphic Design" | "Branding" | "Motion";
  year: string;
  summary: string;
  gradient: string;
  role: string;
  outcome: string;
  images?: {
    src: string;
    alt: string;
  }[];
  liveUrl?: string;
  appUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  range: string;
  points: string[];
  tools: string[];
}

export interface Testimonial {
  name: string;
  company: string;
  initials: string;
  quote: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 20, suffix: "+" },
  { label: "Design Awards", value: 3, suffix: "" },
];

export const uiUxSkills: Skill[] = [
  { name: "Figma", level: 96 },
  { name: "User Research", level: 84 },
  { name: "Wireframing", level: 92 },
  { name: "Prototyping", level: 90 },
  { name: "Design Systems", level: 88 },
  { name: "Usability Testing", level: 82 },
  { name: "Information Architecture", level: 86 },
  { name: "Interaction Design", level: 89 },
];

export const graphicSkills: Skill[] = [
  { name: "Adobe Illustrator", level: 91 },
  { name: "Adobe Photoshop", level: 94 },
  { name: "After Effects", level: 82 },
  { name: "Brand Identity", level: 92 },
  { name: "Typography", level: 88 },
  { name: "Print Design", level: 80 },
  { name: "Motion Graphics", level: 83 },
  { name: "Packaging Design", level: 78 },
];

export const tools = [
  "Figma",
  "Adobe XD",
  "Illustrator",
  "Photoshop",
  "After Effects",
  "Principle",
  "Maze",
  "Notion",
];

export const capabilities: Capability[] = [
  { label: "UI Systems", value: 95 },
  { label: "UX Flow Mapping", value: 92 },
  { label: "Brand Direction", value: 90 },
  { label: "Frontend Handoff", value: 86 },
];

export const services: Service[] = [
  {
    number: "01",
    title: "UI Design",
    icon: "palette",
    description:
      "I design high-fidelity product interfaces for web apps, SaaS dashboards, mobile flows, and marketing surfaces with a premium visual hierarchy.",
    tags: ["Visual systems", "Dashboards", "Responsive UI"],
  },
  {
    number: "02",
    title: "UX Design",
    icon: "cursor",
    description:
      "I map user flows, wireframes, prototypes, and interaction patterns that make complex product journeys easier to understand and complete.",
    tags: ["Research", "Wireframes", "Prototypes"],
  },
  {
    number: "03",
    title: "Product Strategy",
    icon: "lightbulb",
    description:
      "I connect business goals, audience needs, content structure, and implementation realities before pixels harden.",
    tags: ["UX architecture", "Design systems", "Roadmaps"],
  },
  {
    number: "04",
    title: "Brand & Campaign Design",
    icon: "layout",
    description:
      "I create identity systems, launch visuals, social campaigns, posters, mockups, and motion-inspired graphics that sharpen brand presence.",
    tags: ["Brand identity", "Campaigns", "Mockups"],
  },
];

export const projects: Project[] = [
  {
    title: "Denied Boarding Compensation System",
    slug: "denied-boarding-compensation-system",
    category: "UI·UX",
    year: "2025",
    summary:
      "I designed an enterprise-grade claims workflow with role-based dashboards, modal operations, and realistic navigation for airline compensation teams.",
    gradient: "from-stone-950 via-indigo-950 to-amber-500",
    role: "UX architecture, product design, interactive prototyping",
    outcome: "I reduced complex operational flows into a clean admin experience with clear role switching and faster task discovery.",
  },
  {
    title: "Advent Study Hub",
    slug: "advent-study-hub",
    category: "UI·UX",
    year: "2025",
    summary:
      "I shaped a faith-based study platform for Sabbath school lessons, EGW content, devotionals, and AI-assisted learning moments.",
    gradient: "from-neutral-950 via-cyan-900 to-indigo-500",
    role: "Brand system, UX redesign, content architecture, API planning",
    outcome: "I created a calmer learning flow with stronger attribution patterns and polished app identity assets.",
    images: [
      { src: "/images/projects/advent-study-home.png", alt: "Advent Study Hub home screen with EGW books" },
      { src: "/images/projects/advent-egw-library.png", alt: "Advent Study Hub Spirit of Prophecy library screen" },
      { src: "/images/projects/advent-hymnal.png", alt: "Advent Study Hub hymnal screen" },
      { src: "/images/projects/advent-reader.png", alt: "Advent Study Hub reading mode screen" },
    ],
    appUrl: "https://play.google.com/store/apps/details?id=adventist.study.hub&hl=en",
  },
  {
    title: "MedAfya Hospital Management SaaS",
    slug: "medafya-hospital-management-saas",
    category: "UI·UX",
    year: "2026",
    summary:
      "I built a healthcare operations dashboard with patient records, appointments, reception workflows, billing, lab queues, consent tracking, and role-based permissions.",
    gradient: "from-zinc-950 via-emerald-900 to-indigo-500",
    role: "SaaS product design, hospital workflow UX, design systems, frontend implementation",
    outcome: "I defined a secure medical UI language for dense operational views without losing clarity, trust, or accessibility.",
    images: [{ src: "/images/projects/medafya-clinic-hero.png", alt: "MedAfya clinic management product visual" }],
  },
  {
    title: "MIFBeDAS Fisheries Data System",
    slug: "mifbedas-fisheries-data-system",
    category: "UI·UX",
    year: "2026",
    summary:
      "I designed a dark operational system for Migori Fisheries and Blue Economy data, covering role-based login, farmer records, licenses, projects, analytics, and executive dashboards.",
    gradient: "from-slate-950 via-teal-950 to-cyan-500",
    role: "Government dashboard UX, data visualization, role-based interface design",
    outcome: "I turned fisheries operations, project costs, farmer records, and production metrics into a clear dashboard experience for decision makers.",
    images: [
      { src: "/images/projects/mifbedas-login-bg.jpeg", alt: "MIFBeDAS Lake Victoria login background" },
      { src: "/images/projects/mifbedas-dashboard-blue-economy.jpeg", alt: "MIFBeDAS blue economy dashboard image" },
      { src: "/images/projects/mifbedas-lakefront.jpeg", alt: "MIFBeDAS lakefront fisheries development image" },
    ],
    liveUrl: "https://mifbems-client.vercel.app/",
  },
  {
    title: "Inkwell Creations Digital Studio",
    slug: "inkwell-creations-digital-studio",
    category: "Branding",
    year: "2026",
    summary:
      "I created a digital studio landing experience with a Montserrat-led visual language, service navigation, conversion-focused CTAs, and measurable performance storytelling.",
    gradient: "from-neutral-950 via-blue-950 to-orange-500",
    role: "Website UI, brand direction, conversion design",
    outcome: "I positioned strategy, creativity, and technology as one offer through a clean service-led website experience.",
    images: [
      { src: "/images/projects/inkwell-og.jpg", alt: "Inkwell Creations website OpenGraph preview" },
      { src: "/images/projects/inkwell-logo.png", alt: "Inkwell Creations brand mark" },
    ],
    liveUrl: "https://inkwell-creations.vercel.app/",
  },
  {
    title: "Holidawn Adventures Travel Website",
    slug: "holidawn-adventures-travel-website",
    category: "UI·UX",
    year: "2026",
    summary:
      "I worked on a travel and adventure website experience with safari imagery, destination discovery, tour positioning, and conversion-focused calls to action.",
    gradient: "from-stone-950 via-emerald-950 to-orange-500",
    role: "Travel website UI, visual direction, content hierarchy",
    outcome: "I helped frame adventure travel content around vivid destination imagery and a clearer path from inspiration to enquiry.",
    images: [{ src: "/images/projects/holidawn-hero.jpeg", alt: "Holidawn Adventures safari hero image" }],
    liveUrl: "http://holidawnadventures.com/",
  },
  {
    title: "Brand Identity - Bloom Coffee",
    slug: "brand-identity-bloom-coffee",
    category: "Branding",
    year: "2024",
    summary:
      "I explored a warm specialty coffee identity system with logo direction, packaging rhythm, social templates, and launch visuals.",
    gradient: "from-stone-950 via-orange-950 to-amber-400",
    role: "Logo design, brand identity, packaging, art direction",
    outcome: "I built a distinctive visual system that feels premium, friendly, and flexible across print and digital touchpoints.",
  },
  {
    title: "Asante Rewards x Piyavate Designs",
    slug: "asante-rewards-piyavate-designs",
    category: "Graphic Design",
    year: "2025",
    summary:
      "I designed premium healthcare tourism visuals, branded mockups, and cross-brand campaign assets for an international patient audience.",
    gradient: "from-neutral-950 via-sky-950 to-amber-300",
    role: "Campaign design, visual storytelling, mockup direction",
    outcome: "I elevated healthcare marketing assets with a refined, international-grade visual hierarchy.",
  },
  {
    title: "Motion Opener - TED Talk Series",
    slug: "motion-opener-ted-talk-series",
    category: "Motion",
    year: "2024",
    summary:
      "I created a cinematic motion opener concept using bold type, rhythmic transitions, and high-contrast frames for talk promotions.",
    gradient: "from-zinc-950 via-red-950 to-indigo-500",
    role: "Motion concept, storyboard, typography, visual design",
    outcome: "I translated event messaging into a sharper, more memorable promotional sequence.",
  },
];

export const experiences: Experience[] = [
  {
    company: "MedAfya Product Lab",
    role: "Senior UI/UX Designer",
    range: "2025 - Present",
    points: [
      "I designed secure healthcare dashboard flows for admissions, patient records, and operational reporting.",
      "I built component-driven layouts in Figma and translated core screens into responsive Next.js interfaces.",
      "I improved scanability for dense data views with clearer hierarchy, states, and role-based navigation.",
    ],
    tools: ["Figma", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    company: "Piyavate Designs Collaboration",
    role: "Brand & Visual Designer",
    range: "2024 - 2025",
    points: [
      "I created premium healthcare tourism mockups, campaign visuals, and presentation systems.",
      "I developed cross-brand visual direction for international patient communication.",
    ],
    tools: ["Photoshop", "Illustrator", "Canva", "Figma"],
  },
  {
    company: "Advent Study Hub",
    role: "Graphic Designer",
    range: "2024 - 2025",
    points: [
      "I designed app branding, social campaigns, icon systems, and lesson-flow visuals.",
      "I structured faith-based content experiences around attribution, readability, and mobile-first learning.",
    ],
    tools: ["Figma", "Illustrator", "After Effects"],
  },
  {
    company: "Independent Studio",
    role: "Freelance Creative Director",
    range: "2021 - Present",
    points: [
      "I led identity, SaaS UI, sports graphics, posters, and product mockup projects for growing teams.",
      "I modernized cluttered visuals into premium systems with stronger hierarchy and motion-inspired layouts.",
    ],
    tools: ["Figma", "Adobe CC", "Vercel", "Supabase"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Miriam Wanjiku",
    company: "Healthcare Founder",
    initials: "MW",
    quote:
      "The dashboard turned a complex product idea into something calm, premium, and genuinely usable for our operations team.",
  },
  {
    name: "Daniel Otieno",
    company: "Brand Strategist",
    initials: "DO",
    quote:
      "The visual hierarchy was excellent. The final brand assets looked expensive without becoming noisy or hard to use.",
  },
  {
    name: "Grace Njeri",
    company: "Digital Learning Lead",
    initials: "GN",
    quote:
      "The study platform redesign made content easier to follow and gave the whole product a stronger, more trustworthy identity.",
  },
  {
    name: "Brian Mutua",
    company: "SaaS Product Manager",
    initials: "BM",
    quote:
      "The work went beyond screens. Flows, edge cases, components, motion, and implementation details all came together cleanly.",
  },
  {
    name: "Aisha Khan",
    company: "Campaign Director",
    initials: "AK",
    quote:
      "The launch visuals had a cinematic quality while staying practical for social, print, and presentation use.",
  },
];

export const socials = [
  { label: "Behance", href: "https://www.behance.net/antipasshem" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/antipas-shem-a421a81a2/" },
  { label: "Twitter/X", href: "https://x.com" },
  { label: "GitHub", href: "https://github.com/Shem-Antipas" },
];

export const projectTypes = ["UI/UX Design", "Brand Identity", "SaaS Product", "Data System", "Motion Design", "Graphic Design"];
export const budgetRanges = ["$1k - $3k", "$3k - $7k", "$7k - $15k", "$15k+"];
