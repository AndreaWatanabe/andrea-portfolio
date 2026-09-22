import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience | Andrea Watanabe",
  description:
    "Roles across case handling, event coordination, fundraising and accounting.",
};

export default function ExperiencePage() {
  return (
    <main className="page">
      <Experience />
      <Contact />
    </main>
  );
}
