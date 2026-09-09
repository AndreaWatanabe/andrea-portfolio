import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Work | Andrea Watanabe",
  description:
    "Projects and professional experience — data analysis, product strategy, UX/UI, and web builds.",
};

export default function WorkPage() {
  return (
    <main className="page">
      <section id="work" className="section">
        <SectionTitle
          kicker="selected work"
          title="Things I designed, built, and shipped"
          subtitle="Nine projects — open any one for the full story."
        />
        <Projects />
      </section>

      <Experience />
      <Contact />
    </main>
  );
}
