/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vedaracare.ae',
  generateRobotsTxt: false, // keep the hand-written robots.txt, it's already correct
  trailingSlash: false,
  exclude: ['/admin/*', '/admin', '/api/*'],
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
