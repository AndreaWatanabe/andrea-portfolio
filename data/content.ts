export const profile = {
  name: "Andrea Watanabe",
  tagline:
    "Economics student turning messy information into clear, useful tools — across data, business, and design.",
  location: "Vancouver, BC",
  email: "sakurawt32@gmail.com",
  linkedin: "https://www.linkedin.com/in/andreawatanabe/",
  github: "https://github.com/AndreaWatanabe",
  /** Drop a file at public/photo.jpg to fill the About portrait. */
  photo: "/photo.jpg",
  /** Drop a file at public/resume.pdf to switch on the resume button. */
  resume: "/resume.pdf",
};

/* ------------------------------------------------------------------ *
 * Now — what she is actually up to at the moment
 * ------------------------------------------------------------------ */

export const nowItems = [
  {
    icon: "🏊",
    title: "Training for Ironman Victoria",
    text: "Swim, bike, run — most mornings start early right now.",
  },
  {
    icon: "🧶",
    title: "Crocheting",
    text: "Small handmade things, mostly on the commute.",
  },
  {
    icon: "📊",
    title: "Building a Power BI dashboard",
    text: "Two pages, 4,200 simulated records, tracking processing time and data quality.",
  },
];

/* ------------------------------------------------------------------ *
 * Projects — each one gets its own page at /projects/<slug>
 * ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  number: string;
  title: string;
  tag: string;
  /** One line, used on the project card. */
  blurb: string;
  /** Short framing paragraph at the top of the project page. */
  context: string;
  role: string;
  period: string;
  /** Background wash behind the screenshot panel. */
  tint: "blue" | "pink" | "lilac" | "mint" | "cream" | "peach";
  tools: string[];
  images: string[];
  highlights: string[];
  outcome?: string;
  href?: string;
  hrefLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "monthly-financial-wrap",
    number: "01",
    title: "Monthly Financial Wrap",
    tag: "Spark Jam 2026 · Best Framer User",
    blurb:
      "An interactive dashboard that makes a month of spending readable at a glance.",
    context:
      "Built for Spark Jam 2026. The goal was to take a month of raw spending data and turn it into something a person could actually understand in a few seconds, rather than a spreadsheet they would avoid opening.",
    role: "Data cleaning, design, prototyping",
    period: "2026",
    tint: "blue",
    tools: ["Framer", "Figma", "Excel", "UX/UI"],
    images: [
      "/project-previews/financial-01.png",
      "/project-previews/financial-02.png",
      "/project-previews/financial-03.png",
    ],
    highlights: [
      "Cleaned and structured a month of spending data in Excel",
      "Analyzed the financial activity to find the patterns worth surfacing",
      "Designed an interactive dashboard around those patterns",
      "Prototyped the full experience in Figma and Framer",
    ],
    outcome: "Recognized as Best Framer User at Spark Jam 2026.",
    href: "https://authentic-sparrow-062361.framer.app/",
    hrefLabel: "View the live prototype",
  },
  {
    slug: "operational-performance-dashboard",
    number: "02",
    title: "Operational Performance Dashboard",
    tag: "Power BI · In progress",
    blurb:
      "A two-page Power BI dashboard over 4,200 records, tracking flow, timing, and data quality.",
    context:
      "A self-directed analytics project built on 4,200 simulated records, modelled on the kind of operational reporting I prepare at work. The question behind it: where does a case actually slow down, and which records can't be trusted?",
    role: "Data modelling and dashboard design",
    period: "In progress",
    tint: "lilac",
    tools: ["Power BI", "Excel", "Data Analysis"],
    images: [],
    highlights: [
      "Built a two-page dashboard over 4,200 simulated records",
      "Tracked monthly inflow to show how volume moves through the year",
      "Analyzed processing time to locate the slow points",
      "Measured data completeness so unreliable records surface early",
      "Compared regional trends side by side",
      "Flagged records that need manual review",
      "Used KPI cards, filters, slicers, and drill-down analysis",
    ],
  },
  {
    slug: "pollito-world",
    number: "03",
    title: "Pollito World",
    tag: "English-learning platform",
    blurb:
      "An English-learning platform built from scratch, database and all.",
    context:
      "A full build from an empty folder: the learning content, the interface, and the database underneath it. The interesting part was structuring lesson content and user data so they could grow without the whole thing needing a rewrite.",
    role: "Everything — design, front end, database",
    period: "Personal project",
    tint: "mint",
    tools: ["JavaScript", "HTML", "CSS", "Supabase", "SQL"],
    images: [],
    highlights: [
      "Built the platform from scratch",
      "Designed and created the database in Supabase",
      "Wrote SQL queries to store, retrieve, and manage information",
      "Organized structured learning content alongside user data",
      "Built the interface with JavaScript, HTML, and CSS",
    ],
  },
  {
    slug: "salesforce-stock-pitch",
    number: "04",
    title: "Salesforce Stock Pitch",
    tag: "CFAC Stock Pitch Competition",
    blurb:
      "A researched investment thesis on Salesforce, built with Bloomberg and Capital IQ.",
    context:
      "My entry in the CFAC Stock Pitch Competition. The work was less about the recommendation itself and more about building an argument that held up under questioning — every claim traceable to something in the filings or the market data.",
    role: "Research and presentation",
    period: "Competition",
    tint: "cream",
    tools: ["Bloomberg", "Capital IQ", "Financial Analysis"],
    images: [],
    highlights: [
      "Researched Salesforce as a company and as a position",
      "Conducted company, market, and industry analysis",
      "Used Bloomberg and Capital IQ for financial and market research",
      "Reviewed financial and market information for the thesis",
      "Developed an investment thesis from that evidence",
      "Presented an evidence-based recommendation to judges",
    ],
  },
  {
    slug: "zipboard-ai-feedback",
    number: "05",
    title: "zipBoard AI Feedback Intelligence",
    tag: "AI & product strategy",
    blurb:
      "An AI-assisted approach to consolidating scattered project feedback into decisions.",
    context:
      "Project feedback arrives from many stakeholders, in many places, saying overlapping things. This concept looked at how AI could cluster that feedback so recurring issues and risks become visible instead of getting lost in the pile.",
    role: "Product strategy and finance",
    period: "2026",
    tint: "peach",
    tools: ["AI Strategy", "Product Strategy", "Research", "PowerPoint"],
    images: [
      "/project-previews/zipboard-01.png",
      "/project-previews/zipboard-02.png",
      "/project-previews/zipboard-03.png",
    ],
    highlights: [
      "Developed an AI-assisted approach for consolidating project feedback",
      "Organized feedback coming from different stakeholders",
      "Identified recurring issues, risks, and patterns across that feedback",
      "Proposed a product and dashboard strategy around the findings",
      "Explored how AI could support clearer project decisions",
      "Worked the financial side of the project and supported the presentation",
    ],
  },
  {
    slug: "consulate-copilot-agents",
    number: "06",
    title: "Copilot Agents for Case Email",
    tag: "Internal tooling · ~50% time saved",
    blurb:
      "Microsoft Copilot agents that cut my email handling time roughly in half.",
    context:
      "A large share of the day went to recurring email: the same categories of question, answered the same way. I designed Copilot agents to draft those responses, while keeping a person in the loop wherever the content was sensitive.",
    role: "Design, instruction logic, review",
    period: "2026",
    tint: "pink",
    tools: ["Microsoft Copilot", "Copilot agents", "Process design"],
    images: [],
    highlights: [
      "Designed Microsoft Copilot agents for recurring email workflows",
      "Structured the instructions and response logic behind each agent",
      "Improved response consistency and accuracy",
      "Reduced email-handling time by approximately 50%",
      "Reviewed AI-generated responses for accuracy, tone, context, and confidentiality",
      "Kept human review in place for sensitive information and final responses",
    ],
    outcome:
      "Roughly half the time previously spent on recurring email went back into case work.",
  },
  {
    slug: "protection-case-documentation",
    number: "07",
    title: "Protection-Case Documentation System",
    tag: "Used daily by the team",
    blurb:
      "A centralized Figma resource for worker-protection cases, now part of daily work.",
    context:
      "New interns kept asking the same questions, and the answers lived in people's heads rather than anywhere findable. I mapped what was missing and built one place to look it up.",
    role: "Research, information design",
    period: "2026",
    tint: "blue",
    tools: ["Figma", "Documentation", "Process design"],
    images: [
      "/project-previews/sawp-01.png",
      "/project-previews/sawp-02.png",
      "/project-previews/sawp-03.png",
    ],
    highlights: [
      "Identified the gaps in the existing documentation",
      "Created a centralized Figma resource to close them",
      "Organized information about worker-protection cases so it is findable",
      "Shaped it around how staff and interns actually look things up",
    ],
    outcome: "Now used daily by staff and interns on the team.",
  },
  {
    slug: "tassen-corp-website",
    number: "08",
    title: "Tassen Corp Website",
    tag: "Side hustle · Shipped",
    blurb:
      "A shipped business site — part of my side hustle building front-end pages for growing companies.",
    context:
      "One of the front-end sites I build for growing companies on the side. Tassen Corp needed a clear presence explaining its role as a mediator and importer of raw materials for the plastics industry, aimed at business clients rather than consumers.",
    role: "Design and front-end build",
    period: "Shipped",
    tint: "mint",
    tools: ["HTML", "CSS", "JavaScript", "Figma", "VS Code"],
    images: [
      "/project-previews/tassen-01.png",
      "/project-previews/tassen-02.png",
      "/project-previews/tassen-03.png",
    ],
    highlights: [
      "Designed the layout and page structure in Figma",
      "Built the front end with HTML, CSS, and JavaScript",
      "Presented the company, its services, and its role as a mediator and importer of raw materials for the plastics industry",
      "Shaped the content for a business audience",
    ],
  },
  {
    slug: "bass-case-competition",
    number: "09",
    title: "BASS Case Competition",
    tag: "Finalist",
    blurb:
      "Reached the final round with a team, on a deadline, with an evidence-based recommendation.",
    context:
      "A team case competition run to a tight clock. Analysis, recommendation, and presentation all had to come together fast enough to make the deadline and hold up in front of judges.",
    role: "Analysis and presentation",
    period: "Competition",
    tint: "lilac",
    tools: ["Case analysis", "Presentation", "Teamwork"],
    images: [],
    highlights: [
      "Analyzed a business problem as part of a team",
      "Developed an evidence-based recommendation",
      "Prepared and delivered a presentation under competition deadlines",
    ],
    outcome: "Reached the final round.",
  },
];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/* ------------------------------------------------------------------ *
 * Experience
 * ------------------------------------------------------------------ */

