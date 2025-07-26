"use client";
import { ServiceImageType, ServicesData } from "@/lib/globalTypes";
import { shuffleArray } from "@/lib/utils";
import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { serviceDescriptions } from "@/constants";
import LeftCarouselImage from "./LeftCarouselImage";
import RightCarouselImage from "./RightCarouselImage";
import CenterCarouselImage from "./CenterCarouselImage";
import LazyImage from "./LazyImage";
import { useBatchCardAnimation } from "./BatchAnimation";

// EXACT position calculations based on your layout:
// Container: 200px wide
// Left image: 30px wide, positioned at left-0 (absolute left edge)
// Center image: 36px wide, positioned at left-1/2 -translate-x-1/2 (perfectly centered)
// Right image: 30px wide, positioned at right-0 (absolute right edge)

const EXACT_POSITIONS = {
  // Left image: positioned at absolute left (0px from container left)
  LEFT: 0,

  // Center image: 36px wide, centered in 200px container
  // left-1/2 -translate-x-1/2 means: (200px / 2) - (36px / 2) = 100px - 18px = 82px
  CENTER: 82,

  // Right image: 30px wide, positioned at absolute right
  // right-0 means: 200px - 30px = 170px from left edge
  RIGHT: 170,
};

// Animation distances (how far each element needs to move)
const MOVE_DISTANCES = {
  // From left to center: 82px - 0px = 82px
  LEFT_TO_CENTER: 82,

  // From center to right: 170px - 82px = 88px
  CENTER_TO_RIGHT: 88,

  // From right to center: 82px - 170px = -88px
  RIGHT_TO_CENTER: -88,

  // From center to left: 0px - 82px = -82px
  CENTER_TO_LEFT: -82,
};

