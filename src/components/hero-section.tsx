"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
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
      <div className="relative z-10 grid h-full md:grid-cols-2">
        {/* Left Content Section with Green Background */}
        <motion.div
          className="relative bg-green-600 p-8 md:p-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-full flex-col justify-center space-y-6 text-white max-w-xl">
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
                Khadakwasla Dam: 80% Filled with Silt, Pune&apos;s Water Future
                in Danger
              </h1>
              <p className="text-lg sm:text-xl text-green-50">
                Every day we wait, Pune moves closer to a water crisis. The
                Khadakwasla Dam, our city&apos;s lifeline, is crying for help.
                Desilting isn&apos;t just an option – it&apos;s our
                responsibility to secure Pune&apos;s water future.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-green-600 hover:bg-green-50 group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </motion.div>
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
          {/* Decorative Corner Shape */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="w-16 h-16 bg-green-600 rotate-45 transform origin-center"></div>
          </div>
        </motion.div>

        {/* Right Video Section */}
        <div className="relative h-full overflow-hidden">
          {isVideoLoaded ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600">Loading video...</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      {/* Mobile Video (shown below content on small screens) */}
      <div className="md:hidden relative h-96">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </section>
  );
}
