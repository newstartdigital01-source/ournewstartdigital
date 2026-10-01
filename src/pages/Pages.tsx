import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { CTA, Reveal, SectionHeading } from '../components/Shared'
import { ServicesGrid } from '../components/Sections'
import { PageMeta } from '../components/Layout'
import { site, whatsappUrl } from '../config/site'

export function ServicesPage() {
  return <><PageMeta title="Website Design Services" description="Professional websites tailored to businesses, clinics, restaurants, educators and professionals."/><main><section className="section"><div className="shell"><SectionHeading eyebrow="What we build" title="A better online first impression, made for your business." copy="Thoughtful design, practical features, and clear paths for customers to contact you."/><div className="mt-12"><ServicesGrid/></div></div></section><CTA/></main></>
}

export function PortfolioPage() {
  return <><PageMeta title="Our Work" description="NewStart Digital's portfolio is currently being prepared."/><main><section className="section"><div className="shell"><div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 px-6 py-16 text-center sm:px-12"><p className="eyebrow">Work in progress</p><h1 className="section-title">Our portfolio is taking shape.</h1><p className="copy mt-4">We’re preparing our first real projects to share here. In the meantime, tell us what you need—we’d love to help build it.</p><a className="btn-primary mt-7" href="/contact">Get Your Website</a></div></div></section></main></>
}

export function AboutPage() {
  return <><PageMeta title="About Us" description="NewStart Digital helps small businesses and professionals build an effective online presence."/><main><section className="section"><div className="shell grid gap-12 lg:grid-cols-2 lg:items-center"><Reveal><p className="eyebrow">About NewStart Digital</p><h1 className="display">We Help Small Businesses Look Professional Online.</h1><p className="copy mt-6">We’re a startup focused on helping local businesses, professionals and creators build an online presence that feels clear, credible and genuinely useful.</p><p className="copy mt-4">Great websites should not feel out of reach. We make the process more straightforward, keep communication transparent and focus on the pieces that help your customers take action.</p></Reveal><Reveal><div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10"><p className="text-sm font-semibold text-blue-300">Our approach</p><div className="mt-8 space-y-6">{[['Listen first','Your business and customers set the direction.'],['Keep it clear','Practical options, honest scope and no needless complexity.'],['Make it useful','Every page should help a visitor understand and connect.']].map(([title,copy])=><div key={title}><h2 className="text-lg font-semibold">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-300">{copy}</p></div>)}</div></div></Reveal></div></section><CTA/></main></>
}

type EnquiryField = 'name' | 'businessName' | 'businessType' | 'phone' | 'message'
const requiredFields: EnquiryField[] = ['name', 'businessName', 'businessType', 'phone', 'message']

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState<Partial<Record<EnquiryField, string>>>({})

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const values = new FormData(form)
    const nextErrors = Object.fromEntries(requiredFields.filter((field) => !String(values.get(field) ?? '').trim()).map((field) => [field, 'This field is required.']))
    setErrors(nextErrors)
    setSubmitError('')
    if (Object.keys(nextErrors).length) return

    const enquiry = Object.fromEntries(values.entries())
    const payload = JSON.stringify({ ...enquiry, submittedAt: new Date().toISOString() })
    setSubmitting(true)
    try {
      // Google Apps Script web apps accept this as a simple POST request.
      // no-cors avoids a browser CORS restriction while still delivering the payload.
      await fetch(site.enquiryEndpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: payload })
      setSent(true)
      form.reset()
    } catch {
      setSubmitError('We could not send your enquiry right now. Please try WhatsApp instead.')
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) return <main className="section"><PageMeta title="Contact" description="Tell NewStart Digital about the website you need."/><div className="shell"><div className="mx-auto max-w-xl rounded-3xl bg-emerald-50 p-10 text-center"><CheckCircle2 className="mx-auto text-emerald-600" size={42}/><h1 className="mt-5 text-3xl font-semibold">Thanks — we’ve got your enquiry.</h1><p className="mt-3 text-muted">We’ll be in touch soon. Prefer a quicker chat? Send us a WhatsApp message.</p><a href={whatsappUrl} className="btn-primary mt-7">Chat on WhatsApp</a></div></div></main>

  return <><PageMeta title="Contact" description="Tell NewStart Digital about the website you need."/><main><section className="section"><div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Start a conversation</p><h1 className="display">Let’s Build Your Website</h1><p className="copy mt-5">Tell us about your business and what you need.</p><div className="mt-10 space-y-5 text-sm"><a className="flex gap-3" href={whatsappUrl}><Phone className="text-brand"/>WhatsApp: {site.phone}</a><a className="flex gap-3" href={`mailto:${site.email}`}><Mail className="text-brand"/>{site.email}</a><p className="flex gap-3"><MapPin className="text-brand"/>{site.address}</p></div></div><form onSubmit={submit} noValidate className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">{[['name','Name *','text'],['businessName','Business Name *','text'],['businessType','Business Type *','text'],['phone','Phone / WhatsApp *','tel'],['email','Email','email'],['website','Website (optional)','url']].map(([name,label,type])=><label key={name} className="text-sm font-semibold">{label}<input name={name} type={type} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 font-normal outline-none transition focus:border-brand focus:ring-3 focus:ring-blue-100"/>{errors[name as EnquiryField] && <span className="mt-1 block text-xs text-red-600">{errors[name as EnquiryField]}</span>}</label>)}<label className="text-sm font-semibold sm:col-span-2">What do you need?<select name="need" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 font-normal"><option>New website</option><option>Portfolio website</option><option>Redesign existing website</option><option>Not sure yet</option></select></label><label className="text-sm font-semibold sm:col-span-2">Budget Range<select name="budget" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 font-normal"><option>₹2,999 – ₹7,999</option><option>₹8,000 – ₹14,999</option><option>₹15,000+</option><option>Let’s discuss</option></select></label><label className="text-sm font-semibold sm:col-span-2">Message *<textarea name="message" rows={5} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 font-normal outline-none transition focus:border-brand focus:ring-3 focus:ring-blue-100" placeholder="Tell us a little about your business and website goals."/>{errors.message && <span className="mt-1 block text-xs text-red-600">{errors.message}</span>}</label>{submitError && <p className="text-sm text-red-600 sm:col-span-2">{submitError}</p>}<button disabled={submitting} className="btn-primary disabled:cursor-wait disabled:opacity-60 sm:col-span-2">{submitting ? 'Sending Enquiry…' : 'Send Enquiry'} <Send size={16}/></button></form></div></section></main></>
}

export function LegalPage({ terms = false }: { terms?: boolean }) {
  const title = terms ? 'Terms & Conditions' : 'Privacy Policy'
  return <><PageMeta title={title} description={`${title} for NewStart Digital.`}/><main className="section"><div className="shell max-w-3xl"><h1 className="display">{title}</h1><p className="copy mt-6">This is a placeholder {title.toLowerCase()} page. Once business processes and legal requirements are confirmed, replace this content with an approved policy.</p></div></main></>
}

export function NotFound() { return <main className="section"><div className="shell text-center"><p className="eyebrow">404</p><h1 className="display">This page isn’t here.</h1><a className="btn-primary mt-7" href="/">Back to home</a></div></main> }
