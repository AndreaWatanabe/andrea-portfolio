import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import ExperienceList from "@/components/ExperienceList";
import FeaturedProjects from "@/components/FeaturedProjects";
import Landing from "@/components/Landing";
import { resumeSrc } from "@/lib/assets";

export default function Home() {
  return (
    <main className="page">
      <Landing resumeHref={resumeSrc} />
      <FeaturedProjects />
      <ExperienceList />
      <Credentials />
      <Contact />
    </main>
  );
}
