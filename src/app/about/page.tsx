import type { Metadata } from "next"
import { AboutContent } from "./components/about-content"

export const metadata: Metadata = {
  title: "About Green Thumb Foundation | Environmental Conservation",
  description:
    "Learn about Green Thumb Foundation's mission, vision, and achievements in environmental protection through dam rejuvenation, afforestation, and community engagement.",
  keywords: [
    "Green Thumb Foundation",
    "environmental conservation",
    "dam rejuvenation",
    "afforestation",
    "community engagement",
    "Khadakwasla Dam",
  ],
}

export default function AboutPage() {
  return <AboutContent />
}

