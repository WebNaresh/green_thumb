import type { Metadata } from "next";
import { AboutContent } from "./components/about-content";

export const metadata: Metadata = {
  title: "About Green Thumb | 25 Years of Environmental Impact",
  description:
    "Discover the story behind Green Thumb Foundation. From a retired Colonel's vision to a massive people's movement revitalizing Khadakwasla Dam since 1996.",
  keywords: [
    "Green Thumb History",
    "Environmental NGO Impact",
    "Colonel Suresh Patil Biography",
    "Khadakwasla Dam Timeline",
    "Pune Conservation Team",
  ],
  openGraph: {
    title: "Our Story: 28 Years, 2.5 Million+ Truckloads of Silt Removed",
    description:
      "Meet the team and the visionaries who turned a simple idea into Pune's largest citizen-led water conservation movement.",
    url: "https://www.greenthumbfoundation.org/about",
    images: ["/about-og.jpg"],
  },
  alternates: {
    canonical: "https://www.greenthumbfoundation.org/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
    </>
  )
}
