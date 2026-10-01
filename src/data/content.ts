import { Activity, BriefcaseBusiness, GraduationCap, Palette, Scissors, Utensils } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = { icon: LucideIcon; title: string; description: string; detail: string }
export const services: Service[] = [
  { icon: Activity, title: 'Clinic Websites', description: 'Clear, reassuring websites that make it easy to find care.', detail: 'Doctor profiles, services, timings, location and appointment options.' },
  { icon: BriefcaseBusiness, title: 'Business Websites', description: 'A polished home for your local business or company.', detail: 'Services, credibility, enquiries and contact paths that convert.' },
  { icon: Utensils, title: 'Restaurant Websites', description: 'Make your menu and atmosphere impossible to miss.', detail: 'Menus, galleries, location and WhatsApp reservation options.' },
  { icon: Palette, title: 'Portfolio Websites', description: 'Show your skills, work and personality with confidence.', detail: 'For freelancers, professionals, students and job seekers.' },
  { icon: Scissors, title: 'Salon & Beauty Websites', description: 'A refined digital experience for your beauty business.', detail: 'Services, pricing, gallery, location and booking options.' },
  { icon: GraduationCap, title: 'Education Websites', description: 'Help learners and parents find the right programme.', detail: 'For tuition centres, coaching institutes and educators.' },
]

export type Project = { name: string; category: 'Business' | 'Clinic' | 'Restaurant' | 'Portfolio' | 'Services'; description: string; features: string[]; accent: string }
export const projects: Project[] = [
  { name: 'Aarogyam Clinic', category: 'Clinic', description: 'A calm, appointment-ready website for a modern family clinic.', features: ['Doctor profiles', 'WhatsApp booking'], accent: 'from-sky-100 to-cyan-50' },
  { name: 'Miro Kitchen', category: 'Restaurant', description: 'A refined restaurant presence made for hungry local customers.', features: ['Digital menu', 'Location map'], accent: 'from-orange-100 to-amber-50' },
  { name: 'Aanya Mehta', category: 'Portfolio', description: 'A focused personal portfolio for a product designer.', features: ['Case studies', 'Contact flow'], accent: 'from-violet-100 to-fuchsia-50' },
  { name: 'Nude & Bloom', category: 'Services', description: 'A considered salon site that turns browsing into bookings.', features: ['Price list', 'Gallery'], accent: 'from-rose-100 to-pink-50' },
  { name: 'Northline Traders', category: 'Business', description: 'A credible online home for a local distribution business.', features: ['Service pages', 'Enquiry form'], accent: 'from-emerald-100 to-teal-50' },
  { name: 'Form House', category: 'Services', description: 'A high-energy digital identity for a neighbourhood fitness studio.', features: ['Class schedule', 'Lead capture'], accent: 'from-lime-100 to-green-50' },
]

export const faqs = [
  ['How much does a website cost?', 'Projects start from ₹2,999. The final price depends on the number of pages, content and features you need. We will always share a clear quote before we begin.'],
  ['How long does it take to build?', 'A simple site can often be ready in 1–2 weeks. Larger custom projects take longer; we will agree on a realistic timeline at the start.'],
  ['Can you build a custom design?', 'Yes. Every project is shaped around your business, audience and brand—not a one-size-fits-all template.'],
  ['Will the website work on mobile?', 'Absolutely. Every website is designed mobile-first and checked across phones, tablets and desktops.'],
  ['Can you help with domain and hosting?', 'Yes. We can guide you through choosing a domain and hosting, then help get your site online.'],
  ['Can customers contact us through WhatsApp?', 'Yes. WhatsApp actions can be placed prominently across the site so customers can reach you quickly.'],
  ['Can I update my website later?', 'Yes. We build with future updates in mind and can discuss the best way to manage changes for your site.'],
  ['Do you provide maintenance?', 'Post-launch support is included with our Professional plan. Ongoing maintenance can also be arranged based on your needs.'],
]
