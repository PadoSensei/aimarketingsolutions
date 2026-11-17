// src/components/GhostButton.tsx
import Link from "next/link";
import React from "react";

interface GhostButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function GhostButton({
  href,
  children,
  className = "",
}: GhostButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-5 py-2.5 text-sm font-semibold text-foreground rounded-full border border-purple-700/60 hover:bg-purple-900/10 hover:border-purple-500 transition-all duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}
