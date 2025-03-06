'use client'
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import aiautomation1 from "../../assets/services/aiautomation1.svg";
import aiautomation2 from "../../assets/services/aiautomation2.svg";


const AIAutomation = () => {
    return (
        <div className=" flex flex-col items-center justify-center px-6 md:px-12 py-12 ">
            <h2 className="text-white text-3xl md:text-4xl font-semibold mb-10 text-center">
                Our AI Automation Solutions:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
                <HoverCard
                    title="Business Process Automation"
                    icon={aiautomation1}
                    defaultText="Our AI-driven Business Process Automation (BPA) solutions free time for workflow staff by automating repetitive, dull tasks which leads to faster execution and thus smoother workflow."
                    hoverText="✅  Automated Data Entry & Pocessing - Save labor and ensure greater precision"
                    hoverText2="✅  Worfflow Automation -  Handle the trivialities of project management and streamline the operational process"
                    hoverText3="✅  Automated Document Processing - GPT-3-powered OCR together with data extraction tools are used"
                    show={false}
                />
                <HoverCard
                    title="Robotic Process Automation (RPA)"
                    icon={aiautomation2}
                    defaultText="RPA solutions that run with AI serve to eliminate time-consuming and monotonous tasks such as accounting processes, customer service, and clerical affairs allowing companies to work more cleverly."
                    hoverText3="✅  Automated Document Processing - GPT-3-powered OCR together with data extraction tools are used"
                    show={true}
                />
            </div>
        </div>
    );
};

const HoverCard = ({ title, icon, defaultText, hoverText3, hoverText2, hoverText, show }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative flex flex-col border-2 justify-between text-white p-6 rounded-2xl transition-all duration-500 ease-in-out h-[343px] 
      ${hovered ? "shadow-[inset_0_0_50px_rgba(255,255,255,0.2)] " : "shadow-none "}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "rgba(1, 15, 49, )"
            }}
        >
            <div>
                <div className="flex mb-4 transition-opacity duration-500 ease-in-out flex-col">
                    <Image alt="icon" src={icon} className={` mb-3 ${hovered ? "opacity-0 absolute" : "opacity-100 relative"}`} />
                    <h3 className={` ${hovered ? "text-lg" : "text-lg font-bold  "} transition-opacity duration-500  ${!show && hovered ? "opacity-0 absolute" : "opacity-100 relative"}`}>
                        {title}
                    </h3>
                </div>

                <p className={`text-white  mb-4 transition-opacity duration-500 ease-in-out ${hovered ? "text-sm" : "font-bold text-sm"} ${!show && hovered ? "opacity-0 absolute" : "opacity-100 relative"}`}>
                    {defaultText}
                </p>

                {
                    hoverText && <p className={`text-white text-sm mb-4 transition-opacity duration-500 ease-in-out ${hovered ? "opacity-100 relative" : "opacity-0 absolute"}`}>
                        {hoverText}
                    </p>
                }
                {
                    hoverText2 && <p className={`text-white text-sm mb-4 transition-opacity duration-500 ease-in-out ${hovered ? "opacity-100 relative" : "opacity-0 absolute"}`}>
                        {hoverText2}
                    </p>
                }


                <p className={`text-white text-sm mb-4 transition-opacity duration-500 ease-in-out ${hovered ? "opacity-100 relative" : "opacity-0 absolute"}`}>
                    {hoverText3}
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

export default AIAutomation;
