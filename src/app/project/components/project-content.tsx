"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Droplet, Leaf, Sprout, Users, ArrowRight, Mountain } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const impactData = [
  {
    title: "Water Storage",
    description: "Systematic desilting has restored the dam's original capacity, securing water for millions.",
    icon: Droplet,
    stats: "+2.5M",
    unit: "Liters Capacity"
  },
  {
    title: "Farmer Prosperity",
    description: "Nutrient-rich silt distributed free of cost has transformed barren lands into fertile fields.",
    icon: Sprout,
    stats: "5,000+",
    unit: "Farmers Benefited"
  },
  {
    title: "Green Cover",
    description: "Massive afforestation drives in the catchment area to prevent future soil erosion.",
    icon: Leaf,
    stats: "100k+",
    unit: "Trees Planted"
  },
  {
    title: "Community Action",
    description: "Mobilizing thousands of volunteers to protect and preserve our water bodies.",
    icon: Users,
    stats: "15k+",
    unit: "Volunteers Engaged"
  }
];

export function ProjectContent() {
  const containerRef = useRef(null);

  return (
    <div className="bg-white min-h-screen font-sans" ref={containerRef}>
      {/* Hero Header */}
      <section className="bg-green-900 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Mountain className="w-96 h-96 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-800 text-green-300 text-xs font-bold tracking-widest uppercase mb-6 border border-green-700">
              Flagship Project
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight leading-none">
              Khadakwasla <span className="text-green-400">Rejuvenation</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-2xl font-light">
              Restoring the lifeline of Pune through systematic desilting, community action, and ecological restoration.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-16 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left Scrollable Content */}
          <div className="lg:col-span-7 space-y-16">

            {/* Introduction */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 prose prose-lg text-gray-600 prose-headings:text-green-800">
              <p className="lead">
                The Khadakwasla Dam is the primary source of water for Pune city. Over decades, silt accumulation had drastically reduced its storage capacity, threatening the water security of millions.
              </p>
              <p>
                Green Thumb Foundation initiated a historic movement to mechanically remove this silt and simultaneously strengthen the dam's catchment area through afforestation. This dual approach ensures sustainable water storage while preventing future soil erosion.
              </p>
            </div>

            {/* Impact Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Project Impact</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {impactData.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0 mb-4">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-xs mb-4 leading-relaxed h-12 overflow-hidden">{item.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-green-700">{item.stats}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.unit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button className="rounded-full h-12 px-8 text-lg bg-green-600 hover:bg-green-700 shadow-lg shadow-green-200">
                Download Project Report <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Sticky Visuals */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="sticky top-24 space-y-6">

              {/* Video Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-200">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/QBSI04GL-KM?si=x_HdjsM7rz4TnMIO"
                  title="Khadakwasla Dam Rejuvenation Project"
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Map Card */}
              <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">Project Location</div>
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30991.728388852043!2d73.760782!3d18.426988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc294328c4cd70b%3A0x15cb8277f7f11f1f!2sGreen%20Thumb%2C%20Khadakwasla%20-%20Phase%203%2C%20Pune!5e1!3m2!1sen!2sin!4v1765372755642!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>

              {/* Action Card */}
              <div className="bg-green-900 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-400" /> Join the Movement
                  </h4>
                  <p className="text-green-100 text-sm mb-4 leading-relaxed">
                    We need volunteers for the upcoming plantation drive this weekend.
                  </p>
                  <Button variant="outline" className="w-full border-green-700 text-green-100 hover:bg-green-800 hover:text-white border-opacity-50">
                    Become a Volunteer
                  </Button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
