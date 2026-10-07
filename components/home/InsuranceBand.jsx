import { SITE } from '../../lib/site';

export default function InsuranceBand() {
  return (
    <section className="bg-white py-16 px-5">
      <div className="max-w-[880px] mx-auto text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] font-bold text-[#184C3A]">Insurance</p>
        <h2 className="font-serif text-3xl md:text-[42px] text-[#1A1A1A] mt-2">Insurance and payment</h2>
        <p className="text-[#4A4A4A] mt-4">
          We support reimbursement claims with all major UAE insurers. We do not bill insurers directly: you pay at the
          clinic, and we provide the supporting documents your insurer needs for the claim. Send a photo of your insurance
          card on WhatsApp if you have any questions.
        </p>
        <p className="text-[#4A4A4A] mt-3 text-sm">Cards (Visa, Mastercard, American Express) and cash accepted.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={SITE.whatsapp} data-track="whatsapp_click" data-location="insurance"
            className="rounded-full bg-[#184C3A] text-white px-6 h-12 inline-flex items-center">Ask about insurance on WhatsApp</a>
          <a href="/insurance" className="inline-flex items-center text-[#184C3A] underline">Insurance details</a>
        </div>
      </div>
    </section>
  );
}
