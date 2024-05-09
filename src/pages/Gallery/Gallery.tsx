import { PictureDescriptionCard } from "../../Components/PictureDescriptionCard/PictureDescriptionCard";
import { PictureDescriptionList } from "../../util/PictureDescriptionList";

export default function Gallery() {
  return (
    <div className="grid grid-cols-4">
      {PictureDescriptionList.map((PictureDescription, index) => {
        return (
          <PictureDescriptionCard
            src={PictureDescription.src}
            description={PictureDescription.description}
            key={index}
          />
        );
      })}
    </div>
  );
}
