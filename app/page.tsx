import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import PetalField from "@/components/PetalField";
import Playground from "@/components/Playground";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <PetalField />

      <main className="page">
        <Hero />
        <Projects />
        <Playground />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
