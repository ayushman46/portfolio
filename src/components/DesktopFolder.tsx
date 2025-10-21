import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface DesktopFolderProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const DesktopFolder = ({ icon: Icon, label, onClick }: DesktopFolderProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group cursor-pointer"
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* iOS-style rounded square icon with glossy effect */}
      <div className="relative w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-[18px] shadow-macos-sm group-hover:shadow-macos transition-all duration-200 overflow-hidden">
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-[18px]" />
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-10 h-10 text-white drop-shadow-lg" strokeWidth={2} />
        </div>
        {/* Bottom shine */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent" />
      </div>
      <span className="text-sm font-medium text-foreground drop-shadow-md">
        {label}
      </span>
    </motion.button>
  );
};

export default DesktopFolder;
