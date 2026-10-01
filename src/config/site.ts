export const site = {
  name: 'NewStart Digital',
  shortName: 'NewStart',
  tagline: 'Modern websites for businesses, professionals and creators.',
  email: 'newstartdigital01@gmail.com',
  phone: '+91 89460 94656',
  whatsapp: '8946094656',
  address: 'Dindigul · Remote',
  domain: 'https://example.com',
  enquiryEndpoint: 'https://script.google.com/macros/s/AKfycbymVr_b9l550F_9IhvhzDbPR6Jd-EDDEb0XZmScuW1kACY_cZf1F35VuuUnzxk8kx8T/exec',
  whatsappMessage: "Hi, I'm interested in getting a website for my business.",
}

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
