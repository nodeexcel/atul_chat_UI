import Image from "next/image";
import Frame3 from "../../assets/services/Frame3.svg";

export default function ServicesCategories() {
    return (
        <section className="relative flex flex-col text-white flex items-center m-10" id="ai-automation">
            <h2 className="gradient-text text-[35px] md:text-[45px] font-bold leading-[48px] md:leading-[64.8px]  font-space-grotesk mb-20">
                AI Services Categories
            </h2>
            <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h3 className="text-white text-5xl font-bold leading-relaxed">
                        AI Automation
                    </h3>
                    <p className=" text-white text-3xl font-bold leading-relaxed mt-1">
                        Automating Operations with AI-supported Robotics
                    </p>
                    <p className="text-white text-lg leading-relaxed mt-3">
                        AI Robotics Services at WaveX AI provides businesses with the ability to remove manual inefficiencies, hence cut costs and boost productivity. With the help of intelligent automation, our solutions enable businesses to cut costs, reduce errors, and scale operations with ease.
                    </p>
                    <p className="text-white text-lg leading-relaxed mt-5">
                        ✅ Decreased operational expenditures by upto 40%
                    </p>
                    <p className=" text-white text-lg leading-relaxed mt-2">
                        ✅  The AI-grounded automation approach results in 30% gains in productivity.
                    </p>
                    <p className=" text-white text-lg leading-relaxed mt-2">
                        ✅   Reduce the error rate to zero while delivering faster services and thus making the process better.
                    </p>
                    <p className=" text-white text-lg leading-relaxed mt-2">
                        ✅  Scale back operational expenses and move away from man to machine.
                    </p>


                </div>

                {/* Right Image Section */}
                <div className="lg:w-1/2 flex justify-end relative">
                    <Image
                        src={Frame3}
                        alt="AI Robot Illustration"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
