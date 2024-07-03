import logo from '../assets/logo light.png';
import { MdArrowOutward } from 'react-icons/md';

const Offer = () => {
    return (
        <div className='min-h-[70vh] my-24 bg-offer bg-no-repeat bg-cover rounded-badge'>
            <div className='h-[70vh] p-16 opacity-85 bg-gradient-to-r from-[#020043] via-[#0200438b] to-transparent rounded-badge flex justify-between items-center'>
                <div className='w-[30%]'>
                    <h2 className='text-white text-6xl'>Get Your First Appointment at 50% Off!</h2>
                    <div className='py-6 flex gap-3'>
                        <button className='btn btn-warning'>Appointment<MdArrowOutward size={20} /></button>
                        <button className='btn btn-outline border-white text-white'>Learn More<MdArrowOutward size={20} /></button>
                    </div>
                </div>
                <div className='h-full'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Offer;