export type Experience = {
  role: string;
  place: string;
  location?: string;
  date: string;
  /** Compact year range for the summary list. */
  years: string;
  /** Pulled out into the panel beside the role. */
  highlight: { value?: string; label: string };
  tint: "blue" | "pink" | "lilac" | "mint" | "cream" | "peach";
  bullets: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    role: "Seasonal Agricultural Worker Program Intern",
    place: "Consulate General of Mexico",
    location: "Vancouver, BC",
    date: "Summer 2026",
    years: "2026",
    highlight: {
      value: "~50%",
      label: "less time on recurring email, after building Copilot agents",
    },
    tint: "pink",
    bullets: [
      "Maintained and analyzed an Excel database of roughly 3,000–5,000 workers and employers",
      "Prepared monthly reports on worker inflow and program trends",
      "Entered, updated, and validated information in the Mexican EPC system",
      "Worked on health, insurance, and worker-protection cases",
      "Investigated missing, incomplete, or inconsistent records",
      "Built Microsoft Copilot agents for recurring email workflows, cutting handling time by ~50%",
      "Created a Figma protection-case resource now used daily by staff and interns",
      "Supported a FIFA worker-protection awareness campaign with Figma graphics for Instagram",
    ],
    skills: ["Excel", "Data validation", "Reporting", "Copilot agents", "Figma"],
  },
  {
    role: "Event Coordinator",
    place: "Lean In Network Vancouver",
    location: "Vancouver, BC",
    date: "Jun 2026 — Present",
    years: "2026—Now",
    highlight: {
      label: "Monthly events, speaker outreach, and a RACI matrix the whole team works from",
    },
    tint: "lilac",
    bullets: [
      "Plan and coordinate monthly events end to end",
      "Conduct speaker outreach",
      "Research participants' industries and professional backgrounds, then design activities around what I find",
      "Manage the RACI matrix across the team",
      "Track responsibilities, decisions, action items, dependencies, deadlines, and deliverables",
      "Coordinate communication among speakers, participants, and stakeholders",
      "Create event materials in Figma",
    ],
    skills: ["Event planning", "RACI", "Stakeholder comms", "Speaker outreach", "Figma"],
  },
  {
    role: "Director of Logistics",
    place: "UNICEF SFU",
    location: "Burnaby, BC",
    date: "2025 — Present",
    years: "2025—Now",
    highlight: {
      value: "$1,500+",
      label: "raised through campus fundraising and awareness events",
    },
    tint: "mint",
    bullets: [
      "Coordinate campus fundraising and awareness events",
      "Manage venues, catering, supplies, speakers, timelines, and guest experience",
      "Helped fundraising activities generate more than $1,500",
    ],
    skills: ["Fundraising", "Event logistics", "Vendor coordination"],
  },
  {
    role: "Event Coordinator & Project Manager",
    place: "IterateUX",
    date: "Oct 2024 — May 2025",
    years: "2024—2025",
    highlight: {
      label: "Monthly professional-development events, planned and delivered end to end",
    },
    tint: "blue",
    bullets: [
      "Planned, hosted, and delivered monthly professional-development events",
      "Conducted speaker outreach and coordinated schedules, materials, and attendees",
      "Provided live event support and resolved changing needs on the day",
      "Developed the concept for a design challenge, defining its deliverables, target dates, and timeline",
      "Coordinated the project handoff when another person took over",
    ],
    skills: ["Project management", "Event delivery", "Timelines", "Handoff"],
  },
  {
    role: "Accounting Assistant",
    place: "AN Consulting & Services SAC",
    date: "Dec 2024 — Feb 2025",
    years: "2024—2025",
    highlight: {
      label: "Reconciliations and balance-sheet review, with discrepancies chased down before reporting",
    },
    tint: "cream",
    bullets: [
      "Maintained financial records in Excel",
      "Completed bank reconciliations",
      "Reviewed balance-sheet information and checked supporting documentation",
      "Investigated discrepancies and corrected inconsistencies before financial reporting",
    ],
    skills: ["Excel", "Reconciliation", "Financial records"],
  },
];

