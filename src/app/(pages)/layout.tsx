import React from "react";
import { Toaster } from "sonner";
import { NavbarContextProvider } from "../contexts/NavbarContext";
import Navbar from "@/components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarContextProvider>
        <Navbar />
        {children}
      </NavbarContextProvider>
      <Toaster richColors />
    </div>
  );
};

export default layout;
