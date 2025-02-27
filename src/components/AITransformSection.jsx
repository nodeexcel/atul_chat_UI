
'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion for animation
import AIimg from "../assets/AIicon.svg";
import addressIcon from "../assets/addressIcon.svg";
import gmailIcon from "../assets/gmailicon.svg";
import phoneIcon from "../assets/phoneicon.svg";

export default function AITransformSection() {
    return (
        <div className="mt-10 flex items-center justify-center px-4 mb-10 overflow-auto">
            <div className="max-w-7xl w-full text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start" style={{ background: "linear-gradient(179.16deg, #010F31 0.72%, #032E97 99.28%)" }}>

                {/* Left Side Content */}
                <div className="md:w-3/5">
                    <h2 className="text-2xl font-bold mb-4">
                        See How AI Can Transform Your Business
                    </h2>
                    <p className="mb-4 font-bold">
                        Leverage the power of Retrieval-Augmented Generation, Agentic AI, and Custom AI models to automate, optimize, and scale. Schedule your free AI strategy session today and discover tailored solutions that drive actual results!
                    </p>
                    <p className="font-bold mb-4">
                        WaveX AI is here to assist your business in harnessing AI for automation, efficiency, and growth. Reach out to us today to discuss tailored AI solutions.
                    </p>

                    {/* Contact Information */}
                    <div className="flex flex-row gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                            <Image src={phoneIcon} alt="Phone" />
                            <div className="flex flex-col">
                                <span className='text-white font-bold'>Phone</span>
                                <span className="text-gray-300">+1 234 567 890</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src={gmailIcon} alt="Gmail" />
                            <div className="flex flex-col">
                                <span className='text-white font-bold'>Email</span>
                                <span className="text-gray-300">contact@wavexai.com</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src={addressIcon} alt="Address" />
                            <div className="flex flex-col">
                                <span className='text-white font-bold'>Address</span>
                                <span className="text-gray-300">Canada, Toronto</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button className="bg-white text-black px-4 py-2 rounded-2xl text-lg shadow-md mt-4 transition-transform transform hover:scale-105 flex items-center gap-2">
                            Free Consultation
                            <span className='gradient-background p-1 text-white rounded-full'>
                                <ChevronRight size={20} />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Side Illustration with Animation */}
                <div className="md:w-2/5 flex justify-center md:mt-0 ">
                    <motion.div
                        className="relative"
                        animate={{ y: [0, -50, 0] }} // Moves up and down
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Infinite loop
                    >
                        <Image src={AIimg} alt="AI Brain" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
