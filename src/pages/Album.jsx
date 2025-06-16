import React from 'react';
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import Title from "../utils/Title";

const Album = () => {
    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

    return (
        <div className="min-h-screen bg-sky-100 p-8"> {/* Darker sky blue background */}
            <Title text={"Gallery"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {images.map((image, index) => (
                    <div key={index} className="bg-sky-200 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 flex items-center justify-center p-1"> {/* Sky blue card with padding */}
                        <img src={image} alt={`Achievement ${index + 1}`} className="max-h-64 w-auto object-contain rounded-md" /> {/* Adjust image sizing and add rounded corners */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Album;