/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  compress: true,
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
  },
  
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' blob: data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https:;",
          },
        ],
      },
    ];
  },
};
export default nextConfig;