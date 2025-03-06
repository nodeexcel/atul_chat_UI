import Image from "next/image";
import addressIcon from "../../assets/addressIcon.svg";
import gmailIcon from "../../assets/gmailicon.svg";
import mySVG from "../../assets/AboutScreen/ContactBg.svg";
import { ChevronRight } from "lucide-react";

const ContactForm = () => {
    return (
        <div className="relative flex justify-around items-center min-h-screen  p-6">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 flex justify-center ">
                <Image
                    src={mySVG}
                    alt="Background"

                // className=" max-w-6xl h-auto"
                />
            </div>

            <div className="relative  p-8  max-w-6xl w-full text-white md:p-10 flex flex-col md:flex-row"  >

                {/* Left Section: Form */}
                <div className="md:w-3/5">
                    <h2 className="text-2xl font-bold">GET STARTED WITH AI TODAY</h2>
                    <p className="mt-2">Start Today with Free consultation, Let's start Today</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 bg-[#1D1447] rounded-md text-white placeholder-gray-400 border-2"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 bg-[#1D1447] rounded-md text-white placeholder-gray-400 border-2"
                        />
                        <input
                            type="tel"
                            placeholder="Phone with country code"
                            className="p-3 bg-[#1D1447] rounded-md text-white placeholder-gray-400 border-2"
                        />
                        <input
                            type="text"
                            placeholder="NPL Services"
                            className="p-3 bg-[#1D1447] rounded-md text-white placeholder-gray-400 border-2"
                        />
                    </div>

                    <textarea
                        placeholder="Add Here"
                        className="w-full mt-4 p-3 bg-[#1D1447] rounded-md text-white placeholder-gray-400 border-2"
                        rows="4"
                    ></textarea>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-row gap-4 flex-wrap  border-gray-700 pt-6 mt-10">

                            <div className="flex items-center gap-3">
                                <Image
                                    src={gmailIcon}
                                    alt="Gmail"

                                />
                                <div className="flex flex-col">
                                    <span className='text-white  font-bold'>Email</span>
                                    <span className="text-gray-300">contact@wavexai.com</span>
                                </div>

                            </div>
                            <div className="flex items-center gap-3">
                                <Image
                                    src={addressIcon}
                                    alt="address"

                                />
                                <div className="flex flex-col">
                                    <span className='text-white font-bold'>Address</span>
                                    <span className="text-gray-300">Canada, Toronto</span>
                                </div>

                            </div>
                        </div>


                    </div>

                    {/* <div className="mt-3 text-center flex justify-center"> */}
                    <button className="gradient-background text-white px-5 py-2 rounded-xl text-lg shadow-md mt-8 transition-transform transform hover:scale-105 flex items-center gap-2 ">
                        Book Free Consultation <ChevronRight size={20} />
                    </button>
                    {/* </div> */}
                </div>

                {/* Right Section */}
                <div className="md:w-2/5  p-6 rounded-2xl mt-8 md:mt-0 md:ml-6 flex flex-col items-center justify-center ">
                    <div className="flex -space-x-2">
                        <Image src="https://randomuser.me/api/portraits/men/32.jpg" width={40} height={40} alt="User1" className="rounded-full border-2 border-white" />
                        <Image src="https://randomuser.me/api/portraits/women/44.jpg" width={40} height={40} alt="User2" className="rounded-full border-2 border-white" />
                        <Image src="https://randomuser.me/api/portraits/men/50.jpg" width={40} height={40} alt="User3" className="rounded-full border-2 border-white" />
                        <Image src="https://randomuser.me/api/portraits/women/36.jpg" width={40} height={40} alt="User4" className="rounded-full border-2 border-white" />
                    </div>
                    <p className="text-xs mt-2">We have 18k+ customers</p>
                    <p className="text-xs "> worldwide</p>
                    <h3 className="text-4xl font-bold text-white mt-2">4.9/5</h3>
                    <p className="text-xs text-center mt-2 text-gray-300">
                        Using WaveX AI helps businesses to make use of the AI in developing solutions that streamline processes, blend customer experiences, and grow their businesses. Whether you are a newbie in the process of AI or even an advanced user, be rest assured that you are covered by experts from our end.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
