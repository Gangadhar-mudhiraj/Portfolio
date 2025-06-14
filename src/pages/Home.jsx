import React from 'react'
import About from './About'
import TrainingSkills from "../pages/TrainingSkills"
import Gallery from './Gallery'
import Contactme from './Contactme'
const Home = () => {
    return (
        <div className='bg-blue-100'>
            <About />
            <TrainingSkills />
            <Gallery />
            <Contactme />
        </div>
    )
}

export default Home