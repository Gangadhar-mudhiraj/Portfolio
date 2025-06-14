import React from 'react';

const Solution = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-400 to-blue-600 flex flex-col items-center justify-center text-white p-6">
            <div className="text-center max-w-2xl mx-auto">
                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-pulse">
                    Launching Soon!
                </h1>

                {/* Subtitle/Tagline */}
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-10">
                    We're putting the finishing touches on something truly special.
                    Get ready for an innovative software solution designed to
                    streamline your processes and elevate your digital experience.
                </p>

                {/* Informational Message */}
                <p className="text-lg md:text-xl font-normal text-white text-opacity-90">
                    Stay tuned for updates. We appreciate your patience as we prepare
                    to bring you the best possible product.
                </p>

                {/* Optional: Placeholder for future contact/info if needed, but no immediate action */}
                <p className="mt-20 text-sm text-white text-opacity-70">
                    &copy; {new Date().getFullYear()} RDR. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Solution;