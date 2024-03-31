import { AboutMeHomeCard } from "../../Components/AboutMeHomeCard/AboutMeHomeCard";
import { WorkHomeCard } from "../../Components/WorkHomeCard/WorkHomeCard";

export default function Home() {
  return (
    <div>
      <AboutMeHomeCard />
      <hr className="h-px my-8 border-0 bg-indigo-100 w-4/5 m-auto" />
      <WorkHomeCard />
    </div>
  );
}
