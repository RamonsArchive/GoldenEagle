"use client";
import { ServiceImageType, ServicesData } from "@/lib/globalTypes";
import { shuffleArray } from "@/lib/utils";
import Image from "next/image";
import React, { useMemo, useState } from "react";

const ServicesCarousel = ({
  servicesData,
  randomize = false,
  autoPlay = true,
  autoPlayInterval = 5000,
}: {
  servicesData: ServicesData;
  randomize?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}) => {
  const { awsServicesImages } = servicesData;
  const carouselImages = useMemo(() => {
    const allImages: ServiceImageType[] = [];

    Object.entries(awsServicesImages).forEach(([category, images]) => {
      if (images && images.length > 0) {
        allImages.push(
          ...(images as unknown as ServiceImageType[]).map(
            (image: ServiceImageType) => ({
              ...image,
              category,
            })
          )
        );
      }
    });

    return randomize ? shuffleArray(allImages) : allImages;
  }, [awsServicesImages]);

  console.log("This is the carousel images", carouselImages);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative flex flex-col w-full h-[300px] xs:h-[400px]">
        {/* <Image /> */}
      </div>
    </div>
  );
};

export default ServicesCarousel;
