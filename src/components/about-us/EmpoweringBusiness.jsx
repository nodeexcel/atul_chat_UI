import Image from "next/image";
import AIPowered from "../../assets/AboutScreen/HeaderImg.svg";

const EmpoweringSection = () => {
    return (
        <div className="relative w-full  text-white py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/* Image and Overlay */}
                <div className="relative">
                    <Image
                        src={AIPowered}
                        alt="AI Business Transformation"

                    />
                </div>

                {/* Text Content */}
                <div className="mt-8">

                    <h2 className="gradient-text text-[35px] md:text-[45px] font-bold leading-[48px] md:leading-[64.8px]  font-space-grotesk">
                        Empowering Businesses with AI-Driven
                    </h2>
                    <h2 className="gradient-text text-[35px] md:text-[45px] font-bold leading-[48px] md:leading-[64.8px]  font-space-grotesk mb-5">
                        Transformation
                    </h2>
                    <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                        At Wavex AI, we are committed to revolutionizing businesses through
                        intelligent, scalable, and future-proof AI solutions. Our passion
                        lies in driving innovation, enhancing operational efficiency, and
                        ensuring a competitive edge for businesses across industries. With
                        AI rapidly transforming the digital landscape, our mission is to
                        ensure that companies, regardless of size, leverage the full
                        potential of artificial intelligence.
                    </p>
                </div>

                {/* About Section Text Overlay */}
                <div className="absolute right-4 md:right-8 bottom-[-10px] text-6xl md:text-9xl font-bold gradient-text opacity-20 whitespace-nowrap">
                    About
                </div>

            </div>
        </div>
    );
};

export default EmpoweringSection;
