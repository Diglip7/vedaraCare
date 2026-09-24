const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Users\\pc\\Documents\\vedacare\\vedaraCare';

// 1. Duplicate components
const hydrafacialDir = path.join(basePath, 'components', 'hydrafacial');
const oxygeneoDir = path.join(basePath, 'components', 'oxygeneo');

if (!fs.existsSync(oxygeneoDir)) {
  fs.mkdirSync(oxygeneoDir, { recursive: true });
}

const componentsToDuplicate = [
  'HydraFacialShortVersion.jsx',
  'HydraFacialComprehensiveProtocol.jsx',
  'HydraFacialJourney.jsx',
  'HydraFacialFAQ.jsx',
  'HydraFacialLocation.jsx'
];

componentsToDuplicate.forEach(file => {
  const sourcePath = path.join(hydrafacialDir, file);
  const destPath = path.join(oxygeneoDir, file.replace('HydraFacial', 'OxyGeneo'));
  if (fs.existsSync(sourcePath)) {
    let content = fs.readFileSync(sourcePath, 'utf-8');
    content = content.replace(/HydraFacial/g, 'OxyGeneo');
    content = content.replace(/hydrafacial/g, 'oxygeneo');
    fs.writeFileSync(destPath, content);
    console.log(`Created ${destPath}`);
  }
});
