"use client";
import { useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom hook that returns both the component and animation functions
const useCarouselText = (currentImageData: any, scrollTriggerRef: any) => {
  const splitTitleTextRef = useRef<SplitText[]>([]);
  const splitDescriptionTextRef = useRef<SplitText[]>([]);

  const createSplitTextInstances = () => {
    const container = document.querySelector("#carousel-text-content");
    const titleElements = container?.querySelectorAll(
      ".text-card-title-carousel-services"
    );
    const descElements = container?.querySelectorAll(
      ".text-card-description-carousel-services, .text-card-sub-description-carousel-services"
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
        trigger: "#carousel-image-description-mobile",
        start: "top 99%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none reverse",

        onUpdate: (self) => {
          scrollTriggerRef.current = self;
        },
      },
    });

    animateTextIn(tl);
  };

  const animateTextOut = (timeline: gsap.core.Timeline) => {
    for (const title of splitTitleTextRef.current) {
      timeline.to(
        title.words,
        {
          opacity: 0,
          y: -20,
          ease: "power2.inOut",
          duration: 0.4,
          stagger: 0.02,
        },
        "<"
      );
    }

    for (const description of splitDescriptionTextRef.current) {
      timeline.to(
        description.lines,
        {
          opacity: 0,
          y: -20,
          ease: "power2.inOut",
          duration: 0.4,
          stagger: 0.02,
        },
        "<"
      );
    }
  };

  // Reusable function to animate text in
  const animateTextIn = (timeline: gsap.core.Timeline) => {
    for (const title of splitTitleTextRef.current) {
      timeline.to(
        title.words,
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
      timeline.to(
        description.lines,
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
  }, []);

  // Create SplitText instances
  const createAndAnimateSplitText = useCallback(() => {
    cleanupSplitText();

    if (!createSplitTextInstances()) {
      return;
    }

    // Get current scroll progress and animate to that state immediately
    const progress = scrollTriggerRef.current?.progress || 0;

    // Set initial state based on scroll progress (no timeline needed)
    for (const split of splitTitleTextRef.current) {
      gsap.set(split.words, {
        opacity: progress,
        y: 30 * (1 - progress),
      });
    }

    for (const split of splitDescriptionTextRef.current) {
      gsap.set(split.lines, {
        opacity: progress,
        y: 30 * (1 - progress),
      });
    }

    // Now connect to the existing ScrollTrigger's progress
    const updateOnScroll = () => {
      const currentProgress = scrollTriggerRef.current?.progress || 0;

      for (const split of splitTitleTextRef.current) {
        gsap.to(split.words, {
          opacity: currentProgress,
          y: 30 * (1 - currentProgress),
          duration: 0.1,
          ease: "none",
        });
      }

      for (const split of splitDescriptionTextRef.current) {
        gsap.to(split.lines, {
          opacity: currentProgress,
          y: 30 * (1 - currentProgress),
          duration: 0.1,
          ease: "none",
        });
      }
    };

    // Hook into the main ScrollTrigger
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.vars.onUpdate = updateOnScroll;
      scrollTriggerRef.current.refresh();
    }
  }, [cleanupSplitText, scrollTriggerRef]);

  // ... rest of the SplitText logic

  const TextComponent = useMemo(
    () => (
      <div
        id="carousel-image-description-mobile"
        className="flex flex-col gap-3"
      >
        <h1 className="text-card-title-carousel-services">
          {currentImageData.title || "loading..."}
        </h1>
        <h2 className="text-card-description-carousel-services">
          {currentImageData.description || "loading..."}
        </h2>
        <p className="text-card-sub-description-carousel-services">
          {currentImageData.subDescription || "loading..."}
        </p>
      </div>
    ),
    [currentImageData]
  );

  return {
    TextComponent,
    animateTextOut,
    animateTextIn,
    splitTitleTextRef,
    splitDescriptionTextRef,
    createScrollTrigger,
  };
};

export default useCarouselText;
