import React from 'react';

const Button = ({ text, handleClick, className = '' }) => {
    return (
        <button
            onClick={handleClick}
            className={`
                 cursor-pointer 
                font-semibold
                py-2 px-6 rounded-md shadow-md
                transition duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                ${className} /* This will now fully control background, text, and hover colors */
            `}
        >
            {text}
        </button>
    );
};

export default Button;