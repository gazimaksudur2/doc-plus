import banner_img from '../assets/Rectangle 5.png'

const Banner = () => {
    return (
        <div>
            <img className='w-full pb-8' src={banner_img} alt="banner img" />
            <div className='h-[40vh] bg-base-300 grid grid-cols-5 grid-rows-20 gap-4'>
                <div className='row-span-20 bg-green-300'></div>
                <div className='row-span-8 col-span-3 flex items-center justify-center'>
                    <h2 className='w-[45%] text-4xl font-bold text-center'>Comprehensive Care for Every Patient</h2>
                </div>
                <div className='row-span-10 bg-orange-300'></div>
                <div className='row-span-5 bg-blue-300'></div>
                <div className='row-span-10 bg-red-300'></div>
                <div className='row-span-10 bg-amber-300'></div>
            </div>
        </div>
    );
};

export default Banner;