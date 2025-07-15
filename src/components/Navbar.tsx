"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NavLinkType } from "@/lib/globalTypes";
import { useNavbar } from "@/app/contexts/NavbarContext";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const { isMobile, navLinks } = useNavbar();

  console.log(isMobile);
  console.log(navLinks);

  return (
    <div className="flex justify-between items-center px-3 xs:px-5 py-3 h-[3.25rem] border-b-[0.25px] border-gray-100/30">
      <div className="flex justify-betweenw-full">
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
          <div className="flex items-center gap-2 flex-row">
            {navLinks.map((link: NavLinkType) => (
              <p className="nav-link" key={link.id}>
                {link.title}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
