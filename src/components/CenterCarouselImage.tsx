import { ServiceImageType } from "@/lib/globalTypes";
import React from "react";
import Image from "next/image";

const CenterCarouselImage = ({
  id,
  serviceImage,
  styles,
  isMobile = false,
}: {
  id: string;
  serviceImage: ServiceImageType;
  styles: string;
  isMobile?: boolean;
}) => {
  return (
    <div id={id} className={`${styles}`}>
      <Image
        src={serviceImage.url}
        alt={serviceImage.alt || "alt"}
        sizes={isMobile ? "10vw" : "50vw"}
        fill
        className="object-cover object-top overflow-hidden rounded-xl border-1 border-white shadow-xl"
      />
    </div>
  );
};

export default CenterCarouselImage;
