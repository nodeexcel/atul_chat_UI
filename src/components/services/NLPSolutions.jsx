'use client'
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import NLPSolu from "../../assets/services/NLPSolu.svg";


const NLPSolutions = () => {
    return (
        <div className=" flex flex-col items-center justify-center px-6 md:px-12 py-12 ">
            <h2 className="text-white text-3xl md:text-4xl font-semibold mb-10 text-center">
                Our NLP Solutions:
            </h2>

            <HoverCard
                title="AI-Powered Text Analysis"
                icon={NLPSolu}
                defaultText="Generate text classifications, summaries, and insights with advanced NLP models."
                hoverText="✅  Automated Document Processing - GPT-3-powered OCR together with data extraction tools are used"
            />

        </div>
    );
};

const HoverCard = ({ title, icon, defaultText, hoverText }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative flex h-[343px] flex-col border-2 justify-between text-white p-6 rounded-2xl transition-all duration-500 ease-in-out w-full
      ${hovered ? "shadow-[inset_0_0_50px_rgba(255,255,255,0.2)]  " : "shadow-none"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "rgba(1, 15, 49, )"
            }}
        >
            <div>
                <div className="flex mb-4 transition-opacity duration-500 ease-in-out flex-col">
                    <Image alt="icon" src={icon} className={` mb-3 ${hovered ? "opacity-0" : "opacity-100"}`} />
                    <h3 className={` ${hovered ? "text-lg mt-[-50px]" : "text-lg font-bold  "} transition-opacity duration-500`}>
                        {title}
                    </h3>
                </div>

                <p className={`text-white  mb-4 transition-opacity duration-500 ease-in-out ${hovered ? "text-sm" : "font-bold text-sm"}`}>
                    {defaultText}
                </p>



                <p className={`text-white text-sm mb-4 transition-opacity duration-500 ease-in-out ${hovered ? "opacity-100 relative" : "opacity-0 absolute"}`}>
                    {hoverText}
                </p>

            </div>


            <div>

                <button className={`gradient-background text-white px-6 py-3 rounded-2xl text-lg shadow-md mt-4 transition-transform transform flex items-center gap-2 h-9  ${hovered ? "opacity-0 absolute" : "opacity-100 relative"} duration-500`}>
                    Book Free Consultation <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default NLPSolutions;
