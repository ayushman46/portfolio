// src/components/Desktop.tsx
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";
// --- 1. CHANGE THE IMPORT ---
import AnimatedFolder from "./AnimatedFolder"; // Use the new component
import FinderWindow from "./FinderWindow";
import ProjectsContent from "./ProjectsContent";
import ResumeContent from "./ResumeContent";
import LinksContent from "./LinksContent";
import AsciiText from "./AsciiText";
import Dither from "./Dither";
// --- You no longer need lucide-react icons for the folders ---
// import { Folder, FileText, Link } from "lucide-react";

type FolderType = "projects" | "resume" | "links" | null;

const Desktop = () => {
  const [openFolder, setOpenFolder] = useState<FolderType>(null);

  const handleFolderClick = (folder: FolderType) => {
    // This now *only* opens the FinderWindow.
    // The folder's open/close animation is handled inside AnimatedFolder.
    setOpenFolder(folder);
  };

  const handleClose = () => {
    setOpenFolder(null);
  };

  const renderFolderContent = () => {
    // ... (this function is correct)
    switch (openFolder) {
      case "projects":
        return <ProjectsContent />;
      case "resume":
        return <ResumeContent />;
      case "links":
        return <LinksContent />;
      default:
        return null;
    }
  };

  const getFolderTitle = () => {
    // ... (this function is correct)
    switch (openFolder) {
      case "projects":
        return "Projects";
      case "resume":
        return "Resume";
      case "links":
        return "Links";
      default:
        return "";
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Dither
          waveColor={[0.6, 0.6, 0.9]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0}
          colorNum={4}
          waveAmplitude={0.36}
          waveFrequency={0.4}
          waveSpeed={0.03}
        />
      </div>

      <TopBar />

      {/* --- 2. REPLACE DesktopFolder with AnimatedFolder --- */}
      <div className="absolute left-8 top-24 flex flex-col gap-6 z-10">
        <AnimatedFolder
          label="Resume"
          onClick={() => handleFolderClick("resume")}
          color="#A78BFA" // Soft purple
          size={0.75}
        />
        <AnimatedFolder
          label="Projects"
          onClick={() => handleFolderClick("projects")}
          color="#A78BFA" // Soft purple
          size={0.75}
        />
        <AnimatedFolder
          label="Links"
          onClick={() => handleFolderClick("links")}
          color="#A78BFA" // Soft purple
          size={0.75}
        />
      </div>

      {/* Name Text in the Middle */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 pointer-events-none">
        <h1
          className="text-6xl font-medium tracking-tight"
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontWeight: 500,
            textShadow: "0 2px 12px rgba(0,0,0,0.65), 0 0 24px rgba(0,0,0,0.45)",
          }}
        >
          <AsciiText text="Ayushman Chakraborty" />
        </h1>
        <p
          className="text-xl mt-4 font-normal tracking-wider opacity-80"
          style={{
            fontFamily: '"Source Code Pro", monospace',
            fontWeight: 400,
            textShadow: "0 1px 8px rgba(0,0,0,0.6)",
          }}
        >
          {'>'} portfolio_
        </p>
      </div>

      {/* Finder Windows */}
      <AnimatePresence>
        {openFolder && (
          <FinderWindow title={getFolderTitle()} onClose={handleClose}>
            {renderFolderContent()}
          </FinderWindow>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Desktop;