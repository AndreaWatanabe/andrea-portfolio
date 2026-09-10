"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const PAGES = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/play", label: "Play" },
];

export default function SiteNav({ resumeHref }: { resumeHref: string | null }) {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const wide = window.matchMedia("(min-width: 860px)");
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

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);


  return (
    <nav className={`site-nav ${stuck || open ? "is-stuck" : ""}`} aria-label="Main">
      <Link href="/" className="nav-mark">
        <span className="nav-mark-blossom" aria-hidden="true">
          ✿
        </span>
        <span className="nav-mark-text">AW</span>
      </Link>

      <ul className="nav-links">
        {PAGES.map((page) => (
          <li key={page.href}>
            <Link
              href={page.href}
              className={isActive(page.href) ? "is-active" : undefined}
              aria-current={isActive(page.href) ? "page" : undefined}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-side">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon"
          aria-label="GitHub profile"
          title="GitHub"
        >
          <svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true">
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
            />
          </svg>
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true">
            <path
              fill="currentColor"
              d="M0 1.79C0 .8.83 0 1.85 0h12.3C15.17 0 16 .8 16 1.79v12.42c0 .99-.83 1.79-1.85 1.79H1.85A1.82 1.82 0 0 1 0 14.21V1.79Zm4.94 12.2V6.17H2.4v7.82h2.54Zm-1.27-8.9c.89 0 1.44-.58 1.44-1.31-.02-.75-.55-1.31-1.42-1.31-.87 0-1.44.56-1.44 1.31 0 .73.55 1.31 1.4 1.31h.02Zm5.24 8.9V9.63c0-.23.02-.46.09-.62.18-.46.6-.93 1.31-.93.92 0 1.29.7 1.29 1.73v4.18h2.54V9.51c0-2.35-1.25-3.44-2.93-3.44-1.35 0-1.96.74-2.3 1.27v-1.1H6.37c.03.72 0 7.82 0 7.82h2.54Z"
            />
          </svg>
        </a>

        {resumeHref && (
          <a
            href={resumeHref}
            download="Andrea-Watanabe-Resume.pdf"
            className="nav-cta nav-cta-ghost"
          >
            CV ↓
          </a>
        )}

        <a href={`mailto:${profile.email}`} className="nav-cta nav-contact">
          Contact
        </a>
      </div>

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
          {PAGES.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className={isActive(page.href) ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                {page.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </li>
          {resumeHref && (
            <li>
              <a href={resumeHref} download="Andrea-Watanabe-Resume.pdf">
                Download CV ↓
              </a>
            </li>
          )}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="nav-panel-cta"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
