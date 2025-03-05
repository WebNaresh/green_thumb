import type { Metadata } from "next";
import { ColonelPatilContent } from "./components/colonel-patil-content";

export const metadata: Metadata = {
  title: "Colonel Suresh Patil | Green Thumb Foundation",
  description:
    "Discover the inspiring journey and impactful work of Colonel Suresh Patil, the visionary behind Green Thumb Foundation's Khadakwasla Dam conservation efforts.",
  keywords: [
    "Colonel Suresh Patil",
    "Green Thumb Foundation",
    "Khadakwasla Dam",
    "environmental conservation",
    "water management",
    "Pune",
  ],
  openGraph: {
    title: "Colonel Suresh Patil | Green Thumb Foundation",
    description:
      "Learn about Colonel Suresh Patil's dedication to environmental conservation and water management in Pune.",
    url: "https://www.greenthumbfoundation.org/suresh-patil",
    images: ["/colonel-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GreenThumbFound",
    creator: "@GreenThumbFound",
    title: "Colonel Suresh Patil | Green Thumb Foundation",
    description:
      "Learn about Colonel Suresh Patil's dedication to environmental conservation and water management in Pune.",
    images: ["/colonel-og.png"],
  },
};

export default function ColonelPatilPage() {
  return <ColonelPatilContent />;
}
