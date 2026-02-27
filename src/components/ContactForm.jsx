import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const ContactForm = () => {
    const { lang } = useLanguage()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = ({ target: { name, value } }) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Basic placeholder handler
        // Wire this up to backend/email service later
        const responseString = lang === 'en' ? `Thanks ${formData.name || 'there'}! I will get back to you at ${formData.email}.` : `Obrigado ${formData.name || ''}! Vou retornar o contato em ${formData.email}.`
        alert(responseString)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-lg flex-col gap-5 text-white p-4">
            <label className="flex flex-col gap-1 text-left">
                <span className="text-sm uppercase font-semibold tracking-wide text-white ml-2">
                    {lang === 'pt' ? 'Nome' : 'Name'}
                </span>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white bg-white/90 px-3 py-2 text-black/90 placeholder:text-black/50 focus:border-fuchsia-400 focus:outline-none"
                    placeholder={lang === 'pt' ? "João Silva" : "Jane Doe"}
                />
            </label>
            <label className="flex flex-col gap-2 text-left">
                <span className="text-sm uppercase font-semibold tracking-wide text-white ml-2">
                    Email
                </span>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white bg-white/90 px-3 py-2 text-black/90 placeholder:text-black/50 focus:border-fuchsia-400 focus:outline-none"
                    placeholder={lang === 'pt' ? "seu@email.com" : "your@email.com"}
                />
            </label>
            <label className="flex flex-col gap-2 text-left">
                <span className="text-sm uppercase font-semibold tracking-wide text-white ml-2">
                    {lang === 'pt' ? 'Assunto' : 'Subject'}
                </span>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white bg-white/90 px-3 py-2 text-black/90 placeholder:text-black/50 focus:border-fuchsia-400 focus:outline-none"
                    placeholder={lang === 'pt' ? "Chamada para projeto" : "Project inquiry"}
                />
            </label>
            <label className="flex flex-col gap-2 text-left">
                <span className="text-sm uppercase font-semibold tracking-wide text-white ml-2">
                    {lang === 'pt' ? 'Mensagem' : 'Message'}
                </span>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full min-h-25 rounded-md border border-white bg-white/90 px-3 py-2 text-black/90 placeholder:text-black/50 focus:border-fuchsia-400 focus:outline-none"
                    placeholder={lang === 'pt' ? "Me diga mais sobre seu projeto..." :"Tell me more about your project..."}
                />
            </label>
            <button
                type="submit"
                className="self-end rounded-md bg-fuchsia-300 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-indigo-800 transition hover:bg-fuchsia-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            >
                {lang === 'pt' ? 'Enviar Formulário' : 'Send Form'}
            </button>
        </form>
    )
}

export default ContactForm
