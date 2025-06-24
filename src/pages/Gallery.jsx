
import Title from "../utils/Title"; // Assuming Title component handles its own styling
// Assuming this is the logo for Click, if not, replace with the correct one
import AITLogo from "../assets/AIT.jpeg";
import AnuragUniversityLogo from "../assets/Anuraguniversity.jpg";
import techm from "../assets/image0.png"; // Assuming this is the logo for Tech Mahindra, if not, replace with the correct one
import BVRITLogo from "../assets/bvrit.png";
import CBITLogo from "../assets/CBIT.png";
import CMRCETLogo from "../assets/cmrcet.jpeg";
import CMRJEEELogo from "../assets/CMR.jpeg"; // Renamed to avoid conflict with cmr.png, assuming it's different
import GITAMLogo from "../assets/GITAM.jpg";
import KITSLogo from "../assets/KITS.png";
import MallareddyUniversityLogo from "../assets/Mallareddyuniversity.jpg";
import MRCELogo from "../assets/MRCE.jpeg";
import MRECWLogo from "../assets/MRECW.png";
import serco from "../assets/image1.png"; // Assuming this is the logo for serco, if not, replace with the correct one
import AVNLogo from "../assets/avn.png"; // Assuming this is the logo for AVN Engineering College, if not, replace with the correct one
import indus from "../assets/image2.png"; // Assuming this is the logo for Indus, if not, replace with the correct one
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

