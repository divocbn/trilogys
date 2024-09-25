"use client"

import { useEffect, useState } from 'react';

import { VscVscodeInsiders, VscServerProcess, VscTerminalCmd, VscProject, VscShield } from 'react-icons/vsc'
import { PiFigmaLogo } from 'react-icons/pi'

import Image from 'next/image';

import { motion } from "framer-motion";

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  const icons = [
    { component: VscVscodeInsiders, label: "Web-Entwicklung" },
    { component: VscTerminalCmd, label: "Software-Entwicklung" },
    { component: VscProject, label: "Projektplanung" },
    { component: VscShield, label: "Cyber-Security" },
    { component: PiFigmaLogo, label: "UI / UX" },
    { component: VscServerProcess, label: "Hosting" },
  ];

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-start justify-center gap-4 ">
        <div className="py-6 flex items-center justify-between bg-[#f5f5f7] text-black text-xs w-full">
          <div className="container flex flex-wrap items-center justify-center gap-10 w-full">
            {icons.map((icon, index) => {
              const IconComponent = icon.component;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col gap-2 items-center"
                  animate={{
                    scale: activeIndex === index ? 1.15 : 1,
                    color: activeIndex === index ? "#2563eb" : "#000",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent size={32} />
                  <p>{icon.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="container pb-20">
          <div className="text-5xl flex lg:flex-row flex-col lg:text-start text-center items-center justify-between font-semibold tracking-tighter sm:text-[3.5rem] xl:text-[5rem] sm:py-20 py-8">
            <h1 className='vt-name-[headline]'>Dienstleistungen</h1>
            <p className="lg:text-2xl sm:text-3xl text-2xl tracking-tight font-medium text-black/50 lg:max-w-lg  max-w-2xl mt-2">
              Über <span className="text-3xl font-extrabold">42+</span> moderne <span className="text-[#2563eb]">Programmiersprachen</span>, <span className="text-[#2563eb]">Frameworks</span> & <span className="text-[#2563eb]">Tools</span> mit welchen wir uns perfekt auskennen.
            </p>
          </div>

          <div className="flex flex-col mt-2 w-full gap-3">
            <div className="w-full rounded-lg relative border-[1.5px] border-black/10">
              <Image
                src="/coding.png"
                width={2048}
                height={0}
                alt="Coding Image"
                className="rounded-lg invert vt-name-[hero-image]"
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
