import React from 'react';

const OxyGeneoShortVersion = () => {
  return (
    <section className="bg-[#F0EBE3] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F1EA] rounded-xl p-8 md:p-12 border-l-4 border-[#C9A55A]">
          <p className="text-sm font-semibold tracking-widest text-[#8A795D] uppercase mb-4">
            AT A GLANCE
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3E3A] mb-6">
            Oxy-Geneo Facial at Vedara Care JVC — the short version.
          </h2>
          <div className="text-gray-700 space-y-4 mb-8 text-lg">
            <p>
              Oxy-Geneo Facial is a tri-effect medical-grade facial protocol using Israeli Pollogen technology to simultaneously exfoliate the skin surface, trigger physiological oxygenation via the Bohr Effect (CO2 bubbles produced by capsule-primer reaction cause the body to send oxygen-rich blood to the skin surface), and infuse active serums into the skin — all in a single 30–45 minute session with no downtime. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall — Oxy-Geneo is delivered by Arfah Owais, DHA-licensed aesthetician with CIBTAC-UK diploma and 8+ years of clinical experience. Six OxyPod treatment options address different skin concerns: NeoBright (brightening and pigmentation), NeoRevive (anti-aging and rejuvenation), Balance (oily and acne-prone skin), Illuminate (even skin tone), Retexture (firmness and texture), Hydrate (dehydration). Oxy-Geneo is particularly well-tolerated by sensitive skin — often better tolerated than HydraFacial for reactive or barrier-compromised skin.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "30–45 min session",
              "No downtime",
              "6 OxyPod options",
              "Suitable for sensitive skin",
              "TriPollar RF add-on",
              "CIBTAC-UK aesthetician",
              "DHA-licensed clinic",
              "Israeli Pollogen technology",

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

export default OxyGeneoShortVersion;
