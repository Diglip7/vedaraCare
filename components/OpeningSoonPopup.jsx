import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const OpeningSoonPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Reset modal state on route change
    setIsOpen(false);

    // Trigger popup after 3 seconds on current page
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router.asPath]);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="opening-soon-title"
    >
      <div 
        className="relative w-full max-w-lg bg-gradient-to-b from-[#FAF7F2] via-[#F8F3EA] to-[#F2EBDC] rounded-3xl p-6 sm:p-9 border border-[#C9A55A]/40 shadow-[0_25px_60px_-15px_rgba(24,76,58,0.3)] overflow-hidden transform transition-all duration-300 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative background ambient glows */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#C9A55A]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#184C3A]/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle decorative gold leaf SVG pattern */}
        <svg className="absolute -right-6 -bottom-6 w-32 h-32 text-[#C9A55A]/10 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-gray-500 hover:text-[#184C3A] rounded-full bg-white/60 hover:bg-white border border-[#E5DFD3] shadow-sm transition-all duration-200 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-[#184C3A]"
          aria-label="Close opening soon modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center pt-1 relative z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#184C3A]/10 via-[#C9A55A]/20 to-[#184C3A]/10 border border-[#C9A55A]/40 shadow-sm mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A55A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C9A55A]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-[#184C3A] uppercase font-sans">
              NEW LOCATION · JVC DUBAI
            </span>
          </div>

          {/* Luxury Icon / Branding */}
          <div className="relative w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-[#184C3A] to-[#0F3528] p-0.5 shadow-xl">
            <div className="w-full h-full rounded-[22px] bg-[#FAF7F2] flex items-center justify-center border border-[#C9A55A]/40">
              <svg className="w-10 h-10 text-[#184C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#C9A55A] rounded-full flex items-center justify-center text-white shadow-md text-xs font-bold">
              ✨
            </div>
          </div>

          {/* Title */}
          <h2 id="opening-soon-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#184C3A] mb-3 leading-snug">
            Vedara Care Polyclinic Is <span className="text-[#A0713F] italic">Opening Soon!</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[rgb(107,107,107)] leading-relaxed mb-5 max-w-md mx-auto">
            Bringing world-class, DHA-licensed wellness and medical healthcare right to your neighborhood in <strong className="text-[rgb(26,26,26)] font-semibold">Jumeirah Village Circle (JVC)</strong>.
          </p>

          {/* Specialty Service Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#E5DFD3] text-xs font-medium text-[#184C3A] shadow-sm flex items-center gap-1.5">
              <span className="text-[#C9A55A]">🌿</span> Ayurveda Care
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#E5DFD3] text-xs font-medium text-[#184C3A] shadow-sm flex items-center gap-1.5">
              <span className="text-[#C9A55A]">✨</span> Dermatology
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#E5DFD3] text-xs font-medium text-[#184C3A] shadow-sm flex items-center gap-1.5">
              <span className="text-[#C9A55A]">💪</span> Physiotherapy
            </span>
          </div>

          {/* Location & Booking Highlight Card */}
          <div className="p-4 rounded-2xl bg-white/90 backdrop-blur border border-[#C9A55A]/30 shadow-sm mb-6 text-left space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#C9A55A] shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[rgb(26,26,26)] uppercase tracking-wider">Location</p>
                <p className="text-xs sm:text-sm text-[rgb(107,107,107)] font-medium">Al Barsha South Fourth, Binghatti Azure, Shop -4, JVC</p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E5DFD3]/60 flex items-center justify-between text-xs sm:text-sm text-[#184C3A]">
              <span className="font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#184C3A]"></span>
                Pre-Launch Priority Bookings Open
              </span>
              <span className="text-[11px] font-bold text-[#A0713F] uppercase tracking-wider bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#E5DFD3]">Limited</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20your%20upcoming%20JVC%20opening%20and%20pre-book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#184C3A] to-[#12392c] text-white font-medium text-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md group"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-current text-[#C9A55A] group-hover:scale-110 transition-transform">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <span className="font-semibold">Pre-Book on WhatsApp</span>
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-3.5 rounded-2xl border-2 border-[#184C3A]/70 bg-white/80 text-[#184C3A] font-semibold text-sm hover:bg-[#184C3A] hover:text-white transition-all duration-200 shadow-sm"
            >
              Explore Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningSoonPopup;
