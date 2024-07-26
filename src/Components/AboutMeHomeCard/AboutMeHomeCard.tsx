import { CoolAnimation } from "../CoolAnimation/CoolAnimation";
import { FirstImpression } from "./FirstImpression";
import { SecondImpression } from "./SecondImpression";

export const AboutMeHomeCard = () => {
  return (
    <div className="grid grid-flow-col gap-4">
      <div className="h-96 w-64 p-10 m-2 hidden md:flex">
        <CoolAnimation />
      </div>
      <div className="flex items-center m-auto p-1">
        <FirstImpression />
      </div>
      <div className="h-full hidden xl:flex xl:items-center xl:justify-center">
        <SecondImpression />
      </div>
    </div>
  );
};
