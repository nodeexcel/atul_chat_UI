import { ChevronRight } from "lucide-react";
import Image from "next/image";
import AIDriven from "../assets/AISolutions/AI-Driven.png";
import AIPowered from "../assets/AISolutions/AI-Powered.png";
import Robotic from "../assets/AISolutions/Robotic.png";
import Frame1 from "../assets/AISolutions/icons/Frame1.png";
import Frame2 from "../assets/AISolutions/icons/Frame2.png";



const solutions = [
    {
        title: "AI-Driven Automation & Optimization",
        description:
            `One of our financial services clients leveraged WaveX AI's proprietary automation technology to streamline customer onboarding. By eliminating manual data entry and automating compliance verification, they reduced processing time by 60% while significantly improving accuracy in regulatory compliance.
            Only WaveX AI's intelligent automation can optimize workflows at this scale.`,
        img: AIDriven,
        iconImg: Frame2
    },
    {
        title: "Robotic Process Automation (RPA) Solutions",
        description:
            `A retail firm deployed WaveX AI’s RPA-driven inventory management system, allowing them to reduce stockouts by 30% and enhance real-time supply chain visibility. By automating demand forecasting and inventory updates, they optimized stock levels, reducing operational inefficiencies.
           Our AI-driven RPA technology ensures precise, real-time automation tailored to your business needs.
           [Discover RPA Solutions]`,
        img: Robotic,
        iconImg: Frame1
    },
    {
        title: "AI-Powered Predictive Analytics and Insights",
        description:
            ` Making profits can be even more assured by employing outcomes-based metrics that are powered by AI application data analytics and leveraging AI technologies for Finance will also drive the developing markets to their respective targets. In order to do so, you should first identify the biases in the existing data your projects are based on and then supplement the data with sufficient size or correction.`,
        img: AIPowered,
        iconImg: Frame2
    },
    {
        title: "AI Conversational AI",
        description:
            `AI-powered conversational agents can contribute a lot to companies by handling different tasks in customer service, such as quick and intelligent, context-sensitive conversations. The product called conversational AI has a positive impact on customer service by elevating customer communication, automating customer service, and converting more leads into opportunitie.`,
        img: AIDriven,
        iconImg: Frame2
    },
];

export default function AiSolutions() {
    return (
        <section>
            <div className=" mx-auto px-6 mb-40">
                <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[64.8px] text-center font-space-grotesk mb-5">
                    Our AI Solutions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="bg-[#10162F] border border-gray-700 rounded-xl shadow-lg p-3 text-white relative hover:shadow-2xl transition duration-300 flex flex-col"
                        >
                            <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
                                <Image
                                    src={solution.img}
                                    alt={solution.title}
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex gap-2">
                                <Image
                                    src={solution.iconImg}
                                    alt=""
                                    className="object-contain"
                                />
                                <h3 className="text-lg font-semibold">{solution.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm mt-2 flex-grow mb-5">{solution.description}</p>
                            <div>
                                <button className="mt-auto gradient-background text-white py-2 px-4 rounded-lg flex items-center gap-2">
                                    Free Consultation <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}
