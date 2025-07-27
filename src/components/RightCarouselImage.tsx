import { ServiceImageType } from "@/lib/globalTypes";
import React from "react";
import Image from "next/image";
import LazyImage from "./LazyImage";

const RightCarouselImage = ({
  id,
  imageURL,
  imageAlt,
  styles,
  onClick,
  isMobile = false,
}: {
  id: string;
  imageURL: string;
  imageAlt: string;
  styles: string;
  onClick: () => void;
  isMobile?: boolean;
}) => {
  return (
    <div id={id} className={`${styles}`} onClick={onClick}>
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

export default RightCarouselImage;
