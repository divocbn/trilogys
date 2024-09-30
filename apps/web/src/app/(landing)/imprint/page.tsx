import * as React from "react"

import { Button } from "@portfolio/ui/button"
import { TbMailExclamation } from "react-icons/tb";
import { PiMailboxDuotone } from "react-icons/pi";

export default function TeamPage() {
  return (
    <main className="flex flex-col -mt-[6.5rem]">
      <div className="min-h-screen relative bg-black flex flex-col items-center justify-center py-36 gap-4 w-full">
        <p className='vt-name-[headline] text-transparent py-2 bg-[linear-gradient(108deg,#0894ff,#c959dd__34%,#ff2e54_68%,#ff9004)] bg-clip-text text-6xl tracking-tight font-semibold max-w-md text-center'>
          Impressum
        </p>


        <div className="container flex flex-row gap-10 justify-center flex-wrap tracking-tight mt-12">

          <div className="flex flex-col items-start gap-1 ">
            <h2 className="font-semibold text-4xl text-white">Adresse:</h2>
            <div className="flex flex-col items-start text-white/50 text-xl">
              <p>Youssef Hammoud</p>
              <p>Webicom IT Solutions</p>
              <p>Sedanstr. 74</p>
              <p>42281 Wuppertal</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1">
            <h2 className="font-semibold text-4xl text-white">Kontakt:</h2>
            <div className="flex flex-col items-start text-white/50 text-xl">
              <p>0202 2957 4602</p>
              <p>hello@trilogys.de</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1">
            <h2 className="font-semibold text-4xl text-white">Rechtliches:</h2>
            <div className="flex flex-col items-start text-white/50 text-xl">
              <p>Umsatzsteuer-ID gemäß § 27 a UstG:</p>
              <p>DE 341 528 243</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}