import React from 'react';

const PostnatalComponentsGridImage = ({ data }) => {
  if (!data) return null;
  const { label, title, description, items, footerText } = data;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 mx-auto">
          <p className="text-[12px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
            {label}
          </p>
          <h2 className="text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-[16px] text-[#4A4A4A] font-sans leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-[#FAF8F5] p-8 rounded-lg flex flex-col border border-transparent hover:border-[#C9A961]/30 transition-all">
              <div className="text-[32px] font-serif text-[#C9A961] mb-2 leading-none opacity-60">
                {item.number}
              </div>
              <h3 className="text-[18px] font-sans font-semibold text-[#1A1A1A] mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-[15px] text-[#4A4A4A] font-sans leading-relaxed flex-grow mb-6">
                {item.content}
              </p>
              <div className="text-[11px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase mt-auto pt-4 border-t border-[#C9A961]/20">
                DELIVERED: {item.delivered}
              </div>
            </div>
          ))}
        </div>

        {footerText && (
          <div className="mt-16 text-center">
            <p className="text-[14px] text-[#1A1A1A] font-sans font-medium hover:text-[#C9A961] transition-colors cursor-pointer border-b border-black hover:border-[#C9A961] inline-block pb-1">
              {footerText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostnatalComponentsGridImage;
