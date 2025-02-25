import { ThankYouContent } from "@/app/(pages)/thank-you/component/thank-you-content";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Thank You for Your Donation | Green Thumb Foundation",
  description:
    "Thank you for supporting our mission to restore Khadakwasla Dam and secure Pune's water future.",
};

const ThankYouPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
};

export default ThankYouPage;
