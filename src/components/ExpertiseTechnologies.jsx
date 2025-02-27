import Image from "next/image";
import Leftic from "../assets/AIProcess/Leftic.png";
import Rightic from "../assets/AIProcess/Rightic.png";

//first row images
import chatgpt from "../assets/expertiseTech/Chatgpt1.svg";
import youcom from "../assets/expertiseTech/youcom.svg";
import GrokAi from "../assets/expertiseTech/Frame.svg";
import Abacus from "../assets/expertiseTech/4.png";
import perplexity from "../assets/expertiseTech/5.png";
import claude from "../assets/expertiseTech/claude.svg";
import python from "../assets/expertiseTech/python.svg";
import openai from "../assets/expertiseTech/openai.svg";

//second row images
import Copilot from "../assets/expertiseTech/Copilot.svg";
import Gemini from "../assets/expertiseTech/Gemini1.png";
import Meta from "../assets/expertiseTech/meta.png";
import Zapier from "../assets/expertiseTech/zapier1.png";
import Make from "../assets/expertiseTech/Make.svg";
import LeChat from "../assets/expertiseTech/LeChat.svg";
import Huggingchat from "../assets/expertiseTech/HuggingChat.svg";
import Kimi from "../assets/expertiseTech/kimi.svg";

const techsLine1 = [
    { name: "Chat Gpt", logo: chatgpt },
    { name: "you.com", logo: youcom },
    { name: "Grok Ai", logo: GrokAi },
    { name: "Claude", logo: claude },
    { name: "Python", logo: python },
    { name: "Open Ai", logo: openai },
    { name: "", logo: Abacus, },
    { name: "", logo: perplexity },
];

const techsLine2 = [
    { name: "Copilot", logo: Copilot },
    { name: "Meta", logo: Meta, size: "28px" },
    { name: "Make", logo: Make },
    { name: "Le Chat", logo: LeChat },
    { name: "Hugging Chat", logo: Huggingchat },
    { name: "", logo: Kimi },
    { name: "", logo: Gemini },
    { name: "", logo: Zapier },


];

export default function ExpertiseTech() {
    return (
        <div className=" text-white pb-16 text-center relative">
            <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[48px] md:leading-[64.8px] text-center font-space-grotesk">
                Our Expertise Lies With
            </h2>
            <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[48px] md:leading-[64.8px] text-center font-space-grotesk mb-5">
                These Technologies
            </h2>

            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                We leverage cutting-edge AI technologies to build intelligent, adaptive solutions, including
            </p>
            <div className=" flex  w-full justify-between">
                <div className="w-full h-[267px] overflow-hidden rounded-lg mb-4 absolute top-0">
                    <Image
                        src={Leftic}
                        alt={" "}

                    />
                </div>
                <div className="h-[267px] overflow-hidden rounded-lg mb-4 absolute right-10 top-5">
                    <Image
                        src={Rightic}
                        alt={" "}

                    />
                </div>
            </div>
            {/* Scrollable Container for Technologies */}
            <div className="mt-8 space-y-6">
                {/* First Row */}
                <div className="overflow-x-auto whitespace-nowrap   snap-x snap-mandatory flex space-x-8 px-4 no-scrollbar justify-between gap-5">
                    {techsLine1.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center snap-center p-2 w-[107px] h-9 justify-center gap-1"
                        >
                            <Image src={tech.logo} alt={tech.name} style={{ color: "white" }} />
                            <span className="text-[1rem] mt-2">{tech.name}</span>
                        </div>
                    ))}
                </div>

                {/* Second Row */}
                <div className="overflow-x-auto whitespace-nowrap  snap-x snap-mandatory flex space-x-8 px-4 no-scrollbar justify-between gap-5">
                    {techsLine2.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center snap-center p-2 h-9 justify-center gap-1 w-[107px]"
                        >
                            <Image src={tech.logo} alt={tech.name} style={{ height: tech.size }} />
                            <span className="text-lg mt-2">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
