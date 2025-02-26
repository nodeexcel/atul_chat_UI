'use client'
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

//images
import firstImg from "../assets/LeadingPlatforms/1.svg";
import secondImg from "../assets/LeadingPlatforms/2.svg";
import thirdImg from "../assets/LeadingPlatforms/3.svg";
import fourthImg from "../assets/LeadingPlatforms/4.svg";
import fifthImg from "../assets/LeadingPlatforms/5.svg";
import sixImg from "../assets/LeadingPlatforms/6.svg";
import sevenImg from "../assets/LeadingPlatforms/7.svg";
import eightImg from "../assets/LeadingPlatforms/8.svg";
import nineImg from "../assets/LeadingPlatforms/9.svg";
import Img10 from "../assets/LeadingPlatforms/10.svg";
import Img11 from "../assets/LeadingPlatforms/11.svg";
import Img12 from "../assets/LeadingPlatforms/12.svg";
import Img13 from "../assets/LeadingPlatforms/13.svg";
import Img14 from "../assets/LeadingPlatforms/14.svg";
import Img15 from "../assets/LeadingPlatforms/15.svg";
import Img16 from "../assets/LeadingPlatforms/16.svg";
import Image from "next/image";


const icons = [
    firstImg, secondImg, thirdImg,
    fourthImg, fifthImg, sixImg,
    sevenImg, eightImg, nineImg,
    Img10, Img11, Img12,
    Img13, Img14, Img15, Img16
];

const columnCount = 3;
const speeds = [10, 13, 15]; // Faster speeds for a more abrupt motion

const getColumns = (items, cols) => {
    let columns = Array.from({ length: cols }, () => []);
    items.forEach((item, i) => columns[i % cols].push(item));
    return columns;
};

export default function PlatformIcons() {
    const columns = getColumns(icons, columnCount);

    return (
        <div className=" text-white py-14 px-10 flex flex-col md:flex-row items-center justify-between ">
            {/* Left Section - Text & Button */}
            <div className="flex flex-col gap-28">
                <div className=" text-left">

                    <h2 className=" text-[40px] md:text-[56px] font-bold leading-[48px] md:leading-[64.8px]  font-space-grotesk">
                        We Connect On All Leading
                    </h2>
                    <h2 className=" text-[40px] md:text-[56px] font-bold leading-[48px] md:leading-[64.8px] font-space-grotesk mb-5">
                        Platforms
                    </h2>

                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Our AI solutions integrate seamlessly with leading platforms, including
                    </p>

                </div>
                <div className="">
                    <button className="mt-auto gradient-background text-white py-2 px-4 rounded-lg flex items-center gap-2">
                        Free Consultation <ChevronRight size={20} />
                    </button>
                </div>

            </div>


            {/* Right Section - Animated Icons */}
            <div className=" flex gap-6 overflow-hidden relative h-64 mt-10 md:mt-0">
                {columns.map((col, i) => (
                    <div key={i} className="w-16 h-full relative overflow-hidden">
                        <motion.div
                            className="flex flex-col gap-6 absolute w-full"
                            animate={{ y: ["0%", "50%", "100%", "-100%"] }}
                            transition={{ repeat: Infinity, duration: speeds[i], ease: "easeInOut" }}
                        >
                            {[...col, ...col].map((icon, index) => (
                                <Image key={index} src={icon} alt="icon" className="w-12 h-12 mx-auto" />
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
