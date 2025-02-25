"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import AboutIcon from "../assets/AboutIcon.png";
import Star1 from "../assets/AboutUs/Star1.png";
import Star2 from "../assets/AboutUs/Star2.png";


export default function AboutUs() {
    return (
        <section className="text-white py-16 px-6 md:px-16 lg:px-24 relative overflow-hidden" id="about" >
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
                    <h2 className="text-5xl font-bold mb-6 text-white">About Us</h2>
                    <p className="text-gray-300 mb-4 font-bold">
                        WaveX AI is your strategic ally in harnessing the power of artificial intelligence to
                        deliver noticeable, measurable outcomes for your business. We are experts in
                        Retrieval-Augmented Generation (RAG), Agentic AI, and Custom AI models that easily fit into your current operations.
                        Our aim is to assist you to automate operations, enhance performance, and drive scalable growth.
                    </p>
                    <p className="text-gray-300 mb-4 font-bold">
                        In the data-driven era of today, companies require AI solutions that turn raw data
                        into actionable insights. WaveX AI fills this gap by helping organizations streamline
                        their AI journey. Our RAG-based solutions enable AI applications to have instant
                        access to verified, domain-specific data, improving efficiency and decision-making.
                    </p>
                    <p className="text-gray-300 mb-4 font-bold">
                        Our Agentic AI offerings provide companies with smart agents that automate
                        processes, optimize strategic operations, and integrate perfectly with human teams. Also, our AI models
                        tailor-made to specific industries ensure that companies get personalized
                        solutions that are specifically made for their industry and specific operational requirements.
                    </p>
                    <button className="gradient-background text-white px-6 py-3 rounded-2xl text-lg shadow-md mt-4 transition-transform transform hover:scale-105 flex items-center gap-2">
                        Free Consultation <ChevronRight size={20} />
                    </button>
                </motion.div>
            </div>




        </section>
    );
}
