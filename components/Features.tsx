"use client";
import { motion } from "framer-motion";
import { LuSmartphone, LuShieldCheck, LuZap, LuUsers } from "react-icons/lu";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import React, { useState } from "react";

const features = [
  {
    icon: <LuSmartphone className="h-10 w-10" />,
    title: "Modern Interface",
    description: "Sleek and intuitive design that makes navigation a breeze",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: <LuShieldCheck className="h-10 w-10" />,
    title: "Secure & Private",
    description: "Your data is protected with industry-leading security measures",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <LuZap className="h-10 w-10" />,
    title: "Lightning Fast",
    description: "Optimized performance for quick and responsive interactions",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <LuUsers className="h-10 w-10" />,
    title: "Community Driven",
    description: "Join a growing community of engaged users",
    color: "from-emerald-500 to-teal-500"
  },
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="features" className="relative overflow-hidden bg-black px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
      {/* 3D perspective wrapper */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-black to-black" />
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-500/10 blur-[100px]" />
      
      <ContainerScroll
        titleComponent={
          <motion.div 
            className="mb-12 sm:mb-16 md:mb-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block">
              <motion.span 
                className="inline-block mb-3 sm:mb-4 px-4 py-1.5 text-xs font-medium text-purple-200 bg-purple-950/60 rounded-full"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                WHY CHOOSE US
              </motion.span>
            </div>
            
            <h2 className="mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent">
              Why Choose Luvsab?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Discover the features that make our app stand out from the rest
            </p>
          </motion.div>
        }
      >
        <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 perspective-1000">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-purple-500/10 bg-gray-950 p-6 sm:p-8 transition-all duration-300 
                  hover:shadow-[0_0_30px_4px_rgba(168,85,247,0.1)] group-hover:border-purple-500/30"
                style={{
                  transform: hoveredIndex === index ? "translateZ(20px) rotateX(2deg) rotateY(2deg)" : "translateZ(0) rotateX(0) rotateY(0)",
                  transition: "transform 0.3s ease"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-950/5 to-black" />
                
                {/* Feature content */}
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-6 sm:mb-8 relative">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.color} opacity-20 blur-md`} />
                    <motion.div 
                      className={`relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} text-white p-3`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {React.cloneElement(feature.icon, {
                        className: "h-8 w-8"
                      })}
                    </motion.div>
                  </div>
                  
                  {/* Text content */}
                  <h3 className="mb-3 text-xl sm:text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
                  
                  {/* Learn more link */}
                  <div className="mt-4 sm:mt-6 text-sm font-medium">
                    <motion.a 
                      href="#" 
                      className={`group/link inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      Learn more
                      <svg className="ml-1 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA button */}
        <motion.div 
          className="mt-12 sm:mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#" 
            className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[2px] text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="relative rounded-full bg-black px-5 py-2.5 transition-all duration-200 ease-in-out hover:bg-transparent">
              Explore All Features
            </span>
          </a>
        </motion.div>
      </ContainerScroll>
    </section>
  );
} 