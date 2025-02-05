"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    id: "photo1",
    src: "/colonel-patil/patil2.jpg",
    alt: "Colonel Patil at Khadakwasla Dam",
    caption: "Colonel Patil inspecting the Khadakwasla Dam desilting project",
  },
  {
    id: "photo2",
    src: "/colonel-patil/patil3.jpg",
    alt: "Colonel Patil at Khadakwasla Dam",
    caption: "Colonel Patil discussing plans with the project team",
  },
  {
    id: "photo3",
    src: "/colonel-patil/patil4.jpg",
    alt: "Colonel Patil during a tree planting event",
    caption: "Colonel Patil leading a community tree planting initiative",
  },
  {
    id: "photo4",
    src: "/colonel-patil/patil5.jpg",
    alt: "Colonel Patil addressing volunteers",
    caption: "Colonel Patil motivating volunteers at a conservation event",
  },
];

export function PhotoGallery() {
  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-green-800 mb-8 text-center"
      >
        Photo Gallery
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={500}
                height={500}
                className="object-cover object-center"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
