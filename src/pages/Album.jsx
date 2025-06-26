import React from 'react';
import pic1 from "../assets/1.jpeg";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.jpeg";
import pic4 from "../assets/4.jpeg";
import pic5 from "../assets/5.jpeg";
import pic6 from "../assets/6.jpeg";
import pic7 from "../assets/7.png";
import pic8 from "../assets/8.jpeg";
import pic9 from "../assets/9.png";
import pic10 from "../assets/10.jpeg";
import pic11 from "../assets/11.jpeg";
import pic12 from "../assets/12.jpeg";
import pic13 from "../assets/13.jpeg";
import pic14 from "../assets/14.jpeg";
import pic15 from "../assets/pic15.png";
import pic16 from "../assets/pic16.png";
import pic17 from "../assets/17.jpeg";
import pic18 from "../assets/18.jpeg";
import pic19 from "../assets/19.jpeg";

import Title from "../utils/Title";

const Album = () => {
    const allImages = [
        { src: pic3, orientation: 'horizontal' },
        { src: pic4, orientation: 'horizontal' },
        { src: pic6, orientation: 'horizontal' },
        { src: pic7, orientation: 'horizontal' },
        { src: pic8, orientation: 'horizontal' },
        { src: pic11, orientation: 'horizontal' },
        { src: pic13, orientation: 'horizontal' },
        { src: pic17, orientation: 'horizontal' },
        { src: pic18, orientation: 'horizontal' },
        { src: pic19, orientation: 'horizontal' },
        { src: pic15, orientation: 'horizontal' },
        { src: pic16, orientation: 'horizontal' },
        { src: pic1, orientation: 'vertical' },
        { src: pic2, orientation: 'vertical' },
        // { src: pic5, orientation: 'vertical' },
        // { src: pic9, orientation: 'vertical' },
        { src: pic10, orientation: 'vertical' },
        { src: pic12, orientation: 'vertical' },
        { src: pic14, orientation: 'vertical' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-200 p-8">
            <Title text={"Gallery"} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {allImages.map((imgObj, index) => (
                    <div
                        key={index}
                        className="
                            rounded-lg shadow-xl overflow-hidden
                            transform transition-transform duration-300 hover:scale-105
                            flex items-center justify-center p-2
                        bg-indigo-200 "
                    >
                        <img
                            src={imgObj.src}
                            alt={`Gallery Image ${index + 1}`}
                            className={`
                                w - full h - full object - contain rounded - md
                                ${imgObj.orientation === 'horizontal'
                                    ? 'max-h-56'
                                    : 'max-h-80'
                                }
                    `}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Album;