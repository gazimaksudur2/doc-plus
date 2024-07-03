import { MdArrowOutward } from "react-icons/md";
import conversation_img1 from '../assets/Rectangle 27.png'
import conversation_img2 from '../assets/Rectangle 27-1.png'
import conversation_img3 from '../assets/Rectangle 27-2.png'
import up_arrow from '../assets/Group 28.png'


const Empower = () => {
    return (
        <div className='px-20 py-20 mb-24 w-[98%] space-y-14 bg-[#FFFFF5] mx-auto rounded-badge'>
            <div className="flex justify-between">
                <div className='space-y-5 w-[50%]'>
                    <button className='btn btn-outline rounded-full'>Service</button>
                    <h2 className='capitalize w-[50%] text-[#020043] text-4xl font-semibold'>Empowering Health, Enriching Lives</h2>
                    <p className="w-[70%] text-[#020043ab] pb-4">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                    <button className='btn btn-warning'>Appointment<MdArrowOutward size={20} /></button>
                </div>
                <div className="relative">
                    <img className="rounded-3xl" src={conversation_img3} alt="conversation_img" />
                    <div className="absolute z-[20] space-y-2 left-4 bottom-4 bg-[#020043a0] px-4 py-4 rounded-3xl w-[70%] text-white">
                        <h4 className="text-xl">Advanced Technology</h4>
                        <p className="text-gray-400 text-sm">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                        <div className="w-full flex justify-end">
                            <img src={up_arrow} alt="up arrow" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="relative">
                    <img className="rounded-3xl" src={conversation_img2} alt="conversation_img" />
                    <div className="absolute z-[20] space-y-2 left-4 bottom-4 bg-[#020043a0] px-4 py-4 rounded-3xl w-[70%] text-white">
                        <h4 className="text-xl">Online Doctor Meet</h4>
                        <p className="text-gray-400 text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        <div className="w-full flex justify-end">
                            <img src={up_arrow} alt="up arrow" />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="rounded-3xl" src={conversation_img1} alt="conversation_img" />
                    <div className="absolute z-[20] space-y-2 left-4 bottom-4 bg-[#020043a0] px-4 py-4 rounded-3xl w-[70%] text-white">
                        <h4 className="text-xl">Consultancy your health</h4>
                        <p className="text-gray-400 text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                        <div className="w-full flex justify-end">
                            <img src={up_arrow} alt="up arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Empower;