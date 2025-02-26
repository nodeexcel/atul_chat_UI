"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ratingIcon from "../assets/ratingIcon.svg"
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Client Name",
        text: " Lorem ipsum Color Style design ImplementationLorem Ipsum Color Style design Implementation Lorem ipsum Color Style design ImplementationLorem Ipsum Color Style design Implementation Lorem ipsum Color Style design ImplementationLorem Ipsum Color Style design Implementation...",
        image: ratingIcon,
    },
    {
        id: 2,
        name: "Client Name",
        text: "Lorem ipsum Color Style design ImplementationLorem Ipsum Color Style design Implementation Lorem ipsum Color Style design ImplementationLorem Ipsum Color Style design Implementation...",
        image: ratingIcon,
    },
    {
        id: 3,
        name: "Client Name",
        text: "Lorem ipsum Color Style design ImplementationLorem Ipsum Color Style design Implementation Lorem ipsum Color Style design ImplementationLorem Ipsum Color Style design ImplementationLorem ipsum Color Style design ImplementationLorem Ipsum Color Style design ImplementationLorem ipsum Color Style design ImplementationLorem Ipsum Color Style design Implementation...",
        image: ratingIcon,
    },
    {
        id: 4,
        name: "Client Name",
        text: "Lorem ipsum Color Style design ImplementationLorem Ipsum Color Style design Implementation...",
        image: ratingIcon,
    },
    {
        id: 5,
        name: "Client Name",
        text: "Lorem ipsum Color Style design ImplementationLorem Ipsum Color Style design Implementation...",
        image: ratingIcon,
    },
];

export default function TransformedBusiness() {
    return (
        <div className="w-full py-10  text-white px-10 ">

            <h2 className="text-[40px] md:text-[56px] font-bold leading-[48px] md:leading-[64.8px] text-center font-space-grotesk">
                See How We’ve Transformed
            </h2>
            <h2 className=" text-[40px] md:text-[56px] font-bold leading-[48px] md:leading-[64.8px] text-center font-space-grotesk mb-5">
                Businesses.
            </h2>
            <div className="relative  mx-auto">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".next-btn",
                        prevEl: ".prev-btn",
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="p-6 bg-transparent border-[1px] border-white  rounded-xl shadow-md h-[206px]">
                                <div className="flex items-center gap-4 justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image src={item.image} alt={item.name} className="w-10 h-10 rounded-full" />
                                        <h3 className="text-lg font-semibold">{item.name}</h3>

                                    </div>
                                    <p className="text-yellow-500">★★★★★</p>
                                </div>
                                <p className="mt-4 text-sm">{item.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex mt-4 justify-end gap-4">
                    <button className="prev-btn border-[1px] border-white bg-transparent p-2 rounded-full">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="next-btn  bg-transparent  border-[1px] border-white  p-2 rounded-full">
                        <ChevronRight size={20} />
                    </button>
                </div>

            </div>
        </div>
    );
}
