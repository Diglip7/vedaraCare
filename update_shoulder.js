const fs = require('fs');
const path = require('path');

const dataFile = 'c:/Users/pc/Documents/vedacare/vedaraCare/data/shoulderPhysiotherapyData.js';
let dataContent = fs.readFileSync(dataFile, 'utf8');

// B2. 1. Hero
dataContent = dataContent.replace(
  /label: "SHOULDER PAIN PHYSIOTHERAPY[^]*?trustSignals: \[[^\]]*\],/,
  `label: "SHOULDER PAIN PHYSIOTHERAPY · DHA-LICENSED CLINIC IN JVC, DUBAI",
  title: "Shoulder pain treatment in Dubai, at our JVC clinic. The right treatment for your exact condition.",
  titleAccent: "The right treatment",
  description: "Physiotherapy for rotator cuff problems, shoulder impingement, AC joint pain and shoulder injuries at our Jumeirah Village Circle clinic, walking distance from Circle Mall, with Hafsina K K, our DHA-licensed physiotherapist.",
  primaryCTA: "Book Shoulder Pain Assessment",
  primaryCTAHref: "/book",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20shoulder%20pain%20physiotherapy%20and%20book%20a%20consultation.",
  trustSignals: [
    "DHA-licensed physiotherapist (DHA-P 64812828)",
    "Same-day appointments available",
    "Most shoulder pain improves without surgery",
    "Shockwave for long-standing tendon problems"
  ],`
);

// B2. 2. Quick answer
dataContent = dataContent.replace(
  /blockquote: "Shoulder pain physiotherapy at Vedara Care Polyclinic[^]*?footer: "Medically reviewed by Hafsina K K[^]*?"/,
  `blockquote: "Shoulder pain treatment at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai covers rotator cuff tendinopathy and tears, shoulder impingement, AC joint pain, biceps tendinopathy, bursitis, calcific tendinopathy, shoulder instability and shoulder arthritis. Hafsina K K, a DHA-licensed physiotherapist (DHA-P 64812828), identifies the exact cause and treats it with condition-specific exercise, shoulder-blade control, joint mobilisation and mobilisation with movement, dry needling, shockwave for long-standing tendon problems, and heat or TENS for pain. Most shoulder pain, including many rotator cuff tears, improves without surgery, usually over weeks to a few months. Same-day appointments are available, and our in-house GP can refer you for an injection if needed. Insurance works on reimbursement.",
  footer: "Medically reviewed by Hafsina K K, DHA-Licensed Physiotherapist (DHA-P 64812828). Reviewed October 2026."`
);

// B2. 3. Understanding shoulder pain
dataContent = dataContent.replace(
  /The desk-working majority develops postural shoulder problems/g,
  "Many people develop postural shoulder problems"
);

// B2. 4. Conditions
dataContent = dataContent.replace(
  /title: "Post-Surgical Shoulder Recovery",[^]*?typicalSigns: \[[^\]]*\]/,
  `title: "After Shoulder Surgery",
      description: "Rotator cuff repair, labral repair, shoulder replacement and stabilisation surgery rehabilitation. See <a href='/physiotherapy/post-surgery-rehab-dubai/'>post-surgery physiotherapy</a>."`
);
dataContent = dataContent.replace(
  /title: "Frozen Shoulder",[^]*?href: "\/conditions\/frozen-shoulder-dubai\/"/,
  `title: "Frozen Shoulder",
      description: "Stiffness in every direction that builds over months. See our <a href='/conditions/frozen-shoulder-dubai/'>frozen shoulder treatment</a> page."`
);
dataContent = dataContent.replace(
  /description: "Tears in the rotator cuff tendons[^]*?patterns.",/,
  `description: "Tears in the rotator cuff tendons — partial-thickness tears (some fibres intact) or full-thickness tears (complete tendon disruption). Many rotator cuff tears do not require surgery, particularly degenerative tears in older patients. Comprehensive conservative care produces excellent outcomes in most cases. Surgery considered for active patients with significant function loss or specific tear patterns. <a href='#rotator-cuff' class='font-medium text-[#C9A55A] hover:underline'>Do you need surgery? Read more</a>",`
);

// Add Shoulder Arthritis and Shoulder Blade Pain at the end of the array before frozen shoulder
const conditionsMatch = dataContent.match(/number: "10",\s*title: "Frozen Shoulder",/);
if (conditionsMatch) {
  const replacement = `number: "10",
      title: "Shoulder Arthritis",
      description: "Wear in the shoulder joint causing aching and stiffness, mostly over 60. Strengthening, mobility work and activity advice; our GP can refer you if injections are needed."
    },
    {
      number: "11",
      title: "Shoulder Blade Pain",
      description: "Aching around or between the shoulder blades, often from posture, desk work or the neck. Shoulder-blade control, thoracic mobility and posture advice; see <a href='/conditions/neck-pain-physiotherapy-jvc/'>neck pain physiotherapy</a> if it starts in the neck."
    },
    {
      number: "12",
      title: "Frozen Shoulder",`;
  dataContent = dataContent.replace(conditionsMatch[0], replacement);
}

