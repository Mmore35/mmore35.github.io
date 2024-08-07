import { motion } from "framer-motion";
import { WorkPictureSet } from "../../util/WorkSets";
import { useState } from "react";

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
    <div className="grid grid-row-3 gap-4 p-10 lg:grid-cols-2">
      <div className="flex flex-row justify-center lg:flex-col">
        <div className="text-3xl lg:text-4xl text-indigo-100 font-bold lg:pb-2 w-full content-center">
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
  const [isDesktopHovered, setIsDesktopHovered] = useState(false);

  return (
    <div className="flex xl:justify-end m-auto w-3/4 lg:mt-10 xl:mb-20 mb-28 min-h-96 justify-center">
      <motion.div
        className="p-2 bg-black rounded-2xl w-full h-fit hidden xl:block"
        onHoverStart={() => setIsDesktopHovered(true)}
        onHoverEnd={() => setIsDesktopHovered(false)}
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
        className="absolute rounded-3xl w-60 xl:right-10 xl:mt-40"
        whileHover={{ scale: [null, 1.13, 1.15] }}
        transition={{ duration: 0.2 }}
        animate={{
          opacity: isDesktopHovered ? 0 : 1,
          scale: isDesktopHovered ? 0.95 : 1,
        }}
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
