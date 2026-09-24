import React, { useState } from 'react';
import Link from 'next/link';
import AyurvedaHero from '../ayurveda/AyurvedaHero';

export const HifuHero = () => {
  return (
    <AyurvedaHero
      bgColor="bg-[#F4F0EA]"
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Treatments', href: '/treatments' },
        { label: 'HIFU Skin Lifting', href: '/treatments/hifu-skin-lifting-tightening-jvc' }
      ]}
      label="Vedara Care Polyclinic • JVC Dubai"
      title="HIFU Skin Lifting & Tightening in JVC"
      description={`Non-surgical SMAS lift delivered under Medical Director oversight.<br />
Focused ultrasound at the same tissue depth surgeons target in facelift surgery.<br /><br />
<span class="font-sans font-medium text-[14px] text-[#555555]">"HIFU targets the SMAS — the same tissue layer surgeons address in facelift. My role is patient medical clearance and protocol design. Arfah delivers because HIFU is device-operator scope."</span><br />
<span class="text-[12px] text-[#888888]">— Medical Director, DHA-Licensed Consultant Dermatologist, Vedara Care JVC</span>`}
      image="/images/hifu-jvc-hero-bg.webp"
      alt="Vedara Care JVC treatment room with HIFU device on the treatment cart, prepared for a skin lifting session under Medical Director protocol"
      floatingCard={{
        title: "Treatment Investment",
        subtitle: "HIFU Full Face + Neck Programme<br/>From AED 2,400<br/>Course of 2: 15-20% savings"
      }}
      primaryCTA="Book Free Discovery Call"
      primaryCTAHref="#book"
      secondaryCTA="Ask on WhatsApp"
      secondaryCTAHref="https://wa.me/971555736312"
      trustSignals={[
        'DHA-Licensed Facility',
        'HIFU Device-Certified Operator',
        'Medical Director Oversight',
        'Consultation-First',
        'Insurance Support'
      ]}
    />
  );
};

