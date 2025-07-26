"use client";
import React from "react";
import Image from "next/image";
import LazyImage from "./LazyImage";

const BeforeAfterCard = ({
  id,
  className,
  beforeImage,
  afterImage,
  imageStyles,
  imageClassName,
  isMobile = false,
}: {
  id: string;
  className?: string;
  beforeImage: string;
  afterImage: string;
  imageStyles: string;
  imageClassName?: string;
  isMobile?: boolean;
}) => {
  return (
    <>
      <div id={id} className={`${isMobile ? "hidden" : className}`}>
        <div className="flex flex-col w-[50%] gap-5">
          <div className="flex flex-center flex-col w-full">
            <h1 className="text-card-about-title text-center">Before</h1>
          </div>
          <div
            id="before-image"
            className={`relative flex w-full ${imageStyles}`}
          >
            <LazyImage
              src={beforeImage}
              alt="before"
              sizes={`${isMobile ? "70vw" : "50vw"}`}
              isFill={true}
              containerClassName="w-full h-full"
              imageClassName={`${imageClassName}`}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex flex-center flex-col w-full">
            <h1 className="text-card-about-title text-center">After</h1>
          </div>
          <div
            id="after-image"
            className={`relative flex w-full ${imageStyles}`}
          >
            <LazyImage
              src={afterImage}
              alt="after"
              sizes={`${isMobile ? "70vw" : "50vw"}`}
              isFill={true}
              containerClassName="w-full h-full"
              imageClassName={`${imageClassName}`}
            />
          </div>
        </div>
      </div>
      <div className={`${isMobile ? className : "hidden"}`}>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-center flex-col w-full">
            <h1 className="text-card-about-title">Before</h1>
          </div>
          <div
            id="before-image"
            className={`relative flex w-full min-h-[300px] ${imageStyles}`}
          >
            <LazyImage
              src={beforeImage}
              alt="before"
              sizes={`${isMobile ? "70vw" : "50vw"}`}
              isFill={true}
              containerClassName="w-full h-full"
              imageClassName={`${imageClassName}`}
            />
          </div>
        </div>
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
          <div className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-full border border-slate-600">
            <svg
              className="w-5 h-5 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-center flex-col w-full">
            <h1 className="text-card-about-title">After</h1>
          </div>
          <div
            id="after-image"
            className={`relative flex w-full min-h-[300px] ${imageStyles}`}
          >
            <LazyImage
              src={afterImage}
              alt="after"
              sizes={`${isMobile ? "70vw" : "50vw"}`}
              isFill={true}
              containerClassName="w-full h-full"
              imageClassName={`${imageClassName}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterCard;
