import { Apple, Wifi, Battery, Search } from "lucide-react";
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
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-7 bg-black/20 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 text-foreground/90 text-sm">
      <div className="flex items-center gap-4">
        <Apple className="w-4 h-4" />
        <span className="font-semibold">Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-medium">
          {formatDate(time)} {formatTime(time)}
        </span>
        <Wifi className="w-4 h-4" />
        <Search className="w-4 h-4" />
        <Battery className="w-4 h-4" />
      </div>
    </div>
  );
};

export default TopBar;
