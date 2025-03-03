'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import GroupStar from "../assets/HomePage/GroupStar.png";
import BrushAI from "../assets/brushAI.svg";
import QueryModal from "./QueryAIModal";
import { fetchResponse } from "@/apis/api";
import Loader from "./Loader";

const stats = [
    { value: "40%", label: "Operational Cost Reduction" },
    { value: "50%", label: "Revenue Growth" },
    { value: "80%", label: "Increase in Customer Engagement" },
    { value: "70%", label: "Efficiency Boost in Workflow" },
    { value: "99%", label: "Data Accuracy" },
];

const useTypewriter = (text, speed = 100, delay = 1000, shadowDuration = 500) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [showShadow, setShowShadow] = useState(false);


    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            } else {
                setShowShadow(true); // Show shadow when text completes

                setTimeout(() => {
                    setShowShadow(false); // Remove shadow after some time
                    setDisplayText("");
                    setIndex(0);
                }, shadowDuration + delay);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [index, text, speed, delay, shadowDuration]);

    return { displayText, showShadow };
};


const HomePage = () => {
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [generateResponse, setGenerateResponse] = useState("");
    const [loading, setLoading] = useState(false);


    // Typewriter effect for tagline
    const { displayText, showShadow } = useTypewriter("See How AI Can Transform Your Business in 10 Seconds!", 100, 1500, 700);

    const handleSend = async () => {
        setLoading(true);
        if (!websiteUrl.trim()) return;
        const result = await fetchResponse(websiteUrl);
        if (result?.response) {
            setGenerateResponse(result?.response);
            setIsOpen(true);
        }
        setLoading(false);
    };

    return (
        <div className="pt-10" id="home" style={{ background: 'rgba(1, 15, 49, 1)' }}>
            <div className="flex flex-col items-center text-center">

                <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[64.8px] text-center font-space-grotesk mt-2">
                    AI Is Not the Future, It's now!
                </h2>

                {/* Typewriter Effect */}
                <p
                    className={`mt-4 font-bold text-white text-center max-w-2xl text-2xl transition-shadow ${showShadow ? "shadow-lg text-glow" : ""
                        }`}
                >
                    {displayText} <span className="animate-blink">|</span>
                </p>


                <div className="flex items-center justify-center gap-4 w-full mt-4">
                    <input
                        type="text"
                        placeholder="Paste Your Website URL"
                        className="border-2 overflow-hidden w-full max-w-md h-[48px] flex items-center px-4 bg-black text-white  "
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        style={{
                            borderImage: "linear-gradient(105.14deg, #0146F8 5.34%, #962EB9 110.11%) 1",
                            borderImageSlice: 1,
                        }}
                    />
                    <button
                        onClick={handleSend}
                        className="gradient-background text-white px-6 py-2 hover:bg-purple-700 h-[48px] border rounded-lg flex gap-1 items-center"
                    >
                        {loading ? (<><Loader /> Generating</>) : "Generate"}
                        <Image src={BrushAI} alt={"Brush ai"} />
                    </button>
                </div>

            </div>

            {/* AI Response Modal */}
            <QueryModal isOpen={isOpen} setIsOpen={setIsOpen} generateResponse={generateResponse} />

            {/* Footer Text */}
            <div className="mt-4 text-gray-700">
                <p className="text-white text-center">
                    Enter your website URL, and our AI will instantly reveal custom AI
                </p>
                <p className="text-white text-center">
                    solutions tailored for your business.
                </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center mt-8">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <span className="gradient-text text-4xl font-bold text-blue-400 mb-2">{stat.value}</span>
                        <span className="text-sm text-white font-bold">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
