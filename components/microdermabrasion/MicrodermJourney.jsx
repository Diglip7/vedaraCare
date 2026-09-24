import React from 'react';

const MicrodermJourney = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[0.15em] text-[#C9A55A] uppercase mb-4 font-sans">
            {data.label}
          </p>
          <h2 className="font-serif font-normal mx-auto" style={{ fontSize: 'clamp(28px, 3vw, 44px)', color: '#2C3E3A', maxWidth: '1000px', lineHeight: '1.3', marginBottom: '24px' }}>
            {data.title}
          </h2>
          {data.subtitle && (
            <div className="mx-auto" style={{ maxWidth: '800px', borderLeft: '3px solid rgb(200, 168, 127)', paddingLeft: '24px', textAlign: 'left', marginBottom: '48px' }}>
              <p className="font-sans text-[#333333]" style={{ fontSize: '15px', lineHeight: '1.7', fontWeight: '500' }}>
                {data.subtitle}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.phases.map((phase, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[#F0EBE3] flex flex-col h-full">
              <div style={{ backgroundColor: 'rgb(200, 168, 127)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fraunces, Georgia, serif', fontSize: '14px', marginBottom: '16px' }}>
                {index + 1}
              </div>
              <h3 className="text-[#333333] font-serif text-[17px] font-medium mb-4 leading-snug">
                {phase.title}
              </h3>
              <p className="text-[#5A4F47] text-[14px] leading-relaxed flex-grow font-sans">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicrodermJourney;
