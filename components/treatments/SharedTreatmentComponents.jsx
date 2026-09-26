import React from 'react';
import Link from 'next/link';

export const ClinicLocation = () => {
  return (
    <section className="py-20 px-6 bg-[#FAF7F2]" id="location">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Clinic Location</div>
            <h3 className="font-serif text-[28px] md:text-[32px] font-normal text-[#1F1F1F] m-0 mb-6 leading-[1.25]">
              Vedara Care Polyclinic<br />
              Jumeirah Village Circle (JVC), Dubai
            </h3>

            <div className="flex flex-col gap-3.5">
              <div className="grid grid-cols-[28px_80px_1fr] gap-3 items-start">
                <span className="text-[15px]">ðŸ“</span>
                <span className="font-sans text-[12px] font-medium text-[#777777] tracking-[0.04em] pt-[1px]">Location</span>
                <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">JVC, Dubai  -  walking distance from Circle Mall</span>
              </div>
              <div className="grid grid-cols-[28px_80px_1fr] gap-3 items-start">
                <span className="text-[15px]">ðŸ“ž</span>
                <span className="font-sans text-[12px] font-medium text-[#777777] tracking-[0.04em] pt-[1px]">Phone</span>
                <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">[Clinic number  -  confirm at booking]</span>
              </div>
              <div className="grid grid-cols-[28px_80px_1fr] gap-3 items-start">
                <span className="text-[15px]">ðŸ’¬</span>
                <span className="font-sans text-[12px] font-medium text-[#777777] tracking-[0.04em] pt-[1px]">WhatsApp</span>
                <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">[WhatsApp number  -  confirm at booking]</span>
              </div>
              <div className="grid grid-cols-[28px_80px_1fr] gap-3 items-start">
                <span className="text-[15px]">ðŸ—£ï¸</span>
                <span className="font-sans text-[12px] font-medium text-[#777777] tracking-[0.04em] pt-[1px]">Languages</span>
                <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">Arabic - English - Hindi - Urdu</span>
              </div>
              <div className="grid grid-cols-[28px_80px_1fr] gap-3 items-start">
                <span className="text-[15px]">ðŸ¥</span>
                <span className="font-sans text-[12px] font-medium text-[#777777] tracking-[0.04em] pt-[1px]">Regulatory</span>
                <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">DHA-Licensed Multi-Specialty Polyclinic</span>
              </div>
              <div className="grid grid-cols-[28px_80px_1fr] gap-3 items-start">
                <span className="text-[15px]">ðŸ’³</span>
                <span className="font-sans text-[12px] font-medium text-[#777777] tracking-[0.04em] pt-[1px]">Insurance</span>
                <span className="font-sans text-[13px] text-[#1F1F1F] leading-[1.5]">Reimbursement basis (not direct billing)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-4">Dubai Catchment</div>
            <p className="font-sans text-[14px] text-[#555555] leading-[1.7] mb-6">
              Vedara Care JVC is accessible to patients across Dubai  -  walking distance to Circle Mall, 3 minutes from FIVE Jumeirah Village Hotel, 5 minutes from JSS Private School.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Dubai Marina", "JLT", "JBR", "DIFC", "Downtown Dubai", "Business Bay", "Al Barsha", "Motor City", "Sports City", "Arjan", "Studio City", "Barsha Heights", "Dubai Hills", "Palm Jumeirah", "Al Sufouh", "Emirates Hills", "Al Furjan", "Discovery Gardens"].map((area, i) => (
                <span key={i} className="font-sans text-[11px] text-[#555555] bg-[#F5F0E8] py-1.5 px-3 rounded-full">
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl overflow-hidden bg-[#F0EBE3]">
              <img alt="Vedara Care JVC polyclinic PRP facial treatment Dubai" src="/images/vedara-jvc-prp-clinic.webp" className="w-full block object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TreatmentClusterGrid = () => {
  const treatments = [
    {
      subtitle: "Cluster Peer",
      title: "Exosome Skin Rejuvenation JVC",
      desc: "Topical exogenous exosome pathway  -  honest comparison with PRP on both pages.",
      img: "/images/exosmoe-jvc.webp",
      href: "/treatments/exosome-skin-rejuvenation-jvc/"
    },
    {
      subtitle: "Cluster Peer",
      title: "Mesotherapy JVC",
      desc: "Injection-based delivery of custom formulations  -  vitamins, HA, peptides.",
      img: "/images/mesotherapy-jvc-og.webp",
      href: "/treatments/mesotherapy-skin.webp"
    },
    {
      subtitle: "Cluster Peer",
      title: "Dermal Fillers JVC",
      desc: "Hyaluronic acid volumization. Complementary to PRP  -  addresses volume loss, not dermal quality.",
      img: "/images/dermal-fillers-jvc.webp",
      href: "/treatments/dermal-fillers-jvc/"
    },
    {
      subtitle: "Adjunct Modality",
      title: "Microneedling JVC",
      desc: "Mechanical modality commonly paired with PRP for acne scar and surface texture indications.",
      img: "/images/microneedling-jvc.webp",
      href: "/treatments/microneedling-jvc/"
    },
    {
      subtitle: "Complementary Programme",
      title: "Anti-Aging & Skin-Firming Protocol JVC",
      desc: "Aesthetician-led non-invasive programme by Arfah Owais that integrates around PRP sessions.",
      img: "/images/anti-aging-jvc.webp",
      href: "/treatments/anti-aging-skin-firming-jvc/"
    },
    {
      subtitle: "Foundation Diagnostic",
      title: "Comprehensive Skin Analysis JVC",
      desc: "Detailed diagnostic protocol that informs treatment design  -  often integrated at PRP consultation.",
      img: "/images/skin-analysis-jvc.webp",
      href: "/treatments/comprehensive-skin-analysis-jvc/"
    }
  ];

  return (
    <section className="py-20 bg-[#F0EBE3]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <div className="font-sans text-[11px] font-medium text-[#C8A87F] tracking-[0.12em] uppercase mb-3">Related Treatments</div>
          <h2 className="font-serif text-[28px] md:text-[42px] font-normal text-[#1F1F1F] m-0 tracking-[-0.01em] leading-tight">Explore the Vedara Care JVC treatment cluster</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {treatments.map((t, i) => (
            <Link key={i} href={t.href} className="flex flex-col rounded-lg overflow-hidden bg-[#FAF7F2] transition-all duration-200 hover:-translate-y-1 hover:shadow-md no-underline">
              <div className="h-[180px] overflow-hidden bg-[#F0EBE3]">
                {t.img ? <img alt={t.title} src={t.img} className="w-full h-full object-cover block transition-transform duration-300 hover:scale-105" /> : null}
              </div>
              <div className="p-5 pb-6 flex-1 flex flex-col">
                <div className="font-sans text-[10px] font-medium text-[#C8A87F] tracking-[0.1em] uppercase mb-2">{t.subtitle}</div>
                <h3 className="font-serif text-[16px] font-medium text-[#1F1F1F] m-0 mb-2 leading-[1.3]">{t.title}</h3>
                <p className="font-sans text-[13px] text-[#555555] leading-[1.6] m-0 flex-1">{t.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
