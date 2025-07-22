"use client";
import React from "react";
import Image from "next/image";

const BeforeAfterCard = ({
  id,
  beforeImage,
  afterImage,
  imageStyles,
  isMobile = false,
}: {
  id: string;
  beforeImage: string;
  afterImage: string;
  imageStyles: string;
  isMobile?: boolean;
}) => {
  return (
    <>
      <div id={id} className={`${isMobile ? "hidden" : "before-after-card"}`}>
        <div className="flex flex-col w-[50%] gap-5">
          <div className="flex flex-center flex-col w-full">
            <h1 className="text-card-title text-center">Before</h1>
          </div>
          <div
            id="before-image"
            className={`relative flex w-full ${imageStyles}`}
          >
            <Image
              src={beforeImage}
              alt="before"
              fill
              className="object-cover object-top rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex flex-center flex-col w-full">
            <h1 className="text-card-title text-center">After</h1>
          </div>
          <div
            id="after-image"
            className={`relative flex w-full ${imageStyles}`}
          >
            <Image
              src={afterImage}
              alt="after"
              fill
              className="object-cover object-top rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className={`${isMobile ? "before-after-card-mobile" : "hidden"}`}>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-center flex-col w-full">
            <h1 className="text-card-title">Before</h1>
          </div>
          <div className={`relative flex w-full min-h-[300px] ${imageStyles}`}>
            <Image
              src={beforeImage}
              alt="before"
              fill
              className="object-cover object-top rounded-xl shadow-lg"
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
            <h1 className="text-card-title">After</h1>
          </div>
          <div className={`relative flex w-full min-h-[300px] ${imageStyles}`}>
            <Image
              src={afterImage}
              alt="after"
              fill
              className="object-cover object-top rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterCard;
