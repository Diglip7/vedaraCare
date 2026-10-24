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
    '/doctors/dr-anusha-makkena', '/doctors/dr-anusha-makkena/',
    '/doctors/dr-priya-nair-ayurveda', '/doctors/dr-priya-nair-ayurveda/',
    '/doctors/dr-priya-nair', '/doctors/dr-priya-nair/',
    '/doctors/dr-ansiya-ayurveda', '/doctors/dr-ansiya-ayurveda/',
    '/doctors/dr-priya-menon-ayurveda', '/doctors/dr-priya-menon-ayurveda/',
    '/doctors/dr-meera-krishnan-ayurveda', '/doctors/dr-meera-krishnan-ayurveda/',
    '/doctors/dr-neethu-ayurveda', '/doctors/dr-neethu-ayurveda/',
    '/blog/what-is-panchakarma-and-how-does-it-actually-work', '/blog/what-is-panchakarma-and-how-does-it-actually-work/',
    '/blog/is-ayurveda-effective-for-back-pain-an-honest-evidence-based', '/blog/is-ayurveda-effective-for-back-pain-an-honest-evidence-based/',
    '/blog-sitemap.xml', '/doctors-sitemap.xml'
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

    const formattedLoc = path.endsWith('/') ? path : `${path}/`;

    return {
      loc: formattedLoc,
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
    const excludedDoctors = [
      'dr-anusha-makkena',
      'dr-priya-nair-ayurveda',
      'dr-priya-nair',
      'dr-ansiya-ayurveda',
      'dr-priya-menon-ayurveda',
      'dr-meera-krishnan-ayurveda',
      'dr-neethu-ayurveda'
    ];
    let doctorSlugs = [];
    try {
      const files = fs.readdirSync(doctorsDir);
      doctorSlugs = files
        .filter(file => file.endsWith('.js') && file !== 'index.js' && file !== '[slug].js')
        .map(file => file.replace('.js', ''))
        .filter(slug => !excludedDoctors.includes(slug));
    } catch (err) { }

    // Blog
    const blogDir = path.join(process.cwd(), 'pages/blog');
    const excludedBlogs = [
      'what-is-panchakarma-and-how-does-it-actually-work',
      'is-ayurveda-effective-for-back-pain-an-honest-evidence-based'
    ];
    let blogSlugs = [];
    try {
      const files = fs.readdirSync(blogDir);
      blogSlugs = files
        .filter(file => file.endsWith('.js') && file !== 'index.js' && file !== '[slug].js')
        .map(file => file.replace('.js', ''))
        .filter(slug => !excludedBlogs.includes(slug));
    } catch (err) { }

    return [
      ...doctorSlugs.map((slug) => ({ loc: `/doctors/${slug}/`, changefreq: 'weekly', priority: 0.7 })),
      ...blogSlugs.map((slug) => ({ loc: `/blog/${slug}/`, changefreq: 'monthly', priority: 0.6 })),
    ];
  },
};
