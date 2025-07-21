import { ChevronRight } from "lucide-react";
import React from "react";

const RightImageArrow = ({
  id,
  direction,
  onClick,
  position,
}: {
  id: string;
  direction: "left" | "right";
  onClick: (direction: "left" | "right") => void;
  position: string;
}) => {
  return (
    <div id={id} className={`absolute ${position}`}>
      <div
        className="flex items-center justify-center p-1 cursor-pointer rounded-full bg-gray-800/40 hover:bg-gray-800/60 active:scale-95 transition-all duration-300"
        onClick={() => onClick("right")}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default RightImageArrow;
