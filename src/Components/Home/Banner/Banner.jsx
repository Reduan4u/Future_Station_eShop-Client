
const Banner = () => {
    return (

        <div className=" w-10/12 m-auto  mt-10 mb-20">

            <div className="grid grid-cols-3 gap-10">
                <div className="carousel w-full col-span-2 row-span-2">
                    {/* Slide 01 */}
                    <div id="slide1" className="carousel-item relative hero " style={{ backgroundImage: 'url(https://i.ibb.co/cXThPD1/banner-0.webp)' }}>
                        <div className="flex flex-col " data-aos="zoom-in" >
                            <div className="absolute top-40 left-20">
                                <p >Sale Offer <strong>Black Friday</strong> This Week
                                </p>
                                <h1 className=" text-3xl sm:text-4xl md:text-4xl lg:text-3xl font-bold text-black">Samsung <br />
                                    Galaxy S9 | S9+</h1>
                            </div>
                            <div className="absolute bottom-32 left-20 ">
                                <p className="mb-5 text-base sm:text-md md:text-lg lg:text-3xl font-semibold text-black">Starting at <strong>$1849.00</strong>

                                </p>
                                <button data-aos="zoom-in" style={{ backgroundColor: "#FF444A" }} className="text-xl font-semibold border-none text-white py-3 rounded-lg active:scale-95 transform transition-transform duration-200 ease-in-out">Shop Now</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* Slide 02 */}
                    <div id="slide2" className="carousel-item relative hero " style={{ backgroundImage: 'url(https://i.ibb.co/vPkQW1F/banner-1.webp)' }}>
                        <div className="flex flex-col " data-aos="zoom-in" >
                            <div className="absolute top-40 left-20">
                                <p >Sale Offer <strong>Black Friday</strong> This Week
                                </p>
                                <h1 className=" text-3xl sm:text-4xl md:text-4xl lg:text-3xl font-bold text-black">Samsung <br />
                                    Galaxy S9 | S9+</h1>
                            </div>
                            <div className="absolute bottom-32 left-20 ">
                                <p className="mb-5 text-base sm:text-md md:text-lg lg:text-3xl font-semibold text-black">Starting at <strong>$1849.00</strong>

                                </p>
                                <button data-aos="zoom-in" style={{ backgroundColor: "#FF444A" }} className="text-xl font-semibold border-none text-white py-3 rounded-lg active:scale-95 transform transition-transform duration-200 ease-in-out">Shop Now</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* Slide 03 */}
                    <div id="slide3" className="carousel-item relative hero " style={{ backgroundImage: 'url(https://i.ibb.co/1LM1RNM/banner-2.webp)' }}>
                        <div className="flex flex-col " data-aos="zoom-in" >
                            <div className="absolute top-40 left-20">
                                <p >Sale Offer <strong>Black Friday</strong> This Week
                                </p>
                                <h1 className=" text-3xl sm:text-4xl md:text-4xl lg:text-3xl font-bold text-black">Samsung <br />
                                    Galaxy S9 | S9+</h1>
                            </div>
                            <div className="absolute bottom-32 left-20 ">
                                <p className="mb-5 text-base sm:text-md md:text-lg lg:text-3xl font-semibold text-black">Starting at <strong>$1849.00</strong>

                                </p>
                                <button data-aos="zoom-in" style={{ backgroundColor: "#FF444A" }} className="text-xl font-semibold border-none text-white py-3 rounded-lg active:scale-95 transform transition-transform duration-200 ease-in-out">Shop Now</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col " data-aos="zoom-in" >
                    <img className="h-full" src="https://i.ibb.co/MDpQN29/banner-3.webp
" alt="" />
                    <div className="absolute py-6 px-4">
                        <p >Full HD Display  </p>
                        <h1 className=" pt-2 pb-6 text-3xl sm:text-4xl md:text-4xl lg:text-3xl font-bold text-black">Smartphone Meizu M5
                            <br />   Network 2023
                        </h1>
                        <p>Sale 20% Off</p>
                    </div>
                </div>

                <div className="flex flex-col " data-aos="zoom-in" >
                    <img className="h-full" src="https://i.ibb.co/XCvTSfj/banner-4.webp" alt="" />
                    <div className="absolute py-6 px-4">
                        <p >AI Technology 2.4   </p>
                        <h1 className=" pt-2 pb-6 text-3xl sm:text-4xl md:text-4xl lg:text-3xl font-bold text-black">PlayStation VR Plus <br />   Network 2023
                        </h1>
                        <p>Sale 20% Off</p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-center py-4 bg-sky-900 text-white mt-10">Gift Speical: Gift every single day on Weekends - New Coupon code  <strong className="text-yellow-400">LIMUPASALEOFF</strong>
                </h1>
            </div>

        </div >
    );
};

export default Banner;