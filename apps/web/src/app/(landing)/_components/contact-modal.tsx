"use client"

import { useState } from "react";

import { Button } from "@portfolio/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@portfolio/ui/dialog"
import Balancer from "react-wrap-balancer"
import { Input } from "@portfolio/ui/input"
import { PersonIcon, EnvelopeClosedIcon, MobileIcon, BackpackIcon, ReaderIcon } from "@radix-ui/react-icons";


export function ContactUsModal({ children }: React.PropsWithChildren) {
  const [loading, setLoading] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <div className="flex flex-col gap-4 py-4">
          <p className="font-bold max-w-md tracking-tight text-4xl">
            <Balancer>
              Kontaktieren Sie uns, <br /> direkt hier!
            </Balancer>
          </p>

          <div className="flex gap-4">
            <Input placeholder="Vorname..." startIcon={PersonIcon} />
            <Input placeholder="Nachname..." startIcon={PersonIcon} />
          </div>

          <div className="flex gap-2">
            <Input placeholder="Mail..." startIcon={EnvelopeClosedIcon} />
            <Input placeholder="Telefon..." startIcon={MobileIcon} />
          </div>

          <div className="flex gap-4">
            <Input placeholder="Unternehmen..." startIcon={BackpackIcon} />
            <Input placeholder="Notiz..." startIcon={ReaderIcon} />
          </div>

          <p className="text-black/50 text-sm tracking-tight max-w-sm mt-2">Du willst direkt loslegen? Vereinbare jetzt einen Web-Call und bringe den Ball ins Rollen.          </p>
        </div>
        
        <DialogFooter>
          <Button
            type="submit"
            loading={loading}
            onClick={() => setLoading(!loading)}>
              Kontaktieren
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}
