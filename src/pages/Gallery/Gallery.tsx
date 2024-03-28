import { InProgressWarning } from "../../Components/InProgressWarning/InProgressWarning";
import { PictureDescriptionCard } from "../../Components/PictureDescriptionCard/PictureDescriptionCard";
import { PictureDescriptionList } from "../../util/PictureDescriptionList";

export default function Gallery() {
  return (
    <>
      <InProgressWarning />
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
