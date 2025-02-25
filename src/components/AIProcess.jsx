import { CircleCheck, Brain, Settings, RefreshCw, ChevronRight } from "lucide-react";
import Image from "next/image";
import Leftic from "../assets/AIProcess/Leftic.png";
import Rightic from "../assets/AIProcess/Rightic.png";

import Frame1 from "../assets/AIProcess/icons/Frame1.png";
import Frame2 from "../assets/AIProcess/icons/Frame2.png";
import Frame3 from "../assets/AIProcess/icons/Frame3.png";
import Frame4 from "../assets/AIProcess/icons/Frame4.png";


const AIProcess = () => {
    return (
        <div className=" text-white py-16 px-4 md:px-12">
            <div className=" relative flex  w-full justify-between">
                <div className="w-full h-[267px] overflow-hidden rounded-lg mb-4 absolute">
                    <Image
                        src={Leftic}
                        alt={" "}

                    />
                </div>
                <div className="h-[267px] overflow-hidden rounded-lg mb-4 absolute right-10 top-5">
                    <Image
                        src={Rightic}
                        alt={" "}

                    />
                </div>
            </div>

            <div className="text-center">

                <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[64.8px] text-center font-space-grotesk">
                    AI Strategy &
                </h2>
                <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[64.8px] text-center font-space-grotesk">
                    Implementation Process

                </h2>
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    At WaveX AI, we ensure that there is an integration of AI structured in a way that
                    produces a results-driven methodology.
                </p>
            </div>
            {/* stepper */}
            <div className="w-full p-4 mt-5">
                <div className="flex  justify-between">
                    {/* Step 1 - Active */}
                    <div className="relative flex items-center w-full">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-1 rounded-xl text-sm">
                            Step 1
                        </div>
                        <div className="w-full h-1 bg-gray-600"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center w-full">
                        <div className="bg-[#241A3D] text-gray-400 px-5 py-1 rounded-xl text-sm">
                            Step 2
                        </div>
                        <div className="w-full h-1 bg-gray-600"></div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center w-full">
                        <div className="bg-[#241A3D] text-gray-400 px-5 py-1 rounded-xl text-sm">
                            Step 3
                        </div>
                        <div className="w-full h-1 bg-gray-600"></div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center">
                        <div className="bg-[#241A3D] text-gray-400 px-5 py-1 rounded-xl text-sm">
                            Step 4
                        </div>
                    </div>
                </div>
            </div>

            {/* Steps */}
            <div className="relative  flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">


                {/* Step 1 */}
                <div className="relative flex flex-col   md:w-1/4">

                    <div className="mt-4 text-indigo-300">
                        <Image
                            src={Frame1}
                            alt={" "}

                        />
                    </div>
                    <h3 className="text-lg font-semibold mt-2">AI Readiness Assessment</h3>
                    <p className="text-gray-300 text-sm mt-2">
                        Review of quality of data, workflows, and business needs.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col     md:w-1/4">

                    <div className="mt-4 text-indigo-300">
                        <Image
                            src={Frame2}
                            alt={" "}

                        />
                    </div>
                    <h3 className="text-lg font-semibold mt-2">Custom AI Model Development</h3>
                    <p className="text-gray-300 text-sm mt-2">
                        Construction of AI models that match with the objectives.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col   md:w-1/4">

                    <div className="mt-4 text-indigo-300">
                        <Image
                            src={Frame3}
                            alt={" "}

                        />
                    </div>
                    <h3 className="text-lg font-semibold mt-2">Seamless AI Integration</h3>
                    <p className="text-gray-300 text-sm mt-2">
                        Implementation of AI tools in synchronization with existing IT infrastructure.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col   md:w-1/4">

                    <div className="mt-4 text-indigo-300">
                        <Image
                            src={Frame4}
                            alt={" "}

                        />
                    </div>
                    <h3 className="text-lg font-semibold mt-2">Continuous Optimization</h3>
                    <p className="text-gray-300 text-sm mt-2">
                        AI models evolve and adapt, keeping on improving day by day.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
                <button className="gradient-background text-white px-6 py-3 rounded-2xl text-lg shadow-md mt-4 transition-transform transform hover:scale-105 flex items-center gap-2">
                    Free Consultation <ChevronRight size={20} />
                </button>
            </div>

        </div>
    );
};

export default AIProcess;




