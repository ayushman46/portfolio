import { motion } from "framer-motion";

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const LeetCodeLogo = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

const LinksContent = () => {
  const links = [
    {
      name: "GitHub",
      icon: GitHubLogo,
      url: "https://github.com/ayushman46",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "LinkedIn",
      icon: LinkedInLogo,
      url: "https://linkedin.com/in/ayushmanchakraborty",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "LeetCode",
      icon: LeetCodeLogo,
      url: "https://leetcode.com/u/ayush46",
      color: "from-orange-500 to-orange-700",
    },
 
  ];

  return (
    <motion.div
      className="flex justify-center gap-6 py-4"
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
      {links.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
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
                <IconComponent />
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent" />
            </div>
            <span className="text-sm font-medium text-gray-700">{link.name}</span>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default LinksContent;