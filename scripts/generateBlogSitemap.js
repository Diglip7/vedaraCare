const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Load .env file
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const BlogSchema = new mongoose.Schema({
  paramlink: String,
  status: String
}, { timestamps: true });

async function generateBlogSitemap() {
  if (!process.env.MONGODB_URI) {
    console.error('Missing MONGODB_URI in .env');
    process.exit(0);
  }

  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    
    const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
    
    // Fetch published blog posts
    const posts = await Blog.find({ status: 'published' }).select('paramlink updatedAt');
    
    // Also fetch static blog files from pages/blog/
    const blogDir = path.join(__dirname, '../pages/blog');
    const staticFiles = fs.readdirSync(blogDir)
      .filter(file => (file.endsWith('.js') || file.endsWith('.jsx')) && file !== 'index.jsx' && file !== 'index.js' && file !== '[slug].jsx' && file !== '[slug].js')
      .map(file => file.replace(/\.jsx?$/, ''));

    // Check for duplicates
    const dbSlugs = posts.map(p => p.paramlink);
    const validStaticFiles = [];
    
    staticFiles.forEach(slug => {
      if (dbSlugs.includes(slug)) {
        console.warn(`Warning: Static blog file '/blog/${slug}.js' is a duplicate of a published CMS post. Excluding from sitemap to prevent duplicate indexable URLs.`);
      } else {
        validStaticFiles.push(slug);
      }
    });

    let urls = '';

    // Add static posts
    validStaticFiles.forEach(slug => {
      urls += `
<url>
<loc>https://vedaracare.ae/blog/${slug}</loc>
<changefreq>monthly</changefreq>
<priority>0.65</priority>
</url>`;
    });

    // Add dynamic posts
    posts.forEach(p => {
      const date = p.updatedAt ? p.updatedAt.toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
      urls += `
<url>
<loc>https://vedaracare.ae/blog/${p.paramlink}</loc>
<lastmod>${date}</lastmod>
<priority>0.65</priority>
</url>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

    const outputPath = path.join(__dirname, '../public/blog-sitemap.xml');
    fs.writeFileSync(outputPath, xml);
    
    console.log(`blog-sitemap.xml generated with ${validStaticFiles.length + posts.length} URLs at public/blog-sitemap.xml`);
    
    // Clean up
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Failed to generate blog sitemap:', err);
    process.exit(0);
  }
}

generateBlogSitemap();