export const HifuQuickAnswer = () => {
  return (
    <section className="py-20 bg-[#FFFFFF] border-t border-[#EAE3D9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-16 items-start">
          <div>
            <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Quick Answer</div>
            <h2 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1F1F1F] m-0 mb-6 leading-[1.2]">
              What is HIFU at Vedara Care JVC?
            </h2>
            <p className="font-sans text-[15px] text-[#444444] leading-[1.7] mb-4">
              <strong>HIFU (High-Intensity Focused Ultrasound)</strong> at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai, is a non-invasive skin lifting and tightening treatment that delivers focused ultrasound energy at <strong>1.5mm, 3.0mm, and 4.5mm depths</strong> to stimulate collagen remodelling and lift the SMAS layer.
            </p>
            <p className="font-sans text-[15px] text-[#444444] leading-[1.7] mb-8">
              Delivered by a HIFU device-certified DHA-Licensed Aesthetician under Consultant Dermatologist Medical Director oversight. Sessions from <strong>AED 2,400</strong>. Consultation-first pathway.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {['✓ DHA-Licensed', '✓ HIFU-Certified Operator', '✓ Medical Director Cleared', '✓ 8+ Years Experience', '✓ Transparent Pricing', '✓ Free Consultation'].map((badge, i) => (
                <span key={i} className="font-sans text-[13px] text-[#555555] flex items-center">
                  <span className="text-[#C8A87F] mr-1.5">•</span> {badge.replace('✓ ', '')}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EAE3D9]">
              <div className="font-serif text-[32px] text-[#C8A87F] mb-2">4.5mm</div>
              <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">SMAS depth targeted — same tissue layer as facelift surgery</div>
            </div>
            <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EAE3D9]">
              <div className="font-serif text-[32px] text-[#C8A87F] mb-2">60-90</div>
              <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">Days to peak collagen remodelling and visible structural lift</div>
            </div>
            <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EAE3D9]">
              <div className="font-serif text-[32px] text-[#C8A87F] mb-2">0</div>
              <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">Clinical downtime — return to normal activity same day</div>
            </div>
            <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EAE3D9]">
              <div className="font-serif text-[32px] text-[#C8A87F] mb-2">12-18</div>
              <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">Months typical result durability in appropriate candidates</div>
            </div>
          </div>
          <div className="hidden lg:block h-full rounded-xl overflow-hidden relative">
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuAtAGlance = () => {
  const points = [
    {
      icon: "🔬",
      title: "Treatment Type",
      desc: "Non-invasive ultrasound based skin lifting and tightening. No needles, no incisions, no anaesthesia beyond topical numbing. Device-based structural intervention targeting SMAS, reticular dermis, and superficial dermis at controlled depths."
    },
    {
      icon: "⏱️",
      title: "Session Duration",
      desc: "Full face + neck: 60-90 minutes chair time. Face-only or single-zone (jawline, submental, brow, décolletage): 30-45 minutes. Consultation and mapping added to first session."
    },
    {
      icon: "💧",
      title: "Recovery & Downtime",
      desc: "Zero clinical downtime. Mild redness or slight tenderness 24-72 hours possible. Return to normal activity same day. Makeup permitted next day. No exercise restrictions beyond first 24 hours."
    },
    {
      icon: "📅",
      title: "Results Timeline",
      desc: "Initial subtle tightening within 2-4 weeks. Peak collagen remodelling 60-90 days post-session. Continued improvement to 6 months. Result durability typically 12-18 months in appropriate candidates."
    },
    {
      icon: "💰",
      title: "Investment Range",
      desc: "Single-zone from AED 1,200. Full face from AED 2,000. Full face + neck from AED 2,400. Face + neck + décolletage from AED 3,000. Programme course of 2 sessions delivers 15-20% savings."
    },
    {
      icon: "👩‍⚕️",
      title: "Primary Delivery",
      desc: "Arfah Owais, DHA-Licensed Aesthetician (CIBTAC-UK), HIFU device-specific certified, 8+ years aesthetic experience. Medical clearance and protocol design by our DHA-Licensed Consultant Dermatologist Medical Director."
    },
    {
      icon: "🎯",
      title: "Best For",
      desc: "Mild-to-moderate skin laxity, early jawline softening, submental laxity, brow position adjustment, décolletage skin quality. Patients with severe laxity or significant excess skin are referred to plastic surgery consultation."
    },
    {
      icon: "🔄",
      title: "Sessions Required",
      desc: "Most patients: single annual session with maintenance. Established laxity: programme course of 2 sessions 6-9 months apart, then annual. Determined at consultation, not sold as fixed package."
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 text-center max-w-[800px] mx-auto">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 3</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2]">
            HIFU Skin Lifting & Tightening at Vedara Care JVC — At a Glance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {points.map((p, i) => (
            <div key={i} className="bg-[#F4F0EA] p-6 rounded-xl border border-[#EAE3D9] transition-transform hover:-translate-y-1">
              <div className="text-[24px] mb-4">{p.icon}</div>
              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">{p.title}</h3>
              <p className="font-sans text-[13px] text-[#666666] leading-[1.6] m-0">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#F4F0EA] rounded-xl border border-[#EAE3D9] p-8 md:p-12 text-center max-w-[1200px] mx-auto">
          <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-4">Ready to see if HIFU is the right fit for your face?</h3>
          <p className="font-sans text-[15px] text-[#555555] mb-8 max-w-[700px] mx-auto">
            Book a free 30-minute consultation with our Medical Director. You'll receive a full skin laxity assessment, honest candidacy triage, and a personalized protocol recommendation. No same-day booking pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book HIFU Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center bg-[#25D366] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#1DA851] transition-colors no-underline">
              <span className="mr-2">💬</span> Ask on WhatsApp
            </a>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {['✓ DHA-Licensed', '✓ Medical Director Cleared', '✓ Consultation-First'].map((badge, i) => (
              <span key={i} className="font-sans text-[12px] text-[#777777]">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuWhyUs = () => {
  const reasons = [
    {
      num: "01",
      title: "Medical Director Oversight on Every HIFU Case",
      desc: "HIFU is device-operator scope in Dubai — but at Vedara Care JVC, every patient we accept for HIFU has first passed a Consultant Dermatologist Medical Director medical screening. That clearance protects patient safety, ensures energy parameters are appropriate for skin type and laxity pattern, and means adverse events are managed within the same clinical governance structure. Most Dubai HIFU providers do not offer this layered oversight."
    },
    {
      num: "02",
      title: "Honest Patient Triage (We Refuse Inappropriate Cases)",
      desc: "HIFU is a genuinely effective treatment — for the right candidate. It is not a substitute for surgical facelift in patients with severe laxity or significant excess skin. Our Medical Director's consultation includes explicit triage: patients who would be better served by surgical consultation are told so directly, not sold HIFU sessions that will disappoint them."
    },
    {
      num: "03",
      title: "HIFU Device-Specific Operator Certification",
      desc: "Arfah Owais holds specific HIFU device certification alongside her DHA-Licensed Aesthetician credential (CIBTAC-UK) and 8+ years aesthetic experience. HIFU delivery quality depends heavily on operator technique — vector mapping, cartridge selection, depth sequencing, treatment overlap. We invested in device-specific certification before delivering HIFU independently."
    },
    {
      num: "04",
      title: "Transparent Pricing (No Hidden Costs, No Upsell Pressure)",
      desc: "Our HIFU pricing is published on this page. Full face + neck from AED 2,400. Programme course savings are quantified. Consultation fee (AED 300) is waived if you proceed with treatment. No package pressure at consultation. No \"today only\" pricing tactics. Dubai patients are entitled to know what a treatment costs before they sit in a consultation chair."
    },
    {
      num: "05",
      title: "Realistic Result Timelines (60-90 Day Collagen Curve)",
      desc: "HIFU does not produce instant lifting. Initial subtle tightening appears within 2-4 weeks; peak collagen remodelling occurs at 60-90 days; continued improvement to 6 months. Our consultation and every follow-up communication reinforces this timeline because unrealistic expectations are the primary source of HIFU patient disappointment industry-wide."
    },
    {
      num: "06",
      title: "JVC Neighbourhood Convenience + Full Aesthetic Cluster",
      desc: "Our Jumeirah Village Circle clinic is walking distance from Circle Mall, 3 minutes from FIVE Jumeirah Hotel, and 5 minutes from JSS Private School. Free parking. DHA-Licensed multi-specialty facility. HIFU integrates with our broader aesthetic cluster — mesotherapy, PRP, exosome therapy, anti-aging maintenance protocol, and hydration facials."
    }
  ];

  return (
    <section className="py-20 bg-[#F4F0EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 max-w-[800px]">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 4</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2]">
            Why Vedara Care Polyclinic JVC for Your HIFU Treatment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {reasons.map((r, i) => (
            <div key={i} className="bg-[#FAF7F2] p-8 rounded-xl border border-[#EAE3D9] flex gap-6">
              <div className="font-serif text-[32px] text-[#E0D4C3] leading-none pt-1">{r.num}</div>
              <div>
                <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3 leading-[1.3]">{r.title}</h3>
                <p className="font-sans text-[14px] text-[#666666] leading-[1.6] m-0">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#FAF7F2] rounded-xl border border-[#EAE3D9] p-8 md:p-12 text-center max-w-[1200px] mx-auto">
          <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-4">The peer-reviewed evidence supports HIFU efficacy. The question is whether you're an appropriate candidate.</h3>
          <p className="font-sans text-[15px] text-[#555555] mb-8">
            That's what the free 30-minute consultation determines. Medical Director medical clearance included. Honest triage — including 'you'd be better served by a surgical consultation' if that's the accurate answer.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book HIFU Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center bg-[#25D366] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#1DA851] transition-colors no-underline">
              <span className="mr-2">💬</span> Ask on WhatsApp
            </a>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {['✓ DHA-Licensed', '✓ Medical Director Cleared', '✓ Consultation-First'].map((badge, i) => (
              <span key={i} className="font-sans text-[12px] text-[#777777]">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuEvidence = () => {
  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#EAE3D9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 mb-16">
          <div>
            <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 5 • Evidence Base</div>
            <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2] mb-6">
              How Does HIFU Compare to a Surgical Facelift?
            </h2>
            <p className="font-sans text-[15px] text-[#444444] leading-[1.7] mb-4">
              HIFU (High-Intensity Focused Ultrasound) is a non-surgical alternative to facelift that targets the same SMAS tissue layer through focused ultrasound energy rather than surgical incision and re-suspension. HIFU is appropriate for <strong>mild-to-moderate skin laxity</strong> in patients with reasonable skin quality; it does not replace surgical facelift for severe laxity or significant excess skin.
            </p>
            <p className="font-sans text-[15px] text-[#444444] leading-[1.7]">
              At Vedara Care Polyclinic JVC, Medical Director consultation includes explicit triage — patients better served by surgical consultation are referred rather than accepted for HIFU. Result timeline: 60-90 day peak collagen remodelling, 12-18 month durability, annual maintenance recommended.
            </p>
          </div>

          <div className="bg-[#F4F0EA] p-6 rounded-xl border border-[#EAE3D9]">
            <h3 className="font-sans text-[12px] font-bold text-[#C8A87F] uppercase tracking-wider mb-4">Our HIFU Patient Population</h3>
            <ul className="space-y-3 m-0 p-0 list-none">
              {[
                "Dubai professionals seeking early-stage laxity intervention",
                "Mid-40s patients evaluating non-surgical alternatives to facelift",
                "Post-weight-loss patients requiring careful expectation triage",
                "Male executives prioritizing discreet natural appearance intervention",
                "Pre-event patients timing to 60-90 day result curves",
                "Fitzpatrick IV-V patients requiring culturally competent protocol",
                "Post-surgical facelift patients seeking maintenance"
              ].map((item, i) => (
                <li key={i} className="font-sans text-[13px] text-[#555555] flex items-start">
                  <span className="text-[#C8A87F] mr-2 text-[10px] mt-1">■</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-6">External Authority — Peer-Reviewed Evidence</h3>
          <p className="font-sans text-[14px] text-[#555555] mb-6">The clinical efficacy of HIFU for facial and neck skin tightening is documented in the following peer-reviewed literature. Ultherapy specifically holds FDA clearance for non-invasive brow, submental, and décolletage lifting.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { authors: "Alam M, et al.", journal: "Journal of the American Academy of Dermatology, 2010", text: "First peer-reviewed prospective study documenting safe, blinded facial and neck skin tightening outcomes at 90 days post-single-session HIFU." },
              { authors: "Suh DH, et al.", journal: "Dermatologic Surgery, 2011", text: "Clinical evidence for HIFU efficacy specifically in Asian (Fitzpatrick III-V) skin — critical for Dubai patient demographics." },
              { authors: "Fabi SG.", journal: "Clinical, Cosmetic and Investigational Dermatology, 2015", text: "Comprehensive review of ultrasound-based skin tightening including patient selection criteria, expected outcomes, and comparison to competing modalities." },
              { authors: "Lee HS, et al.", journal: "Dermatologic Surgery, 2012", text: "Evidence for multiple-pass HIFU protocol efficacy on lower face and neck laxity." },
              { authors: "Oni G, et al.", journal: "Aesthetic Surgery Journal, 2014", text: "Formal aesthetic surgery journal evaluation of microfocused ultrasound for lower face — bridges dermatology and aesthetic surgery evidence base." },
              { authors: "Werschler WP & Werschler PS", journal: "Journal of Clinical and Aesthetic Dermatology, 2016", text: "Long-term efficacy and restoring treatment methodology — supports 12-24 month result durability claims." }
            ].map((study, i) => (
              <div key={i} className="bg-[#F4F0EA] p-5 rounded border border-[#EAE3D9]">
                <div className="font-sans text-[12px] font-bold text-[#333333]">{study.authors}</div>
                <div className="font-sans text-[11px] text-[#888888] mb-2">{study.journal}</div>
                <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">{study.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuClinicalEducation = () => {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 max-w-[900px]">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 6 • Clinical Education</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2] mb-6">
            Understanding HIFU Skin Lifting & Tightening — What Actually Happens Under the Skin
          </h2>
          <div className="border-l-2 border-[#C8A87F] pl-4 py-1">
            <p className="font-sans text-[15px] text-[#444444] leading-[1.7] m-0">
              <strong>What does HIFU actually do to the skin?</strong> HIFU delivers focused ultrasound energy through the skin's surface to precise depths (1.5mm, 3.0mm, and 4.5mm) where it creates thermal coagulation points within the dermis and SMAS layer. The controlled thermal injury triggers a 60-90 day wound-healing cascade — fibroblast activation, new collagen synthesis, and tightening of existing collagen fibres. The result is gradual, structural lifting of the SMAS layer and improved skin quality without incisions, injections, or clinical downtime.
            </p>
          </div>
        </div>

        <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-6">The Three-Depth Delivery Framework</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#F4F0EA] p-8 rounded-xl border border-[#EAE3D9]">
            <div className="font-serif text-[32px] text-[#C8A87F] mb-1">4.5mm <span className="font-sans text-[10px] text-[#888888] tracking-widest uppercase ml-1 relative -top-1">SMAS LAYER</span></div>
            <p className="font-sans text-[14px] text-[#555555] leading-[1.6] m-0 mt-4">
              The SMAS (Superficial Musculoaponeurotic System) is the fibromuscular tissue layer that surgeons address in facelift surgery. HIFU at 4.5mm creates thermal coagulation points within the SMAS itself, triggering contraction and long-term tightening of this structural layer. This is the depth that produces the "lift" component of HIFU results.
            </p>
          </div>
          <div className="bg-[#F4F0EA] p-8 rounded-xl border border-[#EAE3D9]">
            <div className="font-serif text-[32px] text-[#C8A87F] mb-1">3.0mm <span className="font-sans text-[10px] text-[#888888] tracking-widest uppercase ml-1 relative -top-1">RETICULAR DERMIS</span></div>
            <p className="font-sans text-[14px] text-[#555555] leading-[1.6] m-0 mt-4">
              The reticular dermis contains the dense collagen network responsible for skin firmness and structural integrity. HIFU at 3.0mm creates thermal points within this dermal layer, triggering neocollagenesis (new collagen production) that improves skin density and firmness over the 60-90 day remodelling window.
            </p>
          </div>
          <div className="bg-[#F4F0EA] p-8 rounded-xl border border-[#EAE3D9]">
            <div className="font-serif text-[32px] text-[#C8A87F] mb-1">1.5mm <span className="font-sans text-[10px] text-[#888888] tracking-widest uppercase ml-1 relative -top-1">SUPERFICIAL DERMIS</span></div>
            <p className="font-sans text-[14px] text-[#555555] leading-[1.6] m-0 mt-4">
              The superficial (papillary) dermis affects skin texture, fine line appearance, and surface quality. HIFU at 1.5mm creates fine thermal points in this shallow layer, improving skin surface quality alongside the deeper lifting effect.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-4">Vectoring Methodology</h3>
            <p className="font-sans text-[14px] text-[#555555] leading-[1.7] mb-4">
              HIFU treatment lines are not delivered uniformly across the face. Effective HIFU protocols use <strong>vectoring</strong> — a mapping methodology that places treatment lines along specific vectors that produce the intended lifting direction. Jawline vectoring, mid-face vectoring, submental focus, and lateral brow lifting each require distinct vector patterns.
            </p>
            <p className="font-sans text-[14px] text-[#555555] leading-[1.7] m-0">
              At Vedara Care JVC, Arfah maps treatment vectors before every session based on that patient's specific anatomy and the Medical Director's clinical assessment of laxity pattern. Vector maps are documented — so that when a patient returns for annual maintenance, we know exactly which vectors we treated previously and can refine the protocol based on the observed 12-month response.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-6">The Collagen Remodelling Timeline</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-[#F4F0EA] border border-[#EAE3D9] rounded px-3 py-1 font-sans text-[11px] text-[#888888] whitespace-nowrap h-fit mt-1">Weeks 1-4</div>
                <div className="font-sans text-[14px] text-[#555555] leading-[1.6]">Fibroblast activation, initial neocollagenesis, subtle progressive tightening</div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#F4F0EA] border border-[#C8A87F] rounded px-3 py-1 font-sans text-[11px] text-[#C8A87F] whitespace-nowrap h-fit mt-1">Weeks 8-12</div>
                <div className="font-sans text-[14px] text-[#1F1F1F] font-medium leading-[1.6]">Peak collagen remodelling window — structural lifting becomes visible</div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#F4F0EA] border border-[#EAE3D9] rounded px-3 py-1 font-sans text-[11px] text-[#888888] whitespace-nowrap h-fit mt-1">Months 3-6</div>
                <div className="font-sans text-[14px] text-[#555555] leading-[1.6]">Continued improvement, ongoing collagen deposition, skin quality refinement</div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#F4F0EA] border border-[#EAE3D9] rounded px-3 py-1 font-sans text-[11px] text-[#888888] whitespace-nowrap h-fit mt-1">Months 6-12</div>
                <div className="font-sans text-[14px] text-[#555555] leading-[1.6]">Result durability with gradual normal aging superimposed</div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#F4F0EA] border border-[#EAE3D9] rounded px-3 py-1 font-sans text-[11px] text-[#888888] whitespace-nowrap h-fit mt-1">Months 12-18</div>
                <div className="font-sans text-[14px] text-[#555555] leading-[1.6]">Result maintenance before annual refresh recommended</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-6">Common Questions — Directly Addressed</h3>
          <div className="space-y-4">
            <div className="bg-[#F4F0EA] p-6 rounded-xl border border-[#EAE3D9]">
              <div className="font-sans text-[14px] font-bold text-[#333333] mb-2">Q: Isn't HIFU old technology by now?</div>
              <div className="font-sans text-[14px] text-[#555555] leading-[1.6]">HIFU technology has evolved substantially since the first Ultherapy FDA clearance in 2009. Modern HIFU platforms use higher-resolution transducers, more precise depth targeting, and advanced vectoring methodologies developed over 15+ years of clinical use. Peer-reviewed literature from 2016 onwards documents refined protocols that produce more consistent and durable outcomes than early-generation approaches.</div>
            </div>
            <div className="bg-[#F4F0EA] p-6 rounded-xl border border-[#EAE3D9]">
              <div className="font-sans text-[14px] font-bold text-[#333333] mb-2">Q: How do I know HIFU actually works? Isn't it just marketing?</div>
              <div className="font-sans text-[14px] text-[#555555] leading-[1.6]">HIFU efficacy for facial and neck skin tightening is documented in peer-reviewed literature — case-blinded prospective studies published in Journal of the American Academy of Dermatology, Dermatologic Surgery, Aesthetic Surgery Journal, and other indexed dermatology journals. This is not aesthetic industry marketing evidence — this is medical literature evidence.</div>
            </div>
            <div className="bg-[#F4F0EA] p-6 rounded-xl border border-[#EAE3D9]">
              <div className="font-sans text-[14px] font-bold text-[#333333] mb-2">Q: Doesn't HIFU hurt?</div>
              <div className="font-sans text-[14px] text-[#555555] leading-[1.6]">HIFU sensation varies significantly by depth, area, and patient. The 4.5mm SMAS-targeting cartridge produces the most intense sensation — described as a brief warm or prickling sensation with each ultrasound pulse. At Vedara Care JVC, we apply topical numbing 30-45 minutes before treatment. Most patients describe HIFU as a "manageable 4-6 out of 10 discomfort" for the deepest cartridge.</div>
            </div>
          </div>
        </div>

        <div className="bg-[#F4F0EA] rounded-xl border border-[#C8A87F]/30 p-8 md:p-10 text-center max-w-[1200px] mx-auto mt-16">
          <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-4">Now that you understand what HIFU actually does — is it the right treatment for your face?</h3>
          <p className="font-sans text-[15px] text-[#555555] mb-8">
            The consultation will tell you. Medical Director assessment, honest candidacy triage, personalized protocol design if you're a fit, honest referral to surgical consultation if you're not.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book HIFU Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center bg-[#25D366] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#1DA851] transition-colors no-underline">
              <span className="mr-2">💬</span> Ask on WhatsApp
            </a>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {['✓ DHA-Licensed', '✓ Medical Director Oversight', '✓ Peer-Reviewed Evidence-Based'].map((badge, i) => (
              <span key={i} className="font-sans text-[12px] text-[#777777]">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuPatientSelection = () => {
  const populations = [
    {
      icon: "👩",
      title: "Early Intervention Seeker (Mid-30s Prevention)",
      desc: "Female or male, 32-38, Dubai professional, first indicators of skin quality decline or jawline softening. Wants to intervene before more visible aging occurs. Appropriate as preventive-oriented single-session intervention with annual maintenance."
    },
    {
      icon: "💎",
      title: "Structural Correction Candidate (Mid-40s)",
      desc: "Female, 40-48, visible mid-face and jawline laxity, evaluating non-surgical alternatives to facelift. Strong appropriateness for this profile. Typical protocol: programme course of 2 sessions 6-9 months apart, then annual maintenance. Highest conversion cluster."
    },
    {
      icon: "⚖️",
      title: "Post-Weight-Loss Patient",
      desc: "Female or male, 35-55, post-significant weight loss, mild-to-moderate facial and submental laxity. Appropriate for mild-to-moderate residual laxity. Patients with severe redundancy are referred to plastic surgery consultation."
    },
    {
      icon: "👔",
      title: "Male Executive",
      desc: "Male, 38-55, Dubai C-suite, discreet aesthetic consumer. Jawline definition and submental focus, minimal downtime requirement. Highly appropriate — HIFU produces natural-appearance structural change without visible intervention markers."
    },
    {
      icon: "💍",
      title: "Pre-Event / Pre-Milestone Patient",
      desc: "Female, 30-50, planning a wedding, anniversary, or major event 4-6 months out. Appropriate IF the event is 4+ months away (matches 60-90 day peak result window). NOT appropriate for events within 4 weeks."
    },
    {
      icon: "☀️",
      title: "Fitzpatrick IV-V Patient (South Asian, Middle Eastern)",
      desc: "Female or male, 30-55, seeking practitioner experienced with darker skin phenotypes. HIFU does not target melanin — no post-inflammatory hyperpigmentation risk. Suh 2011 study specifically documents efficacy in Asian skin."
    },
    {
      icon: "🌸",
      title: "Post-Pregnancy Recovery Patient",
      desc: "Female, 32-42, out of breastfeeding window, weight-stable, seeking facial recontouring. Appropriate once no longer nursing and weight has stabilized. Often combined with mesotherapy or PRP for hydration + collagen layered protocol."
    },
    {
      icon: "🌿",
      title: "Menopausal / Peri-Menopausal Patient",
      desc: "Female, 45-55, oestrogen decline visible in skin quality and laxity acceleration. Appropriate as one component of broader menopausal skin support programme. Cross-integration with perimenopause programme available."
    },
    {
      icon: "✨",
      title: "Décolletage-Focused Patient",
      desc: "Female, 38-55, primary concern is neck and décolletage laxity, sun-damage-driven. Ultherapy holds specific FDA clearance for décolletage lifting. Often combined with facial HIFU as full programme."
    },
    {
      icon: "✂️",
      title: "Post-Surgical Facelift Maintenance",
      desc: "Female, 50-65, has had surgical facelift 2-5+ years prior, seeks non-surgical maintenance to extend the surgical result. Medical Director oversight is essential for this cluster."
    },
    {
      icon: "👁️",
      title: "Brow Position Correction Patient",
      desc: "Female or male, 35-55, primary concern is lateral brow descent. Ultherapy holds specific FDA clearance for non-invasive brow lift. HIFU at 4.5mm can produce visible brow position improvement over 60-90 days."
    },
    {
      icon: "🔄",
      title: "Combined Modality Programme Patient",
      desc: "Any age 30-58, has used other Vedara Care aesthetic modalities and wants to integrate HIFU as the structural layer in a broader personalized programme. Medical Director designs sequencing to optimize collagen response."
    }
  ];

  return (
    <section className="py-20 bg-[#F4F0EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 max-w-[900px]">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 7 • Patient Selection</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2] mb-6">
            Who HIFU at Vedara Care JVC Is Designed For — And Who It Isn't
          </h2>
          <p className="font-sans text-[15px] text-[#444444] leading-[1.7] m-0">
            HIFU at Vedara Care Polyclinic JVC is appropriate for patients with <strong>mild-to-moderate skin laxity</strong>, reasonable skin quality, realistic result expectations, and no contraindicating medical conditions. HIFU is not appropriate for severe laxity, significant excess skin, active dermatological conditions in the treatment area, pregnancy, or specific medical contraindications — those patients we refer to appropriate alternative care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {populations.map((pop, i) => (
            <div key={i} className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EAE3D9] transition-transform hover:-translate-y-1">
              <div className="text-[20px] mb-3">{pop.icon}</div>
              <h4 className="font-sans text-[13px] font-bold text-[#1F1F1F] mb-2 leading-[1.4]">{pop.title}</h4>
              <p className="font-sans text-[13px] text-[#666666] leading-[1.5] m-0">{pop.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#FAF7F2] border border-[#EAE3D9] p-8 rounded-xl mb-12">
          <h3 className="font-serif text-[22px] text-[#1F1F1F] mb-6">Contraindication Notice — DHA Compliance & Patient Safety</h3>
          <p className="font-sans text-[14px] text-[#555555] mb-6">HIFU is NOT appropriate for patients with the following:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 mb-8">
            {[
              "Pregnancy or breastfeeding",
              "Pacemakers or electronic implanted devices",
              "Untreated or unstable autoimmune conditions",
              "Active skin conditions in treatment area",
              "Recent facial surgery or non-healed surgical sites",
              "Severe skin laxity or significant excess skin",
              "Metallic implants in treatment area",
              "Active or recent isotretinoin (Roaccutane) within 6 months",
              "Unrealistic expectations not addressable at consultation"
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <span className="text-[#D9534F] mr-2 mt-0.5 text-[12px]">✗</span>
                <span className="font-sans text-[13px] text-[#555555] leading-[1.4]">{item}</span>
              </div>
            ))}
          </div>

          <p className="font-sans text-[12px] italic text-[#777777] m-0">
            Every HIFU consultation at Vedara Care JVC includes explicit contraindication screening by the Medical Director. Patients with contraindications are not booked for HIFU regardless of consumer preference — this is patient safety, not commercial choice.
          </p>
        </div>

        <div className="bg-[#F4F0EA] rounded-xl border border-[#C8A87F]/30 p-8 md:p-10 text-center max-w-[1200px] mx-auto">
          <h3 className="font-serif text-[24px] text-[#1F1F1F] mb-4">Recognize yourself in one of these patient profiles? The consultation confirms whether HIFU is appropriate for your specific case.</h3>
          <p className="font-sans text-[15px] text-[#555555] mb-8">
            Recognize a contraindication? Tell us at consultation — we'll design an alternative treatment pathway or refer you to appropriate care. Either way, the consultation is honest and no-pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book HIFU Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center bg-[#25D366] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#1DA851] transition-colors no-underline">
              <span className="mr-2">💬</span> Ask on WhatsApp
            </a>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {['✓ DHA-Licensed', '✓ Medical Director Screening', '✓ Honest Triage'].map((badge, i) => (
              <span key={i} className="font-sans text-[12px] text-[#777777]">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuProtocol = () => {
  const steps = [
    { num: "01", title: "Medical Clearance Verification", time: "5 min", desc: "Session begins with verification of the Medical Director's medical clearance documentation completed at the earlier consultation. Any new health changes since consultation (new medications, illness, procedures) are noted." },
    { num: "02", title: "Consent and Photography", time: "5 min", desc: "Written informed consent specific to the session is reviewed and signed. Baseline photography is captured under standardized lighting conditions — front, oblique, profile, submental view, décolletage if included." },
    { num: "03", title: "Skin Cleansing and Preparation", time: "5 min", desc: "Treatment area is thoroughly cleansed with a gentle non-ablative cleanser to remove all makeup, sunscreen, oil, and residue. Skin is dried and lightly toned to ensure clean ultrasound coupling." },
    { num: "04", title: "Topical Anaesthetic Application", time: "30-45 min", desc: "Topical lidocaine 4-5% is applied to treatment areas under occlusion. Numbing window is 30-45 minutes for optimal comfort during 4.5mm cartridge delivery. Oral over-the-counter analgesia offered if requested." },
    { num: "05", title: "Vector Mapping", time: "10 min", desc: "Arfah maps treatment vectors using a fine marking pencil, following the protocol design cleared by the Medical Director. Jawline vectors, mid-face vectors, submental focus areas, lateral brow zones (if indicated), and décolletage zones are marked systematically." },
    { num: "06", title: "4.5mm SMAS Delivery", time: "15-20 min", desc: "Ultrasound coupling gel is applied. The 4.5mm cartridge is loaded and treatment lines are delivered along mapped vectors targeting the SMAS layer. Patient comfort is monitored continuously; pauses between zones offered." },
    { num: "07", title: "3.0mm Reticular Dermis Delivery", time: "10-15 min", desc: "The 3.0mm cartridge is loaded. Treatment lines are delivered targeting the reticular dermis at appropriate density per protocol. Sensation is typically more comfortable at 3.0mm than at 4.5mm." },
    { num: "08", title: "1.5mm Superficial Dermis Delivery", time: "10-15 min", desc: "The 1.5mm cartridge is loaded. Treatment lines are delivered targeting the superficial dermis at appropriate density. Sensation is generally the most comfortable at this depth." },
    { num: "09", title: "Post-Procedure Cooling, Calming & Photography", time: "10 min", desc: "Treatment area is thoroughly cleaned. Cooling gel is applied to reduce residual thermal sensation. Post-procedure calming serum is applied. Immediate post-session photography is captured for baseline documentation." },
    { num: "10", title: "Aftercare Briefing and Follow-Up Scheduling", time: "5-10 min", desc: "Written aftercare instructions are provided and reviewed verbally (key points: SPF 50+ for 2 weeks, gentle skincare for 5-7 days, no facial massage for 2 weeks, no vigorous exercise for 24 hours). 90-day follow-up appointment is scheduled." }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 max-w-[1200px]">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 8 • Protocol</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2] mb-2">
            The Vedara Care JVC HIFU Protocol — Ten-Step Session Structure
          </h2>
          <p className="font-sans text-[14px] text-[#777777] mb-8">Total session time: 75-90 minutes for face + neck</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          </div>
        </div>

        <div className="max-w-[1200px]">
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#F4F0EA] border border-[#EAE3D9] rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#C8A87F] flex items-center justify-center font-serif text-[18px] text-[#C8A87F]">
                  {step.num}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h4 className="font-sans text-[16px] font-medium text-[#1F1F1F] m-0">{step.title}</h4>
                    <span className="font-sans text-[11px] text-[#C8A87F] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EAE3D9]">{step.time}</span>
                  </div>
                  <p className="font-sans text-[14px] text-[#555555] leading-[1.6] m-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-serif text-[24px] md:text-[28px] text-[#1F1F1F] mb-6">HIFU vs Comparable Lifting Modalities</h3>
          <div className="overflow-x-auto rounded-xl border border-[#EAE3D9]">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead className="bg-[#1F1F1F]">
                <tr>
                  <th className="py-4 px-6 font-sans text-[11px] font-bold text-white uppercase tracking-wider w-1/5">Attribute</th>
                  <th className="py-4 px-6 font-sans text-[11px] font-bold text-white uppercase tracking-wider w-1/5">HIFU (Vedara Care JVC)</th>
                  <th className="py-4 px-6 font-sans text-[11px] font-bold text-white uppercase tracking-wider w-1/5">RF Skin Tightening</th>
                  <th className="py-4 px-6 font-sans text-[11px] font-bold text-white uppercase tracking-wider w-1/5">Thread Lift</th>
                  <th className="py-4 px-6 font-sans text-[11px] font-bold text-white uppercase tracking-wider w-1/5">Surgical Facelift</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ["Modality Type", "Focused ultrasound energy", "Radiofrequency electromagnetic", "Physical suture insertion", "Surgical incision & re-suspension"],
                  ["Tissue Depth", "1.5mm / 3.0mm / 4.5mm (SMAS)", "Dermis (variable, less selective)", "Subcutaneous (mechanical)", "SMAS surgical, skin excision"],
                  ["Result Timeline", "60-90 day peak, 6-month continued", "Multiple sessions cumulative", "Immediate visible lift", "Immediate (post-swelling)"],
                  ["Result Durability", "12-18 months", "6-12 months per series", "12-18 months", "7-10+ years"],
                  ["Downtime", "Zero clinical downtime", "Zero clinical downtime", "3-7 days bruising", "2-3 weeks visible recovery"],
                  ["Sessions Required", "1 session or programme of 2", "Series of 4-6 typically", "Single procedure", "Single surgery"],
                  ["Invasiveness", "Non-invasive", "Non-invasive", "Minimally invasive", "Invasive surgical"],
                  ["Anaesthesia", "Topical numbing", "None or topical", "Local anaesthesia", "General or IV sedation"],
                  ["Best For", "Mild-moderate laxity, SMAS-level lift", "Skin quality, subtle firming", "Moderate laxity, immediate lift", "Severe laxity, significant excess skin"]
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-[#EAE3D9] last:border-b-0 hover:bg-[#FAF7F2] ${i % 2 === 0 ? 'bg-white' : 'bg-[#F4F0EA]'}`}>
                    <td className="py-4 px-6 font-sans text-[13px] font-medium text-[#1F1F1F]">{row[0]}</td>
                    <td className="py-4 px-6 font-sans text-[13px] text-[#555555]">{row[1]}</td>
                    <td className="py-4 px-6 font-sans text-[13px] text-[#555555]">{row[2]}</td>
                    <td className="py-4 px-6 font-sans text-[13px] text-[#555555]">{row[3]}</td>
                    <td className="py-4 px-6 font-sans text-[13px] text-[#555555]">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuPatientJourney = () => {
  return (
    <section className="py-20 bg-[#F4F0EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 max-w-[900px]">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 9 • Patient Journey</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2] mb-6">
            What to Expect — Your Complete HIFU Patient Journey
          </h2>
          <p className="font-sans text-[15px] text-[#444444] leading-[1.7] m-0">
            The full HIFU experience at Vedara Care JVC spans five phases from initial enquiry to annual maintenance. Each phase is designed for clarity, honest expectation setting, and continuity of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EAE3D9]">
            <div className="font-sans text-[10px] text-[#888888] tracking-widest uppercase mb-1">Phase 1</div>
            <h4 className="font-serif text-[18px] text-[#1F1F1F] mb-1">Initial Enquiry & Discovery</h4>
            <div className="font-sans text-[11px] text-[#C8A87F] mb-4">Day 0-7</div>
            <ul className="font-sans text-[13px] text-[#555555] leading-[1.6] space-y-2 m-0 pl-4 list-disc marker:text-[#C8A87F]">
              <li>Patient contact via booking form, WhatsApp, or phone</li>
              <li>Initial questions answered, HIFU Information Guide offered</li>
              <li>Free 30-minute consultation booked at patient convenience</li>
              <li className="list-none -ml-4 mt-4 pt-4 border-t border-[#EAE3D9] text-[12px] italic">Typical availability: 3-10 days out</li>
            </ul>
          </div>

          <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EAE3D9]">
            <div className="font-sans text-[10px] text-[#888888] tracking-widest uppercase mb-1">Phase 2</div>
            <h4 className="font-serif text-[18px] text-[#1F1F1F] mb-1">Consultation & Medical Clearance</h4>
            <div className="font-sans text-[11px] text-[#C8A87F] mb-4">30 minutes</div>
            <ul className="font-sans text-[13px] text-[#555555] leading-[1.6] space-y-2 m-0 pl-4 list-disc marker:text-[#C8A87F]">
              <li>Comprehensive skin laxity assessment by Medical Director</li>
              <li>Medical history and contraindication screening</li>
              <li>Laxity classification (mild / moderate / severe)</li>
              <li>Candidacy determination — or honest referral to alternative care</li>
              <li>Personalized protocol design and transparent pricing</li>
              <li>Written treatment plan and pricing document to take home</li>
            </ul>
          </div>

          <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EAE3D9]">
            <div className="font-sans text-[10px] text-[#888888] tracking-widest uppercase mb-1">Phase 3</div>
            <h4 className="font-serif text-[18px] text-[#1F1F1F] mb-1">Session Preparation</h4>
            <div className="font-sans text-[11px] text-[#C8A87F] mb-4">2-14 days before session</div>
            <ul className="font-sans text-[13px] text-[#555555] leading-[1.6] space-y-2 m-0 pl-4 list-disc marker:text-[#C8A87F]">
              <li>Pre-session preparation instructions sent</li>
              <li>SPF 50+ strict application for 2 weeks pre-session</li>
              <li>No active acids or retinols for 5-7 days pre-session</li>
              <li>No facial treatments in preceding 2 weeks</li>
              <li>No injectable treatments in preceding 4 weeks</li>
            </ul>
          </div>

          <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EAE3D9]">
            <div className="font-sans text-[10px] text-[#888888] tracking-widest uppercase mb-1">Phase 4</div>
            <h4 className="font-serif text-[18px] text-[#1F1F1F] mb-1">Session Delivery</h4>
            <div className="font-sans text-[11px] text-[#C8A87F] mb-4">75-90 minutes</div>
            <ul className="font-sans text-[13px] text-[#555555] leading-[1.6] space-y-2 m-0 pl-4 list-disc marker:text-[#C8A87F]">
              <li>Ten-step protocol (see Section 8)</li>
              <li>Medical clearance verification, consent, photography</li>
              <li>Topical numbing, vector mapping, three-depth delivery</li>
              <li>Post-procedure cooling and aftercare briefing</li>
              <li className="list-none -ml-4 mt-4 pt-4 border-t border-[#EAE3D9] text-[12px] italic">90-day follow-up scheduled before leaving clinic</li>
            </ul>
          </div>

          <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EAE3D9]">
            <div className="font-sans text-[10px] text-[#888888] tracking-widest uppercase mb-1">Phase 5</div>
            <h4 className="font-serif text-[18px] text-[#1F1F1F] mb-1">Follow-Up & Maintenance</h4>
            <div className="font-sans text-[11px] text-[#C8A87F] mb-4">Day 7 - Month 12+</div>
            <ul className="font-sans text-[13px] text-[#555555] leading-[1.6] space-y-2 m-0 pl-4 list-disc marker:text-[#C8A87F]">
              <li>Day 1-7: Optional check-in call, aftercare compliance confirmed</li>
              <li>Day 30: Optional early progress assessment visit</li>
              <li>Day 60-90: Peak result follow-up appointment (recommended)</li>
              <li>Month 6: Continued improvement follow-up</li>
              <li>Month 12: Annual maintenance session scheduling</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#FAF7F2] rounded-xl border border-[#C8A87F]/30 p-8 md:p-10 max-w-[1200px] mx-auto text-center">
          <h3 className="font-serif text-[20px] text-[#1F1F1F] mb-2">This is what the HIFU journey actually looks like — from enquiry to annual maintenance.</h3>
          <p className="font-sans text-[14px] text-[#555555] mb-8">
            No surprises, no upsells, no rushed decisions. Start with the free consultation. The rest of the journey only begins if you decide it's the right fit for your face.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book HIFU Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center bg-[#25D366] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#1DA851] transition-colors no-underline">
              <span className="mr-2">💬</span> Ask on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['✓ DHA-Licensed', '✓ 5-Phase Structured Journey', '✓ No Same-Day Pressure'].map((badge, i) => (
              <span key={i} className="font-sans text-[12px] text-[#777777] bg-white px-2 py-1 rounded border border-[#EAE3D9]">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuCaseNarratives = () => {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 max-w-[900px]">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 10 • Patient Journeys</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2] mb-4">
            Documented Patient Journeys — Composite Case Narratives
          </h2>
          <p className="font-sans text-[13px] text-[#777777] italic leading-[1.6] m-0 max-w-[700px]">
            DHA advertising compliance note: The following case narratives are composite representations reflecting typical patient journeys within our HIFU practice at Vedara Care Polyclinic JVC. Individual results vary. No specific outcome is guaranteed. Names and identifying details are fictionalized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Case 01 */}
          <div className="bg-[#F4F0EA] rounded-xl overflow-hidden border border-[#EAE3D9]">
            <div className="relative h-[200px] bg-[#EAE3D9] overflow-hidden">
              <img src="/images/hifu-case1.webp" alt="HIFU Patient Case 01" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-[#1F1F1F]/60 backdrop-blur-sm text-white font-sans text-[10px] tracking-wider px-2 py-1 rounded uppercase z-10">Case 01</div>
              <div className="absolute bottom-4 right-4 bg-[#1F1F1F]/60 backdrop-blur-sm text-white font-sans text-[11px] px-3 py-1.5 rounded-full z-10">Laxity: Moderate</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[5]"></div>
            </div>
            <div className="p-6">
              <div className="font-sans text-[10px] text-[#888888] tracking-widest uppercase mb-2">FEMALE, 48 • MARKETING DIRECTOR • LONG-TERM DUBAI RESIDENT</div>
              <div className="font-sans text-[15px] font-medium text-[#1F1F1F] mb-4 leading-[1.5]">
                "I don't want a surgical facelift but I don't recognize my jawline anymore."
              </div>

              <div className="mb-4">
                <div className="font-sans text-[10px] text-[#C8A87F] tracking-widest uppercase mb-1">Protocol</div>
                <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">Full face + neck HIFU, programme course of 2 sessions spaced 6 months apart, annual maintenance thereafter.</div>
              </div>

              <div>
                <div className="font-sans text-[10px] text-[#C8A87F] tracking-widest uppercase mb-1">Outcome</div>
                <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">90-day follow-up: visible mid-face lifting and jawline definition improvement documented photographically. Session 2 delivered at 6-month mark with refined vector protocol. 12-month assessment: sustained improvement, patient satisfaction high, annual maintenance scheduled. Cross-referred to Mesotherapy for hydration layering.</div>
              </div>
            </div>
          </div>

          {/* Case 02 */}
          <div className="bg-[#F4F0EA] rounded-xl overflow-hidden border border-[#EAE3D9]">
            <div className="relative h-[200px] bg-[#EAE3D9] overflow-hidden">
              <img src="/images/hifu-case2.webp" alt="HIFU Patient Case 02" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-[#1F1F1F]/60 backdrop-blur-sm text-white font-sans text-[10px] tracking-wider px-2 py-1 rounded uppercase z-10">Case 02</div>
              <div className="absolute bottom-4 right-4 bg-[#1F1F1F]/60 backdrop-blur-sm text-white font-sans text-[11px] px-3 py-1.5 rounded-full z-10">Laxity: Mild-to-Moderate</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[5]"></div>
            </div>
            <div className="p-6">
              <div className="font-sans text-[10px] text-[#888888] tracking-widest uppercase mb-2">MALE, 47 • SENIOR FINANCIAL SERVICES • DIFC</div>
              <div className="font-sans text-[15px] font-medium text-[#1F1F1F] mb-4 leading-[1.5]">
                "I don't want anyone to know I've had anything done."
              </div>

              <div className="mb-4">
                <div className="font-sans text-[10px] text-[#C8A87F] tracking-widest uppercase mb-1">Protocol</div>
                <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">Full face + neck HIFU with additional density on submental and jawline vectors, single session with annual maintenance.</div>
              </div>

              <div>
                <div className="font-sans text-[10px] text-[#C8A87F] tracking-widest uppercase mb-1">Outcome</div>
                <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">Session delivered efficiently (patient time-constrained), zero downtime, patient returned to office same afternoon. 90-day follow-up: visible submental and jawline improvement, patient reported spontaneous positive comments from colleagues without disclosure of treatment.</div>
              </div>
            </div>
          </div>

          {/* Case 03 */}
          <div className="bg-[#F4F0EA] rounded-xl overflow-hidden border border-[#EAE3D9]">
            <div className="relative h-[200px] bg-[#EAE3D9] overflow-hidden">
              <img src="/images/hifu-case3.webp" alt="HIFU Patient Case 03" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-[#1F1F1F]/60 backdrop-blur-sm text-white font-sans text-[10px] tracking-wider px-2 py-1 rounded uppercase z-10">Case 03</div>
              <div className="absolute bottom-4 right-4 bg-[#1F1F1F]/60 backdrop-blur-sm text-white font-sans text-[11px] px-3 py-1.5 rounded-full z-10">Laxity: Mild (Early)</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[5]"></div>
            </div>
            <div className="p-6">
              <div className="font-sans text-[10px] text-[#888888] tracking-widest uppercase mb-2">FEMALE, 33 • EMIRATI • WEDDING 5 MONTHS OUT • FITZPATRICK V</div>
              <div className="font-sans text-[15px] font-medium text-[#1F1F1F] mb-4 leading-[1.5]">
                "Preventive intervention with concern about pigmentation risk from aesthetic procedures."
              </div>

              <div className="mb-4">
                <div className="font-sans text-[10px] text-[#C8A87F] tracking-widest uppercase mb-1">Protocol</div>
                <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">Full face + neck HIFU single session at 5 months pre-wedding, combined programme with mesotherapy at 6 weeks pre-wedding.</div>
              </div>

              <div>
                <div className="font-sans text-[10px] text-[#C8A87F] tracking-widest uppercase mb-1">Outcome</div>
                <div className="font-sans text-[13px] text-[#555555] leading-[1.5]">90-day follow-up (3 months pre-wedding): visible tightening and skin quality improvement documented. Additional mesotherapy hydration session at 6 weeks pre-wedding. Wedding day: patient reported high satisfaction with skin appearance. Post-wedding: ongoing annual maintenance protocol.</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block rounded-xl overflow-hidden relative">
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuTeam = () => {
  return (
    <section className="py-20 bg-[#F4F0EA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 max-w-[900px]">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 11 • Our Team</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2] mb-6">
            Who Delivers Your HIFU at Vedara Care JVC
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#EAE3D9]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#D5C5B5] overflow-hidden flex items-center justify-center text-white font-sans text-xs">
                Image
              </div>
              <div>
                <h3 className="font-serif text-[20px] text-[#1F1F1F] m-0">Arfah Owais</h3>
                <div className="font-sans text-[12px] text-[#666666]">Primary HIFU Device Operator</div>
                <div className="font-sans text-[10px] text-[#C8A87F] tracking-wide uppercase mt-1">DHA-Licensed Aesthetician • CIBTAC-UK • HIFU Device-Certified</div>
              </div>
            </div>

            <ul className="font-sans text-[13px] text-[#555555] leading-[1.6] space-y-2 mb-6">
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>DHA-Licensed Aesthetician — Dubai Health Authority professional licence</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>CIBTAC-UK Diploma — Confederation of International Beauty Therapy and Cosmetology</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>HIFU Device-Specific Certification — manufacturer training completed and documented</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>NCLC Certified — additional aesthetic credential</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>Buccal Massage Trained / Kobido Trained — complementary facial anatomy expertise</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>8+ years hands-on aesthetic experience</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>Languages: Arabic, English, Hindi, Urdu</span></li>
            </ul>

            <div className="bg-[#F4F0EA] p-4 rounded border-l-2 border-[#C8A87F]">
              <p className="font-sans text-[14px] text-[#444444] leading-[1.5] m-0">
                "HIFU is the treatment where technique matters most. Two clinics can use the same device, the same energy setting, and get completely different outcomes because the operator hasn't mapped the treatment vectors correctly for that specific patient's anatomy. I spent significant time on device-specific training before I started delivering HIFU independently at Vedara Care JVC — this isn't a treatment where you can improvise."
              </p>
              <div className="font-sans text-[10px] text-[#888888] mt-3">— Arfah Owais, DHA-Licensed Aesthetician (CIBTAC-UK, HIFU Device-Specific Certified), Vedara Care Polyclinic JVC</div>
            </div>
          </div>

          <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#EAE3D9]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#1F1F1F] text-white flex items-center justify-center font-serif text-[24px]">
                MD
              </div>
              <div>
                <h3 className="font-serif text-[20px] text-[#1F1F1F] m-0">Medical Director</h3>
                <div className="font-sans text-[12px] text-[#666666]">DHA-Licensed Consultant Dermatologist</div>
                <div className="font-sans text-[10px] text-[#C8A87F] tracking-wide uppercase mt-1">Medical Oversight, Protocol Design & Patient Clearance</div>
              </div>
            </div>

            <div className="font-sans text-[11px] font-bold text-[#333333] mb-3 uppercase tracking-wide">Medical Director Involvement In Every HIFU Case Includes:</div>
            <ul className="font-sans text-[13px] text-[#555555] leading-[1.6] space-y-2 mb-6">
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>Consultation medical clearance — contraindication screening, laxity assessment</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>Protocol design — energy parameter design based on skin type and laxity pattern</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>Honest triage — patients better served by surgical consultation are referred</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>Adverse event management within the Medical Director's clinical governance</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>Complex case review — post-surgical, Fitzpatrick VI, relative contraindications</span></li>
              <li className="flex gap-2"><span className="text-[#C8A87F]">✓</span> <span>90-day and annual follow-up reviewed in complex cases</span></li>
            </ul>

            <div className="bg-[#F4F0EA] p-4 rounded border-l-2 border-[#C8A87F]">
              <p className="font-sans text-[14px] text-[#444444] leading-[1.5] m-0">
                "I want to be direct about who HIFU is for and who it isn't. HIFU works well for mild to moderate skin laxity in patients with reasonable skin quality and realistic expectations. It does not replace a surgical facelift for patients with severe laxity or significant excess skin. Part of my consultation responsibility is telling patients when they should see a plastic surgeon instead of booking HIFU with us. That honest triage protects patients from disappointment and protects our outcome record."
              </p>
              <div className="font-sans text-[10px] text-[#888888] mt-3">— Medical Director, DHA-Licensed Consultant Dermatologist, Vedara Care Polyclinic JVC</div>
            </div>
          </div>
        </div>

        <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#EAE3D9] mb-12">
          <h4 className="font-serif text-[18px] text-[#1F1F1F] mb-2">DHA-Licensed Nursing Support</h4>
          <p className="font-sans text-[13px] text-[#555555] m-0">
            Our DHA-Licensed Nursing team supports HIFU protocol through patient preparation (topical anaesthetic application, skin preparation), post-procedure monitoring, and documentation. Nursing is present on or call during every HIFU session per clinic protocol.
          </p>
        </div>

        <div className="bg-[#FAF7F2] rounded-xl border border-[#C8A87F]/30 p-8 md:p-10 max-w-[1200px] mx-auto text-center">
          <h3 className="font-serif text-[20px] text-[#1F1F1F] mb-2">You now know who delivers your HIFU and who provides medical oversight. Ready to meet them?</h3>
          <p className="font-sans text-[14px] text-[#555555] mb-8">
            The free consultation is with the Medical Director. If treatment is appropriate and scheduled, Arfah delivers with Medical Director-cleared protocol.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book HIFU Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center bg-[#25D366] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#1DA851] transition-colors no-underline">
              <span className="mr-2">💬</span> Ask on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['✓ DHA-Licensed', '✓ HIFU-Certified Operator', '✓ Medical Director Oversight', '✓ 8+ Years Aesthetic Experience'].map((badge, i) => (
              <span key={i} className="font-sans text-[12px] text-[#777777] bg-white px-2 py-1 rounded border border-[#EAE3D9]">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuInvestment = () => {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 max-w-[900px]">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 12 • Investment</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2] mb-4">
            HIFU Session Options and Investment at Vedara Care JVC
          </h2>
          <p className="font-sans text-[15px] text-[#444444] leading-[1.7] m-0 max-w-[800px]">
            Complete pricing published transparently below — no hidden costs, no same-day pressure. Programme course of 2 sessions delivers 15-20% savings versus single session pricing.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#EAE3D9] overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1F1F1F] text-white font-sans text-[11px] tracking-widest uppercase">
                  <th className="p-4 font-medium min-w-[250px]">Treatment Option</th>
                  <th className="p-4 font-medium min-w-[150px]">Single Session</th>
                  <th className="p-4 font-medium min-w-[150px]">Programme of 2</th>
                  <th className="p-4 font-medium min-w-[100px]">Savings</th>
                </tr>
              </thead>
              <tbody className="font-sans text-[13px] text-[#444444]">
                <tr className="border-b border-[#EAE3D9]">
                  <td className="p-4 font-medium">Consultation</td>
                  <td className="p-4">AED 300 <span className="text-[11px] text-[#888888]">(waived if proceeding)</span></td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                </tr>
                <tr className="border-b border-[#EAE3D9]">
                  <td className="p-4">Single Zone HIFU (Jawline OR Submental OR Brow)</td>
                  <td className="p-4">From AED 1,200</td>
                  <td className="p-4">From AED 2,040</td>
                  <td className="p-4 text-[#C8A87F]">Save AED 360</td>
                </tr>
                <tr className="border-b border-[#EAE3D9] bg-[#F4F0EA]">
                  <td className="p-4">Two-Zone HIFU (any combination)</td>
                  <td className="p-4">From AED 1,800</td>
                  <td className="p-4">From AED 3,060</td>
                  <td className="p-4 text-[#C8A87F]">Save AED 540</td>
                </tr>
                <tr className="border-b border-[#EAE3D9]">
                  <td className="p-4">Full Face HIFU</td>
                  <td className="p-4">From AED 2,000</td>
                  <td className="p-4">From AED 3,400</td>
                  <td className="p-4 text-[#C8A87F]">Save AED 600</td>
                </tr>
                <tr className="border-b border-[#EAE3D9] bg-[#F4F0EA]">
                  <td className="p-4 font-medium flex items-center gap-2">Full Face + Neck HIFU <span className="bg-[#C8A87F] text-white text-[10px] px-2 py-0.5 rounded uppercase tracking-wide">Popular</span></td>
                  <td className="p-4 font-medium">From AED 2,400</td>
                  <td className="p-4 font-medium">From AED 4,080</td>
                  <td className="p-4 text-[#C8A87F] font-medium">Save AED 720</td>
                </tr>
                <tr className="border-b border-[#EAE3D9]">
                  <td className="p-4">Full Face + Neck + Décolletage HIFU</td>
                  <td className="p-4">From AED 3,000</td>
                  <td className="p-4">From AED 5,100</td>
                  <td className="p-4 text-[#C8A87F]">Save AED 900</td>
                </tr>
                <tr className="border-b border-[#EAE3D9] bg-[#F4F0EA]">
                  <td className="p-4">Combined HIFU + Mesotherapy (Same Visit)</td>
                  <td className="p-4">From AED 3,200</td>
                  <td className="p-4">From AED 5,440</td>
                  <td className="p-4 text-[#C8A87F]">Save AED 960</td>
                </tr>
                <tr className="border-b border-[#EAE3D9]">
                  <td className="p-4">Combined HIFU + PRP (Same Visit)</td>
                  <td className="p-4">From AED 3,600</td>
                  <td className="p-4">From AED 6,120</td>
                  <td className="p-4 text-[#C8A87F]">Save AED 1,080</td>
                </tr>
                <tr className="border-b border-[#EAE3D9]">
                  <td className="p-4">Annual Maintenance HIFU (Existing Patient)</td>
                  <td className="p-4">10% loyalty pricing</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                </tr>
                <tr className="border-b border-[#EAE3D9]">
                  <td className="p-4">HIFU Discovery Call (10 min)</td>
                  <td className="p-4">Complimentary</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                </tr>
                <tr className="border-b border-[#EAE3D9]">
                  <td className="p-4">30-Day Follow-Up Assessment</td>
                  <td className="p-4">Included in session pricing</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                </tr>
                <tr className="border-b border-[#EAE3D9]">
                  <td className="p-4">Vector Map Documentation</td>
                  <td className="p-4">Included in session pricing</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                </tr>
                <tr>
                  <td className="p-4">Post-procedure Calming Protocol</td>
                  <td className="p-4">Included in session pricing</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#F4F0EA] border border-[#EAE3D9] p-8 rounded-xl mb-12">
          <h4 className="font-serif text-[18px] text-[#1F1F1F] mb-2">Programme Course of 2 — Why We Recommend It</h4>
          <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">
            Peer-reviewed HIFU literature documents that patients with established laxity typically benefit from two treatment sessions spaced 6–9 months apart, allowing full collagen remodelling from session 1 to occur before session 2 amplifies the response. Programme course pricing at Vedara Care JVC delivers 15–20% savings versus paying for two individual sessions. Single-session patients (preventive-only or annual maintenance) do not need this pricing structure and are not pushed toward it. The Medical Director's consultation recommendation determines appropriate protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 border border-[#EAE3D9] rounded-xl">
            <h5 className="font-sans text-[13px] font-bold text-[#1F1F1F] mb-3">Payment Methods</h5>
            <ul className="font-sans text-[13px] text-[#555555] space-y-1 pl-4 list-disc marker:text-[#C8A87F]">
              <li>Credit card</li>
              <li>Debit card</li>
              <li>Bank transfer</li>
              <li>Cash (AED)</li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-[#EAE3D9] rounded-xl">
            <h5 className="font-sans text-[13px] font-bold text-[#1F1F1F] mb-3">Payment Timing</h5>
            <ul className="font-sans text-[13px] text-[#555555] space-y-1 pl-4 list-disc marker:text-[#C8A87F]">
              <li>Consultation fee at time of consultation</li>
              <li>Treatment fee at time of session</li>
              <li>Programme: 50% at session 1, balance at session 2</li>
              <li>Full transparency upfront; 0% hidden costs</li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-[#EAE3D9] rounded-xl">
            <h5 className="font-sans text-[13px] font-bold text-[#1F1F1F] mb-3">Cancellation Policy</h5>
            <ul className="font-sans text-[13px] text-[#555555] space-y-1 pl-4 list-disc marker:text-[#C8A87F]">
              <li>48-hour advance notice required to cancel without fee</li>
              <li>Same-day cancellation / no show incurs fee / deposit forfeiture</li>
              <li>Protects reserved practitioner time</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#FAF7F2] rounded-xl border border-[#C8A87F]/30 p-8 md:p-10 max-w-[1200px] mx-auto text-center">
          <h3 className="font-serif text-[20px] text-[#1F1F1F] mb-2">You've seen the full pricing. No surprises at consultation, no hidden costs, no 'today only' pressure.</h3>
          <p className="font-sans text-[14px] text-[#555555] mb-8">
            If HIFU is the right fit for your face — and consultation determines this — you'll know the full investment before you commit.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book HIFU Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center bg-[#25D366] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#1DA851] transition-colors no-underline">
              <span className="mr-2">💬</span> Ask on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['✓ DHA-Licensed', '✓ Transparent Pricing', '✓ Programme Course Savings', '✓ Insurance Reimbursement Support'].map((badge, i) => (
              <span key={i} className="font-sans text-[12px] text-[#777777] bg-white px-3 py-1 rounded-full border border-[#EAE3D9]">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuAestheticCluster = () => {
  const treatments = [
    {
      badge: "Monthly Maintenance",
      title: "Anti-Aging Skin Firming Protocol",
      desc: "Monthly aesthetician-led non-invasive maintenance layer. Complements HIFU by maintaining skin quality between annual HIFU sessions."
    },
    {
      badge: "Regenerative",
      title: "PRP Facial",
      desc: "Physician-delivered autologous platelet-rich plasma regenerative. Combined programme with HIFU delivers structural lift + regenerative amplification."
    },
    {
      badge: "Hydration Layer",
      title: "Mesotherapy Skin Revitalization",
      desc: "Physician-delivered injection-based custom formulation. Hydration layer complementary to HIFU structural lift."
    },
    {
      badge: "Post-HIFU Adjunct",
      title: "Exosome Skin Rejuvenation",
      desc: "Topical regenerative post-procedure adjunct. Often paired with HIFU for post-session recovery amplification."
    },
    {
      badge: "Pre-HIFU Prep",
      title: "HydraFacial",
      desc: "Branded hydration facial. Ideal pre-HIFU skin preparation option and post-HIFU maintenance layer."
    },
    {
      badge: "Diagnostic Entry",
      title: "Comprehensive Skin Analysis",
      desc: "Diagnostic entry point to the full aesthetic vertical. Assessment recommendation may lead to HIFU as one component of a broader personalized programme."
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 max-w-[900px]">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">• Complementary Treatments</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2] mb-4">
            Full Vedara Care JVC Aesthetic Cluster
          </h2>
          <p className="font-sans text-[15px] text-[#444444] leading-[1.7] m-0">
            HIFU integrates with our broader aesthetic cluster as the structural lift layer. These complementary modalities are designed by the Medical Director as protocol layers, not competing sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <div key={i} className="bg-[#F4F0EA] p-6 rounded-xl border border-[#EAE3D9] hover:border-[#C8A87F] transition-colors cursor-pointer group">
              <div className="inline-block border border-[#C8A87F] text-[#C8A87F] rounded-full px-3 py-1 text-[10px] font-sans tracking-wide uppercase mb-4 group-hover:bg-[#C8A87F] group-hover:text-white transition-colors">{t.badge}</div>
              <h4 className="font-serif text-[18px] text-[#1F1F1F] mb-3">{t.title}</h4>
              <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HifuClinicInfo = () => {
  return (
    <>
      <section className="py-20 bg-[#FAF7F2]" id="clinic">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12 text-left">
            <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Section 14 • Clinic Information</div>
            <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] m-0 leading-[1.2]">How to Book HIFU at Vedara Care JVC</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-0">
            <div className="bg-transparent p-6 rounded-xl border border-[#EAE3D9]">
              <span className="text-[24px] mb-4 block text-[#C8A87F]">📍</span>
              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">Location</h3>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Vedara Care Polyclinic</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Jumeirah Village Circle (JVC), Dubai, UAE</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">↗ Walking distance from Circle Mall</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">↗ 3 min from FIVE JVC Hotel</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">↗ 5 min from JSS Private School</p>
              <p className="font-sans text-[13px] text-[#555555] m-0 leading-snug">Free parking on premises</p>
            </div>
            <div className="bg-transparent p-6 rounded-xl border border-[#EAE3D9]">
              <span className="text-[24px] mb-4 block text-[#C8A87F]">📞</span>
              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">Contact Channels</h3>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Website: vedaracare.ae/book</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">WhatsApp: Fastest confirmation channel</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Phone: Available during clinic hours</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Email: Available on website</p>
              <p className="font-sans text-[13px] text-[#555555] m-0 leading-snug">Languages: Arabic • English • Hindi • Urdu</p>
            </div>
            <div className="bg-transparent p-6 rounded-xl border border-[#EAE3D9]">
              <span className="text-[24px] mb-4 block text-[#C8A87F]">🕐</span>
              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">Availability</h3>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Consultation: typically 3–10 days out</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Peak season (autumn, Jan–Mar): 2–3 weeks</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Same-week sometimes available via WhatsApp</p>
              <p className="font-sans text-[13px] text-[#555555] m-0 leading-snug">Session scheduling: 1–2 weeks post-consultation</p>
            </div>
            <div className="bg-transparent p-6 rounded-xl border border-[#EAE3D9]">
              <span className="text-[24px] mb-4 block text-[#C8A87F]">🪪</span>
              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">DHA Licence</h3>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Dubai Health Authority licensed facility</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Multi-specialty polyclinic</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Physiotherapy • Ayurvedic Medicine</p>
              <p className="font-sans text-[13px] text-[#555555] mb-1.5 leading-snug">Beauty Therapy • Dermatology</p>
              <p className="font-sans text-[13px] text-[#555555] m-0 leading-snug">General Practice • Nursing</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#FAF7F2] border-t border-[#EAE3D9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-8">Additional Information</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">About HIFU at Vedara Care JVC</h3>
              <p className="font-sans text-[13px] text-[#555555] leading-relaxed">Vedara Care Polyclinic in Jumeirah Village Circle (JVC) Dubai delivers HIFU skin lifting and tightening under a hybrid protocol: primary device operation by Arfah Owais (DHA-Licensed Aesthetician, HIFU device-certified, CIBTAC-UK, 8+ years experience) with medical oversight, patient clearance, and protocol design by our DHA-Licensed Consultant Dermatologist Medical Director. Sessions from AED 2,400 full face + neck.</p>
            </div>
            <div>
              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">HIFU vs Surgical Facelift</h3>
              <p className="font-sans text-[13px] text-[#555555] leading-relaxed">HIFU addresses the same SMAS tissue layer as surgical facelift, delivered through focused ultrasound at 4.5mm depth rather than surgical incision and re-suspension. HIFU is appropriate for mild-to-moderate skin laxity. It does not replace surgical facelift for severe laxity or significant excess skin. Our Medical Director's consultation includes explicit triage.</p>
            </div>
            <div>
              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">HIFU for South Asian, Middle Eastern &amp; Emirati Skin</h3>
              <p className="font-sans text-[13px] text-[#555555] leading-relaxed">HIFU does not target melanin (unlike some laser modalities), so there is no increased risk of post-inflammatory hyperpigmentation in darker skin phototypes (Fitzpatrick IV–VI). Peer-reviewed evidence (Suh et al., Dermatologic Surgery 2011) specifically documents HIFU efficacy in Asian skin. Multilingual care team: Arabic, English, Hindi, Urdu.</p>
            </div>
            <div>
              <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-3">HIFU Pricing Transparency in Dubai</h3>
              <p className="font-sans text-[13px] text-[#555555] leading-relaxed">Vedara Care Polyclinic JVC publishes complete HIFU pricing: single-zone from AED 1,200, full face from AED 2,000, full face + neck from AED 2,400, full face + neck + décolletage from AED 3,000. Programme course of 2 sessions delivers 15–20% savings. Consultation fee AED 300 (waived if proceeding). No hidden costs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const HifuFaq = () => {
  const faqs = [
    { q: "How much does HIFU cost at Vedara Care JVC?", a: "HIFU at Vedara Care Polyclinic JVC starts from AED 1,200 for single-zone treatment, from AED 2,000 for full face, from AED 2,400 for full face + neck, and from AED 3,000 for full face + neck + décolletage. Programme course of 2 sessions delivers 15-20% savings. First consultation is AED 300 (waived if you proceed with treatment)." },
    { q: "Is HIFU safe? What are the risks?", a: "HIFU is generally well-tolerated with a favourable safety profile documented in peer-reviewed literature. Common minor effects (typically resolving within 24-72 hours) include mild redness, slight tenderness, temporary tingling. Vedara Care JVC HIFU protocol includes Medical Director medical clearance for every patient and HIFU device-certified operator delivery. Contraindications are screened at consultation." },
    { q: "How many HIFU sessions do I need?", a: "Most patients require either a single session (preventive-oriented or annual maintenance) or a programme course of 2 sessions spaced 6-9 months apart (established laxity). The Medical Director's consultation assessment determines which protocol is appropriate for your specific case — this is not sold as a fixed package." },
    { q: "What is the recovery time from HIFU?", a: "Zero clinical downtime. Patients typically return to normal activity the same day. Mild redness or slight tenderness may be present 24-72 hours post-session. Makeup can be applied the next day. Sun protection SPF 50+ for 2 weeks, gentle skincare for 5-7 days, no vigorous exercise for 24 hours." },
    { q: "Does HIFU hurt?", a: "HIFU sensation varies by depth. The 4.5mm SMAS-targeting cartridge produces the most intense sensation — brief warm or prickling with each ultrasound pulse. At Vedara Care JVC, topical numbing is applied 30-45 minutes before treatment. Most patients describe HIFU as manageable 4-6 out of 10 discomfort for the deepest cartridge." },
    { q: "How does HIFU compare to a surgical facelift?", a: "HIFU targets the same SMAS tissue layer that surgical facelift addresses, but through focused ultrasound rather than surgical incision. HIFU is appropriate for mild-to-moderate laxity in patients with reasonable skin quality; it does not replace surgical facelift for severe laxity. Our Medical Director's consultation includes explicit triage — patients better served by surgical consultation are referred rather than accepted for HIFU." },
    { q: "How does HIFU compare to RF (radiofrequency) skin tightening?", a: "HIFU uses focused ultrasound at fixed depths (1.5mm/3.0mm/4.5mm) with SMAS-layer targeting; RF uses electromagnetic energy that heats the dermis less selectively. HIFU is generally single-session or programme course of 2; RF typically requires a series of 4-6 sessions. HIFU produces more structural lift; RF produces more subtle skin quality firming." },
    { q: "How does HIFU compare to thread lift?", a: "Thread lift is a minimally invasive procedure inserting dissolvable barbed sutures — immediate visible lift, 12-18 month durability, requires local anaesthesia, 3-7 days recovery with possible bruising. HIFU is non-invasive with gradual result over 60-90 days, zero downtime. Different modalities for different patient priorities." },
    { q: "How long do HIFU results last?", a: "Result durability at 12-18 months is typical in appropriate candidates with reasonable aftercare compliance. Individual durability depends on baseline skin quality, age, lifestyle factors, and general aging progression. Annual maintenance sessions are recommended to extend and refine results." },
    { q: "When will I see results from HIFU?", a: "Initial subtle tightening: 2-4 weeks post-session. Peak result: 60-90 days post-session (peak collagen remodelling). Continued improvement to 6 months. This gradual timeline is why we photograph baseline and 90-day — the actual HIFU result is not visible immediately after treatment." },
    { q: "Can I have HIFU if I have dark skin (Fitzpatrick IV-VI)?", a: "Yes. HIFU does not target melanin (unlike some laser modalities), so there is no increased risk of post-inflammatory hyperpigmentation in darker skin phototypes. The Suh et al. 2011 study specifically documented HIFU efficacy in Asian (Fitzpatrick IV-V) skin. Our Medical Director assesses individual patient factors at consultation." },
    { q: "Can men have HIFU?", a: "Yes. HIFU is appropriate for male patients addressing jawline definition, submental (double chin) laxity, and general facial skin quality. Male HIFU is a growing demographic in Dubai. Same protocol structure, same Medical Director oversight, same transparent pricing." },
    { q: "Is HIFU safe during pregnancy?", a: "No. Vedara Care JVC does not perform HIFU during pregnancy or breastfeeding. No safety data supports HIFU during pregnancy; theoretical caution applies. Post-pregnancy and post-breastfeeding, HIFU is appropriate once weight has stabilized." },
    { q: "Does insurance cover HIFU in Dubai?", a: "HIFU is typically classified as elective aesthetic and not routinely covered by UAE health insurance. Vedara Care Polyclinic JVC operates on insurance reimbursement basis (not direct billing) for aesthetic procedures. Complimentary documentation supporting reimbursement enquiry is provided on request." },
    { q: "Can HIFU be combined with other treatments (mesotherapy, PRP, filler)?", a: "Yes. HIFU is compatible with mesotherapy, PRP, and dermal filler in combined programme protocols. Spacing and sequencing designed by the Medical Director. Same-visit combined sessions available (HIFU + mesotherapy, HIFU + PRP). HIFU + filler typically sequenced across separate visits." },
    { q: "What age should I start HIFU?", a: "HIFU is rarely appropriate for patients under 25. Preventive-oriented HIFU can begin in the early 30s. Corrective HIFU is most impactful for mid-30s through mid-60s patients. Age over 65 is assessed case-by-case. The Medical Director's consultation assessment determines appropriateness at your specific age." },
    { q: "Where is Vedara Care Polyclinic JVC located?", a: "Vedara Care Polyclinic is in Jumeirah Village Circle, Dubai — walking distance from Circle Mall, 3 minutes from FIVE Jumeirah Village Hotel, 5 minutes from JSS Private School. DHA-licensed multi-specialty facility. Free parking available." },
    { q: "What if I have a bad reaction to HIFU?", a: "Adverse events from HIFU are rare and typically minor. Any adverse event is managed within the Medical Director's clinical governance at Vedara Care JVC. Contact clinic immediately if you experience unusual reactions post-session. Serious complications are managed with appropriate escalation and referral if required." },
    { q: "Is HIFU better than HIFU facial packages offered elsewhere?", a: "The term HIFU facial is used variably in Dubai — sometimes for genuine medical-grade HIFU, sometimes for lower-energy consumer-device treatments. Vedara Care JVC HIFU protocol uses medical-grade device with three-depth cartridge delivery, device-specific operator certification, and Medical Director oversight. Verify what any provider is actually delivering when comparing pricing." },
    { q: "How do I book a HIFU consultation at Vedara Care JVC?", a: "Use the Book HIFU Consultation button on this page, message on WhatsApp, or call the clinic. Free 30-minute consultation with the Medical Director. Consultation slots typically book 2-3 weeks in advance during peak seasons. WhatsApp is the fastest confirmation channel." }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2]" id="faq">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-10 max-w-[900px]">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">Section 13 • FAQ</div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-[#1F1F1F] leading-[1.2] max-w-2xl">
            HIFU Skin Lifting & Tightening at Vedara Care JVC — Your Questions Answered
          </h2>
        </div>

        <div className="space-y-4 mb-12 max-w-[1200px]">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#F4F0EA] p-6 md:p-8 rounded-xl border border-[#EAE3D9]/50">
              <h3 className="font-sans font-bold text-[15px] text-[#1F1F1F] mb-3">Q: {faq.q}</h3>
              <p className="font-sans text-[14px] text-[#555555] leading-relaxed m-0">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl p-8 text-center bg-[#1F1F1F] border border-[#C8A87F]/20 max-w-[1200px]">
          <p className="font-serif text-[20px] text-white mb-2">20 questions answered.</p>
          <p className="font-sans text-white/70 text-[14px] mb-6">If the 20th is "when can I book a consultation?" — that's the right question to ask next.</p>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <Link href="\book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
              Book HIFU Consultation
            </Link>
            <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center bg-[#25D366] text-white font-sans text-[14px] font-medium px-8 py-3.5 rounded hover:bg-[#1DA851] transition-colors no-underline">
              <span className="mr-2">💬</span> Ask on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['✓ DHA-Licensed', '✓ Medical Director Oversight', '✓ Honest Triage', '✓ Transparent Pricing'].map((badge, i) => (
              <span key={i} className="font-sans text-[12px] px-2 py-0.5 rounded-full bg-[#C8A87F]/15 text-[#C8A87F] border border-[#C8A87F]/30">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HifuFinalCta = () => {
  return (
    <section className="py-20 bg-[#1F1F1F]" id="book">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">Section 15 • Final CTA</div>
          <h2 className="font-serif text-[32px] md:text-[48px] font-normal text-white mb-4 leading-[1.2]">
            Ready to Book Your HIFU<br />
            <span className="text-[#C8A87F]">Consultation at Vedara Care JVC?</span>
          </h2>
          <p className="font-sans text-white/70 text-[16px] md:text-[18px] m-0">Your free 30-minute consultation with our Medical Director includes:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="rounded-xl p-6 md:p-8 bg-white/5 border border-[#C8A87F]/25">
            <h3 className="font-serif text-[20px] font-semibold text-white mb-5">Consultation Value Stack</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="font-sans text-[14px] shrink-0 mt-0.5 text-[#C8A87F]">✓</span>
                <p className="font-sans text-[14px] text-white/80 leading-snug m-0">Comprehensive skin laxity assessment by DHA-Licensed Consultant Dermatologist Medical Director</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-sans text-[14px] shrink-0 mt-0.5 text-[#C8A87F]">✓</span>
                <p className="font-sans text-[14px] text-white/80 leading-snug m-0">Medical clearance and contraindication screening — patient safety first</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-sans text-[14px] shrink-0 mt-0.5 text-[#C8A87F]">✓</span>
                <p className="font-sans text-[14px] text-white/80 leading-snug m-0">Photography for baseline comparison if you proceed with treatment</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-sans text-[14px] shrink-0 mt-0.5 text-[#C8A87F]">✓</span>
                <p className="font-sans text-[14px] text-white/80 leading-snug m-0">HIFU vector mapping planned by Arfah — device-certified aesthetician</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-sans text-[14px] shrink-0 mt-0.5 text-[#C8A87F]">✓</span>
                <p className="font-sans text-[14px] text-white/80 leading-snug m-0">Personalized protocol design — single session vs programme course, treatment zones, cartridge sequence</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-sans text-[14px] shrink-0 mt-0.5 text-[#C8A87F]">✓</span>
                <p className="font-sans text-[14px] text-white/80 leading-snug m-0">Transparent pricing with programme course savings math — no upsell pressure</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-sans text-[14px] shrink-0 mt-0.5 text-[#C8A87F]">✓</span>
                <p className="font-sans text-[14px] text-white/80 leading-snug m-0">Aftercare guidance and realistic result timeline — 60–90 day peak, 12–18 month durability</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-sans text-[14px] shrink-0 mt-0.5 text-[#C8A87F]">✓</span>
                <p className="font-sans text-[14px] text-white/80 leading-snug m-0">No commitment to proceed with treatment — honest triage always available</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-sans text-[14px] shrink-0 mt-0.5 text-[#C8A87F]">✓</span>
                <p className="font-sans text-[14px] text-white/80 leading-snug m-0">Written treatment plan and pricing document to take home</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg text-[14px] font-sans bg-[#C8A87F]/10 border border-[#C8A87F]/25">
              <span className="font-semibold text-white">Consultation Fee:</span> <span className="text-[#C8A87F]">AED 300</span>
              <span className="text-white/60 text-[12px] ml-1 block mt-1 md:inline md:mt-0">(waived if you proceed with treatment within 60 days)</span>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4 mb-96">
              <Link href="\book" className="inline-flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[16px] font-medium w-full py-4 rounded hover:bg-[#B5956C] transition-colors no-underline">
                Book HIFU Consultation
              </Link>
              <a href="https://wa.me/971555736312" target="_blank" className="inline-flex items-center justify-center bg-[#25D366] text-white font-sans text-[16px] font-medium w-full py-4 rounded hover:bg-[#1DA851] transition-colors no-underline">
                <span className="mr-2">💬</span> Ask on WhatsApp
              </a>

            </div>

            <div className="p-4 rounded-lg text-[13px] font-sans bg-[#C8A87F]/10 border border-[#C8A87F]/20">
              <p className="font-semibold mb-1 text-[#C8A87F] m-0">Availability Note</p>
              <p className="text-white/60 m-0">Consultation slots typically book 2–3 weeks in advance during peak seasons. Programme course scheduling is planned across the year based on your protocol design.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {['✓ DHA-Licensed Facility', '✓ HIFU Device-Certified Operator', '✓ Medical Director Oversight', '✓ 8+ Years Aesthetic Experience', '✓ Consultation-First', '✓ No Same-Day Pressure', '✓ Insurance Reimbursement Support', '✓ Honest Triage', '✓ Transparent Pricing', '✓ Peer-Reviewed Evidence-Based'].map((badge, i) => (
            <span key={i} className="font-sans text-[12px] font-medium px-3 py-1 rounded-full bg-[#C8A87F]/10 text-[#C8A87F] border border-[#C8A87F]/25">{badge}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HifuPopup = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[340px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#EAE3D9] p-5 animate-fade-in-up font-sans">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-[#777777] hover:text-[#1F1F1F] transition-colors"
        aria-label="Close"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l12 12M13 1L1 13" />
        </svg>
      </button>

      <h4 className="font-serif text-[16px] text-[#1F1F1F] mb-1 pr-6 leading-tight">HIFU Full Face + Neck Programme</h4>

      <div className="mt-3 mb-2">
        <span className="font-sans text-[15px] font-bold text-[#1F1F1F]">From AED 2,400 <span className="text-[#555555] font-normal text-[13px]">/ session</span></span>
      </div>

      <p className="font-sans text-[11px] text-[#555555] leading-relaxed mb-4">
        Programme course savings available.<br />
        Consultation AED 300 (waived on booking)
      </p>

      <div className="flex flex-col gap-2 mb-4">
        <Link href="/book" className="flex items-center justify-center bg-[#C8A87F] text-white font-sans text-[13px] font-medium py-2.5 rounded hover:bg-[#B5956C] transition-colors no-underline">
          Book Consultation
        </Link>
        <a href="https://wa.me/971555736312" target="_blank" className="flex items-center justify-center bg-[#25D366] text-white font-sans text-[13px] font-medium py-2.5 rounded hover:bg-[#1DA851] transition-colors no-underline">
          <span className="mr-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
            </svg>
          </span>
          Ask on WhatsApp
        </a>
      </div>

      <div className="flex flex-wrap gap-1.5">
        <span className="font-sans text-[10px] text-[#777777] bg-[#F4F0EA] px-2 py-1 rounded-full border border-[#EAE3D9]">✓ DHA-Licensed</span>
        <span className="font-sans text-[10px] text-[#777777] bg-[#F4F0EA] px-2 py-1 rounded-full border border-[#EAE3D9]">✓ Medical Director</span>
        <span className="font-sans text-[10px] text-[#777777] bg-[#F4F0EA] px-2 py-1 rounded-full border border-[#EAE3D9]">✓ Consultation-First</span>
      </div>
    </div>
  );
};
