import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
    NEXT_PUBLIC_WPGRAPHQL_URL: process.env.NEXT_PUBLIC_WPGRAPHQL_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cmadvocatus.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.cmadvocatus.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;