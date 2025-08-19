import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger & close icons
import logo from "../assets/logo/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <header id="header" className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="neweb.ai"
            className="h-8 w-auto sm:h-10 md:h-[80px] lg:h-[80px]"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-6 xl:space-x-10 font-medium pt-[12px]">
          {["Features", "Why Us", "Testimonials", "Pricing"].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-[18px] text-[#1E1E2F] hover:text-[#6D28D9] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Login Button */}
          <button className="text-[#6D28D9] font-semibold text-sm border border-[#6D28D9] rounded-[20px] px-4 py-2
                             transition-all duration-300 hover:scale-105 hover:text-[#6D28D9]">
            Log in
          </button>

          {/* Get Started Button */}
          <button className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white text-sm font-semibold px-4 py-2 rounded-[20px]
                             transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1E1E2F] hover:text-[#6D28D9] focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden bg-white shadow-md border-t transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6 font-medium text-base">
          {["Features", "Why Us", "Pricing", "Testimonials"].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-[#1E1E2F] hover:text-[#6D28D9] transition-colors"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link}
            </a>
          ))}

          {/* Mobile Action Buttons */}
          <button
            className="text-[#6D28D9] font-semibold text-sm border border-[#6D28D9] rounded-[20px] px-4 py-2
                       transition-all duration-300 hover:scale-105 hover:text-[#6D28D9]"
            onClick={() => setIsOpen(false)}
          >
            Log in
          </button>

          <button
            className="bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white text-sm font-semibold px-4 py-2 rounded-[20px]
                       transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
