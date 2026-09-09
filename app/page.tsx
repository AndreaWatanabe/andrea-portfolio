import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Landing from "@/components/Landing";
import { resumeSrc } from "@/lib/assets";

export default function Home() {
  return (
    <main className="page">
      <Landing resumeHref={resumeSrc} />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
