import type { Metadata } from "next";
import { ThankYouContent } from "./component/thank-you-content";

export const metadata: Metadata = {
  title: "Thank You for Your Donation | Green Thumb Foundation",
  description:
    "Thank you for supporting our mission to restore Khadakwasla Dam and secure Pune's water future.",
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
