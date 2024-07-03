import { BiLogoFacebookCircle } from 'react-icons/bi';
import logo from '../assets/logo light.png'
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='w-full bg-[#020043] text-white'>
            <footer className="footer min-h-[40vh] w-[80%] pt-[4%] mx-auto flex justify-between">
                <aside className='space-y-4'>
                    <img src={logo} alt="logo" />
                    <p className='text-sm'>
                        123 Main Street Anytown,
                        <br />
                        USAPostal Code: 12345
                    </p>
                    <p>
                        Support: support@oyolloo.com
                        <br />
                        (Available : 10:00am to 07:00pm)
                    </p>
                </aside>
                <nav>
                    <h6 className="link link-hover">Home</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Success Page</a>
                    <a className="link link-hover">Terms and Conditions</a>
                </nav>
                <nav>
                    <h6 className="link link-hover">Services</h6>
                    <a className="link link-hover">Scheduling</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Patient Portal</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <div className='flex items-center gap-3'>
                        <BiLogoFacebookCircle size={20} className='cursor-pointer' />
                        <FaInstagram size={20} className='cursor-pointer' />
                        <IoLogoLinkedin size={20} className='cursor-pointer' />
                        <FaYoutube size={20} className='cursor-pointer' />
                    </div>
                    <a className="link link-hover">@Docplus {new Date().toISOString().slice(0, 4)}</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;