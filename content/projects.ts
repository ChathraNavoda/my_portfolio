import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "expense-tracker",

    title: "Expense Tracker",

    category: "Personal Finance",

    tagline: "Helping people understand where their money goes.",

    description:
      "A Flutter application for tracking daily expenses with a focus on simplicity, performance, and intuitive interactions.",

    challenge:
      "Most expense trackers become cluttered over time. I wanted something that stayed simple even after months of use.",

    solution:
      "I designed a clean architecture with predictable state management and a UI focused on quick daily interactions.",

    impact:
      "Improved my understanding of scalable Flutter architecture and state management.",

    learnings:
      "This project reinforced that good architecture isn't about adding layers—it's about reducing future complexity.",

    technologies: [
      "Flutter",
      "Riverpod",
      "Firebase",
      "Clean Architecture"
    ],

    github: "#",

    image: "/projects/expense-tracker.png",

    featured: true,
  },
];