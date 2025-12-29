// src/components/AnimatedFolder.tsx
import { useState } from "react";

// --- Helper function (from your code) ---
const darkenColor = (hex: string, percent: number) => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

// --- Prop Types ---
interface AnimatedFolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
  label: string;
  onClick: () => void; // Added for integration
}

// --- The Component ---
const AnimatedFolder = ({
  color = "#5227FF",
  size = 1,
  items = [],
  className = "",
  label,         // Added for integration
  onClick = () => {}, // Added for integration
}: AnimatedFolderProps) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  // --- FIX 1: Added useState for 'open' ---
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);
  const paper3 = "#ffffff";

  // --- FIX 2: Modified handleClick to call props.onClick ---
  const handleClick = () => {
    // Call the parent's onClick to open the FinderWindow
    onClick();
  };

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    // Animation removed - no longer used
  };

  const handlePaperMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  };

  const scaleStyle = { transform: `scale(${size})` };

  const getOpenTransform = (index: number) => {
    if (index === 0) return "translate(-120%, -70%) rotate(-15deg)";
    if (index === 1) return "translate(10%, -70%) rotate(15deg)";
    if (index === 2) return "translate(-50%, -100%) rotate(5deg)";
    return "";
  };

  return (
    // --- FIX 3: Wrapped component to include label ---
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div style={scaleStyle}>
        <div
          onClick={handleClick} // Added the click handler here
          className="group relative cursor-pointer"
          style={folderStyle as React.CSSProperties}
        >
          <div
            className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] shadow-lg"
            style={{ 
              backgroundColor: folderBackColor,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3)"
            }}
          >
            <span
              className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0"
              style={{ backgroundColor: folderBackColor }}
            ></span>
            {papers.map((item, i) => {
              let sizeClasses = "";
              if (i === 0) sizeClasses = "w-[70%] h-[80%]";
              if (i === 1) sizeClasses = "w-[80%] h-[70%]";
              if (i === 2) sizeClasses = "w-[90%] h-[60%]";

              return (
                <div
                  key={i}
                  className={`absolute z-20 bottom-[10%] left-1/2 transform -translate-x-1/2 translate-y-[10%] ${sizeClasses}`}
                  style={{
                    backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                    borderRadius: "10px",
                  }}
                >
                  {item}
                </div>
              );
            })}
            <div
              className="absolute z-30 w-full h-full origin-bottom"
              style={{
                backgroundColor: color,
                borderRadius: "5px 10px 10px 10px",
              }}
            ></div>
            <div
              className="absolute z-30 w-full h-full origin-bottom"
              style={{
                backgroundColor: color,
                borderRadius: "5px 10px 10px 10px",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* Added the label below the folder */}
      <span className="text-sm font-medium text-white drop-shadow-lg text-center select-none max-w-[100px]" style={{
        textShadow: "0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.6)"
      }}>
        {label}
      </span>
    </div>
  );
};

export default AnimatedFolder;