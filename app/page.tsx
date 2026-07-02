import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero/hero";
import { Philosophy } from "@/components/sections/philosophy/philosophy";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Philosophy />
      </main>
    </>
  );
}