import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (threshold = 0.1, rootMargin = "50px") => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<Element>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Responsive to current visibility
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
};

export default useIntersectionObserver;
