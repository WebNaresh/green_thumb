import type { Metadata } from "next"
import { GreenWarriorGallery } from "./components/green-warrior-gallery"

export const metadata: Metadata = {
  title: "Green Warrior Booklet | Green Thumb Foundation",
  description:
    "Explore our Green Warrior booklet, featuring news cuttings, government recognition letters, and more information about our environmental initiatives.",
}

export default function GreenWarriorPage() {
  return <GreenWarriorGallery />
}

