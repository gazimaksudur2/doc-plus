import { MdArrowOutward } from "react-icons/md";
import conversation_img from '../assets/Rectangle 24.png'

const OurMission = () => {
    return (
        <div className='px-6 py-16 my-24 w-[98%] mx-auto flex justify-between items-center'>
            <div className='space-y-5 w-[38%]'>
                <button className='btn btn-outline rounded-full'>Who we are</button>
                <h2 className='capitalize w-[50%] text-[#020043] text-4xl font-semibold'>We help to get solutions</h2>
                <p className="w-[90%] text-[#020043ab] pb-4">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                <button className='btn btn-warning'>Learn More<MdArrowOutward size={20}/></button>
            </div>
            <div className="relative">
                <img className="" src={conversation_img} alt="conversation_img" />
                <div className="absolute z-[20] space-y-3 -left-28 -bottom-8 bg-[#020043db] px-6 py-8 rounded-3xl w-[70%] text-white">
                    <h4 className="text-2xl">Our mission is simple</h4>
                    <p className="text-gray-400 text-sm">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;