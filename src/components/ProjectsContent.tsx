import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsContent = () => {
  const projects = [
    {
      title: "IPL Match Predictor",
      year: "2025",
      description:
        "ML pipeline to predict six likelihood using Random Forest and Flask with comprehensive data preprocessing .",
      tags: ["Python", "scikit-learn", "Pandas", "FastAPI", "Flask","Random Forest"],
      link: "https://github.com/ayushman46/IPL_api",
    },
    {
      title: "Autoblogger with LLMs",
      year: "2025",
      description:
        "LLM-powered tool that helps summarize tech videos into engaging blog posts with relevant visuals and code snippets along with its explanation.",
      tags: ["Python", "LLMs", "OpenCV", "Automation"," OpenAI","LangChain","streamlit"],
      link: "https://github.com/ayushman46/autoblog",
    },
    {
      title: "Inventory Management Automation",
      year: "2024",
      description:
        "Automated inventory tracking system with real-time alerts and reporting capabilities for efficient stock management.",
      tags: ["Python", "Automation", "SQL", "REST API"],
      link: "#",
    },
    {
      title: "Email Responder Automation",
      year: "2024",
      description:
        "Intelligent email response system using NLP to categorize and auto-respond to common inquiries with high accuracy.",
      tags: ["Python", "NLP", "OpenAI", "Automation"],
      link: "#",
    },
    {
      title: "Data Visualization Dashboard",
      year: "2023",
      description:
        "Interactive dashboard for business analytics with real-time data processing and customizable visualizations.",
      tags: ["React", "D3.js", "TypeScript", "Node.js"],
      link: "#",
    },
    {
      title: "AI Content Generator",
      year: "2025",
      description:
        "Advanced content generation tool leveraging GPT models for creating marketing copy, blog posts, and social media content.",
      tags: ["Python", "OpenAI", "FastAPI", "React"],
      link: "#",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </motion.div>
  );
};

export default ProjectsContent;
