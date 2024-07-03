import banner_img from '../assets/Rectangle 5.png'
import chart from '../assets/Group 12.png'
import coin from '../assets/Group.png'
import note from '../assets/contract (1) 1.png'
import camera from '../assets/Group (1).png'
import star from '../assets/fi-sr-star.png'

const Banner = () => {
    return (
        <div>
            <img className='w-full pb-8' src={banner_img} alt="banner img" />
            <div className='h-[40vh] grid grid-cols-5 grid-rows-10 gap-8'>
                <div className='row-span-10 border-2 border-gray-200 bg-white rounded-2xl flex flex-col justify-evenly items-center'>
                    <div className='w-full px-6 space-y-2'>
                        <h2 className='text-[#020043] text-3xl font-semibold'>90%</h2>
                        <p className='text-[#02004390] text-sm font-medium'>Patient satisfaction rate, reflecting our commitment.</p>
                    </div>
                    <img src={chart} alt="chart_img" />
                </div>
                <div className='row-span-4 col-span-3 flex items-center justify-center'>
                    <h2 className='w-[50%] text-5xl font-bold text-center'>Comprehensive Care for Every Patient</h2>
                </div>
                <div className='row-span-10 border-2 border-gray-200 bg-white rounded-2xl flex flex-col justify-evenly items-center'>
                    <div className='w-full px-6 space-y-2'>
                        <h2 className='text-[#020043] text-3xl font-semibold'>50+</h2>
                        <p className='text-[#02004390] text-sm font-medium'>Free lession video for patient</p>
                    </div>
                    <img src={camera} alt="camera_img" />
                </div>
                <div className='row-span-6 px-6 border-2 border-gray-200 bg-white rounded-2xl flex flex-col justify-evenly items-center'>
                    <div className='w-full space-y-2'>
                        <h2 className='text-[#020043] text-3xl font-semibold'>500+</h2>
                        <p className='text-[#02004390] text-sm font-medium'>Board-certified doctors</p>
                    </div>
                    <div className='w-full flex justify-end'>
                        <img className='w-14' src={note} alt="note_img" />
                    </div>
                </div>
                <div className='row-span-1'></div>
                <div className='row-span-6 px-6 border-2 border-gray-200 bg-white rounded-2xl flex flex-col justify-evenly items-center'>
                    <div className='w-full space-y-2'>
                        <h2 className='text-[#020043] text-3xl font-semibold'>$5000</h2>
                        <p className='text-[#02004390] text-sm font-medium'>Money spend for poor patient</p>
                    </div>
                    <div className='w-full flex justify-end'>
                        <img className='w-14' src={coin} alt="coin_img" />
                    </div>
                </div>
                <div className='row-span-5 border-2 px-6 border-gray-200 bg-white rounded-2xl flex flex-col justify-evenly items-center'>
                    <div className='w-full space-y-2'>
                        <h2 className='text-[#020043] text-3xl font-semibold flex gap-4'>4.8 <img src={star} alt="star_img" /></h2>
                        <p className='text-[#02004390] text-sm font-medium'>Over 20,000 Patient</p>
                    </div>
                    <div className='w-full flex justify-start'>
                        <div className="flex items-center">
                            <img className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt="" />
                            <img className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80" alt="" />
                            <img className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80" alt="" />
                            <img className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80" alt="" />
                            <img className="object-cover w-8 h-8 -mx-1 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=80" alt="" />
                            <div className="font-medium bg-neutral text-neutral-content w-8 h-8 rounded-full ring ring-white">
                                {/* <div className="bg-neutral text-neutral-content w-12"> */}
                                    <span>+99</span>
                                {/* </div> */}
                            </div>
                        </div>
                        {/* <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content w-12">
                                    <span>+99</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;