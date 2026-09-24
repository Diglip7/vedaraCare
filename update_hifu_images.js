const fs = require('fs');
const file = 'c:/Users/pc/Documents/vedacare/vedaraCare/components/treatments/HifuComponents.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Hero
content = content.replace(
  /<img\s+src="\/images\/hifu-jvc-hero-bg\.jpg"\s+alt="[^"]*"/g,
  `<img
          src="/images/hifu-jvc-hero-bg.webp"
          alt="Vedara Care JVC treatment room with HIFU device on the treatment cart, prepared for a skin lifting session under Medical Director protocol"`
);

// 2. Hero secondary
content = content.replace(
  /<div className="hidden md:block">\s*<div className="bg-\[#FAF7F2\] p-8 rounded-xl/g,
  `<div className="hidden md:block">
          <img src="/images/placeholder-2.jpg" alt="HIFU device transducer with 4.5mm, 3.0mm, and 1.5mm cartridges displayed alongside patient consent documentation at Vedara Care Polyclinic Jumeirah Village Circle" className="w-full h-48 object-cover rounded-xl mb-6 shadow-md" />
          <div className="bg-[#FAF7F2] p-8 rounded-xl`
);

// 3. Section 3 (At a glance)
content = content.replace(
  /alt="HIFU treatment infographic showing three cartridge depths - 1\.5mm superficial dermis, 3\.0mm reticular dermis, 4\.5mm SMAS layer targeting"/g,
  `alt="HIFU treatment infographic showing three cartridge depths — 1.5mm superficial dermis, 3.0mm reticular dermis, 4.5mm SMAS layer targeting"`
);

// 4. Section 4 Why Choose
content = content.replace(
  /alt="Medical Director consultation room at Vedara Care JVC with clinical assessment documentation for HIFU candidacy evaluation"/g,
  `alt="Medical Director consultation room at Vedara Care JVC with clinical assessment documentation for HIFU candidacy evaluation"`
);

// 5, 6, 7, 8: Section 6
content = content.replace(
  /<h3 className="font-serif text-\[24px\] text-\[#1F1F1F\] mb-6">The Three-Depth Delivery Framework<\/h3>/g,
  `<h3 className="font-serif text-[24px] text-[#1F1F1F] mb-6">The Three-Depth Delivery Framework</h3>
        <img src="/images/placeholder-5.jpg" alt="Cross-section diagram of facial skin layers showing SMAS layer targeted by HIFU 4.5mm cartridge at Vedara Care Polyclinic JVC" className="w-full max-w-[800px] mx-auto block mb-12 rounded-xl border border-[#EAE3D9]" />`
);

content = content.replace(
  /<h3 className="font-serif text-\[24px\] text-\[#1F1F1F\] mb-4">Vectoring Methodology<\/h3>/g,
  `<h3 className="font-serif text-[24px] text-[#1F1F1F] mb-4">Vectoring Methodology</h3>
            <img src="/images/placeholder-6.jpg" alt="HIFU vector mapping diagram showing jawline, mid-face, submental, and lateral brow treatment vectors used in Vedara Care JVC protocol" className="w-full h-auto mb-6 rounded-xl border border-[#EAE3D9]" />`
);

content = content.replace(
  /<h3 className="font-serif text-\[24px\] text-\[#1F1F1F\] mb-6">The Collagen Remodelling Timeline<\/h3>/g,
  `<h3 className="font-serif text-[24px] text-[#1F1F1F] mb-6">The Collagen Remodelling Timeline</h3>
            <img src="/images/placeholder-7.jpg" alt="Collagen remodelling timeline infographic — 60-90 day peak result window from HIFU wound-healing cascade documented at Vedara Care JVC" className="w-full h-auto mb-6 rounded-xl border border-[#EAE3D9]" />`
);

// 9. Section 7 Populations
content = content.replace(
  /Who HIFU at Vedara Care JVC Is Designed For — And Who It Isn't\s*<\/h2>/g,
  `Who HIFU at Vedara Care JVC Is Designed For — And Who It Isn't
          </h2>
          <img src="/images/placeholder-9.jpg" alt="HIFU patient population diversity representation at Vedara Care JVC — female mid-40s structural correction, male executive, Fitzpatrick IV-V skin" className="w-full max-w-[900px] h-[400px] object-cover mb-8 rounded-xl border border-[#EAE3D9]" />`
);

