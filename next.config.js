/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pablocalvente.es',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
