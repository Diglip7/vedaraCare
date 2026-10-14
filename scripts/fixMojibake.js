const fs = require('fs');
const path = require('path');

function fixFile(filePath, replacements) {
  const fullPath = path.resolve(__dirname, '..', filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  for (const [pattern, replacement] of replacements) {
    if (pattern instanceof RegExp) {
      content = content.replace(pattern, replacement);
    } else {
      content = content.split(pattern).join(replacement);
    }
  }
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Fixed ${filePath}`);
}

// 1. data/advancedFacialData.js
fixFile('data/advancedFacialData.js', [
  [/.*booking@vedaracare\.ae.*/g, '    "✉️ booking@vedaracare.ae"'],
  [/.*WhatsApp Available.*/g, '    "💬 WhatsApp Available",'],
  [/.*\+971 55 573 6312.*/g, '    "📞 +971 55 573 6312",']
]);

// 2. data/microdermabrasionData.js
fixFile('data/microdermabrasionData.js', [
  [/.*booking@vedaracare\.ae.*/g, '    "✉️ booking@vedaracare.ae"'],
  [/.*WhatsApp Available.*/g, '    "💬 WhatsApp Available",'],
  [/.*\+971 55 573 6312.*/g, '    "📞 +971 55 573 6312",']
]);

// 3. components/treatments/MesotherapyComponents.jsx
fixFile('components/treatments/MesotherapyComponents.jsx', [
  [/<span className="text-\[#C8A87F\] text-\[14px\] font-sans mt-0.5">.*<\/span>/g, '<span className="text-[#C8A87F] text-[14px] font-sans mt-0.5">✕</span>'],
  [/<span className="text-2xl flex-shrink-0 mt-1">.*<\/span>\s*<div>\s*<p className="font-sans text-\[15px\] font-medium mb-1 text-\[#1F1F1F\]">PRP Facial JVC<\/p>/g, '<span className="text-2xl flex-shrink-0 mt-1">🩸</span>\n            <div>\n              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">PRP Facial JVC</p>'],
  [/<span className="text-2xl flex-shrink-0 mt-1">.*<\/span>\s*<div>\s*<p className="font-sans text-\[15px\] font-medium mb-1 text-\[#1F1F1F\]">Exosome Skin Rejuvenation JVC<\/p>/g, '<span className="text-2xl flex-shrink-0 mt-1">✨</span>\n            <div>\n              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">Exosome Skin Rejuvenation JVC</p>'],
  [/<span className="text-2xl flex-shrink-0 mt-1">.*<\/span>\s*<div>\s*<p className="font-sans text-\[15px\] font-medium mb-1 text-\[#1F1F1F\]">Dermal Fillers JVC<\/p>/g, '<span className="text-2xl flex-shrink-0 mt-1">💉</span>\n            <div>\n              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">Dermal Fillers JVC</p>'],
  [/<span className="text-2xl flex-shrink-0 mt-1">.*<\/span>\s*<div>\s*<p className="font-sans text-\[15px\] font-medium mb-1 text-\[#1F1F1F\]">Microneedling JVC<\/p>/g, '<span className="text-2xl flex-shrink-0 mt-1">🪡</span>\n            <div>\n              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">Microneedling JVC</p>'],
  [/<span className="text-2xl flex-shrink-0 mt-1">.*<\/span>\s*<div>\s*<p className="font-sans text-\[15px\] font-medium mb-1 text-\[#1F1F1F\]">Customized Anti-Aging &amp; Skin-Firming Protocol<\/p>/g, '<span className="text-2xl flex-shrink-0 mt-1">🌿</span>\n            <div>\n              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">Customized Anti-Aging &amp; Skin-Firming Protocol</p>'],
  [/<span className="text-2xl flex-shrink-0 mt-1">.*<\/span>\s*<div>\s*<p className="font-sans text-\[15px\] font-medium mb-1 text-\[#1F1F1F\]">Comprehensive Skin Analysis JVC<\/p>/g, '<span className="text-2xl flex-shrink-0 mt-1">🔬</span>\n            <div>\n              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">Comprehensive Skin Analysis JVC</p>']
]);

// 4. components/treatments/HifuComponents.jsx
fixFile('components/treatments/HifuComponents.jsx', [
  // Section 2 icons
  [/icon: ".*",\s*title: "Treatment Type"/g, 'icon: "🔬",\n      title: "Treatment Type"'],
  [/icon: ".*",\s*title: "Session Duration"/g, 'icon: "⏱️",\n      title: "Session Duration"'],
  [/icon: ".*",\s*title: "Recovery & Downtime"/g, 'icon: "💧",\n      title: "Recovery & Downtime"'],
  [/icon: ".*",\s*title: "Results Timeline"/g, 'icon: "📅",\n      title: "Results Timeline"'],
  [/icon: ".*",\s*title: "Investment Range"/g, 'icon: "💰",\n      title: "Investment Range"'],
  [/icon: ".*",\s*title: "Primary Delivery"/g, 'icon: "👩‍⚕️",\n      title: "Primary Delivery"'],
  [/icon: ".*",\s*title: "Best For"/g, 'icon: "🎯",\n      title: "Best For"'],
  [/icon: ".*",\s*title: "Sessions Required"/g, 'icon: "🔄",\n      title: "Sessions Required"'],

  // Section 7 icons
  [/icon: ".*",\s*title: "Early Intervention Candidate/g, 'icon: "👩",\n      title: "Early Intervention Candidate'],
  [/icon: ".*",\s*title: "Structural Correction Candidate/g, 'icon: "💎",\n      title: "Structural Correction Candidate'],
  [/icon: ".*",\s*title: "Post-Weight-Loss Patient"/g, 'icon: "⚖️",\n      title: "Post-Weight-Loss Patient"'],
  [/icon: ".*",\s*title: "Male Executive"/g, 'icon: "👔",\n      title: "Male Executive"'],
  [/icon: ".*",\s*title: "Pre-Event \/ Pre-Milestone Patient"/g, 'icon: "💆",\n      title: "Pre-Event / Pre-Milestone Patient"'],
  [/icon: ".*",\s*title: "Fitzpatrick IV-V Patient/g, 'icon: "☀️",\n      title: "Fitzpatrick IV-V Patient'],
  [/icon: ".*",\s*title: "Post-Pregnancy Recovery Patient"/g, 'icon: "🌸",\n      title: "Post-Pregnancy Recovery Patient"'],
  [/icon: ".*",\s*title: "Menopausal \/ Peri-Menopausal Patient"/g, 'icon: "🌿",\n      title: "Menopausal / Peri-Menopausal Patient"'],
  [/icon: ".*",\s*title: "Décolletage-Focused Patient"/g, 'icon: "✨",\n      title: "Décolletage-Focused Patient"'],
  [/icon: ".*",\s*title: "Post-Surgical Facelift Maintenance"/g, 'icon: "✂️",\n      title: "Post-Surgical Facelift Maintenance"'],
  [/icon: ".*",\s*title: "Brow Position Correction Patient"/g, 'icon: "👁️",\n      title: "Brow Position Correction Patient"'],
  [/icon: ".*",\s*title: "Combined Modality Programme Patient"/g, 'icon: "🔄",\n      title: "Combined Modality Programme Patient"'],

  // bullets and symbols
  [/<span className="text-\[#C8A87F\] mr-2 text-\[10px\] mt-1">.*<\/span>/g, '<span className="text-[#C8A87F] mr-2 text-[10px] mt-1">▪</span>'],
  [/<span className="text-\[#D9534F\] mr-2 mt-0.5 text-\[12px\]">.*<\/span>/g, '<span className="text-[#D9534F] mr-2 mt-0.5 text-[12px]">✕</span>'],
  [/<span className="mr-2">.*<\/span> Ask on WhatsApp/g, '<span className="mr-2">💬</span> Ask on WhatsApp'],

  // Section 14 cards
  [/<span className="text-\[24px\] mb-4 block text-\[#C8A87F\]">.*<\/span>\s*<h3 className="font-serif text-\[18px\] text-\[#1F1F1F\] mb-3">Location<\/h3>/g, '<span className="text-[24px] mb-4 block text-[#C8A87F]">📍</span>\n              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">Location</h3>'],
  [/<span className="text-\[24px\] mb-4 block text-\[#C8A87F\]">.*<\/span>\s*<h3 className="font-serif text-\[18px\] text-\[#1F1F1F\] mb-3">Contact Channels<\/h3>/g, '<span className="text-[24px] mb-4 block text-[#C8A87F]">📞</span>\n              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">Contact Channels</h3>'],
  [/<span className="text-\[24px\] mb-4 block text-\[#C8A87F\]">.*<\/span>\s*<h3 className="font-serif text-\[18px\] text-\[#1F1F1F\] mb-3">Availability<\/h3>/g, '<span className="text-[24px] mb-4 block text-[#C8A87F]">🕒</span>\n              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">Availability</h3>'],
  [/<span className="text-\[24px\] mb-4 block text-\[#C8A87F\]">.*<\/span>\s*<h3 className="font-serif text-\[18px\] text-\[#1F1F1F\] mb-3">DHA Licence<\/h3>/g, '<span className="text-[24px] mb-4 block text-[#C8A87F]">📜</span>\n              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">DHA Licence</h3>'],

  // Arrow markers in location card
  [/.*Walking distance from Circle Mall/g, '              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">↗ Walking distance from Circle Mall</p>'],
  [/.*3 min from FIVE JVC Hotel/g, '              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">↗ 3 min from FIVE JVC Hotel</p>'],
  [/.*5 min from JSS Private School/g, '              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">↗ 5 min from JSS Private School</p>']
]);

// 5. pages/treatments/rf-microneedling-jvc.js
fixFile('pages/treatments/rf-microneedling-jvc.js', [
  [/<span className="mt-1">.*<\/span>\s*<span>{item}<\/span>/g, '<X size={16} color="#A24E3B" className="shrink-0 mt-0.5" />\n                  <span>{item}</span>']
]);

console.log('All files cleaned successfully.');
