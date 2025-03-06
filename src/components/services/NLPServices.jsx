import Image from "next/image";
import NLPService from "../../assets/services/NLPService.svg";

export default function NLPServices() {
    return (
        <section className=" text-white px-6 md:px-12 py-16 flex flex-col-reverse md:flex-row items-center justify-between" id="nlp-services">


            {/* Left - AI Robot Illustration */}
            <div className="relative flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
                <Image src={NLPService} alt="AI Robot" className="max-w-full h-auto" />
            </div>
            {/* Right - Content (Now right-aligned properly) */}
            <div className="text-left  md:w-1/2">

                <h3 className="text-white text-5xl font-bold leading-relaxed">
                    Natural Language Processing (NLP) Services
                </h3>
                <p className=" text-white text-3xl  leading-relaxed mt-1">
                    Transform Text & Speech Data into Actionable Insights
                </p>
                <p className="text-white text-lg leading-relaxed mt-3">
                    WaveX AI’s Natural Language Processing (NLP) Services aid/small businesses, mid-size enterprises and large organizations in knowing, interpreting and implementing the out-of-language-based interactions with robots, thus, they can greatly increase not only their operational efficiency but also can have a better customer communication.
                </p>

                <p className="text-white text-lg leading-relaxed mt-5">
                    ✅ Submit a prescribed course consultation and content categorization services for as many guides as possible.
                </p>
                <p className=" text-white text-lg leading-relaxed mt-2">
                    ✅ Use AI to be more effectively successful in your business by analyzing your customer services with sentiment contrast.

                </p>
                <p className=" text-white text-lg leading-relaxed mt-2">
                    ✅ Bolster storage and processing of documents, as well as the precision of data extraction.

                </p>

            </div>
        </section>
    );
}
