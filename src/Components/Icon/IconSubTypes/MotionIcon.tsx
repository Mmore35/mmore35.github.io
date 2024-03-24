import { motion } from "framer-motion";

type IconProps = {
  src: string;
  className?: string;
};

export const MotionIcon = ({ src, className }: IconProps) => {
  return <motion.img src={src} drag className={"h-8 w-8 mr-1 " + className} />;
};
