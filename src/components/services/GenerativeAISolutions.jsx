'use client'
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import generative1 from "../../assets/services/generative1.svg";
import generative2 from "../../assets/services/generative2.svg";


const GenerativeAISolutions = () => {
    return (
        <div className=" flex flex-col items-center justify-center px-6 md:px-12 py-12 ">
            <h2 className="text-white text-3xl md:text-4xl font-semibold mb-10 text-center">
                Our Generative AI Solutions:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
                <HoverCard
                    title="AI-Powered Content Generation"
                    icon={generative1}
                    defaultText="Irrespective of the fact, whether you want, for example, an eezy yung piece that is related to fashion, or you are looking for a yung eezy piece, this may be exactly the type you want: AI marketing content created through automated systems and AI-text and visual creation for businesses will do the job just perfectly!"
                    hoverText="✅  Automated Document Processing - GPT-3-powered OCR together with data extraction tools are used"
                />
                <HoverCard
                    title="AI-Powered Personalization"
                    icon={generative2}
                    defaultText="Boost user experience by AI-driven personalized recommendations and algorithms."
                    hoverText="✅  Automated Document Processing - GPT-3-powered OCR together with data extraction tools are used"
                />
            </div>
        </div>
    );
};

const HoverCard = ({ title, icon, defaultText, hoverText }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative flex flex-col border-2 justify-between text-white p-6 rounded-2xl transition-all duration-500 ease-in-out  h-[343px]  
      ${hovered ? "shadow-[inset_0_0_50px_rgba(255,255,255,0.2)]" : "shadow-none "}`}
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

export default GenerativeAISolutions;
