import type { Metadata } from "next";
import { GreenWarriorGallery } from "./components/green-warrior-gallery";

export const metadata: Metadata = {
  title: "Green Warrior Booklet | Khadakwasla Dam Conservation Journey",
  description:
    "Explore the Green Warrior booklet showcasing our Khadakwasla Dam conservation efforts. View news cuttings, recognition letters, and the impact of our water conservation projects in Pune.",
  keywords: [
    "Green Warrior booklet",
    "Khadakwasla Dam conservation",
    "Pune water projects",
    "environmental initiatives",
    "Green Thumb Foundation achievements",
  ],
  openGraph: {
    title: "Green Warrior Booklet | Khadakwasla Dam Conservation Journey",
    description:
      "Discover the story of Khadakwasla Dam conservation through our Green Warrior booklet. See the impact of our water projects in Pune.",
    images: [
      {
        url: "https://www.greenthumbfoundation.org/main.png",
        width: 1200,
        height: 630,
        alt: "Green Warrior Booklet - Khadakwasla Dam Conservation",
      },
    ],
  },
};

export default function GreenWarriorPage() {
  return <GreenWarriorGallery />;
}