/** The kinds of places those roles were in. */
export const sectors = [
  "government & consular",
  "non-profit",
  "UX community",
  "accounting",
  "event operations",
  "data analysis",
];

/* ------------------------------------------------------------------ *
 * Education, awards, certifications
 * ------------------------------------------------------------------ */

export const education = {
  school: "Simon Fraser University",
  degree: "Bachelor of Arts in Economics",
  faculty: "Faculty of Arts and Social Sciences",
  concentration: "Concentration in Data Analysis",
  graduation: "Expected December 2027",
  coursework: [
    "ECON 333 — Statistical Analysis of Economic Data / Econometrics",
    "Business Statistics",
    "Introduction to R for Data Science",
    "Project Management",
    "Financial Accounting",
    "Business Technology Management",
  ],
};

export const awards = [
  { name: "BASS Case Competition", detail: "Finalist" },
  { name: "Spark Jam 2026", detail: "Best Framer User" },
  { name: "CFAC Stock Pitch Competition", detail: "Competitor — pitched Salesforce" },
  { name: "UNICEF SFU fundraising", detail: "Helped raise $1,500+" },
  { name: "BMO Half Marathon", detail: "Finisher" },
];

export const certificates = [
  { name: "Bloomberg Market Concepts", area: "Finance" },
  { name: "Excel for Data Analysis", area: "Data" },
  { name: "Introduction to Oracle Cloud Essentials", area: "Cloud" },
  { name: "Introduction to Cybersecurity — Cisco", area: "Security" },
  { name: "FoodSafe Level 1", area: "Certified" },
];

