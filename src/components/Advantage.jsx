import React from "react";
import { Sparkles, Cpu, Layers, Lock } from "lucide-react";
import card from "../assets/card.png";

// Data for the left feature cards
const leftCards = [
  {
    icon: <Cpu className="w-6 h-6 text-indigo-600" />,
    title: "AI-Powered Efficiency",
    description:
      "Leverage cutting-edge AI models to automate workflows, boost productivity, and deliver smarter results in less time.",
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-600" />,
    title: "Seamless Integrations",
    description:
      "Connect effortlessly with your favorite tools and platforms to create a unified, streamlined experience.",
  },
  {
    icon: <Lock className="w-6 h-6 text-pink-600" />,
    title: "Enterprise-Grade Security",
    description:
      "Your data is safeguarded with end-to-end encryption and compliance standards, ensuring complete trust.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "Continuous Innovation",
    description:
      "We are always evolving—adding new AI capabilities and features to help you stay ahead of the competition.",
  },
];

const AdvantageSection = () => {
  return (
    <section
      id="why-us"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16"
    >
      {/* Section Heading */}
      <div className="mb-10 sm:mb-12 text-center">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-extrabold text-gray-900 leading-tight">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] bg-clip-text text-transparent font-bold">
            Neweb.ai
          </span>
          ?
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
          Discover how Neweb.ai empowers teams and creators with AI-driven
          solutions, combining speed, flexibility, and security to transform your
          workflow.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 md:gap-10 items-stretch">
        {/* Left Column: Feature Cards */}
        <div className="flex flex-col gap-6 flex-1">
          {leftCards.map((card, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl shadow-sm bg-white 
                         hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
            >
              <div className="flex-shrink-0 rounded-md p-3 bg-indigo-50">{card.icon}</div>
              <div>
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-1 text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Showcase Card */}
        <div
          className="flex-1 h-[450px] sm:h-[550px] md:h-[569px] bg-white rounded-2xl border border-gray-200 shadow-xl p-6 flex flex-col gap-6
                     hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
        >
          {/* Top AI Insights */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-inner">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[12px] font-semibold text-indigo-700 uppercase bg-indigo-100 rounded-full px-3 py-1 tracking-wide">
                AI Insights
              </span>
            </div>
            <div>
              <p className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-gray-900">
                98%
              </p>
              <div className="text-[10px] sm:text-[12px] text-green-600 flex flex-col sm:flex-row sm:gap-3">
                <span>Accuracy Rate</span>
                <span className="text-indigo-600">+15% vs last month</span>
              </div>
            </div>
          </div>

          {/* Product Preview Image */}
          <div className="relative rounded-xl overflow-hidden shadow-md flex-1">
            <img
              src={card}
              alt="Neweb.ai AI-powered dashboard preview"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/640x360/png?text=Image+not+available";
              }}
            />
          </div>

          {/* Example Table */}
          <div className="overflow-x-auto">
            <h4 className="text-[12px] sm:text-[14px] font-semibold text-gray-700 mb-3">
              Recent AI Tasks
            </h4>
            <table className="w-full text-[12px] sm:text-[14px] text-left text-gray-600 table-auto border-collapse rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-4 py-2">Task</th>
                  <th className="px-3 sm:px-4 py-2">Category</th>
                  <th className="px-3 sm:px-4 py-2">Time Saved</th>
                  <th className="px-3 sm:px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-4 py-2">Content Draft</td>
                  <td className="px-3 sm:px-4 py-2">Marketing</td>
                  <td className="px-3 sm:px-4 py-2">3 hrs</td>
                  <td className="px-3 sm:px-4 py-2 text-green-600 font-semibold">Completed</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-4 py-2">Data Cleanup</td>
                  <td className="px-3 sm:px-4 py-2">Analytics</td>
                  <td className="px-3 sm:px-4 py-2">2 hrs</td>
                  <td className="px-3 sm:px-4 py-2 text-green-600 font-semibold">Completed</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-4 py-2">Lead Scoring</td>
                  <td className="px-3 sm:px-4 py-2">Sales</td>
                  <td className="px-3 sm:px-4 py-2">1.5 hrs</td>
                  <td className="px-3 sm:px-4 py-2 text-yellow-500 font-semibold">In Progress</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
