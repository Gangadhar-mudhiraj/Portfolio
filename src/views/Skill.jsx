import React from 'react';
import defaultSkillIcon from "../assets/skillsIcon.png"; // Renamed for clarity as the default

const Skill = ({ heading, content, icon }) => { // Added 'icon' to props
    const iconSrc = icon || defaultSkillIcon; // Use passed icon, or default

    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out
                    flex flex-col items-center text-center">
            <span className="mb-4">
                {/* Use iconSrc for the image source */}
                <img src={iconSrc} alt={`${heading} Icon`} className="w-16 h-16 object-contain" />
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