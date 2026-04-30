/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Keep existing domains if you have them
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
