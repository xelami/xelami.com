import { LucideIcon } from "lucide-react"
import { Icons } from "@/config/icons"

export const values: Value[] = [
  {
    heading: "Zero Bloat",
    icon: Icons.trendingUp,
    description:
      "Every line of code has a cost. We ruthlessly eliminate complexity and keep our systems lean, focusing only on what delivers real value.",
  },
  {
    heading: "Async by Default",
    icon: Icons.clock,
    description:
      "We minimize synchronous communication. No pointless standups or status meetings - just efficient async updates and meaningful discussions when needed.",
  },
  {
    heading: "Ship Fast, Ship Often",
    icon: Icons.bolt,
    description:
      "Quick iterations beat perfect execution. We build, deploy, and iterate rapidly using modern CI/CD practices and automated testing.",
  },
  {
    heading: "Performance First",
    icon: Icons.chart,
    description:
      "We optimize for speed at every level - from database queries to frontend rendering. If it can run faster, it should.",
  },
  {
    heading: "Modern Stack",
    icon: Icons.flex,
    description:
      "We embrace cutting-edge tools and frameworks that boost productivity. TypeScript, React, Next.js, and other modern tech that gets the job done right.",
  },
  {
    heading: "AI Augmented",
    icon: Icons.robot,
    description:
      "We leverage AI tools to automate repetitive tasks and enhance development speed. From code generation to testing, AI amplifies our capabilities.",
  },
]

type Value = {
  heading: string
  icon: LucideIcon
  description: string
}
