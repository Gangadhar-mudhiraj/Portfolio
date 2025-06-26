import React from 'react';
import Title from "../utils/Title"; // Assuming Title component handles its own styling
import Button from "../utils/Button"; // Import the Button component

// Import specific icons from react-icons/fa (for Font Awesome icons)
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contactme = () => {
    // Define your social media links dynamically with actual URLs
    const socialMediaLinks = [
        // LinkedIn and Twitter updated with provided URLs
        // Note: These are for the "Follow Me" section which still displays text names.
        // The actual icons are in the footer.
        { name: "LinkedIn", url: "https://www.linkedin.com/in/raja-deeraj-b5200a34a/" },

        // Keeping Facebook and Instagram as placeholders, you can update them
        { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61577124824119" },
        { name: "Instagram", url: "https://www.instagram.com/raja_dheeraj3/" },
    ];

    // Function to handle "Message Me" button click
    const handleMessageMe = () => {
        // Open default email client with pre-filled recipient
        window.location.href = "mailto:arajadeeraj@gmail.com";
    };



    return (
        <section id='contact' className="bg-gray-900 py-16 text-white"> {/* Dark background, generous padding */}
            <div className="container mx-auto px-4"> {/* Centered container */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-400"> {/* Prominent title with light blue accent */}
                    Get In Touch.
                </h2>
                <div className="max-w-3xl mx-auto text-center mb-12"> {/* Centered introductory paragraph */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Have a project in mind or need expert guidance? Let’s collaborate to create something exceptional! Connect with us to turn your ideas into reality with innovation and precision. Your vision, our expertise—let’s build together!
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-start gap-12 mt-10"> {/* Responsive two-column layout */}
                    {/* Follow Me Section - This section will continue to show text names for consistency
                        as the request was specifically for icons in the footer. */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Follow Me</h3>
                        <ul className="space-y-3">
                            {socialMediaLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-blue-400 transition duration-300 flex items-center gap-2"
                                    >
                                        <span className="text-xl">{link.name}</span> {/* Displaying name as text here */}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Me Section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Contact Me</h3>
                        <p className="text-lg text-gray-300 mb-2">
                            <a href="mailto:arajadeeraj@gmail.com" className="hover:text-blue-400 transition duration-300">
                                arajadeeraj@gmail.com
                            </a>
                        </p>
                        <p className="text-lg text-gray-300">
                            <a href="tel:+917337372250" className="hover:text-blue-400 transition duration-300">
                                +91 7337372250
                            </a>
                        </p>
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
                    <Button
                        text={"Message Me"}
                        handleClick={handleMessageMe}
                        className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto"
                    />

                </div>

                {/* --- */}
                {/* Footer Section with React-Icons */}
                {/* --- */}
                <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">


                    <div className="flex justify-center gap-6 mb-4 text-2xl">
                        {/* LinkedIn Icon using react-icons */}
                        <a
                            href="https://www.linkedin.com/in/raja-deeraj-b5200a34a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition duration-300"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin />
                        </a>

                        {/* Facebook Icon using react-icons */}
                        <a
                            href="https://www.facebook.com/profile.php?id=61577124824119"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition duration-300"
                            aria-label="Facebook Profile"
                        >
                            <FaFacebook />
                        </a>

                        {/* Instagram Icon using react-icons */}
                        <a
                            href="https://www.instagram.com/raja_dheeraj3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-500 transition duration-300"
                            aria-label="Instagram Profile"
                        >
                            <FaInstagram />
                        </a>
                    </div>

                    <p>&copy; Copyright Raja DeeRaj 2025</p>
                </div>
            </div>
        </section>
    );
};

export default Contactme;
