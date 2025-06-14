import React from 'react'; // Don't forget to import React if this is a standalone file
import { Link } from 'react-router-dom';

const NavItem = ({ text, url }) => {
    return (
        <li className='list-none'>
            <Link
                to={url}
                // Tailwind CSS classes for styling
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
                {text}
            </Link>
        </li>
    );
};

export default NavItem;