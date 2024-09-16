import { prisma } from "@portfolio/db";
import Image from "next/image";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { ContactUsModal } from "./_components/contact-modal";

export default function HomePage() {
  return (
    <main className="container min-h-screen pt-40">
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-[5rem]">
          Lassen Sie uns einfach Taten sprechen.
        </h1>
      </div>

      <div className="flex flex-col mt-16 w-full gap-3">
        <div className="w-full rounded-lg relative border-[1.5px] border-black/10">
          <Image
            src="/raplarue.png"
            width={2048}
            height={0}
            alt="Rap La Rue Project Image"
            className="rounded-lg invert "
          />
        </div>
        <p className="text-xs text-black/50">Administrationsoberfläche des Projekts Rap La Rue mithilfe von Next.js, Tailwind, Prisma</p>
      </div>

      <div className="py-32 flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col gap-3 items-center">
          <p className="text-4xl font-semibold tracking-tight max-w-3xl text-center">Wir setzen Wert darauf, ihr Produkt nach Ihren Wünschen zu realisieren.</p>
          <p className="text-2xl font-medium tracking-tight max-w-lg text-black/50 text-center">
            <Balancer>Stellen Sie mithilfe unserem Projektrechner eine unverbindliche Anfrage.</Balancer>
          </p>
        </div>

        <ContactUsModal>
          <div className="tracking text-xs px-3 py-2 bg-blue-600 rounded-full text-white">Kontaktieren Sie uns</div>
        </ContactUsModal>
      </div>
    </main>
  );
}
