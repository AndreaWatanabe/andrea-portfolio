"use client";

import Link from "next/link";
import { nowItems, profile } from "@/data/content";

export default function Landing({ resumeHref }: { resumeHref: string | null }) {
  return (
    <section className="landing">
      <p className="landing-greeting">Hey — I&rsquo;m</p>

      <h1 className="landing-name">
        <span className="sr-only">{profile.name}</span>
        <span aria-hidden="true" className="landing-name-letters">
          {profile.name.split("").map((character, index) =>
            character === " " ? (
              <span key={index} className="hero-space">
                &nbsp;
              </span>
            ) : (
              <span
                key={index}
                className="hero-letter"
                style={{ animationDelay: `${0.2 + index * 0.03}s` }}
              >
                {character}
              </span>
            )
          )}
        </span>
      </h1>

      <p className="landing-tagline">{profile.tagline}</p>

      <div className="landing-links">
        <Link href="/projects" className="button button-primary">
          See my projects
        </Link>
        <Link href="/experience" className="button button-ghost">
          Experience
        </Link>
        <Link href="/about" className="button button-ghost">
          About me
        </Link>
      </div>

      <div className="landing-socials">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        {resumeHref && (
          <a href={resumeHref} download="Andrea-Watanabe-Resume.pdf">
            Download CV ↓
          </a>
        )}
        <a href={`mailto:${profile.email}`}>Email ↗</a>
      </div>

      <div className="landing-meta">
        <span className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          Open to work
        </span>
        <span className="hero-place">{profile.location}</span>
        <span className="hero-place">Economics @ SFU</span>
      </div>

      <ul className="landing-now">
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
    </section>
  );
}
