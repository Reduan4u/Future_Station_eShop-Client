
const Discount = () => {
    return (
        <div className="w-10/12 m-auto rounded-lg my-10">

            <div className="bg- bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/pzsKjKL/banner3.webp)' }}>
                <div className=" text-left text-neutral-content">
                    <div className="text-black p-20 ">
                        <p className="">Sale Offer <strong className="text-red-600 text-xl">-20% Off</strong> This Week
                        </p>
                        <h1 className="mb-5 text-5xl font-bold">Featured Products <br />Apple Accessories 2023</h1>
                        <p className="mb-5">Starting at <strong className="text-red-600 text-3xl">$1299.00</strong></p>
                        <button className="btn btn-warning hover:bg-red-500 ">Shopping Now</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Discount;