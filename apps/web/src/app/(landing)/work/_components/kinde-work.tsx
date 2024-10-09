import Image from "next/image";
import { RiAngularjsFill, RiFirebaseFill, RiGoogleFill, RiReactjsFill, RiYoutubeFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";

export default function KindeWorkPage() {
  return (
    <div className="min-h-screen container py-12 gap-5 flex sm:flex-row flex-col ">
      <div className="flex flex-col gap-12 xl:max-w-lg lg:max-w-md md:max-w-sm">
        <div className="flex flex-col gap-5">
          <p className="text-6xl font-bold tracking-tight">Icon Music</p>
          <p className="text-xl font-semibold text-black/50 tracking-tight">
            Trilogys Studios realisierte zu der Bewerbungsphase von ICON 4 eine umfassende Bewerbungsplattform.
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
              <RiReactjsFill size={36} />
              <p className="tracking-tight text-3xl font-semibold">React</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <RiFirebaseFill size={36} />
              <p className="tracking-tight text-3xl font-semibold">Firebase</p>
            </div>


            <div className="flex flex-row gap-2 items-center text-black/80">
              <TbBrandRedux size={36} />
              <p className="tracking-tight text-3xl font-semibold">Redux</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <TbBrandRedux size={36} />
              <p className="tracking-tight text-3xl font-semibold">Redux</p>
            </div>
            <div className="flex flex-row gap-2 items-center text-black/80">
              <RiGoogleFill size={36} />
              <p className="tracking-tight text-3xl font-semibold">Material UI</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-black/80">
              <RiYoutubeFill size={36} />
              <p className="tracking-tight text-3xl font-semibold">YouTube API</p>
            </div>

          </div>
        </div>


      </div>
      <div className="flex flex-col flex-1 gap-12 relative">
        <Image
          src="/images/icon-showcase.png"
          width={700}
          height={0}
          alt="Coding Image"
          className="rounded-lg border-[1.5px] border-black/10"
        />

      </div>
    </div>
  );
}