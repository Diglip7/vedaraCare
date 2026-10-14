import React from 'react';

const TreatmentProtocolNew = ({ bgColor, cardBg = "bg-white", label, title, description, phases, footer }) => {
  return (
    <section className={`${bgColor} px-6 md:px-12 lg:px-24 py-24`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-[#C4A962] text-sm font-semibold tracking-wider uppercase">
            {label}
          </div>
          <h2 
            className="text-4xl md:text-5xl" 
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}
          >
            {title}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {phases.map((phase, index) => (
            <div key={index} className={`${cardBg} p-6 md:p-7 rounded-2xl shadow-sm border border-[#E5DFD3]/70 relative flex flex-col h-full transition-all duration-200 hover:shadow-md`}>
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-11 h-11 rounded-full bg-[#C4A962] text-white flex items-center justify-center text-lg font-bold shrink-0"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {phase.number}
                </div>
                <div>
                  <div className="text-xs text-[#C4A962] font-semibold uppercase tracking-wider">
                    {phase.phaseName}
                  </div>
                  <h3 
                    className="text-lg leading-snug" 
                    style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}
                  >
                    {phase.title}
                  </h3>
                </div>
              </div>
              
              <div className="text-xs text-[#8C827A] mb-4 font-medium uppercase tracking-wide">
                {phase.duration}
              </div>
              
              <ul className="space-y-2.5 mb-6 flex-grow">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-[#4A4A4A] flex items-start gap-2 leading-relaxed">
                    <span className="text-[#C4A962] mt-0.5 flex-shrink-0 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              {phase.expected && (
                <div className="bg-[#FAF8F5] p-3.5 rounded-xl text-xs text-[#6B7280] border-l-4 border-[#C4A962] mt-auto leading-relaxed">
                  {phase.expected}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {footer && (
          <p className="text-sm text-[#6B7280] text-center">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentProtocolNew;
