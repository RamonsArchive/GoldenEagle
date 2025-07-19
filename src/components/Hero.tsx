"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import { HeroImage } from "@/lib/globalTypes";
import { ChevronRight, ChevronLeft } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ heroData }: { heroData: any }) => {
  const { heroGallery, heroBackdrop } = heroData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroTextContainerRef = useRef<HTMLDivElement>(null);

  console.log(heroData);

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

    console.log("heroText", heroText);
    console.log("heroSubText", heroSubText);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroTextContainerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });

    tl.from(heroText.lines, {
      opacity: 0,
      y: -100,
      duration: 0.3,
      delay: 0.3,
      ease: "power2.inOut",
      stagger: 0.1,
    });

    tl.from(heroSubText.lines, {
      opacity: 0,
      y: -100,
      duration: 0.3,
      delay: 0.3,
      ease: "power2.inOut",
      stagger: 0.1,
    });
  }, []);

  const calculateImageIndex = (index: number) => {
    return index % heroGallery.length;
  };

  return (
    <div className="flex flex-col w-full h-[calc(100vh-(3.25rem))]">
      <div className="xs:hidden flex flex-col w-full h-full">
        <div className="relative flex w-full h-[60%] overflow-hidden">
          {/* main image with text */}
          <Image
            src={heroGallery[calculateImageIndex(currentImageIndex)].url}
            alt={`Hero Image ${currentImageIndex + 1}`}
            fill
            className="object-cover object-top"
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
          <div className="absolute top-[90%] left-[35%]">
            <div className="flex items-center justify-center p-1 cursor-pointer rounded-full bg-gray-800/40 hover:bg-gray-800/60 active:scale-95 transition-all duration-300">
              <ChevronLeft className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute top-[90%] right-[35%]">
            <div className="flex items-center justify-center p-1 cursor-pointer rounded-full bg-gray-800/40 hover:bg-gray-800/60 active:scale-95 transition-all duration-300">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </div>
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
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-full h-full justify-center items-center">
              <Image
                src={
                  heroGallery[calculateImageIndex(currentImageIndex + 2)].url
                }
                alt={`Hero Image ${currentImageIndex + 2}`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
      {/* desktop */}
      {/* <div className="hidden sm:block">
        <div className="relative flex w-full h-full">
          <Image
            src={heroBackdrop.url}
            alt={heroBackdrop.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute x-translate-x-1/2 w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-[28px] sm:text-[34px] md:text-[50px] font-montserrat font-bold text-white">
              Craftsmanship That <span className="text-primary-400">Soars</span>{" "}
              Above the Rest
            </h1>
            <p className="text-[16px] font-montserrat font-medium text-white">
              From concept to completion, Golden Eagle delivers exceptional
              craftsmanship that stands the test of time.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
