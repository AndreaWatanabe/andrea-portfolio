import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Projects | Andrea Watanabe",
  description:
    "Dashboards, platforms, case studies and websites — data analysis, product strategy, UX/UI and front-end builds.",
};

export default function ProjectsPage() {
  return (
    <main className="page">
      <section id="projects" className="section">
        <SectionTitle
          kicker="selected work"
          title="Things I designed, built, and shipped"
          subtitle="Nine projects — open any one for the full story."
        />
        <Projects />
      </section>

      <Contact />
    </main>
  );
}
