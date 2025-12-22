import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";

const ResumeContent = () => {
  // ✅ Make sure your file is inside /public
  const resumePdfPath = "/Ayushman_Chakraborty (resume) _.pdf";

  const skills = [
    "Python",
    "Machine Learning",
    "React",
    "TypeScript",
    "Automation",
    "AI",
    "Data Visualization",
    "Flask",
    "FastAPI",
    "scikit-learn",
    "TensorFlow",
    "Pandas",
    "SQL",
    "REST API",
    "NLP",
    "OpenAI",
    "Node.js",
    "Git",
    "Docker",
    "Streamlit",
    "LangChain",
    "Deepseek R1 API",
    "OpenCV",
    "jupyter",
    "YOLO",
    "MediaPipe",
    "SPIN Model",
  ];

  return (
    <motion.div
      className="space-y-6 max-h-[80vh] overflow-y-auto p-1 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* PDF Viewer Section */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Resume</h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={resumePdfPath}
              download
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors shadow"
            >
              <ExternalLink className="w-4 h-4" />
              Open
            </a>
          </div>
        </div>

        {/* ✅ Scrollable PDF Viewer */}
        <div className="w-full h-[75vh] overflow-y-auto bg-gray-50">
          <iframe
            src={resumePdfPath}
            className="w-full h-full"
            title="Ayushman Chakraborty Resume PDF"
            loading="lazy"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04 }}
              className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full border border-blue-200/50 shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeContent;
