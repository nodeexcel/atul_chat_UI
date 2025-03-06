"use client";
import Image from "next/image";
import frameImg from "../../assets/services/Frame2.svg";

export default function AIPerfect() {
    return (
        <section className=" text-white px-6 md:px-12 py-16 flex flex-col-reverse md:flex-row items-center justify-between">


            {/* Left - AI Robot Illustration */}
            <div className="relative flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
                <Image src={frameImg} alt="AI Robot" className="max-w-full h-auto" />
            </div>
            {/* Right - Content (Now right-aligned properly) */}
            <div className="text-right  md:w-1/2">

                <h2 className="gradient-text text-[35px] md:text-[45px] font-bold leading-[48px] md:leading-[64.8px]  font-space-grotesk">
                    Why Is AI Perfect for Your
                </h2>
                <h2 className="gradient-text text-[35px] md:text-[45px] font-bold leading-[48px] md:leading-[64.8px]  font-space-grotesk mb-5">
                    Business?
                </h2>
                <ul className="space-y-4 text-lg">
                    <li className="flex items-center justify-end">
                        {`20-40% cost cuts due to workflow automation. ✅`}
                    </li>
                    <li className="flex items-center justify-end">
                        50% quicker decision-making using AI analytics.✅
                    </li>
                    <li className="flex items-center justify-end">
                        30% improvement in production due to AI-based workflows.✅
                    </li>
                    <li className="flex items-center justify-end">
                        Increased sales with personalized customer experiences and data analytics.✅
                    </li>
                </ul>
            </div>
        </section>
    );
}
