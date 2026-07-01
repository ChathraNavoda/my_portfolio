import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32">

        <div className="mx-auto max-w-6xl px-6">

          <h1 className="text-6xl font-bold">
            Hello.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
            Building something beautiful...
          </p>

        </div>

      </main>
    </>
  );
}