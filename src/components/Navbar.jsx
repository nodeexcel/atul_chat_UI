"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronRight, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import websiteLogo from "../assets/websiteLogo.svg";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname(); // Current active route

    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleServices = () => setIsServicesOpen(!isServicesOpen);

    // Services ke options ke liye scroll-to-section logic
    const scrollToSection = (id) => {
        if (pathname !== "/services") {
            router.push(`/services#${id}`);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
        setIsServicesOpen(false);
    };

    return (
        <div style={{ zIndex: 100000, background: "rgba(1, 15, 49, 1)" }}
            className="h-[93px] bg-white text-center flex flex-col items-center px-4 md:px-10 lg:px-20">

            <nav className="w-full flex justify-between items-center py-4 h-[93px]">
                <div className="flex justify-center items-center gap-3 cursor-pointer" onClick={() => {
                    router.push("/")
                }}>
                    <Image src={websiteLogo} style={{ height: "100px", width: "auto" }} alt="logo" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-white gap-10">
                    <li className={`cursor-pointer relative hover:text-purple-600 ${pathname === '/' ? "text-purple-600" : ""}`}
                        onClick={() => {
                            setIsServicesOpen(false);
                            router.push("/");
                        }}>
                        Home
                        {pathname === '/' && (
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-600 rounded-full"></span>
                        )}
                    </li>

                    <li className={`relative cursor-pointer hover:text-purple-600 ${pathname === '/services' ? "text-purple-600" : ""}`} onClick={toggleServices}>
                        Services <ChevronDown size={16} className="inline" />
                        {pathname === '/services' && (
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-600 rounded-full"></span>
                        )}
                        {isServicesOpen && (
                            <ul className="absolute left-[-80px] mt-2 w-60 bg-black text-white shadow-lg rounded-lg p-2 z-10">
                                <li className="px-4 py-2 hover:bg-slate-900 cursor-pointer" onClick={() => scrollToSection("nlp-services")}>
                                    (NLP) Services
                                </li>
                                <li className="px-4 py-2 hover:bg-slate-900 cursor-pointer" onClick={() => scrollToSection("machine-learning")}>
                                    Machine Learning
                                </li>
                                <li className="px-4 py-2 hover:bg-slate-900 cursor-pointer" onClick={() => scrollToSection("ai-chatbot")}>
                                    AI Chatbot Services
                                </li>
                                <li className="px-4 py-2 hover:bg-slate-900 cursor-pointer" onClick={() => scrollToSection("generative-ai")}>
                                    Generative AI Services
                                </li>
                                <li className="px-4 py-2 hover:bg-slate-900 cursor-pointer" onClick={() => scrollToSection("ai-automation")}>
                                    AI Automation Services
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className={`cursor-pointer relative hover:text-purple-600 ${pathname === '/about-us' ? "text-purple-600" : ""}`}
                        onClick={() => {
                            setIsServicesOpen(false);
                            router.push("/about-us");
                        }}>
                        About Us
                        {pathname === '/about-us' && (
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-600 rounded-full"></span>
                        )}
                    </li>

                    <li className={`cursor-pointer relative hover:text-purple-600 ${pathname === '/contact' ? "text-purple-600" : ""}`}
                        onClick={() => {
                            setIsServicesOpen(false);
                            router.push("/contact");
                        }}>
                        Contact
                        {pathname === '/contact' && (
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-600 rounded-full"></span>
                        )}
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Consultation Button */}
                <button style={{ background: "linear-gradient(105.14deg, #0146F8 5.34%, #962EB9 110.11%)" }}
                    className="hidden md:flex text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 h-9 items-center">
                    Free Consultation <ChevronRight size={20} />
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden w-full bg-white text-black flex flex-col items-center space-y-4 py-4 z-10">
                    <li className="cursor-pointer hover:text-purple-600" onClick={() => {
                        setIsOpen(false);
                        router.push("/");
                    }}>
                        Home
                    </li>

                    <li className="cursor-pointer hover:text-purple-600" onClick={toggleServices}>
                        Services <ChevronDown size={16} className="inline" />
                    </li>

                    {isServicesOpen && (
                        <ul className="w-full text-center bg-gray-100 p-2">
                            <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => scrollToSection("nlp-services")}>
                                (NLP) Services
                            </li>
                            <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => scrollToSection("machine-learning")}>
                                Machine Learning
                            </li>
                            <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => scrollToSection("ai-chatbot")}>
                                AI Chatbot Services
                            </li>
                            <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => scrollToSection("generative-ai")}>
                                Generative AI Services
                            </li>
                            <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => scrollToSection("ai-automation")}>
                                AI Automation Services
                            </li>
                        </ul>
                    )}

                    <li className="cursor-pointer hover:text-purple-600" onClick={() => {
                        setIsOpen(false);
                        router.push("/about-us");
                    }}>
                        About Us
                    </li>

                    <li className="cursor-pointer hover:text-purple-600" onClick={() => {
                        setIsOpen(false);
                        router.push("/contact");
                    }}>
                        Contact
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
