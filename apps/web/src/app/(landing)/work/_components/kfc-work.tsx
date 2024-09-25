import Image from "next/image";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandPrisma, TbLetterB, TbLetterP, TbWoman } from "react-icons/tb";

export default function KfcWorkPage() {
  return (
    <div className="min-h-screen container py-12 gap-5 flex sm:flex-row flex-col ">
      <div className="flex flex-col gap-12 xl:max-w-lg lg:max-w-md md:max-w-sm">
        <div className="flex flex-col gap-5">
          <p className="text-6xl font-bold tracking-tight">KFC</p>
          <p className="text-xl font-semibold text-black/50 tracking-tight">
          Trilogys Studios konnte KFC dabei unterstützen, hochkritische Sicherheitslücken zu beheben und einen umfassenden Proof-of-Concept bereitstellen. 
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
              <TbBrandPrisma size={36} />
              <p className="tracking-tight text-3xl font-semibold">Prisma</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <TbLetterB size={36} />
              <p className="tracking-tight text-3xl font-semibold">Burpsuite</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <TbWoman size={36} />
              <p className="tracking-tight text-3xl font-semibold">HexRays IDA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-12 relative">
        <Image
          src="/images/kfc-showcase.png"
          width={700}
          height={0}
          alt="Coding Image"
          className="rounded-lg border-[1.5px] border-black/10"
        />

        <Image
          src="/images/kfc-code.png"
          width={700}
          height={0}
          alt="Coding Image"
          className="rounded-lg invert border-[1.5px] border-white/10"
        />
      </div>
    </div>
  );
}