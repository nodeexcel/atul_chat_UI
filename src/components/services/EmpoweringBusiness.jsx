"use client";
import Image from "next/image";
import HeaderFrame from "../../assets/services/HeaderFrame.svg";

export default function EmpoweringBusiness() {
    return (
        <section className="relative  text-white flex items-center m-10">
            <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="lg:w-1/2 text-left">

                    <h2 className="gradient-text text-[35px] md:text-[45px] font-bold leading-[48px] md:leading-[64.8px]  font-space-grotesk">
                        Empowering Businesses with
                    </h2>
                    <h2 className="gradient-text text-[35px] md:text-[45px] font-bold leading-[48px] md:leading-[64.8px]  font-space-grotesk mb-5">
                        Advanced AI Solutions
                    </h2>
                    <p className="mt-5 text-white leading-relaxed">
                        WaveX AI is a top AI consultant that exploits AI techniques suitable
                        for scalable advantages of all types of businesses, including
                        automation, optimization, and scaling. We specialize in RAG, Agentic
                        AI, and bespoke AI model development, enabling new AI model
                        integrations to proceed without friction. At the core of our
                        business, we seek to develop operationally efficient, customer
                        satisfying, and sustainably growing AI solutions.
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="lg:w-1/2 flex justify-end relative">
                    <Image
                        src={HeaderFrame}
                        alt="AI Robot Illustration"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
