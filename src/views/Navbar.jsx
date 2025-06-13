import Logo from "../assets/Logo.png";
import NavItem from "../utils/NavItem";
import { FiMenu } from 'react-icons/fi'; // Example icon
import { Link } from "react-router-dom";
const Navbar = () => {

    const navItems = [
        { id: 1, text: "About", url: "#about" },
        { id: 2, text: "Skills", url: "#skills" },
        { id: 3, text: "Gallery", url: "#gallery" },
        { id: 4, text: "Experience", url: "/experience" },
        { id: 5, text: "Software Solution", url: "/software-solution" },
        { id: 6, text: "Contact", url: "#contact" },
    ];
    return (
        <nav className="bg-gray-100 py-4 shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    {/* Circular Logo Container */}
                    <div className="rounded-full overflow-hidden h-8 w-8 mr-2 flex items-center justify-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="object-cover h-full w-full" // Styles for the image inside the circular div
                        />
                    </div>
                    <span className="font-bold text-xl text-gray-800">RDR</span>
                </Link>
                <div className="hidden md:flex space-x-6">
                    {navItems.map(item => (
                        <NavItem key={item.id} text={item.text} url={item.url} />
                    ))}
                </div>
                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
                        <FiMenu className="h-6 w-6" />
                    </button>
                    {/* You'll likely want to add a mobile menu that toggles on click */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;