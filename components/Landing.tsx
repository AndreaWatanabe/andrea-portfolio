"use client";

import Link from "next/link";
import CrochetSakura from "./CrochetSakura";
import { profile } from "@/data/content";

export default function Landing({ hasResume, resumeHref }: {
  hasResume: boolean;
  resumeHref: string | null;
}) {
  return (
    <section className="landing">
      <div className="landing-flower">
        <CrochetSakura />
      </div>

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
                style={{ animationDelay: `${1.15 + index * 0.03}s` }}
              >
                {character}
              </span>
            )
          )}
        </span>
      </h1>

      <p className="landing-tagline">{profile.tagline}</p>

      <div className="landing-links">
        <Link href="/work" className="button button-primary">
          See my work
        </Link>
        <Link href="/about" className="button button-ghost">
          About me
        </Link>
        <Link href="/play" className="button button-ghost">
          Play
        </Link>
      </div>

      <div className="landing-socials">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        {hasResume && resumeHref && (
          <a href={resumeHref} target="_blank" rel="noopener noreferrer">
            Résumé ↗
          </a>
        )}
        <a href={`mailto:${profile.email}`}>Email ↗</a>
      </div>

      <div className="landing-meta">
        <span className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          Open to co-op roles
        </span>
        <span className="hero-place">{profile.location}</span>
      </div>
    </section>
  );
}
