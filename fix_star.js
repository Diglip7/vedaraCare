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

    content = content.replace(/4\.9…/g, '4.5');
    content = content.replace(/4\.9★/g, '4.5');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesModified++;
      console.log('Updated:', filePath);
    }
  }
});

console.log('Total files modified:', filesModified);