// B2. 6. Shoulder pain by activity
dataContent = dataContent.replace(
  /title: "Gym Training \(CrossFit, F45, Weightlifting\)"/,
  'title: "Gym Training and Group Fitness Classes"'
);
dataContent = dataContent.replace(
  /title: "Office Work & Desk-Based Roles",\s*items: \[/,
  'title: "Desk-Work",\n      items: ['
);
dataContent = dataContent.replace(
  /"Scapular dyskinesia — often combined with neck pain"/,
  '"Scapular dyskinesia — often combined with neck pain",\n        "Posture and desk-setup advice at the clinic"'
);

// B2. 7. Treatment approach
dataContent = dataContent.replace(
  /title: "Comprehensive initial assessment",[^]*?driving it."/,
  `title: "Comprehensive initial assessment",
        description: "Your first session includes a detailed history, posture and neck screening, shoulder movement and strength testing, and usually your first treatment; session length depends on your needs."`
);
dataContent = dataContent.replace(
  /title: "Workplace and activity modification",[^]*?meaningful improvement."/,
  `title: "Desk, sleep and activity advice",
        description: "Changes to desk setup, sleep position, gym technique and sport load, assessed at the clinic; we do not visit workplaces."`
);
// Add Heat, TENS
const approachMatch = dataContent.match(/title: "Desk, sleep and activity advice",\s*description: "[^"]*"\s*}/);
if (approachMatch) {
  dataContent = dataContent.replace(approachMatch[0], approachMatch[0] + `,
      {
        title: "Heat, TENS and electrical stimulation",
        description: "Used for pain relief in the early stage, alongside exercise, never on their own."
      }`);
}

// B2. 8. Surgical considerations
dataContent = dataContent.replace(
  /surgicalCoordination: \{[^]*?\}/,
  `title: "Surgical opinions and injections:",
    description: "If surgery may be appropriate, we can suggest orthopaedic surgeons for an opinion on request; we have no referral arrangements. Our in-house GP can refer you for a shoulder injection. Physiotherapy before and after surgery is on our post-surgery page."`
);
dataContent = dataContent.replace(
  /approachToSurgery:\s*\{/,
  `approachToSurgery: {`
);

// B2. 9. Reviews
dataContent = dataContent.replace(
  /export const shoulderPhysioReviews = \{[^]*?buttonText: "Read All Shoulder Pain Reviews →"\n\};/,
  `export const shoulderPhysioReviews = physioReviewsBlock('What patients say about physiotherapy with Hafsina K K');`
);

// B2. 10. Team
dataContent = dataContent.replace(
  /qualification: "DHA-Licensed Physiotherapist \(DHA-P 64812828\)",\s*specialties: \["Orthopedic", "Sports", "Neurological"\]/,
  `qualification: "Bachelor of Physiotherapy · DHA-P 64812828 · 7+ years' experience",
      specialties: ["Shoulder Pain", "Rotator Cuff Rehab", "Sports Shoulder Injuries", "Shockwave Therapy"]`,
);

// Add New Sections
dataContent += `

export const shoulderRotatorCuff = {
  id: "rotator-cuff",
  label: "ROTATOR CUFF",
  title: "Rotator cuff tear or tendinopathy: do you need surgery?",
  content: [
    "Usually not. Rotator cuff tendinopathy and most partial tears, and many full-thickness tears in people over 50, improve with a structured physiotherapy programme, typically over about 3 months. Rotator cuff tears also show up on scans in many people with no pain, so the scan alone does not decide treatment.",
    "<strong>What treatment includes</strong><br/>Progressive rotator cuff and shoulder-blade strengthening, adjusting overhead and lifting activity, manual therapy, and shockwave for long-standing or calcific tendon problems.",
    "<strong>When surgery is more likely</strong><br/>A sudden large tear after an injury in a younger, active person, marked weakness lifting the arm, or no improvement after a good rehabilitation programme. Our in-house GP can refer you for an injection or, on request, we can suggest surgeons for an opinion.",
    "<strong>See a doctor first if</strong><br/>you suddenly cannot lift your arm after a fall, the shoulder looks deformed, or you have fever with a hot, swollen shoulder. Go to A&E for a suspected dislocation or fracture."
  ],
  image: "/images/shoulder-anatomy-illustration.webp",
  alt: "Rotator cuff anatomy and physiotherapy, Vedara Care, JVC, Dubai"
};

export const shoulderExercises = {
  id: "exercises",
  label: "SELF-HELP",
  title: "Shoulder pain exercises and sleeping positions.",
  content: [
    "These are safe for most ordinary shoulder pain; stop if pain becomes sharp, lasts more than an hour afterwards, or you notice new weakness. Exercises for instability or after an injury should be set by your physiotherapist.",
    "<strong>Pendulum swings</strong><br/>Lean forward with the sore arm hanging relaxed and let it swing gently in small circles for 30 seconds.",
    "<strong>Shoulder-blade squeezes</strong><br/>Sit or stand tall, squeeze your shoulder blades back and down, hold for 5 seconds, relax; repeat 10 times.",
    "<strong>Doorway stretch</strong><br/>Place your forearm on a door frame at shoulder height and turn your body gently away until you feel a stretch at the front of the shoulder; hold for 15-20 seconds.",
    "<strong>External rotation with a band</strong><br/>Elbow bent at your side, rotate the forearm outwards against a light band; 10-15 slow repetitions once pain allows.",
    "<strong>Sleeping</strong><br/>Avoid lying on the painful side. On your back, rest the arm on a pillow; on the other side, hug a pillow to support the sore arm.",
    "Hafsina K K will check which exercises suit your condition and progress them."
  ],
  image: "/images/shoulder-assessment-vedara-jvc.webp",
  alt: "Shoulder pain exercises at Vedara Care, JVC, Dubai"
};
`;

if (dataContent.includes("import { physioReviewsBlock }")) {
  dataContent = dataContent.replace("import { physioReviewsBlock } from './googleReviews';\n", "");
  dataContent = "import { physioReviewsBlock } from './googleReviews';\n" + dataContent;
} else {
  dataContent = "import { physioReviewsBlock } from './googleReviews';\n" + dataContent;
}

fs.writeFileSync(dataFile, dataContent);

const pageFile = 'c:/Users/pc/Documents/vedacare/vedaraCare/pages/conditions/shoulder-pain-physiotherapy-dubai.js';
let pageContent = fs.readFileSync(pageFile, 'utf8');

pageContent = pageContent.replace(
  /shoulderPhysioPricing\n} from '\.\.\/\.\.\/data\/shoulderPhysiotherapyData';/,
  `shoulderPhysioPricing,
  shoulderRotatorCuff,
  shoulderExercises
} from '../../data/shoulderPhysiotherapyData';`
);

const oldMeta = /<title>Shoulder Pain Physiotherapy in JVC, Dubai \| Vedara Care<\/title>[\s\S]*?<link rel="alternate" href="https:\/\/vedaracare\.ae\/conditions\/shoulder-pain-physiotherapy-dubai\/" hreflang="x-default" \/>/m;

const newMeta = `<title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        <link rel="canonical" href="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" hreflang="en-AE" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" hreflang="x-default" />
        
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content="https://vedaracare.ae/conditions/shoulder-pain-physiotherapy-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:image" content="https://vedaracare.ae/images/shoulder-pain-physiotherapy-dubai-hero.webp" />
        
        <meta name="twitter:card" content="summary_large_image" />`;

pageContent = pageContent.replace(oldMeta, newMeta);

const pageObject = `
  const PAGE = {
    path: '/conditions/shoulder-pain-physiotherapy-dubai/',
    title: "Shoulder Pain Treatment in Dubai | Physiotherapy in JVC | Vedara",
    description: "Shoulder pain physiotherapy at our JVC clinic, Dubai: rotator cuff, impingement, AC joint and shoulder injuries. Most improve without surgery. Same-day slots.",
  };
`;

pageContent = pageContent.replace(/const schemaData = currentDate \? JSON\.stringify\(\[/, pageObject + '\n  const schemaData = currentDate ? JSON.stringify([');

const newSections = `<SciaticaTypes
          {...shoulderPhysioConditions}
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        />
        <div id="rotator-cuff">
          <SciaticaTreatment data={shoulderRotatorCuff} showBorderLeft={false} rightContentStyle="keyAnatomy" bgColor="bg-[#F8F5EE]" showStepNumbers={false} />
        </div>
        <div id="exercises">
          <SciaticaTreatment data={shoulderExercises} showBorderLeft={false} rightContentStyle="keyAnatomy" bgColor="bg-white" showStepNumbers={false} />
        </div>`;

pageContent = pageContent.replace(/<SciaticaTypes[\s\S]*?gap-6"\n\s*\/>/, newSections);

pageContent = pageContent.replace(/<TreatmentReviews \{\.\.\.physioReviewsBlock\(\)\} \/>/, "<TreatmentReviews {...shoulderPhysioReviews} />");

fs.writeFileSync(pageFile, pageContent);
console.log('Script execution complete!');
