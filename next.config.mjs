/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  reactCompiler: true,
  reactStrictMode: true,

  allowedDevOrigins: [
    'contrite-reawake-trickily.ngrok-free.dev',
  ],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/ayurveda',
        destination: '/ayurveda-clinic-jvc/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;