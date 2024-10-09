import * as React from "react"

import { Button } from "@portfolio/ui/button"
import Ripple from "@portfolio/ui/magicui/ripple"
import { TbMailExclamation } from "react-icons/tb";
import { PiMailboxDuotone, PiMouseScrollLight } from "react-icons/pi";

export default function TeamPage() {
  return (
    <main className="flex flex-col -mt-[6.5rem]">
      <div className="min-h-screen relative  bg-black flex flex-col items-center justify-center py-36 gap-4 w-full">
        <p className='vt-name-[headline] text-transparent py-2 bg-[linear-gradient(108deg,#0894ff,#c959dd__34%,#ff2e54_68%,#ff9004)] bg-clip-text text-6xl tracking-tight font-semibold max-w-md text-center'>
          Das Team hinter Trilogys Studios
        </p>
      </div>

      <div className="container py-16 items-center flex flex-col gap-14">
        <div className="flex flex-col gap-2 items-center w-3/4">
          <div className="py-10 bg-black/5 w-full px-10">
            <p className="text-3xl tracking-tight font-semibold">Divan Coban</p>
            <p className="text-xl tracking-tight font-medium text-black/70">Leitender Entwickler & CEO bei Trilogys Studios</p>
            <p className="text-sm tracking-tight font-medium text-black/70 pt-2">d.coban@trilogys.de</p>
          </div>

          <div className="py-10 bg-black/5 w-full px-10">
            <p className="text-3xl tracking-tight font-semibold">Youssef Hammoud</p>
            <p className="text-xl tracking-tight font-medium text-black/70">Systemadministrator & CEO bei Trilogys Studios</p>
            <p className="text-sm tracking-tight font-medium text-black/70 pt-2">y.hammoud@trilogys.de</p>
          </div>

          <div className="py-10 bg-black/5 w-full px-10">
            <p className="text-3xl tracking-tight font-semibold">Markus Freimann</p>
            <p className="text-xl tracking-tight font-medium text-black/70">CEO & Entwickler bei Trilogys Studios</p>
            <p className="text-sm tracking-tight font-medium text-black/70 pt-2">m.freimann@trilogys.de</p>
          </div>

          <div className="py-10 bg-black/5 w-full px-10">
            <p className="text-3xl tracking-tight font-semibold">Erdal Göktas</p>
            <p className="text-xl tracking-tight font-medium text-black/70">Entwickler & Cyber-Security Spezialist bei Trilogys Studios</p>
            <p className="text-sm tracking-tight font-medium text-black/70 pt-2">e.göktas@trilogys.de</p>
          </div>

          <div className="py-10 bg-black/5 w-full px-10">
            <p className="text-3xl tracking-tight font-semibold">Jamie Jeremy Klipp</p>
            <p className="text-xl tracking-tight font-medium text-black/70">Systemintegrator & Cyber-Security Spezialist bei Trilogys Studios</p>
            <p className="text-sm tracking-tight font-medium text-black/70 pt-2">j.klipp@trilogys.de</p>
          </div>


          <div className="py-10 bg-black/5 w-full px-10">
            <p className="text-3xl tracking-tight font-semibold">Dominik Forschner</p>
            <p className="text-xl tracking-tight font-medium text-black/70">Entwickler bei Trilogys Studios</p>
            <p className="text-sm tracking-tight font-medium text-black/70 pt-2">d.forschner@trilogys.de</p>
          </div>

          <div className="py-10 bg-black/5 w-full px-10">
            <p className="text-3xl tracking-tight font-semibold">Marvin Terwege</p>
            <p className="text-xl tracking-tight font-medium text-black/70">Junior-Entwickler bei Trilogys Studios</p>
            <p className="text-sm tracking-tight font-medium text-black/70 pt-2">m.terwege@trilogys.de</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center py-12">
          <p className="text-4xl font-semibold tracking-tight max-w-sm text-center">Hier könnte bald auch ihr Name stehen.</p>
          <p className="text-xl tracking-tight font-medium text-black/70">Schicke uns deine Bewerbung an hello@trilogys.de</p>
        </div>

      </div>
    </main>
  );
}