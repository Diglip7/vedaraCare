/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vedaracare.ae',
  generateRobotsTxt: false, // keep the hand-written robots.txt, it's already correct
  trailingSlash: false,
  exclude: ['/admin/*', '/admin', '/api/*', '/careers'],
  transform: async (config, path) => {
    let priority = config.priority || 0.7;
    let changefreq = config.changefreq || 'weekly';
    let alternateRefs = config.alternateRefs ?? [];

    if (path === '/') priority = 1.0;
    else if (path === '/team/arfah-owais-aesthetician-jvc/' || path === '/team/arfah-owais-aesthetician-jvc') {
      priority = 0.9;
      changefreq = 'monthly';
      alternateRefs = [
        { href: 'https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/', hreflang: 'en-AE' },
        { href: 'https://vedaracare.ae/ar/team/arfah-owais-aesthetician-jvc/', hreflang: 'ar-AE' }
      ];
    }
    else if (path === '/treatments/hydrafacial-jvc/' || path === '/treatments/hydrafacial-jvc') {
      priority = 0.9;
      changefreq = 'monthly';
      alternateRefs = [
        { href: 'https://vedaracare.ae/treatments/hydrafacial-jvc/', hreflang: 'en-AE' },
        { href: 'https://vedaracare.ae/ar/treatments/hydrafacial-jvc/', hreflang: 'ar-AE' }
      ];
    }
    else if (path === '/book' || path === '/contact') priority = 0.9;
    else if (['/ayurveda-clinic-jvc', '/dermatology-clinic-jvc', '/physiotherapy-jvc', '/skin-clinic-jvc', '/wellness-clinic-jvc', '/home-healthcare-jvc'].includes(path)) priority = 0.9;
    else if (['/ayurveda-dubai', '/physiotherapy-dubai', '/physiotherapy-at-home-dubai'].includes(path)) priority = 0.8;
    else if (path.startsWith('/treatments/')) priority = 0.8;
    else if (path.startsWith('/conditions/')) priority = 0.7;
    else if (path.startsWith('/doctors/')) priority = 0.7;
    else if (path === '/blog') priority = 0.8;
    else if (path.startsWith('/blog/')) priority = 0.6;
    else if (['/about', '/insurance', '/patient-rights', '/privacy-policy', '/terms-of-service'].includes(path)) priority = 0.3;

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: alternateRefs,
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
      doctorSlugs.push('dr-priya-nair-ayurveda'); // manual slug mapping
    } catch (err) {}

    // Blog
    const blogDir = path.join(process.cwd(), 'pages/blog');
    let blogSlugs = [];
    try {
      const files = fs.readdirSync(blogDir);
      blogSlugs = files
        .filter(file => file.endsWith('.js') && file !== 'index.js' && file !== '[slug].js')
        .map(file => file.replace('.js', ''));
    } catch (err) {}

    return [
      ...doctorSlugs.map((slug) => ({ loc: `/doctors/${slug}`, changefreq: 'weekly', priority: 0.7 })),
      ...blogSlugs.map((slug) => ({ loc: `/blog/${slug}`, changefreq: 'monthly', priority: 0.6 })),
    ];
  },
};
