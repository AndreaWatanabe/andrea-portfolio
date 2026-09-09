"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { projects, type Project } from "@/data/content";

function ProjectRow({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<number | null>(null);
  const count = project.images.length;

  const advance = useCallback(() => {
    setIndex((current) => (current + 1) % count);
  }, [count]);

  useEffect(() => {
    if (!hovered || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    timerRef.current = window.setInterval(advance, 1600);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [hovered, count, advance]);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="feature-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="feature-copy">
        <h3>{project.blurb}</h3>

        <p className="feature-meta">
          <span className="feature-org">{project.title}</span>
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool} className="tag">
              {tool}
            </span>
          ))}
        </p>

        <span className="feature-more">
          Read the case <span aria-hidden="true">→</span>
        </span>
      </div>

      <div className={`feature-panel tint-${project.tint} ${count === 0 ? "is-callout" : ""}`}>
        {count > 0 ? (
          project.images.map((image, imageIndex) => (
            <Image
              key={image}
              src={image}
              alt={`${project.title} preview ${imageIndex + 1}`}
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
              className={`feature-shot ${imageIndex === index ? "is-active" : ""}`}
            />
          ))
        ) : (
          /* No screenshot yet: carry the result instead of empty space. */
          <div className="callout">
            <span className="feature-mark" aria-hidden="true">
              {project.number}
            </span>
            <p>{project.outcome ?? project.highlights[0]}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="feature-stack">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={Math.min(index, 3) * 0.06}>
          <ProjectRow project={project} />
        </Reveal>
      ))}
    </div>
  );
}
