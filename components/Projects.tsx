"use client";

import Image from "next/image";
import Link from "next/link";
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

  useEffect(() => {
    if (!hovered || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    timerRef.current = window.setInterval(advance, 1500);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [hovered, count, advance]);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
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
        </div>
      ) : (
        <div className="project-preview project-preview-empty" aria-hidden="true">
          <span>✿</span>
        </div>
      )}

      <div className="project-card-bottom">
        <h3>
          {project.title}
          <span className="project-arrow" aria-hidden="true">
            →
          </span>
        </h3>
        <p>{project.blurb}</p>

        <div className="project-tools">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="project-bento">
      {projects.map((project, index) => (
        <Reveal
          key={project.slug}
          delay={index * 0.05}
          className={`bento-item ${project.size}`}
        >
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
