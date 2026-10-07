import React from 'react';
import Link from 'next/link';

const WhyVedara = ({
  eyebrow,
  label,
  title,
  items = [],
  cta,
  bgColor = "bg-[#FAF8EF]",
  cardBgColor = "bg-white"
}) => {
  const displayEyebrow = eyebrow || label;
  
  // Choose grid column layout based on number of items (4 items -> 2x2 grid)
  const gridColsClass = items.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <section className={`${bgColor} py-24`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          {displayEyebrow && (
            <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase font-bold block mb-4">
              {displayEyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] max-w-4xl mx-auto">
              {title}
            </h2>
          )}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-6 mb-16`}>
          {items.map((reason, index) => (
            <div
              key={index}
              className={`${cardBgColor} p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group`}
            >
              <div className="space-y-6">
                <span className="text-[54px] font-serif font-medium text-[#C9A961] leading-[1] block opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  {reason.n || reason.number}
                </span>
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-semibold text-[#1A1A1A] leading-[1.3]">
                    {reason.title}
                  </h3>
                  <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed">
                    {reason.text || reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cta && (
          <div className="text-center">
            <Link
              href={cta.href}
              className="inline-block bg-[#184C3A] text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-[#123a2c] transition-colors"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyVedara;
