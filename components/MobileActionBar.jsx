import { SITE } from '../lib/site';

export default function MobileActionBar() {
  const btn = 'flex-1 flex items-center justify-center gap-2 rounded-full h-11 text-sm font-semibold';
  return (
    <nav aria-label="Contact Vedara Care"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-[#E5E7EB] px-3 py-2.5 flex gap-2">
      <a href={SITE.whatsapp} data-track="whatsapp_click" data-location="sticky_bar"
        className={`${btn} bg-[#184C3A] text-white`}>WhatsApp</a>
      <a href={`tel:${SITE.phone}`} data-track="phone_click" data-location="sticky_bar"
        className={`${btn} border border-[#184C3A] text-[#184C3A]`}>Call</a>
      <a href="/book" data-track="appointment_click" data-location="sticky_bar"
        className={`${btn} border border-[#184C3A] text-[#184C3A]`}>Book</a>
    </nav>
  );
}
