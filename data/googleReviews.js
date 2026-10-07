// data/googleReviews.js  (NEW FILE) — real reviews from the Google Business Profile only
export const GOOGLE_PROFILE_URL = 'https://maps.google.com/maps?cid=16711954996415388530';

export const physioGoogleReviews = [
  {
    quote: "I've been taking physiotherapy sessions at Vedara Care Polyclinic with Ms. Hafsina KK, and I'm genuinely grateful for her care and expertise. She is attentive, compassionate, and takes the time to understand what each patient needs. Along with regular physiotherapy, she incorporates effective traditional techniques such as dry needling and dry cupping when appropriate. I highly recommend her to anyone looking for thoughtful, personalised physiotherapy care.",
    author: 'Mohammad G.',
    details: 'Google review · 5 stars · September 2026',
  },
  {
    quote: 'Really happy with my physiotherapy treatment here, would recommend.',
    author: 'Anil K.',
    details: 'Google review · 5 stars · September 2026',
  },
];

export const physioReviewsBlock = (title = 'What patients say about physiotherapy at Vedara Care') => ({
  bgColor: 'bg-[#FAF6EF]',
  cardBgColor: 'white',
  isDarkText: true,
  label: 'PATIENT REVIEWS',
  title,
  description: 'Real reviews from our Google Business Profile, quoted as written.',
  items: physioGoogleReviews,
  stats: [
    { value: '4.7', label: 'Google rating' },
    { value: '23', label: 'Google reviews' },
  ],
  buttonText: 'Read all reviews on Google',
  buttonHref: GOOGLE_PROFILE_URL,
});

export const ayurvedaGoogleReviews = [

  {
    text: 'Excellent Ayurveda treatment. Experienced doctors, caring staff, and effective results. Highly satisfied.',
    author_name: 'Seethubhoopesh Seethubhoopesh',
    relative_time_description: '8 months ago',
    rating: 6,
  },


  {
    text: "I went to vedara clinic for my knee pain and taken Ayurveda treatment. Now i am really better. Thank you Vedara Team.",
    author_name: 'Preethi Mis',
    relative_time_description: '8 month ago',
    rating: 4,
  },

  {
    text: "The best ayurveda clinic in jvc i found thank you for the treatment",
    author_name: 'shamna tcam',
    relative_time_description: '8 month ago',
    rating: 2,
  },




];

export const ayurvedaReviewsBlock = (title = 'What patients say about Ayurveda at Vedara Care') => ({
  eyebrow: 'PATIENT REVIEWS',
  title,
  rating: '4.7',
  count: '23',
  reviews: ayurvedaGoogleReviews,
  allLink: {
    label: 'Read all reviews on Google',
    href: GOOGLE_PROFILE_URL,
  }
});
