import React from "react";
import {
  Palette,
  Globe,
  MonitorSmartphone,
  FileText,
  Zap,
  ShieldCheck,
  PenTool,
  LineChart,
} from "lucide-react";

// Features data array
const featuresData = [
  {
    icon: <PenTool className="w-7 h-7 text-white" />,
    title: "AI-Powered Design",
    description:
      "Our intelligent design system creates beautiful, conversion-optimized websites based on your input.",
  },
  {
    icon: <Palette className="w-7 h-7 text-white" />,
    title: "Custom Styling",
    description:
      "Easily customize colors, fonts, and layouts to match your brand identity and preferences.",
  },
  {
    icon: <Globe className="w-7 h-7 text-white" />,
    title: "Free Domain",
    description:
      "Get a free domain name for your first year, making it easy to establish your online presence.",
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7 text-white" />,
    title: "Responsive Templates",
    description:
      "All websites are fully responsive and look great on any device, from desktop to mobile.",
  },
  {
    icon: <FileText className="w-7 h-7 text-white" />,
    title: "Smart Content",
    description:
      "Generate professional content and copy for your website with our advanced AI technology.",
  },
  {
    icon: <LineChart className="w-7 h-7 text-white" />,
    title: "SEO Optimization",
    description:
      "Built-in SEO tools help your website rank higher in search results and attract more visitors.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-white" />,
    title: "Secure Hosting",
    description:
      "Enterprise-grade security and reliable hosting ensure your website is always available.",
  },
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: "Lightning Fast",
    description:
      "Optimized performance delivers lightning-fast loading times for the best user experience.",
  },
];

// Features Component
const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="font-bold leading-tight text-black tracking-tight drop-shadow-sm text-[42px] sm:text-[48px] md:text-[54px]">
          Everything You Need to Build <br /> Smarter Websites
        </h2>

        {/* Section Description */}
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-[18px] sm:text-[19px] md:text-[20px] leading-relaxed">
          Neweb.ai combines AI design, content, SEO, and performance optimization
          to deliver websites that convert and grow your business.
        </p>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-7 shadow-md 
                hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full 
                bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="font-semibold text-gray-900 text-[20px] sm:text-[22px]">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="mt-3 text-gray-500 leading-relaxed text-[15px] sm:text-[16px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
