"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AndroidDemo } from "./AndroidDemo";
import { IoHeartSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { TypingAnimationDemo } from "./Type";

// Floating animation for decorative elements
const floatingAnimation = {
  initial: { y: 0 },
  animate: { 
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-purple-950/90 to-black">
      {/* Interactive gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(219, 39, 119, 0.3), rgba(147, 51, 234, 0.2), transparent)`,
        }} 
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 w-full h-full">
        <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen flex flex-col">
          {/* Content wrapper */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mt-0">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            >
              <div className="flex flex-col items-center lg:items-start space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    <span className="relative inline-block">
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-pink-600/30 blur-2xl"></span>
                      <span className="relative bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        <IoHeartSharp className="inline-block -mt-2 mr-2 text-pink-500" />sab
                      </span>
                    </span>
                  </span>
                </motion.div>
              </div>

              <motion.p
                className="text-base sm:text-lg text-gray-300/90 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Experience the next generation of mobile innovation. Download Luvsab today and join thousands of satisfied users.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center lg:justify-start w-full"
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.luvsab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-105 hover:brightness-110"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="w-[180px] sm:w-[200px] h-auto drop-shadow-lg"
                    priority
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right column - App demo */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px]">
                {/* Glow effect behind the phone */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-transparent blur-2xl rounded-full transform scale-110" />
                <div className="relative">
                  <AndroidDemo />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 