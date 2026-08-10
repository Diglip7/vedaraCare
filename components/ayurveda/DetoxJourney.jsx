import React, { useState } from 'react';
import Image from 'next/image';

const DetoxJourney = ({
  label = "YOUR DETOX JOURNEY",
  title = "What authentic Panchakarma feels like, day by day.",
  subtitle = "Realistic understanding helps prepare for an effective detox experience.",
  phases = [],
  achieve = null,
  cannotAchieve = null
}) => {
  const [activeTab, setActiveTab] = useState("01");

  const activePhase = phases.find(p => p.id === activeTab) || phases[0];

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A961] uppercase">
            {label}
          </p>
          <h2 className="text-[32px] md:text-[38px] font-serif font-medium text-[#1A1A1A] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-[#FAF6EF] overflow-x-auto">
          <div className="flex min-w-[700px] justify-between pb-1">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActiveTab(phase.id)}
                className={`flex-1 text-left pb-4 border-b-2 transition-all duration-300 font-sans ${activeTab === phase.id
                  ? 'border-[#C9A961] text-[#1A1A1A]'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
              >
                <span className="text-[10px] text-[#C8A87F] font-semibold tracking-wider uppercase block mb-1">
                  {phase.phaseNumber}
                </span>
                <span className="text-[14.5px] text-black font-serif font-semibold block">
                  {phase.phaseName}
                </span>
                <span className="text-[12px] block text-gray-500 font-sans mt-0.5">
                  {phase.duration}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Phase Content */}
        {activePhase && (
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white pt-6">
            {/* Left Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-[#FAF6EF] border border-[#C9A961] flex items-center justify-center text-[16px] font-serif font-semibold text-[#C9A961]">
                  {activePhase.id}
                </span>
                <div>
                  <h3 className="text-[22px] font-serif font-bold text-[#1A1A1A]">
                    {activePhase.phaseName}
                  </h3>
                  <span className="text-[12px] font-sans text-gray-400 block">
                    {activePhase.duration}
                  </span>
                </div>
              </div>
              <p className="text-[14.5px] leading-relaxed text-[#5A5A5A] font-sans">
                {activePhase.description}
              </p>
            </div>

            {/* Right Image */}
            <div className="relative aspect-[16/9] md:aspect-[1.8] rounded-xl overflow-hidden shadow-sm bg-gray-100">
              {activePhase.image && (
                <Image
                  src={activePhase.image}
                  alt={activePhase.phaseName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
          </div>
        )}

        {/* Bottom Achieve / Cannot Achieve Cards */}
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          {/* Can Achieve */}
          {achieve && (
            <div className="bg-[#FAF8F5] rounded-xl p-8 border border-[#E5DFD3] space-y-6">
              <h4 className="text-[16px] font-serif font-semibold text-[#1A1A1A] flex items-center gap-2 border-b border-[#FAF6EF] pb-4">
                <span className="text-[#C9A961]">✓</span> {achieve.title}
              </h4>
              <ul className="space-y-3">
                {achieve.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-[#5A5A5A] font-sans leading-snug">
                    <span className="text-[#C9A961] mt-0.5 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cannot Achieve */}
          {cannotAchieve && (
            <div className="bg-[#FAF8F5] rounded-xl p-8 border border-[#E5DFD3] space-y-6">
              <h4 className="text-[16px] font-serif font-semibold text-[#1A1A1A] flex items-center gap-2 border-b border-[#FAF6EF] pb-4">
                <span className="text-gray-400">○</span> {cannotAchieve.title}
              </h4>
              <ul className="space-y-3">
                {cannotAchieve.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-[#5A5A5A] font-sans leading-snug">
                    <span className="text-gray-400 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default DetoxJourney;
