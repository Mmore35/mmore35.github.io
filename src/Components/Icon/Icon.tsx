type IconProps = {
  src: string;
};

export const Icon = ({ src }: IconProps) => {
  return <img src={src} className="h-8 w-8 mr-1" alt="icon" />;
};
