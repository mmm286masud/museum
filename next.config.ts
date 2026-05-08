import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/museum',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/museum',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
