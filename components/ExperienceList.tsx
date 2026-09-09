import Link from "next/link";
import Reveal from "./Reveal";
import { experiences, sectors } from "@/data/content";

/** Compact summary of the work history; the detail lives on /experience. */
export default function ExperienceList() {
  return (
    <section className="section exp-list-section">
      <Reveal className="exp-list-head">
        <h2>experience</h2>
      </Reveal>

      <Reveal className="exp-list-wrap" delay={0.06}>
        <ul className="exp-list">
          {experiences.map((experience) => (
            <li key={experience.role + experience.place}>
              <span className="exp-list-role">
                <strong>{experience.role}</strong>, {experience.place}
              </span>
              <span className="exp-list-years">{experience.years}</span>
            </li>
          ))}
        </ul>

        <div className="exp-sectors">
          {sectors.map((sector) => (
            <span key={sector}>{sector}</span>
          ))}
        </div>

        <Link href="/experience" className="button button-ghost exp-list-cta">
          What I actually did ↗
        </Link>
      </Reveal>
    </section>
  );
}
