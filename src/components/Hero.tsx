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

const Hero = ({ heroData }: { heroData: any }) => {
  const { heroGallery, heroBackdrop } = heroData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroTextContainerRef = useRef<HTMLDivElement>(null);
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
    console.log("heroTextContainerRef.current", heroTextContainerRef.current);
    const heroH1 = heroTextContainerRef.current?.querySelector(
      "h1"
    ) as HTMLElement;
    const heroP = heroTextContainerRef.current?.querySelector(
      "p"
    ) as HTMLElement;

    console.log("heroH1", heroH1);
    console.log("heroP", heroP);

    const heroText = new SplitText(heroH1, {
      type: "lines",
    });
    const heroSubText = new SplitText(heroP, {
      type: "lines",
    });

    const heroLines = heroText.lines;
    const heroSubLines = heroSubText.lines;

    // initital anmation for hero text non scroll trigger

    const initalTl = gsap.timeline({
      delay: 0.05,
    });
    initalTl
      .from(heroLines, {
        opacity: 0,
        yPercent: 100,
        duration: 0.2,
        stagger: 0.05,
        delay: 0.2,
      })
      .from(heroSubLines, {
        opacity: 0,
        yPercent: 100,
        duration: 0.2,
        stagger: 0.05,
        delay: 0.2,
      });
    gsap.from("#left-hero-arrow", {
      opacity: 0,
      duration: 0.3,
      delay: 1.2,
      xPercent: -100,
    });
    gsap.from("#right-hero-arrow", {
      opacity: 0,
      duration: 0.3,
      delay: 1.2,
      xPercent: 100,
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroTextContainerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    scrollTl
      .fromTo(
        heroLines,
        {
          opacity: 1,
          yPercent: 0,
        },
        {
          opacity: 0,
          yPercent: -100,
          duration: 0.3,
          ease: "power2.inOut",
          stagger: 0.05,
        }
      )
      .fromTo(
        heroSubLines,
        {
          opacity: 1,
          yPercent: 0,
        },
        {
          opacity: 0,
          yPercent: -100,
          duration: 0.3,
          ease: "power2.inOut",
          stagger: 0.05,
        },
        "-=0.1"
      );

    gsap.fromTo(
      "#left-hero-arrow",
      {
        opacity: 1,
        xPercent: 0,
      },
      {
        scrollTrigger: {
          trigger: "#hero-container",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
        xPercent: -100,
      }
    );

    gsap.fromTo(
      "#right-hero-arrow",
      {
        opacity: 1,
        xPercent: 0,
      },
      {
        scrollTrigger: {
          trigger: "#hero-container",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
        xPercent: 100,
      }
    );
  }, []);

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
              ref={heroTextContainerRef}
              className="flex flex-col gap-3 justify-center items-center p-10 bg-gray-800/40 rounded-xl"
            >
              <h1 className="text-[28px] sm:text-[34px] md:text-[50px] font-montserrat font-bold text-white">
                Craftsmanship That{" "}
                <span className="text-primary-400">Soars</span> Above the Rest
              </h1>
              <p className="text-[16px] font-montserrat font-medium text-white">
                From concept to completion,{" "}
                <span className="text-primary-400">Golden Eagle</span> delivers
                exceptional craftsmanship that stands the test of time.
              </p>
            </div>
          </div>
          <LeftImageArrow
            direction="left"
            onClick={() => handleArrowClick("left")}
            position="top-[90%] left-[35%] z-10"
          />
          <RightImageArrow
            direction="right"
            onClick={() => handleArrowClick("right")}
            position="top-[90%] right-[35%] z-10"
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
              <div
                ref={heroTextContainerRef}
                className="flex flex-col h-full gap-3 flex-center p-10 rounded-xl text-start"
              >
                <h1 className="text-[28px] md:text-[32px] lg:text-[36px] w-full xl:text-[50px] font-montserrat font-bold text-white">
                  Craftsmanship That{" "}
                  <span className="text-primary-400">Soars</span> Above the Rest
                </h1>
                <p className="text-[16px] w-full font-montserrat font-medium text-white">
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
