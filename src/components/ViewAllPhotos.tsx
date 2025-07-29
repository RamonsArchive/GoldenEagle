"use client";
import React, { Suspense, useEffect, useRef } from "react";
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
import { useNavbar } from "@/app/contexts/NavbarContext";

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
  const { lenisInstance } = useNavbar();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      if (lenisInstance) {
        lenisInstance.stop();
      }
      // Search your codebase for these patterns:
      document.addEventListener("wheel", (e) => {
        console.log("wheel", e);
      });
      document.addEventListener("touchmove", (e) => {
        console.log("touchmove", e);
      });
      window.addEventListener("wheel", (e) => {
        console.log("window wheel", e);
      });
      // Store original values
      //   const originalBodyOverflow = document.body.style.overflow;
      //   const originalHtmlOverflow = document.documentElement.style.overflow;
      //   const originalBodyPosition = document.body.style.position;
      //   const originalBodyTop = document.body.style.top;
      //   const originalBodyWidth = document.body.style.width;

      //   // Get current scroll position
      //   const scrollY = window.scrollY;

      //   // Prevent scrolling by fixing the body position
      //   document.body.style.overflow = "hidden";
      //   document.documentElement.style.overflow = "hidden";
      //   document.body.style.position = "fixed";
      //   document.body.style.top = `-${scrollY}px`;
      //   document.body.style.width = "100%";

      //   console.log("overflow", document.body.style.overflow);

      return () => {
        if (lenisInstance) {
          lenisInstance.start();
        }

        // // Restore original values
        // document.body.style.overflow = originalBodyOverflow;
        // document.documentElement.style.overflow = originalHtmlOverflow;
        // document.body.style.position = originalBodyPosition;
        // document.body.style.top = originalBodyTop;
        // document.body.style.width = originalBodyWidth;
        // // Restore scroll position
        // window.scrollTo(0, scrollY);
      };
    }
  }, [isVisible]);

  const ViewAllPhotosPortal = () => {
    console.log("is visible", isVisible);
    return createPortal(
      <main className="fixed inset-0 min-h-screen w-full h-[100dvh] bg-slate-900/90 backdrop-blur-sm z-[100] scrollbar-hide">
        {/* <LazyImage
          src={serviceBackdrop.url}
          alt={serviceBackdrop.alt || "alt"}
          isFill={true}
          sizes="100vw"
          containerClassName="w-full h-full opacity-15"
          imageClassName="object-cover absolute inset-0 w-full h-full object-top opacity-15 z-15"
        /> */}
        <div className="relative flex flex-col xs:hidden w-full h-full">
          <div className="flex flex-col xs:hidden w-full h-full">
            <div className="flex flex-row justify-end p-5 ">
              <ToggleClose closeFunction={() => setIsVisible(false)} />
            </div>
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-5 min-h-0 z-[110] h-full w-full"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              onWheel={(e) => {
                const container = e.currentTarget;
                container.scrollTop += e.deltaY;
                e.stopPropagation();
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onTouchMove={(e) => {
                e.stopPropagation(); // Prevent bubbling to document listeners
              }}
            >
              <div className="flex w-full h-full flex-col gap-5 min-h-0">
                {Object.entries(awsData).map(([categoryName, categoryData]) => {
                  return (
                    categoryData.length > 0 && (
                      <Suspense key={categoryName}>
                        <PhotoCategoryBlock
                          name={categoryName}
                          data={categoryData}
                        />
                      </Suspense>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>,
      document.body
    );
  };

  return isVisible ? <ViewAllPhotosPortal /> : null;
};
export default ViewAllPhotos;
