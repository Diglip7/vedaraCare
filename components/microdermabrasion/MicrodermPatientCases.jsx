import React from 'react';

const MicrodermPatientCases = ({ data }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-16 md:py-24">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {data.cases.map((patientCase, index) => (
            <div key={index} className="bg-[#F5F1EA] p-8 md:p-10 rounded-lg flex flex-col h-full border-l-[3px] border-[#C9A55A]">
              <p className="font-serif italic text-[#333333] text-[16px] leading-relaxed mb-8 flex-grow">
                "{patientCase.text}"
              </p>
              
              <div className="mt-auto pt-4">
                {patientCase.authorName && (
                  <p className="font-sans text-[14px] text-[#333333] font-semibold mb-1">
                    {patientCase.authorName}
                  </p>
                )}
                {patientCase.authorDetails && (
                  <p className="font-sans text-[12px] text-[#777777] mb-1">
                    {patientCase.authorDetails}
                  </p>
                )}
                {patientCase.authorProgramme && (
                  <p className="font-sans text-[12px] text-[#999999]">
                    {patientCase.authorProgramme}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {data.footer && (
          <div className="max-w-[1000px] mx-auto text-center border-t border-[#E8E2D6] pt-8">
            <p className="font-sans text-[12px] text-[#777777] leading-relaxed">
              {data.footer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MicrodermPatientCases;
