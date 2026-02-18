import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://img.daisyui.com/images/profile/demo/yellingcat@192.webp')],
  },
};

export default nextConfig;
