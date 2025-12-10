"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Maximize2 } from "lucide-react";

const projectImages = [
  {
    src: "/project/khadakwasla/khadakwasla_1 (1).jpg",
    alt: "Wide angle view of desilting operations",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    src: "/project/khadakwasla/khadakwasla_1 (2).jpg",
    alt: "Excavators working on the dry bed",
    span: "col-span-1"
  },
  {
    src: "/project/khadakwasla/khadakwasla_1 (3).jpg",
    alt: "Transporting nutrient-rich silt",
    span: "col-span-1"
  },
  {
    src: "/project/khadakwasla/khadakwasla_1 (4).jpg",
    alt: "Community volunteers planting trees",
    span: "col-span-1 md:col-span-1"
  },
  {
    src: "/project/khadakwasla/khadakwasla_1 (5).jpg",
    alt: "Water filling up the rejuvenated areas",
    span: "col-span-1 md:col-span-1"
  },
  {
    src: "/project/khadakwasla/khadakwasla_1 (6).jpg",
    alt: "Before and after comparison",
    span: "col-span-1 md:col-span-2"
  },
];

export function ProjectGallery() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Visual Documentation</h2>
            <p className="text-gray-600 max-w-lg">
              Snapshots from over a decade of relentless work on the ground.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {projectImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 ${image.span || 'col-span-1'}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 p-2 rounded-full backdrop-blur-sm">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
