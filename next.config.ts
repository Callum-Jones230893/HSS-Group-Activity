import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['behold.pictures'],
  },
  cacheComponents: true,
};

export default nextConfig;
