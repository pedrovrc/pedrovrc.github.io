import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import photo from '../../assets/images/foto.jpg'
import { useLanguage } from '../../context/LanguageContext'
import websiteData from '../../websiteData.json'

const Hero = () => {
    const { lang } = useLanguage();
    const { title, subtitle } = websiteData.text[lang];

    return (
        <section className="bg-indigo-700 py-12 px-4 mb-2">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center relative">
                    <img
                        className="w-40 rounded-full mx-auto border-2 border-fuchsia-300"
                        src={photo}
                        alt="Profile picture"
                    />
                    <h1
                        className="text-3xl font-bold text-white sm:text-4xl md:text-5xl mt-4"
                    >
                        {title}
                    </h1>
                    <p className="my-4 text-xl text-white">
                        {subtitle}
                    </p>
                    <div className="flex justify-center gap-4 mt-10 mb-2">
                        <Link
                            to="/projects"
                            className="inline-flex items-center justify-center bg-white text-indigo-700 font-semibold px-2 py-2 rounded-lg hover:bg-indigo-50 transition"
                        >
                            {lang === 'en' ? 'View Projects' : 'Ver Projetos'}
                        </Link>
                        <Link
                            to="/cv"
                            className="inline-flex items-center justify-center border border-white text-white font-semibold px-2 py-2 rounded-lg hover:bg-indigo-600 transition"
                        >
                            {lang === 'en' ? 'Résumé' : 'Currículo'}
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center border border-white text-white font-semibold px-2 py-2 rounded-lg hover:bg-indigo-600 transition"
                        >
                            {lang === 'en' ? 'About Me' : 'Sobre Mim'}
                        </Link>
                    </div>
                    <div className="flex justify-center gap-3 mt-2">
                        <a
                            href="https://github.com/pedrovrc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-indigo-700 hover:bg-white transition rounded-lg px-2 py-2"
                            aria-label="GitHub"
                        >
                            <FaGithub size={28} />
                        </a>
                        <a
                            href="https://linkedin.com/in/pedrovrc-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-indigo-700 hover:bg-white transition rounded-lg px-2 py-2"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero