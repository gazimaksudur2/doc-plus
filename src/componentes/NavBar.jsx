import { MdArrowOutward } from "react-icons/md";
import logo from '../assets/logo dark.png'

const NavBar = () => {
    return (
        <div className='w-[90%] mx-auto pb-6 flex items-center justify-between'>
            <img className='w-20 object-cover' src={logo} alt="logo" />
            <ul className='flex items-center gap-4'>
                <li>Home</li>
                <li>Services</li>
                <li>Blog</li>
                <li>About us</li>
            </ul>
            <button className='btn btn-outline'>Appointment<MdArrowOutward size={20}/></button>
        </div>
    );
};

export default NavBar;