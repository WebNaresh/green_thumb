"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const projectImages = [
  {
    alt: "Khadakwasla Dam front view",
  },
  {
    src: "/placeholder.svg",
    alt: "Khadakwasla Dam aerial view",
  },
  {
    src: "/placeholder.svg",
    alt: "Khadakwasla Dam side view",
  },
  {
    src: "/placeholder.svg",
    alt: "Khadakwasla Dam water release",
  },
  {
    src: "/placeholder.svg",
    alt: "Khadakwasla Dam gates",
  },
  {
    src: "/placeholder.svg",
    alt: "Khadakwasla Dam spillway",
  },
];

export function ProjectGallery() {
  return (
    <section className="py-16 flex justify-center bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Khadakwasla <span className="text-green-600">Dam</span> Rejuvenation
            Project
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Khadakwasla Dam Ecosystem Revival project focuses on restoring
            the dam&apos;s ecosystem through desilting, water retention, and
            afforestation to support local farmers, biodiversity, and
            sustainable agriculture.
          </p>
          <p className="text-gray-600">
            Our projects&apos; success is a testament to the power of community
            involvement and dedication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Read more
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm text-gray-600">
                  Khadakwasla Dam Project by restoring the coastal are{" "}
                  <Button
                    variant="link"
                    className="text-green-600 p-0 h-auto font-semibold"
                  >
                    Readmore
                  </Button>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
