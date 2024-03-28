import { PictureDescriptionType } from "../../util/PictureDescriptionList";

export const PictureDescriptionCard = (
  PictureDescription: PictureDescriptionType
) => {
  return (
    <div className="m-16 p-5 bg-slate-800 w-72 rounded-md">
      <img src={PictureDescription.src} className="rounded-s w-max" />
      <div className="m-3">{PictureDescription.description}</div>
    </div>
  );
};
