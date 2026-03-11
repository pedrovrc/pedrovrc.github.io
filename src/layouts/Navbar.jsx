import React from 'react'
import { NavLink } from 'react-router-dom'
import LangMenu from '../components/features/LangMenu'
import { useLanguage } from '../context/LanguageContext'
import websiteData from '../websiteData.json'

const Navbar = ({ className = '' }) => {
    const { lang } = useLanguage()
    const navTitle = websiteData.text[lang]?.navTitle || "Pedro's Portfolio"

    const sharedLinkClass = 'flex items-center justify-center rounded-full px-3 py-2 transition-colors duration-150';
    const baseLinkClass = `${sharedLinkClass} text-white hover:bg-fuchsia-400 hover:text-white`;
    const activeLinkClass = `${sharedLinkClass} bg-white text-indigo-900 font-semibold hover:bg-fuchsia-400/90 hover:text-white/90`;
    const linkClass = ({ isActive }) => (isActive ? activeLinkClass : baseLinkClass);

    return (
        <nav className={`bg-indigo-700 border-b border-indigo-500 ${className}`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        <NavLink className="flex shrink-0 items-center mr-4" to="/">
                            <span className="hidden md:block text-white text-2xl font-bold ml-2"
                            >
                                {navTitle}
                            </span>
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2 text-center content-center">
                                <NavLink
                                    to="/"
                                    className={linkClass}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/cv"
                                    className={linkClass}
                                >
                                    CV
                                </NavLink>
                                <NavLink
                                    to="/projects"
                                    className={linkClass}
                                >
                                    {lang === 'pt' ? 'Projetos' : 'Projects'}
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={linkClass}
                                >
                                    {lang === 'pt' ? 'Contato' : 'Contact'}
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={linkClass}
                                >
                                    {lang === 'pt' ? 'Sobre Mim' : 'About Me'}
                                </NavLink>
                                <LangMenu buttonClass={baseLinkClass} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar