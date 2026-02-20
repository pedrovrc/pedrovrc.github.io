import React from 'react'
import Hero from '../components/Hero'
import ProjectListings from '../components/ProjectListings';

const HomePage = () => {
    return (
        <>
            <Hero />
            <ProjectListings isHome={true}/>
        </>
    )
};

export default HomePage