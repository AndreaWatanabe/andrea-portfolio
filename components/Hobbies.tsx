import Image from "next/image";
import Reveal from "./Reveal";
import { getImageSize } from "@/lib/imageSize";
import { hobbySlides, otherInterests } from "@/data/content";

/**
 * A wall of photos. Each one shows at its own proportions by default —
 * heights come from the file's real dimensions, so nothing is cropped —
 * unless it carries an explicit `crop`, which trades the full frame for a
 * tighter one.
 */
export default function Hobbies() {
  return (
    <section id="hobbies" className="section hobbies-section">
      <Reveal className="hobbies-head">
        <h2>outside of work, I also enjoy&hellip;</h2>
      </Reveal>

      <div className="hobby-wall">
        {hobbySlides.map((hobby, index) => {
          const { width, height } = getImageSize(hobby.image);
          const sizes = "(max-width: 700px) 92vw, 46vw";

          return (
            <Reveal
              key={hobby.title}
              delay={Math.min(index, 3) * 0.06}
              className="hobby-tile"
            >
              <figure
                className={`hobby-frame tint-${hobby.tint} ${hobby.crop ? "is-cropped" : ""}`}
                style={hobby.crop ? { aspectRatio: hobby.crop.aspect } : undefined}
              >
                {hobby.crop ? (
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    sizes={sizes}
                    style={{ objectPosition: hobby.crop.focus ?? "50% 50%" }}
                  />
                ) : (
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    width={width}
                    height={height}
                    sizes={sizes}
                  />
                )}

                <figcaption className="hobby-pill">{hobby.title}</figcaption>
                <span className="hobby-note">{hobby.text}</span>
              </figure>
            </Reveal>
          );
        })}
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
