import { Rating } from "@mui/material";


const AboutUs = () => {
    const second_testimonial = "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and";
    return (
        <div className='px-6 py-16 mb-10 w-[98%] mx-auto flex flex-col justify-between'>
            <div className='space-y-5'>
                <button className='btn btn-outline rounded-full'>Testimonial</button>
                <h2 className='capitalize text-[#020043] text-4xl font-semibold'>What they say about us</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-3 xl:mt-10">
                <div className="p-6 space-y-3 bg-gray-100 rounded-lg md:p-8">
                    <h3 className="text-xl font-semibold">Expertise and Compassion Combined</h3>
                    <p className="leading-loose text-gray-500 text-sm">
                        I cannot thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.
                    </p>

                    <div className="flex items-center mt-6">
                        <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="font-semibold">Robbert D, <span className="font-normal text-sm">IT Professional</span></h1>
                            <Rating name="read-only" value={4} readOnly />
                        </div>
                    </div>
                </div>
                <div className="p-6 space-y-3 bg-gray-100 rounded-lg md:p-8">
                    <h3 className="text-xl font-semibold">Life-Saving Care, Life-Changing Experience</h3>
                    <p className="leading-loose text-gray-500 text-sm">
                    My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.
                    </p>

                    <div className="flex items-center mt-6">
                        <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="font-semibold">David S, <span className="font-normal text-sm">Lawyer</span></h1>
                            <Rating name="read-only" value={5} readOnly />
                        </div>
                    </div>
                </div>
                <div className="p-6 space-y-3 bg-gray-100 rounded-lg md:p-8">
                    <h3 className="text-xl font-semibold">A Partner in Health and
                    Wellness</h3>
                    <p className="leading-loose text-gray-500 text-sm">
                        {second_testimonial}
                    </p>

                    <div className="flex items-center mt-6">
                        <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="font-semibold">Michael R, <span className="font-normal text-sm">Business Executive</span></h1>
                            <Rating name="read-only" value={4} readOnly />
                        </div>
                    </div>
                </div>

                {/* <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    
                    <div className="mx-4">
                        <h1 className="font-semibold text-blue-500">Mia Brown</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-300">Marketing Manager at Stech</span>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    );
};

export default AboutUs;