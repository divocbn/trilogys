"use client"

import * as React from 'react';

import { Link } from 'next-view-transitions';

export default function TransitionNavigation({ children, href }: React.PropsWithChildren<{ href: string }>) {
  return (
    <Link
      className="max-w-md hover:scale-95 transition-transform cursor-pointer relative"
      href={href}
    >
      {children}
    </Link>
  );
}