import React from 'react';

const defaultPricingCards = [
  {
    category: "FIRST CONSULTATION",
    title: "Doctor Consultation",
    price: "AED 200  -  AED 800",
    description: "A 45 - 60 minute Ayurvedic consultation with a BAMS-qualified doctor, including pulse diagnosis, dosha assessment, and a written treatment plan. Some clinics charge less but offer shorter consultations.",
    footer: "Vedara Care: From AED 350"
  },
  {
    category: "INDIVIDUAL TREATMENTS",
    title: "Individual Treatment",
    price: "AED 250  -  AED 800",
    description: "Single therapy sessions like Abhyanga (60 - 90 min), Shirodhara (45 - 60 min), or Kativasti (45 min). Prices vary depending on the practitioner, treatment duration, materials and what is included in the treatment plan.",
    footer: "Vedara Care: From AED 280"
  },
  {
    category: "PANCHAKARMA",
    title: "Panchakarma",
    price: "AED 3,500  -  AED 15,000",
    description: "7-day, 14-day, or 21-day full Panchakarma detox programmes. Includes consultations, daily therapies, herbal medicines, dietary guidance, and follow-up. Length and inclusions vary.",
    footer: "Vedara Care: From AED 3,800"
  }
];

const defaultInsurers = ["Daman", "AXA", "Allianz", "Oman Insurance", "Now Health", "Bupa", "MetLife"];

const PricingSection = ({
  label = "TRANSPARENT PRICING",
  title = "How much does Ayurvedic treatment cost in Dubai?",
  description = "Indicative Ayurvedic treatment prices in Dubai. Final pricing depends on your individual treatment plan.",
  pricingCards = defaultPricingCards,
  insuranceTitle = "INSURANCE COVERAGE FOR AYURVEDA IN DUBAI (2026)",
  insuranceDesc = "Some Dubai insurance plans cover Ayurveda partially or fully  -  most commonly Daman, AXA, and Now Health premium tiers. Coverage varies plan by plan. Vedara Care is a direct-billing partner with seven major insurers  -  send us a photo of your card on WhatsApp and we will confirm your specific coverage before you book.",
  insurers = defaultInsurers,
  tableData = null,
  tableNote = null,
  bgcolor = "bg-white"
}) => {
  return (
    <section className={`${bgcolor} py-24 px-6`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase mb-4">
            {label}
          </p>
          <h2 className="text-[clamp(24px,3.5vw,42px)] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-4">
            {title}
          </h2>
          {description && (
            <p className="max-w-[640px] mx-auto text-[16.5px] leading-[1.7] text-[#6B6B6B] font-sans">
              {description}
            </p>
          )}
        </div>

        {pricingCards && pricingCards.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricingCards.map((card, index) => (
              <div key={index} className="bg-white rounded-[8px] p-8 border border-[#E5DFD3] flex flex-col h-full">
                <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase mb-3">
                  {card.category}
                </p>
                <h3 className="text-[19px] font-serif font-semibold text-[#1A1A1A] mb-4">
                  {card.title}
                </h3>
                <p className="text-[32px] font-serif font-medium text-[#1F4538] mb-5">
                  {card.price}
                </p>
                <p className="text-[13.5px] leading-[1.65] text-[#6B6B6B] font-sans mb-6 flex-grow">
                  {card.description}
                </p>
                {card.footer && (
                  <div className="pt-5 border-t border-[#F5F5F5]">
                    <p className="text-[12.5px] font-sans font-semibold text-[#C9A961]">
                      {card.footer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="text-center mb-12">
          <p className="text-[14px] text-[#6B6B6B] font-sans italic mb-8">
            Prices are indicative. Final pricing depends on the treatment plan and services included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="w-full sm:w-auto px-8 py-4 bg-[#1F4538] text-white font-sans font-semibold text-[15px] rounded hover:bg-[#1A3A2F] transition-colors">
              Book Ayurvedic Consultation
            </a>
            <a href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20check%20my%20insurance%20coverage%20for%20Ayurveda." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#1F4538] text-[#1F4538] font-sans font-semibold text-[15px] rounded hover:bg-[#FAF6EF] transition-colors">
              Check Insurance Coverage on WhatsApp
            </a>
          </div>
        </div>

        {tableData && (
          <div className="bg-white rounded-[8px] p-8 border border-[#E5DFD3] mb-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#E5DFD3]">
                  {tableData[0].map((col, i) => (
                    <th key={i} className="text-left py-3 px-4 text-sm font-semibold text-[#1A1A1A]">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.slice(1).map((row, i) => (
                  <tr key={i} className="border-b border-[#E5DFD3] last:border-b-0">
                    {row.map((cell, j) => (
                      <td key={j} className="py-4 px-4 text-sm text-[#6B6B6B]">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {tableNote && (
              <p className="text-[13.5px] text-[#6B6B6B] mt-6 italic">{tableNote}</p>
            )}
          </div>
        )}

        {(insuranceTitle || insuranceDesc || (insurers && insurers.length > 0)) && (
          <div className="bg-white rounded-[12px] p-8 lg:p-12 border border-[#E5DFD3] text-center">
            {insuranceTitle && (
              <p className="text-[12px] font-sans font-semibold tracking-[0.12em] text-[#6B6B6B] uppercase mb-3">
                {insuranceTitle}
              </p>
            )}
            {insuranceDesc && (
              <p className="max-w-[720px] mx-auto text-[15px] leading-[1.7] text-[#1A1A1A] font-sans mb-8">
                {insuranceDesc}
              </p>
            )}
            {insurers && insurers.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {insurers.map((insurer, index) => (
                  <span key={index} className="bg-[#FAF6EF] text-[#6B6B6B] px-4 py-2 rounded-[4px] text-[13px] font-sans border border-[#E5DFD3]">
                    {insurer}
                  </span>
                ))}
              </div>
            )}
            <p className="text-[13.5px] text-[#6B6B6B] font-sans italic mb-8">
              Insurance coverage varies by policy, network and benefits. Please confirm eligibility before treatment.
            </p>
            <div className="flex justify-center">
              <a href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20check%20my%20insurance%20coverage%20for%20Ayurveda." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#1F4538] text-white font-sans font-semibold text-[15px] rounded hover:bg-[#1A3A2F] transition-colors shadow-md">
                Check Insurance Coverage on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
