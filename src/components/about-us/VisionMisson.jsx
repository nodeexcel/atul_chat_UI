import Image from "next/image";
import AIPowered from "../../assets/AISolutions/AI-Powered.png";

export default function VisionMission() {
    return (
        <div className="  text-white px-6 md:px-20 py-16 relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
                    <p className="text-gray-300 text-sm mb-8">
                        We envision a world where AI seamlessly integrates into business
                        processes, enabling organizations to unlock new opportunities,
                        streamline operations, and make smarter decisions. We focus on
                        delivering AI solutions that empower businesses to innovate and
                        scale efficiently.
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-300 text-sm">
                        At Wavex AI, our mission is to help businesses harness the power of
                        AI to enhance decision-making, optimize workflows, and drive
                        impactful change. We specialize in delivering custom AI-driven
                        solutions tailored to each organization’s unique needs, ensuring
                        they stay ahead in a constantly evolving digital ecosystem.
                    </p>

                </div>
                <div className="absolute left-4 md:right-8 bottom-[-40px] text-6xl md:text-9xl font-bold gradient-text opacity-20 whitespace-nowrap">
                    Us
                </div>

                {/* Image Section */}
                <div className="relative flex justify-center">
                    <div className="relative w-[90%] md:w-[80%] lg:w-[70%]">
                        <Image
                            src={AIPowered}
                            alt="AI Dashboard"
                            width={500}
                            height={300}
                            className="rounded-2xl border-2 border-purple-500"
                        />
                        <div className="absolute -z-10 top-4 left-4 w-full h-full bg-purple-600 rounded-lg"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
