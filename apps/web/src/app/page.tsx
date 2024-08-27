import { prisma } from "@portfolio/db";

export default async function HomePage() {
  const users = await prisma.user.findMany();

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Turborepo boilerplate
        </h1>

        <h2 className="text-2xl font-semibold tracking-tight">By @divocbn</h2>

        {users.map(user =>
          <p key={user.id}>{user.name}</p>
        )}
      </div>
    </main>
  );
}
