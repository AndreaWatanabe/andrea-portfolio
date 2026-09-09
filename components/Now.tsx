import Reveal from "./Reveal";
import { nowItems } from "@/data/content";

export default function Now() {
  return (
    <section className="now-section" aria-label="What I'm doing now">
      <Reveal className="now-card">
        <div className="now-head">
          <p className="card-kicker">right now</p>
          <h2>Currently</h2>
        </div>

        <ul className="now-list">
          {nowItems.map((item) => (
            <li key={item.title}>
              <span className="now-icon" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
