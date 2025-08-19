import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  // Footer link sections data
  const footerSections = [
    {
      title: "Support",
      links: ["Support", "Pricing", "Agency partners", "SaaS & ecommerce partners"],
    },
    {
      title: "Products",
      links: [
        "Online payments",
        "In-person payments",
        "Recurring payments",
        "Checkout",
        "Acceptance & Risk",
        "Payment Links",
        "Capital",
      ],
    },
    {
      title: "Developers",
      links: ["Libraries", "Integrations", "Documentation", "Status", "Changelog"],
    },
    {
      title: "Resources",
      links: [
        "About us",
        "Careers",
        "News",
        "Success stories",
        "Growth Papers",
        "Neweb Resources",
        "Product updates",
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-400 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Top Section: Logo + Footer Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-gray-700 pb-10"
      >
        {/* Logo + Description */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-2">neweb.ai</h2>
          <p className="text-sm">Powered by neweb.ai</p>
        </div>

        {/* Footer Links Sections */}
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#fff" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* Language Selector Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4 text-sm text-gray-500"
      >
        <div className="flex flex-col w-full sm:w-auto">
          <p className="text-[14px] font-bold text-white">Location and Language</p>
          <select className="bg-gray-800 border border-gray-600 rounded p-2 mt-1 w-full sm:w-40 text-gray-300 focus:outline-none">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </motion.div>

      {/* Bottom Bar: Copyright + Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500 border-t border-gray-700 pt-6 gap-4"
      >
        {/* Copyright */}
        <p className="text-center md:text-left">© 2025 neweb.ai</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5, color: "#fff" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <Icon className="w-5 h-5" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
