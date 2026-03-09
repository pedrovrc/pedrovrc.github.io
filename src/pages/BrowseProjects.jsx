import React from 'react'
import ProjectListings from '../components/ProjectListings'
import { useLanguage } from '../context/LanguageContext'

const BrowseProjects = () => {
  const { lang } = useLanguage();

  return (
    <section className="bg-blue-50 px-16 py-8">
      <h2 className="text-3xl font-bold text-indigo-500 mb-2 text-center">
        {lang === 'en' ? 'Browse Projects' : 'Ver Projetos'}
      </h2>
      <p className= 'text-center text-lg text-gray-800'>
        {lang === 'en'
          ? 'These are my pinned repos on GitHub. Feel free to browse more on my profile!'
          : 'Estes são os meus projetos fixados no GitHub. Explore mais no meu perfil!'}
        </p>
      <ProjectListings />
    </section>
  )
}

export default BrowseProjects