// 10, 11, 12: Section 8 Protocol
content = content.replace(
  /The Vedara Care JVC HIFU Protocol — Ten-Step Session Structure\s*<\/h2>\s*<p className="font-sans text-\[14px\] text-\[#777777\]">Total session time: 75-90 minutes for face \+ neck<\/p>/g,
  `The Vedara Care JVC HIFU Protocol — Ten-Step Session Structure
          </h2>
          <p className="font-sans text-[14px] text-[#777777] mb-8">Total session time: 75-90 minutes for face + neck</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <img src="/images/placeholder-11.jpg" alt="Pre-treatment HIFU vector mapping on patient face using fine marking pencil at Vedara Care JVC treatment room" className="w-full h-48 object-cover rounded-xl border border-[#EAE3D9]" />
            <img src="/images/placeholder-10.jpg" alt="Arfah Owais delivering HIFU treatment with 4.5mm cartridge to patient's jawline vector at Vedara Care Polyclinic JVC" className="w-full h-48 object-cover rounded-xl border border-[#EAE3D9]" />
            <img src="/images/placeholder-12.jpg" alt="Post-procedure calming and cooling gel application after HIFU session at Vedara Care Polyclinic Jumeirah Village Circle" className="w-full h-48 object-cover rounded-xl border border-[#EAE3D9]" />
          </div>`
);

// 13. Section 9 Journey
content = content.replace(
  /What to Expect — Your Complete HIFU Patient Journey\s*<\/h2>/g,
  `What to Expect — Your Complete HIFU Patient Journey
          </h2>
          <img src="/images/placeholder-13.jpg" alt="Vedara Care JVC 5-phase HIFU patient journey infographic — enquiry through annual maintenance" className="w-full max-w-[900px] mb-8 rounded-xl border border-[#EAE3D9]" />`
);

// 14. Section 10 Case Narratives (existing placeholders 14, 14b, 14c)
content = content.replace(
  /alt="Composite representation of HIFU patient consultation at Vedara Care JVC with Medical Director conducting skin laxity assessment"/g,
  `alt="Composite representation of HIFU patient consultation at Vedara Care JVC with Medical Director conducting skin laxity assessment"`
);

// 15, 16. Section 11 Team
content = content.replace(
  /Arfah Owais<\/h3>\s*<p className="font-sans text-\[13px\] text-\[#C8A87F\] mb-4">/g,
  `Arfah Owais</h3>
              <img src="/images/placeholder-15.jpg" alt="Arfah Owais, DHA-Licensed Aesthetician and HIFU Device-Certified Primary Operator at Vedara Care Polyclinic JVC" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <p className="font-sans text-[13px] text-[#C8A87F] mb-4">`
);
content = content.replace(
  /\[Medical Director Name\]<\/h3>\s*<p className="font-sans text-\[13px\] text-\[#C8A87F\] mb-4">/g,
  `[Medical Director Name]</h3>
              <img src="/images/placeholder-16.jpg" alt="[Medical Director Name], DHA-Licensed Consultant Dermatologist and Medical Director at Vedara Care Polyclinic Jumeirah Village Circle Dubai" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <p className="font-sans text-[13px] text-[#C8A87F] mb-4">`
);

// 17. Section 12 Pricing
content = content.replace(
  /Transparent HIFU Pricing at Vedara Care JVC\s*<\/h2>/g,
  `Transparent HIFU Pricing at Vedara Care JVC
          </h2>
          <img src="/images/placeholder-17.jpg" alt="Transparent HIFU pricing table at Vedara Care JVC with programme course savings math" className="w-full max-w-[800px] mb-8 rounded-xl border border-[#EAE3D9] mx-auto block" />`
);

// 18. Section 15 CTA
content = content.replace(
  /Ready to Find Out if HIFU is Right for You\?\s*<\/h2>/g,
  `Ready to Find Out if HIFU is Right for You?
          </h2>
          <img src="/images/placeholder-18.jpg" alt="Book HIFU Consultation at Vedara Care Polyclinic JVC — free 30-minute Medical Director assessment with honest patient triage" className="w-full max-w-[800px] h-64 object-cover mb-8 rounded-xl border border-[#EAE3D9]/30 mx-auto block" />`
);

// 19. Section 16 Related
content = content.replace(
  /Complementary Modalities — The Vedara Care Aesthetic Cluster\s*<\/h2>/g,
  `Complementary Modalities — The Vedara Care Aesthetic Cluster
          </h2>
          <img src="/images/placeholder-19.jpg" alt="Vedara Care JVC aesthetic treatment cluster diagram — HIFU integration with mesotherapy, PRP, exosome, HydraFacial, anti-aging protocol" className="w-full max-w-[900px] mb-8 rounded-xl border border-[#EAE3D9]" />`
);

// 20. Section 18 footer (placeholder-20.jpg exists)
content = content.replace(
  /alt="Vedara Care Polyclinic JVC DHA licence display and MOHAP compliance documentation"/g,
  `alt="Vedara Care Polyclinic JVC DHA licence display and MOHAP compliance documentation"`
);

// Image 8: Section 6 comparison
content = content.replace(
  /HIFU vs Comparable Lifting Modalities<\/h3>/g,
  `HIFU vs Comparable Lifting Modalities</h3>
          <img src="/images/placeholder-8.jpg" alt="HIFU vs surgical facelift vs RF vs thread lift modality comparison chart from Vedara Care JVC clinical education materials" className="w-full mb-6 rounded-xl border border-[#EAE3D9]" />`
);

fs.writeFileSync(file, content);
console.log('Updated HifuComponents.jsx successfully!');
