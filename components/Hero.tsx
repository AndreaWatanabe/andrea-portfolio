"use client";

import { useState } from "react";
import { burstPetals } from "./PetalField";
import { profile } from "@/data/content";

export default function Hero() {
  const [shakes, setShakes] = useState(0);

  return (
    <header className="hero">
      <p className="hero-greeting">Hey — I&rsquo;m</p>

      <h1 className="hero-name">
        <span className="sr-only">{profile.name}</span>
        <span aria-hidden="true" className="hero-name-letters">
          {profile.name.split("").map((character, index) =>
            character === " " ? (
              <span key={index} className="hero-space">
                &nbsp;
              </span>
            ) : (
              <span
                key={index}
                className="hero-letter"
                style={{ animationDelay: `${0.2 + index * 0.032}s` }}
              >
                {character}
              </span>
            )
          )}
        </span>
      </h1>

      <p className="hero-description">{profile.tagline}</p>

      <div className="hero-actions">
        <a href="#contact" className="button button-primary">
          Get in touch
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-ghost"
        >
          LinkedIn ↗
        </a>
        <button
          type="button"
          className="button button-ghost shake-button"
          onClick={() => {
            setShakes((count) => count + 1);
            burstPetals(26);
          }}
        >
          <span className="shake-button-icon" aria-hidden="true">
            🌸
          </span>
          {shakes === 0 ? "Shake the tree" : "Again!"}
          {shakes > 0 && (
            <span className="shake-count" aria-hidden="true">
              {shakes}
            </span>
          )}
        </button>
      </div>

      <div className="hero-meta">
        <span className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          Open to co-op roles
        </span>
        <span className="hero-place">{profile.location}</span>
        <span className="hero-place">Economics @ SFU</span>
      </div>
    </header>
  );
}
