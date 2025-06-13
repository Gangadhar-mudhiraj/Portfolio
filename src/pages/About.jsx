import React from 'react';
import profileImage from '../assets/profile.png'; // Ensure the path to your profile image is correct
import Title from '../utils/Title'; // Assuming Title.jsx is in a 'utils' folder
import Button from '../utils/Button'; // Assuming Button.jsx is in a 'utils' folder

const About = () => {
    return (
        <section id='about' className="py-16 bg-blue-50"> {/* Changed to bg-blue-50 for a softer blue */}
            <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8'> {/* Added gap-8 for spacing */}
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
        </section>
    );
};

export default About;