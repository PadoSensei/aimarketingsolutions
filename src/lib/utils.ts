import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function absoluteUrl(path: string) {
  const baseUrl =
    process.env?.NEXT_PUBLIC_APP_URL || "https://www.aisolutions.irish";
  const cleanBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
