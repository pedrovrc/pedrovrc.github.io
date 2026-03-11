import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import LangMenu from '../components/features/LangMenu'
import { useLanguage } from '../context/LanguageContext'
import websiteData from '../websiteData.json'

const Navbar = ({ className = '' }) => {
    const { lang } = useLanguage()
    const navTitle = websiteData.text[lang]?.navTitle || "Pedro's Portfolio"
    const [menuOpen, setMenuOpen] = useState(false)

    const sharedLinkClass = 'flex items-center justify-center rounded-full px-3 py-2 transition-colors duration-150';
    const baseLinkClass = `${sharedLinkClass} text-white hover:bg-fuchsia-400 hover:text-white`;
    const activeLinkClass = `${sharedLinkClass} bg-white portrait:mx-auto text-indigo-900 font-semibold hover:bg-fuchsia-400/90 hover:text-white/90`;
    const linkClass = ({ isActive }) => (isActive ? activeLinkClass : baseLinkClass);

    const links = [
        { to: '/', label: 'Home' },
        { to: '/cv', label: 'CV' },
        { to: '/projects', label: lang === 'pt' ? 'Projetos' : 'Projects' },
        { to: '/contact', label: lang === 'pt' ? 'Contato' : 'Contact' },
        { to: '/about', label: lang === 'pt' ? 'Sobre Mim' : 'About Me' },
    ]

    return (
        <nav className={`bg-indigo-700 border-b border-indigo-500 ${className}`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <NavLink className="flex shrink-0 items-center" to="/">
                        <span className="text-white text-2xl font-bold ml-2">
                            {navTitle}
                        </span>
                    </NavLink>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-2">
                        {links.map(({ to, label }) => (
                            <NavLink key={to} to={to} className={linkClass}>{label}</NavLink>
                        ))}
                        <LangMenu buttonClass={baseLinkClass} />
                    </div>

                    {/* Mobile: lang toggle + hamburger */}
                    <div className="flex md:hidden items-center gap-0">
                        <LangMenu buttonClass={baseLinkClass} />
                        <button
                            onClick={() => setMenuOpen(o => !o)}
                            className={baseLinkClass}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-indigo-500 border-t px-4 py-2 flex flex-col gap-1">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={linkClass}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar