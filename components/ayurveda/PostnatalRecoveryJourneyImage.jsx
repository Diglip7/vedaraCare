import React from 'react';

const PostnatalRecoveryJourneyImage = ({ data }) => {
  if (!data) return null;
  const { label, title, description, phases, disclaimer, limits } = data;

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
          <p className="text-[16px] text-[#4A4A4A] font-sans leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="bg-[#FAF8F5] p-8 rounded-lg flex flex-col border-t-4 border-[#C9A961]"
            >
              <div className="text-[11px] font-sans font-semibold tracking-[0.15em] text-[#6B6B6B] uppercase mb-2">
                {phase.phase}
              </div>
              <h3 className="text-[18px] font-serif font-medium text-[#1A1A1A] mb-1 leading-tight">
                {phase.title}
              </h3>
              <div className="text-[13px] text-[#C9A961] font-sans mb-6">
                {phase.days}
              </div>
              <p className="text-[14px] text-[#4A4A4A] font-sans leading-relaxed">
                {phase.content}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed">
            {disclaimer}
          </p>
        </div>

        {/* Honest Limits Box */}
        {limits && (
          <div className="bg-[#EBEAE8] p-8 rounded-lg max-w-3xl mx-auto">
            <div className="text-[11px] font-sans font-semibold tracking-[0.15em] text-[#1A1A1A] uppercase mb-4">
              {limits.label}
            </div>
            <div className="space-y-4 text-[14px] font-sans leading-relaxed">
              <p>
                <span className="font-semibold text-[#1A1A1A]">Can achieve:</span> <span className="text-[#4A4A4A]">{limits.achieve}</span>
              </p>
              <p>
                <span className="font-semibold text-[#1A1A1A]">Cannot achieve:</span> <span className="text-[#4A4A4A]">{limits.cannotAchieve}</span>
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PostnatalRecoveryJourneyImage;
