import React from 'react';

const PostnatalJvcClinicLocation = () => {
  return (
    <section className="bg-[#F4F1EC] py-24 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[12px] font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">
            VISIT OUR JVC CLINIC
          </span>
          <h2 className="text-[36px] md:text-[44px] font-serif font-normal text-[#1A1A1A]">
            Find us at Jumeirah Village Circle, Dubai.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image with Overlay */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] group shadow-sm">
            <img 
              src="/images/vedara-care-jvc-clinic-dubai.jpg"
              alt="Vedara Care Polyclinic JVC" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5" />
            
            {/* Center floating card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-center w-[85%] max-w-[320px]">
              <h3 className="font-serif text-[22px] text-[#1A1A1A] mb-2">Vedara Care Polyclinic</h3>
              <p className="text-[14px] text-gray-600 mb-5">Jumeirah Village Circle, Dubai</p>
              <a href="https://maps.app.goo.gl/y5jZ7" target="_blank" rel="noreferrer" className="text-[#C9A961] text-[13px] font-semibold tracking-wide flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
                Open in Google Maps <span className="text-[16px] leading-none">→</span>
              </a>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-10 lg:pl-8">
            <div>
              <h4 className="text-[20px] font-serif text-[#1A1A1A] mb-4">Clinic Address</h4>
              <p className="text-[15px] text-[#4A4A4A] leading-relaxed mb-5">
                Vedara Care Polyclinic<br />
                Jumeirah Village Circle (JVC), Dubai<br />
                United Arab Emirates
              </p>
              <div className="flex items-center gap-6 text-[14px] font-medium">
                <a href="tel:+971555736312" className="flex items-center gap-2 text-[#8B2E42] hover:opacity-80 transition-opacity">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  +971 4 XXX XXXX
                </a>
                <a href="https://wa.me/971555736312" className="flex items-center gap-2 text-[#25D366] hover:opacity-80 transition-opacity">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[20px] font-serif text-[#1A1A1A] mb-4">Clinic Hours</h4>
              <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
                Monday – Saturday: 9:00 AM – 9:00 PM<br />
                Sunday: 10:00 AM – 6:00 PM
              </p>
            </div>

            <div>
              <h4 className="text-[20px] font-serif text-[#1A1A1A] mb-4">Landmarks</h4>
              <ul className="space-y-3 text-[14px] text-[#4A4A4A]">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#C9A961] rotate-45 flex-shrink-0" />
                  Walking distance from Circle Mall
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#C9A961] rotate-45 flex-shrink-0" />
                  3 min from FIVE Jumeirah Village
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#C9A961] rotate-45 flex-shrink-0" />
                  5 min from JSS Private School
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#C9A961] rotate-45 flex-shrink-0" />
                  Free patient parking
                </li>
              </ul>
            </div>

            {/* Coverage Card */}
            <div className="bg-white p-7 rounded-xl border border-[#E5E0D8] shadow-sm mt-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A961]" />
              <p className="text-[11px] font-bold tracking-wider text-[#8A8A8A] uppercase mb-3">HOME VISIT COVERAGE</p>
              <p className="text-[14px] text-[#4A4A4A] leading-relaxed">
                Postnatal Ayurvedic care predominantly delivered through home visits across Dubai — Marina, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, Mirdif (15-30 min drive). Initial consultation at JVC clinic (during pregnancy or brief postpartum visit), then daily home visits to your home across Dubai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostnatalJvcClinicLocation;
