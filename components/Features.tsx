"use client";
import { motion } from "framer-motion";
import { LuSmartphone, LuShieldCheck, LuZap, LuUsers } from "react-icons/lu";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import React from "react";

const features = [
  {
    icon: <LuSmartphone className="h-10 w-10" />,
    title: "Modern Interface",
    description: "Sleek and intuitive design that makes navigation a breeze",
  },
  {
    icon: <LuShieldCheck className="h-10 w-10" />,
    title: "Secure & Private",
    description: "Your data is protected with industry-leading security measures",
  },
  {
    icon: <LuZap className="h-10 w-10" />,
    title: "Lightning Fast",
    description: "Optimized performance for quick and responsive interactions",
  },
  {
    icon: <LuUsers className="h-10 w-10" />,
    title: "Community Driven",
    description: "Join a growing community of engaged users",
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-black to-black" />
      <ContainerScroll
        titleComponent={
          <div className="mb-8 sm:mb-12 md:mb-20 text-center">
            <h2 className="mb-3 sm:mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent">
              Why Choose Luvsab?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Discover the features that make our app stand out from the rest
            </p>
          </div>
        }
      >
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border border-purple-500/20 bg-black p-4 sm:p-6 lg:p-8 transition-all hover:border-purple-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-3 sm:mb-4 text-purple-400 transition-colors group-hover:text-pink-400">
                  {React.cloneElement(feature.icon, {
                    className: "h-8 w-8 sm:h-10 sm:w-10"
                  })}
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
} 