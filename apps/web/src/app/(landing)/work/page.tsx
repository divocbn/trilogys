"use client"

import { useEffect, useState } from 'react';

import { VscVscodeInsiders, VscServerProcess, VscTerminalCmd, VscProject, VscShield } from 'react-icons/vsc'
import { PiFigmaLogo } from 'react-icons/pi'

import Image from 'next/image';

import { motion } from "framer-motion";
import Balancer from 'react-wrap-balancer';
import { TbBrandNextjs, TbBrandTypescript, TbBrandVercel, TbBrandVisualStudio } from 'react-icons/tb';
import { RiNextjsLine, RiTailwindCssLine } from 'react-icons/ri';
import { Canvas, MeshProps } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function WorkPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  const icons = [
    { component: PiFigmaLogo },
    { component: RiNextjsLine },
    { component: TbBrandVercel },
    { component: RiTailwindCssLine },
    { component: TbBrandVisualStudio },
  ];

  return (
    <main className="flex flex-col -mt-[7rem]">
      <div className="min-h-screen relative bg-black flex flex-col items-center justify-center py-36 gap-4 w-full">
        <div className="relative w-80 h-80 mt-8">
          {icons.map((icon, index) => {
            return (
              <motion.div
                key={index}
                className="flex flex-col gap-2 items-center justify-center w-full absolute"
                animate={{
                  scale: activeIndex === index ? 1.15 : 1,
                  zIndex: activeIndex === index ? 20 : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                initial={{
                  opacity: index === 0 ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <svg width="0" height="0">
                  <linearGradient id="icon-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop stopColor="#0894ff" offset="0%" />
                    <stop stopColor="#c959dd" offset="34%" />
                    <stop stopColor="#ff2e54" offset="68%" />
                    <stop stopColor="#ff9004" offset="100%" />
                  </linearGradient>
                </svg>

                <icon.component size={256} stroke='url(#icon-gradient)' fill='url(#icon-gradient)' />
              </motion.div>
            );
          })}
        </div>

        <h1 className="text-white tracking-tight sm:text-6xl vt-name-[headline] leading-[3rem] text-[2.75rem] font-bold sm:max-w-2xl max-w-md text-center">
          <Balancer>
            Werden Sie Zeuge unserer wundervollen Arbeit.
          </Balancer>
        </h1>
      </div>

      <div className="min-h-screen container py-32 gap-5 flex sm:flex-row flex-col">
        <div className="flex flex-col gap-10 xl:max-w-lg lg:max-w-md md:max-w-sm">
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
    </main>
  );
}
