"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import DesignImg from "../assets/AISolutionsDesign/5079.svg";

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
        <div className="flex flex-col items-center text-white py-12 px-4">
            <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[48px] md:leading-[64.8px] text-center font-space-grotesk">
                AI Solutions Designed for
            </h2>
            <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[48px] md:leading-[64.8px] text-center font-space-grotesk mb-5">
                Your Industry
            </h2>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={30}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="w-full"
                initialSlide={1}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 1.2, spaceBetween: 20 },
                    768: { slidesPerView: 1.5, spaceBetween: 30 },
                    1024: { slidesPerView: 2, spaceBetween: 40 },
                    1280: { slidesPerView: 2.5, spaceBetween: 50 },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div
                            className="relative p-6 rounded-xl shadow-lg border-2 overflow-hidden bg-white text-black transform transition-all duration-500 w-[90%] sm:w-[700px] max-w-lg"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-auto"
                            />
                            <div className="relative z-10 mt-5">
                                <h3 className="text-2xl md:text-3xl font-semibold text-[#5a47f5] mb-3">
                                    {slide.title}
                                </h3>
                                <ul className="space-y-2">
                                    {slide.features.map((feature, i) => (
                                        <li key={i} className="flex items-start space-x-2">
                                            <span className="text-green-500">✔</span>
                                            <p>{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-end">
                                    <button className="gradient-background text-white px-6 py-3 rounded-2xl text-lg shadow-md mt-4 transition-transform transform flex items-center gap-2 h-9">
                                        Book Free Consultation <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
