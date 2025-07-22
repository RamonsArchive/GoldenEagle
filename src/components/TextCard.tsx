import React from "react";

const TextCard = ({
  id,
  title,
  description,
  titleStyle,
  descriptionStyle,
}: {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
  titleStyle: string;
  descriptionStyle: string;
}) => {
  return (
    <div id={id} className="text-card">
      <h2 className={`${titleStyle}`}>{title}</h2>
      <p className={`${descriptionStyle}`}>{description}</p>
    </div>
  );
};

export default TextCard;
