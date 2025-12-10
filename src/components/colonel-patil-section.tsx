"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, Shield, Users, Mic, Quote, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ColonelPatilSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-50 -skew-x-12 -translate-x-20 z-0" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Main Bio Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Image Column (5 cols) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-600 rounded-2xl rotate-3 transform translate-x-2 translate-y-2 opacity-20"></div>
              <Image
                src="/img/suresh_patil.png"
                alt="Colonel Suresh Patil"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full object-cover relative z-10"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 border border-gray-100 max-w-[200px]">
                <Shield className="w-8 h-8 text-green-600 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Service</p>
                  <p className="font-bold text-gray-900">35 Years Army Veteran</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-8 pl-0 lg:pl-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-2">
                The Visionary
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Colonel Suresh Patil
              </h2>
              <div className="relative pl-6 border-l-4 border-green-500/30">
                <Quote className="absolute -top-2 -left-3 w-6 h-6 text-green-500 bg-white p-1" />
                <p className="text-xl text-gray-600 italic">
                  "Nature doesn't need us, we need nature. Protecting our water sources isn't charity; it's a battle for our own survival."
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              A retired army officer, Colonel Patil has channeled his discipline and leadership into a new mission: saving Pune's water. As the founder of Green Thumb, he has tirelessly led the Khadakwasla dam desilting project, proving that one person's vision can mobilize an entire city.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <Award className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-700">Environmental Advocate</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-700">Community Leader</span>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/suresh-patil">
                <Button className="h-12 px-8 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all hover:shadow-lg">
                  Read Full Biography <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Podcast Feature - Wide Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Abstract blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold uppercase">
                <Mic className="w-3 h-3" />
                <span>Featured Podcast</span>
              </div>
              <h3 className="text-3xl font-bold">Listen to the Colonel's Message</h3>
              <p className="text-gray-400 text-lg">
                In this exclusive episode, Col. Patil discusses the urgent need for desilting and invites the youth to join the Green Warrior movement.
              </p>
              <Button variant="outline" className="border-white/20 text-green-800 hover:bg-white/10 hover:text-white rounded-full">
                View All Episodes
              </Button>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/lF6EfkZVols?si=vCJ5jvqDsphz4S8U" // removed autoplay for UX
                  title="Colonel Patil's Environmental Podcast"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
