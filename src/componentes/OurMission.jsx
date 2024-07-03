import { MdArrowOutward } from "react-icons/md";
import React from 'react';
import conversation_img from '../assets/Rectangle 24.png'

const OurMission = () => {
    return (
        <div className='px-6 py-16 mb-24 w-[98%] mx-auto flex justify-between items-center'>
            <div className='space-y-5 w-[38%]'>
                <button className='btn btn-outline rounded-full'>Who we are</button>
                <h2 className='capitalize'>We help to get solutions</h2>
                <p>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                <button className='btn btn-warning'>Learn More<MdArrowOutward size={20}/></button>
            </div>
            <div className="relative">
                <img className="" src={conversation_img} alt="conversation_img" />
                <div className="absolute">
                    <h4>Our mission is simple</h4>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;