import Image from "next/image";
import Reveal from "./Reveal";
import { hobbySlides, otherInterests } from "@/data/content";

export default function Hobbies() {
  return (
    <section id="hobbies" className="section hobbies-section">
      <Reveal className="hobbies-head">
        <h2>outside of work, I also enjoy&hellip;</h2>
      </Reveal>

      <div className="hobby-bento">
        {hobbySlides.map((hobby, index) => (
          <Reveal
            key={hobby.title}
            delay={Math.min(index, 3) * 0.06}
            className={`hobby-tile span-${hobby.span}`}
          >
            <figure className={`hobby-frame tint-${hobby.tint}`}>
              <Image
                src={hobby.image}
                alt={hobby.title}
                fill
                sizes="(max-width: 700px) 92vw, (max-width: 1100px) 48vw, 40vw"
              />
              <figcaption className="hobby-pill">{hobby.title}</figcaption>
              <span className="hobby-note">{hobby.text}</span>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="interest-strip" delay={0.2}>
        <p className="card-kicker">and also</p>
        <div className="interest-chips">
          {otherInterests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
