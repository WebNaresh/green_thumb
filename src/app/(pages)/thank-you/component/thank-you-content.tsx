"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

import { motion } from "framer-motion";
import { Share } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface DonationDetails {
  paymentId: string;
  amount: string;
  name: string;
}

export function ThankYouContent() {
  const [donationDetails, setDonationDetails] =
    useState<DonationDetails | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const paymentId = searchParams.get("paymentId");
    const amount = searchParams.get("amount");
    const name = searchParams.get("name");

    if (paymentId && amount && name) {
      setDonationDetails({ paymentId, amount, name });
    }
  }, [searchParams]);

  //   const handleDownloadCertificate = () => {
  //     if (donationDetails) {
  //       generateCertificate(
  //         donationDetails.name,
  //         donationDetails.amount,
  //         donationDetails.paymentId
  //       );
  //       toast({
  //         title: "Certificate Downloaded",
  //         description:
  //           "Your donation certificate has been generated and downloaded.",
  //       });
  //     }
  //   };

  const handleShareDonation = () => {
    if (donationDetails) {
      const shareText = `I just donated ₹${donationDetails.amount} to support Green Thumb Foundation's mission to restore Khadakwasla Dam and secure Pune's water future. Join me in making a difference! https://www.greenthumbfoundation.org/donate`;

      if (navigator.share) {
        navigator
          .share({
            title: "My Donation to Green Thumb Foundation",
            text: shareText,
            url: "https://www.greenthumbfoundation.org/donate",
          })
          .then(() => {
            toast({
              title: "Shared Successfully",
              description: "Thank you for spreading the word!",
            });
          })
          .catch((error) => {
            console.error("Error sharing:", error);
            toast({
              title: "Sharing Failed",
              description: "An error occurred while sharing. Please try again.",
              variant: "destructive",
            });
          });
      } else {
        // Fallback for browsers that don't support the Web Share API
        navigator.clipboard
          .writeText(shareText)
          .then(() => {
            toast({
              title: "Copied to Clipboard",
              description:
                "Share text has been copied. You can now paste it wherever you'd like!",
            });
          })
          .catch((error) => {
            console.error("Error copying to clipboard:", error);
            toast({
              title: "Copy Failed",
              description: "An error occurred while copying. Please try again.",
              variant: "destructive",
            });
          });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8 text-center"
        >
          <Image
            src="/logo.png"
            alt="Thank you illustration"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-green-800 mb-4">
            Thank You for Your Donation!
          </h1>
          {donationDetails && (
            <p className="text-xl text-gray-600 mb-6">
              Dear {donationDetails.name}, your generous donation of ₹
              {donationDetails.amount} will make a real difference in our
              mission to restore Khadakwasla Dam.
            </p>
          )}
          <p className="text-gray-600 mb-8">
            Your support brings us one step closer to securing Pune&apos;s water
            future. We&apos;re truly grateful for your contribution to this
            vital cause.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Your generosity today paves the way for a sustainable tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {/* <Button
              onClick={handleDownloadCertificate}
              className="bg-green-600 hover:bg-green-700"
            >
              <Download className="mr-2 h-4 w-4" /> Download Certificate
            </Button> */}
            <Button onClick={handleShareDonation} variant="outline">
              <Share className="mr-2 h-4 w-4" /> Share Your Impact
            </Button>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              What Your Donation Supports
            </h2>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• Desilting operations at Khadakwasla Dam</li>
              <li>• Afforestation efforts in the catchment area</li>
              <li>• Community engagement and education programs</li>
              <li>• Sustainable water management initiatives</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
