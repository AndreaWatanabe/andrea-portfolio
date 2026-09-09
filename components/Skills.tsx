import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { languages, skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle
        kicker="toolkit"
        title="Tools I work with"
        subtitle="Grouped by what I actually use them for."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.06}>
            <article className="skill-group">
              <h3>{group.label}</h3>
              <div className="about-pill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.24} className="skills-wide">
          <article className="skill-group language-card">
            <h3>Languages</h3>
            <div className="language-list">
              {languages.map((language) => (
                <div key={language.name}>
                  <span>{language.name}</span>
                  <small>{language.level}</small>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
