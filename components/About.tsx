import Image from "next/image";
import Reveal from "./Reveal";
import { hasPhoto, hasResume, photoSrc, resumeSrc } from "@/lib/assets";
import { education, profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section about-intro">
      <div className="intro-grid">
        <Reveal className="intro-copy">
          <h1>
            hi, I&rsquo;m Andrea<span className="intro-bang">!!</span>
          </h1>

          <p className="intro-lead">
            I&rsquo;m an economics student who likes turning messy information into
            something clear and useful. I found my way here through spreadsheets that
            needed fixing, and ended up building dashboards, tools, and websites.
          </p>

          <ul className="intro-facts">
            <li>
              <span className="intro-icon" aria-hidden="true">
                📍
              </span>
              <span className="intro-fact-main">{profile.location}</span>
            </li>
            <li>
              <span className="intro-icon" aria-hidden="true">
                🎓
              </span>
              <span>
                <span className="intro-fact-main">
                  {education.degree}, {education.concentration.replace("Concentration in ", "")}
                </span>
                <small>{education.school}</small>
              </span>
            </li>
            <li>
              <span className="intro-icon" aria-hidden="true">
                🌸
              </span>
              <span className="intro-fact-main">
                Training for Ironman Victoria, crocheting the rest of the time
              </span>
            </li>
          </ul>

          <div className="intro-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="button button-ghost">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="button button-ghost">
              LinkedIn ↗
            </a>
            {hasResume && resumeSrc && (
              <a
                href={resumeSrc}
                download="Andrea-Watanabe-Resume.pdf"
                className="button button-primary"
              >
                Download my CV ↓
              </a>
            )}
          </div>
        </Reveal>

        <Reveal className="intro-photo-wrap" delay={0.08}>
          <div className="intro-photo">
            {hasPhoto && photoSrc ? (
              <Image
                src={photoSrc}
                alt={profile.name}
                fill
                sizes="(max-width: 900px) 90vw, 46vw"
                className="intro-photo-img"
              />
            ) : (
              <div className="intro-photo-placeholder">
                <span aria-hidden="true">✿</span>
                <p>
                  Drop a photo at <code>public/photo.jpg</code> and it lands here.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
