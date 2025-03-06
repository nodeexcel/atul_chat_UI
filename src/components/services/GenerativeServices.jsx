"use client";
import Image from "next/image";
import GenerativeIcon from "../../assets/services/GenerativeServices.svg";

export default function GenerativeServices() {
    return (
        <section className=" text-white px-6 md:px-12 py-16 flex flex-col-reverse md:flex-row items-center justify-between" id="generative-ai">


            {/* Left - AI Robot Illustration */}
            <div className="relative flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
                <Image src={GenerativeIcon} alt="AI Robot" className="max-w-full h-auto" />
            </div>
            {/* Right - Content (Now right-aligned properly) */}
            <div className="text-left  md:w-1/2">

                <h3 className="text-white text-5xl font-bold leading-relaxed">
                    Generative AI Services
                </h3>
                <p className=" text-white text-3xl  leading-relaxed mt-1">
                    Elevate Productivity & Creativity with AI-Generated Content
                </p>
                <p className="text-white text-lg leading-relaxed mt-3">
                    The Generative AI Services of WaveX AI are a remarkable use of artificial intelligence, as they automate the creation of the content, improve the decision-making process, and drive the innovations in many sectors.
                </p>

                <p className="text-white text-lg leading-relaxed mt-5">
                    ✅ Generate high-quality AI-driven content in just a few seconds
                </p>
                <p className=" text-white text-lg leading-relaxed mt-2">
                    ✅ Automate business report generation and knowledge management processes.
                </p>
                <p className=" text-white text-lg leading-relaxed mt-2">
                    ✅ Personalize customer experiences with the help of AI-generated recommendations.
                </p>

            </div>
        </section>
    );
}
