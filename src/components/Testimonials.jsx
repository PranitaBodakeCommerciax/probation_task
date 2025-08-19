import React, { useRef, useState } from "react";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import feedback from "../assets/feedback.mp4";

const Testimonials = () => {
  // Ref to control the video element
  const videoRef = useRef(null);
  // State to track if the video is playing
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause for the video
  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // ==========================
    // Testimonials Section
    // ==========================
    <section
      id="testimonials"
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
    >
      {/* ==========================
          Decorative Background Blobs
         ========================== */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
      </div>

      {/* ==========================
          Main Content
         ========================== */}
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-[32px] md:text-[42px] font-extrabold mb-4 transition-all duration-500 hover:scale-105">
          What Our Users Say
        </h2>

        {/* Subtext */}
        <p className="mb-10 text-[15px] sm:text-[18px] leading-relaxed max-w-3xl mx-auto text-gray-700">
          Hear from satisfied <span className="text-indigo-600 font-semibold">Neweb.ai</span>{" "}
          users who’ve unlocked seamless, AI-powered website creation — complete with
          free domains, SEO, and lightning-fast hosting.
        </p>

        {/* ==========================
            Testimonial Cards Wrapper
           ========================== */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          
          {/* Testimonial 1 - Video */}
          <div className="relative bg-white shadow-lg rounded-3xl overflow-hidden w-full md:w-[600px] h-[300px] sm:h-[320px] lg:h-[340px] transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            {/* Video */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onClick={handlePlay} // toggle play/pause on click
            >
              <source src={feedback} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-white drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </div>

          {/* Testimonial 2 - User Card */}
          <div className="bg-white rounded-2xl overflow-hidden flex flex-col p-5 w-full sm:w-[300px] h-[300px] sm:h-[320px] lg:h-[340px] shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 ease-in-out text-left">
            {/* User Avatar */}
            <div className="w-[60px] h-[60px] rounded-full mb-4 bg-white shadow flex items-center justify-center mx-auto sm:mx-0 transition-transform duration-500 hover:scale-110">
              <img
                src={user1}
                alt="Mohammad Ali"
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>

            {/* User Text Content */}
            <div className="flex-grow flex flex-col">
              <p className="text-gray-600 font-semibold mb-1 text-[14px] sm:text-[15px] md:text-[16px]">
                -- Mohammad Ali
              </p>
              <span className="text-gray-500 text-[13px] sm:text-[14px]">
                Creative Director, StudioLens
              </span>
              <p className="text-gray-700 mt-3 leading-normal text-[14px] sm:text-[15px] md:text-[16px]">
                “Neweb.ai turned my vision into a fully functional website in minutes — complete with free domain, SSL, and stunning SEO — no coding required!”
              </p>
            </div>
          </div>

          {/* Testimonial 3 - User Card */}
          <div className="bg-white rounded-2xl overflow-hidden flex flex-col p-5 w-full sm:w-[300px] h-[300px] sm:h-[320px] lg:h-[340px] shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 ease-in-out text-left">
            {/* User Avatar */}
            <div className="w-[60px] h-[60px] rounded-full mb-4 bg-white shadow flex items-center justify-center mx-auto sm:mx-0 transition-transform duration-500 hover:scale-110">
              <img
                src={user2}
                alt="Sarah Khan"
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>

            {/* User Text Content */}
            <div className="flex-grow flex flex-col">
              <p className="text-gray-600 font-semibold mb-1 text-[14px] sm:text-[15px] md:text-[16px]">
                -- Sarah Khan
              </p>
              <span className="text-gray-500 text-[13px] sm:text-[14px]">
                Product Manager, Neweb.ai
              </span>
              <p className="text-gray-700 mt-3 leading-normal text-[14px] sm:text-[15px] md:text-[16px]">
                “Neweb.ai optimized our entire website creation process. SEO, hosting, speed — everything came together effortlessly. Game-changer for our team!”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
