"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TABS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "play", label: "Play" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const [active, setActive] = useState("about");
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape, and whenever the viewport grows past
  // the breakpoint where the full nav takes over.
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const wide = window.matchMedia("(min-width: 760px)");
    const onWiden = () => {
      if (wide.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWiden);
    return () => {
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWiden);
    };
  }, [open]);

  useEffect(() => {
    if (!onHome) return;

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
      { threshold: [0.12, 0.4, 0.7], rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    // Near the top no section sits in the observed band; pin the first tab.
    const onScroll = () => {
      if (window.scrollY < 260) setActive(TABS[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [onHome]);

  return (
    <nav className={`site-nav ${stuck || open ? "is-stuck" : ""}`} aria-label="Main">
      <Link href="/" className="nav-mark" onClick={() => setOpen(false)}>
        <span className="nav-mark-blossom" aria-hidden="true">
          ✿
        </span>
        <span className="nav-mark-text">AW</span>
      </Link>

      {onHome ? (
        <>
          <ul className="nav-links">
            {TABS.map((tab) => (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={active === tab.id ? "is-active" : undefined}
                  aria-current={active === tab.id ? "true" : undefined}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta">
            Contact
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`nav-toggle-bars ${open ? "is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div id="nav-panel" className={`nav-panel ${open ? "is-open" : ""}`} hidden={!open}>
            <ul>
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <a
                    href={`#${tab.id}`}
                    className={active === tab.id ? "is-active" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {tab.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="nav-panel-cta" onClick={() => setOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link href="/" className="nav-cta nav-back">
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>
      )}
    </nav>
  );
}
