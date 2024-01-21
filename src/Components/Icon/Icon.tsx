import React from "react";

// Define a type for the props
type IconProps = {
  src: string;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large";
};

const Icon: React.FC<IconProps> = ({
  src,
  size = "medium",
  rounded = "none",
}) => {
  // Define size classes
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-6 w-6",
    large: "h-8 w-8",
  };

  // Define rounded classes
  const roundedClasses = {
    none: "rounded-none",
    small: "rounded-sm",
    medium: "rounded-md",
    large: "rounded-lg",
  };

  return (
    <img
      src={src}
      className={`${sizeClasses[size]} ${roundedClasses[rounded]}`}
      alt="icon"
    />
  );
};

export default Icon;
