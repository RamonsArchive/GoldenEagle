import React from "react";
import { X } from "lucide-react";

const ToggleClose = ({ closeFunction }: { closeFunction: () => void }) => {
  return (
    <div
      className="flex items-center justify-center p-2 rounded-full duration-300 ease-in-out active:scale-95 transition-all hover:bg-primary-400/10 cursor-pointer z-[500]"
      onClick={closeFunction}
    >
      <X className="w-5 h-5" />
    </div>
  );
};

export default ToggleClose;
