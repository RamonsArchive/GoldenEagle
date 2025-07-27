import { ServiceImageType } from "@/lib/globalTypes";
import React from "react";
import Image from "next/image";
import LazyImage from "./LazyImage";

const CenterCarouselImage = ({
  id,
  imageURL,
  imageAlt,
  styles,
  isMobile = false,
}: {
  id: string;
  imageURL: string;
  imageAlt: string;
  styles: string;
  isMobile?: boolean;
}) => {
  return (
    <div id={id} className={`${styles}`}>
      <LazyImage
        src={imageURL}
        alt={imageAlt || "alt"}
        sizes={isMobile ? "10vw" : "50vw"}
        isFill={true}
        containerClassName="w-full h-full"
        imageClassName="object-cover object-top overflow-hidden rounded-xl"
      />
    </div>
  );
};

export default CenterCarouselImage;
