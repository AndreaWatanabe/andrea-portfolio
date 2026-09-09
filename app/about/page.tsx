import type { Metadata } from "next";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Hobbies from "@/components/Hobbies";
import Now from "@/components/Now";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "About | Andrea Watanabe",
  description:
    "Economics student at SFU — data analysis, product strategy, and the things I do outside of work.",
};

export default function AboutPage() {
  return (
    <main className="page">
      <About />
      <Now />
      <Hobbies />
      <Credentials />
      <Skills />
      <Contact />
    </main>
  );
}
