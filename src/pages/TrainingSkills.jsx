import React from 'react';
import Title from '../utils/Title'; // Adjust path if necessary
// You might import a SkillCard component here later if you want to display each skill nicely
// import SkillCard from './SkillCard'; // Example
import Skill from '../views/Skill';
const TrainingSkills = () => {
    // Array of skill objects with title and content
    const skills = [
        {
            id: 1, // Unique ID for React keys
            title: "Language Trainer",
            content: "I have helped individuals with all aspects of English language learning, from grammar and vocabulary to pronunciation and fluency."
        },
        {
            id: 2,
            title: "Career Development Program Facilitator",
            content: "I guide participants through comprehensive career development programs, focusing on goal setting, professional growth strategies, and navigating career paths."
        },
        {
            id: 3,
            title: "Soft Skill Trainer",
            content: "My training enhances crucial interpersonal skills, including communication, teamwork, problem-solving, and adaptability, essential for personal and professional success."
        },
        {
            id: 4,
            title: "Personality Development Trainer",
            content: "I empower individuals to cultivate a strong, positive personality, fostering confidence, self-awareness, and effective self-presentation."
        },
        // Add more skill objects as needed
        // {
        //     id: 5,
        //     title: "Another Skill",
        //     content: "Description of another relevant skill or training area."
        // },
    ];

    return (
        <section id='training-skills' className="py-16 bg-blue-50"> {/* Added a unique ID and background */}
            <div className="container mx-auto px-4">
                {/* Reusable Title component for the section heading */}
                <Title text={"TRAINING SKILLS"} className="text-center mb-12" /> {/* Centered and added margin-bottom */}

                {/* This div will hold your individual skill displays */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Map over the skills array to display each skill */}
                    {skills.map(skill => (
                        // Here you would render a component for each skill, e.g., <SkillCard key={skill.id} {...skill} />
                        // For now, let's just display the title and content directly as a placeholder
                        <Skill key={skill.id} heading={skill.title} content={skill.content} />

                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingSkills;