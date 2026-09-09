import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle
        kicker="experience"
        title="Where I've worked"
        subtitle="Cases, events, and spreadsheets — and what came out of each."
      />

      <div className="feature-stack">
        {experiences.map((experience, index) => (
          <Reveal
            key={experience.role + experience.place}
            delay={Math.min(index, 3) * 0.06}
            as="article"
          >
            <article className="feature-row is-static">
              <div className="feature-copy">
                <h3>{experience.role}</h3>

                <p className="feature-meta">
                  <span className="feature-org">{experience.place}</span>
                  <span className="tag">{experience.date}</span>
                  {experience.location && <span className="tag">{experience.location}</span>}
                </p>

                <ul className="experience-bullets">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="skills">
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className={`feature-panel is-callout tint-${experience.tint}`}>
                <div className="callout">
                  {experience.highlight.value && (
                    <strong className="callout-value">{experience.highlight.value}</strong>
                  )}
                  <p>{experience.highlight.label}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
