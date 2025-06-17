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
import pic15 from "../assets/15.jpeg";
import pic16 from "../assets/16.jpeg";
import pic17 from "../assets/17.jpeg";
import pic18 from "../assets/18.jpeg";

import Title from "../utils/Title";

const Album = () => {
    const images = [
        pic1, pic2, pic3, pic4, pic5, pic6,
        pic7, pic8, pic9, pic10, pic11, pic12,
        pic13, pic14, pic15, pic16, pic17, pic18
    ];

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