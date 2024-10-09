"use client"

import { useEffect, useState } from 'react';

import { VscVscodeInsiders, VscServerProcess, VscTerminalCmd, VscProject, VscShield } from 'react-icons/vsc'
import { PiAmazonLogoDuotone, PiAmazonLogoFill, PiFigmaLogo, PiFramerLogoFill, PiUploadFill, PiUploadThin } from 'react-icons/pi'

import Image from 'next/image';

import { motion } from "framer-motion";
import Balancer from 'react-wrap-balancer';
import { TbBrandAmazon, TbBrandCloudflare, TbBrandNextjs, TbBrandPrisma, TbBrandTypescript, TbBrandVercel, TbBrandVisualStudio, TbMusicX } from 'react-icons/tb';
import { RiAmazonFill, RiDrizzleFill, RiNextjsFill, RiNextjsLine, RiTailwindCssFill, RiTailwindCssLine } from 'react-icons/ri';
import { Canvas, MeshProps } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Button } from '@portfolio/ui/button';
import RapLaRueWorkPage from './_components/raplarue-work';
import KfcWorkPage from './_components/kfc-work';
import Seperator from './_components/seperator';
import KindeWorkPage from './_components/kinde-work';

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

                <icon.component size={256} stroke="url(#icon-gradient)" fill="url(#icon-gradient)" />
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

      <RapLaRueWorkPage />
    
      { /** okay this is kinda rigged, better use a seperator component here, TODO: */}
      <div className="sm:mx-32 md:mx-16 mx-8 sm:bg-black/10 h-0.5 sm:mb-20" />

      <KfcWorkPage />

      <Seperator />

      <KindeWorkPage />

    </main>
  );
}
