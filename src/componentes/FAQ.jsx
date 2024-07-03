const FAQ = () => {
    return (
        <div>
            <section className="">
                <div className="container px-6 pb-12 mx-auto">
                    <div className='space-y-5 pb-10'>
                        <button className='btn btn-outline rounded-full'>Faq</button>
                        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">Frequently asked questions</h1>
                    </div>

                    <div className='flex flex-col justify-center gap-3'>
                        <div className="collapse collapse-arrow bg-base-300">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium"> What are your office hours?</div>
                            <div className="collapse-content">
                                <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">How can I schedule an appointment?</div>
                            <div className="collapse-content">
                                <p>Schedule an appointment online via our website or by calling our customer service hotline.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
                            <div className="collapse-content">
                                <p>Yes, we accept a variety of insurance plans. Check our website or contact us for specific details.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">What should I bring to my appointment?</div>
                            <div className="collapse-content">
                                <p>Please bring a valid ID, insurance card, and any relevant medical records or current medications.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Do you offer telemedicine appointments?</div>
                            <div className="collapse-content">
                                <p>Yes, we provide telemedicine appointments for various medical services. Schedule online or call our office.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;