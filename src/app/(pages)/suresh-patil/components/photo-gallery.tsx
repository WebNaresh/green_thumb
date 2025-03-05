"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    id: "photo1",
    src: "/colonel-patil/patil1.jpg",
    alt: "Colonel Patil at Khadakwasla Dam",
  },
  {
    id: "photo2",
    src: "/colonel-patil/patil2.jpg",
    alt: "Colonel Patil during a tree planting event",
  },
  {
    id: "photo3",
    src: "/colonel-patil/patil3.jpg",
    alt: "Colonel Patil addressing volunteers",
  },
  {
    id: "photo4",
    src: "/colonel-patil/patil4.jpg",
    alt: "Colonel Patil receiving an award",
  },
  {
    id: "photo5",
    src: "/colonel-patil/patil5.jpg",
    alt: "Colonel Patil inspecting desilting work",
  },
  {
    id: "photo6",
    src: "/colonel-patil/patil1.jpg",
    alt: "Colonel Patil with government officials",
  },
];

export function PhotoGallery() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-green-800 mb-8 text-center"
      >
        Photo Gallery
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    layout="fill"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogTitle>{photo.alt}</DialogTitle>
                <div className="relative aspect-square">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="mt-2 text-center text-gray-700">{photo.alt}</p>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
