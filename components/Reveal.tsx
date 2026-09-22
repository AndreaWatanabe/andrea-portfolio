"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in seconds, for sibling items revealing one after another. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

/**
 * Fades and lifts its children into view once they are scrolled to.
 * Visitors who prefer reduced motion are handled in CSS, which keeps
 * `.reveal` fully visible regardless of what the observer reports.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let done = false;

    function reveal() {
      if (done) return;
      done = true;
      setShown(true);
      stop();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) reveal();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    // A jump-scroll (End key, restored scroll position, a hash link) can move
    // past an element without the observer ever reporting it as intersecting,
    // which would leave the content stuck at opacity 0. This catches that.
    function onScroll() {
      if (!node) return;
      if (node.getBoundingClientRect().top < window.innerHeight * 0.92) reveal();
    }

    function stop() {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    }

    observer.observe(node);
    window.addEventListener("scroll", onScroll, { passive: true });

    return stop;
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
