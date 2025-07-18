// NavbarScroll.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { NavLinkType } from "@/lib/globalTypes";
import { useNavbar } from "@/app/contexts/NavbarContext";
import NavbarMenu from "./NavbarMenu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const NavbarScroll = () => {
  const { isMobile, navLinks } = useNavbar();
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const splitTextRef = useRef<SplitText | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("scrollPosition", scrollPosition);
      const navbarHeight = 3.25 * 16;
      const shouldBeScrolled = scrollPosition > navbarHeight;

      setIsScrolled(shouldBeScrolled);

      // Trigger animation when navbar becomes visible
      if (shouldBeScrolled && !isVisible) {
        setIsVisible(true);
      } else if (!shouldBeScrolled && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  useGSAP(() => {
    console.log("entered useGSAP");
    console.log("isMobile", isMobile);
    console.log("navLinksRef.current", navLinksRef.current);
    console.log("isVisible", isVisible);
    if (isMobile || !navLinksRef.current || !isVisible) return;

    const navElements = navLinksRef.current.querySelectorAll(".nav-link");
    console.log("Found nav elements:", navElements.length);

    if (navElements.length === 0) {
      console.warn("No .nav-link elements found!");
      return;
    }

    // Clean up previous SplitText instance
    if (splitTextRef.current) {
      splitTextRef.current.revert();
    }

    console.log("should be animating");
    // Create new SplitText instance
    splitTextRef.current = SplitText.create(navElements, {
      type: "lines",
    });

    // Reset elements to initial state
    gsap.set(splitTextRef.current.lines, {
      opacity: 0,
      y: -100,
    });

    // Animate in
    gsap.to(splitTextRef.current.lines, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      delay: 0.3,
      ease: "power2.inOut",
      stagger: 0.1,
    });
    console.log("exited useGSAP ");
  }, [navLinks.length, isMobile, isVisible]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-1 flex w-full justify-between items-center px-3 xs:px-5 py-3 h-[3.25rem] border-b-[0.25px] border-gray-100/30 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
        isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="relative w-[8rem] h-[1.5rem] xs:w-[10rem] xs:h-[2rem] mb-1">
        {/* Eagle icon positioned behind the text logo */}
        <div className="w-[2.5rem] h-[1.25rem] xs:w-[3rem] xs:h-[1.5rem] absolute right-[65px] top-[-0.2rem] z-10">
          <Image
            src="/assets/Logos/goldenEagleIcon.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-full object-contain"
            style={{ zIndex: 10 }}
          />
        </div>
        {/* Text logo positioned in front */}
        <Image
          src="/assets/Logos/logoText.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-full object-contain relative z-2"
          style={{ zIndex: 20 }}
        />
      </div>
      {isMobile ? (
        <NavbarMenu />
      ) : (
        <div
          ref={navLinksRef}
          className="flex items-center gap-3 md:gap-8 flex-row"
        >
          {navLinks.map((link: NavLinkType) => (
            <p className="nav-link" key={link.id}>
              {link.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarScroll;
