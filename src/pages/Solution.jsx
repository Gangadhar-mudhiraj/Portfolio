import React, { useState } from 'react';
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import Title from "../utils/Title";

const Solution = () => {
    const books = [book1, book2, book3, book4, book5];
    const [currentSlide, setCurrentSlide] = useState(0); // State to manage the current active slide

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? books.length - 1 : prevSlide - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === books.length - 1 ? 0 : prevSlide + 1
        );
    };

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-gray-800 p-6">
            <div className="text-center max-w-4xl mx-auto h-full">
                {/* Main Heading for the Book Launch */}
                <Title text={"my upcoming books".toUpperCase()}></Title>

                {/* Subtitle/Tagline for the Book Launch */}
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-10">
                    Prepare to enhance your <b className="font-bold">English proficiency</b> and master essential <b className="font-bold">soft skills</b>. Our collection of impactful guides is launching soon!
                </p>

                {/* Book Slider Section */}
                <div className="relative w-full max-w-sm mx-auto mb-16 flex flex-col justify-center items-center"> {/* Added flex utilities here */}
                    {/* Slide Container */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg bg-sky-200 bg-opacity-70 flex justify-center items-center p-6 h-150 w-150"> {/* Added w-full */}
                        {books.map((book, index) => (
                            <div
                                key={index}
                                className={`absolute transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 z-0'
                                    } w-full h-full flex items-center justify-center p-4`}
                            >
                                <img
                                    src={book}
                                    alt={`Book ${index + 1}`}
                                    className="max-w-full max-h-full object-contain rounded-md"
                                />
                            </div>
                        ))}

                        {/* Left Arrow */}
                        <button
                            onClick={goToPrevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full ml-2 z-20 hover:bg-opacity-75 transition-colors"
                            aria-label="Previous slide"
                        >
                            &#10094; {/* Unicode for left arrow */}
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={goToNextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full mr-2 z-20 hover:bg-opacity-75 transition-colors"
                            aria-label="Next slide"
                        >
                            &#10095; {/* Unicode for right arrow */}
                        </button>
                    </div>

                    {/* Navigation Dots with Page Numbers */}
                    <div className="flex justify-center items-center mt-6 gap-3">
                        {books.map((_, index) => (
                            <div key={index} className="flex items-center gap-1">
                                <button
                                    onClick={() => goToSlide(index)}
                                    className={`h-3 w-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                ></button>

                            </div>
                        ))}
                    </div>

                    {/* Informational Message */}
                    <p className="text-lg md:text-xl font-normal text-gray-700 pt-12">
                        Stay tuned for release dates, sneak peeks, and more! Join our mailing list to be the first to know when these valuable resources become available.
                    </p>


                </div>
            </div>
        </div>
    );
};

export default Solution;