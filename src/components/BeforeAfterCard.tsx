"use client";
import React from "react";
import Image from "next/image";

const BeforeAfterCard = ({
  id,
  beforeImage,
  afterImage,
  imageStyles,
}: {
  id: string;
  beforeImage: string;
  afterImage: string;
  imageStyles: string;
}) => {
  return (
    <div
      id={id}
      className="flex flex-row w-full p-10 gap-5 bg-slate-900/70 rounded-xl shadow-lg"
    >
      <div className="flex flex-col w-[50%] gap-5">
        <div className="flex flex-center flex-col w-full">
          <h1 className="text-card-title text-center">Before</h1>
        </div>
        <div className={`relative flex w-full ${imageStyles}`}>
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
        <div className={`relative flex w-full ${imageStyles}`}>
          <Image
            src={afterImage}
            alt="after"
            fill
            className="object-cover object-top rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterCard;
