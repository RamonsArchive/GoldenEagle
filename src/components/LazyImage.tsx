"use client";
import React, { useState } from "react";
import Image from "next/image";
import useIntersectionObserver from "./UseIntersectionHook";

const LazyImage = ({
  src,
  alt,
  isFill = false,
  sizes,
  width,
  height,
  containerClassName = "",
  imageClassName = "",
  priority = false,
  aspectRatio,
  skipIntersectionObserver = false, // New prop for backdrop images
  ...props
}: {
  src: string;
  alt: string;
  isFill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  containerClassName?: string;
  imageClassName?: string;
  priority?: boolean;
  aspectRatio?: string;
  skipIntersectionObserver?: boolean;
  [key: string]: any;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver(0.01, "100px");

  // For backdrop images, always consider them visible if skipIntersectionObserver is true
  const shouldShowImage = skipIntersectionObserver || isVisible || priority;

  return (
    <div
      ref={
        skipIntersectionObserver
          ? null
          : (elementRef as React.RefObject<HTMLDivElement>)
      }
      className={`${
        isFill ? "absolute inset-0" : "relative"
      } ${containerClassName}`}
      style={{ aspectRatio: aspectRatio || "auto" }}
    >
      {/* Placeholder skeleton - only show for non-fill images */}
      {!isLoaded && !isFill && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-xl z-[110]" />
      )}

      {/* Load image when should show */}
      {shouldShowImage && (
        <Image
          src={src}
          alt={alt}
          sizes={isFill ? sizes : undefined}
          width={isFill ? undefined : width}
          height={isFill ? undefined : height}
          fill={isFill}
          className={`transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${imageClassName}`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          {...props}
        />
      )}
    </div>
  );
};
export default LazyImage;
