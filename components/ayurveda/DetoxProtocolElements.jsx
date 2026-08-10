import React from 'react';
import Link from 'next/link';

const DetoxProtocolElements = ({
  id = "panchakarma-protocol",
  label = "PANCHAKARMA PROTOCOL",
  title = "What authentic Panchakarma actually involves at our JVC clinic.",
  subtitle = "Understanding the three-phase protocol helps set realistic expectations and identify authentic delivery.",
  description = "",
  phases = [],
  sidebar = null
}) => {
  return (
    <section id={id} className="bg-[#FAF6EF] py-24 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A961] uppercase">
            {label}
          </p>
          <h2 className="text-[32px] md:text-[38px] font-serif font-medium text-[#1A1A1A] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Phases (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-12">
            {description && (
              <p className="text-[15px] font-sans text-[#1A1A1A] leading-relaxed mb-8">
                {description}
              </p>
            )}

            <div className="space-y-10">
              {phases.map((p, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-[19px] font-serif font-bold text-[#1A1A1A]">
                      {p.phaseName}
                    </h3>
                    {p.duration && (
                      <span className="text-[10px] font-sans font-bold tracking-wider text-[#C9A961] uppercase bg-white/60 px-2 py-0.5 rounded border border-[#E5DFD3]">
                        {p.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-[#5A5A5A] font-sans">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sidebar Elements Card (lg:col-span-5) */}
          {sidebar && (
            <div className="lg:col-span-5 bg-white rounded-xl p-8 border border-[#E5DFD3] shadow-sm space-y-8">
              <div className="space-y-6">
                <h4 className="text-[12px] font-sans font-bold tracking-[0.15em] text-[#C9A961] uppercase border-b border-[#F5F1EA] pb-3">
                  {sidebar.title}
                </h4>
                
                {sidebar.groups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-3">
                    <h5 className="text-[11px] font-sans font-bold tracking-wider text-[#A0A0A0] uppercase">
                      {group.title}
                    </h5>
                    <ul className="space-y-2">
                      {group.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-[12.5px] text-[#5A5A5A] font-sans leading-snug">
                          <span className="text-[#C9A961] font-semibold text-[14px]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Duration Table */}
              {sidebar.durations && (
                <div className="border-t border-[#F5F1EA] pt-6 space-y-4">
                  <h5 className="text-[11px] font-sans font-bold tracking-wider text-[#A0A0A0] uppercase">
                    DURATION GUIDANCE
                  </h5>
                  <div className="divide-y divide-[#FAF6EF]">
                    {sidebar.durations.map((dur, dIdx) => (
                      <div key={dIdx} className="flex justify-between py-2 text-[12.5px] font-sans">
                        <span className="text-[#6B6B6B]">{dur.label}</span>
                        <span className="text-[#1A1A1A] font-semibold">{dur.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA button */}
              <div className="pt-4">
                <Link 
                  href="/book" 
                  className="w-full inline-block text-center bg-[#C9A961] hover:bg-[#b8915a] text-white py-3.5 rounded-lg font-sans font-semibold tracking-wider text-[13px] uppercase transition-colors"
                >
                  {sidebar.buttonText || "Book Detox Consultation"}
                </Link>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default DetoxProtocolElements;
