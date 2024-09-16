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

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://turbo.t3.gg"
      : "http://localhost:3000",
  ),
  title: "Trilogys Studios",
  description: "Simple monorepo with shared backend for web & mobile apps",
  openGraph: {
    title: "Create T3 Turbo",
    description: "Simple monorepo with shared backend for web & mobile apps",
    url: "https://create-t3-turbo.vercel.app",
    siteName: "Create T3 Turbo",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jullerino",
    creator: "@jullerino",
  },
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          inter.className,
        )}
      >
        <div className="h-16 bg-[#161617]/[92%] backdrop-blur-lg backdrop-saturate-150 fixed top-0 w-full flex items-center justify-center z-50">
          <div className="max-w-5xl w-full tracking-[-0.01em] text-white/[92%] text-xs">
            <p className="text-center">
              <Balancer>
                Trilogys Studios spezialisiert sich auf die Entwicklung hochperformanter, skalierbarer Anwendungen und Websites, die modernste Technologien, aktuelle Trends sowie exzellentes UI- und UX-Design vereinen.
              </Balancer>
            </p>
          </div>
        </div>

        <div className="h-11 bg-[#161617]/[70%] backdrop-blur-lg backdrop-saturate-150 fixed top-16 w-full flex items-center justify-center z-50">
          <div className="container w-full flex flex-row gap-10 tracking-[-0.01em] text-white/[85%] text-xs">
            <Link
              className="max-w-md hover:scale-95 transition-transform"
              href="/">
              Informationen
            </Link>
            <Link
              className="max-w-md hover:scale-95 transition-transform"
              href="/services">
              Dienstleistungen
            </Link>
            <Link
              className="max-w-md hover:scale-95 transition-transform"
              href="/work">
              Referenzen
            </Link>
            <p className="max-w-md hover:scale-95 transition-transform">Team</p>
            <p className="max-w-md hover:scale-95 transition-transform">Kontakt</p>
            <p className="max-w-md hover:scale-95 transition-transform">Impressum</p>
          </div>
        </div>

        {props.children}

        <div className="bg-[#161617]/5 w-full h-40">
          <div className="container flex items-end h-full py-8 ">
            <div className="flex flex-row justify-between  w-full text-end items-end gap-5">
              <p className="tracking-tight text-black/50 text-xs">Copyright © 2024 Trilogys.de - All rights reserved.</p>
              <p className="max-w-sm tracking-tight text-black/70">Webentwicklung, Softwareentwicklung, Projektplanung, UI / UX, Cyber Security, Hosting</p>
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
