"use client";
import Image from "next/image";
import chatBot from "../../assets/services/chatbot.svg";

export default function AIChatBotServices() {
    return (
        <section className="relative flex flex-col text-white flex items-center m-10" id="ai-chatbot">

            <div className=" mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h3 className="text-white text-5xl font-bold leading-relaxed">
                        AI Chatbot Services

                    </h3>
                    <p className=" text-white text-3xl font-bold leading-relaxed mt-1">
                        Enhance Customer Interactions with Intelligent AI Chatbots

                    </p>
                    <p className="text-white text-lg leading-relaxed mt-3">
                        WaveX AI’s AI Chatbot Services help businesses deploy AI-driven conversational assistants to improve customer service, automate workflows, and drive engagement.

                    </p>
                    <p className="text-white text-lg leading-relaxed mt-5">
                        ✅ Reduce customer response time by 50%.

                    </p>
                    <p className=" text-white text-lg leading-relaxed mt-2">
                        ✅  Automate support tasks and lead generation.


                    </p>
                    <p className=" text-white text-lg leading-relaxed mt-2">
                        ✅   Provide 24/7 AI-powered customer assistance.

                    </p>



                </div>

                {/* Right Image Section */}
                <div className="lg:w-1/2 flex justify-end relative">
                    <Image
                        src={chatBot}
                        alt="AI Robot Illustration"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
