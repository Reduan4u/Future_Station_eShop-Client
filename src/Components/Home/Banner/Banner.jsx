import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (

        <div className=" w-10/12 m-auto  mt-10 mb-20">

            <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {/* <div className="carousel w-full lg:col-span-4 md:col-span-4 sm:col-span-6 row-span-2"> */}


                {/* <div className='mb-10 lg:col-span-4 md:col-span-4 sm:col-span-6 row-span-2'>
                    <AutoplaySlider play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={200000} >
                        <div  data-src="https://i.ibb.co/xM56VMz/banner-0.webp" >
                            <p>hello</p>
                        </div>

                        <div data-src="https://i.ibb.co/52FrqmN/banner-1.webp" >

                        </div>
                        <div data-src="https://i.ibb.co/LzpJbqV/banner-2.webp" >

                        </div>
                    </AutoplaySlider>
                </div> */}

                <div className='mb-10 lg:col-span-4 md:col-span-4 sm:col-span-6 row-span-2'>
                    <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>

                        {/*  https://i.ibb.co/52FrqmN/banner-1.webp
                        https://i.ibb.co/LzpJbqV/banner-2.webp */}


                        <div className="relative mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/52FrqmN/banner-1.webp)', backgroundSize: '100%' }}>
                            <div className="pl-10 text-left text-neutral-content">
                                <p className="text-left text-base sm:text-md md:text-lg lg:text-xl font-medium text-black">Sale Offer <strong className='text-red-600'>-20% Off</strong> This Week</p>
                                <h1 className="mb-5 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">Phantom 4 Pro+
                                    Obsidian</h1>
                                <p className="text-left text-base sm:text-md md:text-lg lg:text-xl  font-medium text-black">Starting at <strong className='text-red-600 text-4xl'>$499.00</strong></p>

                                <button style={{ backgroundColor: "#FF444A" }} className="mt-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg btn text-white  active:scale-95 transform transition-transform duration-200 ease-in-out">Shop Now</button>
                            </div>
                        </div>

                        <div className="relative mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/LzpJbqV/banner-2.webp)', backgroundSize: '100%' }}>
                            <div className="pl-10 text-left text-neutral-content">
                                <p className="text-left text-base sm:text-md md:text-lg lg:text-xl font-medium text-black">Sale Offer <strong className='text-red-600'>-20% Off</strong> This Week</p>
                                <h1 className="mb-5 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">Samsung
                                    Galaxy S9 | S9+</h1>
                                <p className="text-left text-base sm:text-md md:text-lg lg:text-xl  font-medium text-black">Starting at <strong className='text-red-600 text-4xl'>$399.00</strong></p>

                                <button style={{ backgroundColor: "#FF444A" }} className=" mt-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg btn text-white  active:scale-95 transform transition-transform duration-200 ease-in-out">Shop Now</button>
                            </div>
                        </div>

                        <div className="relative mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/xM56VMz/banner-0.webp)', backgroundSize: '100%' }}>
                            <div className="pl-10 text-left text-neutral-content">
                                <p className="text-left text-base sm:text-md md:text-lg lg:text-xl font-medium text-black">Sale Offer <strong className='text-red-600'>-10% Off</strong> This Week</p>
                                <h1 className="mb-5 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">Work Desk
                                    Studio 2018</h1>
                                <p className="text-left text-base sm:text-md md:text-lg lg:text-xl  font-medium text-black">Starting at <strong className='text-red-600 text-4xl'>$1299.00</strong></p>

                                <button style={{ backgroundColor: "#FF444A" }} className="mt-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg btn text-white  active:scale-95 transform transition-transform duration-200 ease-in-out">Shop Now</button>
                            </div>
                        </div>
                    </AutoplaySlider>
                </div>

                <div className="hidden md:flex lg:flex flex-col row-span-1 lg:col-span-2 md:col-span-2 sm:col-span-4 " data-aos="zoom-in" >
                    <img className="h-full" src="https://i.ibb.co/MDpQN29/banner-3.webp" alt="" />
                    <div className="absolute py-6 px-4">
                        <p className="text-blue-800 font-normal font-sans text-xs sm:text-xm md:text-base lg:text-lg">AI Technology 2.4   </p>
                        <h1 className=" pt-2 pb-6 font-bold font-sans text-black text-base sm:text-lg md:text-xl lg:text-2xl">Smartphone Meizu M5
                            <br />  New Color Green
                        </h1>
                        <p className='text-red-600 text-lg'>Sale <strong>25% Off</strong></p>
                    </div>
                </div>
                <div className=" hidden lg:flex md:flex flex-col row-span-1 lg:col-span-2 md:col-span-2 sm:col-span-4 " data-aos="zoom-in" >
                    <img className="h-full" src="https://i.ibb.co/XCvTSfj/banner-4.webp" alt="" />
                    <div className="absolute py-6 px-4">
                        <p className="text-blue-800 font-normal font-sans text-xs sm:text-xm md:text-base lg:text-lg">AI Technology 2.4   </p>
                        <h1 className=" pt-2 pb-6 font-bold font-sans text-black text-base sm:text-lg md:text-xl lg:text-2xl">PlayStation VR Plus <br />   Network 2023
                        </h1>
                        <p className='text-red-600 text-lg'>Sale <strong>20% Off</strong></p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-center p-4 bg-sky-900 text-white mt-10 text-xs sm:text-sm md:text-base lg:text-lg"><strong>Gift Speical:</strong> Gift every single day on Weekends - New Coupon code  <strong className="text-yellow-400">LIMUPASALEOFF</strong>
                </h1>
            </div>

        </div >
    );
};

export default Banner;