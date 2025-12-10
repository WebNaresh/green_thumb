"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    <section className="relative h-screen max-h-[900px] overflow-hidden font-sans">
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
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 flex items-center justify-center">
            <Image
              src="/img/hero.png"
              alt="Hero Image"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        )}
        {/* Improved Overlay: Darker on the left for text readability, fading to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent sm:via-black/50"></div>
        {/* Bottom fade for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 md:px-6 flex items-center">
        <div className="max-w-4xl pt-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            {/* Urgent Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-md">
              <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-red-100 text-sm font-bold tracking-wider uppercase">
                Urgent Attention Needed
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-light text-gray-300 tracking-wide">
                Pune&apos;s Water Security is at Risk
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight text-shadow-sm">
                Khadakwasla Dam: <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  80% Filled with Silt
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed border-l-4 border-yellow-500 pl-6">
              The city&apos;s lifeline is choking. Every day we wait, our water crisis deepens.
              Join the movement to desilt Khadakwasla and secure Pune&apos;s future.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 h-14 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all duration-300 transform hover:-translate-y-1 font-bold"
            >
              <Link href="/donate">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm text-lg px-8 h-14 rounded-full transition-all duration-300 group"
            >
              <Link href="/project">
                Learn More
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust/Impact Mini-Section */}
          <motion.div
            className="mt-16 flex items-center gap-8 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex -space-x-4">
              {[
                "/img/nana_patekar.jpg",
                "/img/makrand_anaspure.jpg",
                "/img/suresh_patil.png",
              ].map((src, i) => (
                <div key={i} className="relative w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-gray-600">
                  <Image src={src} alt="Supporter" fill className="object-cover" />
                </div>
              ))}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black bg-yellow-500 text-black font-bold text-xs ring-2 ring-black">
                +1k
              </div>
            </div>
            <div className="text-sm">
              <span className="font-bold text-white text-lg block">1,200+ Supporters</span>
              have contributed this month
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-xs text-white uppercase tracking-widest hidden sm:block">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
