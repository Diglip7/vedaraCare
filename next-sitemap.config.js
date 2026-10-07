/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vedaracare.ae',
  generateRobotsTxt: false, // keep the hand-written robots.txt, it's already correct
  trailingSlash: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://vedaracare.ae/blog-sitemap.xml',
      'https://vedaracare.ae/doctors-sitemap.xml',
    ],
  },
  exclude: [
    '/admin/*', '/admin', '/api/*', '/careers',
    '/home-healthcare-jvc', '/physiotherapy-at-home-dubai', '/licensed-home-therapy',
    '/doctors/dr-anusha-makkena', '/blog-sitemap.xml', '/doctors-sitemap.xml'
  ],
  transform: async (config, path) => {
    const p = path !== '/' ? path.replace(/\/$/, '') : '/';

    let priority = config.priority || 0.7;
    let changefreq = config.changefreq || 'weekly';

    if (p === '/') priority = 1.0;
    else if (p === '/book' || p === '/contact') priority = 0.9;
    else if (['/ayurveda-clinic-jvc', '/dermatology-clinic-jvc', '/physiotherapy-jvc', '/skin-clinic-jvc', '/wellness-clinic-jvc', '/home-healthcare-jvc'].includes(p)) priority = 0.9;
    else if (['/ayurveda-dubai', '/physiotherapy-at-home-dubai'].includes(p)) priority = 0.8;
    else if (p.startsWith('/treatments/')) priority = 0.8;
    else if (p.startsWith('/conditions/')) priority = 0.7;
    else if (p.startsWith('/doctors/')) priority = 0.7;
    else if (p === '/blog') priority = 0.8;
    else if (p.startsWith('/blog/')) priority = 0.6;
    else if (['/about', '/insurance', '/patient-rights', '/privacy-policy', '/terms-of-service'].includes(p)) priority = 0.3;

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  additionalPaths: async (config) => {
    // Reading dynamic slugs
    const fs = require('fs');
    const path = require('path');

    // Doctors
    const doctorsDir = path.join(process.cwd(), 'pages/doctors');
    let doctorSlugs = [];
    try {
      const files = fs.readdirSync(doctorsDir);
      doctorSlugs = files
        .filter(file => file.endsWith('.js') && file !== 'index.js' && file !== '[slug].js')
        .map(file => file.replace('.js', ''));
    } catch (err) { }

    // Blog
    const blogDir = path.join(process.cwd(), 'pages/blog');
    let blogSlugs = [];
    try {
      const files = fs.readdirSync(blogDir);
      blogSlugs = files
        .filter(file => file.endsWith('.js') && file !== 'index.js' && file !== '[slug].js')
        .map(file => file.replace('.js', ''));
    } catch (err) { }

    return [
      ...doctorSlugs.map((slug) => ({ loc: `/doctors/${slug}`, changefreq: 'weekly', priority: 0.7 })),
      ...blogSlugs.map((slug) => ({ loc: `/blog/${slug}`, changefreq: 'monthly', priority: 0.6 })),
    ];
  },
};
