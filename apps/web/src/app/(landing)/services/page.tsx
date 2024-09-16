"use client"

import * as React from 'react';

import { VscVscodeInsiders, VscServerProcess, VscTerminalCmd, VscProject, VscShield } from 'react-icons/vsc'
import { PiFigmaLogo } from 'react-icons/pi'

import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-start justify-center gap-4 pt-[6.75rem]">
        <div className="py-8  flex items-center justify-between bg-[#f5f5f7] text-black text-xs w-full">
          <div className="container flex flex-wrap items-center justify-center gap-x-20 gap-y-10 w-full">
            <div className="flex flex-col gap-2 items-center">
              <VscVscodeInsiders size={48} />
              <p>Web-Entwicklung</p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <VscTerminalCmd size={48} />
              <p>Software-Entwicklung</p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <VscProject size={48} />
              <p>Projektplanung</p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <VscShield size={48} />
              <p>Cyber-Security</p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <PiFigmaLogo size={48} />
              <p>UI / UX</p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <VscServerProcess size={48} />
              <p>Hosting</p>
            </div>
          </div>
        </div>

        <div className="container pb-20">
          <h1 className="text-5xl font-semibold tracking-tighter sm:text-[5rem] sm:py-20 py-8">
            Dienstleistungen
          </h1>

          <div className="flex flex-col mt-2 w-full gap-3">
            <div className="w-full rounded-lg relative border-[1.5px] border-black/10">
              <Image
                src="/coding.png"
                width={2048}
                height={0}
                alt="Coding Image"
                className="rounded-lg invert"
              />
            </div>
            <p className="text-xs text-black/50">
              Trilogys Studios legt großen Wert auf strukturierten, sicheren und leistungsoptimierten Code.
            </p>
          </div>

        </div>
      </div>

    </main>
  );
}
