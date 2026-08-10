import React from 'react';

const DetoxReviews = ({
  label = "PATIENT VOICES",
  title = "Real detox outcomes with authentic Panchakarma at our JVC clinic.",
  bgColor = "bg-[#F5F1EA]",
  cardBgColor = "#ffffff",
  items = [],
  stats = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 md:px-12`}>
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A961] uppercase">
            {label}
          </p>
          <h2 className="text-[32px] md:text-[38px] font-serif font-medium text-[#1A1A1A] leading-tight">
            {title}
          </h2>
        </div>

        {/* Reviews 3-Card Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-8 flex flex-col justify-between h-full border border-[#E5DFD3] shadow-sm"
              style={{ backgroundColor: cardBgColor }}
            >
              <div className="space-y-6">
                {/* 5 Stars */}
                <div className="text-[#C9A961] text-[15px] tracking-wider">
                  ★★★★★
                </div>

                <p className="text-[13.5px] leading-relaxed text-[#5A5A5A] font-sans">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <div>
                  <p className="text-[12px] font-sans font-semibold tracking-wider text-[#C9A961] uppercase">
                    {item.author}
                  </p>
                  <p className="text-[12px] text-[#A0A0A0] font-sans">
                    {item.details}
                  </p>
                </div>

                {/* Verified badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#E6F4EA] px-2.5 py-1 rounded text-[#137333] text-[11px] font-sans font-medium w-fit">
                  <span className="text-[12px]">✓</span> Verified patient
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Stats Box */}
        {stats && stats.length > 0 && (
          <div className="bg-white rounded-xl border border-[#E5DFD3] p-8 md:p-10 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#FAF6EF]">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1.5 pt-6 md:pt-0 first:pt-0">
                  <p className="text-[28px] md:text-[34px] font-serif font-medium text-[#C8A87F] leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[11.5px] text-[#808080] font-sans uppercase tracking-wider leading-snug max-w-[200px] mx-auto">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default DetoxReviews;
