import { useContext, useEffect, useState } from "react";
import CartShow from "./CartShow";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Cart = () => {
    const loadedProducts = useLoaderData();
    const { user } = useContext(AuthContext);
    const email = user.email;

    useEffect(() => {
        const filteredCartProducts = loadedProducts.filter(filteredProduct => filteredProduct.email == email);
        setCartProducts(filteredCartProducts);
    }, [loadedProducts, email])
    const [cartProducts, setCartProducts] = useState(loadedProducts);


    return (
        <div className="w-2/3 m-auto my-10 bg-base-300">
            <div className="flex flex-col p-6 space-y-4 sm:p-10 rounded-lg">
                <h2 className="text-5xl text-center  font-semibold border-b-2 border-gray-300 pb-4">Your Cart</h2>
                {
                    cartProducts.map(cartProduct => <CartShow
                        key={cartProduct._id}
                        cartProduct={cartProduct}
                        cartProducts={cartProducts}
                        setCartProducts={setCartProducts}

                    ></CartShow>)
                }
                <div className="space-y-1 text-right pt-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-base text-right">Total amount:
                        <strong className="text-pink-500 font-bold"> 000.00$</strong>
                    </p>
                    <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to="/brands"><button type="button" className="btn px-6 py-2 border rounded-md dark:border-violet-400">Back
                        <span className="sr-only sm:not-sr-only"> to shop</span>
                    </button></Link>
                    <Link><button type="button" className="btn px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;