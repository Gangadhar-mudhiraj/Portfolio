
import Title from "../utils/Title"; // Assuming Title component handles its own styling
import tkrLogo from "../assets/tkr.png"; // Descriptive names for imports
import mruLogo from "../assets/mru.png";
import cmrLogo from "../assets/cmr.png";
import avnLogo from "../assets/avn.png";



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

            <div>
                //achievements

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
            title: "Muktha Ghosh",
            subTitle: "CMR College of Engineering & Technology",
            image: cmrLogo,
            description: "The soft skills session was incredibly enriching, providing valuable insights and logic to enhance both personal and professional development. Training is delivered with fun learning activities. ",
            appreciation: "Thank you Raja DeeRaj sir for your soft skills session, it helped me in work place and liked your positive gesture."
        },
        {
            title: "M.Deepika Rani",
            subTitle: "Malla Reddy University",
            description: "This Soft Skills session has a unique ability to create a comfortable learning environment where everyone feels empowered to participate and share their thoughts. This made the training sessions both informative and enjoyable.",
            appreciation: " I was initially hesitant about attending a soft skills workshop, but Raja DeeRaj sir's practical approach and positive energy made a huge difference.",
            image: mruLogo
        },
        {
            title: "Shirisha Naidu",
            subTitle: "AVN College",
            image: avnLogo,
            description: "The Soft Skills session was superb, interactive and engaging. The trainer's methodology is enthusiastic, and I loved the way of explanation.",
            appreciation: "Thank you Raja DeeRaj sir for your enlightening skills; I became passionate towards learning new skills such as these."
        },
        {
            title: "Aruna Devi",
            image: tkrLogo,
            subTitle: "TKR College",
            description: "MASTER in soft skills, Raja DeeRaj is a fantastic trainer with an enthusiastic personality. He made every concept practical and engaging. ",
            appreciation: "His excellent training delivery and interactive approach helped us develop confidence and professionalism. This valuable program has greatly enhanced my corporate readiness."
        }
    ];

    return (
        <section id='gallery' className="py-16 bg-blue-50"> {/* Light blue background */}
            <div className="container mx-auto px-4">
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