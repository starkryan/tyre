"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Mobile3D() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [-15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 1]);

  return (
    <div ref={ref} className="relative h-[30rem] sm:h-[35rem] md:h-[40rem] w-full overflow-hidden">
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          opacity,
        }}
        className="group relative mx-auto h-full w-[280px] sm:w-[320px] md:w-[384px] max-w-full perspective-1000"
      >
       
        <div className="preserve-3d relative h-full w-full rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-black bg-black shadow-2xl">
          <div className="absolute inset-0 rounded-[1.8rem] sm:rounded-[2rem] bg-white">
            <Image
              src="https://yi-ai.s3.eu-central-1.amazonaws.com/prod/809000/809024/2024/04/16-0626735-661e260a9d7f1.png"
              alt="App Preview"
              fill
              className="rounded-[1.8rem] sm:rounded-[2rem] object-cover"
              priority
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 384px"
            />
          </div>
          {/* Phone Details */}
          <div className="absolute -left-1.5 sm:-left-2 top-8 h-4 sm:h-6 w-0.5 sm:w-1 rounded-r-lg bg-gray-700" />
          <div className="absolute -left-1.5 sm:-left-2 top-16 sm:top-20 h-8 sm:h-12 w-0.5 sm:w-1 rounded-r-lg bg-gray-700" />
          <div className="absolute -left-1.5 sm:-left-2 top-28 sm:top-36 h-8 sm:h-12 w-0.5 sm:w-1 rounded-r-lg bg-gray-700" />
          <div className="absolute -right-1.5 sm:-right-2 top-12 sm:top-16 h-12 sm:h-16 w-0.5 sm:w-1 rounded-l-lg bg-gray-700" />
          {/* Camera & Speaker */}
          <div className="absolute left-1/2 top-3 sm:top-4 h-3 sm:h-4 w-16 sm:w-20 -translate-x-1/2 rounded-full bg-black" />
        </div>
      </motion.div>
    </div>
  );
} 