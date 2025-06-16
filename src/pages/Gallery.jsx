
import Title from "../utils/Title"; // Assuming Title component handles its own styling

import AITLogo from "../assets/AIT.jpeg";
import AnuragUniversityLogo from "../assets/Anuraguniversity.jpg";

import BVRITLogo from "../assets/bvrit.png";
import CBITLogo from "../assets/CBIT.png";
import CMRCETLogo from "../assets/cmrcet.jpeg";
import CMRJEEELogo from "../assets/CMR.jpeg"; // Renamed to avoid conflict with cmr.png, assuming it's different
import GITAMLogo from "../assets/GITAM.jpg";
import KITSLogo from "../assets/KITS.png";
import MallareddyUniversityLogo from "../assets/Mallareddyuniversity.jpg";
import MRCELogo from "../assets/MRCE.jpeg";
import MRECWLogo from "../assets/MRECW.png";


import QISLogo from "../assets/QIS.jpeg";
import RITLogo from "../assets/RIT.jpg";
import SardarLogo from "../assets/Sardar.jpg";

import TKRJEEELogo from "../assets/TKR.jpeg"; // Renamed to avoid conflict with tkr.png

import VasaviLogo from "../assets/Vasavi.jpeg";
import Album from "./Album";


const Achievement = ({ number, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-4">
            {/* Achievement Number */}
            <h3 className="text-4xl font-bold text-blue-700 mb-2">
                {number}
            </h3>
            {/* Title (e.g., Happy Clients) */}
            <p className="text-xl font-semibold text-gray-800 mb-2">
                {title}
            </p>
            {/* Description */}
            <p className="text-gray-600 text-sm">
                {description}
            </p>
        </div>
    );
};

const Item = ({ image, title, subTitle, description, appreciation }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center max-w-sm mx-auto mb-8">
            <div className="flex flex-col items-center mb-4">
                {/* University/College Logo */}
                <img src={image} alt={`${title}'s college logo`} className="w-20 h-20 object-contain rounded-full mb-3 border-2 border-blue-200" />
                {/* Student Name */}
                <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
                {/* College Name */}
                <p className="text-sm text-blue-500 mt-1">{subTitle}</p>
            </div>
            <div className="text-gray-700 leading-relaxed">
                {/* Description - using dangerouslySetInnerHTML for the <br> tags */}
                <p dangerouslySetInnerHTML={{ __html: description }}></p>

                {/* New: Display appreciation if it exists */}
                {appreciation && (
                    <p className="mt-3 font-medium text-blue-600">
                        {appreciation}
                    </p>
                )}
            </div>
        </div>
    );
};

