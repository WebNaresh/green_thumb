import type { Metadata } from "next";
import { ColonelPatilContent } from "./components/colonel-patil-content";

export const metadata: Metadata = {
  title: "Colonel Suresh Patil | Green Thumb Foundation",
  description:
    "Discover the inspiring journey and impactful work of Colonel Suresh Patil, the visionary behind Green Thumb Foundation's Khadakwasla Dam conservation efforts.",
  openGraph: {
    title: "Colonel Suresh Patil | Green Thumb Foundation",
    description:
      "Learn about Colonel Suresh Patil's dedication to environmental conservation and water management in Pune.",
    images: [
      {
        url:"https://www.greenthumbfoundation.org/main.png/colonel-patil-og-image.png",
        width: 1200,
        height: 630,
        alt: "Colonel Suresh Patil",
      },
    ],
  },
};

export default function ColonelPatilPage() {
  return <ColonelPatilContent />;
}
