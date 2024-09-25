"use client"

import * as React from 'react';

import { useTransitionRouter } from "next-view-transitions";

export default function TransitionNavigation({ children, href }: React.PropsWithChildren<{ href: string }>) {
  const router = useTransitionRouter();
  return (
    <div
      className="max-w-md hover:scale-95 transition-transform cursor-pointer"
      onClick={() => router.push(href)}>
      {children}
    </div>
  );
}