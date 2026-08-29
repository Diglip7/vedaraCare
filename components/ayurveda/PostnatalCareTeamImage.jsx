import React from 'react';
import Link from 'next/link';

const PostnatalCareTeamImage = ({ data }) => {
  if (!data) return null;
  const { label, title, subtitle, leadDoctor, teamMembers } = data;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: Lead Doctor */}
          <div className="bg-[#FAF8F5] rounded-xl p-6 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[45%] h-[300px] md:h-auto shrink-0 relative overflow-hidden rounded-lg">
              <img 
                src={leadDoctor.image} 
                alt={leadDoctor.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center flex-grow">
              <div className="text-[10px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-3">
                {leadDoctor.label}
              </div>
              <h3 className="text-[24px] font-serif font-medium text-[#1A1A1A] mb-2">
                {leadDoctor.name}
              </h3>
              <p className="text-[13px] text-[#6B6B6B] font-sans mb-6">
                {leadDoctor.credentials}
              </p>
              <p className="text-[14px] text-[#4A4A4A] font-sans leading-relaxed mb-6">
                {leadDoctor.description}
              </p>
              <Link href={leadDoctor.link || "#"}>
                <span className="text-[13px] font-sans font-semibold text-[#1A1A1A] border-b border-black pb-0.5 hover:text-[#C9A961] hover:border-[#C9A961] transition-colors inline-block w-fit cursor-pointer">
                  {leadDoctor.linkText}
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Team Members Stack */}
          <div className="flex flex-col gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} style={{ background: 'rgb(240, 235, 227)', borderRadius: '8px', padding: '24px 28px', borderLeft: '3px solid rgb(200, 168, 127)' }}>
                <h4 style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 500, color: 'rgb(31, 31, 31)', margin: '0px 0px 10px' }}>
                  {member.title}
                </h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.7, color: 'rgb(85, 85, 85)', margin: '0px' }}>
                  {member.description}
                </p>
                {member.linkText && (
                  <Link href={member.link || "#"}>
                    <span className="text-[13px] font-sans font-semibold text-[#1A1A1A] border-b border-black pb-0.5 hover:text-[#C9A961] hover:border-[#C9A961] transition-colors inline-block w-fit cursor-pointer mt-4">
                      {member.linkText}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostnatalCareTeamImage;
