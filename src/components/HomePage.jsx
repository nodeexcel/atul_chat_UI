import Image from "next/image";
import GroupStar from "../assets/HomePage/GroupStar.png";

const HomePage = () => {
    return (
        < div className="pt-10" id="home" style={{ background: 'rgba(1, 15, 49, 1)' }}>
            <div className="flex flex-col items-center text-center">
                <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[64.8px] text-center font-space-grotesk">
                    AI for Everyone. Innovation
                </h2>
                <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[64.8px] text-center font-space-grotesk">
                    for You, The Future Isn't Coming—

                </h2>
                <h2 className="gradient-text text-[40px] md:text-[56px] font-bold leading-[64.8px] text-center font-space-grotesk mt-2">
                    It's Already Here.
                </h2>

                <p className="mt-4 text-[#999999] font-[500] text-center max-w-2xl line-height-[21.6px]">
                    Get the power of AI to drive workflow improvement, better decision
                    making, and staying ahead of competitors with WaveX AI.
                </p>

                <div className="flex items-center justify-center gap-4 w-full mt-4">
                    <div className="gradient-border rounded-lg overflow-hidden w-full max-w-md h-[48px]">
                        <input
                            type="text"
                            placeholder="Paste Your Website URL"
                            className=" flex-1 outline-none w-full bg-black"
                        />
                    </div>
                    <button className="gradient-background text-white px-6 py-2 hover:bg-purple-700 w-[130px] h-[48px] border rounded-lg">
                        Generate
                    </button>
                </div>

            </div>

            {/* Testimonials */}
            <div className="mt-4 text-gray-700">
                <p className=" text-[#999999] text-center">From Ideas to Insights: Enabling Scientific Discovery and Innovation.</p>
                <div className="flex items-center justify-center mt-2 gap-4">
                    {/* Placeholder avatars */}
                    <div className="flex -space-x-2 overflow-hidden">
                        {[...Array(7)].map((_, i) => (
                            <img
                                key={i}
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                                alt="User"
                            />
                        ))}
                    </div>
                    <p className="text-xs text-[#999999] mt-2">Used by Students and Researchers across the world.</p>
                </div>

            </div>
            {/* CTA Section */}
            <div className="w-full h-16 mt-10  text-white text-lg flex justify-center items-center gap-4 flex-wrap overflow-hidden group" style={{
                background: 'linear-gradient(105.14deg, #0146F8 5.34%, #962EB9 110.11%)'
            }}>
                <div className="flex gap-4 w-full whitespace-nowrap animate-marquee group-hover:animate-paused">
                    <button className="flex items-center gap-2 px-6 py-2   text-white   bg-transparent">
                        <span className=" text-white px-3 py-1 rounded-2xl" style={{
                            color: 'rgba(1, 15, 49, 1)', background: "white"
                        }}>X</span> Automate with one Click
                        <Image
                            src={GroupStar}
                            alt={""}
                            className="object-contain"
                        />
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2   text-white   bg-transparent">
                        <span className=" text-white px-3 py-1 rounded-2xl" style={{
                            color: 'rgba(1, 15, 49, 1)', background: "white"
                        }}>X</span> Automate with one Click
                        <Image
                            src={GroupStar}
                            alt={""}
                            className="object-contain"
                        />
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2  text-white   ">
                        <span className=" text-white px-3 py-1 rounded-2xl" style={{
                            color: 'rgba(1, 15, 49, 1)', background: "white"
                        }}>X</span> Automate with one Click
                        <Image
                            src={GroupStar}
                            alt={""}
                            className="object-contain"
                        />
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2  text-white">
                        <span className=" text-white px-3 py-1 rounded-2xl" style={{
                            color: 'rgba(1, 15, 49, 1)', background: "white"
                        }}>X</span> Automate with one Click
                        <Image
                            src={GroupStar}
                            alt={""}
                            className="object-contain"
                        />
                    </button>
                </div>
            </div>

        </div >
    );
};

export default HomePage;