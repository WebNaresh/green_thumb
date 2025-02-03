"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

// This array would contain all 46 images. For brevity, I'm showing a smaller sample.
const bookletImages = [
  { src: "/green_warrior/1.jpg", alt: "Green Warrior Booklet Cover", type: "cover" },
{ src: "/green_warrior/2.jpg", alt: "Green Warrior Booklet Page 1", type: "page" },

{ src: "/green_warrior/3.jpg", alt: "Green Warrior Booklet Page 2", type: "page" },
{ src: "/green_warrior/4.jpg", alt: "Green Warrior Booklet Page 3", type: "page" },
{ src: "/green_warrior/5.jpg", alt: "Green Warrior Booklet Page 4", type: "page" },
{ src: "/green_warrior/6.jpg", alt: "Green Warrior Booklet Page 5", type: "page" },
{ src: "/green_warrior/7.jpg", alt: "Green Warrior Booklet Page 6", type: "page" },
{ src: "/green_warrior/8.jpg", alt: "Green Warrior Booklet Page 7", type: "page" },
{ src: "/green_warrior/9.jpg", alt: "Green Warrior Booklet Page 8", type: "page" },
{ src: "/green_warrior/10.jpg", alt: "Green Warrior Booklet Page 9", type: "page" },
{ src: "/green_warrior/11.jpg", alt: "Green Warrior Booklet Page 10", type: "page" },

{ src: "/green_warrior/12.jpg", alt: "Green Warrior Booklet Page 11", type: "page" },
{ src: "/green_warrior/13.jpg", alt: "Green Warrior Booklet Page 12", type: "page" },
{ src: "/green_warrior/14.jpg", alt: "Green Warrior Booklet Page 13", type: "page" },   
{ src: "/green_warrior/15.jpg", alt: "Green Warrior Booklet Page 14", type: "page" },
{ src: "/green_warrior/16.jpg", alt: "Green Warrior Booklet Page 15", type: "page" },
{ src: "/green_warrior/17.jpg", alt: "Green Warrior Booklet Page 16", type: "page" },
{ src: "/green_warrior/18.jpg", alt: "Green Warrior Booklet Page 17", type: "page" },
{ src: "/green_warrior/19.jpg", alt: "Green Warrior Booklet Page 18", type: "page" },
{ src: "/green_warrior/20.jpg", alt: "Green Warrior Booklet Page 19", type: "page" },
{ src: "/green_warrior/21.jpg", alt: "Green Warrior Booklet Page 20", type: "page" },
{ src: "/green_warrior/22.jpg", alt: "Green Warrior Booklet Page 21", type: "page" },
{ src: "/green_warrior/23.jpg", alt: "Green Warrior Booklet Page 22", type: "page" },
{ src: "/green_warrior/24.jpg", alt: "Green Warrior Booklet Page 23", type: "page" },
{ src: "/green_warrior/25.jpg", alt: "Green Warrior Booklet Page 24", type: "page" },
{ src: "/green_warrior/26.jpg", alt: "Green Warrior Booklet Page 25", type: "page" },
{ src: "/green_warrior/27.jpg", alt: "Green Warrior Booklet Page 26", type: "page" },
{ src: "/green_warrior/28.jpg", alt: "Green Warrior Booklet Page 27", type: "page" },
{ src: "/green_warrior/29.jpg", alt: "Green Warrior Booklet Page 28", type: "page" },
{ src: "/green_warrior/30.jpg", alt: "Green Warrior Booklet Page 29", type: "page" },
{ src: "/green_warrior/31.jpg", alt: "Green Warrior Booklet Page 30", type: "page" },
{ src: "/green_warrior/32.jpg", alt: "Green Warrior Booklet Page 31", type: "page" },
{ src: "/green_warrior/33.jpg", alt: "Green Warrior Booklet Page 32", type: "page" },
{ src: "/green_warrior/34.jpg", alt: "Green Warrior Booklet Page 33", type: "page" },
{ src: "/green_warrior/35.jpg", alt: "Green Warrior Booklet Page 34", type: "page" },
{ src: "/green_warrior/36.jpg", alt: "Green Warrior Booklet Page 35", type: "page" },
{ src: "/green_warrior/37.jpg", alt: "Green Warrior Booklet Page 36", type: "page" },
{ src: "/green_warrior/38.jpg", alt: "Green Warrior Booklet Page 37", type: "page" },
{ src: "/green_warrior/39.jpg", alt: "Green Warrior Booklet Page 38", type: "page" },
{ src: "/green_warrior/40.jpg", alt: "Green Warrior Booklet Page 39", type: "page" },
{ src: "/green_warrior/41.jpg", alt: "Green Warrior Booklet Page 40", type: "page" },
{ src: "/green_warrior/42.jpg", alt: "Green Warrior Booklet Page 41", type: "page" },
{ src: "/green_warrior/43.jpg", alt: "Green Warrior Booklet Page 42", type: "page" },
{ src: "/green_warrior/44.jpg", alt: "Green Warrior Booklet Page 43", type: "page" },
{ src: "/green_warrior/45.jpg", alt: "Green Warrior Booklet Page 44", type: "page" },
{ src: "/green_warrior/46.jpg", alt: "Green Warrior Booklet Page 45", type: "page" },

  
  // ... add all 46 images here
]

export function GreenWarriorGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">


        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {bookletImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow h-auto w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} layout="fill" objectFit="cover" />
                  <div className="absolute inset-0  flex items-end p-2">
  
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-3xl w-full p-2 sm:p-6">
                <DialogHeader>
                  <DialogTitle>{image.alt}</DialogTitle>
                  <DialogDescription>{image.type}</DialogDescription>
                </DialogHeader>
                <div className="relative aspect-[3/4] w-full h-[70vh] sm:h-auto">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} layout="fill" objectFit="contain" />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2">
            <Download className="mr-2 h-4 w-4" />
            Download Full Booklet (PDF)
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

