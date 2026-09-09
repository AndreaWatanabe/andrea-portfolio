import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { alsoWorked, experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle
        kicker="experience"
        title="Where I've worked"
        subtitle="Cases, events, spreadsheets, and the occasional kitchen."
      />

      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <Reveal
            key={experience.role + experience.place}
            delay={index * 0.06}
            className="experience-item"
            as="article"
          >
            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="experience-place">{experience.place}</p>
                  {experience.location && (
                    <p className="experience-location">
                      <span aria-hidden="true">◍</span> {experience.location}
                    </p>
                  )}
                </div>
                <span className="experience-date">{experience.date}</span>
              </div>

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
          </Reveal>
        ))}
      </div>

      <Reveal className="also-worked" delay={0.1}>
        <p className="card-kicker">also</p>
        <div className="also-list">
          {alsoWorked.map((job) => (
            <div key={job.place}>
              <div className="also-head">
                <strong>{job.role}</strong>
                <span>{job.date}</span>
              </div>
              <p className="also-place">{job.place}</p>
              <p className="also-note">{job.note}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
