"use client";
import React, { Suspense, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ToggleClose from "./ToggleClose";
import { createPortal } from "react-dom";
import {
  ServicesData,
  CurrentServiceData,
  AwsServicesImages,
  ServiceImageType,
} from "@/lib/globalTypes";
import LazyImage from "./LazyImage";
import PhotoCategoryBlock from "./PhotoCategoryBlock";

const ViewAllPhotos = ({
  isVisible,
  setIsVisible,
  currentServiceData,
  awsData,
  serviceBackdrop,
}: {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  currentServiceData: CurrentServiceData;
  awsData: AwsServicesImages;
  serviceBackdrop: ServiceImageType;
}) => {
  console.log("awsData", awsData);
  useEffect(() => {
    if (isVisible) {
      // Add class to body to prevent scrolling
      document.body.classList.add("no-scroll");

      return () => {
        // Remove class when component unmounts or becomes invisible
        document.body.classList.remove("no-scroll");
      };
    }
  }, [isVisible]);

  const ViewAllPhotosPortal = () => {
    console.log("is visible", isVisible);
    return createPortal(
      <main className="fixed inset-0 min-h-screen w-full h-[100dvh] bg-slate-700/90 backdrop-blur-sm z-[100] overflow-y-auto scrollbar-hide overflow-x-hidden">
        <LazyImage
          src={serviceBackdrop.url}
          alt={serviceBackdrop.alt || "alt"}
          isFill={true}
          containerClassName="w-full h-full opacity-15"
          imageClassName="object-cover object-top opacity-15 z-15"
        />
        <div className="flex flex-col gap-5 xs:hidden p-5">
          <div className="flex flex-row justify-end">
            <ToggleClose closeFunction={() => setIsVisible(false)} />
          </div>
          <div className="flex flex-col gap-5">
            {Object.entries(awsData).map(([categoryName, categoryData]) => (
              <Suspense key={categoryName}>
                <PhotoCategoryBlock name={categoryName} data={categoryData} />
              </Suspense>
            ))}
          </div>
        </div>
      </main>,
      document.body
    );
  };

  return isVisible ? <ViewAllPhotosPortal /> : null;
};
export default ViewAllPhotos;
