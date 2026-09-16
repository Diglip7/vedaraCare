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
      // { source: '/:path*/', destination: '/:path*', permanent: true },
      { source: '/ayurveda', destination: '/ayurveda-clinic-jvc', permanent: true }, // see next issue
      { source: '/carbon-laser-peel-jvc', destination: '/treatments/carbon-laser-peel-jvc', permanent: true },
    ];
  }
};
export default nextConfig;