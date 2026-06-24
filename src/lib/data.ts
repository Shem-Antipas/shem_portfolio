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
  icon: string;
}

export interface ToolGroup {
  label: string;
  tools: Skill[];
}

export interface Capability {
  label: string;
  value: number;
}

export interface Service {
  title: string;
  icon: "palette" | "cursor" | "lightbulb" | "layout";
  description: string;
  tags: string[];
}

export interface CaseStudySection {
  title: string;
  heading: string;
  body: string;
}

export interface CaseStudyScreen {
  title: string;
  caption: string;
}

export interface ProjectCaseStudy {
  client: string;
  tags: string[];
  lede: string;
  actors: string;
  sections: CaseStudySection[];
  screens: CaseStudyScreen[];
  decisions: string[];
  outcomeHeading: string;
  metrics: string[];
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
  tier?: 1 | 2;
  client?: string;
  featureTag?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface Experience {
  company: string;
  role: string;
  range: string;
  narrative: string;
  tools: string[];
}

export interface Testimonial {
  name: string;
  company: string;
  title: string;
  initials: string;
  quote: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const stats: Stat[] = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Design Awards", value: 3, suffix: "" },
];

export const toolGroups: ToolGroup[] = [
  {
    label: "Design & Prototyping",
    tools: [
      { name: "Figma", icon: "figma" },
      { name: "Adobe XD", icon: "pen-tool" },
      { name: "Adobe Illustrator", icon: "vector" },
      { name: "Adobe Photoshop", icon: "image" },
      { name: "Adobe InDesign", icon: "layout" },
    ],
  },
  {
    label: "Motion & Production",
    tools: [
      { name: "Adobe After Effects", icon: "sparkles" },
      { name: "Adobe Premiere Pro", icon: "film" },
      { name: "Adobe Firefly", icon: "wand" },
      { name: "Principle", icon: "mouse-pointer" },
      { name: "Canva", icon: "palette" },
    ],
  },
  {
    label: "Development & Build",
    tools: [
      { name: "Next.js", icon: "code" },
      { name: "Tailwind CSS", icon: "wind" },
      { name: "Framer Motion", icon: "move" },
      { name: "Flutter", icon: "smartphone" },
      { name: "Vercel", icon: "triangle" },
      { name: "Supabase", icon: "database" },
    ],
  },
];

export const alsoUsedTools = ["Maze", "Notion", "Canva Docs", "Firebase"];

export const capabilities: Capability[] = [
  { label: "UI Systems", value: 95 },
  { label: "UX Flow Mapping", value: 92 },
  { label: "Brand Direction", value: 90 },
  { label: "Frontend Handoff", value: 86 },
];

export const services: Service[] = [
  {
    title: "UI Design",
    icon: "palette",
    description: "Interfaces that feel obvious from the first tap.",
    tags: ["Visual systems", "Dashboards", "Responsive UI"],
  },
  {
    title: "UX Design",
    icon: "cursor",
    description: "Flows that make complex journeys easy to complete.",
    tags: ["Research", "Wireframes", "Prototypes"],
  },
  {
    title: "Product Strategy",
    icon: "lightbulb",
    description: "Decisions made before pixels - so execution doesn't drift.",
    tags: ["UX architecture", "Design systems", "Roadmaps"],
  },
  {
    title: "Brand & Campaign Design",
    icon: "layout",
    description: "Visual identity that stays consistent from screen to print.",
    tags: ["Brand identity", "Campaigns", "Motion-inspired graphics"],
  },
];

export const projects: Project[] = [
  {
    title: "Denied Boarding Compensation System",
    slug: "denied-boarding-compensation-system",
    category: "UI·UX",
    year: "2026",
    summary:
      "I designed Kenya Airways' digital denied-boarding compensation workflow, replacing paper forms with QR claims, multi-role approvals, and Oracle handoff screens.",
    gradient: "from-neutral-950 via-red-950 to-stone-800",
    role: "UI Designer (BRD-to-Figma)",
    outcome: "BRD signed by 11 stakeholders · 4 user roles · Oracle integration",
    tier: 1,
    client: "Kenya Airways",
    featureTag: "Live deployment · Enterprise UI",
    images: [
      { src: "/images/projects/DBC - dashboard.png", alt: "Denied Boarding Compensation support dashboard" },
      { src: "/images/projects/DBC - passenger form.png", alt: "Denied Boarding Compensation passenger eligibility form" },
    ],
    caseStudy: {
      client: "Kenya Airways",
      tags: ["Enterprise UI", "Workflow Automation", "2026"],
      lede:
        "I designed the full digital UI for Kenya Airways' Denied Boarding Compensation system - replacing a manual, paper-based airport compensation process with a passenger-facing QR claim form, a multi-role staff approval dashboard, and Oracle financial integration handoff screens. The Business Requirements Document was formally approved by 11 stakeholders across Finance, DevSecOps, Customer Experience, and Operations leadership.",
      actors: "Passenger · CS Agent · Check-in Controller · CS Supervisor · Accounts",
      sections: [
        {
          title: "The Problem",
          heading: "Why the old process was breaking down",
          body:
            "The existing DBC process was entirely manual - passengers received physical forms at the gate, staff recorded submissions in a handbook, documents were physically delivered to accounts, and Oracle data entry was done by hand. There was no audit trail, no automated passenger communication, and no visibility into claim status. Payment errors from manual Oracle entry caused bounce-backs that required additional manual follow-up.",
        },
        {
          title: "My Role",
          heading: "Translating a 30-page BRD into production UI",
          body:
            "I was given a formal Business Requirements Document defining 14 use cases across 5 actor types and worked from it to produce high-fidelity Figma prototypes for every surface. My mandate was to design within Kenya Airways' existing brand system while establishing new UI patterns for multi-step passenger form validation, role-based approval dashboards, status badge systems, and Oracle integration confirmation screens.",
        },
      ],
      screens: [
        {
          title: "CS Agent Dashboard",
          caption:
            "The aircraft window motif in the hero banner was a deliberate brand decision - this is a Kenya Airways internal tool and should feel like one. The four stat cards use color-coded states so an agent can read claim volume at a glance without opening any record.",
        },
        {
          title: "Passenger Eligibility Form",
          caption:
            "The passenger form opens at Step 1: Eligibility - verify your ticket before entering personal details. This gate prevents fraudulent submissions and reduces CS Agent verification load. The 4-step progress indicator communicates that this is a short, structured process.",
        },
      ],
      decisions: [
        "Status badge color system: Eight distinct claim states needed to be scannable in a dense table, so I used hue plus label rather than hue alone.",
        "Aircraft window hero motif: The window motif roots the dashboard in the Kenya Airways world and gives staff a product that feels built for them.",
        "Dual entry path for ticket lookup: Passengers can enter either a ticket number or booking reference, reducing abandonment when one format is unavailable.",
      ],
      outcomeHeading: "What the system was designed to achieve",
      metrics: [
        "100% of required fields validated before submission",
        "95% of DBC requests approved or returned within 3 business days",
        "97% of approved forms auto-reflected in Oracle without manual entry",
        "100% of key events trigger automated passenger notification",
        "Average form completion time under 5 minutes",
        "85% of passengers to use digital QR form vs manual paper form",
        ">=85% passenger satisfaction rate target",
      ],
    },
  },
  {
    title: "BITS + My Idea Portal",
    slug: "bits-my-idea-portal",
    category: "UI·UX",
    year: "2025-2026",
    summary:
      "I designed a unified innovation lifecycle platform for Kenya Airways, merging BITS and My Idea into one role-based product for staff and partners.",
    gradient: "from-neutral-950 via-red-950 to-sky-900",
    role: "UI Designer (BRD-to-Figma)",
    outcome: "Merged 2 internal systems · 4 actor types · SSO",
    tier: 1,
    client: "Kenya Airways",
    featureTag: "Live deployment · Enterprise UI",
    images: [
      { src: "/images/projects/BITS - landing.png", alt: "BITS and My Idea Portal public landing page" },
      { src: "/images/projects/BITS - staff dashboard.png", alt: "BITS and My Idea Portal staff dashboard" },
    ],
    caseStudy: {
      client: "Kenya Airways",
      tags: ["Enterprise UI", "Innovation Platform", "Internal Tool", "2025-2026"],
      lede:
        "I designed a unified innovation lifecycle platform for Kenya Airways - merging two previously separate internal systems (BITS and My Idea) into a single end-to-end product. The platform covers idea submission by staff and external partners, structured admin review and viability assessment, transition of approved ideas into tracked initiatives, milestone monitoring, and role-based dashboards for four distinct actor types.",
      actors: "KQ Staff · External Partners · Admin · Super Admin",
      sections: [
        {
          title: "The Problem",
          heading: "Two systems, duplicated work, limited visibility",
          body:
            "Kenya Airways was running two separate platforms - My Idea for staff idea submissions and BITS for initiative tracking. Ideas approved in My Idea had to be manually converted into BITS records. There was no audit trail, no automated notifications, and no visibility into what happened to an idea after it was submitted.",
        },
        {
          title: "My Role",
          heading: "Designing for four distinct actor types across one system",
          body:
            "I was given a Phase II BRD defining 15 use cases across 4 actor types and produced high-fidelity Figma prototypes for every surface. The core design challenge was role differentiation: the same module needed to support read-only access, ownership controls, and full governance actions without creating four separate interfaces.",
        },
      ],
      screens: [
        {
          title: "Landing Page / Public Portal",
          caption:
            "The public-facing landing page needed to work for both internal KQ staff arriving via SSO and external innovation partners arriving via the Fahari Innovation website. The aircraft breaking out of the hero frame was a deliberate brand moment.",
        },
        {
          title: "Staff Dashboard",
          caption:
            "The staff dashboard aggregates the numbers that matter to an initiative contributor: Total Ideas, My Ideas, My Initiatives, and Total Initiatives. The Active Campaigns panel gives immediate context on where the organization's innovation energy is focused.",
        },
      ],
      decisions: [
        "Role-based access without role-based navigation: All four actor types share the same structure while controls appear only where permissions allow.",
        "Status color system: Red, amber, green, and white statuses update automatically based on due dates and require no legend.",
        "Idea Trend chart: The 7-month bar chart gives contributors a sense of organizational momentum instead of a static count.",
      ],
      outcomeHeading: "What consolidation was designed to deliver",
      metrics: [
        "2 systems consolidated into 1 unified platform",
        "4 distinct actor types with role-based access",
        "SSO for internal staff + secure external portal for partners",
        "Automated milestone status without manual updates",
        "Full audit trail on all approvals",
        "Automated email notifications for every key lifecycle event",
        "Real-time dashboard reflecting approved initiatives and targets",
      ],
    },
  },
  {
    title: "Advent Study Hub",
    slug: "advent-study-hub",
    category: "UI·UX",
    year: "2025-2026",
    summary:
      "I designed and shipped a faith-based study ecosystem across web and Android, bringing lessons, Bible reading, EGW books, hymns, notes, and offline downloads into one calm product experience.",
    gradient: "from-neutral-950 via-cyan-900 to-indigo-500",
    role: "Product UX, app identity, responsive web UI, Android experience",
    outcome: "Live web experience and Play Store app with a clearer study flow for Sabbath lessons, Scripture, EGW, hymns, and downloads.",
    images: [
      { src: "/images/projects/Advent Study Hub  landing 2.png", alt: "Advent Study Hub dark website landing page" },
      { src: "/images/projects/Advent Study hub-landing-1.png", alt: "Advent Study Hub feature landing page" },
    ],
    liveUrl: "https://advent-study-hub-web.vercel.app/en",
    appUrl: "https://play.google.com/store/apps/details?id=adventist.study.hub&hl=en",
    caseStudy: {
      client: "Advent Study Hub",
      tags: ["Android App", "Web Landing", "Faith-based Product", "2025-2026"],
      lede:
        "I designed Advent Study Hub as a connected faith-study product across Android and web. My work focused on making Sabbath School lessons, Bible reading, EGW books, hymns, notes, downloads, and app discovery feel organized, calm, and credible for users who study at church, at home, and sometimes offline.",
      actors: "Bible students · Sabbath School members · Church leaders · Android app users · Website visitors",
      sections: [
        {
          title: "Context",
          heading: "A spiritual learning product needed product-level clarity",
          body:
            "The product brings together many content types - lessons, Bible, EGW books, hymns, devotionals, notes, and downloads. The challenge was to avoid a crowded library feeling and instead make the experience feel like one guided study hub with clear entry points.",
        },
        {
          title: "My Role",
          heading: "I shaped the app experience and the public web presence",
          body:
            "I worked on the product UX, visual hierarchy, app identity, responsive website presentation, Play Store positioning, and screen-level structure. I treated the web page as a product story: show the app, communicate the core study tools, and make the download path obvious.",
        },
        {
          title: "System",
          heading: "A reusable structure for lessons, reading, hymns, and downloads",
          body:
            "I organized the experience around familiar study actions: continue a lesson, open Scripture, browse EGW content, sing hymns, save notes, and download resources. This helped reduce cognitive load while keeping the product expandable.",
        },
        {
          title: "Outcome",
          heading: "A live web experience supporting a published Android app",
          body:
            "The final experience presents Advent Study Hub as a serious, usable faith-study product with a live web landing page and a Play Store app listing. The visual system uses strong contrast, phone mockups, and focused copy to make the app's value immediately clear.",
        },
      ],
      screens: [
        {
          title: "Website hero and download path",
          caption:
            "The web landing page leads with the app interface, a simple headline, and a direct Google Play download action so visitors understand the product before reading deeper feature details.",
        },
        {
          title: "Feature-led product story",
          caption:
            "The feature section groups lessons, Bible, EGW, hymns, notes, and downloads into a single product promise instead of presenting them as disconnected modules.",
        },
      ],
      decisions: [
        "I used large phone previews because the app experience is the proof of the product, not decorative marketing copy.",
        "The web copy stays short and action-oriented so the page supports download conversion quickly.",
        "The information architecture keeps worship, study, reading, and offline access visible without overwhelming first-time users.",
      ],
      outcomeHeading: "What the product experience now communicates",
      metrics: [
        "Live Android app on Google Play",
        "Live responsive web landing page",
        "Clear download path for app discovery",
        "Unified positioning for lessons, Bible, EGW, hymns, notes, and offline downloads",
      ],
    },
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
      { src: "/images/projects/MIFBEMS Login.png", alt: "MIFBeDAS Lake Victoria login screen" },
      { src: "/images/projects/MIFBEMS Dashboard.png", alt: "MIFBeDAS fisheries dashboard overview" },
    ],
    liveUrl: "https://mifbems-client.vercel.app/",
    caseStudy: {
      client: "Migori County Fisheries & Blue Economy",
      tags: ["Government Dashboard", "Data System", "Role-based UX", "2026"],
      lede:
        "I designed MIFBeDAS as an operational data system for fisheries and blue economy programs, turning farmer records, licensing, production metrics, project costs, and dashboard reporting into a structured interface for county teams and decision makers.",
      actors: "Director · Officers · Analysts · Farmers · Admin users",
      sections: [
        {
          title: "Context",
          heading: "Fisheries operations needed one reliable data view",
          body:
            "The system needed to support day-to-day records while also giving leadership a quick view of production, licenses, project status, revenue, and investment indicators. That meant the UX had to serve both field data capture and executive scanning.",
        },
        {
          title: "My Role",
          heading: "I designed the dashboard language and role-based product structure",
          body:
            "I worked on the login experience, navigation model, dashboard cards, project status blocks, data hierarchy, and visual tone. The interface needed to feel official and operational while still being clear enough for repeated administrative use.",
        },
        {
          title: "System",
          heading: "A structured admin system for records, licenses, projects, and analytics",
          body:
            "I organized the product around core work areas: farmers, licenses, fisheries capture, projects, extension registry, advisories, queries, reports, analytics, users, backups, and settings. This gave each role a predictable path through the system.",
        },
        {
          title: "Outcome",
          heading: "A dashboard that makes blue economy indicators easier to read",
          body:
            "The dashboard brings high-value metrics forward - total farmers, active licenses, production, revenue, project costs, and completion progress - so decision makers can scan operational health without digging through raw records first.",
        },
      ],
      screens: [
        {
          title: "Role-based login",
          caption:
            "The login screen uses the Lake Victoria setting and county identity to ground the product in its actual operating context before users enter the data system.",
        },
        {
          title: "Dashboard overview",
          caption:
            "The dashboard prioritizes top-line fisheries indicators and project completion status so directors can quickly understand current operations.",
        },
      ],
      decisions: [
        "I used a left navigation rail because the system has many operational modules and users need persistent orientation.",
        "Metric cards are intentionally plain and high contrast so numbers remain the hero of the interface.",
        "Project progress bars separate ongoing and completed work, making investment status visible without requiring a report export.",
      ],
      outcomeHeading: "What the system enables",
      metrics: [
        "Role-based access model",
        "Dashboard for farmers, licenses, production, revenue, and project costs",
        "Operational navigation for records, reports, analytics, and users",
        "Clearer visibility into ongoing vs completed blue economy projects",
      ],
    },
  },
  {
    title: "Wild Honey Haven E-commerce Website",
    slug: "wild-honey-haven-ecommerce-website",
    category: "UI·UX",
    year: "2026",
    summary:
      "I built a premium Kenyan honey storefront around origin, product clarity, beekeeping tools, impact storytelling, and a clean path from browsing to cart.",
    gradient: "from-stone-950 via-emerald-950 to-amber-400",
    role: "E-commerce UI, product storytelling, brand-led shopping flow",
    outcome: "A live storefront that makes raw honey, beekeeper tools, pricing, weights, and product discovery feel polished and easy to act on.",
    images: [
      { src: "/images/projects/Wild Honey -landing.png", alt: "Wild Honey Haven product landing page" },
      { src: "/images/projects/Wild Honey-Shop.png", alt: "Wild Honey Haven product shop grid" },
    ],
    liveUrl: "https://wild-honey-haven.vercel.app/",
    caseStudy: {
      client: "Wild Honey Haven",
      tags: ["E-commerce", "Brand Website", "Product UX", "2026"],
      lede:
        "I created Wild Honey Haven as a premium e-commerce website for Kenyan honey and beekeeping products. My role was to turn a local product story into a polished shopping experience with clear product cards, pricing, weight selection, quantity controls, cart actions, and impact-led brand positioning.",
      actors: "Honey buyers · Wellness shoppers · Beekeepers · Farmers · Brand visitors",
      sections: [
        {
          title: "Context",
          heading: "The product needed to feel local, premium, and easy to buy",
          body:
            "Wild Honey Haven sells raw honey and beekeeping tools, so the website needed to balance origin storytelling with practical commerce. Visitors should understand the quality and purpose of the product while still being able to shop without friction.",
        },
        {
          title: "My Role",
          heading: "I designed the storefront, product hierarchy, and shopping flow",
          body:
            "I worked on the visual direction, hero presentation, product-card structure, category labels, price hierarchy, weight selectors, quantity controls, and add-to-cart behavior. The design keeps the brand warm and natural while making purchase decisions straightforward.",
        },
        {
          title: "System",
          heading: "A product card system that handles honey and tools consistently",
          body:
            "The shop needed to support honey variations, tools, equipment, different price ranges, and product descriptions. I used repeatable cards with image, category, price, short description, selector, quantity stepper, and action button so every item feels consistent.",
        },
        {
          title: "Outcome",
          heading: "A live storefront with product clarity and brand character",
          body:
            "The final website presents Wild Honey Haven as a trustworthy, purpose-driven honey brand while giving users a simple route from product discovery to cart. The visual language feels earthy and premium without hiding the commerce actions.",
        },
      ],
      screens: [
        {
          title: "Hero and brand positioning",
          caption:
            "The landing section uses a large honey product visual and concise copy to make the brand's practical beekeeping focus clear immediately.",
        },
        {
          title: "Product shop grid",
          caption:
            "The shop grid keeps pricing, weights, quantities, and add-to-cart actions visible so users can compare products without opening several pages.",
        },
      ],
      decisions: [
        "I paired editorial serif-style headings with utilitarian product controls to balance premium storytelling and shopping clarity.",
        "Quick View and Add actions are placed close to product imagery because the product itself drives the purchase decision.",
        "Honey weights and totals stay visible to reduce confusion when switching between product sizes.",
      ],
      outcomeHeading: "What the storefront improves",
      metrics: [
        "Live e-commerce website",
        "Reusable product card pattern for honey and beekeeping tools",
        "Visible pricing, weight selection, quantity, and cart actions",
        "Brand story connected to product origin and practical beekeeping",
      ],
    },
  },
  {
    title: "Inkwell Creations Website",
    slug: "inkwell-creations-website",
    category: "Branding",
    year: "2026",
    summary:
      "I created a live studio website for Inkwell Creations, positioning strategy, creativity, technology, content, automation, and graphic design as one coherent digital offer.",
    gradient: "from-neutral-950 via-blue-950 to-orange-500",
    role: "Website UI, brand direction, conversion design",
    outcome: "A sharper studio presence with a cinematic hero, service pillars, clear navigation, and a direct discovery-call conversion path.",
    images: [
      { src: "/images/projects/Inkwell Home landing.png", alt: "Inkwell Creations website hero section" },
      { src: "/images/projects/Inkwell Creations-Pillar.png", alt: "Inkwell Creations service pillar grid" },
      { src: "/images/projects/inkwell-logo.png", alt: "Inkwell Creations brand mark" },
    ],
    liveUrl: "https://inkwell-creations.vercel.app/",
    caseStudy: {
      client: "Inkwell Creations",
      tags: ["Studio Website", "Brand Positioning", "Service UX", "2026"],
      lede:
        "I designed Inkwell Creations as a live studio website that presents strategy, creativity, technology, content, automation, and graphic design as one connected offer. My work focused on building a strong first impression, clear service pillars, and a conversion path that feels premium without becoming noisy.",
      actors: "Business owners · Marketing teams · Startup founders · Prospective clients · Studio partners",
      sections: [
        {
          title: "Context",
          heading: "The studio needed a website that sells capability without over-explaining",
          body:
            "Inkwell Creations covers brand strategy, web, marketing, content, automation, and graphics. The challenge was to communicate breadth while still feeling focused, so visitors could understand the offer quickly and know where to start.",
        },
        {
          title: "My Role",
          heading: "I shaped the brand-led website structure and visual direction",
          body:
            "I worked on the hero composition, service navigation, pillar cards, copy hierarchy, call-to-action placement, and overall art direction. The goal was to make the studio feel strategic, modern, and execution-ready.",
        },
        {
          title: "System",
          heading: "Service pillars that turn a broad offer into a scannable system",
          body:
            "I grouped the studio's work into clear pillars: Brand & Creative Strategy, Digital Presence & Web, Marketing & Growth, Media & Content Production, Technology & Automation, and Graphics Design. This gives visitors a structured way to evaluate the studio's capabilities.",
        },
        {
          title: "Outcome",
          heading: "A live studio presence with stronger conversion intent",
          body:
            "The final site uses a cinematic hero, restrained navigation, service-led cards, and direct booking CTAs to move visitors from brand impression to enquiry. It gives Inkwell a polished digital home that reflects the work it offers clients.",
        },
      ],
      screens: [
        {
          title: "Hero and primary conversion",
          caption:
            "The hero uses a full-bleed creative workspace image, short positioning, and paired CTAs so the studio feels premium while keeping action paths clear.",
        },
        {
          title: "Service pillar grid",
          caption:
            "The service grid translates a wide creative and digital offer into six scannable cards, each with a clear promise and category label.",
        },
      ],
      decisions: [
        "I kept the hero copy short because the visual identity and service sections carry the detail below the fold.",
        "The orange discovery-call CTA stands apart from the otherwise restrained palette, making conversion easy to spot.",
        "The service cards use consistent image ratios and labels so broad capabilities feel organized rather than scattered.",
      ],
      outcomeHeading: "What the website now does for the studio",
      metrics: [
        "Live agency/studio website",
        "Six service pillars organized into a clear offer system",
        "Direct discovery-call conversion path",
        "Consistent brand presence across hero, navigation, and service sections",
      ],
    },
  },
  {
    title: "Holidawn Adventures Travel Website",
    slug: "holidawn-adventures-travel-website",
    category: "UI·UX",
    year: "2026",
    summary:
      "I worked on a safari and travel website experience with immersive hero imagery, destination discovery, tour categories, search prompts, and conversion-focused booking flows.",
    gradient: "from-stone-950 via-emerald-950 to-orange-500",
    role: "Travel website UI, visual direction, content hierarchy",
    outcome: "A live travel website that moves users from emotional destination inspiration into practical tour search, enquiry, and booking decisions.",
    images: [
      { src: "/images/projects/Holidawn-landing.png", alt: "Holidawn Adventures safari landing page" },
      { src: "/images/projects/Holidawn-landing-list.png", alt: "Holidawn Adventures destination list section" },
    ],
    liveUrl: "http://holidawnadventures.com/",
    caseStudy: {
      client: "Holidawn Adventures",
      tags: ["Travel Website", "Destination UX", "Tour Discovery", "2026"],
      lede:
        "I worked on Holidawn Adventures as a travel and safari website experience that turns destination imagery into a clear path toward tour discovery and booking. My role focused on visual hierarchy, destination browsing, tour search cues, and a layout that makes travel feel exciting but still practical.",
      actors: "Travelers · Safari clients · Tour planners · Adventure seekers · Booking leads",
      sections: [
        {
          title: "Context",
          heading: "Travel inspiration needed to connect to booking action",
          body:
            "The site needed to sell the emotion of travel through strong safari imagery while still helping users find destinations, trip types, duration, price ranges, and booking paths. The key challenge was balancing inspiration with usability.",
        },
        {
          title: "My Role",
          heading: "I shaped the travel UI, destination hierarchy, and booking prompts",
          body:
            "I worked on hero framing, destination list presentation, search prompt hierarchy, tour-card visibility, navigation structure, and content flow. The design needed to feel adventurous while staying easy to scan for real travel planning.",
        },
        {
          title: "System",
          heading: "A destination-led browsing model",
          body:
            "I organized the experience around travel decisions: where to go, what type of trip to take, how long it lasts, and what it costs. This makes the site useful for both dreaming and comparing options.",
        },
        {
          title: "Outcome",
          heading: "A live travel website with clearer discovery moments",
          body:
            "The final experience uses large destination photography, visible search controls, category-led navigation, and destination cards to guide users from inspiration to enquiry without making the page feel transactional too early.",
        },
      ],
      screens: [
        {
          title: "Safari landing experience",
          caption:
            "The hero establishes the emotional tone with wildlife imagery, a clear adventure promise, and a search strip that starts turning interest into action.",
        },
        {
          title: "Destination discovery grid",
          caption:
            "The destination list groups countries and tour counts into large visual cards so users can compare travel options quickly.",
        },
      ],
      decisions: [
        "I kept destination cards image-heavy because travel decisions begin with desire and place recognition.",
        "The search strip appears close to the hero so users can move from inspiration to planning without scrolling too far.",
        "Orange action elements contrast with the green travel palette, helping booking actions stand out.",
      ],
      outcomeHeading: "What the travel experience supports",
      metrics: [
        "Live travel and safari website",
        "Destination-first browsing model",
        "Visible tour search prompts for location, trip type, duration, and price",
        "Clearer route from inspiration to booking enquiry",
      ],
    },
  },
];

