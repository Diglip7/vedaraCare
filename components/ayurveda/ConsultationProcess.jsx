import React from 'react';

const ConsultationProcess = () => {
  const steps = [
    { title: "Medical History", description: "Review of past conditions" },
    { title: "Ayurvedic Assessment", description: "Dosha & pulse diagnosis" },
    { title: "Doctor Consultation", description: "In-depth discussion" },
    { title: "Personalized Plan", description: "Therapies & herbs" },
    { title: "Follow-up", description: "Tracking progress" }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1280px] mx-auto text-center">
        <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
          YOUR JOURNEY
        </p>
        <h2 className="text-[#1A1A1A] font-serif text-[clamp(1.7rem,2.8vw,2.5rem)] leading-[1.15] mb-12">
          The Consultation Process
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-[#E5DFD3] -translate-y-1/2 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center bg-white z-10 w-full md:w-auto p-4 md:p-0">
              <div className="w-12 h-12 rounded-full bg-[#1F4538] text-white flex items-center justify-center font-serif text-xl mb-4 shadow-md">
                {index + 1}
              </div>
              <h3 className="font-serif font-medium text-[#1A1A1A] text-[17px] mb-2">{step.title}</h3>
              <p className="text-[13px] text-[#6B6B6B] font-sans">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
