import { AboutMeHomeCard } from "../../Components/AboutMeHomeCard/AboutMeHomeCard";
import { WorkHomeCard } from "../../Components/WorkHomeCard/WorkHomeCard";
import { WorkHomeCards } from "../../util/WorkSets";

export default function Home() {
  return (
    <div>
      <AboutMeHomeCard />
      {WorkHomeCards.map((workHomeCard, index) => {
        return (
          <>
            <hr className="h-px my-8 border-0 bg-indigo-100 w-4/5 m-auto" />
            <WorkHomeCard
              WorkName={workHomeCard.WorkName}
              WorkPosition={workHomeCard.WorkPosition}
              WorkDescription={workHomeCard.WorkDescription}
              FullScreenPicture={workHomeCard.FullScreenPicture}
              MobilePicture={workHomeCard.MobilePicture}
              key={index}
            />
          </>
        );
      })}
    </div>
  );
}
