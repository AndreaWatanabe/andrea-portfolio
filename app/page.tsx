import About from "@/components/About";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Now from "@/components/Now";
import Playground from "@/components/Playground";
import Projects from "@/components/Projects";
import SectionTitle from "@/components/SectionTitle";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <Now />
      <About />

      <section id="work" className="section">
        <SectionTitle
          kicker="selected work"
          title="Things I designed, built, and shipped"
          subtitle="Nine projects — click any card for the full story."
        />
        <Projects />
      </section>

      <Experience />
      <Credentials />
      <Skills />

      <section id="play" className="section">
        <SectionTitle
          kicker="playground"
          title="Mini experiments"
          subtitle="A logic corner, a granny square, and what I do when I'm not working."
        />
        <Playground />
      </section>

      <Contact />
    </main>
  );
}
