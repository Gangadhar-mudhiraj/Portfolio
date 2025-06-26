import { useState } from 'react';
import profileImage from '../assets/profile.png';
import Title from '../utils/Title';
import Button from '../utils/Button';
import resume from "../assets/resume.png";
import bestAchieverImage from "../assets/best-achiever.png";
import appreciationImage from "../assets/appreciation.png";
import cambridgeMedalImage from "../assets/camebridge.png";
import Click from "../assets/clickme.png";
import { motion, useInView } from "framer-motion"; // Import motion and useInView
import { useRef } from 'react'; // Import useRef

const Item = ({ title, content }) => {
    return (
        <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-100 mt-1">{content}</p>
        </div>
    );
};

const Award = ({ title, content, image }) => {
    const [showImage, setShowImage] = useState(false);

    const handleTitleClick = () => {
        setShowImage(!showImage);
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

            {showImage && (
                <div className="mt-4 flex justify-center">
                    <img src={image} alt={title} className="max-w-full h-auto rounded-md shadow-lg" />
                </div>
            )}
        </div>
    );
};

const About = () => {
    const handleGetMyCV = () => {
        window.open("https://rajdeeraj.netlify.app/Raja%20DeeRaj.pdf", "_blank");
    };
    const handleProfile = () => {
        window.open(resume, "_blank");
    };

    const experience = [

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
            image: cambridgeMedalImage
        },
        {
            name: "Best Achiever Award",
            description: "Young Professional leader",
            image: bestAchieverImage
        },
        {
            name: "Appreciation Award",
            description: "Excellence in profession",
            image: appreciationImage
        }
    ];

    // Create a ref for the main section to observe when it's in view
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger once when 30% of the element is in view

    // Define animation variants for each section
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.8 }, // Start small and transparent
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1, // Overall animation duration
                ease: "easeOut",
                staggerChildren: 0.2 // Stagger the children animations
            }
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const imageVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const textContentVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const experienceAwardsVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <motion.section
            id='about'
            className="py-16 bg-blue-50"
            ref={ref} // Attach the ref to the main section
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Animate when in view
        >
            <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 p-4'>
                {/* Image Section */}


                {/* Text Content Section */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    variants={textContentVariants} // Apply animation variants
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Hello</h1>
                    <Title text={"I'm Raja DeeRaj"} className="!text-gray-800 !text-4xl md:!text-5xl lg:!text-6xl !mb-4" />
                    <p className="text-lg text-gray-600 mb-8 max-w-prose md:max-w-none mx-auto">
                        A soft skills trainer, motivational speaker and career coach
                    </p>
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
                            text={"Get my CV"}
                            className="px-6 py-2 rounded-md font-semibold bg-blue-500 text-white border border-blue-600 hover:bg-blue-600 hover:brightness-110 transition-colors duration-200"
                            handleClick={handleGetMyCV}
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="flex justify-center mb-8 md:mb-0"
                    variants={imageVariants} // Apply animation variants
                >
                    <div className="relative w-[250px] h-[500px] flex items-center justify-center">
                        <img
                            src={profileImage}
                            alt="Profile of RajaDeeRaj"
                            className="w-full h-full object-contain p-3 rounded-4xl animate-image mt-14"
                        />
                    </div>
                </motion.div>
            </div>
            <div className="screen bg-blue-100 p-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-start">
                    <motion.section
                        id="experience"
                        className="w-full md:w-1/2 mb-8 md:mb-0 bg-blue-50 rounded-3xl"
                        variants={experienceAwardsVariants}
                    >
                        <div className="p-6 rounded-lg shadow-lg h-full">
                            <Title text="Experience" />
                            <div>
                                {experience.map((i, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <Item title={i.title} content={i.content} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        id="awards"
                        className="w-full md:w-1/2"
                        variants={experienceAwardsVariants}
                    >
                        <div className="bg-blue-50 p-6 rounded-lg shadow-lg h-full">
                            <Title text="Awards" />
                            <div>
                                {awardsData.map((i, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <Award title={i.name} content={i.description} image={i.image} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </motion.section>
    );
};

export default About;