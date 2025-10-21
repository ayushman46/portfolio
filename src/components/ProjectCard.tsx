import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, year, description, tags, link }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-macos-sm hover:shadow-macos hover:bg-white/70 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full border border-blue-200/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

export default ProjectCard;
