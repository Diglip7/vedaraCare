/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  /* config options here */

  compress: true,
  reactCompiler: true,
  reactStrictMode: true,



  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600],
  },

  async redirects() {
    return [
      // { source: '/:path*/', destination: '/:path*', permanent: true },
      { source: '/ayurveda', destination: '/ayurveda-clinic-jvc', permanent: true }, // see next issue
      { source: '/carbon-laser-peel-jvc', destination: '/treatments/carbon-laser-peel-jvc', permanent: true },
      { source: '/physiotherapy-dubai', destination: '/physiotherapy-jvc/', permanent: true },
      { source: '/physiotherapy-dubai/', destination: '/physiotherapy-jvc/', permanent: true },

      // www -> non-www (skip if done at host level)
      { source: '/:path*', has: [{ type: 'host', value: 'www.vedaracare.ae' }], destination: 'https://vedaracare.ae/:path*', permanent: true },

      // duplicate pages -> one page per topic (COMMENTED OUT SO JVC PAGES RENDER)
      // { source: '/treatments/panchakarma-jvc', destination: '/treatments/panchakarma-dubai', permanent: true },
      // { source: '/conditions/back-pain-ayurveda-jvc', destination: '/conditions/back-pain-ayurveda-dubai', permanent: true },
      // { source: '/conditions/postnatal-care-ayurveda-jvc', destination: '/conditions/postnatal-ayurveda-dubai', permanent: true },
      // { source: '/conditions/stress-anxiety-ayurveda-jvc', destination: '/conditions/stress-anxiety-ayurveda-dubai', permanent: true },
      // { source: '/conditions/weight-loss-ayurveda-jvc', destination: '/conditions/weight-loss-ayurveda-dubai', permanent: true },
      { source: '/wellness-jvc', destination: '/wellness-clinic-jvc', permanent: true },

      // removed / renamed doctors
      { source: '/doctors/dr-priya-nair-ayurveda', destination: '/doctors', permanent: true },
      { source: '/doctors/dr-priya-nair', destination: '/doctors', permanent: true },
      { source: '/doctors/dr-ansiya-ayurveda', destination: '/doctors/dr-zainab-ayurveda', permanent: true },
      { source: '/doctors/dr-zainab', destination: '/doctors/dr-zainab-ayurveda', permanent: true },
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