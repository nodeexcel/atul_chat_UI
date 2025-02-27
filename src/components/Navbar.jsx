"use client";
import { useState } from "react";
import { ChevronRight, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import headerIcon from "../assets/headerIcon.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleServices = () => setIsServicesOpen(!isServicesOpen);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Close menu after clicking
        }
    };

    return (
        <div style={{ zIndex: 100000, background: "rgba(1, 15, 49, 1)" }}
            className="h-[93px] bg-white text-center flex flex-col items-center px-4 md:px-10 lg:px-20">

            <nav className="w-full flex justify-between items-center py-4 h-[93px]">
                <div className="flex justify-center items-center gap-3">
                    <Image src={headerIcon} />
                    <h1 className="gradient-text text-xl font-bold">WaveX AI</h1>
                </div>


                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-white gap-10">
                    <li className="cursor-pointer hover:text-purple-600" onClick={() => scrollToSection("home")}>Home</li>

                    <li className="relative cursor-pointer hover:text-purple-600" onClick={toggleServices}>
                        Services <ChevronDown size={16} className="inline" />
                        {isServicesOpen && (
                            <ul className="absolute left-0 mt-2 w-40 bg-black text-white shadow-lg rounded-lg p-2"  >
                                <li className="px-4 py-2 hover:bg-slate-900 cursor-pointer">Service 1</li>
                                <li className="px-4 py-2 hover:bg-slate-900 cursor-pointer">Service 2</li>
                                <li className="px-4 py-2 hover:bg-slate-900 cursor-pointer">Service 3</li>
                                <li className="px-4 py-2 hover:bg-slate-900 cursor-pointer">Service 4</li>
                                <li className="px-4 py-2 hover:bg-slate-900 cursor-pointer">Service 5</li>
                            </ul>
                        )}
                    </li>

                    <li className="cursor-pointer hover:text-purple-600" onClick={() => scrollToSection("about")}>About Us</li>
                    <li className="cursor-pointer hover:text-purple-600" onClick={() => scrollToSection("contact")}>Contact</li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Consultation Button (Always visible) */}
                <button style={{ background: "linear-gradient(105.14deg, #0146F8 5.34%, #962EB9 110.11%)" }}
                    className="hidden md:flex text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 h-9 items-center">
                    Free Consultation <ChevronRight size={20} />
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden w-full bg-white text-black flex flex-col items-center space-y-4 py-4" style={{ zIndex: 10000 }}>
                    <li className="cursor-pointer hover:text-purple-600" onClick={() => scrollToSection("home")}>Home</li>

                    <li className="cursor-pointer hover:text-purple-600" onClick={toggleServices}>
                        Services <ChevronDown size={16} className="inline" />
                    </li>

                    {isServicesOpen && (
                        <ul className="w-full text-center bg-gray-100 p-2">
                            <li className="py-2 hover:bg-gray-200 cursor-pointer">Service 1</li>
                            <li className="py-2 hover:bg-gray-200 cursor-pointer">Service 2</li>
                            <li className="py-2 hover:bg-gray-200 cursor-pointer">Service 3</li>
                            <li className="py-2 hover:bg-gray-200 cursor-pointer">Service 4</li>
                            <li className="py-2 hover:bg-gray-200 cursor-pointer">Service 5</li>
                        </ul>
                    )}

                    <li className="cursor-pointer hover:text-purple-600" onClick={() => scrollToSection("about")}>About Us</li>
                    <li className="cursor-pointer hover:text-purple-600" onClick={() => scrollToSection("contact")}>Contact</li>

                    {/* Mobile Consultation Button */}
                    <button style={{ background: "linear-gradient(105.14deg, #0146F8 5.34%, #962EB9 110.11%)" }}
                        className="text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 h-9 flex items-center">
                        Free Consultation <ChevronRight size={20} />
                    </button>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
