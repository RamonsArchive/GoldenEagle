import React from "react";
import { ServiceImageType } from "@/lib/globalTypes";
import LazyImage from "./LazyImage";
import MiniPhoto from "./MiniPhoto";

const PhotoCategoryBlock = ({
  name,
  data,
  icon,
  onCategoryClick,
}: {
  name: string;
  data: ServiceImageType[];
  icon: string | null;
  onCategoryClick: () => void;
}) => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-slate-800/80 rounded-xl shadow-lg w-full">
      <p className="font-montserrat text-[20px] xs:text-[24px] md:text-[32px] font-bold flex items-center gap-2">
        {icon && <span className="text-[24px]">{icon}</span>}
        {name}
      </p>
      <div className="w-full grid grid-cols-3 xs:grid-cols-4 md:grid-cols-5 gap-5 bg-slate-700/80 rounded-xl overflow-hidden p-5 justify-items-center">
        {data.map((item) => (
          <MiniPhoto
            key={item.s3Key}
            imageURL={item.url}
            imageAlt={item.alt || "alt"}
            onCategoryClick={onCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCategoryBlock;
