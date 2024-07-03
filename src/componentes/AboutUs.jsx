

const AboutUs = () => {
    return (
        <div className='px-6 py-16 mb-10 w-[98%] mx-auto flex flex-col justify-between'>
            <div className='space-y-5'>
                <button className='btn btn-outline rounded-full'>Testimonial</button>
                <h2 className='capitalize'>What they say about us</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-3 xl:mt-10">
                <div className="p-6 bg-gray-100 rounded-lg md:p-8">
                    <h3></h3>
                    <p className="leading-loose text-gray-500">
                        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                    </p>

                    <div className="flex items-center mt-6">
                        <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="font-semibold text-blue-500">Robbert</h1>
                            <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-gray-100 rounded-lg md:p-8">
                    <h3></h3>
                    <p className="leading-loose text-gray-500">
                        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                    </p>

                    <div className="flex items-center mt-6">
                        <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="font-semibold text-blue-500">Robbert</h1>
                            <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-gray-100 rounded-lg md:p-8">
                    <h3></h3>
                    <p className="leading-loose text-gray-500">
                        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                    </p>

                    <div className="flex items-center mt-6">
                        <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="font-semibold text-blue-500">Robbert</h1>
                            <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
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