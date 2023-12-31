import React from 'react'
import About from '../components/about/About'
import Hero from '../components/hero/Hero'
import Project from '../components/project/Project'
import Work from '../components/works/Work'
import Scrollsection from '../components/scrollsection/Scrollsection'

const Home = () => {
    return (
        <>
            <Hero/>
            {/* <About/> */}
            <Scrollsection />
            <Work />
            {/* <Project/> */}
        </>
    )
}

export default Home