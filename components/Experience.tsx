import Reveal from "./Reveal";
import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal className="section-title">
        <p className="section-kicker">
          <span aria-hidden="true">✿</span> experience
        </p>
        <h2>Roles that shaped my skills</h2>
      </Reveal>

      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <Reveal
            key={experience.role}
            delay={index * 0.08}
            className="experience-item"
            as="article"
          >
            <div className="experience-card">
              <div className="experience-top">
                <p className="experience-place">{experience.place}</p>
                <span className="experience-date">{experience.date}</span>
              </div>

              <h3>{experience.role}</h3>
              <p className="experience-description">{experience.description}</p>

              <div className="skills">
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
