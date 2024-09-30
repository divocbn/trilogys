import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@portfolio/ui";
import { ThemeProvider, ThemeToggle } from "@portfolio/ui/theme";
import { Toaster } from "@portfolio/ui/toast";

import { Inter } from 'next/font/google'

import "~/app/globals.css";

import { env } from "~/env";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";
import { ContactUsModal } from "./(landing)/_components/contact-modal";

import Flag from 'react-world-flags'

import { ViewTransitions } from 'next-view-transitions'
import TransitionNavigation from './(landing)/_components/transition-navigation'

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://trilogys.de"
      : "http://localhost:3000",
  ),
  title: "Trilogys Studios",
  description: "Revolutionäres Entwicklerstudio mit Sinn für moderene Technologien.",
  openGraph: {
    title: "Trilogys Studios",
    description: "Revolutionäres Entwicklerstudio mit Sinn für moderene Technologien.",
    url: "https://trilogys.de",
    siteName: "Trilogys Studios",
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background text-foreground antialiased",
            inter.className,
          )}
        >
          <div className="h-16 bg-[#161617]/[92%] backdrop-blur-lg backdrop-saturate-150 sticky top-0 w-full flex items-center justify-center z-50">
            <div className="max-w-5xl w-full tracking-[-0.01em] text-white/[92%] sm:text-xs text-[0.6rem]">
              <p className="text-center">
                <Balancer>
                  Trilogys Studios spezialisiert sich auf die Entwicklung hochperformanter, skalierbarer Anwendungen und Websites, die modernste Technologien, aktuelle Trends sowie exzellentes UI- und UX-Design vereinen.
                </Balancer>
              </p>
            </div>
          </div>

          <div className="py-3.5 bg-[#161617]/[70%] backdrop-blur-lg backdrop-saturate-150 sticky top-16 w-full flex items-center justify-center z-50">
            <div className="container w-full flex flex-row justify-between tracking-[-0.01em] text-white/[85%] text-xs">
              <div className="flex flex-row flex-wrap gap-x-10 gap-y-5">
                <TransitionNavigation href="/">Informationen</TransitionNavigation>
                <TransitionNavigation href="/services">Dienstleistungen</TransitionNavigation>
                <TransitionNavigation href="/work">Referenzen</TransitionNavigation>
                <TransitionNavigation href="/team">Team</TransitionNavigation>

                <ContactUsModal>
                  <p className="max-w-md cursor-pointer hover:scale-95 transition-transform">Kontakt</p>
                </ContactUsModal>

                <TransitionNavigation href="/imprint">Impressum</TransitionNavigation>
              </div>

              <div className="sm:flex flex-row gap-5 hidden">
                <p className="text-2xl leading-3">🇩🇪</p>
                <p className="text-2xl leading-3">🇬🇧</p>
              </div>
            </div>

          </div>

          {props.children}

          <div className="bg-[#161617]/5 w-full h-40">
            <div className="container flex items-end h-full py-8 ">
              <div className="flex md:flex-row flex-col justify-between  w-full text-end items-end gap-5">
                <p className="tracking-tight text-black/50 text-xs">Copyright © 2024 Trilogys.de - All rights reserved.</p>
                <p className="max-w-sm tracking-tight text-black/70">Webentwicklung, Softwareentwicklung, Projektplanung, UI / UX, Cyber Security, Hosting</p>
              </div>
            </div>
          </div>

        </body>
      </html>
    </ViewTransitions>
  );
}
