import React from 'react';

const PostnatalReviewsImage = ({ data }) => {
  if (!data) return null;
  const { label, title, items, stats } = data;

  return (
    <section className="py-24 px-6 bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 mx-auto max-w-4xl">
          <p className="text-[11px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
            {label}
          </p>
          <h2 className="text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm flex flex-col h-full border border-transparent hover:border-[#C9A961]/20 transition-all">
              <div className="flex text-[#C9A961] text-lg mb-6">
                {'★★★★★'}
              </div>
              <p className="text-[14px] text-[#4A4A4A] font-sans italic leading-relaxed mb-8 flex-grow">
                {item.quote}
              </p>
              <div>
                <h4 className="text-[13px] font-sans font-bold text-[#1A1A1A] mb-1">
                  {item.author}
                </h4>
                <p className="text-[12px] text-[#8C8C8C] font-sans mb-4">
                  {item.details}
                </p>
                {item.verified && (
                  <div className="inline-block bg-[#F5F1EB] text-[#A38A52] text-[10px] font-sans font-bold tracking-wider uppercase px-3 py-1 rounded">
                    VERIFIED PATIENT
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-[#EAEAEA] pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-[#EAEAEA]">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center px-4">
                <div className="text-[28px] font-serif text-[#C9A961] mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] font-sans font-semibold tracking-[0.15em] text-[#8C8C8C] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostnatalReviewsImage;
