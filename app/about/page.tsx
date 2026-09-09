import type { Metadata } from "next";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hobbies from "@/components/Hobbies";

export const metadata: Metadata = {
  title: "About | Andrea Watanabe",
  description:
    "Economics student at SFU — data analysis, product strategy, and the things I do outside of work.",
};

export default function AboutPage() {
  return (
    <main className="page">
      <About />
      <Hobbies />
      <Contact />
    </main>
  );
}
