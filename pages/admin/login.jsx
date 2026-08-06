import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('/api/admin/login', { email, password });
      localStorage.setItem('adminToken', res.data.token);
      router.push('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-0 md:p-6 relative overflow-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#184C3A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C9A961]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Luxury Container */}
      <div className="w-full max-w-4xl bg-white md:rounded-[32px] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-screen md:min-h-[600px] border border-gray-100 relative z-10">
        
        {/* Left Side: Editorial Branding Panel (Hidden on Mobile) */}
        <div className="hidden md:flex md:col-span-5 bg-gradient-to-br from-[#184C3A] via-[#1b5440] to-[#123A2B] p-10 flex-col justify-between relative overflow-hidden text-white">
          {/* Subtle gold lines background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A961_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold uppercase tracking-widest text-[#C9A961]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure Gateway
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            <h2 className="text-3xl font-serif leading-tight" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400 }}>
              Connecting care with technology.
            </h2>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              Access the administrative dashboard to coordinate clinic bookings, manage medical articles, and track patient communications securely.
            </p>
          </div>

          <div className="text-[11px] text-white/50 relative z-10 flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
            DHA Licensed Facility Portal
          </div>
        </div>

        {/* Right Side: Credentials & Form */}
        <div className="col-span-1 md:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-[#FAF8F6]">
          <div className="max-w-md w-full mx-auto space-y-8 bg-white border border-gray-100/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            
            {/* Header / Logo integration */}
            <div className="text-center space-y-4">
              {/* Circular Logo Badge */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C9A961]/30 shadow-sm bg-[#0E281F] flex items-center justify-center mx-auto">
                <img 
                  src="/images/logo.png" 
                  alt="Vedara Care Logo" 
                  className="w-full h-full object-cover scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Fallback if logo.png doesn't exist
                  }}
                />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#C9A961] uppercase tracking-[0.25em] block">
                  Vedara Care Polyclinic
                </span>
                <h1 className="text-2xl font-serif text-gray-900" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500 }}>
                  Welcome back
                </h1>
                <p className="text-xs text-gray-500">Please enter your administrative credentials to log in.</p>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-2xl text-xs font-medium flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email field */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-[#FAF8F5] border border-gray-200 focus:border-[#184C3A] focus:bg-white rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-[#184C3A]/5 text-gray-900 placeholder-gray-400 transition-all font-medium"
                    placeholder="name@vedaracare.ae"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 bg-[#FAF8F5] border border-gray-200 focus:border-[#184C3A] focus:bg-white rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-[#184C3A]/5 text-gray-900 placeholder-gray-400 transition-all font-medium"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#184C3A] hover:bg-[#123A2B] text-white rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[#184C3A]/15 hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0 cursor-pointer"
              >
                {loading ? (
                  <span>Verifying Credentials...</span>
                ) : (
                  <>
                    <span>Authenticate Access</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}
