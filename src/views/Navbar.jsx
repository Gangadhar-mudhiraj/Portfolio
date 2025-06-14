import React, { useState } from 'react'; // Import useState
import Logo from "../assets/Logo.png";
import NavItem from "../utils/NavItem";
import { FiMenu } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Navbar = () => {
    // State to manage the visibility of the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 1, text: "About", url: "#about" },
        { id: 2, text: "Skills", url: "#skills" },
        { id: 3, text: "Gallery", url: "#gallery" },
        { id: 4, text: "Experience", url: "/experience" },
        { id: 5, text: "Software Solution", url: "/software-solution" },
        { id: 6, text: "Contact", url: "#contact" },
    ];

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-100 py-4 shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    {/* Circular Logo Container */}
                    <div className="rounded-full overflow-hidden h-8 w-8 mr-2 flex items-center justify-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="object-cover h-full w-full"
                        />
                    </div>
                    <span className="font-bold text-xl text-gray-800">RDR</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map(item => (
                        <NavItem key={item.id} text={item.text} url={item.url} />
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu} // Add onClick handler
                        className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        aria-expanded={isMobileMenuOpen ? "true" : "false"} // ARIA attribute for accessibility
                        aria-controls="mobile-menu" // Connect to the mobile menu element
                    >
                        <FiMenu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content (conditionally rendered) */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu" // ID for ARIA attribute
                    className="md:hidden bg-gray-50 py-2 shadow-inner" // Styling for the mobile dropdown
                >
                    <div className="flex flex-col items-center space-y-2">
                        {navItems.map(item => (
                            // Close menu when a NavItem is clicked in mobile view
                            <NavItem
                                key={item.id}
                                text={item.text}
                                url={item.url}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center py-2 text-gray-700 hover:bg-gray-200" // Example styling for mobile links
                            />
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;