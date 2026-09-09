export type Project = {
  number: string;
  title: string;
  tag: string;
  description: string;
  size: "big" | "tall" | "medium" | "small";
  tools: string[];
  images: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Monthly Financial Wrap",
    tag: "Winner — Best Framer Use",
    description:
      "A BMO-style financial dashboard concept that helps users understand monthly spending patterns in a clearer way.",
    size: "big",
    tools: ["Framer", "Figma", "UX/UI"],
    href: "https://authentic-sparrow-062361.framer.app/",
    images: [
      "/project-previews/financial-01.png",
      "/project-previews/financial-02.png",
      "/project-previews/financial-03.png",
    ],
  },
  {
    number: "02",
    title: "SAWP Internship Guide",
    tag: "Currently Building",
    description: "A digital guide for interns in the SAWP team.",
    size: "tall",
    tools: ["JavaScript", "HTML", "CSS", "Figma"],
    images: [
      "/project-previews/sawp-01.png",
      "/project-previews/sawp-02.png",
      "/project-previews/sawp-03.png",
    ],
  },
  {
    number: "03",
    title: "Tassen Corp Website",
    tag: "Company Website · In progress",
    description:
      "A business webpage designed for Tassen Corp to present the company, its services, and its role as a mediator and importer of raw materials for the plastics industry.",
    size: "medium",
    tools: ["HTML", "CSS", "JavaScript", "Figma", "VS Code"],
    images: [
      "/project-previews/tassen-01.png",
      "/project-previews/tassen-02.png",
      "/project-previews/tassen-03.png",
    ],
  },
  {
    number: "04",
    title: "This Portfolio",
    tag: "Next.js",
    description:
      "A personal portfolio built with Next.js to combine my projects, experiments, and professional growth.",
    size: "small",
    tools: ["Next.js", "TypeScript", "CSS"],
    images: [],
  },
  {
    number: "05",
    title: "zipBoard AI Feedback Intelligence",
    tag: "Strategy Case Study",
    description:
      "An AI product strategy concept for clustering project feedback, detecting risks, and improving AEC review workflows. (BUS361 group project)",
    size: "medium",
    tools: ["PowerPoint", "AI Strategy", "Product Strategy", "Research"],
    images: [
      "/project-previews/zipboard-01.png",
      "/project-previews/zipboard-02.png",
      "/project-previews/zipboard-03.png",
    ],
  },
  {
    number: "06",
    title: "Budget With Me",
    tag: "Future Project",
    description:
      "A playful budgeting tool idea for students who want a visual and friendly way to manage money.",
    size: "small",
    tools: ["Figma", "Data Analysis", "Next.js"],
    images: [],
  },
];

export type Experience = {
  date: string;
  role: string;
  place: string;
  description: string;
  skills: string[];
};

export const experiences: Experience[] = [
  {
    date: "Present",
    role: "SAWP Intern",
    place: "Consulate General of Mexico in Vancouver",
    description:
      "Supporting protection and mobility-related case handling while improving internal Excel files, working within the Microsoft environment, and creating marketing posts in Figma.",
    skills: [
      "Case handling",
      "Protection cases",
      "Mobility issues",
      "Excel improvement",
      "Microsoft environment",
      "Figma posts",
    ],
  },
  {
    date: "Sep 2025 – Apr 2026",
    role: "Logistics Director",
    place: "UNICEF SFU",
    description:
      "Planned and coordinated the club's biggest fundraiser of the year, managed event logistics, and supported outreach efforts, including securing a Celsius partnership.",
    skills: [
      "Event logistics",
      "Fundraising",
      "Partnership outreach",
      "Celsius partnership",
      "Team coordination",
      "Planning",
    ],
  },
  {
    date: "Oct 2024 – Apr 2025",
    role: "Project Manager & Event Coordinator",
    place: "IterateUX",
    description:
      "Managed monthly UX events with different speakers, supported event planning, coordinated logistics, and helped organize design-focused community experiences.",
    skills: [
      "Project management",
      "Event coordination",
      "Speaker coordination",
      "UX events",
      "Planning",
      "Communication",
    ],
  },
  {
    date: "Jan 2026 – Apr 2026",
    role: "Product Strategy & Finance",
    place: "zipBoard AI Feedback Intelligence",
    description:
      "Worked on the financial side of the project, supported the presentation, and contributed to the AI product strategy concept focused on feedback clustering and workflow improvement.",
    skills: [
      "Financial analysis",
      "Presentation design",
      "Product strategy",
      "AI use cases",
      "Competitor analysis",
      "MVP scoping",
    ],
  },
];

export type HobbySlide = {
  title: string;
  text: string;
  image: string;
};

export const hobbySlides: HobbySlide[] = [
  {
    title: "Running",
    text: "BMO 21km (2026) & Great Trek 21km (2025).",
    image: "/hobbies/running.jpg",
  },
  {
    title: "Crochet",
    text: "Making small things by hand and enjoying my commute time.",
    image: "/hobbies/crochet.jpg",
  },
  {
    title: "Hiking",
    text: "Exploring trails, mountains, and quiet places in nature.",
    image: "/hobbies/hiking.jpg",
  },
  {
    title: "Music",
    text: "Trying new styles, and playing @ SFU orchestra club.",
    image: "/hobbies/music.jpg",
  },
];

export const skills = [
  "Excel",
  "Data Analysis",
  "HTML",
  "CSS",
  "JavaScript",
  "Figma",
  "Framer",
  "Next.js",
  "Microsoft Ecosystem",
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Professional / academic" },
  { name: "French", level: "A2 — currently learning" },
];

export const certificates = [
  { name: "Bloomberg Market Concepts", area: "Economics" },
  { name: "CFI — LinkedIn Learning", area: "Finance" },
  { name: "Excel for Data Analysis", area: "Data" },
  { name: "FoodSafe Level 1", area: "Certified" },
  { name: "Cisco Introduction to Cybersecurity", area: "Cybersecurity" },
];

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
