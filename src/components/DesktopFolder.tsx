// src/components/DesktopFolder.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

interface DesktopFolderProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const DesktopFolder: React.FC<DesktopFolderProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group cursor-pointer w-[100px]"
    >
      <div className="relative w-20 h-20 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-200 overflow-hidden
                      bg-gradient-to-br from-[#87A4F2] to-[#6B8AE1] border border-blue-400/30">
        {/* Subtle inner shadow/depth for the icon block */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

        {/* Icon itself */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon 
            className="w-10 h-10 text-white drop-shadow-sm" // White icon, subtle shadow
            fill="currentColor" // Make the icon solid white
            strokeWidth={0}      // Remove the stroke completely
          />
        </div>
      </div>
      <span className="text-sm font-medium text-white drop-shadow-md text-center select-none">
        {label}
      </span>
    </button>
  );
};

export default DesktopFolder;