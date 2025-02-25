"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import DesignImg from "../assets/AISolutionsDesign/DesignImg.png"
import Image from "next/image";
const slides = [
    {
        title: "AI in Healthcare",
        features: [
            "Faster and more accurate medical diagnosis powered by AI",
            "NLP-powered AI for automated documentation and clinical workflows",
            "AI chatbots for patient engagement and scheduling",
        ],
        image: DesignImg,
    },
    {
        title: "AI in Finance",
        features: [
            "AI-powered fraud detection for real-time transactions",
            "Automated risk assessment and compliance monitoring",
            "Predictive financial forecasting for investment decisions",
        ],
        image: DesignImg,
    },
    {
        title: "AI in E-commerce",
        features: [
            "AI recommendation engines for personalized shopping experiences",
            "AI for inventory forecasting and stock management",
            "AI pricing models for revenue optimization",
        ],
        image: DesignImg,
    },
];

export default function Slider() {
    return (
        <div className="flex flex-col items-center   text-white py-12 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">AI Solutions Designed for Your Industry</h2>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.5}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative p-6 rounded-xl shadow-lg border-2 overflow-hidden bg-white text-black text-center transform transition-all duration-500 hover:scale-105 h-[690px] w-full"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                className=" opacity-20"
                            />
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-[#5a47f5] mb-3">{slide.title}</h3>
                                <ul className="space-y-2">
                                    {slide.features.map((feature, i) => (
                                        <li key={i} className="flex items-start space-x-2 justify-center">
                                            <span className="text-green-500">✔</span>
                                            <p>{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-[#5a47f5] rounded-full">
                                    Free Consultation
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}