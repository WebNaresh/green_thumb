"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Droplet, Leaf, Users, PlayCircle } from "lucide-react";
import Link from "next/link"; // Fixed import

export function VideoSection() {
  const projectItems = [
    {
      icon: Droplet,
      title: "Dam Desilting",
      description:
        "Restoring water capacity by removing silt, directly securing the region's water future.",
    },
    {
      icon: Users,
      title: "Community Action",
      description:
        "Mobilizing thousands of volunteers to participate in large-scale environmental conservation.",
    },
    {
      icon: Leaf,
      title: "Ecosystem Revival",
      description:
        "Planting native species and creating habitats to boost local biodiversity.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/50 -skew-x-12 transform origin-top-right z-0" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* Video Column */}
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform hover:scale-[1.01] duration-500">
              <div className="aspect-video bg-gray-900 relative group">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nxHxwyPykXo?si=syw7PmymKBpB9nbE&autoplay=0"
                  title="GreenThumb Projects Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Overlay for aesthetic (optional, disappears on play if using custom player, but for iframe we keep it clean) */}
              </div>
            </div>
            {/* Decorative pattern behind video */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-green-500/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest">
                <PlayCircle className="w-3 h-3" />
                <span>Our Impact</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Turning Environmental <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
                  Challenges into Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                See how GreenThumb is transforming landscapes and lives. From removing tons of silt to planting forests, our mission is tangible and measurable.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1">
              {projectItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4 items-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="shrink-0 p-3 rounded-full bg-green-50 text-green-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20 transition-all hover:translate-y-[-2px]">
                <Link href="/project">
                  View All Projects
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
