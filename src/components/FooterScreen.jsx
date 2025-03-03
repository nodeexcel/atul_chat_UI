import Image from "next/image";
import addressIcon from "../assets/addressIcon.svg";
import gmailIcon from "../assets/gmailicon.svg";

import tiktok from "../assets/socialIcons/tiktokIcons.svg";
import social from "../assets/socialIcons/social.svg";
import linkedin from "../assets/socialIcons/linkedinIcons.svg";
import instagram from "../assets/socialIcons/instagramIcons.svg";
import BeIcon from "../assets/socialIcons/BeIcons.svg";
import appIcon from "../assets/appIcon.svg";
import { ChevronRight } from "lucide-react";


export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white ">
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-col items-center">
                    {/* Logo and Navigation */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="flex items-center space-x-2">
                            <div className="bg-white p-2 rounded-xl">

                                <Image
                                    src={appIcon}
                                    alt="app icon"
                                    style={{ height: "40px", width: "40px" }}

                                />
                            </div>
                            <h1 className="text-3xl font-semibold">WaveX AI</h1>
                        </div>
                        <nav className="mt-4 space-x-6 text-gray-300 text-sm">
                            <a href="#" className="hover:text-white">Home</a>
                            <a href="#" className="hover:text-white">AI Insights</a>
                            <a href="#" className="hover:text-white">Services</a>
                            <a href="#" className="hover:text-white">Blog</a>
                            <a href="#" className="hover:text-white">About Us</a>
                            <a href="#" className="hover:text-white">Contact</a>
                        </nav>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 mb-6">
                        <a href="#" className="p-2 rounded-full transition">
                            <Image
                                src={tiktok}
                                alt="Phone"

                            />
                        </a>
                        <a href="#" className="p-2 transition">
                            <Image
                                src={instagram}
                                alt="Phone"

                            />
                        </a>
                        <a href="#" className="p-2 hover:  transition">
                            <Image
                                src={linkedin}
                                alt="Phone"

                            />
                        </a>
                        <a href="#" className="p-2  transition">
                            <Image
                                src={BeIcon}
                                alt="Phone"

                            />
                        </a>
                        <a href="#" className="p-2  transition">
                            <Image
                                src={social}
                                alt="Phone"

                            />
                        </a >
                    </div>

                    {/* Call-to-Action Button */}
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full font-medium flex">
                        Free Consultation <ChevronRight />
                    </button>
                </div>

                {/* Contact Details */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-row gap-4 flex-wrap border-t border-gray-700 pt-6 mt-10">

                        <div className="flex items-center gap-3">
                            <Image
                                src={gmailIcon}
                                alt="Gmail"

                            />
                            <div className="flex flex-col">
                                <span className='text-white  font-bold'>Email</span>
                                <span className="text-gray-300">contact@wavexai.com</span>
                            </div>

                        </div>
                        <div className="flex items-center gap-3">
                            <Image
                                src={addressIcon}
                                alt="address"

                            />
                            <div className="flex flex-col">
                                <span className='text-white font-bold'>Address</span>
                                <span className="text-gray-300">Canada, Toronto</span>
                            </div>

                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-6 text-center text-white font-bold text-xs">
                        © 2025 All Rights Reserved WaveX AI®
                    </div>
                </div>


            </div>
        </footer>
    );
}
