import { Icon } from "../Icon/Icon";

type IconRowProps = {
  srcList: string[];
};

export const IconRow = ({ srcList }: IconRowProps) => {
  return (
    <div className="flex justify-center">
      {srcList.map((src, index) => {
        return <Icon src={src} key={index} />;
      })}
    </div>
  );
};
