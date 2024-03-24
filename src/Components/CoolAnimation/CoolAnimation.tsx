import { IconList } from "../../util/IconList";
import { MotionIcon } from "../Icon/IconSubTypes/MotionIcon";

export const CoolAnimation = () => {
  return (
    <MotionIcon
      src={IconList[1]}
      className="animate-spin-slow animation-paused"
    />
  );
};
