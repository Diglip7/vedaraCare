import React from 'react';

const HydraFacialShortVersion = () => {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F1EA] rounded-xl p-8 md:p-12 border-l-4 border-[#C9A55A]">
          <p className="text-sm font-semibold tracking-widest text-[#8A795D] uppercase mb-4">
            AT A GLANCE
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3E3A] mb-6">
            HydraFacial at Vedara Care JVC — the short version.
          </h2>
          <div className="text-gray-700 space-y-4 mb-8 text-lg">
            <p>
              HydraFacial is a multi-step medical-grade facial protocol using patented vortex-fusion technology
              to cleanse, exfoliate, painlessly extract pore impurities, hydrate, and infuse antioxidant and peptide
              serums — all in a single 30–60 minute session with no downtime. At Vedara Care Polyclinic in
              Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall — HydraFacial is
              delivered by Arfah Owais, DHA-licensed aesthetician with CIBTAC-UK diploma and 8+ years of
              clinical experience. The core 3-step protocol suits most skin types. Optional booster serums
              address targeted concerns — Britenol for pigmentation, Dermabuilder for early aging, CTGF
              (Growth Factor) for plumping. Optional LED light therapy add-on (blue for acne-prone skin, red for
              aging). Single session provides genuine hydration and refresh benefit visible immediately post-treatment,
              peaking around 5–7 days. Monthly programme gives cumulative benefit. Realistic
              outcome framing throughout: meaningful skin refresh and hydration benefit, not miracle
              transformation.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {[
              "30–60 min session",
              "No downtime",
              "Single session or monthly programme",
              "Suitable for most skin types",
              "Optional booster serums",
              "LED light therapy add-on",
              "Delivered by CIBTAC-UK aesthetician",
              "DHA-licensed clinic"
            ].map((chip, index) => (
              <span key={index} className="inline-block px-4 py-2 rounded-full border border-[#C9A55A] text-[#8A795D] text-sm bg-transparent">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HydraFacialShortVersion;
