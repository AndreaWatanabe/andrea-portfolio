import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Playground from "@/components/Playground";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Play | Andrea Watanabe",
  description: "A logic corner and a crochet corner — small things to fiddle with.",
};

export default function PlayPage() {
  return (
    <main className="page">
      <section id="play" className="section">
        <SectionTitle
          kicker="playground"
          title="Mini experiments"
          subtitle="A sudoku and a granny square. Both meant to be poked at."
        />
        <Playground />
      </section>
      <Contact />
    </main>
  );
}
