import type { Metadata } from "next";
import { GreenWarriorGallery } from "./components/green-warrior-gallery";

export const metadata: Metadata = {
  title: "Green Warrior | The Magazine of Environmental Guardians",
  description:
    "Download the 'Green Warrior' booklet. A chronicle of our 25-year journey, filled with inspiring stories, volunteer testimonials, and the spirit of conservation.",
  keywords: [
    "Green Warrior Magazine",
    "Environmental Educational Resources",
    "Conservation Success Stories",
    "Volunteer Manual",
    "Green Thumb Publications",
  ],
  openGraph: {
    title: "Read 'Green Warrior' - Our Legacy in Print",
    description:
      "Access our exclusive digital archive. Read the inspiring stories of the men and women behind the movement.",
    url: "https://www.greenthumbfoundation.org/green-warrior",
    images: ["/green-warrior-og.jpg"],
  },
  alternates: {
    canonical: "https://www.greenthumbfoundation.org/green-warrior",
  },
};

export default function GreenWarriorPage() {
  return <GreenWarriorGallery />;
}
