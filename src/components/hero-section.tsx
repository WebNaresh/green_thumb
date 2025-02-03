"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.addEventListener("loadeddata", () => setIsVideoLoaded(true));
    }
    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => setIsVideoLoaded(true));
      }
    };
  }, []);

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {isVideoLoaded ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/khadakwasala.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-300 flex items-center justify-center">
            <Image
              src="/img/hero.png"
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 md:px-8">
        <div className="flex h-full flex-col justify-center items-start max-w-xl text-white">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-white font-semibold text-lg md:text-xl uppercase tracking-wider">
              Urgent: Pune&apos;s Water Security at Risk
            </h2>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Khadakwasla Dam: 80% Filled with Silt, Pune&apos;s Water Future in
              Danger
            </h1>
            <p className="text-lg sm:text-xl text-green-50">
              Every day we wait, Pune moves closer to a water crisis. The
              Khadakwasla Dam, our city&apos;s lifeline, is crying for help.
              Desilting isn&apos;t just an option – it&apos;s our responsibility
              to secure Pune&apos;s water future.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="#donate"
              className="inline-block bg-yellow-500 text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
            >
              Donate Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
