import React from 'react';

const OxyGeneoJourney = () => {
  const phases = [
    {
      number: "1",
      title: "Booking and Pre-Visit Prep",
      description: "Book by phone, WhatsApp, or website. Pre-consultation form covers skin history, sensitivity assessment, current concerns, medications, allergies, and previous aesthetic treatments. Arriving with makeup off speeds analysis and treatment start."
    },
    {
      number: "2",
      title: "First Visit: Analysis + OxyGeneo",
      description: "First visit is 60 minutes total. 30-minute comprehensive skin analysis with Arfah — extra focus on sensitivity assessment. Then 30-minute Core Oxy-Geneo. You leave with skin refreshed and oxygenated, written session summary, and personalised programme recommendation."
    },
    {
      number: "3",
      title: "Post-Treatment Immediate Care",
      description: "Skin will look brighter and feel refreshed immediately — the oxygenation glow is the most distinctive Oxy-Geneo result. Some patients experience mild pink flush for 30–60 minutes. Makeup can be applied 2–3 hours post-treatment. Peak visible results around days 5–7."
    },
    {
      number: "4",
      title: "Follow-Up (Programme Patients)",
      description: "Next session at 4-week interval. Between-session skincare guidance supports sustained benefit. WhatsApp available for questions. OxyPod rotation strategy discussed each session — e.g. NeoBright months 1–3 for pigmentation, NeoRevive months 4–6 for anti-aging maintenance."
    },
    {
      number: "5",
      title: "Sustained Programme (3–6 Months)",
      description: "Monthly programme over 3–6 months produces cumulative visible benefit — improved texture, sustained brightness, consistent tone. Programme review at 3 and 6 months — continue monthly, transition to quarterly maintenance, or add RF Microneedling, Carbon Laser, HIFU, or dedicated programme work."
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#8A795D] uppercase mb-4">
            Your Journey
          </p>
          <h2 className="font-fraunces font-normal mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: 'rgb(31, 31, 31)' }}>What a OxyGeneo visit actually looks like — from booking to follow-up.</h2>
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

export default OxyGeneoJourney;
