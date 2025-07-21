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
    <div
      id={id}
      className="flex flex-col w-full p-10 gap-5 bg-slate-900/70 rounded-xl shadow-lg z-10"
    >
      <h2 className={`${titleStyle}`}>{title}</h2>
      <p className={`${descriptionStyle}`}>{description}</p>
    </div>
  );
};

export default TextCard;
