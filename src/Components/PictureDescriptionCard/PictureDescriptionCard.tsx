import { PictureDescriptionType } from "../../util/PictureDescriptionList";

export const PictureDescriptionCard = (
  PictureDescription: PictureDescriptionType
) => {
  return (
    <div className="m-10 p-5 bg-slate-800 rounded-md">
      <img src={PictureDescription.src} className="rounded-s" />
      <div className="m-3">{PictureDescription.description}</div>
    </div>
  );
};
