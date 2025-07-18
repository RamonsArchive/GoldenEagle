// Navbar.tsx - Main component that manages both navbars
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { NavLinkType } from "@/lib/globalTypes";
import { useNavbar } from "@/app/contexts/NavbarContext";
import NavbarMenu from "./NavbarMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

const Navbar = () => {
  const { isMobile, navLinks } = useNavbar();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Refs for both navbars
  const defaultNavLinksRef = useRef<HTMLDivElement>(null);
  const scrollNavLinksRef = useRef<HTMLDivElement>(null);
  const splitTextRefs = useRef<{
    default: SplitText | null;
    scroll: SplitText | null;
  }>({
    default: null,
    scroll: null,
  });

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 3.25 * 16; // 52px
      const shouldBeScrolled = scrollPosition > navbarHeight;

      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
        setHasAnimated(false); // Reset animation flag when switching states
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  // Animation for default navbar
  useGSAP(() => {
    if (isMobile || isScrolled || !defaultNavLinksRef.current || hasAnimated)
      return;

    const navElements =
      defaultNavLinksRef.current.querySelectorAll(".nav-link");
    if (navElements.length === 0) return;

    // Clean up previous instance
    if (splitTextRefs.current.default) {
      splitTextRefs.current.default.revert();
    }

    // Create and animate
    splitTextRefs.current.default = SplitText.create(navElements, {
      type: "lines",
    });

    gsap.from(splitTextRefs.current.default.lines, {
      opacity: 0,
      y: -100,
      duration: 0.2,
      delay: 0.3,
      ease: "power2.out",
      stagger: 0.1,
      onComplete: () => setHasAnimated(true),
    });
  }, [navLinks.length, isMobile, isScrolled, hasAnimated]);

  // Animation for scroll navbar
  useGSAP(() => {
    if (isMobile || !isScrolled || !scrollNavLinksRef.current || hasAnimated)
      return;

    // Small delay to ensure navbar is visible
    const timer = setTimeout(() => {
      const navElements =
        scrollNavLinksRef.current?.querySelectorAll(".nav-link");
      if (!navElements || navElements.length === 0) return;

      // Clean up previous instance
      if (splitTextRefs.current.scroll) {
        splitTextRefs.current.scroll.revert();
      }

      // Create and animate
      splitTextRefs.current.scroll = SplitText.create(navElements, {
        type: "lines",
      });

      gsap.from(splitTextRefs.current.scroll.lines, {
        opacity: 0,
        y: -100,
        duration: 0.2,
        delay: 0.1, // Shorter delay for scroll navbar
        ease: "power2.out",
        stagger: 0.1,
        onComplete: () => setHasAnimated(true),
      });
    }, 0); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, [navLinks.length, isMobile, isScrolled, hasAnimated]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (splitTextRefs.current.default) {
        splitTextRefs.current.default.revert();
      }
      if (splitTextRefs.current.scroll) {
        splitTextRefs.current.scroll.revert();
      }
    };
  }, []);

  const renderNavLinks = (ref: React.RefObject<HTMLDivElement>) => (
    <div ref={ref} className="flex items-center gap-3 md:gap-8 flex-row">
      {navLinks.map((link: NavLinkType) => (
        <p className="nav-link" key={link.id}>
          {link.title}
        </p>
      ))}
    </div>
  );

  const renderLogo = () => (
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
  );

  return (
    <>
      {/* Default Navbar */}
      <div
        className={`flex w-full justify-between items-center px-3 xs:px-5 py-3 h-[3.25rem] border-b-[0.25px] border-gray-100/30 bg-none transition-all duration-300 ease-in-out ${
          isScrolled
            ? "opacity-0 -translate-y-full"
            : "opacity-100 translate-y-0 bg-background/95 backdrop-blur-sm"
        }`}
      >
        {renderLogo()}
        {isMobile ? (
          <NavbarMenu />
        ) : (
          renderNavLinks(defaultNavLinksRef as React.RefObject<HTMLDivElement>)
        )}
      </div>

      {/* Scroll Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex w-full justify-between items-center px-3 xs:px-5 py-3 h-[3.25rem] border-b-[0.25px] border-gray-100/30 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {renderLogo()}
        {isMobile ? (
          <NavbarMenu />
        ) : (
          renderNavLinks(scrollNavLinksRef as React.RefObject<HTMLDivElement>)
        )}
      </div>
    </>
  );
};

export default Navbar;
