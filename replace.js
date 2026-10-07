const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\pc\\Documents\\vedacare\\vedaraCare';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 1. hair removal
  content = content.replace(/hair removal|hair-removal|laser hair|diode laser|alexandrite/gi, 'aesthetic treatment');
  
  // 2. hijama
  if (!filePath.includes('dr-zainab-ayurveda')) {
    content = content.replace(/hijama|wet cupping/gi, 'cupping');
  }

  // 4. placeholders
  content = content.replace(/XXXXX|\[INSERT[^\]]*\]|\[Lead[^\]]*\]|AED \[price\]|Building 123|DHA-F-0014882|0048291/gi, '');
  
  // 5. direct bill
  content = content.replace(/direct[- ]bill(ing)?/gi, 'insurance reimbursement support');

  // 6. prices
  content = content.replace(/AED ?[0-9,]+/gi, '');

  // 7. DPT
  content = content.replace(/\bDPT\b/g, 'BSc PT');
  content = content.replace(/Doctor of Physical Therapy/gi, 'Physiotherapist');

  // 8. best
  content = content.replace(/\bbest (ayurved|physio|clinic|dermat|skin|aesthetic|doctor)/gi, 'leading $1');

  // 9. happy patients
  content = content.replace(/[0-9][0-9,]{2,}\+? (happy )?(patients|clients)/gi, 'patients');

  // 10. prohibited services
  content = content.replace(/doctor on call|home nursing|IV drip|24\/7|home services available|same-day/gi, 'expert care');

  // 11. ratings/guarantees
  content = content.replace(/4\.5 Google|97%|Insurance Accepted|Holistic Healthcare in/gi, '');

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
      if (['.js', '.jsx'].includes(path.extname(fullPath))) {
        replaceInFile(fullPath);
      }
    }
  }
}

walkDir(path.join(dir, 'pages'));
walkDir(path.join(dir, 'data'));
walkDir(path.join(dir, 'components'));
