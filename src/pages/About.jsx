import { useState } from 'react';
import profileImage from '../assets/profile.png'; // Ensure the path to your profile image is correct
import Title from '../utils/Title'; // Assuming Title.jsx is in a 'utils' folder
import Button from '../utils/Button'; // Assuming Button.jsx is in a 'utils' folder
import resume from "../assets/resume.png"
import { useNavigate } from 'react-router-dom';
import bestAchieverImage from "../assets/best-achiever.png";
import appreciationImage from "../assets/appreciation.png";
import cambridgeMedalImage from "../assets/camebridge.png";
import Click from "../assets/clickme.png";

const Item = ({ title, content }) => {
    return (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black">{title}</h3>
            <p className="text-gray-500 mt-1">{content}</p>
        </div>
    );
};

const Award = ({ title, content, image }) => {
    // State to control whether the image is visible or not
    const [showImage, setShowImage] = useState(false);

    // Function to toggle the image's visibility
    const handleTitleClick = () => {
        setShowImage(!showImage);
        // Toggles between true and false
    };

    return (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <h3
                className="text-xl font-semibold hover:text-2xl text-blue-600 cursor-pointer flex items-center gap-2"
                onClick={handleTitleClick}
            >
                {title}
                <span>
                    <img
                        src={Click}
                        alt=""
                        className="w-5 h-5 transition-transform duration-200 hover:scale-125 hover:brightness-125"
                    />
                </span>
            </h3>

            <p className="text-gray-500 mt-1">{content}</p>

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

    // Function to handle "Get my CV" button click
    const handleGetMyCV = () => {
        // Open the CV PDF link in a new tab
        window.open("https://rajdeeraj.netlify.app/Raja%20DeeRaj.pdf", "_blank");
    };
    const handleProfile = () => {
        const profileImageUrl = resume;
        window.open(resume, "_blank")

    }


    const experience = [
        {
            title: "Serco International BPO",
            content: "Master Trainer - English & Soft Skills "
        },
        {
            title: "Indus Management Consultants",
            content: "Master Trainer - English & Soft Skills "
        },
        {
            title: "Tech Mahindra Foundation",
            content: "Master Trainer - English & Soft Skills "
        },
        {
            title: "AA - Edutech British Council",
            content: "Master Trainer - English & Soft Skills "
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
                <div className="flex justify-center mb-8 md:mb-0">
                    <div className="overflow-hidden w-[250px] h-[500px] ">
                        <img
                            src={profileImage}
                            alt="Profile of RajaDeeRaj"
                            className="w-full h-full object-cover p-3 rounded-4xl"
                        />
                    </div>
                </div>



                {/* Text Content Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    {/* Primary welcome message */}
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Hello</h1>

                    {/* Reusable Title component for the name */}
                    <Title text={"I'm Raja DeeRaj"} className="!text-gray-800 !text-4xl md:!text-5xl lg:!text-6xl !mb-4" /> {/* Overriding Title defaults */}

                    {/* Description paragraph */}
                    <p className="text-lg text-gray-600 mb-8 max-w-prose md:max-w-none mx-auto"> {/* Added max-w-prose for readability on wide screens */}
                        A soft skills trainer, motivational speaker and career coach
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <Button
                            text={"GET MY PROFILE"}
                            className="px-6 py-2 rounded-md font-semibold bg-black text-white border border-black hover:bg-gray-800 transition-colors duration-200"
                            handleClick={handleProfile}
                        />

                        <Button
                            text={"GET MY PORTFOLIO"}
                            className="px-6 py-2 rounded-md font-semibold bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                            handleClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/13pR4EqEfQBOAIVjWtsAfYZJ4Kn8KmwF2/view?usp=drivesdk",
                                    "_blank"
                                )
                            }
                        />

                        <Button
                            text={"GET MYCV"}
                            className="px-6 py-2 rounded-md font-semibold bg-blue-500 text-white border border-blue-600 hover:bg-blue-600 hover:brightness-110 transition-colors duration-200"
                            handleClick={handleGetMyCV}
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