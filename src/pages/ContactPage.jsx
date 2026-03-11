import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import ContactForm from '../components/features/ContactForm';
import { LuExternalLink  } from 'react-icons/lu';
import websiteData from '../websiteData.json';

const ContactPage = () => {
  const { lang } = useLanguage()
  const contactInfo = websiteData.contactInfo;

  return (
    <section className="relative max-w-5xl mx-auto px-16 py-8 portrait:px-4 text-lg text-gray-800 text-justify">
      <h1 className="text-3xl font-bold text-indigo-500 mb-4 text-center">{ lang === 'en' ? contactInfo.titleEN : contactInfo.titlePT }</h1>

      <div className="bg-indigo-500 mt-4 mb-8 max-w-150 mx-auto rounded-md shadow-sm">
        <ContactForm />
      </div>

      <h2 className="text-2xl font-semibold text-indigo-500 mt-4 mb-2 text-center">{ lang === 'en' ? 'Or reach out through these links:' : 'Ou entre em contato por esses links:'}</h2>

      <div className="grid gap-4 md:grid-cols-2 max-w-150 portrait:px-8 mx-auto mb-12 mt-4">
        {[{
          label: 'LinkedIn',
          value: contactInfo.linkedin,
          href: contactInfo.linkedin ? `https://${contactInfo.linkedin}` : null,
        }, {
          label: 'GitHub',
          value: contactInfo.github,
          href: contactInfo.github ? `https://${contactInfo.github}` : null,
        }, {
          label: 'Email',
          value: contactInfo.email,
          href: contactInfo.email ? `mailto:${contactInfo.email}` : null,
        }, {
          label: 'Landing Page',
          value: contactInfo.carrd,
          href: contactInfo.carrd ? `https://${contactInfo.carrd}` : null,
        }].map(({ label, value, href }) => (
          <a
            key={label}
            href={href || undefined}
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
            className={`group rounded-lg border border-indigo-100 shadow-sm overflow-hidden transition transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${href ? 'cursor-pointer' : 'pointer-events-none opacity-75'}`}
          >
            <div className="bg-indigo-500 px-2 py-2 transition-colors duration-150 group-hover:bg-fuchsia-400">
              <p className="flex items-center justify-center gap-2 text-white font-semibold tracking-wide text-xl">{label} <LuExternalLink /></p>
            </div>
            <div className="bg-white px-2 py-2">
              <p className="text-center text-base text-gray-800 wrap-break-word group-hover:text-indigo-800 group-hover:underline group-hover:font-semibold">{value || '—'}</p>
            </div>
          </a>
        ))}
        
      </div>
    </section>
  )
}

export default ContactPage