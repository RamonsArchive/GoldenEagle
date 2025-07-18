"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu } from "lucide-react";
import { useNavbar } from "@/app/contexts/NavbarContext";
import ToggleClose from "./ToggleClose";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

const NavbarMenu = () => {
  const { isMobile, navLinks } = useNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Use useGSAP for all animations
  useGSAP(() => {
    if (isMenuOpen && menuRef.current && shouldRender) {
      // Set initial state immediately
      // Animate in
      gsap.fromTo(
        menuRef.current,
        {
          xPercent: 100,
          opacity: 0,
          ease: "power2.out",
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.in",
        }
      );
      const splitNavLinks = SplitText.create(".nav-link-mobile", {
        type: "lines",
      });

      gsap.from(splitNavLinks.lines, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        delay: 0.3,
        ease: "power2.out",
        stagger: 0.1,
      });
    }
  }, [shouldRender]);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      setShouldRender(true);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      if (menuRef.current) {
        const tl = gsap.timeline({
          onComplete: () => {
            setShouldRender(false);
          },
        });

        const splitNavLinks = SplitText.create(".nav-link-mobile", {
          type: "lines",
        });

        tl.to(splitNavLinks.lines, {
          opacity: 0,
          y: -10,
          duration: 0.1,
          ease: "power2.in",
          stagger: 0.05,
        }).to(menuRef.current, {
          xPercent: 100,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      } else {
        setShouldRender(false);
      }
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const MenuPortal = () => {
    if (!shouldRender) return null;

    return createPortal(
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-[60vw] h-[100vh] bg-slate-700/90 backdrop-blur-sm z-[999]"
      >
        <div className="flex flex-col gap-4 h-full">
          <div className="flex justify-end p-3">
            <ToggleClose closeFunction={() => setIsMenuOpen(false)} />
          </div>
          <div className="flex items-center justify-center flex-col gap-5 p-5">
            {navLinks.map((link) => (
              <p className="nav-link-mobile" key={link.id}>
                {link.title}
              </p>
            ))}
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <div className="flex items-center justify-end cursor-pointer">
        <Menu
          className="w-6 h-6 text-primary-400"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      <MenuPortal />
    </>
  );
};

export default NavbarMenu;
