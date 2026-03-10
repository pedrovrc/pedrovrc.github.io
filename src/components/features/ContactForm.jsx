import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useLanguage } from '../../context/LanguageContext'

const inputClass = "w-full rounded-md border border-white bg-white/90 px-3 py-2 text-black/90 placeholder:text-black/50 focus:border-fuchsia-400 focus:outline-none";
const buttonClass = "self-end rounded-md bg-fuchsia-300 px-6 py-2 text-sm shadow-sm font-semibold uppercase tracking-wide text-indigo-800 transition hover:bg-fuchsia-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-300 hover:shadow-md";

const FormField = ({ label, children }) => (
    <label>
        <span className="text-sm uppercase font-semibold tracking-wide text-white ml-2">
            {label}
        </span>
        {children}
    </label>
)

const ContactForm = () => {
    const { lang } = useLanguage()

    const [submitting, setSubmitting] = useState(false)
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const res = await fetch('https://formspree.io/f/xvzwkynv', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (!res.ok) throw new Error()
            toast.success(lang === 'pt' ? 'Mensagem enviada!' : 'Message sent!')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch {
            toast.error(lang === 'pt' ? 'Algo deu errado. Tente novamente.' : 'Something went wrong. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-lg flex-col gap-5 text-white p-4 text-left">
            <FormField label={ lang === 'pt' ? 'Nome' : 'Name' }>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={lang === 'pt' ? "João Silva" : "John Smith"}
                />
            </FormField>
            <FormField label={ 'Email' }>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={lang === 'pt' ? "seu@email.com" : "your@email.com"}
                />
            </FormField>
            <FormField label={ lang === 'pt' ? 'Assunto' : 'Subject' }>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={lang === 'pt' ? "Chamada para projeto" : "Project inquiry"}
                />
            </FormField>
            <FormField label={ lang === 'pt' ? 'Mensagem' : 'Message' }>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClass} min-h-25 resize-y`}
                    placeholder={lang === 'pt' ? "Me diga mais sobre seu projeto..." : "Tell me more about your project..."}
                />
            </FormField>
            <button type="submit" className={buttonClass} disabled={submitting}>
                {submitting
                    ? (lang === 'pt' ? 'Enviando...' : 'Sending...')
                    : (lang === 'pt' ? 'Enviar Formulário' : 'Send Form')}
            </button>
        </form>
    )
}

export default ContactForm
