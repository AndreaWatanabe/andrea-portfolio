"use client";

import { useEffect, useState } from "react";
import { burstPetals } from "./PetalField";

const NAME = "Andrea Watanabe";

const TABS = [
  { id: "work", label: "Work" },
  { id: "play", label: "Play" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Hero() {
  const [active, setActive] = useState("work");
  const [shakes, setShakes] = useState(0);

  // Highlight the tab for whichever section is currently in view.
  useEffect(() => {
    const sections = TABS.map((tab) => document.getElementById(tab.id)).filter(
      (node): node is HTMLElement => node !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.15, 0.4, 0.7], rootMargin: "-18% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    // Near the top of the page no section sits inside the observed band, so
    // pin the first tab rather than leaving whatever was last in view.
    const onScroll = () => {
      if (window.scrollY < 220) setActive(TABS[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function shakeTree() {
    setShakes((count) => count + 1);
    burstPetals(26);
  }

  return (
    <header className="hero">
      <div className="hero-mark" aria-hidden="true">
        <span className="hero-mark-blossom">✿</span>
        <span className="hero-mark-text">AW</span>
      </div>

      <h1 className="hero-name">
        <span className="sr-only">{NAME}</span>
        <span aria-hidden="true" className="hero-name-letters">
          {NAME.split("").map((character, index) =>
            character === " " ? (
              <span key={index} className="hero-space">
                &nbsp;
              </span>
            ) : (
              <span
                key={index}
                className="hero-letter"
                style={{ animationDelay: `${0.24 + index * 0.035}s` }}
              >
                {character}
              </span>
            )
          )}
        </span>
      </h1>

      <p className="hero-description">
        Economics student at SFU designing useful tools at the intersection of data,
        business, UX, and technology. Currently exploring product strategy, AI, and
        interactive web projects.
      </p>

      <div className="hero-actions">
        <span className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          Open to co-op roles
        </span>

        <button type="button" className="shake-button" onClick={shakeTree}>
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

      <nav className="tab-nav" aria-label="Sections">
        {TABS.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={active === tab.id ? "active-tab" : undefined}
            aria-current={active === tab.id ? "true" : undefined}
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
