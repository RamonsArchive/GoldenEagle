import React from "react";
import { X } from "lucide-react";

const ToggleClose = ({ closeFunction }: { closeFunction: () => void }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <X className="w-4 h-4" />
    </div>
  );
};

export default ToggleClose;
