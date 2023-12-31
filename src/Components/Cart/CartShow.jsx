import Swal from "sweetalert2";

const CartShow = ({ cartProduct, setCartProducts, cartProducts }) => {

    const { _id, addedProductName, addedProductType, addedProductPrice, addedProductPhoto } = cartProduct || {};

    const handleRemove = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://future-station-server.vercel.app/cartProduct/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            console.log("deleted");
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = cartProducts.filter(product => product._id !== _id);
                            setCartProducts(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <ul className="flex flex-col divide-y di  divide-gray-700 border-b-2 border-gray-300 p-4 rounded-md">
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex  justify-center items-center w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={addedProductPhoto} alt="Polaroid camera" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex flex-wrap justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className=" text-xl md:text-3xl lg:text-4xl sm:text-2xl font-semibold leadi sm:pr-8">{addedProductName}</h3>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl dark:text-gray-400">{addedProductType}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-left"><strong className="text-pink-500">{addedProductPrice}.00$</strong> </p>                                </div>
                            </div>
                            <div className=" flex flex-wrap  text-sm gap-4 ">
                                <button onClick={() => handleRemove(_id)} type="button" className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline flex items-center px-4 py-1 pl-0 space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                        <rect width="32" height="200" x="168" y="216"></rect>
                                        <rect width="32" height="200" x="240" y="216"></rect>
                                        <rect width="32" height="200" x="312" y="216"></rect>
                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                    </svg>
                                    <span>Remove</span>
                                </button>
                                <button type="button" className="btn-xs sm:btn-sm md:btn-md lg:btn-lg btn btn-outline btn-success flex items-center px-2 py-1 space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                    </svg>
                                    <span>Details</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>


        </div>
    );
};

export default CartShow;