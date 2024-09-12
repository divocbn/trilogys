import { prisma } from "@portfolio/db";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container min-h-screen pt-40">
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-[5rem]">
          Lassen Sie uns einfach Taten sprechen.
        </h1>
      </div>

      <div className="mt-16 w-full bg-black/40 rounded-lg relative border border-white/70">
        <Image
          src="/raplarue.png"
          width={2048}
          height={0}
          alt="Rap La Rue Project Image"
          className="rounded-md invert "
        />
        <div className="absolute bottom-0 h-28 backdrop-blur-sm bg-black/70 w-full rounded-b-lg items-center flex">
          <div className="container text-white/80 items-center">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">

                <p className="text-xl font-medium">Projekt: Rap La Rue</p>
                <p className="text-xs">
                  In diesem Projekt ging es primär darum, eine Plattform bereitzustellen auf welcher Nutzer Bewerbungen in Form eines Videos hochladen können. <br />
                  In der Administrationsoberfläche hat unser Entwicklerteam eine Plattform geboten, in welcher das Team von Rap La Rue die Bewerbungen evaluieren, sortieren & verwalten konnte.</p>
              </div>

              <div className="flex flex-col">

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
