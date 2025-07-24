import { ServiceImageType } from "@/lib/globalTypes";
import React from "react";
import Image from "next/image";

const RightCarouselImage = ({
  id,
  serviceImage,
  styles,
  onClick,
  isMobile = false,
}: {
  id: string;
  serviceImage: ServiceImageType;
  styles: string;
  onClick: () => void;
  isMobile?: boolean;
}) => {
  return (
    <div id={id} className={`${styles}`} onClick={onClick}>
      <Image
        src={serviceImage.url}
        alt={serviceImage.alt || "alt"}
        sizes={isMobile ? "10vw" : "50vw"}
        fill
        className="object-cover object-top overflow-hidden rounded-xl"
      />
    </div>
  );
};

export default RightCarouselImage;
