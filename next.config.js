/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? '/club98.ch' : undefined,
  assetPrefix: isProd ? '/club98.ch/' : undefined,
};

module.exports = nextConfig;
