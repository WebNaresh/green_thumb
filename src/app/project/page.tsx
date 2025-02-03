import type { Metadata } from "next";
import { ProjectContent } from "./components/project-content";
import { ProjectGallery } from "./components/project-gallery";

export const metadata: Metadata = {
  title: "Khadakwasla Dam Rejuvenation Project | Green Thumb Foundation",
  description:
    "Learn about our dam rejuvenation project through desilting, afforestation, and water storage enhancement for sustainability.",
};

export default function ProjectPage() {
  return (
    <>
      <ProjectContent />
      <ProjectGallery />
    </>
  );
}
