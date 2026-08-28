import React from 'react';

const PostnatalPricingTableImage = ({ data }) => {
  if (!data) return null;
  const { label, title, headers, rows, footer } = data;

  return (
    <section className="py-24 px-6 bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 mx-auto max-w-4xl">
          <p className="text-[12px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
            {label}
          </p>
          <h2 className="text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2]">
            {title}
          </h2>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-transparent">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-4 px-6 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase w-1/2">
                    {headers[0]}
                  </th>
                  <th className="py-4 px-6 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase">
                    {headers[1]}
                  </th>
                  <th className="py-4 px-6 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase text-right">
                    {headers[2]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAEAEA]">
                {rows.map((row, index) => (
                  <tr key={index} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="py-5 px-6">
                      <span className={`text-[14px] font-sans font-medium ${row.highlight ? 'text-[#1A1A1A]' : 'text-[#4A4A4A]'}`}>
                        {row.service}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="text-[14px] text-[#6B6B6B] font-sans">
                        {row.duration}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <span className="text-[14px] font-sans font-semibold text-[#1A1A1A]">
                        {row.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 max-w-5xl">
          <p className="text-[12px] text-[#6B6B6B] font-sans leading-relaxed">
            {footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostnatalPricingTableImage;
