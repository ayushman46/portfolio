import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";
import DesktopFolder from "./DesktopFolder";
import FinderWindow from "./FinderWindow";
import ProjectsContent from "./ProjectsContent";
import ResumeContent from "./ResumeContent";
import LinksContent from "./LinksContent";
import { Folder, FileText, Link } from "lucide-react";
import wallpaper from "@/assets/sequoia-wallpaper.jpg";

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
      className="relative h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
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
