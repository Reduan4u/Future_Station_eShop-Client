
const Testimonial = () => {
    return (
        <div>

            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">What our clients says</h2>
                            <p className="dark:text-gray-400">Client reviews are important for several reasons, especially in business and service-oriented industries. Here are some our client reviews:

                            </p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>I recently purchased the latest smartphone from this website, and I couldnt be happier with my purchase. The phone arrived quickly, and the performance is outstanding. The camera quality is amazing, and the battery life lasts all day. Overall, a great buy!</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Reduanul haque</p>
                                                <p className="text-sm dark:text-gray-400">Product: Smartphone</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>I bought a new laptop from this tech website, and it is been a solid choice for my work and entertainment needs. The laptop is fast and responsive, and the build quality is top-notch. The battery life could be a bit better. Nevertheless I am satisfied with my purchase.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Neherose Alam</p>
                                                <p className="text-sm dark:text-gray-400">Product: Laptop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>I recently upgraded my gaming rig with a computer from this website, and it's exceeded my expectations. The performance is outstanding, and it runs all the latest games smoothly. The customizable RGB lighting is a nice touch, and the cooling system keeps the temperature in check during long gaming sessions. A fantastic purchase for any gamer!.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Sazzad bin jahid</p>
                                                <p className="text-sm dark:text-gray-400">Product: Computer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>These headphones are a game-changer! The sound quality is exceptional, and the noise-canceling feature works like a charm. They are comfortable to wear for extended periods, and the battery life is impressive. I can not recommend these headphones enough for anyone who loves music or wants to enjoy a peaceful environment.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Sadia karim</p>
                                                <p className="text-sm dark:text-gray-400">Product: Headphones</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Testimonial;