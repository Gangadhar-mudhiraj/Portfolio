import React from 'react';
import skillIcon from "../assets/skillsIcon.png"; // Make sure this path is correct

const Skill = ({ heading, content }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out
                    flex flex-col items-center text-center"> {/* Main container for the skill card */}
            <span className="mb-4">
                <img src={skillIcon} alt={`${heading} Icon`} className="w-16 h-16 object-contain" /> {/* Icon styling */}
            </span>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {heading}
            </h1>
            <p className="text-base text-gray-600">
                {content}
            </p>
        </div>
    );
};

export default Skill;