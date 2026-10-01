const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\pc\\Documents\\vedacare\\vedaraCare';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  content = content.replace(/Dr\. Zainab/g, 'Dr. Zainab');
  content = content.replace(/dr-zainab-ayurveda/g, 'dr-zainab-ayurveda');
  content = content.replace(/dr-zainab/g, 'dr-zainab');
  content = content.replace(/Zainab/g, 'Zainab');
  content = content.replace(/zainab/g, 'zainab');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(currentPath) {
  const files = fs.readdirSync(currentPath);
  for (const file of files) {
    const fullPath = path.join(currentPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(file)) {
        walkDir(fullPath);
      }
    } else {
      if (['.js', '.jsx', '.ts', '.tsx', '.json', '.xml', '.md'].includes(path.extname(fullPath))) {
        replaceInFile(fullPath);
      }
    }
  }
}

walkDir(dir);
