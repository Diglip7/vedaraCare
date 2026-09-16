const fs = require('fs');
const path = require('path');

function generateDoctorsSitemap() {
  const doctorsDir = path.join(__dirname, '../pages/doctors');
  
  // Read all files in pages/doctors
  let files = [];
  try {
    files = fs.readdirSync(doctorsDir);
  } catch (err) {
    console.error(`Error reading directory ${doctorsDir}:`, err);
    process.exit(1);
  }

  // Filter out index.js, [slug].js, and any non-js files
  const slugs = files
    .filter(file => file.endsWith('.js') && file !== 'index.js' && file !== '[slug].js')
    .map(file => file.replace('.js', ''));

  // Manually add the slug mapped by [slug].js (dr-priya-nair-ayurveda)
  slugs.push('dr-priya-nair-ayurveda');

  // Generate the XML for each URL
  const urls = slugs
    .map(
      (slug) => `
<url>
<loc>https://vedaracare.ae/doctors/${slug}</loc>
<changefreq>monthly</changefreq>
<priority>0.75</priority>
</url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  const outputPath = path.join(__dirname, '../public/doctors-sitemap.xml');
  
  try {
    fs.writeFileSync(outputPath, xml);
    console.log(`doctors-sitemap.xml generated with ${slugs.length} URLs at public/doctors-sitemap.xml`);
  } catch (err) {
    console.error('Failed to write sitemap file:', err);
    process.exit(1);
  }
}

generateDoctorsSitemap();
