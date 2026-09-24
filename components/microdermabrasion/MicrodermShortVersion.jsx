import React from 'react';

const MicrodermShortVersion = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#F0EBE3] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F1EA] rounded-xl p-8 md:p-12 border-l-4 border-[#C9A55A]">
          <p className="text-sm font-semibold tracking-widest text-[#8A795D] uppercase mb-4">
            {data.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3E3A] mb-6">
            {data.title}
          </h2>
          <div className="text-gray-700 space-y-4 mb-8 text-lg">
            <p>{data.content}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {data.chips.map((chip, index) => (
              <span key={index} className="inline-block px-4 py-2 rounded-full border border-[#C9A55A] text-[#8A795D] text-sm bg-transparent">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrodermShortVersion;
