import Image from "next/image";
import machineFrame from "../../assets/services/machineFrame.svg";

export default function MachineLearningServices() {
    return (
        <section className="relative flex flex-col text-white flex items-center m-10" id="machine-learning">

            <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h3 className="text-white text-5xl font-bold leading-relaxed">
                        Machine Learning Services
                    </h3>
                    <p className=" text-white text-3xl font-bold leading-relaxed mt-1">
                        Drive Smarter Decisions with AI-Powered Machine Learning
                    </p>
                    <p className="text-white text-lg leading-relaxed mt-3">
                        WaveX AI offers Machine Learning Services to the business sector through predictive analytics, smart insights, and results automation, which help them make decisions that are based on the data with confidence.
                    </p>
                    <p className="text-white text-lg leading-relaxed mt-5">
                        ✅ Precise decision-making can be improved by 50%.
                    </p>
                    <p className=" text-white text-lg leading-relaxed mt-2">
                        ✅  Get AI-assisted insights based on the predictions and trends.

                    </p>
                    <p className=" text-white text-lg leading-relaxed mt-2">
                        ✅   Classify data and build predictive models fast.
                    </p>



                </div>

                {/* Right Image Section */}
                <div className="lg:w-1/2 flex justify-end relative">
                    <Image
                        src={machineFrame}
                        alt="AI Robot Illustration"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
