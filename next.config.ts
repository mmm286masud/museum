import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/museum',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
