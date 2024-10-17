"use client"

import * as React from 'react';

import { useTransitionRouter } from "next-view-transitions";

export default function TransitionNavigation({ children, href }: React.PropsWithChildren<{ href: string }>) {
  const router = useTransitionRouter();
  
  const onRouterPush = () => {
    router.push(href);
  }

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();

    onRouterPush();
  }

  return (
    <div
      className="max-w-md hover:scale-95 transition-transform cursor-pointer"
      onClick={onRouterPush}
      onTouchStart={onTouchStart}
    >
      {children}
    </div>
  );
}