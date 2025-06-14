import { useState } from 'react';
import profileImage from '../assets/profile.png'; // Ensure the path to your profile image is correct
import Title from '../utils/Title'; // Assuming Title.jsx is in a 'utils' folder
import Button from '../utils/Button'; // Assuming Button.jsx is in a 'utils' folder


import bestAchieverImage from "../assets/best-achiever.png";
import appreciationImage from "../assets/appreciation.png";
import cambridgeMedalImage from "../assets/camebridge.png";

const Item = ({ title, content }) => {
    return (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
            <p className="text-gray-700 mt-1">{content}</p>
        </div>
    );
};

const Award = ({ title, content, image }) => {
    // State to control whether the image is visible or not
    const [showImage, setShowImage] = useState(false);

    // Function to toggle the image's visibility
    const handleTitleClick = () => {
        setShowImage(!showImage); // Toggles between true and false
    };

    return (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <h3
                className="text-xl font-semibold text-blue-700 cursor-pointer"
                onClick={handleTitleClick}
            >
                {title}
            </h3>
            <p className="text-gray-700 mt-1">{content}</p>

            {/* Conditionally render the image based on the 'showImage' state */}
            {showImage && (
                <div className="mt-4 flex justify-center">
                    <img src={image} alt={title} className="max-w-full h-auto rounded-md shadow-lg" />
                </div>
            )}
        </div>
    );
};

const About = () => {

    const experience = [
        {
            title: "Serco International BPO",
            content: "English & Soft Skills Trainer"
        },
        {
            title: "Indus Management Consultants",
            content: "Language and Communication Coach"
        },
        {
            title: "Tech Mahindra Foundation",
            content: "English Language & Soft Skills Mentor"
        },
        {
            title: "AA - Edutech British Council",
            content: "English Fluency and Soft Skills Expert"
        },
        {
            title: "ICT Academy",
            content: "Corporate Soft Skills Trainer"
        }
    ];


    const awardsData = [
        {
            name: "Gold medal from Cambridge Assessment",
            description: "MASTER TRAINER Soft Skills",
            image: cambridgeMedalImage // Using the descriptive import name
        },
        {
            name: "Best Achiever Award",
            description: "Young Professional leader",
            image: bestAchieverImage // Using the descriptive import name
        },
        {
            name: "Appreciation Award",
            description: "Excellence in profession",
            image: appreciationImage // Using the descriptive import name
        }
    ];
    return (
        <section id='about' className="py-16 bg-blue-50"> {/* Changed to bg-blue-50 for a softer blue */}
            <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 p-4'> {/* Added gap-8 for spacing */}
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                    {/* Reverting to fixed sizes for consistent circular shape */}
                    <div className="rounded-full overflow-hidden h-1/4 w-1/3 shadow-md">

                        <img src={profileImage} alt="Profile of RajaDeeRaj" className="object-cover w-full h-full" />

                    </div>
                </div>

                {/* Text Content Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    {/* Primary welcome message */}
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Hello</h1>

                    {/* Reusable Title component for the name */}
                    <Title text={"I'm RajaDeeRaj"} className="!text-gray-800 !text-4xl md:!text-5xl lg:!text-6xl !mb-4" /> {/* Overriding Title defaults */}

                    {/* Description paragraph */}
                    <p className="text-lg text-gray-600 mb-8 max-w-prose md:max-w-none mx-auto"> {/* Added max-w-prose for readability on wide screens */}
                        A Career Development Program, Soft Skill Trainer, and Personality Development trainer.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <Button
                            text={"more about me".toUpperCase()}
                            className='bg-black hover:bg-gray-800 text-white' // Explicitly define all colors
                            handleClick={() => console.log('More about me clicked')}
                        />
                        <Button
                            text={"get in touch".toUpperCase()}
                            className='bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' // Explicitly define all colors
                            handleClick={() => console.log('Get in touch clicked')}
                        />
                        <Button
                            text={"get my av".toUpperCase()}
                            className='bg-transparent border border-gray-400 text-gray-600 hover:bg-gray-200' // Explicitly define all colors
                            handleClick={() => console.log('Get my AV clicked')}
                        />
                    </div>
                </div>
            </div>
            <div className="screen bg-blue-100 p-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-start">
                    <section id="experience" className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-lg h-full">
                            <Title text="Experience" />
                            <div>
                                {experience.map((i, index) => (
                                    <Item key={index} title={i.title} content={i.content} />
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="awards" className="w-full md:w-1/2">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-lg h-full">
                            <Title text="Awards" />
                            <div>
                                {awardsData.map((i, index) => (
                                    <Award key={index} title={i.name} content={i.description} image={i.image} />
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default About;