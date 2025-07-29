"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
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
import { serviceDescriptions } from "@/constants";
import TextCard from "./TextCard";
import LeftImageArrow from "./LeftImageArrow";
import RightImageArrow from "./RightImageArrow";
import { ChevronLeft } from "lucide-react";

type ModalView = "categories" | "category-photos";

interface ModalState {
  isVisible: boolean;
  view: ModalView;
  selectedCategory?: {
    name: string;
    description: string | null;
    data: ServiceImageType[];
    icon: string | null;
  };
  selectedPhotoIndex?: number;
}

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
  const [isOpenAllCategoryPhotos, setIsOpenAllCategoryPhotos] = useState(false);
  const [modalState, setModalState] = useState<ModalState>({
    isVisible: false,
    view: "categories",
  });

  useEffect(() => {
    setModalState((prev) => ({
      ...prev,
      isVisible: isVisible,
      view: isVisible ? "categories" : "categories", // Reset to categories when opening
      selectedCategory: undefined,
      selectedPhotoIndex: undefined,
    }));
  }, [isVisible]);

  const openCategoryPhotos = (
    categoryName: string,
    categoryDescription: string | null,
    categoryData: ServiceImageType[],
    categoryIcon: string | null,
    clickedIndex: number
  ) => {
    console.log("categoryName", categoryName);
    console.log("categoryDescription", categoryDescription);
    console.log("categoryData", categoryData);
    console.log("categoryIcon", categoryIcon);
    setModalState((prev) => ({
      ...prev,
      view: "category-photos",
      selectedCategory: {
        name: categoryName,
        description: categoryDescription,
        data: categoryData,
        icon: categoryIcon,
      },
      selectedPhotoIndex: clickedIndex,
    }));
  };

  const backToAllCategories = () => {
    setModalState((prev) => ({
      ...prev,
      view: "categories",
      selectedCategory: undefined,
      selectedPhotoIndex: undefined,
    }));
  };

  const calculateIndex = (direction: "next" | "prev") => {
    if (!modalState.selectedCategory) return 0;
    const currentIndex = modalState.selectedPhotoIndex || 0;
    const length = modalState.selectedCategory.data.length;
    return direction === "next"
      ? (currentIndex + 1 + length) % length
      : (currentIndex - 1 + length) % length;
  };

  const navigatePhoto = (direction: "next" | "prev") => {
    if (!modalState.selectedCategory) return;

    setModalState((prev) => {
      const newIndex = calculateIndex(direction);
      return {
        ...prev,
        selectedPhotoIndex: newIndex,
      };
    });
  };

  useEffect(() => {
    if (isVisible) {
      if (lenisInstance) {
        lenisInstance.stop();
      }
      return () => {
        if (lenisInstance) {
          lenisInstance.start();
        }
      };
    }
  }, [isVisible]);

  const renderAllCategoriesView = () => {
    console.log("is visible", isVisible);
    return (
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
                    name={
                      serviceDescriptions.get(categoryName)?.title ||
                      categoryName
                    }
                    icon={serviceDescriptions.get(categoryName)?.icon || null}
                    data={categoryData}
                    onCategoryClick={(clickedIndex) =>
                      openCategoryPhotos(
                        serviceDescriptions.get(categoryName)?.title ||
                          categoryName,
                        serviceDescriptions.get(categoryName)?.description ||
                          null,
                        categoryData,
                        serviceDescriptions.get(categoryName)?.icon || null,
                        clickedIndex
                      )
                    }
                  />
                </Suspense>
              )
            );
          })}
        </div>
      </div>
    );
  };

  const renderCategoryPhotosView = () => {
    if (!modalState.selectedCategory) return null;

    const currentPhoto =
      modalState.selectedCategory.data[modalState.selectedPhotoIndex || 0];

    const title = modalState.selectedCategory.name;
    const description = modalState.selectedCategory.description;
    const icon = modalState.selectedCategory.icon;

    return (
      <div className="flex-1 flex flex-col px-5 pb-5 min-h-0 z-[110] gap-5">
        <div className="flex flex-row items-center">
          <button
            className="flex flex-row items-center font-montserrat text-white text-[14px] xs:text-[16px] md:text-[18px] transition-all duration-300 ease-in-out hover:text-slate-400 gap-2"
            onClick={backToAllCategories}
          >
            <ChevronLeft className="w-6 h-6" />
            Back
          </button>
        </div>
        <div className="flex flex-col w-full h-full rounded-xl shadow-xl border-1 border-white/10">
          <TextCard
            id="category-photos-title"
            title={`${icon} ${title}`}
            className="text-card-category-photos"
            description={description}
            titleStyle="text-card-title-category-photos"
            descriptionStyle="text-card-description-category-photos"
          />
          <p className="text-card-index-category-photos px-5 pb-3 rounded-xl z-[110]">
            {modalState?.selectedPhotoIndex !== undefined
              ? modalState?.selectedPhotoIndex + 1
              : 0}{" "}
            of {modalState?.selectedCategory?.data.length} images
          </p>

          <div className="relative flex flex-center w-full h-full shadow-xl">
            <LazyImage
              src={currentPhoto.url}
              alt={currentPhoto.alt || "alt"}
              isFill={true}
              sizes="100vw"
              containerClassName="relative flex flex-center w-full h-full rounded-b-xl"
              imageClassName="object-cover w-full h-full rounded-b-xl"
              priority={true}
              skipIntersectionObserver={true}
            />
            <LeftImageArrow
              id="left-image-arrow"
              direction="left"
              onClick={() => navigatePhoto("prev")}
              position="left-[5%] top-1/2 -translate-y-1/2"
            />
            <RightImageArrow
              id="right-image-arrow"
              direction="right"
              onClick={() => navigatePhoto("next")}
              position="right-[5%] top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    );
  };

  const ViewAllPhotosPortal = () => {
    return createPortal(
      <main className="fixed inset-0 min-h-screen w-full h-[100dvh] bg-slate-900/90 backdrop-blur-sm z-[100] scrollbar-hide">
        <LazyImage
          src={serviceBackdrop.url}
          alt={serviceBackdrop.alt || "alt"}
          isFill={true}
          sizes="100vw"
          containerClassName="w-full h-full opacity-15"
          imageClassName="object-cover absolute inset-0 w-full h-full object-top opacity-15 z-15"
        />
        <div className="relative flex flex-col xs:hidden w-full h-full">
          <div className="flex flex-col xs:hidden w-full h-full">
            <div className="flex flex-row justify-end p-5 ">
              <ToggleClose closeFunction={() => setIsVisible(false)} />
            </div>
            {modalState.view === "categories" && renderAllCategoriesView()}
            {modalState.view === "category-photos" &&
              renderCategoryPhotosView()}
          </div>
        </div>
      </main>,
      document.body
    );
  };

  return isVisible ? <ViewAllPhotosPortal /> : null;
};
export default ViewAllPhotos;
