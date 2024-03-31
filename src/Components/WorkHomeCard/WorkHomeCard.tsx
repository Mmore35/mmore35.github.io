import { motion } from "framer-motion";
import { JPMCPictureSet, WorkPictureSet } from "../../util/WorkPictureSet";

const WorkHomeInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-10">
      <div className="flex flex-col justify-center">
        <div className="text-4xl text-indigo-100 font-bold pb-2">
          JPMorgan Chase & Co.
        </div>
        <div className="text-xl text-gray-400 font-bold">
          Full Stack Software Engineer
        </div>
      </div>
      <div className="text-indigo-100 text-2xl">
        From concept to beta release, my teams lead the development of the UI,
        cloud services and backend development of the JPMorgan Chase & Co
        developer portal.
      </div>
    </div>
  );
};

const WorkHomePictures = ({
  FullScreenPicture,
  MobilePicture,
}: WorkPictureSet) => {
  return (
    <div className="flex justify-end m-auto w-3/4 mt-10 mb-20">
      <div className="p-2 bg-black rounded-2xl w-full h-fit">
        <motion.img
          src={FullScreenPicture}
          alt="Desktop View"
          className="rounded-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
      </div>
      <motion.div
        className="absolute p-2 bg-black shadow-lg rounded-lg w-60 right-10 mt-40"
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.3 }}
      >
        <img src={MobilePicture} alt="Mobile View" className="rounded-md" />
      </motion.div>
    </div>
  );
};

export const WorkHomeCard = () => {
  return (
    <>
      <WorkHomeInfo />
      <WorkHomePictures
        FullScreenPicture={JPMCPictureSet.FullScreenPicture}
        MobilePicture={JPMCPictureSet.MobilePicture}
      />
    </>
  );
};
