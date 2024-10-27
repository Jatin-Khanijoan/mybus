// import React from 'react';
import { FiMapPin, FiClock, FiShield } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden">
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

            {/* CTA Button - Uncomment if needed */}
            {/* <div className="pt-4 sm:pt-6">
              <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold 
                               bg-white/90 text-gray-800 border border-[#ff3333] 
                               rounded-full transition-all duration-300 
                               hover:bg-red-50 hover:border-[#ff6666] 
                               hover:shadow-[0_0_15px_rgba(255,51,51,0.4)] 
                               focus:outline-none focus:ring-2 
                               focus:ring-[rgba(255,51,51,0.5)] relative 
                               overflow-hidden group">
                <span className="relative z-10">Book Your Bus Now</span>
                <span className="absolute inset-0 bg-gradient-to-r 
                               from-[#ff3333] to-[#ff6666] opacity-0 
                               group-hover:opacity-100 transition-opacity 
                               duration-300"></span>
              </button>
            </div> */}
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