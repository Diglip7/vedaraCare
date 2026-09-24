import React from 'react';

const HydraFacialJourney = () => {
  const phases = [
    {
      number: "1",
      title: "Phase 1 — Booking and Pre-Visit Prep",
      description: "Book by phone, WhatsApp, or website. Brief pre-consultation form covering skin history, current concerns, medications, allergies, previous aesthetic treatments. Arriving with makeup off (or with time for gentle removal during setup) makes the analysis and treatment start faster."
    },
    {
      number: "2",
      title: "Phase 2 — First Visit: Analysis + HydraFacial",
      description: "First visit is 60 minutes total. 30-minute comprehensive skin analysis with Arfah (skin type, condition, sensitivity, concerns discussion, medication review, contraindication screening). Then 30-minute Core HydraFacial delivery. You leave with skin refreshed, written session summary, and personalised recommendation for programme continuity or single-session repeat cadence."
    },
    {
      number: "3",
      title: "Phase 3 — Post-Treatment Immediate Care",
      description: "Skin will look brighter and feel deeply hydrated immediately. Some patients experience mild pink flush for 30-60 minutes — this settles quickly. Makeup can be applied 2-3 hours post-treatment. Sun protection essential. Avoid intense exercise, sauna, or hot yoga for 24 hours. Peak visible results around days 5-7."
    },
    {
      number: "4",
      title: "Phase 4 — Follow-Up (Programme Patients)",
      description: "For patients on monthly programme, next session scheduled at 4-week interval. Between-session skincare guidance from Arfah supports sustained benefit. WhatsApp available for questions between sessions. Rotating boosters and protocol tier adjustments based on skin progression."
    },
    {
      number: "5",
      title: "Phase 5 — Sustained Programme (3-6 Months)",
      description: "Sustained monthly programme over 3-6 months typically produces cumulative visible benefit — improved skin texture, sustained hydration, clearer pores, more consistent tone. Programme review conversation at 3 months and 6 months — continue monthly, transition to quarterly maintenance, or discuss additional treatments based on progress."
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#8A795D] uppercase mb-4">
            Your Journey
          </p>
          <h2 className="font-fraunces font-normal mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: 'rgb(31, 31, 31)' }}>What a HydraFacial visit actually looks like — from booking to follow-up.</h2>
          {/* <p style={{ fontSize: '18px', color: 'rgb(85, 85, 85)', maxWidth: '700px', margin: '0px auto' }}>Every session, every patient — the components that make up the protocol.</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full relative">
              <div className="w-10 h-10 rounded-full bg-[#C9A55A] text-white flex items-center justify-center font-serif text-xl mb-6">
                {phase.number}
              </div>
              <h3 className="text-[#2C3E3A] font-serif text-lg mb-4">
                {phase.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HydraFacialJourney;
