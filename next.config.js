/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ci-cd-webapp',
  assetPrefix: '/ci-cd-webapp/',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig