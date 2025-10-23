import { useEffect, useState } from "react";
import { Apple } from "lucide-react"; // 1. IMPORT THE APPLE ICON

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-7 px-4 bg-black/40 backdrop-blur-xl border-b border-white/10 flex items-center justify-between text-white text-xs font-medium">
      {/* Left Section */}
      <div className="flex items-center gap-5">
        
        {/* 2. REPLACE THE BAD <svg> WITH THE CLEAN LUCIDE ICON */}
        <Apple
          className="w-4 h-4 text-white"
          fill="currentColor" // This is the key: it makes the icon solid white
          strokeWidth={0}      // This removes any border
        />
        
        <span className="font-semibold tracking-tight">Finder</span>
        
        <div className="flex items-center gap-5 ml-1">
          <span className="font-normal hover:text-white/60 cursor-pointer transition">File</span>
          <span className="font-normal hover:text-white/60 cursor-pointer transition">Edit</span>
          <span className="font-normal hover:text-white/60 cursor-pointer transition">View</span>
          <span className="font-normal hover:text-white/60 cursor-pointer transition">Go</span>
          <span className="font-normal hover:text-white/60 cursor-pointer transition">Window</span>
          <span className="font-normal hover:text-white/60 cursor-pointer transition">Help</span>
        </div>
      </div>

      {/* Right Section - Date and Time */}
      <span className="font-normal">
        {formatDate(time)} {formatTime(time)}
      </span> 
    </div>
  );
};

export default TopBar;