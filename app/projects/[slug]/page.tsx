import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { projectBySlug, projects } from "@/data/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} | Andrea Watanabe`,
    description: project.blurb,
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projectBySlug(slug);

  if (!project) notFound();

  const position = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(position + 1) % projects.length];

  return (
    <main className="page project-page">
      <Reveal className="project-hero">
        <p className="project-hero-tag">{project.tag}</p>
        <h1>{project.title}</h1>
        <p className="project-hero-blurb">{project.blurb}</p>

        <dl className="project-facts">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{project.tools.join(" · ")}</dd>
          </div>
        </dl>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            {project.hrefLabel ?? "View it live"} ↗
          </a>
        )}
      </Reveal>

      {project.images.length > 0 && (
        <Reveal className="project-gallery">
          {project.images.map((image, index) => (
            <figure key={image}>
              <Image
                src={image}
                alt={`${project.title} — view ${index + 1}`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </figure>
          ))}
        </Reveal>
      )}

      <div className="project-body">
        <Reveal className="project-context">
          <h2>The idea</h2>
          <p>{project.context}</p>
        </Reveal>

        <Reveal className="project-highlights" delay={0.08}>
          <h2>What I did</h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          {project.outcome && (
            <p className="project-outcome">
              <span aria-hidden="true">✿</span> {project.outcome}
            </p>
          )}
        </Reveal>
      </div>

      <Reveal className="project-next">
        <Link href={`/projects/${next.slug}`}>
          <span className="card-kicker">next project</span>
          <strong>
            {next.title} <span aria-hidden="true">→</span>
          </strong>
        </Link>
        <Link href="/#work" className="button button-ghost">
          All projects
        </Link>
      </Reveal>
    </main>
  );
}
