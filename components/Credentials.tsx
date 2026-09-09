import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { awards, certificates, education, languages } from "@/data/content";

export default function Credentials() {
  return (
    <section id="education" className="section">
      <SectionTitle
        kicker="education & credentials"
        title="What I've studied and won"
      />

      <div className="credentials-grid">
        <Reveal className="credentials-main">
          <article className="about-card soft-pink education-card">
            <p className="card-kicker">education</p>
            <h3>{education.school}</h3>
            <p className="education-degree">{education.degree}</p>
            <p className="education-meta">{education.faculty}</p>
            <p className="education-meta">{education.concentration}</p>
            <p className="education-grad">{education.graduation}</p>

            <p className="card-kicker education-course-label">relevant coursework</p>
            <ul className="coursework">
              {education.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal className="credentials-languages" delay={0.06}>
          <article className="about-card soft-plum">
            <p className="card-kicker">communication</p>
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

        <div className="credentials-side">
          <Reveal delay={0.08}>
            <article className="about-card soft-plum">
              <p className="card-kicker">recognition</p>
              <h3>Awards &amp; competitions</h3>
              <div className="achievement-list">
                {awards.map((award) => (
                  <div key={award.name}>
                    <strong>{award.name}</strong>
                    <span>{award.detail}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.14}>
            <article className="about-card soft-cream">
              <p className="card-kicker">learning</p>
              <h3>Certifications &amp; training</h3>
              <div className="achievement-list">
                {certificates.map((certificate) => (
                  <div key={certificate.name}>
                    <strong>{certificate.name}</strong>
                    <span>{certificate.area}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
