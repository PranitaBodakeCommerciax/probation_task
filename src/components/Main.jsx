import React from "react";
import { Sparkles } from "lucide-react"; // Icon for badge
import dashboard from "../assets/dashboard.png";

const Main = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      
      {/* =========================
          Background Animated Blobs
         ========================= */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-400 rounded-full 
                      mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[200px] right-[-150px] w-[300px] h-[300px] bg-pink-400 rounded-full 
                      mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-120px] left-[200px] w-[300px] h-[300px] bg-indigo-400 rounded-full 
                      mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* =========================
          Main Content Container
         ========================= */}
      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-20 text-center z-10">

        {/* Tag / Badge */}
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 font-medium 
                        rounded-full px-4 py-1 text-sm mb-6 animate-bounce shadow-md">
          <Sparkles size={14} className="animate-spin-slow text-blue-500" />
          <span>Powered by Advanced AI</span>
        </div>

        {/* Heading */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[65px] font-bold text-gray-900 
                       mb-6 leading-tight animate-fade-in-down">
          Transform Ideas into Impact <br />
          <span className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] bg-clip-text text-transparent 
                           font-bold animate-gradient-x">
            Neweb.ai
          </span>
        </h1>

        {/* Description */}
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 leading-relaxed 
                      max-w-2xl mx-auto mb-10 animate-fade-in-up">
          Build beautiful, responsive websites in minutes without coding. Our AI understands your vision 
          and turns it into reality—complete with smart tools to accelerate your growth and simplify your workflow.
        </p>

        {/* Email Input Form */}
        <form className="flex flex-col sm:flex-row max-w-md mx-auto items-center rounded-lg border border-gray-200 
                         bg-white shadow-md overflow-hidden animate-fade-in-up delay-200">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 text-sm focus:outline-none font-inter w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white text-sm font-medium 
                       px-5 py-2 m-1 rounded-[10px] w-full sm:w-auto hover:scale-105 hover:shadow-lg 
                       hover:from-[#7C3AED] hover:to-[#A855F7] transition-all duration-300 ease-in-out"
          >
            Start Now
          </button>
        </form>

        {/* Preview Dashboard Card */}
        <div className="relative mx-auto mt-12 w-full max-w-[900px] animate-fade-in-up delay-500">
          
          {/* Glowing background effect */}
          <div className="absolute inset-0 rounded-[22px] bg-gradient-to-r from-blue-500 via-purple-500 
                          to-pink-500 blur-2xl opacity-60 animate-pulse"></div>

          {/* Dashboard Card */}
          <div className="relative bg-white shadow-2xl p-3 sm:p-6 rounded-[20px] overflow-hidden 
                          hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <img
              src={dashboard}
              alt="Neweb.ai Dashboard Preview"
              className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[580px] 
                         object-cover rounded-[12px] shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
