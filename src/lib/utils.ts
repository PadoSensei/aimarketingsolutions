export function absoluteUrl(path: string) {
  const baseUrl = process.env?.NEXT_PUBLIC_APP_URL || "https://www.aisolutions.irish";
  const cleanBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
