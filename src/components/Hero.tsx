"use client";
import React, { use, useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import { HeroImage } from "@/lib/globalTypes";
import { ChevronRight, ChevronLeft } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import LeftImageArrow from "./LeftImageArrow";
import RightImageArrow from "./RightImageArrow";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = ({ heroData }: { heroData: any }) => {
  const { heroGallery, heroBackdrop } = heroData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);

  console.log(heroData);

  useEffect(() => {
    const startAutoRotation = () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }

      autoRotateRef.current = setInterval(() => {
        if (!isAnimatingRef.current) {
          handleImageTransition("right");
        }
      }, 3000);
    };

    const timer = setTimeout(startAutoRotation, 2000);

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
      if (timer) {
        clearTimeout(timer);
      }
    };
  });

  const restartAutoRotation = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = setInterval(() => {
        if (!isAnimatingRef.current) {
          handleImageTransition("right");
        }
      }, 3000);
    }
  };

  const handleArrowClick = (direction: "left" | "right") => {
    handleImageTransition(direction);
    restartAutoRotation();
  };

  const handleImageTransition = (direction: "left" | "right") => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    // Fade out all images
    gsap.to(".hero-image", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        // Update image index
        if (direction === "left") {
          setCurrentImageIndex(calculateImageIndex(currentImageIndex - 1));
        } else {
          setCurrentImageIndex(calculateImageIndex(currentImageIndex + 1));
        }

        // Fade in new images after a brief delay
        gsap.to(".hero-image", {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
          delay: 0.1,
          onComplete: () => {
            isAnimatingRef.current = false;
          },
        });
      },
    });
  };

  // defualt animations for hero section
  useGSAP(() => {
    gsap.set([".hero-title", ".hero-subtitle"], {
      opacity: 1,
    });

    const heroText = new SplitText(".hero-title", {
      type: "lines",
    });
    const heroSubText = new SplitText(".hero-subtitle", {
      type: "lines",
    });

    console.log("heroText", heroText);
    console.log("heroSubText", heroSubText);

    const heroLines = heroText.lines;
    const heroSubLines = heroSubText.lines;

    // Set initial state on the LINES (not parents)
    gsap.set(heroLines, {
      opacity: 0,
      yPercent: -100,
    });
    gsap.set(heroSubLines, {
      opacity: 0,
      yPercent: -100,
    });

    // Initial animation timeline

    const createScrollTriggers = () => {
      if (scrollTriggersCreated) return;

      scrollTriggersCreated = true;

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-text-container",
          start: "top top",
          end: "bottom 20%",
          scrub: 1,
          markers: true,
        },
      });

      scrollTl
        .to(heroLines, {
          opacity: 0,
          yPercent: -100,
          stagger: 0.05,
        })
        .to(
          heroSubLines,
          {
            opacity: 0,
            yPercent: -100,
            stagger: 0.05,
          },
          "-=0.1"
        );
    };
    const masterTl = gsap.timeline({ onComplete: createScrollTriggers });

    let scrollTriggersCreated = false;

    masterTl
      .to(heroLines, {
        opacity: 1,
        yPercent: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      })
      .to(
        heroSubLines,
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.1"
      );

    // // edge case for when user scrolls before initial animation completes
    // ScrollTrigger.create({
    //   trigger: "#hero-text-container",
    //   start: "top top",
    //   end: "bottom 20%",
    //   onEnter: () => {
    //     if (masterTl.progress() < 1) {
    //       // User scrolled before initial completed
    //       masterTl.kill(); // Kill initial animation

    //       // Set completed state immediately
    //       gsap.set(heroLines, { opacity: 1, yPercent: 0 });
    //       gsap.set(heroSubLines, { opacity: 1, yPercent: 0 });

    //       // Create scroll triggers now
    //       createScrollTriggers();

    //       // Force a small delay then refresh to apply current scroll position
    //       gsap.delayedCall(0.01, () => {
    //         ScrollTrigger.refresh();
    //       });
    //     }
    //   },
    // });

    // Arrow animations

    let arrowScrollTriggersCreated = false;
    const createArrowScrollTriggers = () => {
      if (arrowScrollTriggersCreated) return;

      arrowScrollTriggersCreated = true;

      const arrowScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-container",
          start: "top top",
          end: "bottom 20%",
          scrub: 1,
          markers: true,
        },
      });

      arrowScrollTl.to(["#left-hero-arrow", "#right-hero-arrow"], {
        opacity: 0,
        xPercent: (i) => (i === 0 ? -100 : 100),
      });
    };

    gsap.set(["#left-hero-arrow", "#right-hero-arrow"], {
      opacity: 0,
      xPercent: (i) => (i === 0 ? -100 : 100),
    });

    // Initial arrow animation
    gsap.to(["#left-hero-arrow", "#right-hero-arrow"], {
      opacity: 1,
      duration: 0.4,
      delay: 1.3,
      ease: "power2.inOut",
      xPercent: 0,
      onComplete: createArrowScrollTriggers,
    });
  }, []); // Correct scope placement

  const calculateImageIndex = (index: number) => {
    return (index + heroGallery.length) % heroGallery.length;
  };

  return (
    <div
      id="hero-container"
      className="flex flex-col w-full h-[calc(100vh-(3.25rem))]"
    >
      <div className="flex flex-col w-full h-full sm:hidden ">
        <div className="relative flex w-full h-[60%] overflow-hidden">
          {/* main image with text */}
          <Image
            src={heroGallery[calculateImageIndex(currentImageIndex)].url}
            alt={`Hero Image ${currentImageIndex}`}
            fill
            className="hero-image"
          />
          <div className="absolute x-translate-x-1/2 w-full h-full flex flex-col justify-center items-center">
            <div
              id="hero-text-container"
              className="flex flex-col gap-3 justify-center items-center p-10 bg-gray-800/40 rounded-xl"
            >
              <h1 className="hero-title text-[28px] font-montserrat font-bold text-white">
                Craftsmanship That{" "}
                <span className="text-primary-400">Soars</span> Above the Rest
              </h1>
              <p className="hero-subtitle">
                From concept to completion,{" "}
                <span className="text-primary-400">Golden Eagle</span> delivers
                exceptional craftsmanship that stands the test of time.
              </p>
            </div>
          </div>
          <LeftImageArrow
            direction="left"
            onClick={() => handleArrowClick("left")}
            position="opacity-0 top-[90%] left-[35%] z-10"
          />
          <RightImageArrow
            direction="right"
            onClick={() => handleArrowClick("right")}
            position="opacity-0 top-[90%] right-[35%] z-10"
          />
        </div>

        <div className="flex flex-1">
          <div className="flex w-full flex-row justify-center items-center">
            <div className="relative w-full h-full justify-center items-center">
              <Image
                src={
                  heroGallery[calculateImageIndex(currentImageIndex + 1)].url
                }
                alt={`Hero Image ${currentImageIndex + 1}`}
                fill
                className="hero-image"
              />
            </div>
            <div className="relative w-full h-full justify-center items-center">
              <Image
                src={
                  heroGallery[calculateImageIndex(currentImageIndex + 2)].url
                }
                alt={`Hero Image ${currentImageIndex + 2}`}
                fill
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden sm:flex flex-row h-full w-full">
        <div className="flex flex-col h-full w-[50%]">
          <div className="relative w-full h-[40%]">
            <Image
              src={heroBackdrop.url}
              alt={heroBackdrop.alt}
              fill
              className="object-cover object-top opacity-30"
            />
            <div className="absolute x-translate-x-1/2 w-full h-full flex flex-col flex-center">
              <div className="flex flex-col h-full gap-3 flex-center p-10 rounded-xl text-start">
                <h1 className="hero-title">
                  Craftsmanship That{" "}
                  <span className="text-primary-400">Soars</span> Above the Rest
                </h1>
                <p className="hero-subtitle">
                  From concept to completion,{" "}
                  <span className="text-primary-400">Golden Eagle</span>{" "}
                  delivers exceptional craftsmanship that stands the test of
                  time.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex w-full h-full justify-center items-center">
              <div className="relative w-full h-full justify-center items-center">
                <Image
                  src={
                    heroGallery[calculateImageIndex(currentImageIndex + 1)].url
                  }
                  alt={`Hero Image ${currentImageIndex + 1}`}
                  fill
                  className="hero-image"
                />
              </div>
              <div className="relative w-full h-full justify-center items-center">
                <Image
                  src={
                    heroGallery[calculateImageIndex(currentImageIndex + 2)].url
                  }
                  alt={`Hero Image ${currentImageIndex + 2}`}
                  fill
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex w-full h-full justify-center items-center">
            <div className="relative w-full h-full justify-center items-center">
              <Image
                src={heroGallery[calculateImageIndex(currentImageIndex)].url}
                alt={`Hero Image ${currentImageIndex}`}
                fill
                className="hero-image"
              />
              <LeftImageArrow
                direction="left"
                onClick={() => handleArrowClick("left")}
                position="top-[50%] left-[5%] z-10"
              />
              <RightImageArrow
                direction="right"
                onClick={() => handleArrowClick("right")}
                position="top-[50%] right-[5%] z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
