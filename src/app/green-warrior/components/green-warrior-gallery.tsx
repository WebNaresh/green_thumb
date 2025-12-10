"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Download, BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";

// Images (Sample for brevity, normally you'd map all)
const bookletImages = Array.from({ length: 46 }, (_, i) => ({
  src: `/green_warrior/${i + 1}.jpg`,
  alt: `Green Warrior Booklet Page ${i + 1}`,
  page: i + 1,
}));

export function GreenWarriorGallery() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Header Section */}
      <section className="bg-[#1a3c2f] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <BookOpen className="w-96 h-96 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-800 text-green-200 text-xs font-bold tracking-widest uppercase mb-4">
              Archive
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">
              The Green Warrior <br className="hidden md:block" /> <span className="text-green-400">Chronicles</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              A digital archive of our journey, featuring news clippings, recognition letters, and the documented impact of the Khadakwasla conservation project.
            </p>

            <Button className="bg-white text-green-900 hover:bg-green-100 font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <Download className="mr-2 h-5 w-5" /> Download Full Archive (PDF)
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {bookletImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative group cursor-pointer bg-white p-2 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-sm"
                >
                  <div className="overflow-hidden relative aspect-[3/4]">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="mt-3 flex justify-between items-center px-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Page {image.page}</span>
                    <ChevronRight className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden bg-black/95 border-none text-white">
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                  <div className="relative h-full w-full max-h-[85vh]">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-gray-400 text-sm">{image.alt}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
