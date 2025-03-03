"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Leftic from "../assets/AIProcess/Leftic.png";
import Rightic from "../assets/AIProcess/Rightic.png";
import Frame1 from "../assets/AIProcess/icons/Frame1.png";
import Frame2 from "../assets/AIProcess/icons/Frame2.png";
import Frame3 from "../assets/AIProcess/icons/Frame3.png";
import Frame4 from "../assets/AIProcess/icons/Frame4.png";

const steps = [
    {
        title: "AI Readiness Assessment",
        description: "Review of quality of data, workflows, and business needs.",
        icon: Frame1,
    },
    {
        title: "Custom AI Model Development",
        description: "Construction of AI models that match with the objectives.",
        icon: Frame2,
    },
    {
        title: "Seamless AI Integration",
        description:
            "Implementation of AI tools in synchronization with existing IT infrastructure.",
        icon: Frame3,
    },
    {
        title: "Continuous Optimization",
        description: "AI models evolve and adapt, keeping on improving day by day.",
        icon: Frame4,
    },
];

const AIProcess = () => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-white py-16 px-4 md:px-12">
            {/* Background Images */}
            <div className="relative flex w-full justify-between">
                <div className="w-full h-[267px] overflow-hidden rounded-lg mb-4 absolute">
                    <Image src={Leftic} alt=" " />
                </div>
                <div className="h-[267px] overflow-hidden rounded-lg mb-4 absolute right-10 top-5">
                    <Image src={Rightic} alt=" " />
                </div>
            </div>

            {/* Heading */}
            <div className="text-center">
                <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[64.8px] font-space-grotesk">
                    AI Strategy &
                </h2>
                <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[64.8px] font-space-grotesk">
                    Implementation Process
                </h2>
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    At WaveX AI, we ensure that there is an integration of AI structured in a way that produces a results-driven methodology.
                </p>
            </div>

            {/* Stepper */}
            <div className="w-full p-4 mt-5">
                <div className="flex justify-between items-center">
                    {steps.map((_, index) => (
                        <div key={index} className="relative flex items-center w-full">
                            {/* Step Number */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={index <= currentStep ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5 }}
                                className={`px-5 py-1 rounded-xl text-sm whitespace-nowrap ${index <= currentStep
                                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                                    : "hidden"
                                    }`}
                            >
                                Step {index + 1}
                            </motion.div>

                            {/* Line (Appears gradually) */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={index < currentStep ? { width: "100%", opacity: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="h-1 bg-gray-600 w-full"
                                ></motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Steps with Content */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mt-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={index <= currentStep ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`relative flex flex-col md:w-1/4 ${index > currentStep ? "hidden" : ""}`}
                    >
                        <div className="mt-4 text-indigo-300">
                            <Image src={step.icon} alt={step.title} />
                        </div>
                        <h3 className="text-lg font-semibold mt-2">{step.title}</h3>
                        <p className="text-gray-300 text-sm mt-2">{step.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <h2 className="gradient-text text-[30px] md:text-[35px] leading-[64.8px] text-center font-space-grotesk mt-4">
                Get AI Working for You in Days, not
            </h2>
            <h2 className="gradient-text text-[30px] md:text-[35px] leading-[44.8px] text-center font-space-grotesk">
                in Months
            </h2>
            <div className="mt-3 text-center flex justify-center">
                <button className="gradient-background text-white px-5 py-2 rounded-xl text-lg shadow-md mt-4 transition-transform transform hover:scale-105 flex items-center gap-2">
                    Book Free Consultation <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default AIProcess;
