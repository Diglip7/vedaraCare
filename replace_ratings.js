const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDir = 'c:/Users/pc/Documents/vedacare/vedaraCare/';
let filesModified = 0;

walkDir(targetDir, function (filePath) {
  if (filePath.includes('node_modules') || filePath.includes('.next') || filePath.includes('.git')) return;
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/"ratingValue"\s*:\s*"4\.9"/g, '"ratingValue": "4.5"');
    content = content.replace(/"reviewCount"\s*:\s*"\d+"/g, '"reviewCount": "15"');

    // UI components
    content = content.replace(/value:\s*['"]4\.9['"]/gi, 'value: "4.5"');
    content = content.replace(/value:\s*['"]4\.9★['"]/gi, 'value: "4.5"');
    content = content.replace(/label:\s*['"]4\.9 stars on Google['"]/gi, 'label: "stars on Google"');
    content = content.replace(/ratingText:\s*['"]4\.9 rated on Google['"]/g, "ratingText: '4.5 rated on Google'");
    content = content.replace(/\{ label: "4\.9 Google Rating", type: "star" \}/g, '{ label: "4.5 Google Rating", type: "star" }');

    // Also look for "19" in reviews if any
    content = content.replace(/label:\s*['"]19\s*stars on Google['"]/gi, 'label: "15 stars on Google"'); // Though it's probably "15 reviews"
    content = content.replace(/value:\s*['"]19['"],\s*label:\s*['"]reviews/gi, 'value: "15", label: "reviews');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesModified++;
      console.log('Updated:', filePath);
    }
  }
});

console.log('Total files modified:', filesModified);
