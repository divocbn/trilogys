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
            <p className="max-w-md">Informationen</p>
            <p className="max-w-md">Dienstleistungen</p>
            <p className="max-w-md">Referenzen</p>
            <p className="max-w-md">Team</p>
            <p className="max-w-md">Kontakt</p>
            <p className="max-w-md">Impressum</p>
          </div>
        </div>

        {props.children}

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
