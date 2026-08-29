import React from 'react';
import Link from 'next/link';

const PostnatalProgrammeOptionsImage = ({ data }) => {
  if (!data) return null;
  const { label, title, description, cards, specialSituations, includes } = data;

  return (
    <section className="py-24 px-6 bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 mx-auto">
          <p className="text-[12px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
            {label}
          </p>
          <h2 className="text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-6">
            {title}
          </h2>
          <p className="text-[16px] text-[#4A4A4A] font-sans leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-8 shadow-sm flex flex-col relative ${card.isRecommended ? 'border-t-4 border-[#C9A961]' : ''}`}
            >
              {card.isRecommended && (
                <div className="absolute top-0 right-6 bg-[#C9A961] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                  RECOMMENDED
                </div>
              )}
              <div className="text-[12px] font-sans font-semibold tracking-[0.1em] text-[#6B6B6B] uppercase mb-4">
                {card.label}
              </div>
              <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A] mb-4 leading-tight">
                {card.title}
              </h3>
              <p className="text-[14px] text-[#4A4A4A] font-sans leading-relaxed mb-6">
                {card.content}
              </p>
              
              <div className="mt-auto pt-6 border-t border-[#EAEAEA]">
                <ul className="space-y-3">
                  {card.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-[13px] text-[#4A4A4A] font-sans">
                      <span className="text-[#C9A961] mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Special Situations */}
        {specialSituations && (
          <div className="bg-white p-6 rounded-lg mb-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="text-[11px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-3">
                {specialSituations.label}
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {specialSituations.items.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-[15px] font-serif font-medium text-[#1A1A1A]">{item.name}</span>
                    <span className="text-[12px] text-[#6B6B6B]">{item.duration}</span>
                  </div>
                ))}
              </div>
            </div>
            {specialSituations.buttonText && (
              <Link href={specialSituations.buttonLink || "/book"}>
                <div className="inline-block bg-[#C9A961] text-white font-sans font-semibold text-[14px] px-8 py-3 rounded hover:bg-[#B89850] transition-colors cursor-pointer text-center">
                  {specialSituations.buttonText}
                </div>
              </Link>
            )}
          </div>
        )}

        {/* Includes */}
        {includes && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-transparent">
            <div className="text-[11px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
              {includes.label}
            </div>
            <div className="flex flex-wrap gap-y-2 gap-x-4 items-center">
              {includes.items.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="text-[14px] text-[#4A4A4A] font-sans">{item}</span>
                  {index < includes.items.length - 1 && (
                    <span className="text-[#C9A961]/40">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PostnatalProgrammeOptionsImage;