/* ------------------------------------------------------------------ *
 * Skills & languages
 * ------------------------------------------------------------------ */

export const languages = [
  { name: "Spanish", level: "Fluent / professional" },
  { name: "English", level: "Fluent / professional" },
  { name: "French", level: "A2 — currently learning" },
];

/* ------------------------------------------------------------------ *
 * Personal
 * ------------------------------------------------------------------ */

export type Hobby = {
  title: string;
  text: string;
  image: string;
  tint: "blue" | "pink" | "lilac" | "mint" | "cream" | "peach";
  /** Where it sits in the bento. */
  span: "tall" | "wide" | "square";
};

export const hobbySlides: Hobby[] = [
  {
    title: "distance running",
    text: "BMO Half Marathon finisher — now training for Ironman Victoria.",
    image: "/hobbies/running.jpg",
    tint: "peach",
    span: "tall",
  },
  {
    title: "crochet",
    text: "Small handmade things, mostly on the commute.",
    image: "/hobbies/crochet.jpg",
    tint: "cream",
    span: "wide",
  },
  {
    title: "hiking",
    text: "Trails, mountains, and quiet places.",
    image: "/hobbies/hiking.jpg",
    tint: "mint",
    span: "square",
  },
  {
    title: "flute",
    text: "New styles, and the SFU orchestra club.",
    image: "/hobbies/music.jpg",
    tint: "blue",
    span: "square",
  },
];