const Item = ({ image, title, subTitle, description, appreciation, highlight, Qualification }) => {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between items-center text-center max-w-sm w-full mx-auto mb-8 transition-all duration-300 ${highlight ? 'border-4 border-yellow-400 scale-105' : ''
            }`}>
            <div>
                {/* Logo, Name, College */}
                <div className="flex flex-col items-center mb-4">
                    <img
                        src={image}
                        alt={`${title}'s college logo`}
                        className="w-20 h-20 object-contain rounded-full mb-3 border-2 border-blue-200"
                    />
                    <h3 className="text-xl font-semibold text-black">{title}</h3>
                    <h3 className="text-lg text-black py-3">{Qualification ? Qualification : ""}</h3>
                    <p className="text-sm text-blue-500 mt-1">{subTitle}</p>
                </div>

                {/* Description */}
                <div className="text-gray-700 text-sm leading-relaxed">
                    <p
                        className="line-clamp-5"
                        dangerouslySetInnerHTML={{
                            __html: description.includes("Raja DeeRaj")
                                ? description.replace(
                                    /Raja DeeRaj/g,
                                    '<B>Raja DeeRaj</B>' // highlights the name
                                )
                                : description
                        }}
                    ></p>

                    {appreciation && (
                        <p className="mt-3 font-medium text-blue-600">
                            {appreciation}
                        </p>
                    )}
                </div>
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
            description: "Our commitment to excellence has earned us 999+ positive reviews from students, educators, and professionals across premier institutions. Their feedback drives us to continuously improve and innovate."
        }
    ];
    const testimonials = [
        {
            title: "Nirmal Kumar - Project Lead",
            subTitle: "ICT ACADEMY",
            description: "Raja DeeRaj, the Soft Skills Trainer, sincerely thanks you for your support in employability skills and Campus-to-Corporate projects, appreciating your expertise and positive response.",
            image: serco,
        },
        {
            title: "George Mathew - Managing Director",
            subTitle: "Indus Management Pvt Ltd",
            description: "Raja DeeRaj is a fantastic trainer — friendly, fun, and encouraging, with strong time management and work ethics. He effectively trains on product concepts while providing valuable insights for great outcomes.",
            image: indus,
        },
        {
            title: "Sridhar Neelam - Project Manager",
            subTitle: "Nirmaan Organisation",
            description: "Raja DeeRaj, as a Soft Skills Trainer, has the ability to lead enriching discussions with examples and real-time case studies. Many students praised him for helping with their personality development both professionally and personally.",
            image: techm,
        },
        {
            title: "Vishnu",
            subTitle: "AVN ENGINEERING COLLEGE",
            description: "Raja DeeRaj sir's training was incredibly engaging and interactive. I learned so much about effective communication and teamwork thanks to his expert guidance.",
            image: AVNLogo,
            qualification: "B.Tech DS 3rd Year"
        },
        {
            title: "Maha Laxmi",
            subTitle: "ANURAG UNIVERSITY",
            description: "Raja DeeRaj sir's training was remarkably engaging and interactive. I learned a lot about effective communication and teamwork from him.",
            image: AnuragUniversityLogo,
            qualification: "B.Tech CSE 4th Year"
        },
        {
            title: "Pravalika Chilvuri",
            subTitle: "Malla Reddy University",
            description: "I've learned so much from Raja DeeRaj sir's training about how to be assertive and collaborative. His teaching style makes learning fun and interactive.",
            image: MallareddyUniversityLogo,
            qualification: "B.Tech IT 3rd Year"
        },
        {
            title: "Yashwanth Vedagiri",
            subTitle: "KITS",
            description: "Raja DeeRaj sir has an exceptional ability to explain complex concepts clearly and concisely. I now feel more confident in my understanding.",
            image: KITSLogo,
            qualification: "B.Tech CSE 4th Year"
        },
        {
            title: "R. Moksha Sri",
            subTitle: "Anurag University",
            description: "Raja DeeRaj sir has a knack for creating a supportive and encouraging learning environment. I felt comfortable asking questions and participating in class.",
            image: AnuragUniversityLogo,
            qualification: "B.Tech IT 3rd Year"
        },
        {
            title: "Sharanya",
            subTitle: "CBIT",
            description: "Raja DeeRaj sir is not only an excellent facilitator but also a great mentor. His training approach helped me grow both personally and professionally, leading to greater achievements.",
            image: CBITLogo,
            qualification: "B.Tech CSE 4th Year"
        },
        {
            title: "Sudha Rani",
            subTitle: "TKR",
            description: "I struggled with communication before, but Raja DeeRaj sir's patient and clear explanations gave me the confidence and understanding I needed to speak effectively.",
            image: TKRJEEELogo,
            qualification: "B.Tech AIML 3rd Year"
        },
        {
            title: "Mahesh Reddy",
            subTitle: "QIS",
            description: "Raja DeeRaj sir is a great trainer with a unique ability to make challenging topics easy to understand. He patiently explains until everyone comprehends.",
            image: QISLogo,
            qualification: "B.Tech CSE 3rd Year"
        },
        {
            title: "Deekshitha",
            subTitle: "RIT",
            description: "Raja DeeRaj has a fantastic ability to connect with students and make them feel comfortable. He's always approachable and ready to help.",
            image: RITLogo,
            qualification: "B.Tech IT 4th Year"
        },
        {
            title: "Sangitha Pandit",
            subTitle: "AIT",
            description: "Raja DeeRaj has inspired me to pursue my goals with greater determination. His rich experience and sophisticated training methods have motivated me to aim higher.",
            image: AITLogo,
            qualification: "B.Tech CSE 3rd Year"
        },
        {
            title: "M Nandini",
            subTitle: "MRECW",
            description: "Raja DeeRaj sir is both a trainer and motivator who has sparked in me a love for learning. I'm now excited to pursue new challenges and continue my education.",
            image: MRECWLogo,
            qualification: "B.Tech CSE 4th Year"
        },
        {
            title: "Tejaswini",
            subTitle: "Vasavi Engineering College",
            description: "Raja DeeRaj sir's soft skills session was incredibly enriching, providing valuable insights for both personal and professional development. The fun learning activities were a highlight.",
            image: VasaviLogo,
            qualification: "B.Tech CSE 3rd Year"
        },
        {
            title: "Rishita Nanduri",
            subTitle: "Sardar Patel Degree College",
            description: "Raja DeeRaj sir's soft skills session created a comfortable learning environment where everyone felt encouraged to participate and share their thoughts. It made the training both informative and enjoyable.",
            image: SardarLogo,
            qualification: "Degree B.Com 3rd Year"
        },
        {
            title: "Deepika Rani",
            subTitle: "GITAM UNIVERSITY",
            description: "Raja DeeRaj sir's soft skills session was superb — interactive, engaging, and highly valuable. I loved the energy and clarity of the trainer's explanations.",
            image: GITAMLogo,
            qualification: "B.Tech CSE 4th Year"
        },
        {
            title: "Abhinay Vollala",
            subTitle: "CMR",
            description: "Raja DeeRaj is a master of soft skills training with an enthusiastic and practical approach. He made every concept come alive, making learning a truly enriching experience.",
            image: CMRJEEELogo,
            qualification: "B.Tech IT 3rd Year"
        },
        {
            title: "Sirisha Meda",
            subTitle: "BVRIT Narsapur",
            description: "The communication workshop with Raja DeeRaj was a game-changer! His approach made complex ideas easy to understand, and his energy was infectious. I left feeling more confident and well-prepared.",
            image: BVRITLogo,
            qualification: "B.Tech CSE 4th Year"
        },
        {
            title: "Aruna Devi",
            subTitle: "MRCE",
            description: "Raja DeeRaj's soft skills program was unlike any other I've attended. The practical exercises combined with his enthusiastic and clear guidance made every moment valuable. Highly recommended for anyone looking to genuinely improve.",
            image: MRCELogo,
            qualification: "B.Tech CSE 3rd Year"
        }
    ];



    return (
        <section id='gallery' className="py-16 bg-blue-50"> {/* Light blue background */}
            <Album />
            <div className="container mx-auto p-6">
                <Title text={"testimonials"} className="text-center mb-12 text-blue-800" /> {/* Centering title and adjusting color */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    {testimonials.map((item, index) => (
                        <Item
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            subTitle={item.subTitle}
                            appreciation={item.appreciation}
                            highlight={index < 20}
                            Qualification={item.qualification}
                        // 👉 Highlight only first 3
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