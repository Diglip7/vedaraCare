import React, { useState } from 'react';
import { SITE } from '../../lib/site';

const DoctorFAQ = ({ doctor }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = doctor?.faqs?.items || doctor?.faqs?.faqs || [
    {
      question: `Is ${doctor?.firstName || 'the doctor'} DHA-licensed?`,
      answer: `Yes. ${doctor?.name || 'Our doctor'} is fully licensed by the Dubai Health Authority. The license is current and verifiable on the DHA Sheryan portal.`
    },
    {
      question: `What are ${doctor?.firstName || 'the doctor'}'s qualifications?`,
      answer: `Our clinicians hold specialized medical degrees and extensive clinical experience in their respective fields.`
    },
    {
      question: `How many years has ${doctor?.firstName || 'the doctor'} been practising?`,
      answer: `Our clinicians have many years of dedicated clinical experience treating a wide range of conditions.`
    },
    {
      question: `What conditions does ${doctor?.firstName || 'the doctor'} specialise in?`,
      answer: `Detailed treatment approaches and clinical strengths are described in the Specialization section above.`
    },
    {
      question: 'How long is a first consultation?',
      answer: 'A first consultation is 45 to 60 minutes. This includes full history-taking, review of existing medical reports, and a written treatment plan. Follow-ups are typically 20 to 30 minutes.'
    },
    {
      question: 'How much does a consultation cost?',
      answer: 'First consultations start at AED 350. Follow-up consultations are AED 200. Treatment programmes are quoted separately based on the plan agreed at consultation. All pricing is confirmed in writing before any treatment begins.'
    },
    {
      question: `Does insurance cover consultations with ${doctor?.firstName || 'the doctor'}?`,
      answer: `${SITE.insurance}. WhatsApp us a photo of your insurance card and we will confirm your specific coverage before you book.`
    },
    {
      question: 'Can I book a video consultation?',
      answer: 'Yes. Tele-consultations are available for follow-up appointments and for new patients outside Dubai. Tele-consultations are AED 200.'
    },
    {
      question: 'Where exactly is the clinic in JVC?',
      answer: 'Our clinicians consult at Vedara Care Polyclinic, Building 7, Street 2, Jumeirah Village Circle, Dubai. The clinic is next to Circle Mall, three minutes from FIVE Jumeirah Village Hotel, and five minutes from JSS Private School. Free covered parking is available.'
    },
    {
      question: `How do I book an appointment with ${doctor?.firstName || 'the doctor'} specifically?`,
      answer: 'Three ways: tap Book a Consultation anywhere on this page for live calendar availability, WhatsApp us mentioning the doctor by name for the fastest response, or call us at +971 55 573 6312. Same-day slots are usually available with 2-hour notice via WhatsApp.'
    }
  ];

  return (
    <section className="py-24" style={{ background: 'rgb(240, 233, 221)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-[38%] md:sticky md:top-24 md:self-start">
            <p className="text-[13px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
              QUESTIONS, ANSWERED
            </p>
            <h2 className="mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '500', color: 'rgb(26, 26, 26)' }}>
              What patients ask before booking with {doctor.firstName}.
            </h2>
            <p className="text-[15px] leading-[1.78] mb-8" style={{ color: 'rgb(107, 107, 107)' }}>
              Honest answers to the most common pre-consultation questions. Not here? WhatsApp us  -  typically replied to in under 15 minutes.
            </p>
            <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-[14px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98]" style={{ background: 'rgb(74, 124, 89)', color: 'rgb(255, 255, 255)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg>
              Ask the Team
            </button>
          </div>
          <div className="md:w-[62%]" style={{ borderTop: '1px solid rgb(229, 223, 211)' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ borderBottom: '1px solid rgb(229, 223, 211)' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 text-left py-5"
                >
                  <span className="text-[15px] font-medium leading-snug" style={{ color: 'rgb(26, 26, 26)' }}>
                    {faq.question}
                  </span>
                  <span className="mt-0.5 flex-shrink-0" style={{ color: 'rgb(201, 169, 97)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: openIndex === index ? '1000px' : '0px',
                    transition: 'max-height 250ms ease-out'
                  }}
                >
                  <p className="pb-5 text-[14.5px] leading-[1.78]" style={{ color: 'rgb(107, 107, 107)' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorFAQ;
