import { motion } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

interface FinderWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const FinderWindow = ({ title, onClose, children }: FinderWindowProps) => {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Window - Slightly right of desktop icons */}
      <motion.div
        className="fixed left-44 top-24 z-50 w-[calc(100vw-12rem)] max-w-3xl max-h-[calc(100vh-10rem)]"
        initial={{ opacity: 0, scale: 0.95, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.95, x: -20 }}
        transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
      >
        <div className="flex flex-col h-full bg-white/85 backdrop-blur-2xl rounded-xl shadow-macos overflow-hidden border border-white/20">
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-white/50 to-white/30 border-b border-white/20">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-macos-red hover:bg-red-500 transition-colors flex items-center justify-center group"
              >
                <X className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="w-3 h-3 rounded-full bg-macos-yellow hover:bg-yellow-400 transition-colors flex items-center justify-center group">
                <Minus className="w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="w-3 h-3 rounded-full bg-macos-green hover:bg-green-400 transition-colors flex items-center justify-center group">
                <Square className="w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <h2 className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-700">
              {title}
            </h2>

            <div className="w-14" />
          </div>

          {/* Window Content */}
          <div className="flex-1 overflow-y-auto p-6">{children}</div>
        </div>
      </motion.div>
    </>
  );
};

export default FinderWindow;
