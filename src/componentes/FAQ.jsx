import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="">
                <div className="container px-6 pb-12 mx-auto">
                    <div className='space-y-5 pb-10'>
                        <button className='btn btn-outline rounded-full'>Testimonial</button>
                        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">Frequently asked questions</h1>
                    </div>

                    <div className='flex flex-col justify-center gap-3'>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;