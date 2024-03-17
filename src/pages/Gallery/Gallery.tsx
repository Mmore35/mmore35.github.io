import { PictureDescriptionCard } from "../../Components/PictureDescriptionCard/PictureDescriptionCard";
import { PictureDescriptionList } from "./PictureDescriptionList";

export default function Gallery() {
  return (
    <>
      {PictureDescriptionList.map((PictureDescription, index) => {
        return (
          <PictureDescriptionCard
            src={PictureDescription.src}
            description={PictureDescription.description}
            key={index}
          />
        );
      })}
    </>
  );
}
