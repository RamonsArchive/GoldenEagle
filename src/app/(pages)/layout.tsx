import React from "react";
import { Toaster } from "sonner";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Toaster richColors />
    </div>
  );
};

export default layout;
