"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

type LogoProps = {
  variant?: "navbar" | "hero";
  className?: string;
};

export const Logo = ({ variant = "navbar", className = "" }: LogoProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={
          variant === "hero"
            ? `w-full h-full ${className}`
            : `w-8 h-8 ${className}`
        }
      />
    );
  }

  const logoSrc =
    resolvedTheme === "dark"
      ? "/images/logo_light_no_text.png"
      : "/images/logo_dark_no_text.png";

  const dimensions =
    variant === "hero"
      ? { width: 512, height: 512 }
      : { width: 32, height: 32 };

  return (
    <Image
      src={logoSrc}
      alt="AI Solutions logo"
      width={dimensions.width}
      height={dimensions.height}
      quality={100}
      className={
        variant === "hero"
          ? `w-full h-full object-contain ${className}`
          : `w-8 h-8 object-contain rounded-full ${className}`
      }
    />
  );
};
