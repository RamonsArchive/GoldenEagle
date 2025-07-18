import React from "react";
import { X } from "lucide-react";

const ToggleClose = ({ closeFunction }: { closeFunction: () => void }) => {
  return (
    <div
      className="flex items-center justify-center p-2 rounded-full hover:bg-primary-400/10 cursor-pointer"
      onClick={closeFunction}
    >
      <X className="w-5 h-5" />
    </div>
  );
};

export default ToggleClose;
