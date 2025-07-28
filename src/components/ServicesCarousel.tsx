"use client";
import { ServiceImageType, ServicesData } from "@/lib/globalTypes";
import { shuffleArray } from "@/lib/utils";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from "react";
import gsap, { registerPlugin } from "gsap";
import { useGSAP } from "@gsap/react";
import { serviceDescriptions } from "@/constants";
import LeftCarouselImage from "./LeftCarouselImage";
import RightCarouselImage from "./RightCarouselImage";
import CenterCarouselImage from "./CenterCarouselImage";
import LazyImage from "./LazyImage";
import SplitText from "gsap/SplitText";
import CarouselTextContent from "./CarouselTextContent";
import ScrollTrigger from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

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
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const splitTitleTextRef = useRef<SplitText[]>([]);
  const splitDescriptionTextRef = useRef<SplitText[]>([]);
  const masterScrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const currentTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isTextHidden, setIsTextHidden] = useState(false);

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

  // Move calculateImageIndex outside useMemo to avoid stale closures
  const calculateImageIndex = useCallback(
    (index: number) => {
      return (index + carouselImages.length) % carouselImages.length;
    },
    [carouselImages.length]
  );

  const currentImage = carouselImages[currentIndex];
  const prevImage = carouselImages[calculateImageIndex(currentIndex - 1)];
  const nextImage = carouselImages[calculateImageIndex(currentIndex + 1)];

  const currentImageData = serviceDescriptions.get(currentImage?.category);
  const prevImageData = serviceDescriptions.get(prevImage?.category);
  const nextImageData = serviceDescriptions.get(nextImage?.category);

  const currentServiceData = useMemo(() => {
    const currentImage = carouselImages[currentIndex];
    const prevImage = carouselImages[calculateImageIndex(currentIndex - 1)];
    const nextImage = carouselImages[calculateImageIndex(currentIndex + 1)];

    const currentImageData = serviceDescriptions.get(currentImage?.category);
    const prevImageData = serviceDescriptions.get(prevImage?.category);
    const nextImageData = serviceDescriptions.get(nextImage?.category);

    return {
      current: {
        image: currentImage?.url,
        alt: currentImage?.alt || "",
        title: currentImageData?.title || "",
        description: currentImageData?.description || "",
        subDescription: currentImageData?.subDescription || "",
      },
      prev: {
        image: prevImage?.url,
        alt: prevImage?.alt || "",
        title: prevImageData?.title || "",
        description: prevImageData?.description || "",
        subDescription: prevImageData?.subDescription || "",
      },
      next: {
        image: nextImage?.url,
        alt: nextImage?.alt || "",
        title: nextImageData?.title || "",
        description: nextImageData?.description || "",
        subDescription: nextImageData?.subDescription || "",
      },
    };
  }, [currentIndex, carouselImages, calculateImageIndex]);

  // Helper function to properly clean up SplitText instances

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

  // Initial setup - only run once on mount
  useGSAP(() => {
    console.log("Initial setup");
    createMasterScrollTrigger();
    createTextTimeline();
  }, []);

  const createMasterScrollTrigger = () => {
    cleanupSplitText();
    createSplitTextInstances();
    // Kill existing master scroll trigger
    if (masterScrollTriggerRef.current) {
      masterScrollTriggerRef.current.kill();
      masterScrollTriggerRef.current = null;
    }

    // Create a persistent ScrollTrigger that only tracks scroll progress
    masterScrollTriggerRef.current = ScrollTrigger.create({
      trigger: "#carousel-text-card-container-mobile",
      start: "top 99%",
      end: "bottom 90%",
      scrub: 1,
      markers: true,
      onUpdate: (self) => {
        scrollTriggerRef.current = self;
        // Update current timeline if it exists
        if (currentTimelineRef.current) {
          currentTimelineRef.current.progress(self.progress);
        }
      },
    });
  };

  const createTextTimeline = () => {
    // Kill existing timeline and capture progress
    cleanupSplitText();
    createSplitTextInstances();

    let previousProgress = 0;
    if (currentTimelineRef.current) {
      previousProgress = currentTimelineRef.current.progress();
      currentTimelineRef.current.kill();
    }

    // Create new timeline (not connected to ScrollTrigger yet)
    const timeline = gsap.timeline({ paused: true });

    // Animate text in (from bottom, going up)
    for (const title of splitTitleTextRef.current) {
      timeline.fromTo(
        title.words,
        {
          opacity: 0,
          y: 30, // Start from below
        },
        {
          opacity: 1,
          y: 0, // End at normal position (not progress!)
          ease: "power2.out",
          duration: 0.6,
          stagger: 0.05,
        },
        0 // Start at beginning of timeline
      );
    }

    for (const description of splitDescriptionTextRef.current) {
      timeline.fromTo(
        description.lines,
        {
          opacity: 0,
          y: 30, // Start from below
        },
        {
          opacity: 1,
          y: 0, // End at normal position (not progress!)
          ease: "power2.out",
          duration: 0.6,
          stagger: 0.08,
        },
        0.1 // Slight delay
      );
    }

    currentTimelineRef.current = timeline;

    // Get current scroll progress
    const currentScrollProgress = scrollTriggerRef.current?.progress || 0;

    console.log("Previous progress:", previousProgress);
    console.log("Current scroll progress:", currentScrollProgress);

    // ANIMATE TO the current scroll position instead of setting it directly
    gsap.fromTo(
      timeline,
      { progress: 0 }, // Start from beginning
      {
        progress: previousProgress, // Animate to current scroll position
        duration: 0.8, // Smooth animation duration
        ease: "power2.out",
        onComplete: () => {
          console.log("Timeline animation to scroll position complete");
        },
      }
    );

    return timeline;
  };

  const createSmoothTextTransition = () => {
    cleanupSplitText();
    createSplitTextInstances();

    const currentScrollProgress = scrollTriggerRef.current?.progress || 0;

    // Kill existing timeline
    if (currentTimelineRef.current) {
      currentTimelineRef.current.kill();
    }

    const allElements = [
      ...splitTitleTextRef.current.flatMap((split) => split.words),
      ...splitDescriptionTextRef.current.flatMap((split) => split.lines),
    ];

    // Use autoAlpha (combines opacity and visibility) with immediate render
    gsap.set(allElements, {
      autoAlpha: 0,
      y: -30,
      immediateRender: true,
    });

    // Step 1: Create the scroll-controlled timeline (but don't activate yet)
    const scrollTimeline = gsap.timeline({ paused: true });

    for (const title of splitTitleTextRef.current) {
      scrollTimeline.fromTo(
        title.words,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.6,
          stagger: 0.05,
        },
        0
      );
    }

    for (const description of splitDescriptionTextRef.current) {
      scrollTimeline.fromTo(
        description.lines,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.6,
          stagger: 0.08,
        },
        0.1
      );
    }

    // Step 2: Create transition animation that leads into scroll timeline
    const transitionTimeline = gsap.timeline({
      onComplete: () => {
        // After transition completes, activate scroll control
        currentTimelineRef.current = scrollTimeline;
        //scrollTimeline.progress(currentScrollProgress);
        console.log("Transition complete, scroll control activated");
      },
    });

    // Set initial state (from above)
    transitionTimeline.set(
      [
        ...splitTitleTextRef.current.flatMap((split) => split.words),
        ...splitDescriptionTextRef.current.flatMap((split) => split.lines),
      ],
      {
        autoAlpha: 0,
        y: -30,
      }
    );

    // Animate to intermediate position that matches scroll progress
    const targetY = 1 - currentScrollProgress; // Interpolate between 30 and 0
    const targetOpacity = currentScrollProgress * 2;

    transitionTimeline.to(
      [
        ...splitTitleTextRef.current.flatMap((split) => split.words),
        ...splitDescriptionTextRef.current.flatMap((split) => split.lines),
      ],
      {
        autoAlpha: targetOpacity,
        y: targetY,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
      }
    );

    return scrollTimeline;
  };

  const createSplitTextInstances = () => {
    console.log("in createSplitTextInstances");
    const container = document.querySelector(
      "#carousel-text-card-container-mobile"
    );
    const titleElements = container?.querySelectorAll(
      ".text-card-title-carousel-services"
    );
    const descElements = container?.querySelectorAll(
      ".text-card-description-carousel-services, .text-card-sub-description-carousel-services, .text-card-index-carousel-services, .text-card-view-all-photos-carousel-services"
    );

    if (!titleElements || !descElements) return;

    try {
      // Create SplitText instances
      for (const titleEl of titleElements) {
        const split = new SplitText(titleEl, { type: "words" });
        splitTitleTextRef.current.push(split);
      }

      for (const descEl of descElements) {
        const split = new SplitText(descEl, { type: "lines" });
        splitDescriptionTextRef.current.push(split);
      }

      console.log(
        "finished creating split text instances should be 0, 4",
        splitTitleTextRef.current.length,
        splitDescriptionTextRef.current.length
      );

      return true;
    } catch (error) {
      console.error("Error creating SplitText:", error);
      return false;
    }
  };

  const createScrollTrigger = () => {
    cleanupSplitText();
    createSplitTextInstances();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#carousel-text-card-container-mobile",
        start: "top 99%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none reverse",
        markers: true,
        onUpdate: (self) => {
          scrollTriggerRef.current = self;
        },
      },
    });

    animateTextIn(tl);
  };

  const animateTextOut = (parentTimeline: gsap.core.Timeline) => {
    console.log("animateTextOut");

    // Animate text out (going up and fading)
    for (const title of splitTitleTextRef.current) {
      parentTimeline.to(
        title.words,
        {
          opacity: 0,
          y: -30, // Exit upward
          ease: "power2.in",
          duration: 0.3,
          stagger: 0.02,
        },
        "<"
      );
    }

    for (const description of splitDescriptionTextRef.current) {
      parentTimeline.to(
        description.lines,
        {
          opacity: 0,
          y: -30, // Exit upward
          ease: "power2.in",
          duration: 0.3,
          stagger: 0.02,
        },
        "<"
      );
    }
  };

  const animateTextInFromAbove = (parentTimeline: gsap.core.Timeline) => {
    cleanupSplitText();
    createSplitTextInstances();

    console.log("Creating new text timeline");
    console.log("title length", splitTitleTextRef.current.length);
    console.log("description length", splitDescriptionTextRef.current.length);

    console.log("React state title", currentServiceData.current.title);
    console.log(
      "React state description",
      currentServiceData.current.description
    );
    console.log(
      "React state subDescription",
      currentServiceData.current.subDescription
    );

    // First set the elements to be positioned above and invisible
    for (const title of splitTitleTextRef.current) {
      parentTimeline.set(title.words, {
        opacity: 0,
        y: -30, // Start from above
      });
    }

    for (const description of splitDescriptionTextRef.current) {
      parentTimeline.set(description.lines, {
        opacity: 0,
        y: -30, // Start from above
      });
    }

    // Then animate them down to normal position
    for (const title of splitTitleTextRef.current) {
      parentTimeline.to(
        title.words,
        {
          opacity: 1,
          y: (scrollTriggerRef.current?.progress || 0) * 30, // End at normal position
          ease: "power2.out",
          duration: 0.4,
          stagger: 0.05,
        },
        "+=0.1"
      );
    }

    for (const description of splitDescriptionTextRef.current) {
      parentTimeline.to(
        description.lines,
        {
          opacity: 1,
          y: (scrollTriggerRef.current?.progress || 0) * 30, // End at normal position
          ease: "power2.out",
          duration: 0.4,
          stagger: 0.08,
        },
        "<0.1"
      );
    }
  };

  const updateToScrollTrigger = () => {
    cleanupSplitText();
    createSplitTextInstances();
    console.log("animateTextIn");
    console.log("title length", splitTitleTextRef.current.length);
    console.log("description length", splitDescriptionTextRef.current.length);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#carousel-text-card-container-mobile",
        start: "top 99%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none reverse",
        markers: true,
        onUpdate: (self) => {
          scrollTriggerRef.current = self;
        },
        onEnter: () => {
          console.log("onEnter");
        },
        onEnterBack: () => {
          console.log("onEnterBack");
        },
        onLeave: () => {
          console.log("onLeave");
        },
      },
    });
    for (const title of splitTitleTextRef.current) {
      timeline.fromTo(
        title.words,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: (scrollTriggerRef.current?.progress || 0) * 30,
          ease: "power2.inOut",
          duration: 0.6,
          stagger: 0.05,
        },
        "<0.1"
      );
    }

    for (const description of splitDescriptionTextRef.current) {
      timeline.fromTo(
        description.lines,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: (scrollTriggerRef.current?.progress || 0) * 30,
          ease: "power2.inOut",
          duration: 0.6,
          stagger: 0.08,
        },
        "<0.1"
      );
    }

    // after aniamtion compelts kill
  };

  // Reusable function to animate text in
  const animateTextIn = (timeline: gsap.core.Timeline) => {
    console.log("animateTextIn");
    console.log("title length", splitTitleTextRef.current.length);
    console.log("description length", splitDescriptionTextRef.current.length);
    for (const title of splitTitleTextRef.current) {
      timeline.fromTo(
        title.words,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 0.6,
          stagger: 0.05,
        },
        "<0.1"
      );
    }

    for (const description of splitDescriptionTextRef.current) {
      timeline.fromTo(
        description.lines,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 0.6,
          stagger: 0.08,
        },
        "<0.1"
      );
    }
  };

  // Clean up function
  const cleanupSplitText = useCallback(() => {
    console.log(" in cleanupSplitText");
    splitTitleTextRef.current.forEach((split) => {
      try {
        split.revert();
      } catch (e) {
        console.warn("Error reverting SplitText:", e);
      }
    });
    splitDescriptionTextRef.current.forEach((split) => {
      try {
        split.revert();
      } catch (e) {
        console.warn("Error reverting SplitText:", e);
      }
    });
    splitTitleTextRef.current = [];
    splitDescriptionTextRef.current = [];
    console.log(
      "finished cleanupSplitText should be 0",
      splitTitleTextRef.current.length,
      splitDescriptionTextRef.current.length
    );
  }, []);

  useEffect(() => {
    return () => {
      if (masterScrollTriggerRef.current) {
        masterScrollTriggerRef.current.kill();
      }
      if (currentTimelineRef.current) {
        currentTimelineRef.current.kill();
      }
      cleanupSplitText();
    };
  }, [cleanupSplitText]);

  const handleImageTransition = useCallback(
    (direction: "left" | "right") => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setIsTextHidden(true);

      // Calculate new index immediately
      const newIndex =
        direction === "left"
          ? calculateImageIndex(currentIndex - 1)
          : calculateImageIndex(currentIndex + 1);

      const imageTl = gsap.timeline({
        onComplete: () => {
          // Clean up temporary elements
          if (direction === "right") {
            document.getElementById("temp-right-image")?.remove();
          } else {
            document.getElementById("temp-left-image")?.remove();
          }

          console.log("Updating index to:", newIndex);
          setCurrentIndex(newIndex);
          isAnimatingRef.current = false;
          cleanupSplitText();

          // Reset image positions
          gsap.set("#left-carousel-image-mobile", {
            x: 0,
            scale: 1,
            opacity: 1,
          });
          gsap.set("#center-carousel-image-mobile", { x: 0, scale: 1 });
          gsap.set("#right-carousel-image-mobile", {
            x: 0,
            scale: 1,
            opacity: 1,
          });

          // Fade main image back in
          gsap.to("#carousel-main-image-mobile", {
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
          });

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              console.log("DOM should be updated now, creating animations");

              // Create new text timeline and animate in from above
              const newTimeline = gsap.timeline({
                onComplete: () => {
                  console.log(
                    "Text in animation complete, creating scroll timeline"
                  );
                  // After the "coming down" animation completes,
                  // create the new scroll-controlled timeline
                  //createTextTimeline();
                  createSmoothTextTransition();
                  isAnimatingRef.current = false;
                  setIsTextHidden(false);
                },
              });

              //animateTextInFromAbove(newTimeline);
            });
          });
        },
      });

      // Animate text out first

      animateTextOut(imageTl);

      // Continue with image transition logic...
      if (direction === "right") {
        const nextNextIndex = calculateImageIndex(newIndex + 1);
        const nextNextImage = carouselImages[nextNextIndex];

        const newRightImage = document.createElement("div");
        newRightImage.id = "temp-right-image";
        newRightImage.className =
          "carousel-side-image-mobile absolute z-20 w-[30px] h-[50px]";
        newRightImage.innerHTML = `
          <img src="${nextNextImage.url}" alt="${nextNextImage.alt || "alt"}" 
               class="w-full h-full object-cover rounded-xl" />
        `;

        gsap.set(newRightImage, {
          x: OFF_SCREEN.RIGHT,
          scale: 0.1,
          opacity: 1,
        });
        document
          .querySelector(".relative.w-\\[200px\\]")
          ?.appendChild(newRightImage);

        imageTl
          .to(
            "#carousel-main-image-mobile",
            { opacity: 0, duration: 0.3, ease: "power2.inOut" },
            0.1
          )
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
        // Left direction logic (similar structure)
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

        gsap.set(newLeftImage, { x: OFF_SCREEN.LEFT, scale: 0.1, opacity: 1 });
        document
          .querySelector(".relative.w-\\[200px\\]")
          ?.appendChild(newLeftImage);

        imageTl
          .to(
            "#carousel-main-image-mobile",
            { opacity: 0, duration: 0.3, ease: "power2.inOut" },
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
    [currentIndex, calculateImageIndex, carouselImages]
  );

  const handleArrowClick = (direction: "left" | "right") => {
    handleImageTransition(direction);
    restartAutoRotation();
  };

  return (
    <>
      <div
        id="mobile-service-container"
        className="carousel-container-services-mobile"
      >
        <div className="relative flex flex-col w-full h-[60vh] z-20">
          <LazyImage
            id="carousel-main-image-mobile"
            src={carouselImages[currentIndex]?.url}
            alt={carouselImages[currentIndex]?.alt || "alt"}
            sizes="100vw"
            isFill={true}
            containerClassName="w-full h-full"
            imageClassName="carousel-main-image-mobile object-cover rounded-t-xl"
            skipIntersectionObserver={true}
          />
          <div className="absolute bottom-0 left-0 right-0 h-[100px] w-full flex justify-center items-center">
            <div className="relative w-[200px] h-[50px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-xl">
                <LeftCarouselImage
                  id="left-carousel-image-mobile"
                  imageURL={currentServiceData.prev.image}
                  imageAlt={currentServiceData.prev.alt || "alt"}
                  styles="carousel-side-image-mobile cursor-pointer w-[30px] h-[50px]"
                  onClick={() => handleArrowClick("left")}
                  isMobile={true}
                />
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-xl">
                <CenterCarouselImage
                  id="center-carousel-image-mobile"
                  imageURL={currentServiceData.current.image}
                  imageAlt={currentServiceData.current.alt || "alt"}
                  styles="carousel-side-image-mobile w-[36px] h-[60px]"
                  isMobile={true}
                />
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-xl">
                <RightCarouselImage
                  id="right-carousel-image-mobile"
                  imageURL={currentServiceData.next.image}
                  imageAlt={currentServiceData.next.alt || "alt"}
                  styles="carousel-side-image-mobile cursor-pointer w-[30px] h-[50px]"
                  onClick={() => handleArrowClick("right")}
                  isMobile={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Remove key props to prevent forced re-renders */}
        <div
          id="carousel-text-card-container-mobile"
          className="flex flex-col gap-5 w-full p-5"
        >
          <p
            id="carousel-image-index-mobile"
            className="text-card-index-carousel-services"
          >
            {currentIndex + 1} of {carouselImages.length} images
          </p>
          <CarouselTextContent
            currentImageData={currentServiceData.current}
            isTextHidden={isTextHidden}
          />
          <div className="flex justify-end">
            <p
              id="carousel-image-view-all-photos-mobile"
              className="text-card-view-all-photos-carousel-services"
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
