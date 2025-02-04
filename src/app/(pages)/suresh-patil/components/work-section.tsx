"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Droplet, Leaf, Users } from "lucide-react";

const workItems = [
  {
    icon: Droplet,
    title: "Khadakwasla Dam Desilting",
    description:
      "Spearheaded the massive desilting project, removing millions of cubic meters of silt and significantly increasing the dam's water storage capacity.",
  },
  {
    icon: Leaf,
    title: "Afforestation Initiatives",
    description:
      "Led extensive tree-planting campaigns in the dam's catchment area, enhancing biodiversity and reducing soil erosion.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Mobilized local communities and volunteers, creating awareness about water conservation and environmental protection.",
  },
  {
    icon: Award,
    title: "Policy Advocacy",
    description:
      "Actively engaged with government bodies to promote sustainable water management policies and practices.",
  },
];

export function WorkSection() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-green-800 mb-8 text-center"
      >
        Impactful Work
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {workItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <item.icon className="h-6 w-6 mr-2 text-green-600" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