// ---
// Gallery Component
// ---
const Gallery = () => {
    // Renamed 'items' to 'testimonials' for better clarity of content

    const achievementsData = [
        {
            number: "33+",
            title: "Happy Clients",
            description: "Delivering excellence and innovation, we have successfully collaborated with 33+ satisfied customers from prestigious institutions. Our commitment to quality, precision, and user-centric solutions has earned us the trust of students, educators."
        },
        {
            number: "50+",
            title: "Projects Completed",
            description: "We have successfully completed over 50+ projects spanning multiple domains. Our collaborations with students and professionals from top colleges and many more have resulted in innovative solutions and impactful contributions."
        },
        {
            number: "12+",
            title: "Total Experience",
            description: "With over 12+ years of collective experience, we have worked closely with institutions like ANURAG UNIVERSITY AVN ENGINEERING, CMRCET, TKR, GITAM, BVRIT, and MRECW, ensuring top-quality results in our projects and services."
        },
        {
            number: "999+",
            title: "Positive Feedback",
            description: "Our commitment to excellence has earned us 9999+ positive reviews from students, educators, and professionals across premier institutions. Their feedback drives us to continuously improve and innovate."
        }
    ];
    const testimonials = [

        {
            title: "Pravalika Chilvuri",
            subTitle: "Malla Reddy University",
            description: "I've learned so much from this training how to be assertive engaging and interactive with team positively. Our trainer Raja DeeRaj sir training is fun learning activity based.",
            image: MallareddyUniversityLogo // Added image
        },
        {
            title: "Yashwanth vedagiri",
            subTitle: "KITS",
            description: "My trainer Raja Deeraj sir’s ability to explain complex concepts in a clear and concise manner is truly remarkable. I feel confident in my understanding now.",
            image: KITSLogo // Added image
        },
        {
            title: " R.Moksha Sri",
            subTitle: "Anurag university",
            description: "Our trainer Raja DeeRaj sir has a knack for creating a supportive and encouraging learning environment. I feel comfortable asking questions and participating in class.",
            image: AnuragUniversityLogo // Added image
        },
        {
            title: "Sharanya",
            subTitle: "CBIT",
            description: "My trainer Raja DeeRaj sir is not only an excellent facilitator but also a great mentor. His training methodology helped me grow both personally and professionally which leads to achieve in career.",
            image: CBITLogo // Added image
        },
        {
            title: "Sudha Rani",
            subTitle: "TRK", // Assuming TRK refers to TKR.jpeg or tkr.png
            description: "I was struggling with proper communication before, attended Raja DeeRaj sir sessions regularly happy for the trainer's patience and clear explanations, I can speak now understand it completely in communication with confident",
            image: TKRJEEELogo // Assuming TKR.jpeg. If you meant tkr.png, use TKRLogo here.
        },
        {
            title: "Mahesh Reddy",
            subTitle: "QIS",
            description: "Raja DeeRaj sir is a good trainer has a unique ability to make even the most challenging topics easy to grasp. Sir is always willing to explain things multiple times until everyone understands.",
            image: QISLogo // Added image
        },
        {
            title: "Deekshitha",
            subTitle: "RIT",
            description: "Our trainer Raja DeeRaj has a fantastic ability to connect with students and make them feel comfortable. They're always approachable and willing to help.",
            image: RITLogo // Added image
        },
        {
            title: "Sangitha pandit",
            subTitle: "AIT",
            description: "My trainer Raja DeeRaj has inspired me to pursue my goals with greater determination. I'm now more motivated than ever before. Sir is having sophisticated content with rich experience in training methodologies to get good results.",
            image: AITLogo // Added image
        },
        {
            title: "M Nandini",
            subTitle: "MRECW",
            description: "Raja DeeRaj sir is a trainer cum motivator has helped me develop a love for learning. I'm now excited to continue my education and pursue new challenges. I'm so grateful for the opportunity to learn from this trainer.",
            image: MRECWLogo // Added image
        },
        {
            title: "Tejaswini",
            subTitle: "Vasavi engineering college",
            description: "The soft skills session was incredibly enriching, providing valuable insights and logic to enhance both personal and professional development. Training is delivered with fun learning activities. ",
            image: VasaviLogo // Added image
        },
        {
            title: "Rishita Nanduri",
            subTitle: "Sardar",
            description: "This Soft Skills session has a unique ability to create a comfortable learning environment where everyone feels empowered to participate and share their thoughts. This made the training sessions both informative and enjoyable.",
            image: SardarLogo // Added image
        },
        {
            title: "Deepika Rani ",
            subTitle: "GITAM UNIVERSITY",
            description: "The Soft Skills session was superb, interactive and engaging. The trainer's methodology is enthusiastic, and I loved the way of explanation.",
            image: GITAMLogo // Added image
        },
        {
            title: "Abhinay vollala",
            subTitle: "CMR", // Assuming this CMR refers to CMR.jpeg or cmr.png
            description: "MASTER in soft skills, Raja DeeRaj is a fantastic trainer with an enthusiastic personality. He made every concept practical and engaging. ",
            image: CMRJEEELogo // Assuming CMR.jpeg. If you have a separate cmr.png, use CMRLogo here.
        },
        {
            title: "Sirisha Meda",
            subTitle: "bvrit",
            description: "The communication workshop was a game- changer! Raja DeeRaj sir's approach made complex ideas incredibly easy to grasp, and his energy was truly infectious. I walked away feeling far more confident and equipped.",// Description is empty, you might want to fill this later",
            image: BVRITLogo // Added image
        },
        {
            title: "Aruna devi",
            subTitle: "MRCE",
            description: "I've attended many training sessions, but this soft skills program by Raja DeeRaj sir stood out. The practical exercises and sir's clear, enthusiastic guidance made every moment valuable. Highly recommend for anyone looking to genuinely improve.", // Description is empty, you might want to fill this later
            image: MRCELogo // Added image
        }
    ];

    return (
        <section id='gallery' className="py-16 bg-blue-50"> {/* Light blue background */}
            <Album />
            <div className="container mx-auto p-6">
                <Title text={"Hear it from My Happy Pupils"} className="text-center mb-12 text-blue-800" /> {/* Centering title and adjusting color */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"> {/* Responsive grid layout */}
                    {testimonials.map((item, index) => ( // Corrected mapping syntax
                        <Item
                            key={index} // Add a unique key for list items
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            subTitle={item.subTitle}
                            appreciation={item.appreciation}
                        />
                    ))}
                </div>


            </div>

            <div className="py-12 bg-gray-50"> {/* Added a section for overall padding and background */}
                <div className="container mx-auto px-4"> {/* Centered container for content */}
                    <Title text={"our milestones"} />
                    {/* Apply grid classes here */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievementsData.map((achievement, index) => (
                            <Achievement
                                key={index} // Remember to provide a unique key
                                number={achievement.number}
                                title={achievement.title}
                                description={achievement.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;