import { Button } from "@portfolio/ui/button";

import Image from "next/image";

import { PiFramerLogoFill } from 'react-icons/pi';

import { RiDrizzleFill, RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandAmazon, TbBrandVercel, TbMusicX } from 'react-icons/tb';

export default function RapLaRueWorkPage() {
  return (
    <div className="min-h-screen container py-32 gap-5 flex sm:flex-row flex-col">
      <div className="flex flex-col gap-12 xl:max-w-lg lg:max-w-md md:max-w-sm">
        <div className="flex flex-col gap-5">
          <p className="text-6xl font-bold tracking-tight">Rap La Rue</p>
          <p className="text-xl font-semibold text-black/50 tracking-tight">
            Trilogys Studios ist verantwortlich für das UI / UX & die gesamte Bewerbungsplattform für Rap La Rue.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-3 items-end">
            <p className="text-3xl font-semibold text-black/20">01</p>
            <h1 className="text-3xl font-semibold tracking-tight">Technology Stack</h1>
          </div>

          <p className="text-xl font-semibold text-black/50 tracking-tight">
            In diesem Projekt wurden folgende Technologien verwendet:
          </p>

          <div className="flex flex-row gap-6 flex-wrap mt-2">
            <div className="flex flex-row gap-2 items-center text-black/80">
              <RiNextjsFill size={36} />
              <p className="tracking-tight text-3xl font-semibold">Next.js</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <RiTailwindCssFill size={36} />
              <p className="tracking-tight text-3xl font-semibold">Tailwind</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <RiDrizzleFill size={36} />
              <p className="tracking-tight text-3xl font-semibold">Drizzle</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <TbBrandVercel size={36} />
              <p className="tracking-tight text-3xl font-semibold">Vercel</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <PiFramerLogoFill size={36} />
              <p className="tracking-tight text-3xl font-semibold">Framer</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <TbMusicX size={36} />
              <p className="tracking-tight text-3xl font-semibold">Mux</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <TbBrandAmazon size={36} />
              <p className="tracking-tight text-3xl font-semibold">Amazon R2</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-3 items-end">
            <p className="text-3xl font-semibold text-black/20">02</p>
            <h1 className="text-3xl font-semibold tracking-tight">Feedback</h1>
          </div>

          <p className="text-sm max-w-md font-medium text-black/50 tracking-tight">
            "In der Entwicklung haben wir Trilogys Studios die komplette kreative Kontrolle über das Projekt gegeben. Vom Konzept über das UI-Design bis hin zur vollständigen Entwicklung wurde alles eigenständig umgesetzt. Diese Entscheidung war der beste Schritt, den wir je machen konnten. Dadurch konnten wir Rekorde brechen und den Gewinn von Rap La Rue auf ein neues Niveau heben."
          </p>

          <p className="text-sm tracking-tight">— Randy Ngani Ekowa, CEO von Rap La Rue</p>

        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-3 items-end">
            <p className="text-3xl font-semibold text-black/20">03</p>
            <h1 className="text-3xl font-semibold tracking-tight">Website</h1>
          </div>

          <p className="text-xl font-semibold text-black/50 tracking-tight mt-2">
            <Button>
              Besuchen Sie Rap La Rue
              </Button>
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-12 relative">
        <Image
          src="/raplarue.png"
          width={700}
          height={0}
          alt="Coding Image"
          className="rounded-lg invert border-[1.5px] border-white/10"
        />

        <Image
          src="/coding.png"
          width={700}
          height={0}
          alt="Coding Image"
          className="rounded-lg invert border-[1.5px] border-white/10"
        />
      </div>
    </div>
  );
}