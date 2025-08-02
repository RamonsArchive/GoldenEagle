import React from "react";
import { ServiceImageType } from "@/lib/globalTypes";
import LazyImage from "./LazyImage";
import MiniPhoto from "./MiniPhoto";
import { useBatchCardAnimation } from "./BatchAnimation";

const PhotoCategoryBlock = ({
  name,
  data,
  icon,
  onCategoryClick,
}: {
  name: string;
  data: ServiceImageType[];
  icon: string | null;
  onCategoryClick: (clickedIndex: number) => void;
}) => {
  // useBatchCardAnimation({
  //   sectionName: "photo-category-block",
  //   cardSelectors: [".photo-category-block"],
  //   textSelectors: {
  //     titles: [".photo-category-block-title"],
  //     descriptions: [".photo-category-block-description"],
  //   },
  //   imageSelectors: [".mini-photo"],
  // });
  return (
    <div className="photo-category-block">
      <p className="photo-category-block-title">
        {icon && <span className="text-[24px]">{icon}</span>}
        {name}
      </p>
      <div className="w-full grid grid-cols-3 xs:grid-cols-4 md:grid-cols-5 gap-5 bg-slate-700/80 rounded-xl overflow-hidden p-5 justify-items-center">
        {data.map((item, index) => (
          <MiniPhoto
            key={item.s3Key}
            imageURL={item.url}
            imageAlt={item.alt || "alt"}
            onCategoryClick={() => onCategoryClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCategoryBlock;
