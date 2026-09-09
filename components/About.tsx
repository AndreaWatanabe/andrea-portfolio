import Reveal from "./Reveal";
import { certificates, languages, skills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal className="section-title">
        <p className="section-kicker">
          <span aria-hidden="true">✿</span> about me
        </p>
        <h2>Studying economics, building things, learning by making</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-main-wrap">
          <article className="about-main">
            <div>
              <div className="about-label">Andrea Watanabe</div>

              <p>
                I&rsquo;m an Economics student at Simon Fraser University with a
                concentration in Data Analysis. I&rsquo;m interested in the intersection
                of business, data, technology, and design, because I like turning messy
                information into something clear, useful, and easy to use.
              </p>

              <p>
                Through university, internships, volunteer work, and personal projects,
                I&rsquo;ve been developing skills in product thinking, data analysis,
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
        </Reveal>

        <div className="about-side">
          <Reveal delay={0.08}>
            <article className="about-card soft-pink">
              <p className="card-kicker">toolkit</p>
              <h3>Skills</h3>

              <div className="about-pill-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.14}>
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

          <Reveal delay={0.2}>
            <article className="about-card soft-cream">
              <p className="card-kicker">learning</p>
              <h3>Certificates &amp; courses</h3>

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
