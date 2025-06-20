import Button from "../utils/Button";

const AVpage = ({ url }) => {
    return (
        <div className={`flex flex-col items-center justify-center p-4 space-y-6 ${url ? "bg-blue-50" : "bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 animate-gradient"} relative`}>
            <Button
                text="MY AV"
                className="bg-blue-100 border border-blue-300 text-blue-700 hover:bg-blue-200 transition-colors duration-200 z-10"
            />
            {url ? (
                <video
                    src={url}
                    autoPlay
                    muted
                    loop
                    controls
                    className="rounded-lg shadow-lg max-w-full w-[90%] sm:w-[600px] border border-blue-300 z-10"
                />
            ) : (
                <div className="text-blue-700 text-3xl font-bold animate-bounce z-10">
                    🚧 Coming Soon...
                </div>
            )}
            <style>{`
                @keyframes gradientBG {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradientBG 5s ease infinite;
                }
            `}</style>
        </div>
    );
};

export default AVpage;
