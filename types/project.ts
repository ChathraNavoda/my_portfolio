export type Project = {
  slug: string;

  title: string;

  category: string;

  tagline: string;

  description: string;

  challenge: string;

  solution: string;

  impact?: string;

  learnings: string;

  technologies: string[];

  github?: string;

  live?: string;

  image: string;

  featured: boolean;
};