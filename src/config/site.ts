export const site = {
  name: 'NewStart Digital',
  shortName: 'NewStart',
  tagline: 'Modern websites for businesses, professionals and creators.',
  email: 'newstartdigital01@gmail.com',
  phone: '+91 89460 94656',
  whatsapp: '8946094656',
  address: 'Dindigul · Remote',
  domain: 'https://example.com',
  enquiryEndpoint: 'https://script.google.com/macros/s/AKfycbyD5Iof1hr0Z5Knxfj-h0gabN1-166ZPo0LjnGZBJMoTP_JmtN0JEgfzXu9ymNh8PRA/exec',
  whatsappMessage: "Hi, I'm interested in getting a website for my business.",
}

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
