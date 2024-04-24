import { AboutMeHomeCard } from "../../Components/AboutMeHomeCard/AboutMeHomeCard";
import { WorkHomeCard } from "../../Components/WorkHomeCard/WorkHomeCard";
import { WorkHomeCardsData } from "../../util/WorkSets";

const WorkHomeCards = () => {
  return WorkHomeCardsData.map((workHomeCardData, index) => {
    return (
      <div key={index}>
        <hr className="h-px my-8 border-0 bg-indigo-100 w-4/5 m-auto" />
        <WorkHomeCard
          WorkName={workHomeCardData.WorkName}
          WorkPosition={workHomeCardData.WorkPosition}
          WorkDescription={workHomeCardData.WorkDescription}
          FullScreenPicture={workHomeCardData.FullScreenPicture}
          MobilePicture={workHomeCardData.MobilePicture}
        />
      </div>
    );
  });
};

export default function Home() {
  return (
    <>
      <AboutMeHomeCard />
      <WorkHomeCards />
    </>
  );
}
