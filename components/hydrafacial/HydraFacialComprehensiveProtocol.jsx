import React from 'react';

const HydraFacialComprehensiveProtocol = () => {
  const phases = [
    {
      number: "01",
      title: "Comprehensive Skin Analysis (First Visit)",
      description: "30-minute skin analysis with Arfah before first HydraFacial. Skin type, condition, sensitivity, current concerns, medication review, previous treatment history, contraindication screening, protocol tier selection, booster selection discussion. Not skipped for first-time patients  -  this determines the appropriate protocol."
    },
    {
      number: "02",
      title: "Pre-Treatment Skin Preparation",
      description: "Makeup and product removal, gentle cleanse, skin preparation. Positioning in reclined treatment chair with proper support. Explanation of the sequence about to happen  -  no surprises during the session."
    },
    {
      number: "03",
      title: "Step 1  -  Cleanse and Peel",
      description: "Vortex-fusion tip applies gentle glycolic and salicylic acid solution across face for 5 - 10 minutes. Surface dead skin removed, dulling debris dislodged, skin prepared for extraction. Mild cooling sensation, no discomfort."
    },
    {
      number: "04",
      title: "Step 2  -  Extract and Hydrate",
      description: "Vortex tip switches to extraction mode. 15 - 20 minutes of gentle pore extraction combined with simultaneous hydrating serum infusion. Pore impurities lifted out painlessly  -  no manual pinching or bruising. This is the distinctive HydraFacial step."
    },
    {
      number: "05",
      title: "Step 3  -  Fuse and Protect",
      description: "Antioxidant serums (peptides, hyaluronic acid, antioxidants) infused via vortex tip. 5 - 15 minutes depending on booster selection. This is when targeted boosters are applied  -  Britenol for pigmentation, Dermabuilder for early aging, CTGF for plumping, or others per protocol."
    },
    {
      number: "06",
      title: "Optional Booster Serum Integration",
      description: "Booster serums added during Step 3 per protocol. Britenol, Dermabuilder, CTGF, Age Refinement, Circadia Vitamin C, JLo Beauty Booster, and other options discussed during consultation. Not every session needs boosters  -  Arfah recommends based on skin analysis and current concerns."
    },
    {
      number: "07",
      title: "Optional LED Light Therapy Add-On",
      description: "Blue LED (415nm) for acne-prone skin or Red LED (630nm) for aging and inflammation. 10 - 15 minutes exposure at end of protocol. Optional add-on discussed and priced separately."
    },
    {
      number: "08",
      title: "Post-Treatment Skin Care",
      description: "Sun protection (SPF) applied at end of session. Immediate post-treatment skin care guidance verbal and written. Take-home skincare recommendations aligned with in-clinic protocol for programme continuity."
    },
    {
      number: "09",
      title: "Written Session Summary",
      description: "Written summary of the session  -  protocol tier delivered, boosters used, any observations, recommended next steps, timeline for next session if programme. Supports treatment continuity and informs future sessions."
    },
    {
      number: "10",
      title: "Programme Continuity Plan (If Applicable)",
      description: "For monthly programme patients, next session scheduled with appropriate rotation of protocol tier and boosters based on skin progression. Programme adjustments discussed at each session  -  not fixed rigid package."
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
            What actually happens in a HydraFacial session with Arfah.
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

export default HydraFacialComprehensiveProtocol;
