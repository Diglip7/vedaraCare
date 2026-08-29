import React from 'react';
import Link from 'next/link';

const StressManagementTeam = ({
  bgColor = "bg-white",
  label = "THE TEAM",
  title = "Ayurvedic doctors for stress and anxiety care at our JVC clinic.",
  subtitle = "DHA-licensed BAMS-qualified Ayurvedic doctors with substantial stress management expertise. Female practitioner (Dr. Neethu) available. Multi-language including Arabic, English, Hindi, Malayalam, Urdu.",
  leadDoctor = {
    label: "LEAD AYURVEDIC DOCTOR",
    name: "Dr. Neethu",
    image: "/images/dr-neethu.jpg", // We can use the Neethu image
    description: "DHA-licensed BAMS-qualified Ayurvedic Doctor with substantial stress and anxiety management expertise. Female practitioner providing comprehensive constitutional assessment, personalised treatment planning, and sustained partnership approach. Cultural competence across Dubai's diverse community. Specialised expertise across all stress and anxiety presentations from chronic work stress to burnout recovery.",
    tags: ["DHA-Licensed", "BAMS Qualified", "Female Practitioner", "Malayalam Speaker", "Stress Specialist"],
    linkText: "View full profile →",
    link: "/doctors/dr-neethu-ayurveda"
  },
  teamMembers = [
    {
      title: "Ayurvedic Therapy Team",
      description: "Trained female and male therapists delivering therapeutic components including Shirodhara, Nasya, Abhyanga under doctor supervision. Cultural sensitivity. Multi-language capability."
    },
    {
      title: "Modern Mental Health Coordination",
      description: "Our approach coordinates with modern mental health specialists when the clinical situation warrants. Complementary integration serving patient wellbeing. Referral pathways to psychologists and psychiatrists when appropriate."
    },
    {
      title: "Multi-Disciplinary Team",
      description: "When stress management benefits from physiotherapy for physical tension, dermatology for stress-related skin concerns, or home healthcare for comprehensive support — coordinated multi-disciplinary care at same JVC clinic."
    }
  ]
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mx-auto max-w-3xl">
          <p className="text-[12px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
            {label}
          </p>
          <h2 className="text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-6">
            {title}
          </h2>
          <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-stretch">
          {/* Left Column: Lead Doctor */}
          <div className="bg-[#FAF8F5] rounded-xl p-8 flex flex-col md:flex-row gap-8 border border-[#E5DFD3]/40">
            <div className="w-full md:w-[42%] h-[320px] md:h-auto shrink-0 relative overflow-hidden rounded-lg">
              <img 
                src={leadDoctor.image} 
                alt={leadDoctor.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="text-[10px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-3">
                  {leadDoctor.label}
                </div>
                <h3 className="text-[26px] font-serif font-medium text-[#1A1A1A] mb-4">
                  {leadDoctor.name}
                </h3>
                <p className="text-[14px] text-[#4A4A4A] font-sans leading-relaxed mb-6">
                  {leadDoctor.description}
                </p>
              </div>

              <div>
                {leadDoctor.tags && leadDoctor.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {leadDoctor.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 rounded text-[11px] font-sans font-medium"
                        style={{ backgroundColor: 'rgb(240, 233, 221)', color: 'rgb(85, 75, 60)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <Link href={leadDoctor.link || "#"}>
                  <span className="text-[13px] font-sans font-semibold text-[#C9A961] hover:text-[#B3924E] pb-0.5 transition-colors inline-block cursor-pointer">
                    {leadDoctor.linkText}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Team Members Stack */}
          <div className="flex flex-col gap-6 justify-between">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="rounded-xl p-7 flex-grow flex flex-col justify-center"
                style={{ 
                  background: 'rgb(250, 246, 239)', 
                  borderLeft: '4px solid rgb(201, 169, 97)',
                  borderTop: '1px solid rgb(229, 223, 211)',
                  borderRight: '1px solid rgb(229, 223, 211)',
                  borderBottom: '1px solid rgb(229, 223, 211)'
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></span>
                  <h4 style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 500, color: 'rgb(31, 31, 31)' }}>
                    {member.title}
                  </h4>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', lineHeight: 1.7, color: 'rgb(85, 85, 85)', margin: '0px' }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StressManagementTeam;
