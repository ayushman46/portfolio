import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";
import DesktopFolder from "./DesktopFolder";
import FinderWindow from "./FinderWindow";
import ProjectsContent from "./ProjectsContent";
import ResumeContent from "./ResumeContent";
import LinksContent from "./LinksContent";
import { Folder, FileText, Link } from "lucide-react";

// 1. REMOVE the wallpaper import
// import wallpaper from "@/assets/sequoia-wallpaper.jpg";

// 2. ADD the new Dither component import
import Dither from "./Dither"; // Make sure this path is correct

type FolderType = "projects" | "resume" | "links" | null;

const Desktop = () => {
  const [openFolder, setOpenFolder] = useState<FolderType>(null);

  const handleFolderClick = (folder: FolderType) => {
    setOpenFolder(folder);
  };

  const handleClose = () => {
    setOpenFolder(null);
  };

  const renderFolderContent = () => {
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
    <div
      // 3. Make sure the style prop and old bg classes are removed
      className="relative h-screen w-full overflow-hidden"
    >
      {/* 4. ADD the Dither component here.
        It's first, so it's in the back (due to its z-0).
        We pass in the props from your example.
      */}
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />

      {/* 5. All your other components remain unchanged. 
        They will render on top of the Dither background.
      */}
      <TopBar />

      {/* Desktop Icons */}
      <div className="absolute left-8 top-24 flex flex-col gap-6">
        <DesktopFolder
          icon={Folder}
          label="Projects"
          onClick={() => handleFolderClick("projects")}
        />
        <DesktopFolder
          icon={FileText}
          label="Resume"
          onClick={() => handleFolderClick("resume")}
        />
        <DesktopFolder
          icon={Link}
          label="Links"
          onClick={() => handleFolderClick("links")}
        />
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