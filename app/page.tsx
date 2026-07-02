import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero/hero";
import { Philosophy } from "@/components/sections/philosophy/philosophy";
import { FeaturedProjects } from "@/components/sections/projects/featured-projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Philosophy />
        <FeaturedProjects />
      </main>
    </>
  );
}