"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Mobile3D } from "./Mobile3D";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-black">
      {/* Background pattern from heropatterns.com */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "url('https://raw.githubusercontent.com/tailwindlabs/heropatterns/master/topography.svg')",
        backgroundSize: '300px sm:500px'
      }} />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-1 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            <div className="relative space-y-4">
              <GlowingEffect
                blur={20}
                glow={true}
                disabled={false}
                variant="white"
                className="absolute inset-0"
              />
              <div className="relative z-10 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Luvsab
                  </span>
                </h1>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                  Experience the next generation of mobile innovation. Download Luvsab today and join thousands of satisfied users.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.luvsab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block transform transition-transform duration-200 hover:scale-105"
                  >
                    <Image 
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                      alt="Get it on Google Play" 
                      width={180}
                      height={53}
                      className="h-10 sm:h-12 w-auto"
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center lg:block lg:ml-auto">
            <Mobile3D />
          </div>
        </div>
      </div>
    </section>
  );
} 