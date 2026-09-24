import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const isAdmin = router.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-[#FAF8EF]/50">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:p-4 focus:bg-white focus:text-black">Skip to content</a>
      <Header />
      <main id="main-content" className="flex-grow lg:pb-0 pb-20">
        {children}
      </main>
      <Footer />

      {/* Global Opening Soon Popup (triggers 3s after visiting any page) */}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20your%20treatments%20and%20book%20a%20consultation."
        className="fixed bottom-8 right-8 lg:bottom-8 lg:right-8 bg-[#184C3A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100] mb-20 lg:mb-0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle fill-current">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </a>
    </div>
  );
};

export default Layout;
