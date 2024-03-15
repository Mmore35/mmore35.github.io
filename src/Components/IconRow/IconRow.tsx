type IconRowProps = {
  srcList: string[];
};

type IconProps = {
  src: string;
};

export const IconRow = ({ srcList }: IconRowProps) => {
  const Icon = ({ src }: IconProps) => {
    return <img src={src} className="h-8 w-8 mr-1" alt="icon" />;
  };

  return (
    <div className="flex justify-center">
      {srcList.map((src, index) => {
        return <Icon src={src} key={index} />;
      })}
    </div>
  );
};
