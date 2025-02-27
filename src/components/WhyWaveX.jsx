import Image from "next/image";
import AIImg from "../assets/whyWaveAI.svg";
import Star1 from "../assets/AboutUs/Star1.png";
import Star2 from "../assets/AboutUs/Star2.png";

export default function WaveXAI() {
    return (
        <div className=" text-white  flex items-center justify-center px-6 py-12">
            <div className=" w-full flex flex-col md:flex-row items-center md:items-start rounded-2xl shadow-lg p-8 relative justify-between">

                {/* LEFT: Content */}
                <div className="md:w-2/3 w-full text-left max-w-2xl">
                    <h2 className="text-[40px] md:text-[56px] font-bold leading-[48px] md:leading-[64.8px]font-space-grotesk mb-4">
                        Why WaveX AI?
                    </h2>

                    <p className="mt-4 text-gray-300  mx-auto mb-6">
                        At WaveX AI, we do more than automate processes—we implement AI deliberately
                        to spur actual business results. Unlike generic AI vendors who provide
                        out-of-the-box solutions, we excel at bespoke AI models designed specifically
                        for your business sector and operational requirements. Our method provides for
                        streamlined integration, enhanced decision-making, and scalable business expansion.
                    </p>

                    <div className="space-y-4">
                        <Feature title="All That Adapts & Learns" description="Our AI solutions adapt alongside your business, streamlining workflows in real-time." />
                        <Feature title="More Than SaaS – Real Customization" description="We design AI specific to your specific business objectives instead of providing pre-designed tools." />
                        <Feature title="Business Intelligence Powered by AI" description="We transcend automation and leverage AI to drive decision-making and revenue acceleration." />
                        <Feature title="Human + AI Collaboration" description="AI should complement, not supplant—our solutions blend easily with your staff." />
                    </div>
                </div>

                {/* RIGHT: Image */}
                <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-6 md:mt-0 relative">
                    <div className="rounded-lg overflow-hidden mt-12 z-50">
                        <Image
                            src={AIImg}
                            alt="Person"
                            width={374}
                            height={336}
                        />
                        <div className=" overflow-hidden rounded-lg absolute bottom-[-7rem] right-0">
                            <Image
                                src={Star2}
                                alt={" "}
                                height={70}
                                width={70}

                            />
                        </div>
                        <div className=" overflow-hidden rounded-lg absolute left-[-6rem] top-0">
                            <Image
                                src={Star1}
                                alt={" "}
                                height={90}
                                width={90}

                            />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// Feature Component
const Feature = ({ title, description }) => (
    <div className="flex items-start space-x-3">
        <span className="w-3 h-3 bg-purple-500 rounded-full mt-1"></span>
        <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);
