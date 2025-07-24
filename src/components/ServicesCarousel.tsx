"use client";
import { ServiceImageType, ServicesData } from "@/lib/globalTypes";
import { shuffleArray } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { serviceDescriptions } from "@/constants";
import LeftCarouselImage from "./LeftCarouselImage";
import RightCarouselImage from "./RightCarouselImage";
import CenterCarouselImage from "./CenterCarouselImage";

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
  console.log("currentIndex", currentIndex);

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
  console.log("currentImage", currentImage);
  console.log("prevImage", prevImage);
  console.log("nextImage", nextImage);

  const categoryCurrentImage = currentImage.category;
  const categoryPrevImage = prevImage.category;
  const categoryNextImage = nextImage.category;

  const serviceCurrentImage = serviceDescriptions.get(categoryCurrentImage);
  const servicePrevImage = serviceDescriptions.get(categoryPrevImage);
  const serviceNextImage = serviceDescriptions.get(categoryNextImage);

  console.log("image current", carouselImages[currentIndex].url);

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
  }, [autoPlay, autoPlayInterval]);

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
  const handleImageTransition = (direction: "left" | "right") => {
    console.log("handleImageTransition", direction);
    console.log("isAnimatingRef.current", isAnimatingRef.current);

    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    // Calculate new index immediately
    const newIndex =
      direction === "left"
        ? calculateImageIndex(currentIndex - 1)
        : calculateImageIndex(currentIndex + 1);

    console.log("newIndex", newIndex);

    const imageTl = gsap.timeline({
      onComplete: () => {
        // Update state AFTER all animations complete
        console.log("updating index", newIndex);
        setCurrentIndex(newIndex);
        isAnimatingRef.current = false;

        // Fade main image back in and also the temp image with the real image
        gsap.to("#carousel-main-image-mobile", {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
        if (direction === "right") {
          gsap.to("#right-carousel-image-mobile", {
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
        } else {
          gsap.to("#left-carousel-image-mobile", {
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      },
    });

    if (direction === "right") {
      // Create new image element for the incoming image (currentIndex + 2)
      const nextNextIndex = calculateImageIndex(currentIndex + 2);
      const nextNextImage = carouselImages[nextNextIndex];

      // Create temporary image element
      const newRightImage = document.createElement("div");
      newRightImage.id = "temp-right-image";
      newRightImage.className = "carousel-side-image-mobile absolute";
      newRightImage.innerHTML = `
        <img src="${nextNextImage.url}" alt="${nextNextImage.alt || "alt"}" 
             class="w-full h-full object-cover rounded-xl" />
      `;

      // Position it off-screen right
      gsap.set(newRightImage, {
        x: 210,
        scale: 0.1,
        opacity: 1,
        width: "30px",
        height: "50px",
      });

      // Add to DOM
      document
        .getElementById("right-carousel-image-mobile")
        ?.parentNode?.appendChild(newRightImage);

      imageTl
        // Fade out main image
        .to("#carousel-main-image-mobile", {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        })
        // Slide left image out
        .to(
          "#left-carousel-image-mobile",
          {
            x: -140,
            scale: 0.6,
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
            x: -70,
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
            x: -70,
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
            x: 140,
            scale: 1,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<"
        )

        .call(() => {
          // Clean up temp element
          document.getElementById("temp-right-image")?.remove();

          // Reset positions smoothly without gsap.set flash
          gsap.to("#left-carousel-image-mobile", {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 0.1,
          });
          gsap.to("#center-carousel-image-mobile", {
            x: 0,
            scale: 1.2,
            duration: 0.1,
          });
          gsap.to("#right-carousel-image-mobile", {
            x: 0,
            scale: 1,
            duration: 0.1,
          });
        });
    } else {
      // Moving left - similar approach
      const prevPrevIndex = calculateImageIndex(currentIndex - 2);
      const prevPrevImage = carouselImages[prevPrevIndex];

      const newLeftImage = document.createElement("div");
      newLeftImage.id = "temp-left-image";
      newLeftImage.className = "carousel-side-image-mobile absolute";
      newLeftImage.innerHTML = `
        <img src="${prevPrevImage.url}" alt="${prevPrevImage.alt || "alt"}" 
             class="w-full h-full object-cover rounded-xl" />
      `;

      gsap.set(newLeftImage, {
        x: -210,
        scale: 0.8,
        opacity: 1,
        width: "30px",
        height: "50px",
      });

      document
        .getElementById("left-carousel-image-mobile")
        ?.parentNode?.appendChild(newLeftImage);

      imageTl
        .to("#carousel-main-image-mobile", {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(
          "#right-carousel-image-mobile",
          {
            x: 140,
            scale: 0.6,
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<0.1"
        )
        .to(
          "#center-carousel-image-mobile",
          {
            x: 70,
            scale: 1,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          "#left-carousel-image-mobile",
          {
            x: 70,
            scale: 1.2,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          "#temp-left-image",
          {
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<"
        )
        .call(() => {
          document.getElementById("temp-left-image")?.remove();

          gsap.to("#left-carousel-image-mobile", {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 0.1,
          });
          gsap.to("#center-carousel-image-mobile", {
            x: 0,
            scale: 1.2,
            duration: 0.1,
          });
          gsap.to("#right-carousel-image-mobile", {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 0.1,
          });
        });
    }
  };

  const handleArrowClick = (direction: "left" | "right") => {
    handleImageTransition(direction);
    restartAutoRotation();
  };

  // Initialize GSAP settings on mount
  useGSAP(() => {
    // Set initial states for carousel images
    gsap.set("#left-carousel-image-mobile", { scale: 1 });
    gsap.set("#center-carousel-image-mobile", { scale: 1.2 });
    gsap.set("#right-carousel-image-mobile", { scale: 1 });
  }, []);

  return (
    <>
      <div className="flex flex-col xs:hidden w-full h-full gap-5 bg-slate-900/70 rounded-xl">
        <div className="relative flex flex-col w-full h-[60vh] z-20">
          <Image
            id="carousel-main-image-mobile"
            src={carouselImages[currentIndex].url}
            alt={carouselImages[currentIndex].alt || "alt"}
            sizes="100vw"
            fill
            className="carousel-main-image-mobile object-cover rounded-t-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[100px] w-full flex justify-center items-center">
            <div className="flex items-center justify-between w-full max-w-[200px] px-4">
              <LeftCarouselImage
                id="left-carousel-image-mobile"
                serviceImage={prevImage}
                styles="carousel-side-image-mobile cursor-pointer"
                onClick={() => handleArrowClick("left")}
                isMobile={true}
              />
              <CenterCarouselImage
                id="center-carousel-image-mobile"
                serviceImage={currentImage}
                styles="carousel-side-image-mobile"
                isMobile={true}
              />
              <RightCarouselImage
                id="right-carousel-image-mobile"
                serviceImage={nextImage}
                styles="carousel-side-image-mobile cursor-pointer"
                onClick={() => handleArrowClick("right")}
                isMobile={true}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full p-5">
          <p className="font-montserrat text-[12px] text-white/80">
            {currentIndex + 1} of {carouselImages.length} images
          </p>
          <div className="flex flex-col gap-3">
            <h1 className="font-montserrat font-bold text-[24px] text-white">
              {serviceCurrentImage?.title}
            </h1>
            <h2 className="font-montserrat font-regular text-[16px] text-white/90">
              {serviceCurrentImage?.description}
            </h2>
            <p className="font-montserrat font-light italic text-[12px] text-white/70">
              {serviceCurrentImage?.subDescription}
            </p>
          </div>
          <div className="flex justify-end">
            <p className="font-montserrat font-regular italic underline text-[12px] text-white/80 cursor-pointer hover:text-white transition-colors">
              View all photos
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCarousel;
