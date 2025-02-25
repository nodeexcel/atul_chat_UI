'use client'
import { ChevronRight } from "lucide-react";
import React from "react";

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        < div style={{
            zIndex: 1000,
            background: 'rgba(1, 15, 49, 1)'
        }
        } className="h-[93px] bg-white text-center flex flex-col items-center px-4 md:px-10 lg:px-20  " >
            <nav className="w-full flex justify-between items-center py-4 h-[93px]" >
                <h1 className="gradient-text text-xl font-bold">WaveX AI</h1>
                <ul className="hidden md:flex space-x-6 text-white">
                    <li className="cursor-pointer   hover:text-purple-600" onClick={() => scrollToSection("home")}>Home</li>
                    <li className="cursor-pointer   hover:text-purple-600" onClick={() => scrollToSection("insights")}>AI Insights</li>
                    <li className="cursor-pointer   hover:text-purple-600" onClick={() => scrollToSection("services")}>Services</li>
                    <li className="cursor-pointer   hover:text-purple-600" onClick={() => scrollToSection("blog")}>Blog</li>
                    <li className="cursor-pointer   hover:text-purple-600" onClick={() => scrollToSection("about")} >ABOUT US</li>
                    <li className="cursor-pointer   hover:text-purple-600" onClick={() => scrollToSection("contact")}>Contact</li>
                </ul>
                <button style={{
                    background: "linear-gradient(105.14deg, #0146F8 5.34%, #962EB9 110.11%)"
                }} className="text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 h-9 flex">
                    Free Consultation <ChevronRight size={20} />
                </button>

            </nav>
        </div >
    );
};

export default Navbar