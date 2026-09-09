import Reveal from "./Reveal";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="contact-footer">
      <Reveal className="contact-inner">
        <div className="contact-copy">
          <p className="card-kicker">contact</p>
          <h2>Let&rsquo;s connect.</h2>
          <p>
            Open to co-op opportunities, product and data projects, and conversations
            about design, business, and technology.
          </p>
        </div>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="button button-primary">
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-ghost"
          >
            LinkedIn ↗
          </a>
        </div>
      </Reveal>

      <p className="colophon">
        Built with Next.js · <span aria-hidden="true">✿</span>{" "}
        {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
