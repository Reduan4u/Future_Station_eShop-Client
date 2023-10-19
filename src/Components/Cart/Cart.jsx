import { useEffect, useState } from "react";
import CartShow from "./CartShow";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fetch('https://future-station-server.vercel.app/cartProduct')
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [])

    return (
        <div className="w-1/2 m-auto my-10">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="text-5xl text-center  font-semibold">Your cart</h2>
                {
                    cartProducts.map(cartProduct => <CartShow key={cartProduct._id} cartProduct={cartProduct} ></CartShow>)
                }
                <div className="space-y-1 text-right">
                    <p>Total amount:
                        <span className="font-semibold"> 000.00$</span>
                    </p>
                    <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                        <span className="sr-only sm:not-sr-only">to shop</span>
                    </button>
                    <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;