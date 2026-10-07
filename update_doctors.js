const fs = require('fs');
let content = fs.readFileSync('data/doctorData.js', 'utf8');

// 1. Remove drPriyaNair and drPriyaNairTemplate
content = content.replace(/export const drPriyaNair = [\s\S]*?\/\/ =====================================================\r?\n\/\/ DR\. ANUSHA MAKKENA/g, '// =====================================================\n// DR. ANUSHA MAKKENA');

// 2. Update relatedDoctors
content = content.replace(/{\s*name: "Dr\. Priya Nair",\s*specialty: "Chronic Pain, PCOS, Migraine",\s*slug: "dr-priya-nair",\s*},/g, '');
content = content.replace(/name: "Dr\. Zainab",\s*specialty: "Neurological Rehab, Musculoskeletal Care",\s*slug: "dr-zainab",/g, 'name: "Dr. Zainab Sheikh",\n      specialty: "Ayurveda",\n      slug: "dr-zainab-ayurveda",');

// 3. Johanna Bautista Updates
content = content.replace(/title: 'Senior Aesthetician & Laser Specialist',/g, "title: 'Patient Care & Operations Specialist',");
content = content.replace(/heroBadge: 'SENIOR AESTHETICIAN & LASER SPECIALIST',/g, "heroBadge: 'PATIENT CARE & OPERATIONS SPECIALIST',");
content = content.replace(/bio: "Johanna Bautista is our Senior Aesthetician and Laser Specialist[\s\S]*?many patients book specifically with Johanna for the calm, thorough, and unhurried care she delivers in every session. She also coordinates the overall patient experience and booking journey at Vedara Care.",/g, 'bio: "Johanna Bautista coordinates the overall patient experience and booking journey at Vedara Care.",');
content = content.replace(/summaryTitle: "Unhurried, clinical-grade aesthetic care — Johanna's approach.",/g, 'summaryTitle: "Patient Care & Operations",');
content = content.replace(/summaryParagraph1: "Johanna Bautista is Senior Aesthetician and Laser Specialist[\s\S]*?under the supervision of our DHA-licensed dermatology team.",/g, 'summaryParagraph1: "Johanna Bautista coordinates the overall patient experience journey at Vedara Care — from first booking through treatment scheduling to follow-up check-ins.",');
content = content.replace(/summaryParagraph2: "Patients consistently note her calm, unhurried, and thorough approach\. Every aesthetic session begins with a realistic expectation-setting discussion: what the treatment can genuinely achieve, how many sessions are typically required, and the total financial commitment before anything begins\.",/g, '');
content = content.replace(/summaryParagraph3: "Johanna also coordinates the overall patient experience journey at Vedara Care — from first booking through treatment scheduling to follow-up check-ins\.",/g, '');
content = content.replace(/specialtiesList: \[[\s\S]*?\],/g, 'specialtiesList: [],');
content = content.replace(/conditionsTreated: {[\s\S]*?},/g, 'conditionsTreated: { categories: [] },');
content = content.replace(/reviews: {[\s\S]*?},/g, 'reviews: { items: [] },');
content = content.replace(/consultation: {[\s\S]*?},/g, 'consultation: { phases: [] },');

fs.writeFileSync('data/doctorData.js', content);
console.log('Modified doctorData.js');

// 4. Update [slug].js to remove Dr Priya Nair
let slugContent = fs.readFileSync('pages/doctors/[slug].js', 'utf8');
slugContent = slugContent.replace(/import { drPriyaNairTemplate } from '@\/data\/doctorData';[\s\S]*?export default function DoctorSlugPage\(\) {[\s\S]*?return \([\s\S]*?<>[\s\S]*?<Head>[\s\S]*?<\/Head>[\s\S]*?<DoctorPageTemplate doctor={drPriyaNairTemplate} \/>[\s\S]*?<\/>[\s\S]*?\);[\s\S]*?}/g, 
  "export default function DoctorSlugPage() {\n  return <div>Doctor Not Found</div>;\n}");
fs.writeFileSync('pages/doctors/[slug].js', slugContent);
console.log('Modified [slug].js');
