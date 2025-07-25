"use client";
import React, { useRef, useEffect, useState } from "react";
import useIntersectionObserver from "./UseIntersectionHook";

const LazySection = ({
  children,
  className = "",
  threshold = 0.1,
  placeholder = null,
  reserveHeight = true,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  placeholder?: React.ReactNode;
  reserveHeight?: boolean;
}) => {
  const { elementRef, isVisible } = useIntersectionObserver(threshold, "100px");
  const [reservedHeight, setReservedHeight] = useState<number | null>(null);
  const [hasEverBeenVisible, setHasEverBeenVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Track if section has ever been visible
  useEffect(() => {
    if (isVisible && !hasEverBeenVisible) {
      setHasEverBeenVisible(true);
    }
  }, [isVisible, hasEverBeenVisible]);

  // Measure content height when it first renders
  useEffect(() => {
    if (isVisible && reserveHeight && contentRef.current && !reservedHeight) {
      // Small delay to ensure content is fully rendered
      const timer = setTimeout(() => {
        if (contentRef.current) {
          const height = contentRef.current.offsetHeight;
          setReservedHeight(height);
          console.log(`Reserved height for section: ${height}px`);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, reserveHeight, reservedHeight]);

  const containerStyle =
    reserveHeight && reservedHeight ? { minHeight: `${reservedHeight}px` } : {};

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className={className}
      style={containerStyle}
    >
      {isVisible || hasEverBeenVisible ? (
        <div ref={contentRef} style={{ display: isVisible ? "block" : "none" }}>
          {children}
        </div>
      ) : (
        placeholder || <div className="min-h-screen" />
      )}
    </section>
  );
};

export default LazySection;
