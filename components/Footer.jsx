import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin, Stethoscope, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState(null);
  const [showAllTreatments, setShowAllTreatments] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#184C3A] text-[#F8F9FA] pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Vedara Care Logo"
                width={40}
                height={40}
                className="object-contain bg-white rounded-full p-1"
              />
              <h2 className="text-2xl font-serif font-bold text-white leading-none tracking-tight">Vedara Care</h2>
            </Link>
            <p className="text-[#F8F9FA]/80 text-sm leading-relaxed max-w-[280px]">
              DHA-licensed holistic healthcare in Jumeirah Village Circle, Dubai.
            </p>
            <div className="space-y-4 text-sm text-[#F8F9FA]/80">
              <p>Al Barsha South Fourth, Binghatti Azure,<br />
                Jumeirah Village Circle Dubai, UAE
              </p>
              <div className="space-y-2">
                <a href="tel:+971 55 573 6312" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={14} />
                  <span>+971 55 573 6312</span>
                </a>
                <a href="mailto:booking@vedaracare.ae" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} />
                  <span>booking@vedaracare.ae</span>
                </a>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="https://instagram.com/vedaracare" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Follow us on Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://facebook.com/vedaracare" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Follow us on Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://linkedin.com/company/vedaracare" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Follow us on LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <button
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between text-left mb-6 md:cursor-default"
            >
              <h2 className="text-lg font-bold text-white">Services</h2>
              <ChevronDown
                size={18}
                className={`md:hidden transition-transform duration-300 ${openSection === 'services' ? 'rotate-180' : ''}`}
              />
            </button>
            <ul className={`space-y-4 text-[#F8F9FA]/80 text-sm ${openSection === 'services' ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/ayurveda-clinic-jvc" className="hover:text-white transition-colors">Ayurveda in JVC</Link></li>
              <li><Link href="/physiotherapy-jvc" className="hover:text-white transition-colors">Physiotherapy in JVC</Link></li>
              <li><Link href="/dermatology-clinic-jvc" className="hover:text-white transition-colors">Dermatology in JVC</Link></li>
              <li><Link href="/home-healthcare-jvc" className="hover:text-white transition-colors">Home Healthcare in Dubai</Link></li>
              <li><Link href="/wellness-clinic-jvc" className="hover:text-white transition-colors">Wellness Clinic in JVC</Link></li>
            </ul>
          </div>

          {/* Popular Treatments */}
          <div>
            <button
              onClick={() => toggleSection('treatments')}
              className="w-full flex items-center justify-between text-left mb-6 md:cursor-default"
            >
              <h2 className="text-lg font-bold text-white">Popular Treatments</h2>
              <ChevronDown
                size={18}
                className={`md:hidden transition-transform duration-300 ${openSection === 'treatments' ? 'rotate-180' : ''}`}
              />
            </button>
            <ul className={`space-y-4 text-[#F8F9FA]/80 text-sm ${openSection === 'treatments' ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/treatments/manual-therapy-dubai/" className="hover:text-white transition-colors">Manual Therapy</Link></li>
              <li><Link href="/treatments/cupping-therapy-dubai/" className="hover:text-white transition-colors">Cupping Therapy</Link></li>
              <li><Link href="/treatments/panchakarma-dubai/" className="hover:text-white transition-colors">Panchakarma in Dubai</Link></li>
              <li><Link href="/treatments/abhyanga-dubai/" className="hover:text-white transition-colors">Abhyanga Massage</Link></li>
              <li><Link href="/treatments/shirodhara-dubai/" className="hover:text-white transition-colors">Shirodhara</Link></li>

              {showAllTreatments && (
                <>
                  <li><Link href="/treatments/skin-rejuvenation-jvc/" className="hover:text-white transition-colors">Skin Rejuvenation</Link></li>
                  <li><Link href="/conditions/psoriasis-treatment-dubai" className="hover:text-white transition-colors">Psoriasis Treatment</Link></li>
                  <li><Link href="/services/physiotherapy" className="hover:text-white transition-colors">Sports Injury Rehab</Link></li>
                  <li><Link href="/physiotherapy/post-surgery-rehab-dubai/" className="hover:text-white transition-colors">Post-Surgery Rehab</Link></li>
                  <li><Link href="/services/dermatology" className="hover:text-white transition-colors">PRP Hair</Link></li>
                  <li><Link href="/services/home-healthcare" className="hover:text-white transition-colors">IV Drip at Home</Link></li>
                </>
              )}

              <li>
                <button
                  onClick={() => setShowAllTreatments(!showAllTreatments)}
                  className="text-[#D4A373] hover:text-white transition-colors text-xs font-semibold pt-1 flex items-center gap-1"
                >
                  <span>{showAllTreatments ? '− Show less' : '+ View 6 more treatments'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <button
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between text-left mb-6 md:cursor-default"
            >
              <h2 className="text-lg font-bold text-white">Company</h2>
              <ChevronDown
                size={18}
                className={`md:hidden transition-transform duration-300 ${openSection === 'company' ? 'rotate-180' : ''}`}
              />
            </button>
            <ul className={`space-y-4 text-[#F8F9FA]/80 text-sm ${openSection === 'company' ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/doctors" className="hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link href="/insurance" className="hover:text-white transition-colors">Insurance</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>
        </div>

        {/* Insurance Partners Section */}
        <div className="border-t border-white/20 pt-10 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-[13px] text-[#F8F9FA]/60 font-medium">
              <span>Daman</span>
              <span>AXA</span>
              <span>Allianz</span>
              <span>Oman Insurance</span>
              <span>Now Health</span>
              <span>Bupa</span>
              <span>MetLife</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm text-white font-semibold" aria-label="Trust Signals & Certifications">
              <Stethoscope size={16} />
              <span>DHA License No: 2509266</span>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer & E-E-A-T Signals */}
        <div className="border-t border-white/10 pt-6 pb-6 text-xs text-[#F8F9FA]/60 leading-relaxed text-center md:text-left space-y-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <span><strong>Author:</strong> Vedara Care Medical Team</span>
            <span className="hidden md:inline">•</span>
            <span><strong>Expertise:</strong> DHA-Licensed Specialists (<Link href="/doctors" className="underline hover:text-white">View Credentials</Link>)</span>
            <span className="hidden md:inline">•</span>
            <span><strong>Last Updated:</strong> September 2026</span>
          </div>
          <p>
            <strong>Medical Disclaimer:</strong> The information provided on this website is for educational and informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F8F9FA]/60">
          <p>© {currentYear} Vedara Care Polyclinic. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/patient-rights" className="hover:text-white transition-colors">Patient Rights</Link>
            <Link href="/editorial-policy" className="hover:text-white transition-colors">Editorial Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
