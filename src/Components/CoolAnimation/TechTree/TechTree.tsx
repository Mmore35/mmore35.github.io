import { motion } from "framer-motion";
import { IconList } from "../../../util/IconList";

export const TechTree = () => {
  return (
    <div className="grid grid-cols-2">
      {IconList.map((icon, index) => {
        return (
          <motion.img
            src={icon}
            key={index}
            drag
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                delay: index * 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="h-20 w-20 p-2"
          />
        );
      })}
    </div>
  );
};
