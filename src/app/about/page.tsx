import type { Metadata } from "next";
import { AboutContent } from "./components/about-content";

export const metadata: Metadata = {
  title: "About Green Thumb Foundation | Khadakwasla Dam Conservation",
  description:
    "Discover Green Thumb Foundation's mission to restore Khadakwasla Dam and secure Pune's water future. Learn about our water conservation projects, achievements, and team.",
  keywords: [
    "Green Thumb Foundation",
    "Khadakwasla Dam restoration",
    "Pune water conservation",
    "environmental projects",
    "dam desilting",
  ],
  openGraph: {
    title: "About Green Thumb Foundation | Khadakwasla Dam Conservation",
    description:
      "Learn about our mission to restore Khadakwasla Dam and secure Pune's water future through innovative conservation projects.",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Thumb Foundation - About Us",
      },
    ],
  },
};

export default function AboutPage() {
  return 
  <AboutContent />;
}
