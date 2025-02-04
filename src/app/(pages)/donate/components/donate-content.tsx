"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { Copy, Droplet, Heart, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function DonateContent() {
  const [donationAmount, setDonationAmount] = useState("1000");

  const handleDonationChange = (value: string) => {
    setDonationAmount(value);
  };

  const handleCustomDonation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(e.target.value);
  };

  const handleCopyDetail = (detail: string) => {
    navigator.clipboard.writeText(detail);
    alert(`${detail} copied to clipboard!`);
  };

  const impactItems = [
    {
      icon: Droplet,
      text: "1,000 liters of water saved",
      image: "/images/water-saved.jpg",
    },
    {
      icon: Users,
      text: "10 families provided with clean water",
      image: "/images/clean-water.jpg",
    },
    {
      icon: Heart,
      text: "Countless lives positively impacted",
      image: "/images/community-impact.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative mb-12 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/project/khadakwasla/khadakwasla_1 (3).jpg"
            alt="Panoramic view of Khadakwasla Dam"
            width={1200}
            height={400}
            className="w-full h-64 object-fill"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center px-4">
              Support Our Mission to Restore Khadakwasla Dam
            </h1>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-green-700">
              Your Donation Makes a Difference
            </h2>
            <p className="text-gray-600">
              Every contribution, no matter the size, brings us closer to
              securing Pune&apos;s water future. Your support helps fund crucial
              desilting operations, afforestation efforts, and community
              engagement programs.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                The Impact of Your Donation
              </h3>
              <ul className="space-y-6">
                {impactItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <item.icon className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Make Your Donation
            </h2>
            <RadioGroup
              defaultValue="1000"
              onValueChange={handleDonationChange}
              className="grid grid-cols-3 gap-4 mb-6"
            >
              {["500", "1000", "2000"].map((amount) => (
                <div key={amount}>
                  <RadioGroupItem
                    value={amount}
                    id={`amount-${amount}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`amount-${amount}`}
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    ₹{amount}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <div className="mb-6">
              <Label htmlFor="custom-amount">Custom Amount (₹)</Label>
              <Input
                type="number"
                id="custom-amount"
                placeholder="Enter custom amount"
                value={donationAmount}
                onChange={handleCustomDonation}
              />
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Donate ₹{donationAmount} with Razorpay
            </Button>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-green-600">
                Other Ways to Donate
              </h3>
              <div>
                <h4 className="font-semibold text-lg mb-2">Bank Transfer</h4>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="mb-2 flex justify-between items-center">
                    <span className="font-medium">Account Name:</span> Green
                    Thumb Foundation
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyDetail("Green Thumb Foundation")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </p>
                  <p className="mb-2 flex justify-between items-center">
                    <span className="font-medium">Account Number:</span>{" "}
                    050010110011240
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyDetail("050010110011240")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </p>
                  <p className="mb-2 flex justify-between items-center">
                    <span className="font-medium">IFSC Code:</span> BKID0000500
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyDetail("BKID0000500")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="font-medium">Bank Name:</span> Bank of
                    India, Pune Camp Branch
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleCopyDetail("Bank of India, Pune Camp Branch")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Scan to Pay</h4>
                <div className="mt-2 flex justify-center">
                  <Image
                    src="/qr-code.png"
                    alt="QR Code for donation"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Every Drop Counts, Every Donation Matters
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Your generosity today paves the way for a sustainable tomorrow. Join
            us in our mission to restore Khadakwasla Dam and secure Pune&apos;s
            water future for generations to come.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
