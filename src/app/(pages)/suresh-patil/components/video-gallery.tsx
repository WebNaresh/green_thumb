"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: "video1",
    title: "Khadakwasla Dam Desilting Project Overview",
    thumbnail: "/images/video-thumbnail-1.jpg",
    youtubeId: "e7T47tLC5wQ",
  },
  {
    id: "video2",
    title: "Interview with Colonel Suresh Patil",
    thumbnail: "/images/video-thumbnail-2.jpg",
    youtubeId: "9s6BCpihVnM",
  },
  {
    id: "video3",
    title: "A Fight Beyond the Battlefield | Suresh Patil | TEDxVITPune",
    thumbnail: "/images/video-thumbnail-3.jpg",
    youtubeId: "lnw0avOuai4",
  },
  {
    id: "video4",
    title:
      "खडकवासला डॅम पुनर्भरण | कर्नल सुरेश पाटील | पर्यावरण | Khadakwasla Dam Refill | Colonel Suresh Pati",
    thumbnail: "/images/video-thumbnail-3.jpg",
    youtubeId: "uBqBqLKGe_w",
  },
  {
    id: "video5",
    title:
      "L.C. Suresh Patil | भारत-पाकिस्तान युद्धाचा किस्सा - अजूनही लढत आहोत, पर्यावरण दिनाचे विचार",
    thumbnail: "/images/video-thumbnail-3.jpg",
    youtubeId: "DNB4FxkjACk",
  },
];

export function VideoGallery() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-green-800 mb-8 text-center"
      >
        Video Gallery
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-800">
              {video.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
