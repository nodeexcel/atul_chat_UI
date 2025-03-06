import Image from "next/image";
import Group from "../../assets/AboutScreen/Group.svg";
import chatgpt from "../../assets/AboutScreen/chatgpt.svg";
import googlecloud from "../../assets/AboutScreen/googlecloud.svg";

const partners = [
    {
        src: Group,
        alt: "TensorFlow",
    },
    {
        src: chatgpt,
        alt: "OpenAI",
    },
    {
        src: googlecloud,
        alt: "Google Cloud",
    },
];

export default function PartnersIntegrations() {
    return (
        <section className="flex flex-col items-center text-center py-12">

            <h2 className="gradient-text text-[35px] md:text-[45px] font-bold leading-[48px] md:leading-[64.8px]  font-space-grotesk">
                AI Partners & Integrations
            </h2>

            <p className="text-gray-300 max-w-lg text-sm md:text-base">
                WaveX AI collaborates with industry leaders to bring the best AI
                technologies to our clients. Our key partners and integrations include:
            </p>

            <div className="mt-8 flex space-x-6">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className={`relative   rounded-xl   flex items-center justify-center   `}
                    >
                        <Image src={partner.src} alt={partner.alt} height={100} width={100} />
                    </div>
                ))}
            </div>
        </section>
    );
}
