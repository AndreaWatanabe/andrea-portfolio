"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Monthly Financial Wrap",
    tag: "Winner — Best Framer Use",
    description:
      "A BMO-style financial dashboard concept that helps users understand monthly spending patterns in a clearer way. Prototype: https://authentic-sparrow-062361.framer.app/",
    size: "big",
    preview: "finance",
    tools: ["Framer", "Figma", "UX/UI"],
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
    description:
      "A digital guide for interns in the SAWP team.",
    size: "tall",
    preview: "sawp",
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
    tag: "Company Website | Currently building",
    description:
      "A business webpage designed for Tassen Corp to present the company, its services, and its role as a mediator/importer of raw materials for the plastics industry.",
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
    preview: "none",
    tools: ["Next.js", "JavaScript", "HTML", "CSS"],
    images: [],
  },
  {
    number: "05",
    title: "zipBoard AI Feedback Intelligence",
    tag: "Strategy Case Study",
    description:
      "An AI product strategy concept for clustering project feedback, detecting risks, and improving AEC review workflows. (BUS361 group project)",
    size: "medium",
    preview: "zipboard",
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
    preview: "none",
    tools: ["Figma", "Data Analysis", "Next.js"],
    images: [],
  },
];
const experiences = [
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
      "Planned and coordinated the club’s biggest fundraiser of the year, managed event logistics, and supported outreach efforts, including securing a Celsius partnership.",
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

const hobbySlides = [
  {
    title: "Running",
    text: "BMO 21km (2026) & GREAT TRECK 21KM (2025).",
    image: "/hobbies/running.jpg",
  },
  {
    title: "Crochet",
    text: "Making small things by hand and enjoying my commute time",
    image: "/hobbies/crochet.jpg",
  },
  {
    title: "Hiking",
    text: "Exploring trails, mountains, and quiet places in nature.",
    image: "/hobbies/hiking.jpg",
  },
  {
    title: "Music",
    text: "Trying new styles, and playing @ SFU orchestra club",
    image: "/hobbies/music.jpg",
  },
];

const puzzleSolution = [
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

const puzzleStart = [
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

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [sudokuValues, setSudokuValues] = useState<(number | null)[]>(puzzleStart);
  const [sudokuMessage, setSudokuMessage] = useState("");

  function updateSudokuCell(index: number, value: string) {
    if (puzzleStart[index] !== null) return;

    const numberValue = value === "" ? null : Number(value);

    if (numberValue !== null && (numberValue < 1 || numberValue > 9)) return;

    const nextValues = [...sudokuValues];
    nextValues[index] = numberValue;
    setSudokuValues(nextValues);
    setSudokuMessage("");
  }

  function checkSudoku() {
    const hasEmptyCells = sudokuValues.some((value) => value === null);

    if (hasEmptyCells) {
      setSudokuMessage("Not done yet — keep going.");
      return;
    }

    const isCorrect = sudokuValues.every(
      (value, index) => value === puzzleSolution[index]
    );

    setSudokuMessage(isCorrect ? "You solved it ✦" : "Something is off — try again.");
  }

  function resetSudoku() {
    setSudokuValues(puzzleStart);
    setSudokuMessage("");
  }

  function nextSlide() {
    setSlide((current) => (current + 1) % hobbySlides.length);
  }

  function previousSlide() {
    setSlide((current) =>
      current === 0 ? hobbySlides.length - 1 : current - 1
    );
  }

  return (
    <main className="page">
      <section className="hero">
        <div className="small-mark">AW</div>

        <h1>Andrea Watanabe</h1>

        <p className="hero-description">
          Economics student at SFU designing useful tools at the intersection of data,
          business, UX, and technology.
          Currently exploring product strategy, AI, and interactive web projects.
          <span className="status-dot"></span>
        </p>

        <nav className="tab-nav">
          <a href="#work" className="active-tab">Work</a>
          <a href="#play">Play</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
      </section>

      <section id="work" className="section compact-section">
        <div className="section-title">
          <p>selected projects</p>
          <h2>Projects</h2>
        </div>

        <div className="project-bento">
          {projects.map((project) => (
            <article className={`project-card ${project.size}`} key={project.title}>
              <div className="project-card-top">
                <span>{project.number}</span>
                <p>{project.tag}</p>
              </div>

              {project.images.length > 0 && (
                <div className="project-preview-slider">
                  <div
                    className="project-track"
                    style={{
                      width: `${project.images.length * 100}%`,
                      animation:
                        project.images.length > 1 ? "slidePreview 10s infinite" : "none",
                    }}
                  >
                    {project.images.map((image, index) => (
                      <div
                        className="project-photo"
                        key={image}
                        style={{ width: `${100 / project.images.length}%` }}
                      >
                        <img src={image} alt={`${project.title} preview ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-card-bottom">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="play" className="section compact-section">
        <div className="section-title">
          <p>playground</p>
          <h2>Mini experiments</h2>
        </div>

        <div className="playground-layout">
          <article className="sudoku-card">
            <div className="sudoku-top">
              <div>
                <h3>Sudoku</h3>
                <p>A tiny playable logic corner.</p>
              </div>

              <div className="sudoku-actions">
                <button onClick={checkSudoku}>check</button>
                <button onClick={resetSudoku}>reset</button>
              </div>
            </div>

            <div className="sudoku-grid">
              {sudokuValues.map((value, index) => (
                <input
                  key={index}
                  value={value ?? ""}
                  disabled={puzzleStart[index] !== null}
                  maxLength={1}
                  onChange={(event) =>
                    updateSudokuCell(index, event.target.value)
                  }
                />
              ))}
            </div>

            {sudokuMessage && <p className="sudoku-message">{sudokuMessage}</p>}
          </article>

          <article className="hobby-card">
            <div className="speech">
              Free time / My time
            </div>

            <div className="hobby-content">
              <button onClick={previousSlide}>‹</button>

              <div className="hobby-polaroid">
                <div className="hobby-img">
                  <img src={hobbySlides[slide].image} alt={hobbySlides[slide].title} />
                </div>                
                <h3>{hobbySlides[slide].title}</h3>
                <p>{hobbySlides[slide].text}</p>
              </div>

              <button onClick={nextSlide}>›</button>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" className="section compact-section">
        <div className="section-title">
          <p>experience</p>
          <h2>Roles that shaped my skills</h2>
        </div>

        <div className="experience-clean-grid">
          {experiences.map((experience) => (
            <article className="experience-clean-card" key={experience.role}>
              <div>
                <div className="experience-top">
                  <p className="experience-place">{experience.place}</p>
                  <span>{experience.date}</span>
                </div>

                <h3>{experience.role}</h3>
                <p className="experience-description">{experience.description}</p>
              </div>

              <div className="skills">
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-title">
          <p>about me</p>
          <h2>CV style</h2>
        </div>

        <div className="about-grid">
          <article className="about-main">
            <div>
              <div className="about-label">Andrea Watanabe</div>

              <h3>Studying economics, building projects, and learning by making.</h3>

              <p>
                I’m an Economics student at Simon Fraser University with a concentration
                in Data Analysis. I’m interested in the
                intersection of business, data, technology, and design because I like
                turning messy information into something clear, useful, and easy to use.
              </p>

              <p>
                Through university, internships, volunteer work, and personal projects,
                I’ve been developing skills in product thinking, data analysis,
                communication, event planning, and digital tools.
              </p>
            </div>

            <div className="about-highlights">
              <span>Economics @ SFU</span>
              <span>Data Analysis concentration</span>
              <span>Product + data curious</span>
              <span>UX/UI</span>
            </div>
          </article>

          <div className="about-side">
            <article className="about-card soft-blue">
              <p className="card-kicker">toolkit</p>
              <h3>Skills</h3>

              <div className="about-pill-list">
                <span>Excel</span>
                <span>Data Analysis</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Figma</span>
                <span>Framer</span>
                <span>Next.js</span>
                <span>Microsoft Ecosystem</span>
              </div>
            </article>

            <article className="about-card soft-purple">
              <p className="card-kicker">communication</p>
              <h3>Languages</h3>

              <div className="language-list">
                <div>
                  <span>Spanish</span>
                  <small>Native</small>
                </div>

                <div>
                  <span>English</span>
                  <small>Professional / academic</small>
                </div>

                <div>
                  <span>French</span>
                  <small>A2 — currently learning</small>
                </div>
              </div>
            </article>

            <article className="about-card achievements-card">
              <div className="achievement-header">
                <div>
                  <p className="card-kicker">learning</p>
                  <h3>Certificates & courses</h3>
                </div>
              </div>

              <div className="achievement-list">
                <div>
                  <strong>Bloomberg Market Concepts</strong>
                  <span>Economics</span>
                </div>

                <div>
                  <strong>CFI - LinkedIn Learning</strong>
                  <span>Finance</span>
                </div>

                <div>
                  <strong>Excel for Data Analysis</strong>
                  <span>data</span>
                </div>

                <div>
                  <strong>FoodSafe Level 1</strong>
                  <span>certified</span>
                </div>

                <div>
                  <strong>Cisco Introduction to Cybersecurity</strong>
                  <span>cybersecurity</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-footer">
        <div className="contact-copy">
          <p className="contact-kicker">contact</p>
          <h2>Let’s connect.</h2>
          <p>
            Open to co-op opportunities, product/data projects, and conversations about
            design, business, and technology.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:sakurawt32@gmail.com" className="email-link">
            sakurawt32@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/andreawatanabe"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>
    </main>
  );
}