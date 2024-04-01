import { motion } from "framer-motion";
import { WorkPictureSet } from "../../util/WorkSets";

type WorkHomeInfoProps = {
  WorkName: string;
  WorkPosition: string;
  WorkDescription: string;
};

const WorkHomeInfo = ({
  WorkName,
  WorkPosition,
  WorkDescription,
}: WorkHomeInfoProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-10">
      <div className="flex flex-col justify-center">
        <div className="text-4xl text-indigo-100 font-bold pb-2">
          {WorkName}
        </div>
        <div className="text-xl text-gray-400 font-bold">{WorkPosition}</div>
      </div>
      <div className="text-indigo-100 text-2xl">{WorkDescription}</div>
    </div>
  );
};

const WorkHomePictures = ({
  FullScreenPicture,
  MobilePicture,
}: WorkPictureSet) => {
  return (
    <div className="flex justify-end m-auto w-3/4 mt-10 mb-20">
      <motion.div
        className="p-2 bg-black rounded-2xl w-full h-fit"
        whileHover={{ scale: [null, 1.13, 1.14], zIndex: 10 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={FullScreenPicture}
          alt="Desktop View"
          className="rounded-2xl"
        />
      </motion.div>
      <motion.div
        className="absolute rounded-3xl w-60 right-10 mt-40"
        whileHover={{ scale: [null, 1.13, 1.15] }}
        transition={{ duration: 0.2 }}
      >
        <img src={MobilePicture} alt="Mobile View" className="rounded-md" />
      </motion.div>
    </div>
  );
};

export type WorkHomeCardProps = {
  WorkName: string;
  WorkPosition: string;
  WorkDescription: string;
  FullScreenPicture: string;
  MobilePicture: string;
};

export const WorkHomeCard = ({
  WorkName,
  WorkPosition,
  WorkDescription,
  FullScreenPicture,
  MobilePicture,
}: WorkHomeCardProps) => {
  return (
    <>
      <WorkHomeInfo
        WorkName={WorkName}
        WorkPosition={WorkPosition}
        WorkDescription={WorkDescription}
      />
      <WorkHomePictures
        FullScreenPicture={FullScreenPicture}
        MobilePicture={MobilePicture}
      />
    </>
  );
};
