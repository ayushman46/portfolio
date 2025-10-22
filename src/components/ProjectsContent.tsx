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
      title: "financeGPT",
      year: "2024",
      description:
        "An AI-first personal finance co-pilot designed to proactively manage your daily financial wants and needs. It automates bill splits, manages subscriptions, and uses cash-flow-aware AI to answer Can I afford this? in real-time.",
      tags: ["Python", "Automation", "SQL", "REST API"],
      link: "https://github.com/ayushman46/fin-pal-",
    },
    {
      title: "Hate Speech Detection",
      year: "2024",
      description:
        "A python notebook that detects hate speech in text using NLP techniques and machine learning models, providing real-time analysis and feedback.",
      tags: ["Python", "NLP", "jupyter", "scikit-learn", "Pandas"],
      link: "https://github.com/ayushman46/Hate-Speech-Detection",
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
