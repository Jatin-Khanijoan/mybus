// import React from 'react';
import { FiMapPin, FiClock, FiShield } from "react-icons/fi";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darker overlay for better text visibility */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source 
            src="https://res.cloudinary.com/dnvh2fya6/video/upload/v1730553506/MyBus/WhatsApp_Video_2024-11-02_at_16.02.52_sxdecj.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full min-h-[100dvh] flex items-center justify-center">
        {/* Content Section */}
        <div className="mt-10 relative px-4 sm:px-6 lg:px-12 z-20 py-12 text-center lg:text-left">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-xl w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight glow-text">
              <span className="block text-white mb-2">Your Journey,</span>
              <span className="block text-white">Our Priority</span>
            </h1>

            {/* Subheading - Updated color */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90">
              Safe, Reliable, and Comfortable Bus Rentals for Your Travel Needs
            </p>

            {/* Feature Tags - Updated styling for better visibility */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
              {[
                { icon: FiMapPin, text: "Maharashtra" },
                { icon: FiClock, text: "24/7 Support" },
                { icon: FiShield, text: "Safety Guaranteed" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm sm:text-base 
                           bg-white/90 px-3 py-1.5 rounded-full border border-white/20 
                           backdrop-blur-sm"
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3333]" />
                  <span className="text-gray-800 whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button - Centered on mobile */}
            <div className="pt-1 sm:pt-6 flex justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => {navigate('/buses')}}
                className="w-3/4 sm:w-auto px-6 md:px-10 py-6 md:py-7 text-xl font-bold
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
      </div>
    </section>
  );
};

export default HeroSection;