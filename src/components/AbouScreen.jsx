"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import AboutIcon from "../assets/AboutIcon.png";
import Star1 from "../assets/AboutUs/Star1.png";
import Star2 from "../assets/AboutUs/Star2.png";


export default function AboutUs() {
    return (
        <section className="text-white pt-10 pb-28 px-6 md:px-16 lg:px-24 relative overflow-hidden " id="about">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
                {/* === IMAGE SECTION === */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex justify-center z-50"
                >

                    {/* Image */}
                    <Image
                        src={AboutIcon}
                        alt="AI Illustration"
                        width={374}
                        height={336}
                        className="relative rounded-2xl shadow-lg"
                    />

                    <div className=" overflow-hidden rounded-lg absolute bottom-[-6rem] right-20">
                        <Image
                            src={Star2}
                            alt={" "}

                        />
                    </div>
                    <div className=" overflow-hidden rounded-lg absolute left-[-5rem] top-[-3.1rem]">
                        <Image
                            src={Star1}
                            alt={" "}

                        />

                    </div>


                </motion.div>

                {/* === CONTENT SECTION === */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl font-bold mb-3 text-white">Agentic AI Solutions</h2>
                    <p className="text-gray-300 mb-4  ">
                        Our Agentic AI Solutions provide businesses with intelligent agents that operate autonomously, learning from data and making strategic decisions. These AI agents work alongside human teams to enhance productivity, optimize workflows, and drive business growth.
                    </p>
                    <h2 className="text-xl font-bold mb-3 text-white">Retrieval-Augmented Generation (RAG) Solutions</h2>
                    <p className="text-gray-300 mb-4  ">
                        Our RAG-Based AI Solutions utilize advanced AI techniques to retrieve and generate contextually relevant information, ensuring that AI-powered applications deliver accurate and meaningful insights. RAG technology enhances chatbots, content creation, research tools, and business intelligence systems.
                    </p>

                    <button className="gradient-background text-white px-6 py-3 rounded-2xl text-lg shadow-md mt-4 transition-transform transform hover:scale-105 flex items-center gap-2">
                        Know More About Us <ChevronRight size={20} />
                    </button>
                </motion.div>

            </div>




        </section>
    );
}
