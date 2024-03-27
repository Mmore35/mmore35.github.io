import { useState } from "react";
import { IconList } from "../../util/IconList";
import { ImageRotator } from "./ImageRotator/ImageRotator";
import { TechTree } from "./TechTree/TechTree";

export const CoolAnimation = () => {
  const [isHoveredOrClicked, setIsHoveredOrClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => setIsHoveredOrClicked(true)}
      onMouseLeave={() => !isClicked && setIsHoveredOrClicked(false)}
      onMouseDownCapture={() => setIsClicked(true)}
    >
      {isHoveredOrClicked ? <TechTree /> : <ImageRotator images={IconList} />}
    </div>
  );
};
