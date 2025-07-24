"use client";
import React from "react";
import useIntersectionObserver from "./UseIntersectionHook";

const LazySection = ({
  children,
  className = "",
  threshold = 0.1,
  placeholder = null,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  placeholder?: React.ReactNode;
}) => {
  const { elementRef, isVisible } = useIntersectionObserver(threshold, "100px");

  console.log(`isVisible for section ${JSON.stringify(children)}`, isVisible);
  console.log(`elementRef for section ${JSON.stringify(children)}`, elementRef);

  return (
    <section ref={elementRef} className={className}>
      {isVisible ? children : placeholder || <div className="min-h-screen" />}
    </section>
  );
};

export default LazySection;
