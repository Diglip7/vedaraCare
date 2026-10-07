const fs = require('fs');
let content = fs.readFileSync('c:/Users/pc/Documents/vedacare/vedaraCare/data/sportsPhysiotherapyData.js', 'utf8');

content = content.replace(/export const sportsPhysiotherapyIntegration = \{[\s\S]*?\};\r?\n\r?\n/, '');

const newOutcomes = `export const sportsPhysiotherapyOutcomes = {
  bgColor: "bg-[#F5F1EB]", headerBgColor: "bg-[#184C3A]", headerTextColor: "text-white",
  label: "TYPICAL RECOVERY TIMES",
  title: "How long sports injuries usually take to recover.",
  description: "Typical ranges from published guidance. Your own timeline depends on how bad the injury is, your sport, and how closely you follow the plan; your physiotherapist gives you a personal estimate after the assessment.",
  tableHeaders: ["Injury", "Typical return to sport", "Main focus of rehab", "See a doctor first if"],
  tableRows: [
    { subtype: "Ankle sprain (mild to moderate)", days: "1-6 weeks", severity: "Balance, ankle strength, hopping and cutting drills", medication: "You cannot put weight on the foot, or there is bone tenderness" },
    { subtype: "Hamstring strain", days: "1-8 weeks, depending on grade", severity: "Progressive strength and sprint loading", medication: "A pop with large bruising or a gap in the muscle" },
    { subtype: "Calf strain", days: "2-6 weeks", severity: "Calf loading, hopping, gradual return to running", medication: "Sudden pain at the back of the heel (possible Achilles rupture)" },
    { subtype: "Padel / tennis elbow", days: "6-12 weeks, sometimes longer", severity: "Forearm and grip loading, shoulder and technique", medication: "Numbness or weakness in the hand" },
    { subtype: "Runner's knee", days: "6-12 weeks", severity: "Hip and thigh strength, load and gait changes", medication: "The knee locks, gives way or swells quickly" },
    { subtype: "Achilles tendinopathy", days: "3-6 months", severity: "Progressive tendon loading", medication: "Sudden severe pain or inability to rise on tiptoe" },
    { subtype: "Shin splints", days: "4-8 weeks", severity: "Load management, calf and foot strength, gait", medication: "Pain at one spot on the bone, at rest or at night (possible stress fracture)" }
  ],
  footer: "Returning only when you pass strength and movement tests, not just when pain settles, is the best way to avoid re-injury."
};`;

content = content.replace(/export const sportsPhysiotherapyOutcomes = \{[\s\S]*?footer: [^\n]*\r?\n\};\r?\n?/, newOutcomes + '\n\n');

fs.writeFileSync('c:/Users/pc/Documents/vedacare/vedaraCare/data/sportsPhysiotherapyData.js', content);
console.log('done');