export const otherInterests = [
  "Cooking",
  "Reading",
  "Financial markets",
  "Coding side projects",
  "Technology & AI tools",
];

/* ------------------------------------------------------------------ *
 * Sudoku
 * ------------------------------------------------------------------ */

export const puzzleSolution = [
  5, 3, 4, 6, 7, 8, 9, 1, 2,
  6, 7, 2, 1, 9, 5, 3, 4, 8,
  1, 9, 8, 3, 4, 2, 5, 6, 7,
  8, 5, 9, 7, 6, 1, 4, 2, 3,
  4, 2, 6, 8, 5, 3, 7, 9, 1,
  7, 1, 3, 9, 2, 4, 8, 5, 6,
  9, 6, 1, 5, 3, 7, 2, 8, 4,
  2, 8, 7, 4, 1, 9, 6, 3, 5,
  3, 4, 5, 2, 8, 6, 1, 7, 9,
];

export const puzzleStart: (number | null)[] = [
  5, 3, null, null, 7, null, null, null, null,
  6, null, null, 1, 9, 5, null, null, null,
  null, 9, 8, null, null, null, null, 6, null,
  8, null, null, null, 6, null, null, null, 3,
  4, null, null, 8, null, 3, null, null, 1,
  7, null, null, null, 2, null, null, null, 6,
  null, 6, null, null, null, null, 2, 8, null,
  null, null, null, 4, 1, 9, null, null, 5,
  null, null, null, null, 8, null, null, 7, 9,
];
