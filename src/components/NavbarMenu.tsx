import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "@/constants";
import { NavLinkType } from "@/lib/globalTypes";
import { Menu } from "lucide-react";
import { useNavbar } from "@/app/contexts/NavbarContext";
import ToggleClose from "./ToggleClose";

const NavbarMenu = () => {
  const { isMobile, navLinks } = useNavbar();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <Menu
        className="flex justify-end w-4 h-4 bg-white"
        onClick={() => setIsMenuOpen(true)}
      />
      <div
        ref={menuRef}
        className={`fixed p-5 top-0 right-0 w-[40vw] h-full bg-slate-700/50 backdrop-blur-sm z-50  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <ToggleClose closeFunction={() => setIsMenuOpen(false)} />
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map((link: NavLinkType) => (
              <p className="nav-link" key={link.id}>
                {link.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
