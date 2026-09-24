import React, { useState } from 'react';
import Link from 'next/link';

export const FastFacts = () => {
  const facts = [
    { label: "WHAT IT IS", value: "Autologous PRP — your own concentrated platelets with growth factor cargo" },
    { label: "PRIMARY PRACTITIONER", value: "Medical Director, DHA-Licensed Consultant Dermatologist" },
    { label: "SUPPORT TEAM", value: "Arfah Owais (aesthetician) · DHA-Licensed Nursing (blood draw)" },
    { label: "DURATION", value: "60–90 min standalone · 90–120 min with microneedling adjunct" },
    { label: "DOWNTIME", value: "24–72 hours — mild swelling, small injection marks, occasional bruising" },
    { label: "CADENCE", value: "3 sessions at 4–6 week intervals · maintenance every 6–12 months" }
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 px-6">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">AT A GLANCE</p>
        <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-10">Fast Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 cardBgColor-[#F5F0E8]">
          {facts.map((fact, index) => (
            <div key={index} className="bg-[#F5F0E8] p-6 border-b lg:border-b-0 lg:border-r border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
              <p className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#A69B8D] uppercase mb-2">{fact.label}</p>
              <p className="text-[15px] font-sans text-[#4A4A4A] leading-relaxed">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyChoosePrp = () => {
  const reasons = [
    {
      title: "Physician-primary delivery",
      desc: "PRP at Vedara Care JVC is delivered by the Medical Director (DHA-Licensed Consultant Dermatologist). This is a medical procedure, not an aesthetician-scope facial — we are explicit about this distinction because it matters for outcome and safety."
    },
    {
      title: "FDA-cleared preparation & double-spin protocol",
      desc: "PRP preparation quality depends on centrifugation protocol and device. Vedara Care JVC uses FDA-cleared centrifugation kits with a double-spin protocol producing pure platelet concentrate suitable for aesthetic indication."
    },
    {
      title: "Multiple delivery techniques",
      desc: "Medical Director delivers PRP via microdroplet mesotherapy (surface skin quality), cannula (periorbital and neck indications), or microneedling adjunct (surface texture and scar remodeling) — selected per indication."
    },
    {
      title: "Integrated aesthetic team support",
      desc: "Arfah Owais (DHA-Licensed Aesthetician) provides pre-procedure skin analysis, integrates PRP sessions into broader Anti-Aging Protocol programmes, and coordinates post-procedure care. You are not passed between disconnected practitioners."
    },
    {
      title: "Honest positioning — including when PRP is not the right pathway",
      desc: "Consultation may result in the Medical Director recommending an alternative modality (exosome, mesotherapy, filler, laser) if that better fits your indication. We do not upsell PRP where it is not the best fit."
    },
    {
      title: "JVC location — Dubai-wide catchment",
      desc: "Walking distance to Circle Mall, three minutes from FIVE Jumeirah Village Hotel. Accessible to Dubai Marina, JLT, Al Barsha, Motor City, Sports City, and broader Dubai. Languages: Arabic, English, Hindi, Urdu."
    }
  ];

  return (
    <section className="bg-[#F0EBE3] py-20 px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">WHY VEDARA CARE JVC</p>
          <h2 className="text-3xl md:text-[40px] font-serif text-[#1A1A1A] leading-tight mb-6">
            Six reasons patients choose our PRP programme
          </h2>
          <p className="text-[15px] font-sans text-[#4A4A4A] mb-8 leading-relaxed">
            Physician-primary delivery · FDA-cleared preparation · transparent scope · integrated care.
          </p>
          <div className="bg-white p-6 rounded-[8px] shadow-sm border border-gray-100 border-l-4 border-l-[#C9A961]">
            <p className="text-[15px] font-sans italic text-[#4A4A4A]">
              "PRP at Vedara Care JVC is delivered by the Medical Director — that's clear physician scope."
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-6 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                <span className="text-[15px] font-sans font-bold text-[#C9A961] pt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[20px] font-serif text-[#1A1A1A] mb-2">{reason.title}</h3>
                  <p className="text-[15px] font-sans text-[#4A4A4A] leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const UnderstandingPrp = () => {
  const [activeTab, setActiveTab] = useState('mechanism');

  const tabs = [
    { id: 'mechanism', label: 'Mechanism' },
    { id: 'classification', label: 'Classification' },
    { id: 'delivery', label: 'Delivery Techniques' },
    { id: 'comparison', label: 'Comparison' }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">Understanding PRP</div>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] mb-3 tracking-[-0.01em] leading-tight">Mechanism, Preparation, and Delivery</h2>
          <p className="font-sans text-[15px] text-[#555555] max-w-[600px] leading-[1.65] m-0">
            PRP concentrates your own platelets — cells carrying growth factor cargo — and delivers them to target tissue via physician injection to drive regenerative response.
          </p>
        </div>

        <div className="flex gap-0 border-b border-[#E8E1D8] mb-12 overflow-x-auto overflow-y-hidden no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-sans text-[13px] bg-transparent cursor-pointer py-3 px-5 whitespace-nowrap -mb-[1px] transition-colors border-b-2 ${
                activeTab === tab.id 
                  ? 'font-medium text-[#1F1F1F] border-[#C8A87F]' 
                  : 'font-normal text-[#777777] border-transparent hover:text-[#1F1F1F]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'mechanism' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <h3 className="font-serif text-[22px] font-normal text-[#1F1F1F] m-0 mb-5">Growth Factor Cargo</h3>
                <div className="flex flex-col gap-0">
                  <div className="grid grid-cols-[64px_1fr] gap-4 py-4 border-b border-[#EDE6DC] items-start">
                    <div className="font-serif text-[14px] font-medium text-[#C8A87F] pt-[2px]">PDGF</div>
                    <div>
                      <div className="font-sans text-[12px] text-[#777777] mb-[3px]">Platelet-Derived Growth Factor</div>
                      <div className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">Stimulates fibroblast proliferation, collagen synthesis</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[64px_1fr] gap-4 py-4 border-b border-[#EDE6DC] items-start">
                    <div className="font-serif text-[14px] font-medium text-[#C8A87F] pt-[2px]">VEGF</div>
                    <div>
                      <div className="font-sans text-[12px] text-[#777777] mb-[3px]">Vascular Endothelial Growth Factor</div>
                      <div className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">Drives angiogenesis — new blood vessel formation</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[64px_1fr] gap-4 py-4 border-b border-[#EDE6DC] items-start">
                    <div className="font-serif text-[14px] font-medium text-[#C8A87F] pt-[2px]">TGF-β</div>
                    <div>
                      <div className="font-sans text-[12px] text-[#777777] mb-[3px]">Transforming Growth Factor Beta</div>
                      <div className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">Modulates fibroblast activity, collagen remodeling</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[64px_1fr] gap-4 py-4 border-b border-[#EDE6DC] items-start">
                    <div className="font-serif text-[14px] font-medium text-[#C8A87F] pt-[2px]">EGF</div>
                    <div>
                      <div className="font-sans text-[12px] text-[#777777] mb-[3px]">Epidermal Growth Factor</div>
                      <div className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">Stimulates keratinocyte proliferation</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[64px_1fr] gap-4 py-4 border-b border-[#EDE6DC] items-start">
                    <div className="font-serif text-[14px] font-medium text-[#C8A87F] pt-[2px]">IGF</div>
                    <div>
                      <div className="font-sans text-[12px] text-[#777777] mb-[3px]">Insulin-like Growth Factor</div>
                      <div className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">Supports cellular proliferation and survival</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[64px_1fr] gap-4 py-4 border-b-0 items-start">
                    <div className="font-serif text-[14px] font-medium text-[#C8A87F] pt-[2px]">FGF</div>
                    <div>
                      <div className="font-sans text-[12px] text-[#777777] mb-[3px]">Fibroblast Growth Factor</div>
                      <div className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">Additional fibroblast stimulation</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-[22px] font-normal text-[#1F1F1F] m-0 mb-5">The Mechanism Chain</h3>
                <div className="flex flex-col gap-0">
                  <div className="flex gap-4 py-3 border-b border-[#EDE6DC] items-start">
                    <span className="font-serif text-[12px] text-[#C8A87F] min-w-[20px] pt-[2px] font-light">01</span>
                    <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.6]">PRP injected into skin via chosen technique</span>
                  </div>
                  <div className="flex gap-4 py-3 border-b border-[#EDE6DC] items-start">
                    <span className="font-serif text-[12px] text-[#C8A87F] min-w-[20px] pt-[2px] font-light">02</span>
                    <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.6]">Platelets activate at injection site (calcium exposure from tissue, fibrin activation)</span>
                  </div>
                  <div className="flex gap-4 py-3 border-b border-[#EDE6DC] items-start">
                    <span className="font-serif text-[12px] text-[#C8A87F] min-w-[20px] pt-[2px] font-light">03</span>
                    <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.6]">Alpha granules release growth factor cargo</span>
                  </div>
                  <div className="flex gap-4 py-3 border-b border-[#EDE6DC] items-start">
                    <span className="font-serif text-[12px] text-[#C8A87F] min-w-[20px] pt-[2px] font-light">04</span>
                    <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.6]">Growth factors bind to receptors on nearby cells (fibroblasts, keratinocytes, endothelial cells)</span>
                  </div>
                  <div className="flex gap-4 py-3 border-b border-[#EDE6DC] items-start">
                    <span className="font-serif text-[12px] text-[#C8A87F] min-w-[20px] pt-[2px] font-light">05</span>
                    <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.6]">Downstream signaling drives collagen synthesis, elastin remodeling, angiogenesis, wound healing</span>
                  </div>
                  <div className="flex gap-4 py-3 border-b border-[#EDE6DC] items-start">
                    <span className="font-serif text-[12px] text-[#C8A87F] min-w-[20px] pt-[2px] font-light">06</span>
                    <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.6]">Immediate: mild inflammatory response — this is part of the wound healing cascade</span>
                  </div>
                  <div className="flex gap-4 py-3 border-b border-[#EDE6DC] items-start">
                    <span className="font-serif text-[12px] text-[#C8A87F] min-w-[20px] pt-[2px] font-light">07</span>
                    <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.6]">Cumulative effect over 4-12 weeks post-session as collagen matures</span>
                  </div>
                  <div className="flex gap-4 py-3 border-b-0 items-start">
                    <span className="font-serif text-[12px] text-[#C8A87F] min-w-[20px] pt-[2px] font-light">08</span>
                    <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.6]">Programme effect across 3 sessions — cumulative dermal remodeling</span>
                  </div>
                </div>

                <div className="mt-7 p-5 bg-[#F5F0E8] rounded-lg border-l-[3px] border-[#C8A87F]">
                  <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.1em] uppercase mb-2">Evidence base</div>
                  <p className="font-sans text-[13px] text-[#555555] leading-[1.65] m-0">Alves & Grimalt (Skin Appendage Disorders, 2018) · Cameli et al. (Dermatologic Surgery, 2017) · Everts et al. (Int. J. Molecular Sciences, 2020) · Marx RE (JOMS, 2004)</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'classification' && (
            <div>
              <p className="text-[15px] font-sans text-[#4A4A4A] max-w-3xl mb-8">
                The peer-reviewed literature classifies PRP preparations by leukocyte content and platelet concentration. Not all PRP is the same — preparation protocol, device, and centrifugation parameters significantly affect outcome.
              </p>
              <div className="space-y-4">
                <div className="border border-[#C9A961] bg-white p-6 rounded-[8px] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[16px] text-[#1A1A1A]">P-PRP (Pure PRP)</h4>
                    <div className="flex gap-6 mt-2 text-[14px]">
                      <div><span className="text-[#A69B8D] text-[11px] uppercase block">Leukocytes</span> Low</div>
                      <div><span className="text-[#A69B8D] text-[11px] uppercase block">Platelet Conc.</span> Moderate-High</div>
                    </div>
                  </div>
                  <div className="text-[15px] text-[#4A4A4A] md:text-right flex-1">
                    Aesthetic dermatology — preferred (lower inflammatory response)
                  </div>
                  <div className="bg-[#C9A961] text-white text-[11px] px-3 py-1 rounded-full uppercase font-bold tracking-wider">
                    Vedara Protocol
                  </div>
                </div>
                <div className="border border-gray-200 bg-white p-6 rounded-[8px] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[16px] text-[#1A1A1A]">L-PRP (Leukocyte-Rich PRP)</h4>
                    <div className="flex gap-6 mt-2 text-[14px]">
                      <div><span className="text-[#A69B8D] text-[11px] uppercase block">Leukocytes</span> High</div>
                      <div><span className="text-[#A69B8D] text-[11px] uppercase block">Platelet Conc.</span> High</div>
                    </div>
                  </div>
                  <div className="text-[15px] text-[#4A4A4A] md:text-right flex-1">
                    Orthopedic and musculoskeletal — less common in aesthetic
                  </div>
                </div>
                <div className="border border-gray-200 bg-white p-6 rounded-[8px] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[16px] text-[#1A1A1A]">P-PRF / L-PRF</h4>
                    <div className="flex gap-6 mt-2 text-[14px]">
                      <div><span className="text-[#A69B8D] text-[11px] uppercase block">Leukocytes</span> Variable</div>
                      <div><span className="text-[#A69B8D] text-[11px] uppercase block">Platelet Conc.</span> High + fibrin matrix</div>
                    </div>
                  </div>
                  <div className="text-[15px] text-[#4A4A4A] md:text-right flex-1">
                    Longer release kinetics — different mechanical properties
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'delivery' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 md:p-8 rounded-[4px] border border-[#E8E0CD]">
                <h4 className="font-serif font-bold text-[20px] text-[#1A1A1A] mb-1">Microdroplet Mesotherapy</h4>
                <p className="text-[11px] font-sans font-bold text-[#A69B8D] uppercase tracking-wider mb-6">DEPTH: 1-2MM DERMAL</p>

                <p className="text-[10px] font-sans font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">INDICATION</p>
                <p className="text-[14px] font-bold text-[#1A1A1A] mb-4">Surface skin quality — texture, fine lines, overall dermal thickness</p>

                <p className="text-[14px] font-sans text-[#4A4A4A] leading-relaxed">Multiple small-volume injections across treatment area at consistent depth.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[4px] border border-[#E8E0CD]">
                <h4 className="font-serif font-bold text-[20px] text-[#1A1A1A] mb-1">Cannula Technique</h4>
                <p className="text-[11px] font-sans font-bold text-[#A69B8D] uppercase tracking-wider mb-6">DEPTH: SINGLE ENTRY POINT PER AREA</p>

                <p className="text-[10px] font-sans font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">INDICATION</p>
                <p className="text-[14px] font-bold text-[#1A1A1A] mb-4">Periorbital rejuvenation, neck, décolleté</p>

                <p className="text-[14px] font-sans text-[#4A4A4A] leading-relaxed">Blunt-tipped cannula introduced through single entry point, PRP distributed through cannula. Suited to delicate periorbital dermis.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[4px] border border-[#E8E0CD]">
                <h4 className="font-serif font-bold text-[20px] text-[#1A1A1A] mb-1">Microneedling Adjunct</h4>
                <p className="text-[11px] font-sans font-bold text-[#A69B8D] uppercase tracking-wider mb-6">DEPTH: 1.5-2.0MM (PHYSICIAN SCOPE)</p>

                <p className="text-[10px] font-sans font-bold text-[#6B6B6B] uppercase tracking-wider mb-1">INDICATION</p>
                <p className="text-[14px] font-bold text-[#1A1A1A] mb-4">Atrophic acne scar remodeling, comprehensive texture</p>

                <p className="text-[14px] font-sans text-[#4A4A4A] leading-relaxed">Physician-scope microneedling with PRP applied topically during microchannel window, and/or injected in mesotherapy pattern post-microneedling.</p>
              </div>
            </div>
          )}
          {activeTab === 'comparison' && (
            <div className="overflow-x-auto mt-4">
              <p className="text-[14px] font-sans italic text-[#6B6B6B] mb-6">
                Honest neutral comparison — no absolute claim on which modality is "best." Selection depends on indication, practitioner scope, and Medical Director assessment.
              </p>
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 font-bold text-[11px] text-[#A69B8D] uppercase tracking-wider">ATTRIBUTE</th>
                    <th className="py-4 px-4 font-bold text-[11px] text-[#C9A961] uppercase tracking-wider">PRP FACIAL</th>
                    <th className="py-4 px-4 font-bold text-[11px] text-[#A69B8D] uppercase tracking-wider">EXOSOME (TOPICAL)</th>
                    <th className="py-4 px-4 font-bold text-[11px] text-[#A69B8D] uppercase tracking-wider">MESOTHERAPY</th>
                    <th className="py-4 px-4 font-bold text-[11px] text-[#A69B8D] uppercase tracking-wider">DERMAL FILLER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E8E0CD] hover:bg-white transition-colors">
                    <td className="py-5 px-4 font-bold text-[13px] text-[#1A1A1A]">Origin</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Autologous (your own blood)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Exogenous product (plant/platelet/MSC-derived)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Custom formulation (vitamins, peptides, HA)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Exogenous (hyaluronic acid crosslinked)</td>
                  </tr>
                  <tr className="border-b border-[#E8E0CD] hover:bg-white transition-colors">
                    <td className="py-5 px-4 font-bold text-[13px] text-[#1A1A1A]">Delivery method</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Injection (microdroplet, cannula, or microneedling adjunct)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Topical + microchannel window</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Injection (dermal)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Injection (dermal or subdermal)</td>
                  </tr>
                  <tr className="border-b border-[#E8E0CD] hover:bg-white transition-colors">
                    <td className="py-5 px-4 font-bold text-[13px] text-[#1A1A1A]">Practitioner scope</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Physician (Consultant Dermatologist)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Aesthetician (topical) / physician (invasive)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Physician</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Physician (aesthetic-trained)</td>
                  </tr>
                  <tr className="border-b border-[#E8E0CD] hover:bg-white transition-colors">
                    <td className="py-5 px-4 font-bold text-[13px] text-[#1A1A1A]">Downtime</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">24-72h (swelling, injection marks, occasional bruising)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Minimal standalone / 24-72h adjunct</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">24-48h (injection marks, mild swelling)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">24-72h (swelling, occasional bruising)</td>
                  </tr>
                  <tr className="border-b border-[#E8E0CD] hover:bg-white transition-colors">
                    <td className="py-5 px-4 font-bold text-[13px] text-[#1A1A1A]">Effect timing</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Builds across 4-12 weeks, cumulative across course</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Immediate barrier / cumulative regenerative</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Immediate hydration / cumulative texture</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Immediate volume (visible at session)</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors">
                    <td className="py-5 px-4 font-bold text-[13px] text-[#1A1A1A]">Evidence base</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Extensive peer-reviewed (Alves 2018, Cameli 2017, Everts 2020)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Emerging (Kim 2017, Cho 2018, Zhang 2020)</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Formulation-specific literature</td>
                    <td className="py-5 px-4 text-[13px] text-[#4A4A4A]">Extensive peer-reviewed and post-market data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const TwelvePatientPopulations = () => {
  const populations = [
    { num: "01", title: "Mature Skin Regenerative Pathway", age: "AGE 40-60", desc: "Seeking autologous regenerative approach rather than exogenous filler-first pathway. PRP addresses dermal quality — thickness, texture, tone — through cumulative collagen and elastin remodeling across a 3-session course." },
    { num: "02", title: "Post-Acne Atrophic Scar Remodeling", age: "AGE 25-45", desc: "Following acne resolution during scar remodeling phase. PRP paired with physician-delivered microneedling drives collagen remodeling within atrophic scar tissue. Typically 3-6 sessions with periodic reassessment." },
    { num: "03", title: "Periorbital Rejuvenation and Dark Circles", age: "AGE 30-50", desc: "Under-eye area with visible dermal thinning, tear trough shadowing, dark circle indication. PRP delivered via cannula technique supports periorbital dermal thickening. Alternative to filler for clients preferring autologous approach." },
    { num: "04", title: "Neck and Décolleté Rejuvenation", age: "AGE 40-60", desc: "Crepe skin, dermal thinning, sun-damage indication across neck and décolleté. PRP cannula delivery across the area, typically paired with sun-damage recovery programme." },
    { num: "05", title: "Wedding Preparation Programme", age: "AGE 25-40", desc: "Integrated within 3-6 month bridal preparation timeline. PRP sessions scheduled strategically — typically two sessions at 6-8 weeks pre-event, avoiding sessions within 2 weeks of event to allow full swelling resolution." },
    { num: "06", title: "Transitioning from Filler-Only Regimens", age: "AGE 40-60", desc: "Clients who have used dermal filler consistently and want to add a skin-quality regenerative complement rather than continually increase filler volume. PRP scheduled between filler appointments." },
    { num: "07", title: "Fitzpatrick III-VI Regenerative Alternative", age: "AGE 30-60", desc: "For darker skin tones seeking regenerative modalities where aggressive laser resurfacing carries elevated PIH risk. PRP is autologous, generally well-tolerated in Fitzpatrick III-VI without elevated PIH profile." },
    { num: "08", title: "Male Aesthetic Patients", age: "AGE 30-60", desc: "Growing PRP demographic in Dubai — males addressing skin quality, periorbital rejuvenation, or preventive maintenance. Programme design accommodates recovery timing around business commitments." },
    { num: "09", title: "Post-Weight-Loss Skin Recovery", age: "AGE 25-50", desc: "Following significant weight loss, dermal quality may need regenerative support. PRP as part of programme addressing skin texture and dermal thickness." },
    { num: "10", title: "Post-Pregnancy Rejuvenation", age: "AGE 25-40", desc: "Post-partum and post-lactation regenerative programme. PRP is autologous and generally well-tolerated post-lactation — Medical Director assessment confirms timing." },
    { num: "11", title: "Combined Programme Clients", age: "PRP + MICRONEEDLING + FILLER", desc: "Clients running comprehensive rejuvenation programmes across multiple modalities. Medical Director coordinates timing; Arfah coordinates aesthetician-scope integration between sessions." },
    { num: "12", title: "Sensitive Skin - Reactive History", age: "AGE 30-50", desc: "Autologous PRP is generally well-tolerated in sensitive skin — no exogenous allergen introduction concern. Alternative pathway for clients where exosome or aggressive rejuvenation programmes have caused reactive response." }
  ];

  return (
    <section className="bg-[#F0EBE3] py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#A69B8D] uppercase block mb-4">WHO IT'S DESIGNED FOR</p>
        <h2 className="text-3xl md:text-[40px] font-serif text-[#1A1A1A] leading-tight mb-4 speakable-section-answer">
          12 patient populations served at Vedara Care JVC
        </h2>
        <p className="text-[14px] font-sans text-[#4A4A4A] mb-12 max-w-2xl">
          Medical Director consultation determines whether PRP is the right pathway — or whether an alternative modality better fits your indication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px] bg-[#E8E0CD] border border-[#E8E0CD]">
          {populations.map((pop, i) => (
            <div key={i} className="bg-[#FAF6EF] hover:bg-white transition-colors p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[12px] font-sans font-bold text-[#C9A961]">{pop.num}</span>
                <span className="text-[10px] font-sans font-bold text-[#A69B8D] uppercase tracking-wider">{pop.age}</span>
              </div>
              <h4 className="font-serif font-bold text-[18px] text-[#1A1A1A] mb-3">{pop.title}</h4>
              <p className="text-[13px] font-sans text-[#4A4A4A] leading-relaxed">{pop.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white border border-[#E8E0CD] p-8 rounded-[4px]">
          <p className="text-[11px] font-sans font-bold text-[#C9A961] uppercase tracking-[0.1em] mb-3">IMPORTANT SAFETY DISCLOSURE — CONTRAINDICATIONS</p>
          <p className="text-[13px] font-sans text-[#6B6B6B] leading-relaxed">
            PRP may not be appropriate for patients with bleeding disorders · anticoagulant therapy · active infection in treatment area · active herpes simplex outbreak · known hypersensitivity to anticoagulant (ACD-A) · pregnancy and lactation · active malignancy · autoimmune disease with unstable control · immunosuppressive therapy · recent isotretinoin therapy · age under 18.<br /><br />
            All contraindication decisions are made by the Medical Director at consultation. For details on our physician-scope guidelines, see our <Link href="/departments/dermatology-jvc/" className="text-[#C8A87F] hover:underline">Dermatology page</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export const TwelveStepProtocol = () => {
  return (
    <section className="py-20 bg-[#FAF7F2]" id="protocol">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div>
            <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">Protocol Steps</div>
            <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] mb-4 tracking-[-0.01em] leading-tight">The 12-Step PRP Protocol</h2>
            <p className="font-sans text-[14px] text-[#555555] leading-[1.7] mb-10">Every PRP session at Vedara Care JVC follows a defined 12-step protocol — from consultation confirmation to next-session scheduling. Total time: 60–90 min (standalone) or 90–120 min (with microneedling adjunct).</p>
            <div className="flex flex-col gap-0">
              {[
                { num: "01", time: "5–10 min", title: "Consultation Confirmation and Consent Review", desc: "Medical Director reviews consultation record, updated medical history verification, informed consent confirmation, indication and protocol confirmation." },
                { num: "02", time: "5 min", title: "Medical History and Anticoagulant Screening", desc: "Anticoagulant medication review, recent illness screening, allergy verification (particularly ACD-A anticoagulant used in PRP tube)." },
                { num: "03", time: "5–10 min", title: "Blood Draw by DHA-Licensed Nursing", desc: "10–30 mL blood drawn by DHA-Licensed Nursing under physician oversight into specialized PRP collection tube with anticoagulant. Antecubital vein typical draw site." },
                { num: "04", time: "15–25 min", title: "Double-Spin Centrifugation and PRP Preparation", desc: "Blood processed via double-spin centrifugation using FDA-cleared preparation kit. First spin separates red blood cells; second spin concentrates platelets. Prepared PRP aspirated into syringes." },
                { num: "05", time: "5 min", title: "Treatment Area Preparation and Cleansing", desc: "Treatment area cleansed with medical-grade antiseptic. Sterile field established. Treatment area marked if injection pattern requires it." },
                { num: "06", time: "20–30 min (onset)", title: "Topical Anaesthetic Application", desc: "Compounded topical anaesthetic (typically lidocaine-based) applied to treatment area, occlusion where appropriate, onset time 20–30 minutes." }
              ].map((step, i) => (
                <div key={i} className="grid grid-cols-[40px_1fr] gap-5 py-5 border-b border-[#EDE6DC] items-start">
                  <div className="font-serif text-[13px] text-[#C8A87F] font-light pt-[3px]">{step.num}</div>
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-[6px]">
                      <h3 className="font-serif text-[15px] font-medium text-[#1F1F1F] m-0 leading-[1.3]">{step.title}</h3>
                      <span className="font-sans text-[11px] text-[#777777] whitespace-nowrap shrink-0">{step.time}</span>
                    </div>
                    <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-0 md:pt-24">
            <div className="flex flex-col gap-0">
              {[
                { num: "07", time: "5 min", title: "Anaesthetic Removal and Re-Cleanse", desc: "Anaesthetic removed, area re-cleansed with antiseptic to maintain sterile field before PRP delivery." },
                { num: "08", time: "15–40 min", title: "PRP Delivery by Medical Director", desc: "Microdroplet mesotherapy technique (multiple small-volume injections at 1–2mm depth), or cannula technique (blunt-tipped, periorbital/neck), or microneedling adjunct (physician-scope depth with PRP topical and/or injection)." },
                { num: "09", time: "5–10 min", title: "Immediate Post-Procedure Assessment", desc: "Treatment area assessed, cold compress applied to reduce immediate swelling and bruising risk." },
                { num: "10", time: "5–10 min", title: "Cool-Down and Barrier Support Application", desc: "Sterile hyaluronic acid or ceramide barrier support applied. Cool globes or cooling mask as needed. Arfah coordinates post-procedure care." },
                { num: "11", time: "5–10 min", title: "Post-Treatment Care Briefing", desc: "Verbal and written instruction: cold compress cadence, avoid vigorous exercise 24–48h, avoid alcohol 24–48h, SPF 50+ zinc-based sun protection, pause retinoids/acids 5–7 days." },
                { num: "12", time: "5 min", title: "Next Session Scheduling and Documentation", desc: "Cadence confirmed (typically 4–6 weeks across 3-session course). Photography with consent added to record. Follow-up contact plan established." }
              ].map((step, i) => (
                <div key={i} className="grid grid-cols-[40px_1fr] gap-5 py-5 border-b border-[#EDE6DC] items-start">
                  <div className="font-serif text-[13px] text-[#C8A87F] font-light pt-[3px]">{step.num}</div>
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-[6px]">
                      <h3 className="font-serif text-[15px] font-medium text-[#1F1F1F] m-0 leading-[1.3]">{step.title}</h3>
                      <span className="font-sans text-[11px] text-[#777777] whitespace-nowrap shrink-0">{step.time}</span>
                    </div>
                    <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-[#F5F0E8] rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#FAF7F2] rounded-md">
                  <div className="font-serif text-[24px] font-normal text-[#C8A87F] mb-1">60–90</div>
                  <div className="font-sans text-[11px] text-[#555555] tracking-[0.06em] uppercase">min standalone</div>
                </div>
                <div className="text-center p-4 bg-[#FAF7F2] rounded-md">
                  <div className="font-serif text-[24px] font-normal text-[#C8A87F] mb-1">90–120</div>
                  <div className="font-sans text-[11px] text-[#555555] tracking-[0.06em] uppercase">min with microneedling</div>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden bg-[#F0EBE3]">
              <img alt="PRP blood draw centrifugation double-spin FDA-cleared preparation Vedara Care" src="/images/prp-preparation-centrifugation.webp" className="w-full block object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PatientJourney = () => {
  const phases = [
    { num: "Phase 1", label: "Session 0", time: "45–60 min", title: "Medical Director Consultation and Skin Analysis", desc: "Standalone Medical Director consultation — no treatment same-day. Medical history review, indication assessment, skin analysis (Arfah may lead this component), delivery technique selection, alternative pathway discussion, written treatment plan, and cost breakdown." },
    { num: "Phase 2", label: "Session 1", time: "60–120 min", title: "Initial PRP Session", desc: "First session establishes baseline tolerance, injection technique preference, and post-procedure response profile. Duration depends on technique selected. Standardized photography with consent." },
    { num: "Phase 3", label: "Sessions 2 + 3", time: "4–6 week intervals", title: "3-Session Core Course", desc: "Sessions 2 and 3 follow the same protocol as Session 1. Cadence adjusted per patient response — extended to 5–6 weeks for tolerance, or accelerated to 4 weeks for wedding preparation timelines. Documentation at Session 3." },
    { num: "Phase 4", label: "Post Session 3", time: "4–6 weeks post", title: "Transition Review", desc: "Medical Director conducts transition review — assessing cumulative response, discussing whether course extension is indicated (particularly for acne scar remodeling: 4–6 session extension typical), and designing maintenance cadence." },
    { num: "Phase 5", label: "Ongoing", time: "Every 6–12 months", title: "Long-Term Maintenance", desc: "Stable indications maintained every 6–12 months. Combined-programme clients coordinate maintenance timing with Medical Director. Arfah continues aesthetician-scope Anti-Aging Protocol integration between PRP maintenance sessions." }
  ];

  return (
    <section className="py-20 bg-[#F5F0E8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">Patient Journey</div>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] mb-4 tracking-[-0.01em] leading-tight">Five phases from consultation to long-term care</h2>
          <p className="font-sans text-[14px] text-[#555555] max-w-[600px] leading-[1.7] m-0">A typical Vedara Care JVC PRP programme runs across 5 phases — Medical Director consultation, 3-session core course, transition review, and long-term maintenance.</p>
        </div>
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C8A87F] to-[#C8A87F]/10 z-0"></div>
          <div className="flex flex-col gap-0">
            {phases.map((phase, i) => (
              <div key={i} className="grid grid-cols-[40px_1fr] gap-7 items-start pb-10 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border-2 border-[#C8A87F] flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#C8A87F]"></div>
                </div>
                <div className="bg-[#FAF7F2] rounded-lg p-6 md:p-7 mt-1">
                  <div className="flex items-baseline justify-between mb-2 gap-3 flex-wrap">
                    <div className="flex gap-3 items-baseline">
                      <span className="font-sans text-[10px] font-medium text-[#C8A87F] tracking-[0.1em] uppercase">{phase.num}</span>
                      <span className="font-sans text-[11px] text-[#777777]">{phase.label}</span>
                    </div>
                    <span className="font-sans text-[11px] text-[#777777] bg-[#F5F0E8] px-2.5 py-1 rounded-full">{phase.time}</span>
                  </div>
                  <h3 className="font-serif text-[18px] font-medium text-[#1F1F1F] m-0 mb-2.5 leading-[1.3]">{phase.title}</h3>
                  <p className="font-sans text-[13px] text-[#555555] leading-[1.65] m-0">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const DocumentedPatientJourneys = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleCase = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cases = [
    {
      num: "Case 1",
      fitz: "Fitzpatrick III",
      age: "Age 47",
      title: "Mature Skin Regenerative Programme",
      desc: "Dubai-based executive seeking autologous regenerative complement to existing dermal filler programme.",
      protocol: "3 sessions · 5-week intervals · Microdroplet mesotherapy - Full face + neck",
      paragraphs: [
        "Client presented with mature skin quality concerns — perceived loss of skin thickness, textural roughness across cheeks and jawline, and reduced skin firmness. Client had used dermal fillers for volume concerns for several years and wanted to add a regenerative complement rather than continuing to increase filler volume.",
        "Medical Director designed a 3-session PRP microdroplet mesotherapy programme at 5-week intervals, delivered across cheeks, jawline, perioral area, and neck. Blood draw 30 mL per session, double-spin P-PRP protocol, injection depth 1-2mm dermal. Arfah coordinated integration with client's existing quarterly Anti-Aging Protocol programme.",
        "Post-session recovery ran 48-72 hours across the programme — mild swelling, small injection marks visible for 24-48 hours, occasional pinpoint bruising resolving within 5-7 days. At 6 weeks post-Session 3, client reported subjective skin quality improvement — perception of increased skin thickness and firmness. Transitioned to 6-month maintenance cadence. Filler pathway continued unchanged in parallel — PRP was complement, not substitute."
      ]
    },
    {
      num: "Case 2",
      fitz: "Fitzpatrick IV",
      age: "Age 28",
      title: "Post-Acne Atrophic Scar Remodeling",
      desc: "Indian expat in JVC with atrophic acne scarring — prior microneedling alone without significant response.",
      protocol: "6 sessions · 6-week intervals · PRP + Physician-scope Microneedling - Cheeks",
      paragraphs: [
        "Client presented with atrophic acne scarring across cheeks — mix of icepick, boxcar, and rolling scars from adolescent and early-20s acne. Active acne resolved 3 years prior. Client had tried microneedling alone at another Dubai clinic without significant scar remodeling response.",
        "Medical Director designed a 6-session PRP + physician-scope microneedling adjunct programme at 6-week intervals. Microneedling at 1.5-2.0mm depth (physician scope), PRP applied during the microchannel window and injected in mesotherapy pattern immediately post-microneedling.",
        "At Session 3 review, subtle improvement in shallower boxcar and rolling scars visible on standardized photography; icepick scars showed less response as expected. At Session 6 review, cumulative improvement in scar depth perception. Client extended to 3 additional maintenance sessions over the following 12 months."
      ]
    },
    {
      num: "Case 3",
      fitz: "Fitzpatrick II",
      age: "Age 42",
      title: "Periorbital Rejuvenation — Cannula Technique",
      desc: "British expat in Dubai Marina — previous under-eye filler caused Tyndall effect, seeking non-filler periorbital pathway.",
      protocol: "3 sessions · 5-week intervals · Cannula technique - Periorbital",
      paragraphs: [
        "Client presented with under-eye tear trough shadowing, thin periorbital dermis, and dark circle indication. Client had previously used under-eye filler but experienced Tyndall effect (bluish discoloration) that made her want to explore non-filler pathways.",
        "Medical Director designed a 3-session PRP periorbital programme using cannula technique — blunt-tipped cannula introduced through single entry point per side, PRP distributed across periorbital area. Sessions at 5-week intervals. Arfah coordinated pre-procedure skin analysis and post-procedure care briefing.",
        "Post-session recovery ran 48-72 hours — mild periorbital swelling, occasional bruising at cannula entry points. At 8 weeks post-Session 3, client reported subjective improvement in under-eye area quality — perception of increased dermal thickness and reduced shadow depth. Transitioned to 6-month maintenance cadence."
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">Documented Patient Journeys</div>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] mb-3 tracking-[-0.01em] leading-tight">Three illustrative case narratives</h2>
          <p className="font-sans text-[13px] text-[#777777] leading-[1.65] m-0 italic max-w-[700px]">DHA Compliance: Individual results vary. Case narratives below are documented Vedara Care JVC client journeys shared with informed written consent; identifying detail has been altered for privacy. These are illustrative and not predictive of outcomes for any specific individual.</p>
        </div>
        <div className="flex flex-col gap-3">
          {cases.map((c, i) => (
            <div key={i} className="bg-[#F5F0E8] rounded-lg overflow-hidden border border-[#C8A87F]/15 transition-all duration-300">
              <button 
                onClick={() => toggleCase(i)}
                className="w-full bg-transparent border-none cursor-pointer p-6 md:p-7 grid grid-cols-[1fr_auto] gap-4 items-center text-left"
              >
                <div>
                  <div className="flex gap-3 items-center mb-2 flex-wrap">
                    <span className="font-sans text-[10px] font-medium text-[#C8A87F] tracking-[0.1em] uppercase">{c.num}</span>
                    <span className="font-sans text-[11px] text-[#777777] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full">{c.fitz}</span>
                    <span className="font-sans text-[11px] text-[#777777] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full">{c.age}</span>
                  </div>
                  <h3 className="font-serif text-[18px] font-medium text-[#1F1F1F] m-0 mb-1.5 leading-[1.3]">{c.title}</h3>
                  <p className="font-sans text-[13px] text-[#555555] m-0 leading-[1.5]">{c.desc}</p>
                </div>
                <div className={`w-8 h-8 rounded-full border border-[#D4C5B0] flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </button>
              
              {openIndex === i && (
                <div className="px-6 md:px-7 pb-7 pt-0">
                  <div className="border-t border-[#C8A87F]/15 pt-6 mt-1">
                    <div className="mb-4">
                      <span className="font-sans text-[10px] font-medium text-[#C8A87F] tracking-[0.1em] uppercase block mb-1">PROTOCOL SUMMARY</span>
                      <strong className="font-sans text-[12px] text-[#1F1F1F] font-semibold">{c.protocol}</strong>
                    </div>
                    <div className="flex flex-col gap-4">
                      {c.paragraphs.map((p, idx) => (
                        <p key={idx} className="font-sans text-[13px] text-[#555555] m-0 leading-[1.6]">{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PrpPractitioners = () => {
  return (
    <section className="py-20 bg-[#F0EBE3]" id="practitioners">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-14">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">Your Practitioners</div>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] m-0 tracking-[-0.01em] leading-tight">Primary practitioner + integrated support team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Medical Director */}
          <div className="bg-[#FAF7F2] rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#1F1F1F] p-8 md:p-9 relative">
              <div className="absolute inset-0 bg-[radial-gradient(at_right_top,rgba(200,168,127,0.15)_0%,transparent_70%)] pointer-events-none"></div>
              <div className="font-sans text-[10px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3 relative">Primary Practitioner</div>
              <h3 className="font-serif text-[24px] font-normal text-[#FAF7F2] m-0 mb-2 tracking-[-0.01em] relative">
                <Link href="/team/[medical-director-slug]/" className="text-[#FAF7F2] hover:text-[#C8A87F] transition-colors no-underline">Medical Director</Link>
              </h3>
              <p className="font-sans text-[13px] text-[#FAF7F2]/70 m-0 mb-5 leading-[1.4] relative">DHA-Licensed Consultant Dermatologist</p>

              <div className="flex gap-2 flex-wrap relative">
                <span className="font-sans text-[10px] text-[#FAF7F2]/60 bg-[#C8A87F]/15 py-[3px] px-2.5 rounded-full">Blood Draw Supervision</span>
                <span className="font-sans text-[10px] text-[#FAF7F2]/60 bg-[#C8A87F]/15 py-[3px] px-2.5 rounded-full">PRP Preparation</span>
                <span className="font-sans text-[10px] text-[#FAF7F2]/60 bg-[#C8A87F]/15 py-[3px] px-2.5 rounded-full">Injection Delivery</span>
                <span className="font-sans text-[10px] text-[#FAF7F2]/60 bg-[#C8A87F]/15 py-[3px] px-2.5 rounded-full">Post-Procedure Review</span>
              </div>
            </div>

            <div className="p-7 md:p-9 flex-1">
              <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.08em] uppercase mb-3.5">Scope at Vedara Care JVC</div>
              <ul className="m-0 p-0 list-none flex flex-col gap-2">
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#C8A87F] text-[14px] mt-[1px] shrink-0">›</span>
                  <span className="font-sans text-[13px] text-[#555555] leading-[1.5]">Patient consultation, indication assessment, treatment plan design</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#C8A87F] text-[14px] mt-[1px] shrink-0">›</span>
                  <span className="font-sans text-[13px] text-[#555555] leading-[1.5]">Blood draw supervision (nursing-delivered under physician oversight)</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#C8A87F] text-[14px] mt-[1px] shrink-0">›</span>
                  <span className="font-sans text-[13px] text-[#555555] leading-[1.5]">PRP preparation protocol governance — double-spin centrifugation, FDA-cleared kits</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#C8A87F] text-[14px] mt-[1px] shrink-0">›</span>
                  <span className="font-sans text-[13px] text-[#555555] leading-[1.5]">Injection delivery — microdroplet mesotherapy, cannula, or microneedling adjunct</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#C8A87F] text-[14px] mt-[1px] shrink-0">›</span>
                  <span className="font-sans text-[13px] text-[#555555] leading-[1.5]">Post-procedure clinical review and adverse event management</span>
                </li>
              </ul>

              <div className="mt-6 p-5 bg-[#F5F0E8] rounded-md border-l-[3px] border-[#C8A87F]">
                <p className="font-sans text-[13px] text-[#555555] leading-[1.7] m-0 mb-2 italic">"PRP is one of the most evidence-supported regenerative modalities in aesthetic dermatology — but the quality of the outcome depends entirely on preparation protocol, injection technique, and patient selection."</p>
                <p className="font-sans text-[11px] text-[#777777] m-0">— Medical Director, Vedara Care JVC</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Arfah */}
            <div className="bg-[#FAF7F2] rounded-lg overflow-hidden flex-1 flex flex-col">
              <div className="bg-[#C8A87F] p-6 md:p-7">
                <div className="font-sans text-[10px] font-medium text-[#FAF7F2]/80 tracking-[0.12em] uppercase mb-2">Adjunct Support Practitioner</div>
                <h3 className="font-serif text-[20px] font-normal text-[#FAF7F2] m-0 mb-1">
                  <Link href="/team/arfah-owais-aesthetician-jvc/" className="text-[#FAF7F2] hover:text-white transition-colors no-underline">Arfah Owais</Link>
                </h3>
                <p className="font-sans text-[12px] text-[#FAF7F2]/80 m-0">DHA-Licensed Aesthetician · CIBTAC-UK</p>
              </div>
              <div className="p-6 md:p-7 flex-1">
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="font-sans text-[10px] text-[#555555] bg-[#F5F0E8] py-[3px] px-2.5 rounded-full">DHA Aesthetician Licence</span>
                  <span className="font-sans text-[10px] text-[#555555] bg-[#F5F0E8] py-[3px] px-2.5 rounded-full">CIBTAC-UK</span>
                  <span className="font-sans text-[10px] text-[#555555] bg-[#F5F0E8] py-[3px] px-2.5 rounded-full">NCLC Certified</span>
                  <span className="font-sans text-[10px] text-[#555555] bg-[#F5F0E8] py-[3px] px-2.5 rounded-full">PMU Certified</span>
                  <span className="font-sans text-[10px] text-[#555555] bg-[#F5F0E8] py-[3px] px-2.5 rounded-full">8+ Years Experience</span>
                </div>

                <p className="font-sans text-[13px] text-[#555555] leading-[1.65] m-0 mb-4">
                  Arfah's role in the PRP programme: pre-procedure skin analysis, consultation support for programme integration, post-procedure care coordination, and integrated Anti-Aging Protocol design. <strong className="text-[#1F1F1F] font-medium">Arfah does not deliver PRP itself — that is physician scope.</strong>
                </p>

                <div className="border-l-[3px] border-[#C8A87F] pl-4">
                  <p className="font-sans text-[12px] text-[#555555] leading-[1.65] m-0 mb-1.5 italic">"When I identify that PRP is the right pathway during skin analysis, I refer the client to Medical Director consultation. My role picks up again after the physician-delivered core protocol."</p>
                  <p className="font-sans text-[11px] text-[#777777] m-0">— Arfah Owais</p>
                </div>
              </div>
            </div>

            {/* Nursing */}
            <div className="bg-[#FAF7F2] rounded-lg p-6 md:p-7 flex gap-5 items-start">
              <div className="w-11 h-11 rounded-full bg-[#F5F0E8] flex items-center justify-center shrink-0">
                <span className="text-[18px]">🏥</span>
              </div>
              <div>
                <div className="font-sans text-[10px] font-medium text-[#C8A87F] tracking-[0.1em] uppercase mb-1.5">Clinical Support</div>
                <h4 className="font-serif text-[16px] font-medium text-[#1F1F1F] m-0 mb-1.5">DHA-Licensed Nursing Team</h4>
                <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0">DHA-Licensed Nursing provides blood draw and sterile PRP preparation support under Medical Director oversight. Phlebotomy training, sterile technique protocol compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PrpPricing = () => {
  const plans = [
    { name: "Medical Director Consultation", desc: "Medical history, skin analysis, indication assessment, protocol design, alternative pathway discussion", time: "45–60 min", price: "AED [X]", note: "Credited toward first session if programme booked", highlight: false },
    { name: "PRP Facial — Single Session", desc: "Full face microdroplet mesotherapy technique", time: "60–90 min", price: "AED [X]", note: "Per session", highlight: false },
    { name: "PRP Facial — 3-Session Course", desc: "3 sessions at 4–6 week intervals — discount vs single-session sum", time: "Each 60–90 min", price: "AED [X]", note: "Standard programme", highlight: true, badge: "Most Popular" },
    { name: "PRP Facial — 6-Session Course", desc: "Extended course for post-acne atrophic scar remodeling indication", time: "Each 60–120 min", price: "AED [X]", note: "Post-acne programme", highlight: false },
    { name: "PRP + Microneedling — Single Session", desc: "Physician microneedling + PRP application/injection combination", time: "90–120 min", price: "AED [X]", note: "Per session", highlight: false },
    { name: "PRP + Microneedling — 3-Session Course", desc: "Discount vs single-session sum", time: "Each 90–120 min", price: "AED [X]", note: "Standard programme", highlight: false },
    { name: "PRP Periorbital (Cannula) — 3-Session Course", desc: "Under-eye and periorbital area via cannula technique", time: "Each 60–90 min", price: "AED [X]", note: "Standard programme", highlight: false },
    { name: "PRP Neck and Décolleté — 3-Session Course", desc: "Cannula delivery across neck and décolleté", time: "Each 75–90 min", price: "AED [X]", note: "Standard programme", highlight: false },
    { name: "PRP Full Face + Neck — 3-Session Course", desc: "Full face microdroplet + neck cannula combination", time: "Each 90–120 min", price: "AED [X]", note: "Combined programme", highlight: false },
    { name: "Wedding Preparation Programme", desc: "PRP sessions within 3–6 month bridal timeline", time: "Variable", price: "AED [X]", note: "Programme", highlight: false },
    { name: "Maintenance Session (post-course)", desc: "Individual maintenance after completing core course", time: "60–90 min", price: "AED [X]", note: "Per session", highlight: false }
  ];

  return (
    <section className="py-20 bg-[#1F1F1F]" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">Investment</div>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#FAF7F2] m-0 mb-3 tracking-[-0.01em] leading-tight">Session Options and Pricing</h2>
          <p className="font-sans text-[13px] text-[#FAF7F2]/50 max-w-[600px] leading-[1.65] m-0 italic">Pricing is indicative and confirmed at consultation. All values in AED · VAT inclusive per UAE regulation. Insurance on a reimbursement basis, not direct billing.</p>
        </div>

        <div className="flex flex-col gap-0.5">
          {plans.map((p, i) => (
            <div key={i} className={`grid grid-cols-1 sm:grid-cols-[1fr_120px_100px] gap-3 sm:gap-6 items-start sm:items-center p-5 sm:p-5 sm:px-6 rounded-[4px] transition-colors duration-150 ${p.highlight ? 'bg-[#C8A87F]/10 border border-[#C8A87F]/30' : 'bg-[#FAF7F2]/[0.04] border border-transparent'}`}>
              <div>
                <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                  <h3 className={`font-serif text-[15px] ${p.highlight ? 'font-medium text-[#C8A87F]' : 'font-normal text-[#FAF7F2]'} m-0`}>{p.name}</h3>
                  {p.badge && (
                    <span className="font-sans text-[9px] font-medium text-[#C8A87F] bg-[#C8A87F]/20 py-0.5 px-2 rounded-full tracking-[0.08em] uppercase whitespace-nowrap">{p.badge}</span>
                  )}
                </div>
                <div className="font-sans text-[12px] text-[#FAF7F2]/50 leading-[1.4]">{p.desc}</div>
              </div>
              <div className="font-sans text-[11px] text-[#FAF7F2]/40 hidden sm:block">{p.time}</div>
              <div className="text-left sm:text-right mt-1 sm:mt-0">
                <div className="font-serif text-[15px] font-normal text-[#C8A87F]">{p.price}</div>
                <div className="font-sans text-[10px] text-[#FAF7F2]/35 mt-0.5">{p.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 sm:px-6 bg-[#C8A87F]/[0.08] rounded-md border-l-[3px] border-[#C8A87F]">
            <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.08em] uppercase mb-2">Cancellation Policy</div>
            <p className="font-sans text-[13px] text-[#FAF7F2]/60 leading-[1.6] m-0">24 hours notice required. Late cancellation charged at 50%.</p>
          </div>
          <div className="p-5 sm:px-6 bg-[#C8A87F]/[0.08] rounded-md border-l-[3px] border-[#C8A87F]/40">
            <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.08em] uppercase mb-2">Insurance</div>
            <p className="font-sans text-[13px] text-[#FAF7F2]/60 leading-[1.6] m-0">Reimbursement basis. Clients pay at time of service and may submit reimbursement claims per their policy terms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

