import React from 'react'
import { NavLink } from 'react-router-dom'
import LangMenu from '../components/LangMenu'

const Navbar = ({ className = '' }) => {
    const baseLinkClass = 'flex items-center justify-center text-white hover:bg-white hover:text-indigo-900 rounded-md px-3 py-2 transition-colors duration-150';
    const activeLinkClass = 'flex items-center justify-center bg-white text-indigo-900 font-semibold hover:bg-white/90 hover:text-indigo-900 rounded-md px-3 py-2 transition-colors duration-150';
    const linkClass = ({ isActive }) => (isActive ? activeLinkClass : baseLinkClass);

    return (
        <nav className={`bg-indigo-700 border-b border-indigo-500 ${className}`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        <NavLink className="flex shrink-0 items-center mr-4" to="/index.html">
                            <span className="hidden md:block text-white text-2xl font-bold ml-2"
                            >
                                Pedro's Portfolio
                            </span>
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
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
                                    Projects
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={linkClass}
                                >
                                    Contact
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={linkClass}
                                >
                                    About
                                </NavLink>
                                <LangMenu buttonClass={`${baseLinkClass} flex flex-col items-center text-sm h-full justify-center`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar