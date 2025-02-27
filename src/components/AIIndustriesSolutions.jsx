"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import firstIm from "../assets/SpecificAiSolutions/first.svg";
import secondIm from "../assets/SpecificAiSolutions/Second.svg";
import rectangle from "../assets/SpecificAiSolutions/Rectangle.svg";

// icons 
import firstIcon from "../assets/SpecificAiSolutions/firsticon.svg";
import secondIcon from "../assets/SpecificAiSolutions/secondicon.svg";
import thirdIcon from "../assets/SpecificAiSolutions/thirdicon.svg";
import fourthIcon from "../assets/SpecificAiSolutions/fourthicon.svg";

const AIIndustrySolutions = () => {
    const teamMembers = [
        { name: "Nora Selon", role: "Data Analyst", image: firstIm },
        { name: "Farid Osman", role: "Sr. AI Engineer", image: secondIm },
        { name: "John Doe", role: "AI Consultant", image: firstIm },
        { name: "Jane Smith", role: "ML Expert", image: secondIm },
        { name: "Alex Ray", role: "AI Researcher", image: firstIm },
    ];

    const featureContent = [
        {
            title: "60% Accelerated Workflows",
            subTitle: "AI-based process automation",
            icon: firstIcon
        },
        {
            title: "60% Accelerated Workflows",
            subTitle: "AI-based process automation",
            icon: secondIcon
        },
        {
            title: "60% Accelerated Workflows",
            subTitle: "AI-based process automation",
            icon: thirdIcon
        },
        {
            title: "60% Accelerated Workflows",
            subTitle: "AI-based process automation",
            icon: fourthIcon
        }
    ]

    return (
        <div className=" text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left Side: Text */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Industry-Specific AI Solutions
                    </h2>
                    <p className="text-base sm:text-lg max-w-2xl">
                        From healthcare to finance and e-commerce, our AI is built to meet
                        your industry requirements. <br />
                        <span className="animate-pulse text-blue-400">
                            Measurable Impact with AI
                        </span>
                    </p>
                    <p className="mt-2  text-sm sm:text-base">
                        • WaveX AI is not another AI firm—we are your AI strategy partner,
                        helping you maximize the impact of artificial intelligence.
                    </p>
                </div>

                {/* Right Side: Slider */}
                <div className="lg:w-1/2 relative w-full">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        pagination={{ clickable: true }}
                        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full"
                        loop
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <div className="p-6 rounded-2xl text-center shadow-lg">
                                    <Image
                                        src={rectangle}
                                        alt="Background"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute inset-0 w-full h-full opacity-20 rounded-2xl"
                                    />
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="rounded-full mx-auto mb-3 h-full w-full"
                                    />
                                    <h3 className="text-sm  font-semibold">{member.name}</h3>
                                    <p className="text-xs text-gray-300">{member.role}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Slider Navigation Buttons */}
                    <div className="flex mt-4 justify-end gap-4">
                        <button className="prev-btn border border-white bg-transparent p-2 rounded-full min-w-[40px] min-h-[40px] flex items-center justify-center">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="next-btn border border-white bg-transparent p-2 rounded-full min-w-[40px] min-h-[40px] flex items-center justify-center">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                {featureContent.map((feature, index) => (
                    <div key={index} className=" p-6 rounded-xl text-center shadow-md">
                        <div className="flex justify-center">

                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                height={66}
                                width={66}
                            />
                        </div>
                        <h4 className="text-sm  font-semibold mt-2">
                            {feature.title}
                        </h4>
                        <p className=" text-sm sm:text-sm">{feature.subTitle}</p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}

            <div className="mt-5">
                <button className="mt-auto gradient-background text-white py-2 px-4 rounded-lg flex items-center gap-2">
                    Talk to an AI Expert <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default AIIndustrySolutions;