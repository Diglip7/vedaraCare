import React from 'react';
import Link from 'next/link';
import AyurvedaHero from '../ayurveda/AyurvedaHero';

export const RfFastFacts = () => {
  const facts = [
    { title: "TREATMENT TYPE", desc: "Non-invasive radiofrequency electromagnetic energy. No needles, no incisions, no anaesthesia. Device-based dermal heating targeting collagen contraction and neocollagenesis." },
    { title: "SESSION DURATION", desc: "Full face: 30-45 min · Full face + neck: 45-60 min · Face + neck + decolletage: 60-75 min · Body areas: 45-90 min" },
    { title: "RECOVERY & DOWNTIME", desc: "Zero clinical downtime. Mild redness or warmth 1-4 hours post-session. Return to normal activity immediately. Makeup permitted same day." },
    { title: "RESULTS TIMELINE", desc: "Subtle immediate tightening session-of. Progressive cumulative firming across the series. Peak result 8-12 weeks post-final-session. Durability 8-12 months." },
    { title: "INVESTMENT RANGE", desc: "Single-zone from AED 600 · Full face from AED 900 · Full face + neck from AED 1,100 · Programme of 4 saves 15-20%" },
    { title: "PRIMARY DELIVERY", desc: "Arfah Owais, DHA-Licensed Aesthetician (CIBTAC-UK), RF Device-Certified, 8+ years experience. Medical oversight by DHA-Licensed Consultant Dermatologist." },
    { title: "BEST FOR", desc: "Mild-to-moderate skin laxity, skin quality improvement, early firming, HIFU-averse patients, body area tightening. Not for severe laxity requiring surgery." },
    { title: "SESSIONS REQUIRED", desc: "Standard: programme of 4 sessions (1-2 weeks apart). Extended: 6 sessions. Annual maintenance thereafter. Protocol determined at consultation." }
  ];

  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4">AT A GLANCE</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1F1F1F] mb-12 leading-[1.2] max-w-[800px]">
          RF Skin Tightening at Vedara Care JVC — Everything You Need to Know
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facts.map((fact, idx) => (
            <div key={idx} className="bg-[#FAF7F2] p-8 rounded-xl border border-[#EAE3D9] flex flex-col h-full">
              <h3 className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.05em] uppercase mb-3">{fact.title}</h3>
              <p className="font-sans text-[14px] text-[#555555] leading-[1.6] m-0">{fact.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1F1F1F] rounded-xl p-8 md:p-12">
          <h3 className="font-serif text-[24px] text-white mb-3">Ready to see if RF is the right skin tightening path for your face?</h3>
          <p className="font-sans text-[15px] text-[#DDDDDD] mb-8 leading-[1.6] max-w-[900px]">
            Book a free 30-minute consultation with our Medical Director. Full skin quality and laxity assessment, honest candidacy triage (including whether HIFU, RF, or combined protocol is optimal for your specific case), personalized programme recommendation. No same-day booking pressure.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book RF Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center border border-[#555555] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#333333] transition-colors no-underline">
              Ask on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-4 font-sans text-[12px] text-[#888888]">
            <span>✓ DHA-Licensed</span>
            <span>✓ Medical Director Oversight</span>
            <span>✓ Consultation-First</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RfWhyChooseUs = () => {
  const points = [
    { title: "Medical Director Oversight on Every RF Case", desc: "Every patient accepted for RF has first passed a Consultant Dermatologist Medical Director medical screening. Contraindications identified, appropriate protocol design, adverse event management within the same clinical governance. Most Dubai RF providers do not offer this layered oversight. We do." },
    { title: "Honest Modality Triage (RF vs HIFU vs Combined)", desc: "Our Medical Director's consultation includes explicit modality triage — patients better served by HIFU are told so, patients better served by combined RF + HIFU sequenced programme are told so. We are not selling a device; we are recommending the appropriate treatment for your face." },
    { title: "RF Device-Specific Operator Certification", desc: "Arfah Owais holds specific RF device certification alongside her DHA-Licensed Aesthetician credential (CIBTAC-UK) and 8+ years aesthetic experience. RF quality depends heavily on thermal dosing consistency — maintaining 40-45°C across the treatment area. This is technique developed over hundreds of session hours." },
    { title: "Transparent Programme Pricing", desc: "Our RF pricing is published on this page — single-session AND programme series pricing. Programme of 4 sessions delivers 15-20% savings; programme of 6 delivers 20-25%. No \"you need 8 sessions\" pressure. The Medical Director's clinical assessment determines your protocol, not a sales quota." },
    { title: "Comfort Prioritization", desc: "RF at Vedara Care JVC feels like comfortable warmth — described by patients as \"warm stone massage on the face.\" If a Dubai provider's RF hurts, something is wrong. You should look forward to your sessions, not dread them." },
    { title: "JVC Neighbourhood Convenience", desc: "Walking distance from Circle Mall, 3 minutes from FIVE Jumeirah Village Hotel, 5 minutes from JSS Private School. Free parking, DHA-Licensed multi-specialty facility. RF integrates cleanly with our full aesthetic cluster." }
  ];

  return (
    <section className="py-24 bg-[#1F1F1F] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4">WHY CHOOSE US</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal mb-16 leading-[1.2] max-w-[800px]">
          Why Vedara Care Polyclinic JVC for Your RF Skin Tightening
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => (
            <div key={idx} className="border border-[#333333] p-8 rounded-xl bg-[#252525] hover:border-[#C8A87F]/50 transition-colors">
              <div className="w-8 h-[1px] bg-[#C8A87F] mb-6"></div>
              <h3 className="font-serif text-[20px] mb-4">{point.title}</h3>
              <p className="font-sans text-[14px] text-[#AAAAAA] leading-[1.6] m-0">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const RfVsHifu = () => {
  return (
    <section className="py-24 bg-[#F4F0EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4 text-left">CLINICAL AUTHORITY</div>
          <h2 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1F1F1F] mb-8 leading-[1.2] text-left">
            RF vs HIFU — When Each Modality Fits
          </h2>

          <p className="font-sans text-[16px] text-[#444444] leading-[1.7] mb-12 text-left">
            RF (Radiofrequency) and HIFU (High-Intensity Focused Ultrasound) are different tools for different aesthetic goals. RF delivers electromagnetic energy that heats the dermis less selectively — comfortable warm sensation, series of 4-6 sessions, best for skin quality and mild-moderate firming. HIFU delivers focused ultrasound at fixed depths (1.5mm/3.0mm/4.5mm) with SMAS-layer targeting — more intense sensation, single session or programme of 2, best for structural lifting. At Vedara Care Polyclinic JVC, Medical Director consultation includes explicit modality triage.
          </p>

          <div className="bg-white border border-[#EAE3D9] p-6 rounded-xl mb-12">
            <div className="font-sans text-[11px] font-bold text-[#C8A87F] tracking-[0.1em] uppercase mb-3">PEER-REVIEWED EVIDENCE BASE</div>
            <p className="font-sans text-[13px] text-[#666666] leading-[1.6] m-0">
              Fitzpatrick et al. (Lasers Surg Med, 2003) - Alster & Tanzi (Dermatol Surg, 2004) - Sadick et al. (Dermatol Surg, 2014) - Belenky et al. (Adv Therapy, 2012) - Kaplan & Gat (J Cosmet Laser Ther, 2009) - Araujo et al. (An Bras Dermatol, 2015 — systematic review). RF devices FDA-cleared for non-invasive skin tightening indications and CE-marked for aesthetic use.
            </p>
          </div>

          <div className="bg-[#1F1F1F] rounded-xl p-8 md:p-12 text-white">
            <h3 className="font-serif text-[24px] mb-3">RF works. The peer-reviewed evidence is clear.</h3>
            <p className="font-sans text-[15px] text-[#DDDDDD] mb-8 leading-[1.6]">
              The question is whether it's the right modality for your specific case — or whether HIFU or a combined protocol would serve you better. That's what the free 30-minute consultation determines. Honest modality triage — including 'you'd be better served by HIFU' if that's the accurate answer.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
                Book RF Consultation
              </Link>
              <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center border border-[#555555] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#333333] transition-colors no-underline">
                Ask on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-4 font-sans text-[12px] text-[#888888]">
              <span>✓ DHA-Licensed</span>
              <span>✓ Honest Modality Triage</span>
              <span>✓ Consultation-First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RfUnderstanding = () => {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4 text-center">CLINICAL EDUCATION</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1F1F1F] mb-16 leading-[1.2] text-center max-w-[800px] mx-auto">
          Understanding RF Skin Tightening — What Actually Happens Under the Skin
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div>
            <h3 className="font-sans text-[18px] font-bold text-[#1F1F1F] mb-4">The Thermal-Signal Mental Model</h3>
            <p className="font-sans text-[15px] text-[#555555] leading-[1.7] mb-4">
              The most useful way to think about RF is this: you are asking your skin to build new collagen by giving it a controlled thermal signal that mimics a mild injury without actual injury occurring. The wound-healing cascade — fibroblast activation, collagen synthesis, gradual dermal thickening — produces the visible firming over the following weeks.
            </p>
            <p className="font-sans text-[15px] text-[#555555] leading-[1.7] mb-8">
              Each RF session delivers one thermal signal. Each signal produces one collagen response. The cumulative effect across four to six sessions is what patients see and photograph as visible firming and skin quality improvement. This is why RF is a series treatment, not a single-session treatment.
            </p>
            <div className="border-l-[3px] border-[#C8A87F] pl-6 py-2 bg-white/50 rounded-r-xl">
              <p className="font-sans text-[14px] text-[#444444] leading-[1.6] m-0 mb-3">
                "The most useful mental model for RF is this: you are asking your skin to build new collagen by giving it a controlled thermal signal that mimics a mild injury. The wound-healing response — fibroblast activation, new collagen synthesis, gradual dermal thickening — is what produces the visible firming over the following weeks."
              </p>
              <div className="font-sans text-[11px] text-[#888888]">— Medical Director, Vedara Care Polyclinic JVC</div>
            </div>
          </div>
          <div>
            <h3 className="font-sans text-[18px] font-bold text-[#1F1F1F] mb-6">The Progressive Result Timeline</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#C8A87F] mt-2 shrink-0"></div>
                <div>
                  <div className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-1">Session 1</div>
                  <div className="font-sans text-[14px] text-[#555555]">Subtle immediate tightening from thermal contraction of existing collagen</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#C8A87F] mt-2 shrink-0"></div>
                <div>
                  <div className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-1">Post 1-2 week (Session 2)</div>
                  <div className="font-sans text-[14px] text-[#555555]">Fibroblast activation, early neocollagenesis begins</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#C8A87F] mt-2 shrink-0"></div>
                <div>
                  <div className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-1">Post 3-4 (Session 3)</div>
                  <div className="font-sans text-[14px] text-[#555555]">Cumulative visible firming becomes noticeable</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#C8A87F] mt-2 shrink-0"></div>
                <div>
                  <div className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-1">Post 4-6 (Session 4)</div>
                  <div className="font-sans text-[14px] text-[#555555]">Programme of 4 completion. Visible skin quality improvement</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#C8A87F] mt-2 shrink-0"></div>
                <div>
                  <div className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-1">Post 8-12 week (Post-programme)</div>
                  <div className="font-sans text-[14px] text-[#555555]">Peak neocollagenesis window. Final visible result</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#C8A87F] mt-2 shrink-0"></div>
                <div>
                  <div className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-1">Month 6-12</div>
                  <div className="font-sans text-[14px] text-[#555555]">Continued collagen remodeling, sustained result. Annual maintenance recommended</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-8">RF Device Configurations — Not All RF Is the Same</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border border-[#EAE3D9]">
            <h4 className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-2">Monopolar RF</h4>
            <p className="font-sans text-[11px] text-[#888888] mb-3 uppercase tracking-wider">Thermage</p>
            <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">Deep energy penetration via single electrode delivery. Higher energy per pass, more intense sensation. Generally single-session model.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#EAE3D9]">
            <h4 className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-2">Bipolar RF</h4>
            <p className="font-sans text-[11px] text-[#888888] mb-3 uppercase tracking-wider">Continuous platforms</p>
            <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">Energy delivered between two closely-spaced electrodes. Shallower, more controlled heating, more comfortable sensation.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#EAE3D9]">
            <h4 className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-2">Multipolar RF</h4>
            <p className="font-sans text-[11px] text-[#888888] mb-3 uppercase tracking-wider">Venus Legacy, TriPollar, EndyMed, Alma Accent</p>
            <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">Delivers energy via multiple electrodes for better patient comfort while maintaining therapeutic dermal heating. Current Dubai standard.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#EAE3D9]">
            <h4 className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-2">Combined RF</h4>
            <p className="font-sans text-[11px] text-[#888888] mb-3 uppercase tracking-wider">+ Magnetic Pulses / + Vacuum</p>
            <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">Platform-specific enhancements combining RF with magnetic pulse or vacuum suction for compound protocol effects.</p>
          </div>
        </div>

        <div className="space-y-6 mb-16">
          <div className="bg-white p-8 rounded-xl border border-[#EAE3D9]">
            <h4 className="font-sans text-[15px] font-bold text-[#1F1F1F] mb-3">Common question: How is RF different from HIFU? Which one should I do?</h4>
            <p className="font-sans text-[14px] text-[#555555] leading-[1.6] m-0">
              RF (electromagnetic energy) heats the dermis less selectively — best for skin quality improvement, subtle firming, comfortable series-based delivery. HIFU (focused ultrasound) targets precise depths including the SMAS layer at 4.5mm — best for structural lifting, single-session or programme of 2, more intense sensation. Some patients need RF, some need HIFU, some benefit from both sequenced across the year. Our Medical Director's consultation includes honest modality triage — you'll leave knowing which is right for your face, not which is convenient for us to sell.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-[#EAE3D9]">
            <h4 className="font-sans text-[15px] font-bold text-[#1F1F1F] mb-3">Common question: I heard RF is painful. Is that true?</h4>
            <p className="font-sans text-[14px] text-[#555555] leading-[1.6] m-0">
              No. When RF is delivered properly, it is not painful. RF should feel like comfortable warmth across the treatment area — the sensation patients most commonly compare to "warm stone massage on the face." If a Dubai provider's RF hurts, either the temperature is too high, the coupling gel technique is inconsistent, or the device parameters are wrong for your skin. Patients often ask during their first session "is that it? It just feels warm." That is exactly what it should feel like.
            </p>
          </div>
        </div>

        <div className="bg-[#1F1F1F] rounded-xl p-8 md:p-12 text-white">
          <h3 className="font-serif text-[24px] mb-3">Now that you understand what RF actually does — is it right for your face?</h3>
          <p className="font-sans text-[15px] text-[#DDDDDD] mb-8 leading-[1.6]">
            The consultation will tell you. Medical Director assessment, honest modality triage (RF vs HIFU vs combined vs alternative), personalized programme design if RF is a fit.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book RF Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center border border-[#555555] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#333333] transition-colors no-underline">
              Ask on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-4 font-sans text-[12px] text-[#888888]">
            <span>✓ DHA-Licensed</span>
            <span>✓ Medical Director Oversight</span>
            <span>✓ Honest Modality Triage</span>
            <span>✓ Free Consultation Enquiries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RfCandidacy = () => {
  const profiles = [
    { num: "01", title: "Late-20s Proactive Skin Quality", desc: "Female or male, 27-32, Dubai professional on camera/screen, first indications of skin quality decline. Programme of 4 sessions, annual single." },
    { num: "02", title: "Mild Device-Naïve Skin (30s)", desc: "Female or male, 34-42, considering first device treatment. HIFU-averse; prefers series over single intense session. Programme of 4-6 sessions." },
    { num: "03", title: "HIFU-Averse Patient", desc: "Female, 35-50, represents efficient firming/tightening option for patients declining HIFU due to discomfort. RF is comfortable alternative device modality. High compliance rates." },
    { num: "04", title: "Mid-40s Skin Quality Correction", desc: "Female, 42-48, established Dubai resident, UV/weather exposure impact, seeking visible improvement without downtime. Often combines RF + Mesotherapy." },
    { num: "05", title: "Body Area Focus Patient", desc: "Female or male, 35-55, primary concern is body laxity (abdomen post-pregnancy, arms, thighs, decolletage). Highest lifetime value sub-segment." },
    { num: "06", title: "Post-Weight-Loss Recovery", desc: "Female or male, 30-50, post-significant-weight-loss, mild skin quality decline in face and body. Combined face + body programme common." },
    { num: "07", title: "Post-Pregnancy Recovery", desc: "Female, 30-42, out of nursing window, weight stable, seeking facial and abdominal skin quality restoration. RF is custom profile fit here." },
    { num: "08", title: "Male Executive Comfort-Priority", desc: "Male, 35-55, discreet aesthetic consumer, prefers comfortable non-invasive treatments. Annual maintenance recurring patient." },
    { num: "09", title: "Bride / Pre-Event Timeline", desc: "Female, 25-38, wedding or major event 4-6 months out, committing to series for cumulative visible improvement peaking near event date." },
    { num: "10", title: "Post-Surgical / Post-HIFU Maintenance", desc: "Female, 45-65, has had HIFU or surgical facelift, needs ongoing skin quality maintenance between structural interventions." },
    { num: "11", title: "Décolletage / Neck Focus", desc: "Female, 35-65, primary concern is neck and décolletage skin quality and crepiness, not just facial lifting. RF appropriate for these zones." },
    { num: "12", title: "Combined Modality Programme", desc: "Any age 30-65, incorporating RF as one component of broader personalized programme with mesotherapy, PRP, HIFU, or hydration facials." }
  ];

  return (
    <section className="py-24 bg-[#F4F0EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4 text-center">PATIENT POPULATION</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1F1F1F] mb-6 leading-[1.2] text-center max-w-[800px] mx-auto">
          Who RF Skin Tightening Is Designed For — And Who It Isn't
        </h2>
        <p className="font-sans text-[16px] text-[#444444] leading-[1.7] mb-16 text-center max-w-[900px] mx-auto">
          RF is appropriate for patients with mild-to-moderate skin laxity, skin quality decline, early firming needs, or body area tightening priorities, with realistic expectations for cumulative series-based visible change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {profiles.map((profile, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-[#EAE3D9] h-full flex flex-col">
              <div className="font-sans text-[10px] font-semibold text-[#C8A87F] mb-2 uppercase">PROFILE {profile.num}</div>
              <h3 className="font-sans text-[14px] font-bold text-[#1F1F1F] mb-3 uppercase tracking-wide">{profile.title}</h3>
              <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">{profile.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#FFF5F5] border border-[#FFD6D6] rounded-xl p-8 mb-16">
          <h3 className="font-sans text-[16px] font-bold text-[#D32F2F] mb-6">RF Is NOT Appropriate For</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-[14px] text-[#555555]">
            <div className="flex gap-3"><span className="text-[#D32F2F]">×</span> Pregnancy or breastfeeding</div>
            <div className="flex gap-3"><span className="text-[#D32F2F]">×</span> Active skin conditions in treatment area</div>
            <div className="flex gap-3"><span className="text-[#D32F2F]">×</span> Metallic implants in treatment area</div>
            <div className="flex gap-3"><span className="text-[#D32F2F]">×</span> Pacemakers or ICDs (contraindication)</div>
            <div className="flex gap-3"><span className="text-[#D32F2F]">×</span> Recent facial surgery or unhealed surgical sites</div>
            <div className="flex gap-3"><span className="text-[#D32F2F]">×</span> Active or recent isotretinoin (Roaccutane) use within 6 months</div>
            <div className="flex gap-3"><span className="text-[#D32F2F]">×</span> Untreated or unstable autoimmune conditions</div>
            <div className="flex gap-3"><span className="text-[#D32F2F]">×</span> Severe skin laxity requiring surgical intervention</div>
          </div>
          <p className="font-sans text-[12px] text-[#777777] mt-6 m-0 italic">Every RF consultation at Vedara Care JVC includes explicit contraindication screening by the Medical Director.</p>
        </div>

        <div className="bg-[#1F1F1F] rounded-xl p-8 md:p-12 text-white">
          <h3 className="font-serif text-[24px] mb-3">Recognize yourself in one of these patient profiles?</h3>
          <p className="font-sans text-[15px] text-[#DDDDDD] mb-8 leading-[1.6]">
            The consultation confirms whether RF is appropriate for your specific case. Recognize a contraindication? Tell us at consultation — we'll design an alternative treatment pathway or refer you to appropriate care.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book RF Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center border border-[#555555] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#333333] transition-colors no-underline">
              Ask on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-4 font-sans text-[12px] text-[#888888]">
            <span>✓ DHA-Licensed</span>
            <span>✓ Medical Director Screening</span>
            <span>✓ Honest Triage</span>
          </div>
        </div>
      </div>
    </section>
  );
};


export const RfProtocol = () => {
  const steps = [
    { num: "01", title: "Medical Clearance Verification", time: "5 min", desc: "Session begins with verification of Medical Director's medical clearance documentation. Any new health changes since consultation are noted." },
    { num: "02", title: "Consent and Photography", time: "5 min", desc: "Session-specific written informed consent reviewed and signed. Baseline photography captured under standardized lighting via FIVE, oblique, profile, submental view." },
    { num: "03", title: "Skin Cleansing and Preparation", time: "5 min", desc: "Treatment area thoroughly cleansed with gentle non-alkaline cleanser to remove all makeup, sunscreen, oil, and residue." },
    { num: "04", title: "Treatment Area Mapping", time: "5 min", desc: "Area mapped out into treatment zones based on Medical Director-cleared protocol design. Mapping ensures thermal dosing consistency." },
    { num: "05", title: "Coupling Gel Application", time: "2 min", desc: "Ultrasound coupling gel applied generously across treatment area. Adequate coupling is critical for consistent thermal dosing and patient comfort." },
    { num: "06", title: "Thermal Baseline Establishment", time: "5-10 min", desc: "RF handpiece begins delivery at lower energy to establish patient comfort baseline. Temperature gradually increases to therapeutic window (40-45°C). Patient sensation monitored continuously." },
    { num: "07", title: "Systematic Treatment Delivery", time: "15-25 min", desc: "RF handpiece moved systematically across all mapped treatment zones, maintaining therapeutic dermal temperature for correct duration per zone. Continuous patient comfort assessment." },
    { num: "08", title: "Focus Zone Delivery", time: "5-10 min", desc: "Additional focused RF delivery on high-priority zones per protocol — jawline, submental, décolletage, or body area focus as indicated by Medical Director." },
    { num: "09", title: "Post-Procedure Cooling and Calming", time: "5 min", desc: "Coupling gel thoroughly cleared. Cooling gel applied briefly if warm residual sensing warrants. Post-procedure post-session photography for reference." },
    { num: "10", title: "Aftercare Briefing and Next-Session Scheduling", time: "5-10 min", desc: "Written aftercare instructions reviewed (sunscreen, SPF 50+ for 3-5 days, gentle skincare for 3-5 days). Next session scheduled before patient leaves." }
  ];

  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4 text-center">PROTOCOL</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1F1F1F] mb-4 leading-[1.2] text-center max-w-[800px] mx-auto">
          The Vedara Care JVC RF Skin Tightening Protocol — Ten-Step Session Structure
        </h2>
        <p className="font-sans text-[15px] text-[#555555] mb-16 text-center">Total time: 45-75 minutes for full face + neck - Zero clinical downtime</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-16 max-w-[1000px] mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-[#EAE3D9] flex flex-col justify-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-serif text-[24px] text-[#C8A87F] leading-none">{step.num}</span>
                <h3 className="font-sans text-[13px] font-bold text-[#1F1F1F] uppercase tracking-wide leading-none">{step.title}</h3>
                <span className="font-sans text-[10px] bg-[#F4F0EA] text-[#777777] px-2 py-1 rounded leading-none ml-auto">{step.time}</span>
              </div>
              <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[800px] mx-auto bg-white p-8 rounded-xl border border-[#EAE3D9] mb-20 text-center">
          <p className="font-sans text-[18px] text-[#444444] leading-[1.6] mb-6">
            "Patients often ask me during the first session, 'is that it? It just feels warm.' That's exactly what it should feel like. RF is not supposed to be painful. The therapeutic window is comfortable warmth — like a warm stone massage on your face."
          </p>
          <div className="font-sans text-[12px] text-[#888888]">
            — Arfah Owais — DHA-Licensed Aesthetician, RF Device-Certified, Vedara Care JVC
          </div>
        </div>

        <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-8">RF vs Comparable Lifting/Firming Modalities</h3>
        <div className="overflow-x-auto pb-4">
          <table className="w-full text-left font-sans min-w-[900px] border-collapse bg-white rounded-xl shadow-sm border border-[#EAE3D9]">
            <thead>
              <tr className="bg-[#1F1F1F] text-white">
                <th className="p-4 text-[13px] font-bold border-b border-[#333333] w-[15%]">Attribute</th>
                <th className="p-4 text-[13px] font-bold border-b border-[#333333] w-[20%] text-[#C8A87F]">RF Skin Tightening (Vedara Care JVC)</th>
                <th className="p-4 text-[13px] font-bold border-b border-[#333333] w-[20%]">HIFU (Vedara Care JVC)</th>
                <th className="p-4 text-[13px] font-bold border-b border-[#333333] w-[15%]">Thread Lift</th>
                <th className="p-4 text-[13px] font-bold border-b border-[#333333] w-[15%]">Surgical Facelift</th>
                <th className="p-4 text-[13px] font-bold border-b border-[#333333] w-[15%]">Anti-Aging Peels</th>
              </tr>
            </thead>
            <tbody className="text-[13px] text-[#555555]">
              <tr className="border-b border-[#EAE3D9]">
                <td className="p-4 font-bold text-[#1F1F1F]">Modality Type</td>
                <td className="p-4 bg-[#FAF7F2]">Radiofrequency electromagnetic energy</td>
                <td className="p-4">Focused ultrasound energy</td>
                <td className="p-4">Physical suture insertion</td>
                <td className="p-4">Surgical incision & fat reposition</td>
                <td className="p-4">Non-invasive resurfacing facial</td>
              </tr>
              <tr className="border-b border-[#EAE3D9]">
                <td className="p-4 font-bold text-[#1F1F1F]">Tissue Depth</td>
                <td className="p-4 bg-[#FAF7F2]">Dermis (less selective)</td>
                <td className="p-4">1.5mm / 3.0mm / 4.5mm (SMAS)</td>
                <td className="p-4">Subcutaneous tissue (superficial)</td>
                <td className="p-4">SMAS surgical, skin excision</td>
                <td className="p-4">Superficial (topical — surface denaturing)</td>
              </tr>
              <tr className="border-b border-[#EAE3D9]">
                <td className="p-4 font-bold text-[#1F1F1F]">Best Clinical Use</td>
                <td className="p-4 bg-[#FAF7F2]">Skin quality + mild-moderate firming</td>
                <td className="p-4">Structural lift, SMAS-level</td>
                <td className="p-4">Moderate laxity, immediate structural</td>
                <td className="p-4">Severe laxity, significant excess skin</td>
                <td className="p-4">Ongoing skin quality maintenance</td>
              </tr>
              <tr className="border-b border-[#EAE3D9]">
                <td className="p-4 font-bold text-[#1F1F1F]">Sensation</td>
                <td className="p-4 bg-[#FAF7F2]">Comfortable warmth (warm stone massage)</td>
                <td className="p-4">Brief prickling/warm pulse (moderate)</td>
                <td className="p-4">Local anaesthesia + discomfort</td>
                <td className="p-4">General/IV sedation</td>
                <td className="p-4">Flaking (3-5 days/mild)</td>
              </tr>
              <tr className="border-b border-[#EAE3D9]">
                <td className="p-4 font-bold text-[#1F1F1F]">Sessions</td>
                <td className="p-4 bg-[#FAF7F2]">Programme of 4-6, spaced 1-2 weeks</td>
                <td className="p-4">Single session or programme of 2</td>
                <td className="p-4">Single procedure</td>
                <td className="p-4">Single surgery</td>
                <td className="p-4">Monthly ongoing</td>
              </tr>
              <tr className="border-b border-[#EAE3D9]">
                <td className="p-4 font-bold text-[#1F1F1F]">Result Timeline</td>
                <td className="p-4 bg-[#FAF7F2]">Progressive, peak 8-12 wks post-final</td>
                <td className="p-4">60-90 day peak, 6-month continued</td>
                <td className="p-4">Immediate visible lift</td>
                <td className="p-4">Immediate (post-swelling)</td>
                <td className="p-4">Monthly progressive</td>
              </tr>
              <tr className="border-b border-[#EAE3D9]">
                <td className="p-4 font-bold text-[#1F1F1F]">Durability</td>
                <td className="p-4 bg-[#FAF7F2]">8-12 months post-programme</td>
                <td className="p-4">12-18 months</td>
                <td className="p-4">12-24 months</td>
                <td className="p-4">7-10+ years</td>
                <td className="p-4">Maintenance dependent</td>
              </tr>
              <tr className="border-b border-[#EAE3D9]">
                <td className="p-4 font-bold text-[#1F1F1F]">Downtime</td>
                <td className="p-4 bg-[#FAF7F2]">Zero clinical downtime</td>
                <td className="p-4">Zero clinical downtime</td>
                <td className="p-4">2-7 days bruising</td>
                <td className="p-4">2-4 weeks visible recovery</td>
                <td className="p-4">Zero downtime</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-[#1F1F1F]">Investment (Full Face)</td>
                <td className="p-4 bg-[#FAF7F2]">Programme of 4 from AED 3,750</td>
                <td className="p-4">From AED 2,400 (full face + neck)</td>
                <td className="p-4">Referral only</td>
                <td className="p-4">Referral only</td>
                <td className="p-4">From AED 600 monthly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export const RfPatientJourney = () => {
  return (
    <section className="py-24 bg-[#1F1F1F] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#4A7EB2] tracking-[0.12em] uppercase mb-4">PATIENT JOURNEY</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal mb-16 leading-[1.2] max-w-[800px] text-[#86B9E8]">
          What to Expect — Your Complete RF Skin Tightening Journey
        </h2>

        <div className="max-w-[800px]">
          <div className="relative border-l border-[#333333] ml-4 pl-10 space-y-12">
            <div className="relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#1F1F1F] border border-[#4A7EB2] text-[#4A7EB2] font-serif flex items-center justify-center text-[14px]">1</div>
              <div className="font-sans text-[11px] text-[#888888] tracking-wider uppercase mb-1">Phase 1 · Day 0 to Day 7</div>
              <h3 className="font-sans text-[18px] font-bold text-white mb-2">Initial Enquiry & Discovery</h3>
              <p className="font-sans text-[14px] text-[#BBBBBB] leading-[1.6]">Patient contacts via booking form, whatsapp, or phone. Initial questions answered, all information (price list + offers) via transparent clinic protocol. Free 30-minute consultation booked at patient convenience. Typical availability: 3-10 days out.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#1F1F1F] border border-[#4A7EB2] text-[#4A7EB2] font-serif flex items-center justify-center text-[14px]">2</div>
              <div className="font-sans text-[11px] text-[#888888] tracking-wider uppercase mb-1">Phase 2 · 30 Minutes</div>
              <h3 className="font-sans text-[18px] font-bold text-white mb-2">Consultation & Medical Clearance</h3>
              <p className="font-sans text-[14px] text-[#BBBBBB] leading-[1.6]">Comprehensive skin quality and laxity assessment by Medical Director, medical history and contraindication screening, modality triage, candidacy determination, photography, personalized programme design, transparent pricing with programme savings math. No same-day booking pressure.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#1F1F1F] border border-[#4A7EB2] text-[#4A7EB2] font-serif flex items-center justify-center text-[14px]">3</div>
              <div className="font-sans text-[11px] text-[#888888] tracking-wider uppercase mb-1">Phase 3 · 1-14 days</div>
              <h3 className="font-sans text-[18px] font-bold text-white mb-2">Programme Preparation</h3>
              <p className="font-sans text-[14px] text-[#BBBBBB] leading-[1.6]">Session 1 booked. Pre-session preparation instructions sent: sun protection intensification, no active acids or retinols for 3-5 days pre-session, no facial treatments in preceding 1 week. Written confirmation and reminder 24 hours before session.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#1F1F1F] border border-[#4A7EB2] text-[#4A7EB2] font-serif flex items-center justify-center text-[14px]">4</div>
              <div className="font-sans text-[11px] text-[#888888] tracking-wider uppercase mb-1">Phase 4 · 4-6 sessions over 4-12 weeks</div>
              <h3 className="font-sans text-[18px] font-bold text-white mb-2">Programme Series Delivery</h3>
              <p className="font-sans text-[14px] text-[#BBBBBB] leading-[1.6]">Session 1: Full protocol delivery, baseline photography, comfort baseline established. Sessions 2-6: Subsequent sessions 1-2 weeks apart, protocol refined based on Session 1 response. Final session: Programme completion photography and interim result assessment.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#C8A87F] text-[#1F1F1F] font-serif flex items-center justify-center text-[14px]">5</div>
              <div className="font-sans text-[11px] text-[#C8A87F] tracking-wider uppercase mb-1">Phase 5 · Week 8-12+</div>
              <h3 className="font-sans text-[18px] font-bold text-white mb-2">Post-Programme Peak Result & Annual Maintenance</h3>
              <p className="font-sans text-[14px] text-[#BBBBBB] leading-[1.6]">Month 8-12 post-final session: Peak result follow-up. Comparison photography (baseline vs peak). Month 12: Continued result assessment. Month 12: Annual maintenance session scheduling.</p>
            </div>
          </div>
        </div>

        <div className="mt-24 max-w-[800px]">
          <h3 className="font-serif text-[24px] mb-3 text-white">This is what the RF journey actually looks like — from enquiry to annual maintenance.</h3>
          <p className="font-sans text-[15px] text-[#DDDDDD] mb-8 leading-[1.6]">
            Progressive, comfortable, series-based. Start with the free consultation. The rest of the journey only begins if you decide it's the right fit for your face.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book RF Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center border border-[#555555] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#333333] transition-colors no-underline">
              Ask on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-4 font-sans text-[12px] text-[#888888]">
            <span>✓ DHA-Licensed</span>
            <span>✓ 5-Phase Structured Journey</span>
            <span>✓ No Same-Day Pressure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RfCaseNarratives = () => {
  const cases = [
    {
      num: "01",
      title: "The HIFU-Averse Mid-40s Correction Patient",
      profile: "Female, 44 — Dubai executive",
      desc: "Initially consulted for HIFU after researching non-surgical facelift options. Presenting concern: mid face and jawline skin quality decline with mild laxity. During HIFU consultation, patient expressed concern about sensation intensity. Medical Director's honest assessment: RF would produce comfortable cumulative firming matching patient's actual laxity severity and comfort priorities. Recommended: RF programme of 6 sessions (full face + neck). All 6 sessions delivered without discomfort. Peak result assessment 10 weeks post-final-session: visible skin quality improvement and mid-face firming documented photographically. Annual maintenance scheduled. Ongoing care patient.",
      tag: "Programme of 6 · Full Face + Neck · Annual Maintenance"
    },
    {
      num: "02",
      title: "The Post-Pregnancy Face and Body Recovery Patient",
      profile: "Female, 36 — 14 months post-second-pregnancy",
      desc: "Breastfeeding complete, weight stable. Presenting concern: facial skin quality decline and abdominal skin laxity. Patient specifically avoiding needle-based treatments. Combined face + abdominal RF programme, 6 sessions alternating full face + neck and abdominal focus. Delivered without incident, patient comfort maintained throughout. Peak result assessment 8 weeks post-final-visit: visible facial firming and abdominal skin quality improvement documented. High satisfaction with comfort-based approach. Completed second annual programme 18 months later.",
      tag: "Programme of 6 · Face + Body · Combined Protocol"
    },
    {
      num: "03",
      title: "The Male Executive Discreet Intervention Patient",
      profile: "Male, 51 — Senior DIFC financial services professional",
      desc: "First-time aesthetic patient. Presenting concern: mild jawline softening and general skin quality decline. \"I want to look rested, not different.\" Medical Director assessment: mild laxity not requiring SMAS-level intervention; RF appropriate for comfortable, discreet, cumulative visible improvement. Programme of 4 sessions (full face + neck), scheduled at end of workday. Peak result: visible improvement in jawline definition and skin quality. Spontaneous positive comments from colleagues. Annual maintenance scheduled.",
      tag: "Programme of 4 · Full Face + Neck · Annual Maintenance"
    }
  ];

  return (
    <section className="py-24 bg-[#F4F0EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4 text-center">DOCUMENTED PATIENT JOURNEYS</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1F1F1F] mb-4 leading-[1.2] text-center max-w-[800px] mx-auto">
          Composite Case Narratives from Vedara Care JVC RF Practice
        </h2>
        <p className="font-sans text-[14px] text-[#777777] mb-16 text-center max-w-[700px] mx-auto">
          The following case narratives are composite representations reflecting typical patient journeys. Individual results vary. No specific outcome is guaranteed. Names and identifying details are fictionalized.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-[#EAE3D9] flex flex-col overflow-hidden">
              <div className="p-8 flex-grow">
                <div className="font-sans text-[11px] font-semibold text-[#C8A87F] mb-3 uppercase">CASE {c.num}</div>
                <h3 className="font-serif text-[20px] text-[#1F1F1F] mb-2 leading-[1.3]">{c.title}</h3>
                <p className="font-sans text-[13px] text-[#888888] italic mb-6">{c.profile}</p>
                <p className="font-sans text-[14px] text-[#555555] leading-[1.7] m-0">{c.desc}</p>
              </div>
              <div className="bg-[#FAF7F2] p-4 border-t border-[#EAE3D9]">
                <p className="font-sans text-[11px] text-[#C8A87F] font-bold uppercase tracking-wider text-center m-0">{c.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const RfCareTeam = () => {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4 text-center">YOUR CARE TEAM</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1F1F1F] mb-16 leading-[1.2] text-center max-w-[800px] mx-auto">
          Who Delivers Your RF Skin Tightening at Vedara Care JVC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl border border-[#EAE3D9]">
            <div className="flex items-center gap-4 mb-6">
              <img src="/images/arfah-owais-portrait.webp" alt="Arfah Owais, DHA-Licensed Aesthetician and RF Device-Certified Primary Operator at Vedara Care Polyclinic JVC" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-serif text-[24px] text-[#1F1F1F] m-0">Arfah Owais</h3>
                <p className="font-sans text-[13px] text-[#666666] m-0">Primary RF Device Operator</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F4F0EA] text-[#555555] font-sans text-[11px] px-3 py-1 rounded">DHA-Licensed Aesthetician</span>
              <span className="bg-[#F4F0EA] text-[#555555] font-sans text-[11px] px-3 py-1 rounded">CIBTAC-UK Diploma</span>
              <span className="bg-[#F4F0EA] text-[#555555] font-sans text-[11px] px-3 py-1 rounded">RF Device-Certified</span>
              <span className="bg-[#F4F0EA] text-[#555555] font-sans text-[11px] px-3 py-1 rounded">HIFU Device-Certified</span>
              <span className="bg-[#F4F0EA] text-[#555555] font-sans text-[11px] px-3 py-1 rounded">8+ Years Experience</span>
            </div>
            <p className="font-sans text-[12px] text-[#888888] mb-6">Languages: Arabic, English, Hindi, Urdu</p>
            <div className="border-l-2 border-[#C8A87F] pl-4">
              <p className="font-sans text-[14px] text-[#444444] leading-[1.6] m-0">
                "RF is my most-delivered device treatment at Vedara Care JVC. The reason is simple — patients tolerate it beautifully, results build progressively over the series, and the maintenance protocol integrates cleanly with everything else in our aesthetic cluster."
              </p>
              <p className="font-sans text-[11px] text-[#888888] mt-2 m-0">Arfah Owais, DHA-Licensed Aesthetician</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-[#EAE3D9]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#1F1F1F] text-white rounded-full flex items-center justify-center font-serif text-[24px]">MD</div>
              <div>
                <h3 className="font-serif text-[24px] text-[#1F1F1F] m-0">Medical Director</h3>
                <p className="font-sans text-[13px] text-[#666666] m-0">DHA-Licensed Consultant Dermatologist - Medical Oversight</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F4F0EA] text-[#555555] font-sans text-[11px] px-3 py-1 rounded">DHA-Licensed</span>
              <span className="bg-[#F4F0EA] text-[#555555] font-sans text-[11px] px-3 py-1 rounded">Consultant Dermatologist</span>
              <span className="bg-[#F4F0EA] text-[#555555] font-sans text-[11px] px-3 py-1 rounded">Medical Director</span>
              <span className="bg-[#F4F0EA] text-[#555555] font-sans text-[11px] px-3 py-1 rounded">Patient Clearance</span>
              <span className="bg-[#F4F0EA] text-[#555555] font-sans text-[11px] px-3 py-1 rounded">Protocol Design</span>
            </div>
            <div className="border-l-2 border-[#C8A87F] pl-4 mt-12">
              <p className="font-sans text-[14px] text-[#444444] leading-[1.6] m-0">
                "RF is one of the best tolerated skin quality treatments in current aesthetic practice, and I recommend it frequently — but it is not magic. Honest expectation setting is the foundation of RF patient satisfaction. Sell it as more than that and you disappoint your patient."
              </p>
              <p className="font-sans text-[11px] text-[#888888] mt-2 m-0">Medical Director, Vedara Care Polyclinic JVC</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1F1F1F] rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="font-serif text-[24px] mb-3">You now know who delivers your RF and who provides medical oversight.</h3>
          <p className="font-sans text-[15px] text-[#DDDDDD] mb-8 leading-[1.6]">
            Ready to meet them? The free consultation is with the Medical Director. If treatment is appropriate and scheduled, Arfah delivers with Medical Director-cleared protocol.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book RF Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center border border-[#555555] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#333333] transition-colors no-underline">
              Ask on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center font-sans text-[12px] text-[#888888]">
            <span>✓ DHA-Licensed</span>
            <span>✓ RF-Certified Operator</span>
            <span>✓ Medical Director Oversight</span>
            <span>✓ 8+ Years Aesthetic Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RfPricing = () => {
  return (
    <section className="py-24 bg-[#1F1F1F] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4 text-center">TRANSPARENT PRICING</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal mb-6 leading-[1.2] text-center max-w-[800px] mx-auto">
          RF Skin Tightening Session Options & Investment at Vedara Care JVC
        </h2>
        <p className="font-sans text-[15px] text-[#DDDDDD] mb-16 text-center max-w-[700px] mx-auto">
          No hidden costs. No session-count escalation pressure. Programme pricing passes savings directly to the patient. Consultation (AED 300) waived if you proceed.
        </p>

        <div className="overflow-x-auto pb-4 mb-8">
          <table className="w-full text-left font-sans min-w-[900px] border-collapse bg-[#252525] rounded-xl border border-[#333333]">
            <thead>
              <tr>
                <th className="p-5 text-[14px] font-bold border-b border-[#333333] text-white">Treatment Option</th>
                <th className="p-5 text-[14px] font-bold border-b border-[#333333] text-white">Single Session</th>
                <th className="p-5 text-[14px] font-bold border-b border-[#333333] text-[#C8A87F]">Programme of 4 (Save 15-20%)</th>
                <th className="p-5 text-[14px] font-bold border-b border-[#333333] text-white">Programme of 6 (Save 20-25%)</th>
              </tr>
            </thead>
            <tbody className="text-[14px] text-[#BBBBBB]">
              <tr className="border-b border-[#333333]">
                <td className="p-5 font-bold text-white">Consultation</td>
                <td className="p-5">AED 300 (waived if proceeding)</td>
                <td className="p-5 text-[#C8A87F]">—</td>
                <td className="p-5">—</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="p-5 font-bold text-white">Single-Zone RF (Jawline / Submental / Eye / Neck)</td>
                <td className="p-5">From AED 600</td>
                <td className="p-5 font-bold text-[#C8A87F]">From AED 2,040</td>
                <td className="p-5">From AED 2,880</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="p-5 font-bold text-white">Full Face RF</td>
                <td className="p-5">From AED 900</td>
                <td className="p-5 font-bold text-[#C8A87F]">From AED 3,060</td>
                <td className="p-5">From AED 4,320</td>
              </tr>
              <tr className="border-b border-[#333333] bg-[#2A2A2A]">
                <td className="p-5 font-bold text-white">Full Face + Neck RF</td>
                <td className="p-5">From AED 1,100</td>
                <td className="p-5 font-bold text-[#C8A87F]">From AED 3,750</td>
                <td className="p-5">From AED 5,280</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="p-5 font-bold text-white">Full Face + Neck + Décolletage RF</td>
                <td className="p-5">From AED 1,400</td>
                <td className="p-5 font-bold text-[#C8A87F]">From AED 4,760</td>
                <td className="p-5">From AED 6,720</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="p-5 font-bold text-white">Body Area RF (Abdomen / Arms / Thighs)</td>
                <td className="p-5">From AED 800</td>
                <td className="p-5 font-bold text-[#C8A87F]">From AED 2,720</td>
                <td className="p-5">From AED 3,840</td>
              </tr>
              <tr className="border-b border-[#333333]">
                <td className="p-5 font-bold text-white">Combined RF + Mesotherapy (Same Visit)</td>
                <td className="p-5">From AED 1,500</td>
                <td className="p-5 font-bold text-[#C8A87F]">From AED 5,100</td>
                <td className="p-5">From AED 7,200</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-white">Annual Maintenance RF (Existing Patient)</td>
                <td className="p-5">10% loyalty pricing</td>
                <td className="p-5 text-[#C8A87F]">—</td>
                <td className="p-5">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#2A2A2A] rounded-xl border border-[#C8A87F]/30 p-8 mb-20 max-w-[900px] mx-auto">
          <h4 className="font-sans text-[12px] font-bold text-[#C8A87F] tracking-[0.1em] uppercase mb-3">PROGRAMME COURSE SAVINGS</h4>
          <p className="font-sans text-[14px] text-[#DDDDDD] leading-[1.6] m-0">
            Programme of 4 sessions (spaced 1-2 weeks apart) delivers 15-20% savings versus single-session pricing. Programme of 6 sessions delivers 20-25% savings. Standard protocol for most patients is programme of 4 with annual maintenance. The Medical Director's consultation determines whether your appropriate protocol is programme of 4 or 6 — not a sales quota.
          </p>
        </div>

        <div className="text-center max-w-[800px] mx-auto">
          <h3 className="font-serif text-[24px] mb-3 text-white">You've seen the full programme pricing.</h3>
          <p className="font-sans text-[15px] text-[#DDDDDD] mb-8 leading-[1.6]">
            No surprises at consultation, no hidden costs, no "you need 8 sessions" pressure. If RF is the right fit — and consultation determines this — you'll know your full programme investment before you commit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book RF Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center border border-[#555555] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#333333] transition-colors no-underline">
              Ask on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center font-sans text-[12px] text-[#888888]">
            <span>✓ DHA-Licensed</span>
            <span>✓ Transparent Programme Pricing</span>
            <span>✓ No Session-Count Escalation</span>
          </div>
        </div>
      </div>
    </section>
  );
};



export const RfHowToBook = () => {
  return (
    <section className="py-24 bg-[#F4F0EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4 text-center">PRACTICAL INFORMATION</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1F1F1F] mb-16 leading-[1.2] text-center max-w-[800px] mx-auto">
          How to Book RF Skin Tightening at Vedara Care JVC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-xl border border-[#EAE3D9] flex flex-col h-full">
            <div className="text-[24px] mb-4">📍</div>
            <h3 className="font-sans text-[15px] font-bold text-[#1F1F1F] mb-4">Location</h3>
            <p className="font-sans text-[13px] text-[#555555] leading-[1.7] m-0">
              Vedara Care Polyclinic<br />
              Jumeirah Village Circle (JVC), Dubai, UAE<br />
              Walking distance from Circle Mall<br />
              Free parking on premises
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-[#EAE3D9] flex flex-col h-full">
            <div className="text-[24px] mb-4">📞</div>
            <h3 className="font-sans text-[15px] font-bold text-[#1F1F1F] mb-4">Contact</h3>
            <p className="font-sans text-[13px] text-[#555555] leading-[1.7] m-0">
              Book: vedaracare.ae/book<br />
              WhatsApp: fastest channel<br />
              Phone / Email at clinic<br />
              Languages: Arabic, English, Hindi, Urdu
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-[#EAE3D9] flex flex-col h-full">
            <div className="text-[24px] mb-4">📅</div>
            <h3 className="font-sans text-[15px] font-bold text-[#1F1F1F] mb-4">Availability</h3>
            <p className="font-sans text-[13px] text-[#555555] leading-[1.7] m-0">
              Consultations: 3-10 days out<br />
              Same-week via WhatsApp sometimes available<br />
              Programme: 4-12 weeks depending on protocol<br />
              Annual maintenance scheduling included
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-[#EAE3D9] flex flex-col h-full">
            <div className="text-[24px] mb-4">💳</div>
            <h3 className="font-sans text-[15px] font-bold text-[#1F1F1F] mb-4">Payment</h3>
            <p className="font-sans text-[13px] text-[#555555] leading-[1.7] m-0">
              Credit card · Debit card · Bank transfer · Cash (AED)<br />
              50% at Session 1, balance across series<br />
              48-hour notice to reschedule without fee<br />
              Insurance reimbursement support on request
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RfAestheticCluster = () => {
  const treatments = [
    {
      title: "HIFU Skin Lifting & Tightening",
      desc: "Device peer — deep SMAS structural lift. RF and HIFU are frequently sequenced across the year for compound skin quality + structural effect.",
      href: "/treatments/hifu-skin-lifting-tightening-jvc"
    },
    {
      title: "Anti-Aging Skin Firming Protocol",
      desc: "Monthly aesthetician-led non-invasive maintenance. Complements RF programme between annual maintenance sessions.",
      href: "/treatments/anti-aging-skin-firming-jvc"
    },
    {
      title: "Mesotherapy Skin Revitalization",
      desc: "Physician-delivered injection-based custom formulation. Combined RF + Mesotherapy same-visit programme available.",
      href: "/treatments/mesotherapy-skin-revitalization-jvc/"
    },
    {
      title: "PRP Facial",
      desc: "Physician-delivered autologous platelet-rich plasma regenerative. Combined programme with RF amplifies regenerative response.",
      href: "/treatments/prp-facial-jvc"
    },
    {
      title: "Exosome Skin Rejuvenation",
      desc: "Topical regenerative post-procedure adjunct. Often paired with RF for post-session recovery amplification.",
      href: "/treatments/exosome-skin-rejuvenation-jvc"
    },
    {
      title: "HydraFacial JVC",
      desc: "Branded hydration facial. Ideal pre-RF skin preparation option and post-RF maintenance layer.",
      href: "/treatments/hydrafacial-jvc"
    }
  ];

  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-sans text-[11px] font-semibold text-[#C8A87F] tracking-[0.12em] uppercase mb-4 text-center">COMPLEMENTARY TREATMENTS</div>
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1F1F1F] mb-16 leading-[1.2] text-center max-w-[800px] mx-auto">
          Full Vedara Care JVC Aesthetic Cluster
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, idx) => (
            <div key={idx} className="bg-[#F4F0EA] p-8 rounded-xl border border-[#EAE3D9] flex flex-col h-full hover:border-[#C8A87F]/50 transition-colors">
              <h3 className="font-sans text-[15px] font-bold text-[#1F1F1F] mb-3">{treatment.title}</h3>
              <p className="font-sans text-[13px] text-[#555555] leading-[1.7] mb-6 flex-grow">{treatment.desc}</p>
              <Link href={treatment.href} className="font-sans text-[13px] text-[#C8A87F] font-semibold hover:text-[#B5956C] transition-colors inline-flex items-center no-underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
