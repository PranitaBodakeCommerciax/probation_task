import React, { useState } from "react";

const Pricing = () => {
  // ==========================
  // State to toggle billing type
  // ==========================
  const [isYearly, setIsYearly] = useState(false);

  // ==========================
  // Pricing plans data
  // ==========================
  const plans = {
    elite: {
      monthly: { price: "₹89 for first 3 months", strike: "₹349/month", then: "Then ₹349/month" },
      yearly: { price: "₹89 for first 3 months", strike: "₹4199/year", then: "Then ₹4199/year" },
    },
    premium: {
      monthly: { price: "₹89 for first 3 months", strike: "₹699/month", then: "Then ₹699/month" },
      yearly: { price: "₹89 for first 3 months", strike: "₹8399/year", then: "Then ₹8399/year" },
    },
  };

  // Determine which pricing to display based on billing toggle
  const eliteDisplay = isYearly ? plans.elite.yearly : plans.elite.monthly;
  const premiumDisplay = isYearly ? plans.premium.yearly : plans.premium.monthly;

  return (
    <section id="pricing" className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center font-sans">
      
      {/* ==========================
          Section Heading & Description
         ========================== */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Simple and Transparent Pricing
      </h2>
      <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8">
        Choose the plan that fits your needs. No hidden fees, just straightforward pricing.
      </p>

      {/* ==========================
          Billing Toggle (Monthly / Yearly)
         ========================== */}
      <div className="mb-12 flex justify-center">
        <div className="relative w-52 sm:w-64 h-10 sm:h-12 bg-gray-200 rounded-full p-1 flex items-center transition-colors duration-300">
          {/* Toggle slider */}
          <div
            className={`absolute h-8 sm:h-10 w-1/2 rounded-full transition-all duration-500 ease-out transform ${
              isYearly
                ? "translate-x-full bg-gradient-to-r from-[#6D28D9] to-[#9333EA]"
                : "translate-x-0 bg-gradient-to-r from-[#6D28D9] to-[#9333EA]"
            }`}
          ></div>

          {/* Monthly Button */}
          <button
            onClick={() => setIsYearly(false)}
            className={`relative z-10 w-1/2 h-full font-semibold text-sm sm:text-base md:text-lg transition-colors focus:outline-none ${
              !isYearly ? "text-white" : "text-gray-800"
            }`}
          >
            Monthly
          </button>

          {/* Yearly Button */}
          <button
            onClick={() => setIsYearly(true)}
            className={`relative z-10 w-1/2 h-full font-semibold text-sm sm:text-base md:text-lg transition-colors focus:outline-none ${
              isYearly ? "text-white" : "text-gray-800"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* ==========================
          Pricing Plans Grid
         ========================== */}
      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 md:grid-cols-3">

        {/* ==========================
            Elite Plan
           ========================== */}
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200 
                        flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900">Elite</h3>

          {/* Badge */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="text-xs sm:text-sm md:text-sm bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded-full shadow-sm">
              Limited Time Offer
            </span>
          </div>

          {/* Pricing Details */}
          <div className="mb-4">
            <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold text-black mb-1">{eliteDisplay.price}</h4>
            <p className="line-through text-gray-400 text-sm sm:text-base md:text-base mb-1">{eliteDisplay.strike}</p>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">{eliteDisplay.then}</p>
          </div>

          <hr className="my-4 sm:my-6 border-gray-200 w-full" />

          {/* Features List */}
          <ul className="text-left text-gray-700 space-y-2 sm:space-y-3 flex-grow w-full text-xs sm:text-sm md:text-base">
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Recommended for: Serious businesses and agencies</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Websites: 1</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Creative Assets: 4 logos, 4 images, 4 blog posts</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Resources: 1GB memory, 75GB bandwidth</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Ideal for: Making Portfolios</li>
          </ul>

          <button className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-2xl 
                             w-full mt-6 shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
            Get Offer
          </button>
        </div>

        {/* ==========================
            Premium Plan
           ========================== */}
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200 
                        flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900">Premium</h3>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="text-xs sm:text-sm md:text-sm bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded-full shadow-sm">
              Limited Time Offer
            </span>
          </div>

          <div className="mb-4">
            <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold text-black mb-1">{premiumDisplay.price}</h4>
            <p className="line-through text-gray-400 text-sm sm:text-base md:text-base mb-1">{premiumDisplay.strike}</p>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">{premiumDisplay.then}</p>
          </div>

          <hr className="my-4 sm:my-6 border-gray-200 w-full" />

          <ul className="text-left text-gray-700 space-y-2 sm:space-y-3 flex-grow w-full text-xs sm:text-sm md:text-base">
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Ultimate Value Package: Maximize your online potential</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Websites: 3</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Creative Assets: Unlimited logos, images & blog posts</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Resources: 2GB memory, 150GB bandwidth</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Ideal for: Established brands, high-traffic sites</li>
          </ul>

          <button className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-2xl 
                             w-full mt-6 shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
            Get Offer
          </button>
        </div>

        {/* ==========================
            Enterprise Plan
           ========================== */}
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200 
                        flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900">Enterprise</h3>

          {/* Contact Sales */}
          <div className="mb-4 mt-10 sm:mt-12">
            <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold text-indigo-600 mb-1">Contact Sales</h4>
            <p className="text-sm sm:text-base md:text-base text-gray-600 mt-1">Custom pricing for your needs</p>
          </div>

          <hr className="my-4 sm:my-6 border-gray-200 w-full" />

          {/* Features List */}
          <ul className="text-left text-gray-700 space-y-2 sm:space-y-3 flex-grow w-full text-xs sm:text-sm md:text-base">
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Tailored Solution: Custom-built for your exact needs</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Websites: Unlimited</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Creative Assets: Unlimited everything</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Resources: Dedicated server with premium specs</li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✔️</span>Ideal for: Large organizations, high-growth startups</li>
          </ul>

          <button className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-2xl 
                             w-full mt-6 shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
