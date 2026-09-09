"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { projects, type Project } from "@/data/content";

function ProjectCard({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<number | null>(null);
  const count = project.images.length;

  const advance = useCallback(() => {
    setIndex((current) => (current + 1) % count);
  }, [count]);

  // Previews cycle while the card is hovered or focused, not constantly.
  useEffect(() => {
    if (!hovered || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    timerRef.current = window.setInterval(advance, 1500);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [hovered, count, advance]);

  const body = (
    <>
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <p className="project-tag">{project.tag}</p>
      </div>

      {count > 0 ? (
        <div className="project-preview">
          {project.images.map((image, imageIndex) => (
            <Image
              key={image}
              src={image}
              alt={`${project.title} preview ${imageIndex + 1}`}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className={`project-photo ${imageIndex === index ? "is-active" : ""}`}
            />
          ))}

          {count > 1 && (
            <div className="project-dots">
              {project.images.map((image, dotIndex) => (
                <button
                  key={image}
                  type="button"
                  className={dotIndex === index ? "is-active" : undefined}
                  aria-label={`Show preview ${dotIndex + 1} of ${project.title}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setIndex(dotIndex);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="project-preview project-preview-empty" aria-hidden="true">
          <span>✿</span>
        </div>
      )}

      <div className="project-card-bottom">
        <h3>
          {project.title}
          {project.href && <span className="project-arrow" aria-hidden="true">↗</span>}
        </h3>
        <p>{project.description}</p>

        <div className="project-tools">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </>
  );

  const shared = {
    className: "project-card",
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false),
  };

  if (project.href) {
    return (
      <a
        {...shared}
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — opens the live prototype in a new tab`}
      >
        {body}
      </a>
    );
  }

  return <article {...shared}>{body}</article>;
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <Reveal className="section-title">
        <p className="section-kicker">
          <span aria-hidden="true">✿</span> selected projects
        </p>
        <h2>Things I designed, built, and shipped</h2>
      </Reveal>

      <div className="project-bento">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.07}
            className={`bento-item ${project.size}`}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
