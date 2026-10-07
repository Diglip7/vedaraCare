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

const dirs = ['pages', 'data', 'components'].map(d => path.join(__dirname, d));
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

  // 1. hair removal
  content = content.replace(/hair removal|hair-removal|laser hair|diode laser|alexandrite/gi, 'aesthetic treatment');
  
  // 2. hijama
  if (!file.includes('dr-zainab-ayurveda')) {
    content = content.replace(/hijama|wet cupping/gi, 'cupping');
  } else {
    // For Dr. Zainab, only keep "Certified Hijama Practitioner"
    // Just a basic replace for others if needed, but it's simpler to just do it manually if there are a few.
  }

  // 4. placeholders
  content = content.replace(/XXXXX|\[INSERT[^\]]*\]|\[Lead[^\]]*\]|AED \[price\]|Building 123|DHA-F-0014882|0048291/gi, '');
  
  // 5. direct bill
  content = content.replace(/direct[- ]bill(ing)?/gi, 'insurance reimbursement support');

  // 6. prices
  content = content.replace(/AED ?[0-9,]+/gi, '');

  // 7. DPT
  content = content.replace(/\bDPT\b/g, 'BSc PT'); // or just 'Physiotherapist'
  content = content.replace(/Doctor of Physical Therapy/g, 'Physiotherapist');

  // 8. best
  content = content.replace(/\bbest (ayurved|physio|clinic|dermat|skin|aesthetic|doctor)/gi, 'leading $1');

  // 9. happy patients
  content = content.replace(/[0-9][0-9,]{2,}\+? (happy )?(patients|clients)/gi, 'patients');

  // 10. prohibited services
  content = content.replace(/doctor on call|home nursing|IV drip|24\/7|home services available|same-day/gi, 'expert care');

  // 11. ratings/guarantees
  content = content.replace(/4\.5 Google|97%|Insurance Accepted|Holistic Healthcare in/gi, '');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    modifiedFiles++;
  }
}

console.log(`Modified ${modifiedFiles} files.`);
