import React from 'react';

const OxyGeneoComprehensiveProtocol = () => {
  const phases = [
    {
      number: "01",
      title: "Comprehensive Skin Analysis (First Visit)",
      description: "30-minute skin analysis with Arfah  -  skin type, sensitivity assessment, current concerns, medication review, previous treatment history, contraindication screening, and OxyPod selection discussion. Not skipped for first-time patients."
    },
    {
      number: "02",
      title: "Pre-Treatment Skin Preparation",
      description: "Makeup and product removal, gentle double cleanse to prepare skin surface for OxyPod-primer reaction. Brief explanation of the distinctive CO2 bubbling sensation of the oxygenation step. ."
    },
    {
      number: "03",
      title: "OxyPod Selection and Primer Application",
      description: "Selected OxyPod capsule opened. Primer gel applied to skin. OxyPod contents combined with primer to initiate the controlled CO2-producing chemical reaction. This is where treatment specificity happens."
    },
    {
      number: "04",
      title: "The Tri-Effect Treatment Application",
      description: "Treatment tip moved across face in systematic pattern. Three actions simultaneously: gentle exfoliation from tip texture, chemical exfoliation from OxyPod alpha-hydroxy acids, and oxygenation via CO2 triggering Bohr Effect. Duration: 20 - 30 minutes."
    },
    {
      number: "05",
      title: "The Distinctive Bubbling Sensation",
      description: "Patients describe the oxygenation step as a gentle, pleasant bubbling sensation across the skin  -  not painful, not stinging. This is a distinctive experience that defines Oxy-Geneo versus other advanced facials."
    },
    {
      number: "06",
      title: "Serum Infusion Layer",
      description: "Additional active serums infused into freshly treated skin  -  hyaluronic acid, peptides, antioxidants aligned with OxyPod treatment focus. Rolling infusion via treatment tip supports serum absorption."
    },
    {
      number: "07",
      title: "Optional TriPollar RF Add-On",
      description: "For patients booked with RF add-on, TriPollar RF device applied across face and neck at end of Oxy-Geneo core protocol. Gentle heat sensation, 15 - 25 minutes additional. Provides surface tightening benefit integrated with facial."
    },
    {
      number: "08",
      title: "Optional LED Light Therapy Add-On",
      description: "Blue LED (415nm) for acne-prone skin or Red LED (630nm) for aging and inflammation. 10 - 15 minutes exposure at end of protocol. Optional add-on discussed and priced separately."
    },
    {
      number: "09",
      title: "Post-Treatment Skin Care",
      description: "Sun protection (SPF) applied at end of session. Immediate post-treatment skincare guidance verbal and written. Take-home skincare recommendations aligned with in-clinic protocol for programme continuity."
    },
    {
      number: "10",
      title: "Written Session Summary and Follow-Up Plan",
      description: "Written summary  -  OxyPod used, add-ons integrated, observations, recommended next session cadence, home-care recommendations. For programme patients, next session scheduled with OxyPod rotation plan."
    }
  ];

  return (
    <section className="section-pad py-16 md:py-24" style={{ background: 'rgb(245, 240, 232)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-fraunces italic uppercase tracking-widest text-xs mb-3" style={{ color: 'rgb(200, 168, 127)' }}>
            Comprehensive Protocol
          </p>
          <h2 className="font-fraunces font-normal mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: 'rgb(31, 31, 31)' }}>
            What actually happens in a OxyGeneo session with Arfah.
          </h2>
          <p style={{ fontSize: '18px', color: 'rgb(85, 85, 85)', maxWidth: '700px', margin: '0px auto' }}>
            Every session, every patient  -  the components that make up the protocol.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {phases.map((phase, index) => (
            <div key={index} className="gold-card transition-shadow hover:shadow-md" style={{ background: 'rgb(255, 255, 255)', borderRadius: '8px', padding: '24px' }}>
              <div className="font-fraunces mb-3" style={{ fontSize: '20px', color: 'rgb(200, 168, 127)' }}>
                {phase.number}
              </div>
              <h4 className="font-fraunces font-medium mb-3" style={{ fontSize: '15px', color: 'rgb(31, 31, 31)', lineHeight: '1.35' }}>
                {phase.title}
              </h4>
              <p style={{ fontSize: '13px', color: 'rgb(85, 85, 85)', lineHeight: '1.6' }}>
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OxyGeneoComprehensiveProtocol;
