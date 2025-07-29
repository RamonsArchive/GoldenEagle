import React from "react";
import LazyImage from "./LazyImage";

const MiniPhoto = ({
  imageURL,
  imageAlt,
}: {
  imageURL: string;
  imageAlt: string;
}) => {
  return (
    <div className="mini-photo-carousel-services">
      <LazyImage
        src={imageURL}
        alt={imageAlt || "alt"}
        isFill={true}
        containerClassName="w-full h-full"
        imageClassName="object-cover object-top overflow-hidden rounded-xl"
      />
    </div>
  );
};

export default MiniPhoto;
