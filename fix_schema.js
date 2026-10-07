const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      filelist = walkSync(filepath, filelist);
    } else if (filepath.endsWith('.js') || filepath.endsWith('.jsx')) {
      filelist.push(filepath);
    }
  }
  return filelist;
};

const dirs = [path.join(__dirname, 'pages')];
let files = [];
dirs.forEach(d => {
  if (fs.existsSync(d)) {
    files = files.concat(walkSync(d));
  }
});

let modifiedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  if (content.includes('"@type": "PostalAddress"') || content.includes("'@type': 'PostalAddress'")) {
    let normalizedPath = file.replace(/\\/g, '/');
    let relativePath = normalizedPath.replace(__dirname.replace(/\\/g, '/') + '/pages/', '');
    let depth = relativePath.split('/').length - 1;
    let importPrefix = depth === 0 ? '../' : '../'.repeat(depth + 1);
    
    if (!content.includes('SCHEMA_ADDRESS')) {
      content = content.replace(/import [^;]+;/, match => match + '\nimport { SCHEMA_ADDRESS } from \'' + importPrefix + 'lib/site\';');
    }

    content = content.replace(/"address"\s*:\s*\{[^}]*"@type"\s*:\s*"PostalAddress"[^}]*\}/g, '"address": SCHEMA_ADDRESS');
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedFiles++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Modified ${modifiedFiles} files.`);
