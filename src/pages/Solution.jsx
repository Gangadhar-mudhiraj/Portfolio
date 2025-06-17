import book1 from "../assets/book1.png"
import book2 from "../assets/book2.png"
import book3 from "../assets/book3.png"
import book4 from "../assets/book4.png"
import book5 from "../assets/book5.png"
import Title from "../utils/Title"
const Solution = () => {

    const books = [book1, book2, book3, book4, book5];
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-gray-800 p-6">
            <div className="text-center max-w-4xl mx-auto">
                {/* Main Heading for the Book Launch - no animation */}
                <Title text={"my upcoming books".toUpperCase()}></Title>

                {/* Subtitle/Tagline for the Book Launch */}
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-10">
                    Prepare to enhance your <b className="font-bold">English proficiency</b> and master essential <b className="font-bold">soft skills</b>. Our collection of impactful guides is launching soon!
                </p>
                {/* Book Display Section - no hover animation */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-16">
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="w-32 h-48 md:w-40 md:h-60 bg-white bg-opacity-70 rounded-lg shadow-lg overflow-hidden flex items-center justify-center p-2"
                        >
                            {/* Image for each book, object-contain ensures the full book is visible within its card */}
                            <img
                                src={book}
                                alt={`Book ${index + 1}`}
                                className="w-full h-full object-contain rounded-md"
                            />
                        </div>
                    ))}
                </div>

                {/* Informational Message */}
                <p className="text-lg md:text-xl font-normal text-gray-700">
                    Stay tuned for release dates, sneak peeks, and more! Join our mailing list to be the first to know when these valuable resources become available.
                </p>

                {/* Copyright Information */}
                <p className="mt-20 text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} RDR. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Solution;