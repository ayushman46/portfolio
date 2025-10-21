import { motion } from "framer-motion";

const LinksContent = () => {
  const links = [
    {
      name: "GitHub",
      // UPDATED: Using a reliable Iconify link
      icon: "https://api.iconify.design/mdi:github.svg?color=white",
      url: "https://github.com/ayushman46",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "LinkedIn",
      // FIXED: Using a reliable Iconify link
      icon: "https://api.iconify.design/mdi:linkedin.svg?color=white",
      url: "https://linkedin.com/in/ayushmanchakraborty",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "LeetCode",
      // UPDATED: Using a reliable Iconify link
      icon: "https://api.iconify.design/simple-icons:leetcode.svg?color=white",
      url: "https://leetcode.com/u/ayush46",
      color: "from-orange-500 to-orange-700",
    },
 
  ];

  return (
    <motion.div
      className="flex justify-center gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          whileHover={{ y: -8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* iOS-style app icon */}
          <div className="relative w-20 h-20 overflow-hidden rounded-[18px] shadow-macos-sm group-hover:shadow-macos transition-all duration-300">
            <div className={`absolute inset-0 bg-gradient-to-br ${link.color}`} />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
            
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={link.icon}
                alt={`${link.name} logo`}
                className="w-10 h-10 drop-shadow-lg"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent" />
          </div>
          <span className="text-sm font-medium text-gray-700">{link.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default LinksContent;