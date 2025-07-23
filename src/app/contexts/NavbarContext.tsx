"use client";
import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useRef,
} from "react";
import { NavLinkType } from "@/lib/globalTypes";
import { navLinks } from "@/constants";
import Lenis from "@studio-freight/lenis";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
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

  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth < 640;

  // Updated smooth scroll function to use Lenis
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      lenisRef.current?.lenis?.scrollTo(0, {
        duration: 0.6,
        easing: (t: number) => t, // Linear easing
      });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      lenisRef.current?.lenis?.scrollTo(element, {
        duration: 0.6,
        easing: (t: number) => t,
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
      <ReactLenis
        root
        options={{
          autoRaf: false,
          duration: 0.3,
          lerp: 0.01, // Very responsive
          wheelMultiplier: 0.5,
          touchMultiplier: 0.5,
          smoothWheel: true, // Disable for more direct feel
        }}
        ref={lenisRef}
      />
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
