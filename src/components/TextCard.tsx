import React from "react";

const TextCard = ({
  id,
  className,
  title,
  description,
  titleStyle,
  descriptionStyle,
}: {
  id: string;
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode | null;
  titleStyle: string;
  descriptionStyle: string;
}) => {
  return (
    <div id={id} className={`${className}`}>
      <h2 className={`${titleStyle}`}>{title}</h2>
      {description && <p className={`${descriptionStyle}`}>{description}</p>}
    </div>
  );
};

export default TextCard;
