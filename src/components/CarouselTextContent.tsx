import { useRef, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CarouselTextContent = ({
  currentImageData,
  scrollTriggerRef,
}: {
  currentImageData: {
    image: string;
    alt: string;
    title: string;
    description: string;
    subDescription: string;
  };
  scrollTriggerRef?: React.RefObject<ScrollTrigger>;
}) => {
  return (
    <div id="carousel-image-title-mobile" className="flex flex-col gap-3">
      <h1
        id="carousel-image-title-mobile"
        className="text-card-title-carousel-services"
      >
        {currentImageData.title || "loading..."}
      </h1>
      <h2
        id="carousel-image-description-mobile"
        className="text-card-description-carousel-services"
      >
        {currentImageData.description || "loading..."}
      </h2>
      <p
        id="carousel-image-sub-description-mobile"
        className="text-card-sub-description-carousel-services"
      >
        {currentImageData.subDescription || "loading..."}
      </p>
    </div>
  );
};

export default CarouselTextContent;
