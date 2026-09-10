import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import ExperienceList from "@/components/ExperienceList";
import FeaturedProjects from "@/components/FeaturedProjects";
import Landing from "@/components/Landing";
import { getResumeSrc } from "@/lib/assets";

export default function Home() {
  return (
    <main className="page">
      <Landing resumeHref={getResumeSrc()} />
      <FeaturedProjects />
      <ExperienceList />
      <Credentials />
      <Contact />
    </main>
  );
}
