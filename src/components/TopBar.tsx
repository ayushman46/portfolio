import { useEffect, useState } from "react";

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
        
        {/* Apple Logo SVG */}
        <svg 
          className="w-[14px] h-[14px]" 
          viewBox="0 0 814 1000" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
        </svg>
        
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