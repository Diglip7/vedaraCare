export const SITE = {
  name: 'Vedara Care Polyclinic',
  legalName: 'Vedara Care Polyclinic FZE',
  url: 'https://vedaracare.ae',
  facilityLicence: '2509266',
  phone: '+971555736312',
  phoneDisplay: '+971 55 573 6312',
  whatsapp: 'https://wa.me/971555736312',
  email: 'booking@vedaracare.ae',
  address: {
    street: 'Shop 4, Binghatti Azure, Al Barsha South Fourth',
    area: 'Jumeirah Village Circle (JVC)',
    city: 'Dubai',
    country: 'AE',
    full: 'Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai, UAE',
  },
  geo: { lat: 25.0683, lng: 55.2121 },
  hoursText: 'Every day, 9:00am – 10:00pm',
  hoursShort: 'Open daily 9am–10pm',
  parking: 'Free and paid parking are both available.',
  insurance:
    'We support reimbursement claims with all major UAE insurers. We do not bill insurers directly; we provide the supporting documents you need to claim.',
  pricesText: 'Prices are shared on WhatsApp.',
  googleRating: { value: 4.6, count: 21 }, // fallback only; live values come from Step 9
  placeId: 'ChIJh6U9L9dtXz4Rclunh4bK7Oc',
  mapsUrl: 'https://maps.google.com/maps?cid=16711954996415388530',
  sameAs: [
    'https://www.instagram.com/vedaracare/',
    'https://www.facebook.com/VedaraCare',
    'https://www.youtube.com/@VedaraCare',
    'https://www.tiktok.com/@vedaracare',
  ],
};

// Reusable PostalAddress for every page's JSON-LD (fixes "Building 123" and "Circle Mall" addresses)
export const SCHEMA_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: 'Jumeirah Village Circle, Dubai',
  addressRegion: 'Dubai',
  addressCountry: 'AE',
};
