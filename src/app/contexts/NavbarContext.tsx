"use client";
import React, { useEffect, useState, useContext, createContext } from "react";
import { NavLinkType } from "@/lib/globalTypes";
import { navLinks } from "@/constants";

// Define the context type
interface NavbarContextType {
  isMobile: boolean;
  navLinks: NavLinkType[];
  screenWidth: number;
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

// Create context with default values
const NavbarContext = createContext<NavbarContextType>({
  isMobile: false,
  navLinks: [],
  screenWidth: 0,
  scrollToSection: () => {},
  activeSection: "home",
  setActiveSection: () => {},
});

// Context Provider Component
const NavbarContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      console.log("resizing to", window.innerWidth);
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth < 640;

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  };

  const contextValue: NavbarContextType = {
    isMobile,
    navLinks,
    screenWidth,
    scrollToSection,
    activeSection,
    setActiveSection,
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook for using the context
export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarContextProvider");
  }
  return context;
};

export { NavbarContextProvider };
export default NavbarContext;
