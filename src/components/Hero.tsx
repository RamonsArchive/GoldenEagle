"use client";
import React from "react";
import Image from "next/image";

const Hero = ({ heroData }: { heroData: any }) => {
  const { heroGallery, heroBackdrop } = heroData;
  console.log(heroData);
  return (
    <div className="flex flex-col w-full h-[calc(100vh-(3rem))]">
      <div className="relative flex w-full">
        <Image
          src={heroBackdrop.url}
          alt={heroBackdrop.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute x-translate-x-1/2 w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-[50px] font-montserrat font-bold text-white">
            Craftsmanship That <span className="text-primary-400">Soars</span>{" "}
            Above the Rest
          </h1>
          <p className="text-[16px] font-montserrat font-medium text-white">
            From concept to completion, Golden Eagle delivers exceptional
            craftsmanship that stands the test of time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
