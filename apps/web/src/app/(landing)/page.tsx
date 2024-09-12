import { prisma } from "@portfolio/db";

export default function HomePage() {
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Turborepo boilerplate
        </h1>

        <h2 className="text-2xl font-semibold tracking-tight">By @divocbn</h2>
      </div>
    </main>
  );
}
