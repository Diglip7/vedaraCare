import React from 'react';
import Link from 'next/link';

export const MesotherapyAtAGlance = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#FAF7F2] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.sectionLabel}</p>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] tracking-[-0.01em] m-0">{data.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {data.cards.map((card, i) => (
            <div key={i} className="bg-[#F0EBE3] p-8 rounded-lg">
              <h3 className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{card.label}</h3>
              <p className="text-[15px] font-sans text-[#1F1F1F] leading-[1.6] m-0">{card.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#C8A87F] rounded-lg p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-[65%]">
            <h3 className="font-serif text-[24px] text-white font-medium mb-3">{data.banner.title}</h3>
            <p className="font-sans text-[15px] text-[#F9F7F4] leading-[1.6] whitespace-pre-line m-0">{data.banner.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/book" className="bg-[#1F1F1F] text-white px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#333] transition-colors">{data.banner.btn1}</Link>
            <a href="https://wa.me/971555736312" className="border border-[#1F1F1F] text-[#1F1F1F] px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#1F1F1F] hover:text-white transition-colors text-center">{data.banner.btn2}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MesotherapyWhyChoose = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#F9F7F4] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.sectionLabel}</p>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] tracking-[-0.01em] mb-6">{data.title}</h2>
          <p className="text-[15px] font-sans text-[#555555] leading-[1.65] max-w-[800px] m-0">{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-lg border border-[#E8E1D8]">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-[28px] text-[#C8A87F] leading-none">{card.num}</span>
                <div>
                  <h3 className="font-serif text-[18px] text-[#1F1F1F] leading-[1.2] m-0">{card.title}</h3>
                  <span className="text-[11px] font-sans text-[#C8A87F] italic">{card.goldText}</span>
                </div>
              </div>
              <p className="text-[14px] font-sans text-[#777] leading-[1.65] m-0">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const MesotherapyEvidence = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#FAF7F2] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20 mb-16">
          <div>
            <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.sectionLabel}</p>
            <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] tracking-[-0.01em] mb-8">{data.title}</h2>
            <p className="text-[15px] font-sans text-[#555555] leading-[1.65] mb-6">{data.content1}</p>
            <p className="text-[15px] font-sans text-[#555555] leading-[1.65] mb-10">{data.content2}</p>
            <div className="border-l-[3px] border-[#C8A87F] pl-6">
              <p className="font-serif text-[18px] font-medium italic text-[#1F1F1F] leading-[1.6] mb-3">{data.quote}</p>
              <p className="text-[12px] font-sans text-[#777] m-0">{data.author}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-lg overflow-hidden h-[240px] bg-[#E8E1D8]">
              <img src={`/images/${data.img}`} alt="Evidence Base" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#F0EBE3] p-8 rounded-lg border border-[#E8E1D8]">
              <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.socialProof.label}</p>
              <p className="text-[14px] font-sans text-[#555555] leading-[1.65] m-0">{data.socialProof.text}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#C8A87F] rounded-lg p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-[65%]">
            <h3 className="font-serif text-[24px] text-white font-medium mb-3">{data.banner.title}</h3>
            <p className="font-sans text-[15px] text-[#F9F7F4] leading-[1.6] whitespace-pre-line m-0">{data.banner.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/book" className="bg-[#1F1F1F] text-white px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#333] transition-colors">{data.banner.btn1}</Link>
            <a href="https://wa.me/971555736312" className="border border-[#1F1F1F] text-[#1F1F1F] px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#1F1F1F] hover:text-white transition-colors text-center">{data.banner.btn2}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MesotherapyUnderstanding = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#FAF7F2] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.sectionLabel}</p>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] tracking-[-0.01em] mb-6">{data.title}</h2>
          <p className="text-[15px] font-sans text-[#555555] leading-[1.65] max-w-[800px] m-0">{data.subtitle}</p>
        </div>

        {/* 6.1 */}
        <div className="mb-16">
          <h3 className="font-serif text-[22px] text-[#1F1F1F] mb-4">{data.history.title}</h3>
          <p className="text-[15px] font-sans text-[#555555] leading-[1.65] max-w-[900px] mb-6">{data.history.desc}</p>
          <div className="bg-white border border-[#E8E1D8] p-6 rounded-lg max-w-[900px]">
            <p className="text-[11px] font-sans text-[#777] mb-2">{data.history.boxLabel}</p>
            <p className="text-[14px] font-sans font-medium italic text-[#1F1F1F] m-0">{data.history.boxText}</p>
          </div>
        </div>

        {/* 6.2 */}
        <div className="mb-16">
          <h3 className="font-serif text-[22px] text-[#1F1F1F] mb-6">{data.ingredients.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.ingredients.items.map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-lg border border-[#E8E1D8]">
                <h4 className="font-sans text-[14px] font-medium text-[#1F1F1F] mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A87F]"></span>
                  {item.name}
                </h4>
                <p className="text-[13px] font-sans text-[#777] m-0 ml-3.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6.3 */}
        <div className="mb-16">
          <h3 className="font-serif text-[22px] text-[#1F1F1F] mb-6">{data.indications.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.indications.items.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-[#E8E1D8]">
                <h4 className="font-serif text-[16px] text-[#C8A87F] mb-3">{item.name}</h4>
                <p className="text-[13px] font-sans text-[#555] leading-[1.6] m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6.4 */}
        <div className="mb-16">
          <h3 className="font-serif text-[22px] text-[#1F1F1F] mb-6">{data.delivery.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.delivery.items.map((item, i) => (
              <div key={i} className="bg-[#F0EBE3] p-6 rounded-lg">
                <h4 className="font-serif text-[17px] text-[#1F1F1F] mb-2">{item.name}</h4>
                <p className="text-[14px] font-sans text-[#555] leading-[1.6] m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6.5 */}
        <div className="mb-16">
          <h3 className="font-serif text-[22px] text-[#1F1F1F] mb-6">{data.mechanism.title}</h3>
          <div className="flex flex-col gap-3">
            {data.mechanism.items.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="font-sans text-[12px] font-medium text-[#C8A87F] mt-1 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-sans text-[15px] text-[#555] m-0">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6.6 */}
        <div className="mb-16">
          <h3 className="font-serif text-[22px] text-[#1F1F1F] mb-4">{data.comparison.title}</h3>
          <p className="font-sans text-[15px] text-[#555] leading-[1.6] m-0" dangerouslySetInnerHTML={{ __html: data.comparison.desc }}></p>
        </div>

        {/* 6.7 */}
        <div className="mb-16">
          <h3 className="font-serif text-[22px] text-[#1F1F1F] mb-6">{data.notRight.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-6">
            {data.notRight.items.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#C8A87F] text-[14px] font-sans mt-0.5">âœ•</span>
                <p className="font-sans text-[14px] text-[#555] m-0 leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[12px] font-sans text-[#777] italic">{data.notRight.footer}</p>
        </div>

        {/* 6.8 */}
        <div className="mb-16">
          <h3 className="font-serif text-[22px] text-[#1F1F1F] mb-4">{data.consultation.title}</h3>
          <p className="font-sans text-[15px] text-[#555] leading-[1.6] m-0" dangerouslySetInnerHTML={{ __html: data.consultation.desc }}></p>
        </div>

        {/* Banner */}
        <div className="bg-[#C8A87F] rounded-lg p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-[65%]">
            <h3 className="font-serif text-[24px] text-white font-medium mb-3">{data.banner.title}</h3>
            <p className="font-sans text-[15px] text-[#F9F7F4] leading-[1.6] whitespace-pre-line m-0">{data.banner.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/book" className="bg-[#1F1F1F] text-white px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#333] transition-colors">{data.banner.btn1}</Link>
            <a href="https://wa.me/971555736312" className="border border-[#1F1F1F] text-[#1F1F1F] px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#1F1F1F] hover:text-white transition-colors text-center">{data.banner.btn2}</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export const MesotherapyDesignedFor = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#FAF7F2] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.sectionLabel}</p>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] tracking-[-0.01em] mb-6">{data.title}</h2>
          <p className="text-[15px] font-sans text-[#555555] leading-[1.65] max-w-[800px] m-0">{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {data.segments.map((segment, i) => (
            <div key={i} className="bg-[#F0EBE3] p-6 rounded-lg border border-[#E8E1D8]">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-serif text-[20px] text-[#C8A87F] leading-none">{segment.num}</span>
                <div>
                  <h3 className="font-serif text-[16px] text-[#1F1F1F] leading-[1.2] m-0">{segment.title}</h3>
                  <span className="text-[11px] font-sans text-[#777]">{segment.age}</span>
                </div>
              </div>
              <p className="text-[13px] font-sans text-[#555] leading-[1.6] m-0">{segment.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#E8E1D8] p-8 rounded-lg mb-16">
          <h3 className="font-serif text-[22px] text-[#1F1F1F] mb-4">{data.contraindication.title}</h3>
          <p className="text-[14px] font-sans text-[#555] mb-6">{data.contraindication.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mb-6">
            {data.contraindication.items.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#C8A87F] text-[14px] mt-0.5">-</span>
                <p className="text-[13px] font-sans text-[#555] m-0 leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[12px] font-sans text-[#777] italic m-0" dangerouslySetInnerHTML={{ __html: data.contraindication.footer }}></p>
        </div>


        <div className="bg-[#C8A87F] rounded-lg p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-[65%]">
            <h3 className="font-serif text-[24px] text-white font-medium mb-3">{data.banner.title}</h3>
            <p className="font-sans text-[15px] text-[#F9F7F4] leading-[1.6] whitespace-pre-line m-0">{data.banner.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/book" className="bg-[#1F1F1F] text-white px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#333] transition-colors">{data.banner.btn1}</Link>
            <a href="https://wa.me/971555736312" className="border border-[#1F1F1F] text-[#1F1F1F] px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#1F1F1F] hover:text-white transition-colors text-center">{data.banner.btn2}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MesotherapyProtocol = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#F9F7F4] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.sectionLabel}</p>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] tracking-[-0.01em] mb-6">{data.title}</h2>
          <p className="text-[15px] font-sans text-[#555555] leading-[1.65] max-w-[800px] m-0">{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {data.steps.map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-[#E8E1D8]">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-serif text-[20px] text-[#C8A87F] leading-none">{step.num}</span>
                <h3 className="font-serif text-[16px] text-[#1F1F1F] leading-[1.2] m-0">{step.title} <span className="text-[12px] font-sans text-[#C8A87F] ml-2 italic">{step.duration}</span></h3>
              </div>
              <p className="text-[13px] font-sans text-[#555] leading-[1.6] m-0 ml-8">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="font-serif text-[26px] text-[#1F1F1F] mb-8">{data.table.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  {data.table.headers.map((header, i) => (
                    <th key={i} className="py-4 px-4 border-b-2 border-[#E8E1D8] font-sans text-[13px] font-bold text-[#1F1F1F] uppercase tracking-[0.05em]">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.table.rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#E8E1D8]">
                    <td className="py-4 px-4 font-sans text-[14px] font-medium text-[#1F1F1F]">{row.attr}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="py-4 px-4 font-sans text-[14px] text-[#555]">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] font-sans text-[#777] mt-4 italic">{data.table.footer}</p>
        </div>
      </div>
    </section>
  );
};

export const MesotherapyCadence = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#FAF7F2] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.sectionLabel}</p>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] tracking-[-0.01em] mb-6">{data.title}</h2>
          <p className="text-[15px] font-sans text-[#555555] leading-[1.65] max-w-[800px] m-0">{data.subtitle}</p>
        </div>
        <div className="flex flex-col gap-8 mb-16 relative">
          <div className="absolute left-[24px] top-[24px] bottom-[24px] w-[2px] bg-[#E8E1D8] hidden md:block"></div>
          {data.phases.map((phase, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative z-10">
              <div className="w-[50px] h-[50px] rounded-full bg-[#C8A87F] text-white flex items-center justify-center font-serif text-[18px] shrink-0 mx-auto md:mx-0 shadow-md">
                {phase.step}
              </div>
              <div className="pt-2 md:pt-3">
                <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-2">{phase.title} <span className="text-[12px] font-sans text-[#C8A87F] ml-3 italic">{phase.label}</span></h3>
                <p className="text-[14px] font-sans text-[#555] leading-[1.6] m-0">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#C8A87F] rounded-lg p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-[65%]">
            <h3 className="font-serif text-[24px] text-white font-medium mb-3">{data.banner.title}</h3>
            <p className="font-sans text-[15px] text-[#F9F7F4] leading-[1.6] whitespace-pre-line m-0">{data.banner.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/book" className="bg-[#1F1F1F] text-white px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#333] transition-colors">{data.banner.btn1}</Link>
            <a href="https://wa.me/971555736312" className="border border-[#1F1F1F] text-[#1F1F1F] px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#1F1F1F] hover:text-white transition-colors text-center">{data.banner.btn2}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MesotherapyJourneys = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#F9F7F4] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.sectionLabel}</p>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] tracking-[-0.01em] mb-6">{data.title}</h2>
          <div className="bg-white p-5 rounded border border-[#E8E1D8] max-w-[1000px]">
            <p className="text-[12px] font-sans text-[#777] italic m-0">{data.subtitle}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cases.map((c, i) => (
            <div key={i} className="bg-white rounded-lg border border-[#E8E1D8] overflow-hidden flex flex-col">
              <div className="h-[220px] bg-[#F0EBE3] relative">
                <img src={`/images/${c.img}`} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-2">{c.label}</p>
                <h3 className="font-serif text-[18px] text-[#1F1F1F] mb-1">{c.title}</h3>
                <p className="text-[12px] font-sans text-[#777] mb-5">{c.patient}</p>

                <div className="flex-1 flex flex-col gap-4">
                  <div>
                    <h4 className="text-[12px] font-sans font-bold text-[#1F1F1F] mb-1">Formulation</h4>
                    <p className="text-[13px] font-sans text-[#555] leading-[1.6] m-0">{c.formulation}</p>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-sans font-bold text-[#1F1F1F] mb-1">Cadence</h4>
                    <p className="text-[13px] font-sans text-[#555] leading-[1.6] m-0">{c.cadence}</p>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-sans font-bold text-[#1F1F1F] mb-1">Outcome</h4>
                    <p className="text-[13px] font-sans text-[#555] leading-[1.6] m-0" dangerouslySetInnerHTML={{ __html: c.outcome }}></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const MesotherapyPractitioner = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#FAF7F2] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.sectionLabel}</p>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] tracking-[-0.01em] m-0">{data.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#F0EBE3] p-8 rounded-lg border border-[#E8E1D8]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[50px] h-[50px] rounded-full bg-[#1F1F1F] flex items-center justify-center shrink-0">
                <span className="text-white text-[20px]">ðŸ©º</span>
              </div>
              <div>
                <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-1">{data.primary.role}</p>
                <h3 className="font-serif text-[20px] text-[#1F1F1F] m-0 leading-tight">{data.primary.name}</h3>
                <p className="text-[12px] font-sans text-[#777] m-0">{data.primary.credentials}</p>
              </div>
            </div>
            <ul className="flex flex-col gap-2 mb-6 ml-1">
              {data.primary.points.map((pt, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-[#C8A87F] text-[12px] mt-1">✓</span>
                  <span className="text-[13px] font-sans text-[#555] leading-[1.5]">{pt}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-[#E8E1D8] pt-6">
              <p className="text-[14px] font-serif italic text-[#1F1F1F] leading-[1.6] m-0">{data.primary.quote}</p>
            </div>
          </div>

          <div className="bg-[#F0EBE3] p-8 rounded-lg border border-[#E8E1D8]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[50px] h-[50px] rounded-full bg-[#C8A87F] flex items-center justify-center shrink-0">
                <span className="text-white text-[20px]">ðŸ‘¤</span>
              </div>
              <div>
                <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-1">{data.support.role}</p>
                <h3 className="font-serif text-[20px] text-[#1F1F1F] m-0 leading-tight">{data.support.name}</h3>
                <p className="text-[12px] font-sans text-[#777] m-0">{data.support.credentials}</p>
              </div>
            </div>
            <ul className="flex flex-col gap-2 mb-6 ml-1">
              {data.support.points.map((pt, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-[#C8A87F] text-[12px] mt-1">✓</span>
                  <span className="text-[13px] font-sans text-[#555] leading-[1.5]">{pt}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-[#E8E1D8] pt-6">
              <p className="text-[14px] font-serif italic text-[#1F1F1F] leading-[1.6] m-0">{data.support.quote}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F0EBE3] p-6 rounded-lg border border-[#E8E1D8] flex items-center gap-4 mb-16">
          <div className="w-8 h-8 rounded bg-white flex items-center justify-center shrink-0 shadow-sm text-[#C8A87F] text-[16px]">
            {data.nursing.icon}
          </div>
          <div>
            <h4 className="font-sans text-[14px] font-medium text-[#1F1F1F] mb-1">{data.nursing.title}</h4>
            <p className="text-[13px] font-sans text-[#555] m-0">{data.nursing.desc}</p>
          </div>
        </div>

        <div className="bg-[#C8A87F] rounded-lg p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-[65%]">
            <h3 className="font-serif text-[24px] text-white font-medium mb-3">{data.banner.title}</h3>
            <p className="font-sans text-[15px] text-[#F9F7F4] leading-[1.6] whitespace-pre-line m-0">{data.banner.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/book" className="bg-[#1F1F1F] text-white px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#333] transition-colors">{data.banner.btn1}</Link>
            <a href="https://wa.me/971555736312" className="border border-[#1F1F1F] text-[#1F1F1F] px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#1F1F1F] hover:text-white transition-colors text-center">{data.banner.btn2}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MesotherapyInvestment = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-[#FAF7F2] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="text-[11px] font-sans font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">{data.sectionLabel}</p>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] tracking-[-0.01em] m-0">{data.title}</h2>
        </div>

        <div className="bg-[#1F1F1F] text-white rounded-lg p-8 mb-12">
          <h3 className="font-serif text-[18px] text-[#C8A87F] mb-6">{data.savingsBanner.title}</h3>
          <div className="flex flex-col md:flex-row gap-8">
            {data.savingsBanner.courses.map((course, i) => (
              <div key={i}>
                <h4 className="font-sans text-[15px] font-medium mb-1">{course.name}</h4>
                <p className="text-[13px] font-sans text-[#A0A0A0] m-0">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr>
                {data.table.headers.map((header, i) => (
                  <th key={i} className="py-4 px-4 bg-[#1F1F1F] text-white font-sans text-[13px] font-medium tracking-[0.05em] first:rounded-tl-lg last:rounded-tr-lg">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.table.rows.map((row, i) => (
                <tr key={i} className="border-b border-[#E8E1D8] even:bg-[#F0EBE3] odd:bg-transparent">
                  <td className="py-4 px-4 font-sans text-[14px] font-medium text-[#1F1F1F] w-[30%]">{row.option}</td>
                  <td className="py-4 px-4 font-sans text-[13px] text-[#555] w-[40%]">{row.desc}</td>
                  <td className="py-4 px-4 font-sans text-[13px] text-[#555] w-[15%]">{row.duration}</td>
                  <td className="py-4 px-4 font-sans text-[13px] font-medium text-[#C8A87F] w-[15%]">{row.investment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2 mb-16">
          {data.footer.map((text, i) => (
            <p key={i} className="text-[12px] font-sans text-[#777] m-0">{text}</p>
          ))}
        </div>

        <div className="bg-[#D2B48C] rounded-lg p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-[65%]">
            <h3 className="font-serif text-[24px] text-[#1F1F1F] font-medium mb-3">{data.banner.title}</h3>
            <p className="font-sans text-[15px] text-[#333333] leading-[1.6] whitespace-pre-line m-0">{data.banner.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/book" className="bg-[#1F1F1F] text-white px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#333] transition-colors">{data.banner.btn1}</Link>
            <a href="https://wa.me/971555736312" className="border border-[#1F1F1F] text-[#1F1F1F] px-8 py-3 rounded text-[14px] font-sans font-medium hover:bg-[#1F1F1F] hover:text-white transition-colors text-center">{data.banner.btn2}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MesotherapyRelated = () => {
  return (
    <section className="py-20 bg-[#FAF7F2]" id="related">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-8">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-2 text-[#C8A87F]">Section 16</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-[#1F1F1F]">Related Treatments</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link href="/treatments/prp-facial-jvc/" className="p-6 rounded-lg flex gap-4 cursor-pointer transition-colors bg-[#F0EBE3] border border-[#E8E1D8] hover:border-[#C8A87F]">
            <span className="text-2xl flex-shrink-0 mt-1">ðŸ©¸</span>
            <div>
              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">PRP Facial JVC</p>
              <p className="font-sans text-[13px] leading-relaxed text-[#555]">Autologous blood-derived regenerative pathway  -  honest comparison available at consultation.</p>
            </div>
          </Link>
          <Link href="/treatments/exosome-skin-rejuvenation-jvc/" className="p-6 rounded-lg flex gap-4 cursor-pointer transition-colors bg-[#F0EBE3] border border-[#E8E1D8] hover:border-[#C8A87F]">
            <span className="text-2xl flex-shrink-0 mt-1">âœ¨</span>
            <div>
              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">Exosome Skin Rejuvenation JVC</p>
              <p className="font-sans text-[13px] leading-relaxed text-[#555]">Exogenous exosome topical application, typically aesthetician-scope with microneedling adjunct.</p>
            </div>
          </Link>
          <Link href="/treatments/dermal-fillers-jvc/" className="p-6 rounded-lg flex gap-4 cursor-pointer transition-colors bg-[#F0EBE3] border border-[#E8E1D8] hover:border-[#C8A87F]">
            <span className="text-2xl flex-shrink-0 mt-1">ðŸ’‰</span>
            <div>
              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">Dermal Fillers JVC</p>
              <p className="font-sans text-[13px] leading-relaxed text-[#555]">Hyaluronic acid volumization  -  complementary to mesotherapy, not a substitute.</p>
            </div>
          </Link>
          <Link href="/treatments/microneedling-jvc/" className="p-6 rounded-lg flex gap-4 cursor-pointer transition-colors bg-[#F0EBE3] border border-[#E8E1D8] hover:border-[#C8A87F]">
            <span className="text-2xl flex-shrink-0 mt-1">ðŸª¡</span>
            <div>
              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">Microneedling JVC</p>
              <p className="font-sans text-[13px] leading-relaxed text-[#555]">Mechanical modality that can pair with mesotherapy for enhanced active delivery.</p>
            </div>
          </Link>
          <Link href="/treatments/anti-aging-skin-firming-jvc/" className="p-6 rounded-lg flex gap-4 cursor-pointer transition-colors bg-[#F0EBE3] border border-[#E8E1D8] hover:border-[#C8A87F]">
            <span className="text-2xl flex-shrink-0 mt-1">ðŸŒ¿</span>
            <div>
              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">Customized Anti-Aging &amp; Skin-Firming Protocol</p>
              <p className="font-sans text-[13px] leading-relaxed text-[#555]">Aesthetician-led programme integrating around mesotherapy sessions.</p>
            </div>
          </Link>
          <Link href="/treatments/comprehensive-skin-analysis-jvc/" className="p-6 rounded-lg flex gap-4 cursor-pointer transition-colors bg-[#F0EBE3] border border-[#E8E1D8] hover:border-[#C8A87F]">
            <span className="text-2xl flex-shrink-0 mt-1">ðŸ”¬</span>
            <div>
              <p className="font-sans text-[15px] font-medium mb-1 text-[#1F1F1F]">Comprehensive Skin Analysis JVC</p>
              <p className="font-sans text-[13px] leading-relaxed text-[#555]">Foundation diagnostic informing treatment design across all modalities.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const MesotherapyOffPage = () => {
  return (
    <section className="py-20 bg-[#F5F0E8]" id="off-page">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-8">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-2 text-[#C8A87F]">Section 17</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-[#1F1F1F]">Off-Page Contextual Content</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-[#FAF7F2] border border-[#E8E1D8]">
            <p className="font-sans text-xs font-medium tracking-wider uppercase mb-3 text-[#C8A87F]">Blog Cross-Reference</p>
            <p className="font-sans text-[14px] leading-relaxed text-[#555]">Mesotherapy is one of the most versatile aesthetic modalities because the formulation can be customized to the specific indication. At Vedara Care Polyclinic in JVC Dubai, our Medical Director selects and delivers custom formulations of vitamins, amino acids, hyaluronic acid, peptides, and antioxidants  -  with ingredient transparency at consultation.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#FAF7F2] border border-[#E8E1D8]">
            <p className="font-sans text-xs font-medium tracking-wider uppercase mb-3 text-[#C8A87F]">GBP Post Seed</p>
            <p className="font-sans text-[14px] leading-relaxed text-[#555]">Considering mesotherapy in Dubai? At Vedara Care JVC, we deliver physician-led custom-formulation mesotherapy with ingredient transparency at consultation. Book Medical Director consultation to discuss whether mesotherapy fits your skin goals.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#FAF7F2] border border-[#E8E1D8]">
            <p className="font-sans text-xs font-medium tracking-wider uppercase mb-3 text-[#C8A87F]">Digital PR Pitch</p>
            <p className="font-sans text-[14px] leading-relaxed text-[#555]">The &quot;meso glow&quot; narrative dominates Dubai&apos;s aesthetic market, but few clinics disclose which ingredients are actually in their mesotherapy formulations. Vedara Care Polyclinic in JVC has taken a formulation-transparency position  -  Medical Director selects and discloses ingredients at consultation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
