/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**.mlstatic.com',
      },
    ],
  },
};

module.exports = nextConfig;