// Off-screen positions for temp elements
const OFF_SCREEN = {
  // Left side: element width + some padding
  LEFT: -40, // 30px width + 10px padding

  // Right side: container width + some padding
  RIGHT: 210, // 200px container + 10px padding
};

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
  const isAnimatingRef = useRef(false);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  }, [awsServicesImages, randomize]);

  const calculateImageIndex = (index: number) => {
    return (index + carouselImages.length) % carouselImages.length;
  };

  const currentImage = carouselImages[currentIndex];
  const prevImage = carouselImages[calculateImageIndex(currentIndex - 1)];
  const nextImage = carouselImages[calculateImageIndex(currentIndex + 1)];

  const categoryCurrentImage = currentImage.category;
  const categoryPrevImage = prevImage.category;
  const categoryNextImage = nextImage.category;

  const serviceCurrentImage = serviceDescriptions.get(categoryCurrentImage);
  const servicePrevImage = serviceDescriptions.get(categoryPrevImage);
  const serviceNextImage = serviceDescriptions.get(categoryNextImage);

  useEffect(() => {
    const startAutoRotation = () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }

      autoRotateRef.current = setInterval(() => {
        if (!isAnimatingRef.current) {
          handleImageTransition("right");
        }
      }, autoPlayInterval);
    };

    if (autoPlay) {
      const timer = setTimeout(startAutoRotation, autoPlayInterval);

      return () => {
        if (autoRotateRef.current) {
          clearInterval(autoRotateRef.current);
        }
        if (timer) {
          clearTimeout(timer);
        }
      };
    }
  }, [autoPlay, autoPlayInterval, currentIndex]);

  const restartAutoRotation = () => {
    if (autoPlay && autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = setInterval(() => {
        if (!isAnimatingRef.current) {
          handleImageTransition("right");
        }
      }, autoPlayInterval);
    }
  };
  const handleImageTransition = useCallback(
    (direction: "left" | "right") => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Calculate new index immediately
      const newIndex =
        direction === "left"
          ? calculateImageIndex(currentIndex - 1)
          : calculateImageIndex(currentIndex + 1);

      const imageTl = gsap.timeline({
        onComplete: () => {
          // Update state AFTER all animations complete
          if (direction === "right") {
            document.getElementById("temp-right-image")?.remove();
          } else {
            document.getElementById("temp-left-image")?.remove();
          }
          console.log("updating index", newIndex);
          setCurrentIndex(newIndex);
          isAnimatingRef.current = false;
          // Reset ALL positions to exact default states (instant with gsap.set)
          gsap.set("#left-carousel-image-mobile", {
            x: 0, // Back to left-0 position
            scale: 1,
            opacity: 1,
          });
          gsap.set("#center-carousel-image-mobile", {
            x: 0, // Back to left-1/2 -translate-x-1/2 position
            scale: 1,
          });
          gsap.set("#right-carousel-image-mobile", {
            x: 0, // Back to right-0 position
            scale: 1,
            opacity: 1,
          });

          // Fade main image back in
          gsap.to("#carousel-main-image-mobile", {
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
          });

          /// text animations next
        },
      });

      if (direction === "right") {
        // Create new image element for the incoming image (currentIndex + 2)
        const nextNextIndex = calculateImageIndex(newIndex + 1);
        const nextNextImage = carouselImages[nextNextIndex];

        // Create temporary image element
        const newRightImage = document.createElement("div");
        newRightImage.id = "temp-right-image";
        newRightImage.className =
          "carousel-side-image-mobile absolute z-20 w-[30px] h-[50px]";
        newRightImage.innerHTML = `
        <img src="${nextNextImage.url}" alt="${nextNextImage.alt || "alt"}" 
             class="w-full h-full object-cover rounded-xl" />
      `;

        // Position it off-screen right
        gsap.set(newRightImage, {
          x: OFF_SCREEN.RIGHT,
          scale: 0.1,
          opacity: 1,
        });

        document
          .querySelector(".relative.w-\\[200px\\]")
          ?.appendChild(newRightImage);

        imageTl
          // Fade out main image
          .to(
            "#carousel-main-image-mobile",
            {
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
            },
            0.1
          )
          // Slide left image out
          .to(
            "#left-carousel-image-mobile",
            {
              x: OFF_SCREEN.LEFT,
              scale: 0.1,
              opacity: 0,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "<0.1"
          )
          // Move center to left position
          .to(
            "#center-carousel-image-mobile",
            {
              x: MOVE_DISTANCES.CENTER_TO_LEFT,
              scale: 1,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "<"
          )
          // Move right to center position
          .to(
            "#right-carousel-image-mobile",
            {
              x: MOVE_DISTANCES.RIGHT_TO_CENTER,
              scale: 1.2,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "<"
          )
          // Animate new image into right position
          .to(
            "#temp-right-image",
            {
              x: EXACT_POSITIONS.RIGHT,
              scale: 1,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "<"
          );
      } else {
        // Moving left - similar approach
        const prevPrevIndex = calculateImageIndex(newIndex - 1);
        const prevPrevImage = carouselImages[prevPrevIndex];

        const newLeftImage = document.createElement("div");
        newLeftImage.id = "temp-left-image";
        newLeftImage.className =
          "carousel-side-image-mobile absolute z-20 w-[30px] h-[50px]";
        newLeftImage.innerHTML = `
        <img src="${prevPrevImage.url}" alt="${prevPrevImage.alt || "alt"}" 
             class="w-full h-full object-cover rounded-xl" />
      `;

        gsap.set(newLeftImage, {
          x: OFF_SCREEN.LEFT,
          scale: 0.1,
          opacity: 1,
        });

        document
          .querySelector(".relative.w-\\[200px\\]")
          ?.appendChild(newLeftImage);

        imageTl
          .to(
            "#carousel-main-image-mobile",
            {
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
            },
            0.1
          )
          .to(
            "#right-carousel-image-mobile",
            {
              x: 40,
              scale: 0.1,
              opacity: 0,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "<0.1"
          )
          .to(
            "#center-carousel-image-mobile",
            {
              x: MOVE_DISTANCES.CENTER_TO_RIGHT,
              scale: 1,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "<"
          )
          .to(
            "#left-carousel-image-mobile",
            {
              x: MOVE_DISTANCES.LEFT_TO_CENTER,
              scale: 1.2,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "<"
          )
          .to(
            "#temp-left-image",
            {
              x: EXACT_POSITIONS.LEFT,
              scale: 1,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "<"
          );
      }
    },
    [currentIndex, calculateImageIndex]
  );

  const handleArrowClick = (direction: "left" | "right") => {
    handleImageTransition(direction);
    restartAutoRotation();
  };

  // // Initialize GSAP settings on mount
  // useGSAP(() => {
  //   // Set initial states for carousel images
  //   gsap.set("#left-carousel-image-mobile", { scale: 1 });
  //   gsap.set("#center-carousel-image-mobile", { scale: 1.2 });
  //   gsap.set("#right-carousel-image-mobile", { scale: 1 });
  // }, []);

  return (
    <>
      <div
        id="mobile-service-container"
        className="carousel-container-services-mobile"
      >
        <div className="relative flex flex-col w-full h-[60vh] z-20">
          <LazyImage
            id="carousel-main-image-mobile"
            src={carouselImages[currentIndex].url}
            alt={carouselImages[currentIndex].alt || "alt"}
            sizes="100vw"
            isFill={true}
            containerClassName="w-full h-full"
            imageClassName="carousel-main-image-mobile object-cover rounded-t-xl"
            skipIntersectionObserver={true}
          />
          <div className="absolute bottom-0 left-0 right-0 h-[100px] w-full flex justify-center items-center">
            <div className="relative w-[200px] h-[50px]">
              {/* Left image - positioned absolutely */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-xl">
                <LeftCarouselImage
                  id="left-carousel-image-mobile"
                  serviceImage={prevImage}
                  styles="carousel-side-image-mobile cursor-pointer w-[30px] h-[50px]"
                  onClick={() => handleArrowClick("left")}
                  isMobile={true}
                />
              </div>

              {/* Center image - positioned absolutely */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-xl">
                <CenterCarouselImage
                  id="center-carousel-image-mobile"
                  serviceImage={currentImage}
                  styles="carousel-side-image-mobile w-[36px] h-[60px]" // 1.2x scale built in
                  isMobile={true}
                />
              </div>

              {/* Right image - positioned absolutely */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-xl">
                <RightCarouselImage
                  id="right-carousel-image-mobile"
                  serviceImage={nextImage}
                  styles="carousel-side-image-mobile cursor-pointer w-[30px] h-[50px]"
                  onClick={() => handleArrowClick("right")}
                  isMobile={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="carousel-text-container-mobile"
          className="flex flex-col gap-5 w-full p-5"
        >
          <p
            id="carousel-image-index-mobile"
            className="text-card-index-services"
          >
            {currentIndex + 1} of {carouselImages.length} images
          </p>
          <div
            id="carousel-image-description-mobile"
            className="flex flex-col gap-3"
          >
            <h1
              id="carousel-image-title-mobile"
              className="text-card-title-services"
            >
              {serviceCurrentImage?.title}
            </h1>
            <h2
              id="carousel-image-description-mobile"
              className="text-card-description-services"
            >
              {serviceCurrentImage?.description}
            </h2>
            <p
              id="carousel-image-sub-description-mobile"
              className="text-card-sub-description-services"
            >
              {serviceCurrentImage?.subDescription}
            </p>
          </div>
          <div className="flex justify-end">
            <p
              id="carousel-image-view-all-photos-mobile"
              className="text-card-view-all-photos-services"
            >
              View all photos
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCarousel;
