import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Activity,
  Heart,
  Stethoscope,
  Home as HomeIcon,
  Building2,
  FileText,
  CreditCard,
  Check,
  Send,
  HelpCircle,
  Award,
  IdCard,
  UserCheck,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

// Custom Select Dropdown Component
function CustomSelect({ name, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = React.useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reset search query when dropdown opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3.5 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A] hover:border-gray-300 text-left font-medium transition-all text-[#1A1A1A]"
      >
        <span className="truncate">{value}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1.5 bg-white border border-gray-200/80 rounded-xl shadow-lg overflow-hidden flex flex-col">
          {/* Search Input Box */}
          <div className="p-2 border-b border-gray-100 bg-[#FAF8F5]">
            <input
              type="text"
              placeholder="Search treatment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#184C3A] bg-white text-[#1A1A1A]"
              onClick={(e) => e.stopPropagation()} // Prevent dropdown close on click
            />
          </div>

          <ul className="max-h-60 overflow-y-auto py-1.5 scrollbar-custom">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, idx) => {
                const isSelected = option === value;
                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange({ target: { name, value: option } });
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${isSelected
                        ? 'bg-[#184C3A] text-white font-semibold'
                        : 'text-gray-700 hover:bg-[#FAF8F5] hover:text-[#184C3A]'
                        }`}
                    >
                      <span className="truncate">{option}</span>
                      {isSelected && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#C9A55A]"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-2.5 text-xs text-gray-500 italic">No matches found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function BookAppointment({ dynamicTreatments }) {
  const router = useRouter();
  const { service, treatment, department, doctor, condition } = router.query;

  // Form State
  const [formData, setFormData] = useState({
    department: 'Physiotherapy',
    treatment: 'General Consultation',
    doctor: 'Any Available DHA Specialist',
    preferredDate: '',
    preferredTime: 'Morning (9:00AM to 10:00PM)',
    patientType: 'First-time Patient',
    name: '',
    phone: '',
    email: '',
    gender: 'Female',
    age: '',
    insurance: 'Self-Pay / Cash / Card',
    emiratesId: '',
    symptoms: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill form from URL parameters
  useEffect(() => {
    if (!router.isReady) return;

    let initialDept = 'Physiotherapy';
    let initialTreatment = treatment || condition || '';
    let initialDoctor = doctor || 'Any Available DHA Specialist';

    // Helper to format slugs from referrer if needed
    const acronyms = { 'ibs': 'IBS', 'pcos': 'PCOS', 'prp': 'PRP', 'cva': 'CVA' };
    const slugToTitle = (slug) => {
      return slug.split('-')
        .filter(w => w !== 'jvc' && w !== 'dubai')
        .map(w => acronyms[w.toLowerCase()] || (w.charAt(0).toUpperCase() + w.slice(1)))
        .join(' ');
    };

    // 1. Try to infer treatment from referrer if not provided in query params
    if (!initialTreatment && typeof document !== 'undefined' && document.referrer) {
      try {
        const referrerUrl = new URL(document.referrer);
        if (referrerUrl.host === window.location.host) {
          const pathParts = referrerUrl.pathname.split('/').filter(Boolean);
          const lastPart = pathParts[pathParts.length - 1];
          if (lastPart && lastPart !== 'book') {
            initialTreatment = slugToTitle(lastPart);
          }
        }
      } catch (e) {
        console.error("Error parsing referrer:", e);
      }
    }

    if (!initialTreatment) {
      initialTreatment = 'General Consultation';
    }

    // 2. Set department based on query, service parameter, or auto-detect from treatment
    if (department) {
      initialDept = department;
    } else if (service) {
      if (service.toLowerCase().includes('ayurveda')) initialDept = 'Ayurveda';
      else if (service.toLowerCase().includes('derma') || service.toLowerCase().includes('skin')) initialDept = 'Dermatology';
      else if (service.toLowerCase().includes('home')) initialDept = 'Home Healthcare';
      else initialDept = 'Physiotherapy';
    } else if (initialTreatment && dynamicTreatments) {
      // Auto-detect department by looking up the treatment in dynamicTreatments lists
      const foundDept = Object.keys(dynamicTreatments).find(deptName =>
        dynamicTreatments[deptName].some(t => t.toLowerCase() === initialTreatment.toLowerCase())
      );
      if (foundDept) {
        initialDept = foundDept;
      }
    }

    // If the selected treatment is not in the list for that department, but is in another department, switch to it
    if (dynamicTreatments && initialTreatment && initialTreatment !== 'General Consultation') {
      const currentTreatments = dynamicTreatments[initialDept] || [];
      const existsInCurrent = currentTreatments.some(t => t.toLowerCase() === initialTreatment.toLowerCase());
      if (!existsInCurrent) {
        const correctDept = Object.keys(dynamicTreatments).find(deptName =>
          dynamicTreatments[deptName].some(t => t.toLowerCase() === initialTreatment.toLowerCase())
        );
        if (correctDept) {
          initialDept = correctDept;
        }
      }
    }

    // Ensure the exact casing matches the one in dynamicTreatments if it exists
    if (dynamicTreatments && dynamicTreatments[initialDept]) {
      const matchedTreatment = dynamicTreatments[initialDept].find(
        t => t.toLowerCase() === initialTreatment.toLowerCase()
      );
      if (matchedTreatment) {
        initialTreatment = matchedTreatment;
      }
    }

    setFormData(prev => ({
      ...prev,
      department: initialDept,
      treatment: initialTreatment,
      doctor: initialDoctor
    }));
  }, [router.isReady, department, service, treatment, condition, doctor, dynamicTreatments]);

  const departmentData = {
    'Physiotherapy': {
      icon: Activity,
      badge: 'Joint & Muscle Care',
      desc: 'Sports injury recovery, post-surgical rehab, spine & joint mobilization',
      treatments: dynamicTreatments?.['Physiotherapy'] || ['General Consultation'],
      doctors: [
        'Any Available DHA Specialist',
        'Dr. Sarah Mitchell (Senior Physiotherapist)',
        'Dr. Alex Vance (Sports Rehab Specialist)'
      ]
    },
    'Ayurveda': {
      icon: Heart,
      badge: 'Holistic Wellness',
      desc: 'Authentic Panchakarma detox, Kativasti, Abhyanga & chronic pain care',
      treatments: dynamicTreatments?.['Ayurveda'] || ['General Consultation'],
      doctors: [
        'Any Available DHA Specialist',
        'Dr. Ananya Sharma (BAMS Ayurveda Consultant)',
        'Dr. Rajesh Kumar (Panchakarma Specialist)'
      ]
    },
    'Dermatology': {
      icon: Stethoscope,
      badge: 'Skin & Aesthetics',
      desc: 'Advanced acne scar removal, PRP hair regrowth & medical dermatology',
      treatments: dynamicTreatments?.['Dermatology'] || ['General Consultation'],
      doctors: [
        'Any Available DHA Specialist',
        'Dr. Elena Rostova (Consultant Dermatologist)'
      ]
    },
    'Home Healthcare': {
      icon: HomeIcon,
      badge: 'Doctor & Physio at Home',
      desc: 'DHA-licensed medical consultations & nursing care at your residence',
      treatments: dynamicTreatments?.['Home Healthcare'] || ['General Consultation'],
      doctors: [
        'Any Available DHA Specialist',
        'Home Healthcare Specialist Team'
      ]
    }
  };

  const handleDepartmentSelect = (deptName) => {
    const deptInfo = departmentData[deptName];
    setFormData(prev => ({
      ...prev,
      department: deptName,
      treatment: deptInfo.treatments[0],
      doctor: deptInfo.doctors[0]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Full Name and Phone Number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: `${formData.department} — ${formData.treatment}`,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: `Patient Type: ${formData.patientType}\nDoctor: ${formData.doctor}\nGender: ${formData.gender}, Age: ${formData.age || 'N/A'}\nInsurance: ${formData.insurance}\nEmirates ID: ${formData.emiratesId || 'N/A'}\nSymptoms: ${formData.symptoms}`,
        source: "Booking Page Form"
      };

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Booking submission error:", error);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const currentDeptInfo = departmentData[formData.department] || departmentData['Physiotherapy'];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Vedara Care Polyclinic Dubai",
    "url": "https://vedaracare.ae/book",
    "telephone": "+971 55 573 6312",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Binghatti Azure, Shop -4, Jumeirah Village Circle",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  };

  return (
    <>
      <Head>
        <title>Book Medical Appointment Online | Vedara Care Polyclinic JVC Dubai</title>
        <meta name="description" content="Book an appointment online for Physiotherapy, Ayurveda, Dermatology & Home Healthcare at Vedara Care Polyclinic in JVC Dubai. Phone: +971 55 573 6312." />
        <link rel="canonical" href="https://vedaracare.ae/book" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background-color: #E5DFD3;
          border-radius: 20px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background-color: #C9A55A;
        }
      `}} />

      <div className="bg-[#FAF8F5] min-h-screen text-[#1A1A1A] font-sans pb-28">

        {/* Distinct Light Luxury Hero Section */}
        <section className="bg-gradient-to-b from-white via-[#FAF8F5] to-[#F5F0E8] border-b border-gray-200/60 pt-12 pb-14 px-4 md:px-8">
          <div className="max-w-[1400px] mx-auto">

            {/* Top Breadcrumb & Trust Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <nav className="flex items-center gap-2 text-xs font-sans text-[#C9A55A] uppercase tracking-widest font-semibold">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span className="text-gray-700">Online Appointment Desk</span>
              </nav>

              <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                <span className="inline-flex items-center gap-1.5 bg-[#184C3A]/10 border border-[#184C3A]/20 px-3 py-1 rounded-full text-[#184C3A]">
                  <ShieldCheck size={14} className="text-[#C9A55A]" /> DHA Licensed Facility
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-700 shadow-2xs">
                  <Clock size={14} className="text-[#184C3A]" /> Response &lt; 15 Mins
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#C9A55A]/15 border border-[#C9A55A]/30 px-3 py-1 rounded-full text-[#8C6D27]">
                  <Award size={14} /> Direct Insurance Billing
                </span>
              </div>
            </div>

            {/* Main Header Content */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1A1A1A] leading-tight">
                  Schedule Your Medical Consultation at <span className="text-[#184C3A]">Vedara Care.</span>
                </h1>
                <p className="text-base text-gray-600 font-light max-w-3xl leading-relaxed">
                  Select your medical specialization, clinical service, and preferred date. Our healthcare desk will instantly log your consultation request and verify your time slot.
                </p>
              </div>

              {/* Direct Call / WhatsApp Quick Helper Pill */}
              <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-[#C9A55A] uppercase tracking-wider block mb-0.5">Need Assistance?</span>
                  <p className="text-xs text-gray-600">Speak directly with reception</p>
                  <a href="tel:+971 55 573 6312" className="text-sm font-serif font-bold text-[#184C3A] hover:underline">
                    +971 55 573 6312
                  </a>
                </div>
                <a
                  href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20want%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5b] text-white p-3 rounded-xl shadow-xs transition-all shrink-0"
                  title="WhatsApp Reception Desk"
                >
                  <MessageCircle size={20} fill="currentColor" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Spacious Main Layout (Max-Width 1400px) */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-10">

          {isSubmitted ? (
            /* SUCCESS CONFIRMATION DISPLAY */
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200 max-w-2xl mx-auto text-center space-y-6 animate-fade-in my-8">
              <div className="w-20 h-20 bg-[#184C3A] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={42} />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1A1A]">Appointment Request Registered!</h2>
                <p className="text-xs text-gray-500 mt-1">Our reception desk will call you back within 15 minutes to confirm your visit.</p>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed max-w-lg mx-auto">
                Thank you, <strong className="text-[#1A1A1A]">{formData.name}</strong>. Your consultation request for <strong className="text-[#184C3A]">{formData.department} ({formData.treatment})</strong> has been received.
              </p>

              {/* Summary Card */}
              <div className="bg-[#FAF8F5] border border-gray-200 p-6 rounded-2xl text-xs text-gray-700 text-left space-y-3 max-w-md mx-auto">
                <div className="flex justify-between border-b border-gray-200/80 pb-2">
                  <span className="text-gray-500">Specialization:</span>
                  <span className="font-semibold text-gray-900">{formData.department} — {formData.treatment}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200/80 pb-2">
                  <span className="text-gray-500">Assigned Doctor:</span>
                  <span className="font-medium text-gray-900">{formData.doctor}</span>
                </div>
                {formData.preferredDate && (
                  <div className="flex justify-between border-b border-gray-200/80 pb-2">
                    <span className="text-gray-500">Requested Date:</span>
                    <span className="font-semibold text-gray-900">{formData.preferredDate}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">Time Window:</span>
                  <span className="font-semibold text-gray-900">{formData.preferredTime}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="w-full sm:w-auto bg-[#184C3A] hover:bg-[#123B2D] text-white px-8 py-3.5 rounded-xl text-xs font-bold transition-all shadow-md text-center"
                >
                  Return to Homepage
                </Link>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto bg-[#FAF8F5] hover:bg-gray-200/70 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-xl text-xs font-bold transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>

              <p className="text-[11px] text-gray-500 pt-2">
                Need urgent assistance? Call our desk directly at <a href="tel:+971 55 573 6312" className="text-[#184C3A] font-bold hover:underline">+971 55 573 6312</a>.
              </p>
            </div>
          ) : (
            /* FULL EXPANDED FORM LAYOUT */
            <div className="grid lg:grid-cols-12 gap-8 items-start">

              {/* LEFT: EXPANDED FORM (8 COLS) */}
              <div className="lg:col-span-8 space-y-8">

                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* CARD 1: DEPARTMENT SELECTION (DISTINCT 4-GRID DISPLAY) */}
                  <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200/80 space-y-6">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#184C3A] text-white flex items-center justify-center font-serif font-bold text-sm shadow-xs">
                          1
                        </div>
                        <div>
                          <h3 className="text-lg font-serif font-medium text-[#1A1A1A]">Choose Medical Specialization</h3>
                          <p className="text-xs text-gray-500">Select the department you wish to consult</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#C9A55A] bg-[#C9A55A]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        Required
                      </span>
                    </div>

                    {/* 4 Large Department Selector Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(departmentData).map(([deptKey, deptObj]) => {
                        const IconComp = deptObj.icon;
                        const isSelected = formData.department === deptKey;
                        return (
                          <button
                            key={deptKey}
                            type="button"
                            onClick={() => handleDepartmentSelect(deptKey)}
                            className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${isSelected
                              ? 'bg-gradient-to-br from-[#184C3A] to-[#123B2D] text-white border-[#184C3A] shadow-md ring-2 ring-[#184C3A]/20'
                              : 'bg-white text-gray-900 border-gray-200 hover:border-[#184C3A] hover:bg-[#FAF8F5]'
                              }`}
                          >
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-[#184C3A]/10 text-[#184C3A]'}`}>
                                <IconComp size={22} />
                              </div>
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                                }`}>
                                {deptObj.badge}
                              </span>
                            </div>

                            <div>
                              <h4 className="font-serif font-semibold text-base mb-1">{deptKey}</h4>
                              <p className={`text-xs leading-relaxed ${isSelected ? 'text-white/85' : 'text-gray-500'}`}>
                                {deptObj.desc}
                              </p>
                            </div>

                            {isSelected && (
                              <div className="absolute top-3 right-3 text-[#C9A55A]">
                                <CheckCircle2 size={18} fill="currentColor" className="text-white" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Specific Treatment & Specialist Dropdowns */}
                    <div className="grid sm:grid-cols-2 gap-6 pt-2">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Specific Clinical Treatment *
                        </label>
                        <CustomSelect
                          name="treatment"
                          value={formData.treatment}
                          options={currentDeptInfo.treatments}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Preferred DHA Specialist / Doctor
                        </label>
                        <CustomSelect
                          name="doctor"
                          value={formData.doctor}
                          options={currentDeptInfo.doctors}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: APPOINTMENT SCHEDULE */}
                  <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200/80 space-y-6">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#184C3A] text-white flex items-center justify-center font-serif font-bold text-sm shadow-xs">
                          2
                        </div>
                        <div>
                          <h3 className="text-lg font-serif font-medium text-[#1A1A1A]">Appointment Date & Time Window</h3>
                          <p className="text-xs text-gray-500">Select your preferred visit date and time slot</p>
                        </div>
                      </div>
                    </div>

                    {/* Preferred Date & Time Window */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Preferred Appointment Date *
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          required
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Preferred Time Window *
                        </label>
                        <CustomSelect
                          name="preferredTime"
                          value={formData.preferredTime}
                          options={[
                            "Morning (9:00 AM - 10:00 PM)",
                            "Afternoon (12:00 PM - 5:00 PM)",
                            "Evening (5:00 PM - 11:30 PM)"
                          ]}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* CARD 3: PATIENT PERSONAL DETAILS */}
                  <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200/80 space-y-6">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#184C3A] text-white flex items-center justify-center font-serif font-bold text-sm shadow-xs">
                          3
                        </div>
                        <div>
                          <h3 className="text-lg font-serif font-medium text-[#1A1A1A]">Patient Personal Information</h3>
                          <p className="text-xs text-gray-500">Provide contact information for appointment registration</p>
                        </div>
                      </div>
                    </div>

                    {/* Patient Type Radio */}
                    <div className="flex flex-wrap items-center gap-6 bg-[#FAF8F5] p-4 rounded-2xl border border-gray-200/60">
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Patient Status:</span>
                      <div className="flex items-center gap-6 text-xs font-medium">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="patientType"
                            value="First-time Patient"
                            checked={formData.patientType === 'First-time Patient'}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-[#184C3A]"
                          />
                          First-time Patient
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="patientType"
                            value="Returning / Existing Patient"
                            checked={formData.patientType === 'Returning / Existing Patient'}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-[#184C3A]"
                          />
                          Returning Patient
                        </label>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Mitchell"
                          className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Phone Number (with WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 50 123 4567"
                          className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="sarah@example.com"
                          className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Gender
                        </label>
                        <CustomSelect
                          name="gender"
                          value={formData.gender}
                          options={["Female", "Male", "Prefer not to say"]}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Age / Years
                        </label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          placeholder="e.g. 34"
                          className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* CARD 4: INSURANCE & MEDICAL SYMPTOMS */}
                  <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200/80 space-y-6">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#184C3A] text-white flex items-center justify-center font-serif font-bold text-sm shadow-xs">
                          4
                        </div>
                        <div>
                          <h3 className="text-lg font-serif font-medium text-[#1A1A1A]">Insurance & Medical History</h3>
                          <p className="text-xs text-gray-500">Provide insurance provider info or brief symptoms</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Insurance Provider
                        </label>
                        <CustomSelect
                          name="insurance"
                          value={formData.insurance}
                          options={[
                            "Self-Pay / Cash / Card",
                            "Daman Health Insurance",
                            "AXA / GIG Gulf",
                            "Oman Insurance (Sukoon)",
                            "Allianz Care",
                            "Now Health International",
                            "Bupa / NextCare",
                            "MetLife"
                          ]}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Emirates ID (Optional)
                        </label>
                        <input
                          type="text"
                          name="emiratesId"
                          value={formData.emiratesId}
                          onChange={handleInputChange}
                          placeholder="784-XXXX-XXXXXXX-X"
                          className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Primary Medical Complaint / Symptoms
                      </label>
                      <textarea
                        name="symptoms"
                        rows={3}
                        value={formData.symptoms}
                        onChange={handleInputChange}
                        placeholder="Briefly describe any current pain, duration of symptoms, or medical notes for our clinical staff..."
                        className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#184C3A] resize-none"
                      />
                    </div>
                  </div>

                  {/* SUBMIT BUTTON FOOTER */}
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#184C3A]/10 text-[#184C3A] flex items-center justify-center shrink-0">
                        <ShieldCheck size={22} />
                      </div>
                      <p className="text-xs text-gray-600 leading-tight">
                        Your medical information is strictly confidential & protected under DHA guidelines.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#184C3A] hover:bg-[#123B2D] text-white px-10 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg transition-all disabled:opacity-50 shrink-0"
                    >
                      {isSubmitting ? (
                        <>Processing Registration...</>
                      ) : (
                        <>
                          Submit Consultation Request <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>

                </form>

              </div>

              {/* RIGHT: RICH LIVE SIDEBAR (4 COLS) */}
              <div className="lg:col-span-4 space-y-6">

                {/* Live Selection Summary Box */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-gray-200/80 space-y-5">
                  <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#C9A55A] uppercase tracking-widest block mb-0.5">Live Selection</span>
                      <h3 className="text-lg font-serif font-medium text-[#1A1A1A]">Appointment Details</h3>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div className="flex justify-between border-b border-gray-100 pb-2.5">
                      <span className="text-gray-500 font-medium">Department:</span>
                      <span className="font-bold text-[#184C3A]">{formData.department}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-100 pb-2.5">
                      <span className="text-gray-500 font-medium">Clinical Concern:</span>
                      <span className="font-semibold text-gray-900 text-right max-w-[180px]">{formData.treatment}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-100 pb-2.5">
                      <span className="text-gray-500 font-medium">Specialist:</span>
                      <span className="font-medium text-gray-800">{formData.doctor}</span>
                    </div>

                    {formData.preferredDate && (
                      <div className="flex justify-between border-b border-gray-100 pb-2.5">
                        <span className="text-gray-500 font-medium">Requested Date:</span>
                        <span className="font-semibold text-gray-900">{formData.preferredDate}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Time Window:</span>
                      <span className="font-semibold text-gray-900">{formData.preferredTime}</span>
                    </div>
                  </div>

                  {/* Guaranteed Response Pill */}
                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-gray-200/70 space-y-1.5">
                    <div className="flex items-center gap-2 text-[#184C3A] font-semibold text-xs">
                      <Clock size={15} />
                      Zero-Wait Policy Guarantee
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      All consultation slots are scheduled with a guaranteed timeframe. Direct-billing insurance verification is done prior to your session.
                    </p>
                  </div>
                </div>

                {/* Direct Reception WhatsApp Box */}
                <div className="bg-gradient-to-br from-[#184C3A] to-[#123B2D] text-white p-6 rounded-3xl shadow-sm space-y-3.5 text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-[#25D366]">
                    <MessageCircle size={24} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium">Instant WhatsApp Desk</h4>
                    <p className="text-xs text-white/80 max-w-xs mx-auto mt-1">
                      Prefer to book via chat? Our medical coordinator is available 9:00AM to 10:00PM daily.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5b] text-white py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <MessageCircle size={18} fill="currentColor" />
                    Open Live WhatsApp Chat
                  </a>
                </div>

                {/* Polyclinic Location Badge */}
                <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#184C3A]/10 text-[#184C3A] flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif font-medium text-sm text-[#1A1A1A]">Vedara Care Polyclinic</h4>
                      <p className="text-xs text-gray-500">Binghatti Azure, Shop -4, JVC Dubai</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/xiJgqsvRqAJ3pC8f6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#184C3A] hover:underline flex items-center gap-1 pt-1"
                  >
                    Get Driving Directions <ChevronRight size={14} />
                  </a>
                </div>

              </div>

            </div>
          )}

        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');

  const pagesDir = path.join(process.cwd(), 'pages');
  const conditionsDir = path.join(pagesDir, 'conditions');
  const treatmentsDir = path.join(pagesDir, 'treatments');
  const physioDir = path.join(pagesDir, 'physiotherapy');

  const getFiles = (dir) => {
    try {
      if (fs.existsSync(dir)) {
        return fs.readdirSync(dir)
          .filter(file => file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx'))
          .map(file => ({
            slug: file.replace(/\.(js|jsx|tsx)$/, ''),
            fullPath: path.join(dir, file)
          }));
      }
    } catch (e) {
      console.error("Error reading directory: " + dir, e);
    }
    return [];
  };

  const conditions = getFiles(conditionsDir);
  const treatments = getFiles(treatmentsDir);
  const physioFiles = getFiles(physioDir);

  // Dynamically discover medical direct pages inside pages/ (excluding utility system pages)
  const directPages = [];
  try {
    if (fs.existsSync(pagesDir)) {
      const systemPages = [
        '_app', '_document', 'index', 'book', 'contact', 'about',
        'careers', 'insurance', 'patient-rights', 'privacy-policy', 'terms-of-service'
      ];
      fs.readdirSync(pagesDir)
        .filter(file => file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx'))
        .forEach(file => {
          const slug = file.replace(/\.(js|jsx|tsx)$/, '');
          if (!systemPages.includes(slug)) {
            directPages.push({
              slug,
              fullPath: path.join(pagesDir, file)
            });
          }
        });
    }
  } catch (e) {
    console.error("Error reading pages directory:", e);
  }

  const physiotherapy = ['General Consultation'];
  const ayurveda = ['General Consultation'];
  const dermatology = ['General Consultation'];
  const homeHealthcare = ['General Consultation'];

  const acronyms = { 'ibs': 'IBS', 'pcos': 'PCOS', 'prp': 'PRP', 'cva': 'CVA' };

  const slugToTitle = (slug) => {
    return slug.split('-')
      .filter(w => w !== 'jvc' && w !== 'dubai')
      .map(w => acronyms[w.toLowerCase()] || (w.charAt(0).toUpperCase() + w.slice(1)))
      .join(' ');
  };

  // Process all files in pages/physiotherapy directory directly as Physiotherapy
  physioFiles.forEach(({ slug }) => {
    physiotherapy.push(slugToTitle(slug));
  });

  const processFile = ({ slug, fullPath }) => {
    const title = slugToTitle(slug);

    // Dynamic fallback classification: Scan file content to determine department
    try {
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const contentLower = content.toLowerCase();

        let ayurvedaScore = 0;
        let physiotherapyScore = 0;
        let dermatologyScore = 0;
        let homeScore = 0;

        // Ayurveda keywords
        const ayurKeywords = ['ayurveda', 'ayurvedic', 'panchakarma', 'abhyanga', 'kativasti', 'njavarakizhi', 'shirodhara', 'bams', 'cupping', 'massage'];
        ayurKeywords.forEach(kw => {
          const regex = new RegExp(kw, 'g');
          ayurvedaScore += (contentLower.match(regex) || []).length;
        });

        // Physiotherapy keywords
        const physioKeywords = ['physiotherapy', 'physiotherapist', 'physio', 'physical therapy', 'rehab', 'sciatica', 'shoulder', 'elbow', 'joints', 'mobilisation', 'exercise'];
        physioKeywords.forEach(kw => {
          const regex = new RegExp(kw, 'g');
          physiotherapyScore += (contentLower.match(regex) || []).length;
        });

        // Dermatology keywords
        const dermaKeywords = ['dermatology', 'dermatologist', 'skin & aesthetics', 'skin clinic', 'cosmetic', 'aesthetics', 'prp', 'peel', 'acne', 'melasma', 'eczema', 'psoriasis', 'hair-loss', 'hair loss'];
        dermaKeywords.forEach(kw => {
          const regex = new RegExp(kw, 'g');
          dermatologyScore += (contentLower.match(regex) || []).length;
        });

        // Home Healthcare keywords
        const homeKeywords = ['home-healthcare', 'at home', 'home care', 'home nurse', 'home healthcare'];
        homeKeywords.forEach(kw => {
          const regex = new RegExp(kw, 'g');
          homeScore += (contentLower.match(regex) || []).length;
        });

        // Determine the department with the highest keyword count
        const maxScore = Math.max(ayurvedaScore, physiotherapyScore, dermatologyScore, homeScore);

        if (homeScore > 0 && homeScore === maxScore) {
          homeHealthcare.push(title);
          // If it also contains significant physiotherapy content, add it to physiotherapy too
          if (physiotherapyScore > 5) {
            physiotherapy.push(title);
          }
        } else if (dermatologyScore === maxScore) {
          dermatology.push(title);
        } else if (ayurvedaScore === maxScore) {
          ayurveda.push(title);
        } else {
          physiotherapy.push(title);
        }
      } else {
        physiotherapy.push(title);
      }
    } catch (err) {
      console.error("Error reading file content for dynamic classification: " + slug, err);
      physiotherapy.push(title);
    }
  };

  conditions.forEach(processFile);
  treatments.forEach(processFile);
  directPages.forEach(processFile);

  // Deduplicate and filter arrays
  const uniq = (arr) => Array.from(new Set(arr));

  return {
    props: {
      dynamicTreatments: {
        'Physiotherapy': uniq(physiotherapy),
        'Ayurveda': uniq(ayurveda),
        'Dermatology': uniq(dermatology),
        'Home Healthcare': uniq(homeHealthcare)
      }
    }
  };
}
