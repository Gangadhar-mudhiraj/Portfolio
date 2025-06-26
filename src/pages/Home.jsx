
import About from './About'
import TrainingSkills from "../pages/TrainingSkills"
import Gallery from './Gallery'
import AVpage from './AVpage'
const Home = () => {
    return (
        <div className='bg-blue-100'>
            <About />
            <TrainingSkills />
            <Gallery />
            <AVpage />
        </div>
    )
}

export default Home