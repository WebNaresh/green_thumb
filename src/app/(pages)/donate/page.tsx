import type { Metadata } from "next";
import { DonateContent } from "./components/donate-content";

export const metadata: Metadata = {
  title:
    "Donate to Green Thumb Foundation | Support Khadakwasla Dam Conservation",
  description:
    "Support our mission to restore Khadakwasla Dam and secure Pune's water future. Your donation helps fund crucial water conservation projects and environmental initiatives.",
  keywords: [
    "donate",
    "Green Thumb Foundation",
    "Khadakwasla Dam",
    "water conservation",
    "environmental protection",
    "Pune water security",
  ],
  openGraph: {
    title: "Donate to Green Thumb Foundation",
    description:
      "Your support can make a difference in Pune's water future. Donate now to help restore Khadakwasla Dam.",
    images: [
      {
        url: "/donate-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Support Green Thumb Foundation's Water Conservation Efforts",
      },
    ],
  },
};

export default function DonatePage() {
  return <DonateContent />;
}
