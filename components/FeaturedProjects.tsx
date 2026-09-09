import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { projects } from "@/data/content";

/** The three strongest projects, as a taster on the landing page. */
const FEATURED = projects.slice(0, 3);

export default function FeaturedProjects() {
  return (
    <section className="section featured-section">
      <Reveal className="featured-head">
        <div>
          <p className="card-kicker">selected work</p>
          <h2>A few things I&rsquo;ve built</h2>
        </div>
        <Link href="/projects" className="button button-ghost">
          All projects ↗
        </Link>
      </Reveal>

      <div className="featured-grid">
        {FEATURED.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.07}>
            <Link href={`/projects/${project.slug}`} className="featured-card">
              <div className={`featured-thumb tint-${project.tint}`}>
                {project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 700px) 92vw, 32vw"
                  />
                ) : (
                  <span className="feature-mark" aria-hidden="true">
                    {project.number}
                  </span>
                )}
              </div>

              <h3>{project.title}</h3>
              <p>{project.blurb}</p>

              <span className="feature-more">
                Read the case <span aria-hidden="true">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
