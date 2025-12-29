import ProjectCard from "./ProjectCard";

const ProjectsContent = () => {
  const projects = [
    {
      title: "3D Bowling Human Mesh Reconstruction",
      year: "2025",
      description:
        "Computer vision project that reconstructs 3D human mesh from monocular videos of bowling extracting particular frame of the bowling action using OpenCV and MediaPipe.",
      tags: ["Python", "Computer Vision", "YOLO", "MediaPipe", "SPIN Model"],
      link: "https://github.com/ayushman46/bowling_analysis",
    },
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
      title: "AI Data Analyst",
      year: "2024",
      description:
        "An AI-powered data analysis tool that automates data cleaning, visualization, and insights generation using LLMs and D3.js for interactive dashboards.",
      tags: ["Streamlit", "Python", "Deepseek R1 API", "LLMs", "Data Visualization"],
      link: "https://github.com/ayushman46/AI_Data_Analyst",
    },
    {
      title: "Car Price Predictor",
      year: "2025",
      description:
        "A machine learning model that predicts car prices based on various features and historical data.",
      tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn"],
      link: "https://github.com/ayushman46/Car-Price-Predictor",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsContent;
