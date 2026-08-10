import React from 'react';

const DetoxPricingSection = ({
  label = "TRANSPARENT PRICING",
  title = "What authentic Panchakarma at our JVC clinic costs for Dubai patients.",
  rows = [],
  footer = ""
}) => {
  return (
    <section className="bg-[#FAF6EF] py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A961] uppercase">
            {label}
          </p>
          <h2 className="text-[32px] md:text-[38px] font-serif font-medium text-[#1A1A1A] leading-tight">
            {title}
          </h2>
        </div>

        {/* Pricing Table Container */}
        <div className="overflow-x-auto rounded-xl border border-[#E5DFD3] bg-white shadow-sm">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="bg-black text-white text-[10px] font-sans font-semibold tracking-wider uppercase">
                <th className="py-4 px-6">PROGRAMME</th>
                <th className="py-4 px-6 text-center">DURATION</th>
                <th className="py-4 px-6 text-right">PRICE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FAF6EF]">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FAF8F5]/80 transition-colors text-[13.5px] font-sans text-gray-700">
                  <td className="py-4.5 px-6 font-medium text-gray-900">{row.programme}</td>
                  <td className="py-4.5 px-6 text-center text-gray-500">{row.duration}</td>
                  <td className="py-4.5 px-6 text-right font-semibold text-[#1F4538]">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info note */}
        {footer && (
          <p className="text-[12.5px] leading-relaxed text-[#808080] font-sans text-center max-w-4xl mx-auto pt-4">
            {footer}
          </p>
        )}

      </div>
    </section>
  );
};

export default DetoxPricingSection;
