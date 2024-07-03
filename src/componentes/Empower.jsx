import { MdArrowOutward } from "react-icons/md";
import conversation_img1 from '../assets/Rectangle 27.png'
import conversation_img2 from '../assets/Rectangle 27-1.png'
import conversation_img3 from '../assets/Rectangle 27-2.png'

const Empower = () => {
    return (
        <div className='px-16 py-16 mb-24 w-[98%] bg-[#FFFFF5] mx-auto grid grid-cols-2 gap-16 rounded-badge'>
            <div className='space-y-5 w-[70%]'>
                <button className='btn btn-outline rounded-full'>Who we are</button>
                <h2 className='capitalize'>We help to get solutions</h2>
                <p>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                <button className='btn btn-warning'>Learn More<MdArrowOutward size={20}/></button>
            </div>
            <div className="relative">
                <img className="rounded-3xl" src={conversation_img3} alt="conversation_img" />
                <div className="absolute bottom-0">
                    <h4>Our mission is simple</h4>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
            <div className="relative">
                <img className="rounded-3xl" src={conversation_img2} alt="conversation_img" />
                <div className="absolute bottom-0">
                    <h4>Our mission is simple</h4>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
            <div className="relative">
                <img className="rounded-3xl" src={conversation_img1} alt="conversation_img" />
                <div className="absolute bottom-0">
                    <h4>Our mission is simple</h4>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default Empower;