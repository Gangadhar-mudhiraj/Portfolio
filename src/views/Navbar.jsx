import React, { useState, useEffect } from 'react';
import Logo from "../assets/Logo.png";
import NavItem from "../utils/NavItem";
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation(); // Get the current location object

    const navItems = [
        { id: 1, text: "About Me", url: "/#about" },
        { id: 2, text: "Skills", url: "/#skills" },
        { id: 3, text: "Gallery", url: "/#gallery" },
        // { id: 4, text: "Experience", url: "/" }, // This is a different route
        { id: 5, text: "Books", url: "/software-solution" }, // This is a different route
        { id: 6, text: "Contact", url: "/#contact" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // New useEffect for scrolling
    useEffect(() => {
        if (location.hash) {
            // Get the ID from the hash (remove the leading '#')
            const id = location.hash.substring(1);
            const element = document.getElementById(id);

            if (element) {
                // Use a small timeout to ensure the element is rendered and the browser has painted
                // This is especially useful if content might be lazy-loaded or rendered slightly after navigation
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100); // 100ms delay
            }
        } else {
            // Optional: If no hash, scroll to top of the page on route change (e.g., navigating from /about#skills to /experience)
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]); // Re-run this effect whenever the location object changes (including hash)


    return (
        <nav className="bg-gray-100 py-4 shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
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
                        onClick={toggleMobileMenu}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        aria-expanded={isMobileMenuOpen ? "true" : "false"}
                        aria-controls="mobile-menu"
                    >
                        <FiMenu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content (conditionally rendered) */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden bg-gray-50 py-2 shadow-inner"
                >
                    <div className="flex flex-col items-center space-y-2">
                        {navItems.map(item => (
                            <NavItem
                                key={item.id}
                                text={item.text}
                                url={item.url}
                                // This onClick is important for closing the mobile menu
                                // after a selection, regardless of whether it's an internal hash or external route.
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center py-2 text-gray-700 hover:bg-gray-200"
                            />
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;