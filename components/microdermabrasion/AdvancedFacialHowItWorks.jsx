import React from 'react';
import Image from 'next/image';

const AdvancedFacialHowItWorks = ({ data }) => {
  return (
    <section className="bg-[#F8F5F0] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="w-full lg:w-[55%]">

            <h2 className="text-[32px] md:text-[40px] font-serif font-medium text-[#1A1A1A] leading-tight mb-12">
              {data.title}
            </h2>

            {data.blocks.map((block, idx) => (
              <div key={idx} className={`mb-10 ${!block.title ? 'border-l-2 border-[#C9A961] pl-6' : ''}`}>
                {block.title && (
                  <h3 className="text-[#C9A961] font-sans font-bold text-[15px] mb-3">
                    {block.title}
                  </h3>
                )}
                {block.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed mb-4 last:mb-0" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                
                {block.quote && (
                  <div className="border-l-2 border-[#C9A961] pl-6 py-1 mt-6 mb-4">
                    <p className="text-[18px] md:text-[20px] font-serif text-[#C9A961] italic leading-relaxed whitespace-pre-line">
                      {block.quote}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Legacy global quote for other pages */}
            {data.quote && (
              <div className="border-l-2 border-[#C9A961] pl-6 py-1 mt-12">
                <p className="text-[18px] md:text-[20px] font-serif text-[#C9A961] italic leading-relaxed whitespace-pre-line">
                  {data.quote}
                </p>
              </div>
            )}

            {/* Full Width Bottom Table */}
            {data.table && (
              <div className="mt-16 lg:mt-24 w-full">
                <h3 className="text-[#C9A961] font-sans font-medium text-[20px] mb-8">
                  {data.table.title}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans">
                    <thead>
                      <tr className="bg-[#C9A961] text-white">
                        {data.table.headers.map((header, idx) => (
                          <th key={idx} className="py-4 px-6 text-[14px] font-semibold tracking-wider whitespace-nowrap">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EADFCB]">
                      {data.table.rows.map((row, idx) => (
                        <tr key={idx} className="bg-transparent hover:bg-[#F3EFE9] transition-colors">
                          <td className="py-4 px-6 text-[14px] text-[#1A1A1A] font-medium">{row.pathway}</td>
                          <td className="py-4 px-6 text-[14px] text-[#4A4A4A]">{row.invasiveness}</td>
                          <td className="py-4 px-6 text-[14px] text-[#4A4A4A]">{row.cadence}</td>
                          <td className="py-4 px-6 text-[14px] text-[#4A4A4A]">{row.downtime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Full Width Bottom Quote */}
            {data.bottomQuote && (
              <blockquote className="font-serif italic mt-10" style={{ fontSize: "22px", color: "rgb(31, 31, 31)", borderLeft: "3px solid rgb(200, 168, 127)", paddingLeft: "28px", maxWidth: "560px" }}>
                <p style={{ marginBottom: "10px", lineHeight: 1.55 }}>
                  {typeof data.bottomQuote === 'string' ? data.bottomQuote : data.bottomQuote.text}
                </p>
                {data.bottomQuote.citation && (
                  <cite className="font-sans" style={{ fontStyle: "normal", fontSize: "13px", color: "rgb(119, 119, 119)", fontWeight: 500 }}>
                    {data.bottomQuote.citation}
                  </cite>
                )}
              </blockquote>
            )}

          </div>

          {/* Right Content - Image & Card */}
          <div className="w-full lg:w-[45%]">
            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden aspect-[4/5] w-full mb-6 relative">
                <Image
                  src={data.image}
                  alt={data.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card equivalent */}
              {data.floatingCard && (
                <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
                  {/* Vedara's Approach */}
                  <div className="mb-6">
                    <h4 className="text-[14px] font-bold text-[#C9A961] font-sans mb-4">
                      {data.floatingCard.approach.label}
                    </h4>
                    <h4 className="text-[14px] font-bold text-[#1A1A1A] font-sans mb-4">
                      {data.floatingCard.approach.title}
                    </h4>
                    <ul className="space-y-3">
                      {data.floatingCard.approach.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Does NOT Include */}
                  <div>
                    <h4 className="text-[14px] font-bold text-[#1A1A1A] font-sans mb-4">
                      {data.floatingCard.excludes.title}
                    </h4>
                    <ul className="space-y-3">
                      {data.floatingCard.excludes.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#999999] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-[14px] text-[#999999] font-sans leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFacialHowItWorks;
