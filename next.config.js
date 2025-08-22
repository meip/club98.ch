/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['static.wixstatic.com']
  },
  trailingSlash: true
};

module.exports = nextConfig;
