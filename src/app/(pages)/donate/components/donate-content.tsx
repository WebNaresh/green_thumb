"use client";

import { RazorpayDonation } from "@/components/razorpay-donation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Copy, Droplet, Heart, Users, HandHeart } from "lucide-react";
import Image from "next/image";

export function DonateContent() {
  const handleCopyDetail = (label: string, detail: string) => {
    navigator.clipboard.writeText(detail);
    alert(`${label} copied to clipboard`);
  };

  const impactItems = [
    {
      icon: Droplet,
      title: "Water Conservation",
      text: "Every ₹100 helps remove 1 ton of silt, directly increasing the dam's storage capacity.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Community Support",
      text: "Donations support the farmers who receive the nutrient-rich silt for free.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: Heart,
      title: "Ecological Restoration",
      text: "Funds go towards planting native trees that protect the catchment area.",
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Hero Header */}
      <section className="bg-green-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <HandHeart className="w-96 h-96 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-800 text-green-200 text-xs font-bold tracking-widest uppercase mb-4">
              Support Our Mission
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">
              Invest in Our <span className="text-green-400">Future</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Join the movement to restore Khadakwasla Dam. Your contribution directly impacts water security for millions in Pune.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left: Impact Story */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h3>
              <div className="grid gap-6">
                {impactItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                    <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-green-50 rounded-2xl p-8 border border-green-100"
            >
              <h3 className="text-xl font-bold text-green-900 mb-4">Why we need your help?</h3>
              <p className="text-green-800 mb-4 leading-relaxed">
                Desilting is a resource-intensive process requiring heavy machinery (excavators, tippers) and fuel. While we have the will and the volunteers, the operational costs are significant.
              </p>
              <p className="text-green-800 font-semibold">
                100% of your donation goes directly to the field operations.
              </p>
            </motion.div>
          </div>

          {/* Right: Donation Form & Bank Details */}
          <div className="lg:col-span-5 space-y-8">

            {/* Online Donation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
              <RazorpayDonation />
            </motion.div>

            {/* Bank Transfer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" /> Direct Bank Transfer
              </h3>

              <div className="space-y-3">
                {[
                  { label: "Account Name", value: "Green Thumb Foundation" },
                  { label: "Account Number", value: "050010110011240" },
                  { label: "IFSC Code", value: "BKID0000500" },
                  { label: "Branch", value: "Bank of India, Pune Camp" }
                ].map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group cursor-pointer"
                    onClick={() => handleCopyDetail(detail.label, detail.value)}
                  >
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{detail.label}</p>
                      <p className="text-sm font-semibold text-gray-900">{detail.value}</p>
                    </div>
                    <Copy className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 text-center"
            >
              <p className="text-sm font-bold text-gray-900 mb-4">Scan UP QR Code</p>
              <div className="inline-block p-2 bg-white rounded-xl border border-gray-200">
                <Image
                  src="/qr-code.png"
                  alt="Donation QR Code"
                  width={180}
                  height={180}
                  className="rounded-lg"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
