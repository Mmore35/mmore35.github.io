import { IconList } from "../../util/IconList";
import { IconRow } from "../IconRow/IconRow";

export const TechStack = () => {
  return (
    <div className="max-w-full grid grid-cols-3">
      <div className="col-start-2 justify-self-center mt-20 text-xl">
        <span className=" text-slate-500 underline italic">Cutting edge </span>
        tech leveraged in this website:
        <IconRow srcList={IconList} />
      </div>
    </div>
  );
};
