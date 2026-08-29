import React from 'react';
import { Check, X } from 'lucide-react';

const StressManagementJourney = ({
  bgColor = "bg-white",
  label = "YOUR JOURNEY",
  title = "What comprehensive Ayurvedic stress management looks like at our JVC clinic.",
  subtitle = "Realistic understanding of timeline helps set appropriate expectations.",
  phases = [
    {
      phase: "PHASE 1",
      title: "Assessment & Foundation",
      time: "Week 1",
      description: "Comprehensive 90-minute initial consultation with Dr. Neethu identifying your stress patterns, constitutional factors, life context, previous approaches, and treatment goals. Personalised treatment plan design. First treatments may begin. Foundation lifestyle recommendations initiated. Initial herbal medicines prescribed if appropriate."
    },
    {
      phase: "PHASE 2",
      title: "Active Treatment Intensive",
      time: "Weeks 2–6",
      description: "Regular treatment sessions building sustained calming response. Shirodhara series (twice weekly to daily depending on programme intensity), possible Nasya and Abhyanga integration, herbal medicine adjustments based on response. Initial improvements often visible — better sleep, reduced physical tension, calmer baseline state."
    },
    {
      phase: "PHASE 3",
      title: "Sustained Improvement",
      time: "Weeks 6–12",
      description: "Continued treatments at reducing frequency, herbal medicine maintenance, lifestyle practices becoming sustained habits. Substantial improvement typically apparent — reduced stress reactivity, better sleep quality, improved emotional regulation, better physical wellbeing."
    },
    {
      phase: "PHASE 4",
      title: "Long-Term Partnership",
      time: "Month 3+",
      description: "Transitioned to sustained wellness partnership with periodic treatments, ongoing lifestyle practices, seasonal adjustments as life circumstances evolve. Some patients continue monthly maintenance Shirodhara; others transition to quarterly programmes with intensification during high-stress periods."
    }
  ],
  footerNote = "Individual variation is substantial based on stress severity, constitutional factors, treatment adherence, life circumstances, and personal response. Some patients experience substantial early improvement; others benefit more from sustained programme continuation.",
  canAchieve = [
    "Substantial reduction in stress reactivity",
    "Improved sleep quality",
    "Better emotional regulation",
    "Reduced physical tension symptoms",
    "Improved digestive function",
    "Culturally acceptable non-pharmaceutical approach",
    "Effective coordination with modern care"
  ],
  cannotAchieve = [
    "Instant transformation from lifetime patterns",
    "Permanent results without continued practice",
    "Substitute for specialist care in severe mental health conditions",
    "Rapid change without lifestyle engagement",
    "Treatment appropriate for all patients"
  ],
  cannotAchieveNote = "Important: Severe mental health concerns require modern specialist care. We support alongside rather than substitute."
}) => {
  return (
    <section className={`${bgColor} py-20 md:py-28 px-4 md:px-6 lg:px-12`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <p className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A961] uppercase">
            {label}
          </p>
          <h2 className="text-[32px] md:text-[42px] font-serif font-medium text-[#1A1A1A] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[15px] md:text-[16px] text-[#6B6B6B] font-sans leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Timeline Grid (4 Phases) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((ph, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[8px] border-t-4 flex flex-col justify-between"
              style={{
                backgroundColor: 'rgb(250, 246, 239)',
                borderTopColor: 'rgb(201, 169, 97)',
                borderLeft: '1px solid rgb(229, 223, 211)',
                borderRight: '1px solid rgb(229, 223, 211)',
                borderBottom: '1px solid rgb(229, 223, 211)',
              }}
            >
              <div>
                <span className="text-[11px] font-sans font-semibold tracking-[0.15em] text-[#8C8C8C] uppercase block mb-1">
                  {ph.phase}
                </span>
                <h3 className="text-[19px] font-serif font-medium text-[#1A1A1A] leading-snug mb-1">
                  {ph.title}
                </h3>
                <span className="text-[12px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-5">
                  {ph.time}
                </span>
                <p className="text-[13.5px] leading-relaxed text-[#5A5A5A] font-sans">
                  {ph.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Note */}
        {footerNote && (
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-[14px] md:text-[15px] text-[#6B6B6B] font-sans leading-relaxed italic">
              {footerNote}
            </p>
          </div>
        )}

        {/* Can Achieve vs Cannot Achieve Box */}
        <div className="max-w-4xl mx-auto rounded-[8px] p-8 md:p-12 border grid md:grid-cols-2 gap-10 md:gap-16" style={{ backgroundColor: 'rgb(250, 246, 239)', borderColor: 'rgb(229, 223, 211)' }}>
          {/* Can Achieve */}
          <div>
            <h4 className="text-[12px] font-sans font-semibold tracking-[0.15em] text-[#8C8C8C] uppercase mb-6">
              CAN ACHIEVE
            </h4>
            <ul className="space-y-4">
              {canAchieve.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] font-sans text-[#4A4A4A] leading-relaxed">
                  <Check size={16} className="text-[#C9A961] flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cannot Achieve */}
          <div>
            <h4 className="text-[12px] font-sans font-semibold tracking-[0.15em] text-[#8C8C8C] uppercase mb-6">
              CANNOT ACHIEVE
            </h4>
            <ul className="space-y-4 mb-6">
              {cannotAchieve.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] font-sans text-[#4A4A4A] leading-relaxed">
                  <X size={16} className="text-[#8C8C8C] flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {cannotAchieveNote && (
              <p className="text-[12px] text-[#E63946] font-sans leading-relaxed pt-4 border-t border-dashed border-gray-300">
                {cannotAchieveNote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StressManagementJourney;
