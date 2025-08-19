import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emp1 from "../assets/emp1.jpg";
import emp2 from "../assets/emp2.jpg";
import emp3 from "../assets/emp3.jpg";

const FAQ = () => {
  // FAQ data array
  const faqs = [
    {
      question: "What is neweb.ai?",
      answer:
        "neweb.ai is an AI-powered website builder that helps you create stunning, professional websites in just a few clicks—no coding or design skills needed. Just tell us what you do, and our AI takes care of the rest.",
    },
    {
      question: "Who is neweb.ai for?",
      answer:
        "neweb.ai is perfect for small business owners, freelancers and agency owners, students and creators, and anyone who wants a website without spending too much time or money.",
    },
    {
      question: "How does neweb.ai work?",
      answer:
        "It’s simple: 1. Answer a few questions about your business or idea. 2. Our AI will generate a fully functional website tailored to your needs. 3. You can customize the content, images, and layout as you like.",
    },
    {
      question: "Do I need any technical skills to use neweb.ai?",
      answer:
        "Not at all. neweb.ai is made for everyone—even if you’ve never built a website before. Our AI handles the heavy lifting so you can focus on your business.",
    },
    {
      question: "Is my website mobile-friendly?",
      answer:
        "Yes. All websites built with neweb.ai are fully responsive and look great on mobile, tablet, and desktop.",
    },
    {
      question: "What makes neweb.ai different from other website builders?",
      answer:
        "neweb.ai offers super-fast AI website generation, clean modern designs made for conversion, no learning curve with zero coding required, affordable and beginner-friendly solutions, and is built for speed and simplicity.",
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes, you can connect your custom domain to your neweb.ai website easily.",
    },
    {
      question: "Is there a free trial or free version?",
      answer:
        "While we don’t offer a free trial, you can get started with just $1 (or ₹89 for Indian users) for the first 3 months.",
    },
    {
      question: "Is neweb.ai secure?",
      answer:
        "Yes, all websites are hosted on secure, reliable servers with SSL included to keep your data safe.",
    },
    {
      question: "Can I contact support if I need help?",
      answer:
        "Of course! We’re here to help. You can reach our support team via email or live chat.",
    },
  ];

  // State to track which FAQ is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the open/close state of a FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Heading */}
      <h2 className="font-bold text-center text-gray-900 text-4xl sm:text-5xl md:text-6xl">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 text-center mt-2 mb-10 text-base sm:text-lg md:text-xl">
        Find answers to common questions about neweb.ai and our services.
      </p>

      {/* FAQ List */}
      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6 w-full">
            {/* FAQ Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              )}
            </button>

            {/* FAQ Answer with animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden mt-3 text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Support Card */}
      <div className="mt-12 w-full max-w-[1000px] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto rounded-2xl shadow-lg p-6 sm:p-8 text-center 
                      hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
        {/* User Images */}
        <div className="flex justify-center -space-x-3 mb-6">
          {[emp1, emp2, emp3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Happy User ${i + 1}`}
              loading="lazy"
              className="w-12 h-12 rounded-full border-2 border-white transition-transform duration-200 hover:scale-110"
            />
          ))}
        </div>

        {/* Support Heading */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
          Need help with neweb.ai?
        </h3>

        {/* Support Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-500 mt-2">
          Explore answers to common questions about neweb.ai or connect with our
          support team for personalized assistance.
        </p>

        {/* Contact Support Button */}
        <button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#6D28D9] to-[#9333EA] rounded-[20px] text-white 
                           hover:from-[#7C3AED] hover:to-[#A855F7] transition-all duration-300 text-sm sm:text-base md:text-lg">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default FAQ;
