import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (threshold = 0.1, rootMargin = "50px") => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true); // Only trigger once
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasTriggered]);

  return { elementRef, isVisible, hasTriggered };
};

export default useIntersectionObserver;
