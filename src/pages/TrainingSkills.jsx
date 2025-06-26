import React from 'react';
import Title from '../utils/Title'; // Adjust path if necessary
// You might import a SkillCard component here later if you want to display each skill nicely
// import SkillCard from './SkillCard'; // Example
import Skill from '../views/Skill';
const TrainingSkills = () => {
    // Array of skill objects with title and content
    const skills = [
        {
            id: 1,
            title: "English Language Trainer",
            content: "I haved helped with all aspects of English language learning, from grammar and vocabulary to pronunciation and fluency.",
        },
        {
            id: 2,
            title: "Career Development Trainer",
            content: "The program covers a variety of topics, such as resume writing, interviewing, and networking.It is designed to help individuals identify their career goals, develop a career plan, and find a job that they love.",
        },
        {
            id: 3,
            title: "Soft Skill Trainer",
            content: "Develop a business plan, identify and overcome challenges, and improve your leadership skills. Whether you are a startup or an established business, It help you achieve your business goals.",
        },
        {
            id: 4,
            title: "Personality Development Trainer",
            content: "Identify your strengths and weaknesses, and develop strategies for personal growth.Whether you are looking to improve your personal or professional life, and develop your personality.",
        },
        {
            id: 5,
            title: "Business Coach",
            content: "Develop a business plan, identify and overcome challenges, and improve your leadership skills. Whether you are a startup or an established business, It help you achieve your business goals.",
        },
        {
            id: 7,
            title: "Faculty Development Trainer",
            content: "This program is focused on enhancing teaching methodologies, communication skills, and curriculum design. It equips educators with modern pedagogical tools, classroom engagement techniques, and professional development strategies to improve academic delivery and student outcomes."
        }, {
            id: 8,
            title: "Motivational Speaker",
            content: "This program aims to inspire individuals by addressing topics such as personal growth, resilience, leadership mindset, and goal setting. It leverages real-life experiences and dynamic delivery to motivate students and professionals to unlock their potential and pursue excellence."
        }, {
            id: 9,
            title: "Life Coach",
            content: "This program empowers individuals to achieve clarity, direction, and purpose in life. Through personalized guidance in areas like decision-making, confidence building, career transitions, and work-life balance, it fosters self-awareness and long-term personal development."

        },
        {
            id: 10,
            title: "Train The Trainer",
            content: "his program is designed for aspiring trainers and facilitators who want to hone their delivery, design, and engagement skills. It focuses on mastering adult learning principles, effective communication techniques, and interactive training methodologies, empowering participants to create impactful and memorable learning experiences."
        }, {
            id: 11,
            title: "Trainer- Freelancer ",
            content: "This program is tailored for students transitioning from academic life to the professional world. It focuses on building essential soft skills such as communication, teamwork, time management, and professional etiquette, ensuring a smooth and confident shift from campus to corporate environments."
        }
    ];

    return (
        <section id='skills' className="py-16 bg-blue-50"> {/* Added a unique ID and background */}
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