import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e3.365dm.com',
        port: ''
      }
    ]
  }
};

export default withContentlayer(nextConfig);
