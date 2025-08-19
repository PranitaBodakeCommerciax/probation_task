import React from "react";
import {
  Cpu,
  Cloud,
  Globe,
  Shield,
  Layers,
  Bot,
  Database,
  Network,
  Rocket,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

const Trustbar = () => {
  // ==========================
  // Companies Data
  // Each company has an icon and name
  // ==========================
  const companies = [
    { icon: <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-500" strokeWidth={2.5} />, name: "OpenAI" },
    { icon: <Cloud className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" strokeWidth={2.5} />, name: "AWS" },
    { icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" strokeWidth={2.5} />, name: "Google Cloud" },
    { icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-purple-500" strokeWidth={2.5} />, name: "Azure" },
    { icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500" strokeWidth={2.5} />, name: "Snowflake" },
    { icon: <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-500" strokeWidth={2.5} />, name: "Anthropic" },
    { icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" strokeWidth={2.5} />, name: "MongoDB" },
    { icon: <Network className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" strokeWidth={2.5} />, name: "NVIDIA" },
    { icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-teal-500" strokeWidth={2.5} />, name: "SpaceX AI" },
    { icon: <LineChart className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-500" strokeWidth={2.5} />, name: "Databricks" },
  ];

  return (
    // ==========================
    // Trustbar Section Container
    // ==========================
    <div className="bg-white py-10 sm:py-14 overflow-hidden relative">
      
      {/* ==========================
          Background Glow
         ========================== */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-purple-50 opacity-70 animate-pulse" />

      {/* ==========================
          Heading / Subtitle
         ========================== */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-sm sm:text-lg font-semibold text-gray-700 mb-6 sm:mb-10 relative z-10 px-4"
      >
        🚀 Trusted by global leaders in AI & Cloud
      </motion.p>

      {/* ==========================
          Scrolling Companies Container
         ========================== */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-8 sm:gap-16 whitespace-nowrap">
          {/* Duplicate companies array to create infinite scroll effect */}
          {[...companies, ...companies].map((company, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl 
                         bg-white/70 shadow-md backdrop-blur-sm 
                         hover:shadow-lg transition-transform duration-300 min-w-[140px] sm:min-w-[160px]"
              whileHover={{ scale: 1.1, rotate: 2 }} // Hover animation
              animate={{ y: [0, -4, 0] }} // Floating effect
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.15 }}
            >
              {company.icon}
              <span className="font-semibold text-sm sm:text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ==========================
          Custom CSS Animations
         ========================== */}
      <style>
        {`
          /* Horizontal scrolling animation */
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          @media (max-width: 640px) {
            .animate-scroll {
              animation-duration: 18s;
            }
          }

          /* Gradient text animation */
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 4s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Trustbar;
