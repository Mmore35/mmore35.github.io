import { WorkHomeCardProps } from "../Components/WorkHomeCard/WorkHomeCard";
import JPMCFullScreenPicture from "../assets/Work/JPMC Dev Portal Post Auth Full.avif";
import JPMCMobilePicture from "../assets/Work/JPMC Dev Portal Pre Auth Mobile in IPhone 14 ver.avif";
import LaWalletFullScreenPicture from "../assets/Work/LaWallet Site Full.avif";
import LaWalletMobilePicture from "../assets/Work/LaWallet Site Mobile.avif";

export type WorkPictureSet = {
  FullScreenPicture: string;
  MobilePicture: string;
};

export const JPMCPictureSet: WorkPictureSet = {
  FullScreenPicture: JPMCFullScreenPicture,
  MobilePicture: JPMCMobilePicture,
};

export const LaWalletPictureSet: WorkPictureSet = {
  FullScreenPicture: LaWalletFullScreenPicture,
  MobilePicture: LaWalletMobilePicture,
};

export const JpmcHomeCardData: WorkHomeCardProps = {
  WorkName: "JPMORGAN CHASE & CO.",
  WorkPosition: "Full Stack Software Engineer",
  WorkDescription:
    "From concept to beta release, my teams led the development of the UI, cloud services, and backend development for the JPMorgan Chase & Co. developer portal.",
  FullScreenPicture: JPMCPictureSet.FullScreenPicture,
  MobilePicture: JPMCPictureSet.MobilePicture,
};

export const LaWalletHomeCardData: WorkHomeCardProps = {
  WorkName: "LA WALLET",
  WorkPosition: "Full Stack Software Engineer",
  WorkDescription:
    "The first of its kind in the USA, a fully legal digital driver's license with over 1.8 million active users in Louisiana. My teams helped build the beta for vehicle registration and various other projects under the parent company, Envoc.",
  FullScreenPicture: LaWalletPictureSet.FullScreenPicture,
  MobilePicture: LaWalletPictureSet.MobilePicture,
};

export const WorkHomeCardsData: WorkHomeCardProps[] = [
  JpmcHomeCardData,
  LaWalletHomeCardData,
];
