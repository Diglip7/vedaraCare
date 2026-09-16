const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\pc\\Documents\\vedacare\\vedaraCare';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  content = content.replace(/Ansiya/gi, 'Ansiya');
  content = content.replace(/Ansiya/gi, 'Ansiya');
  content = content.replace(/Dr\. Ansiya/g, 'Dr. Ansiya');
  content = content.replace(/dr-ansiya-ayurveda/g, 'dr-ansiya-ayurveda');
  content = content.replace(/dr-ansiya/g, 'dr-ansiya');
  content = content.replace(/dr-ansiya/g, 'dr-ansiya');
  content = content.replace(/Ansiya/g, 'Ansiya');
  content = content.replace(/ansiya/g, 'ansiya');

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
