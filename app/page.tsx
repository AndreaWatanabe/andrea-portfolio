import Landing from "@/components/Landing";
import { hasResume, resumeSrc } from "@/lib/assets";

export default function Home() {
  return (
    <main className="page landing-page">
      <Landing hasResume={hasResume} resumeHref={resumeSrc} />
    </main>
  );
}
