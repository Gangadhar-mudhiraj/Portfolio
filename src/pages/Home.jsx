import React from 'react'
import About from './About'
import TrainingSkills from "../pages/TrainingSkills"

import Contactme from './Contactme'
const Home = () => {
    return (
        <div className='bg-blue-200'>
            <About />
            <TrainingSkills />
            <Contactme />
        </div>
    )
}

export default Home