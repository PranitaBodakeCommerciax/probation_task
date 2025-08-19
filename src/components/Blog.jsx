import React from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.png";

const Blog = () => {
  // Blog data array
  const blogs = [
    {
      id: 1,
      category: "AI & Technology",
      readTime: "3 min read",
      title: "How AI is Transforming Web Development",
      description:
        "Discover how artificial intelligence is shaping the future of web design and development, making processes smarter and faster.",
      img: blog1,
      date: "Aug 18, 2025",
    },
    {
      id: 2,
      category: "Productivity",
      readTime: "5 min read",
      title: "Boost Your Workflow with Neweb.ai Tools",
      description:
        "Learn tips and tricks on how Neweb.ai’s suite of tools can optimize your productivity and streamline your work process.",
      img: blog2,
      date: "Aug 10, 2025",
    },
    {
      id: 3,
      category: "Innovation",
      readTime: "4 min read",
      title: "The Future of AI-Driven Business Solutions",
      description:
        "Explore the potential of AI-driven solutions in modern businesses and how Neweb.ai is leading the innovation.",
      img: blog3,
      date: "Aug 01, 2025",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
      
      {/* Section Heading */}
      <h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[45px] font-bold text-gray-900 mb-4">
        Latest from Neweb.ai Blog
      </h2>
      <p className="text-[16px] sm:text-[18px] text-gray-600 mb-12 px-2 sm:px-12">
        Stay updated with AI insights, tech trends, and Neweb.ai updates.
      </p>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 
                       hover:scale-105 hover:shadow-2xl text-left flex flex-col"
          >
            {/* Blog Image */}
            <div className="overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover transform transition duration-500 hover:scale-110"
              />
            </div>

            {/* Blog Content */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between">
              <div>
                {/* Category & Read Time */}
                <p className="text-[12px] sm:text-[14px] text-gray-400 mb-2">
                  {blog.category} • {blog.readTime}
                </p>

                {/* Blog Title */}
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3 transition duration-300 hover:text-purple-700">
                  {blog.title}
                </h3>

                {/* Blog Description */}
                <p className="text-[13px] sm:text-[14px] text-gray-600 mb-4">
                  {blog.description}
                </p>
              </div>

              {/* Footer: Read More and Date */}
              <div className="flex justify-between items-center text-[12px] sm:text-[14px] text-gray-500">
                <button className="text-blue-600 font-medium hover:underline hover:text-purple-700 transition duration-300 text-[13px] sm:text-[14px]">
                  Read More →
                </button>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-10 sm:mt-12">
        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white rounded-[16px] sm:rounded-[20px] 
                           font-medium text-[14px] sm:text-[16px] transform transition duration-500 
                           hover:scale-105 hover:from-[#5B21B6] hover:to-[#7E22CE]">
          Explore All Blog Posts
        </button>
      </div>
    </section>
  );
};

export default Blog;
