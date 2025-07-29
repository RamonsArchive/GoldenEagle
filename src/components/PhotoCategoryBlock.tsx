import React from "react";
import { ServiceImageType } from "@/lib/globalTypes";
import LazyImage from "./LazyImage";
import MiniPhoto from "./MiniPhoto";

const PhotoCategoryBlock = ({
  name,
  data,
}: {
  name: string;
  data: ServiceImageType[];
}) => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-slate-800/80 rounded-xl shadow-lg w-full">
      <p className="font-montserrat text-[20px] xs:text-[24px] md:text-[32px] font-bold">
        {name}
      </p>
      <div className="grid gird-cols-3 xs:grid-cols-4 md:grid-cols-5 bg-slate-900/80 rounded-xl overflow-hidden p-5">
        {data.map((item) => (
          <MiniPhoto
            key={item.s3Key}
            imageURL={item.url}
            imageAlt={item.alt || "alt"}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCategoryBlock;
