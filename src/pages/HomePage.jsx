import React from 'react'
import Hero from '../components/features/Hero'
import SkillsSection from '../components/features/SkillsSection'

const HomePage = () => {
    return (
        <section className='bg-blue-50'>
            <Hero />
            <SkillsSection />
        </section>
    )
};

export default HomePage