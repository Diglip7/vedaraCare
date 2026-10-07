const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDir = path.join(__dirname);
let filesModified = 0;

walkDir(targetDir, function (filePath) {
  if (filePath.includes('node_modules') || filePath.includes('.next') || filePath.includes('.git')) return;
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Schema JSON-LD ratings
    content = content.replace(/"ratingValue"\s*:\s*"4\.5"/g, '"ratingValue": "4.6"');
    
    // UI components and stats
    content = content.replace(/value:\s*['"]4\.5['"]/gi, 'value: "4.6"');
    content = content.replace(/value:\s*['"]4\.5★['"]/gi, 'value: "4.6★"');
    content = content.replace(/label:\s*['"]4\.5 stars on Google['"]/gi, 'label: "stars on Google"');
    content = content.replace(/ratingText:\s*['"]4\.5 rated on Google['"]/gi, "ratingText: '4.6 rated on Google'");
    content = content.replace(/\{\s*label:\s*['"]4\.5 Google Rating['"],\s*type:\s*['"]star['"]\s*\}/g, '{ label: "4.6 Google Rating", type: "star" }');
    
    // HTML/JSX specific text replacements
    content = content.replace(/>4\.5</g, '>4.6<');
    content = content.replace(/>4\.5 stars on Google</g, '>4.6 stars on Google<');
    content = content.replace(/"4\.5 stars on Google"/g, '"4.6 stars on Google"');
    content = content.replace(/'4\.5 stars on Google'/g, "'4.6 stars on Google'");
    
    // Review counts update (assuming they wanted "15" or similar based on existing script)
    // Actually the user just said: "in every pages show 4.5 reviews show 4.6 in whole website"
    
    // Additional general string matching for specific components
    content = content.replace(/4\.5\s*stars on Google/gi, '4.6 stars on Google');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesModified++;
      console.log('Updated:', filePath);
    }
  }
});

console.log('Total files modified:', filesModified);
