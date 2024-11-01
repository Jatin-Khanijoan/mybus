// import React from 'react';
import { FiMapPin, FiClock, FiShield } from "react-icons/fi";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-10 relative w-full min-h-[100dvh] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(-45deg,#ffffff,#ffebeb,#ffd6d6,#ff9999)] bg-[length:400%_400%] animate-[gradientBG_15s_ease_infinite]" />

      {/* Main Content Container */}
      <div className="relative w-full min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Content Section */}
        <div className="relative px-4 sm:px-6 lg:px-12 flex items-center justify-center lg:justify-start z-10 py-12 lg:py-0">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-xl w-full">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight glow-text">
              <span className="block text-[#ff3333] mb-2">Your Journey,</span>
              <span className="block text-gray-800">Our Priority</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
              Safe, Reliable, and Comfortable Bus Rentals for Your Travel Needs
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {[
                { icon: FiMapPin, text: "Maharashtra" },
                { icon: FiClock, text: "24/7 Support" },
                { icon: FiShield, text: "Safety Guaranteed" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm sm:text-base 
                           bg-white/90 px-3 py-1.5 rounded-full border border-[#ff3333] 
                           transition-all duration-300 hover:bg-red-50 
                           hover:border-[#ff6666] hover:shadow-[0_0_15px_rgba(255,51,51,0.4)]"
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3333]" />
                  <span className="text-gray-800 whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-1 sm:pt-6">
              <Button
                size="lg"
                onClick={() => {navigate('/buses')}}
                className="w-3/4 sm:w-full px-6 md:px-10 py-6 md:py-7 text-xl font-bold
                          bg-gradient-to-r from-[#ff3333] to-[#ff4d4d] text-white
                          rounded-full transition-all duration-500 
                          transform hover:scale-105
                          hover:shadow-[0_0_30px_rgba(255,51,51,0.6)]
                          focus:outline-none focus:ring-4
                          focus:ring-[#ff3333]/30 relative
                          overflow-hidden group"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="relative z-10">Book Your Bus Now</span>
                  <svg 
                    className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r 
                            from-[#ff4d4d] to-[#ff6666] opacity-0
                            group-hover:opacity-100 transition-opacity 
                            duration-500"></div>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="relative h-full w-full hidden lg:block">
          <div className="absolute inset-0 bg-black/10 z-10" />
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source 
              src="https://res.cloudinary.com/dnvh2fya6/video/upload/v1729980686/MyBus/142755-780943401_small_ymnske.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;