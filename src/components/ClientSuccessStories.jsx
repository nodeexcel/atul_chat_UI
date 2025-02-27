'use client';

import { ChevronRight } from "lucide-react";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Leftic from "../assets/AIProcess/Leftic.png";
import Rightic from "../assets/AIProcess/Rightic.png";
import Image from "next/image";

const successStories = [
    {
        title: 'Finance: Fraud Reduction by 30%',
        description:
            'A bank used AI-powered fraud detection to detect high-risk transactions in real-time, saving millions of dollars.',
    },
    {
        title: 'Healthcare: Enhancing Diagnostic Accuracy',
        description:
            'A healthcare network implemented AI-powered patient data analysis, resulting in 20% faster and more accurate diagnoses.',
    },
    {
        title: 'E-commerce: Increasing Revenue by 18%',
        description:
            'An AI chatbot was used by an e-commerce company to facilitate interaction between customers and in turn, account for increased sales.',
    },
];

export default function ClientSuccessStories() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 33.3 : 100));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center mb-10 relative">
            <div className=" flex  w-full justify-between">
                <div className="w-full h-[267px] overflow-hidden rounded-lg mb-4 absolute top-0 ">
                    <Image
                        src={Leftic}
                        alt={" "}

                    />
                </div>
                <div className="h-[267px] overflow-hidden rounded-lg mb-4 absolute right-10">
                    <Image
                        src={Rightic}
                        alt={" "}

                    />
                </div>
            </div>
            <div className="flex flex-col items-center p-6 md:p-12 ">
                <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[48px] md:leading-[64.8px] text-center font-space-grotesk mb-5">
                    Client Success Stories
                </h2>
                <div className="relative max-w-3xl w-full">
                    <motion.div
                        className="absolute left-4 w-1 bg-gradient-to-b from-purple-300 to-purple-500 "
                        initial={{ height: 0 }}
                        animate={{ height: `${successStories.length * 125}px` }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                    ></motion.div>
                    {successStories.map((story, index) => (
                        <motion.div
                            key={index}
                            className="relative flex items-start gap-4 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.5, duration: 0.6 }}
                        >
                            <motion.div
                                className="relative w-6 h-6 bg-purple-600 border-0 rounded-full z-10 md:w-8 md:h-8 "
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.5, duration: 0.6 }}
                            ></motion.div>
                            <div className="bg-blue-50 p-4 rounded-lg shadow-md w-full">
                                <h3 className="font-bold text-black">{story.title}</h3>
                                <p className="text-gray-700 mt-1">{story.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
            <div className="ml-5">
                <button className="mt-auto gradient-background text-white py-2 px-4 rounded-lg flex items-center gap-2">
                    Learn More AI Success Stories <ChevronRight size={20} />
                </button>
            </div>
        </div>

    );
}
