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
    content = content.replace(/"ratingValue"\s*:\s*"4\.6"/g, '"ratingValue": "4.7"');
    content = content.replace(/"reviewCount"\s*:\s*"15"/g, '"reviewCount": "23"');
    
    // UI components and stats
    content = content.replace(/value:\s*['"]4\.6['"]/gi, 'value: "4.7"');
    content = content.replace(/value:\s*['"]4\.6★['"]/gi, 'value: "4.7★"');
    content = content.replace(/label:\s*['"]4\.6 stars on Google['"]/gi, 'label: "4.7 stars on Google"');
    content = content.replace(/ratingText:\s*['"]4\.6 rated on Google['"]/gi, "ratingText: '4.7 rated on Google'");
    content = content.replace(/\{\s*label:\s*['"]4\.6 Google Rating['"],\s*type:\s*['"]star['"]\s*\}/g, '{ label: "4.7 Google Rating", type: "star" }');
    
    // HTML/JSX specific text replacements
    content = content.replace(/>4\.6</g, '>4.7<');
    content = content.replace(/>4\.6 stars on Google</g, '>4.7 stars on Google<');
    content = content.replace(/"4\.6 stars on Google"/g, '"4.7 stars on Google"');
    content = content.replace(/'4\.6 stars on Google'/g, "'4.7 stars on Google'");
    
    // Review counts update
    content = content.replace(/count:\s*['"]15['"]/gi, 'count: "23"');
    content = content.replace(/value:\s*['"]15['"]/gi, 'value: "23"');
    
    // Additional general string matching for specific components
    content = content.replace(/4\.6\s*stars on Google/gi, '4.7 stars on Google');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesModified++;
      console.log('Updated:', filePath);
    }
  }
});

console.log('Total files modified:', filesModified);
