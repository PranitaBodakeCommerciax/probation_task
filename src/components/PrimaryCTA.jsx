import React from "react";

const PrimaryCTA = () => {
  return (
    // ==========================
    // Primary Call-to-Action Section
    // ==========================
    <section className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-center py-12 px-4 sm:py-16 sm:px-6 md:px-8">
      
      {/* ==========================
          Heading
         ========================== */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 leading-snug sm:leading-snug md:leading-tight">
        Create Stunning Websites Effortlessly with AI
      </h2>

      {/* ==========================
          Subtext / Description
         ========================== */}
      <p className="text-gray-700 mb-8 max-w-xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 sm:px-0">
        Let Neweb.ai transform your ideas into fully responsive, professional websites in minutes—no coding required. Focus on growth while our AI handles the design and workflow.
      </p>

      {/* ==========================
          Email Input + CTA Button
         ========================== */}
      <div className="max-w-md mx-auto flex flex-col sm:flex-row bg-white rounded-[20px] overflow-hidden shadow-md">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-4 py-3 text-gray-700 focus:outline-none border-b sm:border-b-0 sm:border-r border-gray-300 text-sm sm:text-base"
        />

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white px-5 py-3 font-medium hover:opacity-90 transition-opacity mt-2 sm:mt-0 text-sm sm:text-base">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default PrimaryCTA;
