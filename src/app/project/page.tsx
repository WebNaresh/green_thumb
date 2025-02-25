import type { Metadata } from "next";
import { ProjectContent } from "./components/project-content";
import { ProjectGallery } from "./components/project-gallery";

export const metadata: Metadata = {
  title: "Khadakwasla Dam Rejuvenation Project | Green Thumb Foundation",
  description:
    "Discover the Khadakwasla Dam Rejuvenation Project by Green Thumb Foundation. Learn about our efforts in desilting, afforestation, and enhancing water storage for a sustainable future.",
  keywords: [
    "Khadakwasla Dam",
    "Green Thumb Foundation",
    "dam rejuvenation",
    "desilting",
    "afforestation",
    "water storage",
    "sustainability",
    "water conservation",
    "Pune water security",
  ],
  openGraph: {
    title: "Khadakwasla Dam Rejuvenation Project | Green Thumb Foundation",
    description:
      "Join us in our mission to rejuvenate Khadakwasla Dam through desilting, afforestation, and water storage enhancement. Secure Pune's water future with Green Thumb Foundation.",
    url: "https://www.greenthumbfoundation.org/project",
    images: [
      {
        url: "https://www.greenthumbfoundation.org/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Khadakwasla Dam Rejuvenation Project",
      },
    ],
  },
};

export default function ProjectPage() {
  return (
    <>
      <ProjectContent />
      <ProjectGallery />
    </>
  );
}
