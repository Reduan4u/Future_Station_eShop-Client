
const Discount = () => {
    return (
        <div className="w-10/12 m-auto my-10">

            <div className="rounded-lg" style={{
                backgroundImage: 'url(https://i.ibb.co/pzsKjKL/banner3.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center', // Center the background image
                minHeight: '250px', // Set your desired minimum height here
                display: 'flex',
                alignItems: 'center', // Vertically center the content
            }}>
                <div className=" text-left text-neutral-content">
                    <div className="text-black p-3 sm:p-8 md:p-12 lg:p-16 ">
                        <p className="text-sm sm:text-sm md:text-base lg:text-lg">Sale Offer <strong className="text-red-600 font-extrabold">-20% Off</strong> This Week
                        </p>
                        <h1 className="mb-1 sm:mb-2 md:mb-3 lg:mb-5 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">Featured Products <br />Apple Accessories 2023</h1>
                        <p className="mb-1 sm:mb-2 md:mb-3 lg:mb-5 text-sm sm:text-sm md:text-base lg:text-lg">Starting at <strong className="text-red-600 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">$1299.00</strong></p>
                        <button className="btn btn-warning hover:bg-red-500 btn-xs sm:btn-sm md:btn-md lg:btn-lg ">Shopping Now</button>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Discount;