export const experiences: Experience[] = [
  {
    company: "Kenya Airways",
    role: "Creative Designer",
    range: "Aug 2022 - Present",
    narrative:
      "At Kenya Airways I ship digital and print campaigns that have contributed to a 300% increase in page impressions (163.8M vs 40.9M), grown post reach to 18.3M people, and expanded the social audience to nearly 2M followers. I also designed the UI for two live internal enterprise systems - the DBC Automation workflow and the BITS + My Idea Portal - translating signed BRDs into production-ready Figma prototypes across multi-role approval workflows and role-based dashboards.",
    tools: ["Figma", "Adobe CC", "InDesign", "Illustrator", "Photoshop", "After Effects", "Premiere Pro"],
  },
  {
    company: "Inkwell Creations",
    role: "Freelance Designer",
    range: "2021 - Present",
    narrative:
      "As a freelance designer at Inkwell Creations, I build websites, brand identity systems, graphics, campaign visuals, and product mockups for businesses that need a polished digital presence. My work covers UI direction, responsive web layouts, visual identity, social media assets, print-ready brand items, and implementation support from concept to launch.",
    tools: ["Figma", "Next.js", "Tailwind CSS", "Photoshop", "Illustrator", "Canva", "Vercel"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Director, Holidawn Adventures",
    company: "Holidawn Adventures",
    title: "Travel & Tours",
    initials: "HA",
    quote:
      "Antipas helped shape our travel website into a more polished, destination-led experience. The design makes our tours easier to explore and gives the brand a stronger first impression.",
  },
  {
    name: "Director, Wild Honey Haven",
    company: "Wild Honey Haven",
    title: "E-commerce & Product Brand",
    initials: "WH",
    quote:
      "The website presents our honey products with clarity and warmth. The product cards, shopping flow, and brand story feel professional while still staying true to our local roots.",
  },
  {
    name: "Director, Kavico Company",
    company: "Kavico Company",
    title: "Construction Company, Kisumu",
    initials: "KC",
    quote:
      "Antipas helped us build a cleaner construction company website that communicates our services more clearly and gives clients a better sense of trust before they contact us.",
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
