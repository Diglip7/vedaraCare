import React from 'react';
import Link from 'next/link';

const MicrodermArfahProfile = ({ data, bgColor, cardBgColor }) => {
  if (!data) return null;

  // Use props if provided, otherwise fallback to data properties
  let finalBg = bgColor || data.bgColor || 'transparent';
  let finalCardBg = cardBgColor || data.cardBgColor || 'transparent';

  // Clean up any Tailwind brackets (e.g. "[#F0EBE3]" -> "#F0EBE3")
  if (finalBg.startsWith('[') && finalBg.endsWith(']')) {
    finalBg = finalBg.slice(1, -1);
  }
  if (finalCardBg.startsWith('[') && finalCardBg.endsWith(']')) {
    finalCardBg = finalCardBg.slice(1, -1);
  }

  return (
    <section style={{ backgroundColor: finalBg }} className="py-16 md:py-24 border-y border-[#E8E1D5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row gap-8 md:gap-0 rounded-2xl overflow-hidden shadow-sm"
          style={{ backgroundColor: finalCardBg }}
        >
          <div className="md:w-2/5">
            <div className="aspect-[4/5] md:aspect-auto md:h-full">
              <img
                src={data.image}
                alt={data.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12">
            <h2 className="text-3xl font-serif text-[#2C3E3A] mb-2">
              {data.name}
            </h2>
            <p className="text-xs font-semibold tracking-widest text-[#8A795D] uppercase mb-6">
              {data.designation}
            </p>

            <div className="text-gray-600 space-y-4 mb-8 text-sm leading-relaxed">
              {data.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {data.credentials.map((cred, i) => (
                <span key={i} className="inline-block px-3 py-1 bg-white rounded-full text-xs text-[#8A795D] border border-[#E8E1D5]">
                  {cred}
                </span>
              ))}
            </div>

            {data.links ? (
              <div className="flex flex-wrap gap-6 items-center text-sm font-medium">
                {data.links.map((link, i) => (
                  <Link key={i} href={link.href} className="text-[#2C3E3A] hover:text-[#1A2623] transition-colors border-b border-[#2C3E3A] hover:border-[#1A2623] pb-0.5">
                    {link.text}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                href={data.buttonHref}
                className="inline-block bg-[#2C3E3A] text-white px-8 py-3 rounded hover:bg-[#1A2623] transition-colors text-sm font-medium"
              >
                {data.buttonText}
              </Link>
            )}
          </div>
        </div>

        {data.clinicalOversight && (
          <div className="mt-8 bg-[#F5F0E8] border-l-4 border-[#C8A87F] p-6 rounded-r-lg max-w-8xl">
            <h3 className="font-serif font-medium text-[16px] text-[#2C3E3A] mb-2">
              {data.clinicalOversight.title}
            </h3>
            <p className="font-sans text-[13px] text-[#2C3E3A] leading-relaxed mb-3">
              {data.clinicalOversight.text}
            </p>
            {data.clinicalOversight.linkHref && (
              <Link href={data.clinicalOversight.linkHref} className="font-sans text-[13px] font-medium text-[#2C3E3A] border-b border-[#2C3E3A] hover:text-[#1A2623] transition-colors">
                {data.clinicalOversight.linkText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MicrodermArfahProfile;
