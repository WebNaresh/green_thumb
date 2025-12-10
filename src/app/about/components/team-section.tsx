"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, User } from "lucide-react"

export function TeamSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Guiding Force</h2>
        <p className="text-gray-600">The dedicated leadership behind the movement.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Founder Card */}
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full md:w-2/5 min-h-[250px] md:min-h-0">
            <Image
              src="/img/suresh_patil.png"
              alt="Col. Suresh Patil"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:w-3/5 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Col. Suresh Patil (Retd.)</h3>
            <p className="text-green-600 font-medium mb-4">Founder & President</p>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              A visionary leader who turned a personal mission into a mass movement for water conservation.
            </p>
            <Link href="/suresh-patil">
              <Button variant="outline" className="group">
                Read His Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Volunteers Card */}
        <motion.div
          className="bg-green-900 text-white rounded-2xl overflow-hidden shadow-xl flex flex-col justify-center p-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Decorative bg */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-800 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-12 h-12 bg-green-800/50 rounded-lg flex items-center justify-center mb-6">
              <User className="w-6 h-6 text-green-300" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Our Green Warriors</h3>
            <p className="text-green-200 mb-6 leading-relaxed">
              The thousands of volunteers, students, and citizens who form the backbone of our on-ground efforts.
            </p>
            <Link href="/green-warrior">
              <Button className="bg-white text-green-900 hover:bg-green-50 border-none">
                Join the Team
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

