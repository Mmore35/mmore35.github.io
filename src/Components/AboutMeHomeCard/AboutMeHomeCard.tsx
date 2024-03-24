import { CoolAnimation } from "../CoolAnimation/CoolAnimation";

export const AboutMeHomeCard = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 pt-16">
      <div className="row-start-1 row-span-3 h-100 bg-white">
        <CoolAnimation />
      </div>
      <div className="row-start-2 row-end-3 h-10 bg-black">
        Michael Morel in bold. Full Stack Developer, Japan enthusiast (Section
        in progress)
      </div>
      <div className="row-start-1 row-end-3 h-10 bg-black">
        More details section, on med and smaller screens make this go to bottom
      </div>
    </div>
  );
};
