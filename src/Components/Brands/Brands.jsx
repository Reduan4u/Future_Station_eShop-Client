import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProducts from "./BrandProducts";
import Banner from "../Home/Banner/Banner";

const Brands = () => {
    const [brandProducts, setBrandProducts] = useState([]);
    const { brandName } = useParams();
    const products = useLoaderData();
    useEffect(() => {
        const filteredProducts = products.filter(brandProducts => brandProducts.addedBrandName == brandName);
        setBrandProducts(filteredProducts);
    }, [brandName, products])


    return (
        <div>

            <div>
                {brandProducts.length > 0 ?
                    <div>
                        <Banner></Banner>
                        <div className="w-10/12 m-auto grid grid-cols-3 my-10 gap-20">
                            {brandProducts.map(product => <BrandProducts key={product._id} product={product}></BrandProducts>)}
                        </div>
                    </div>
                    :
                    (<h1 className="text-5xl col-span-3 my-20 text-center">Product Available Soon...</h1>
                    )
                }
            </div>
        </div>
    );
};

export default Brands;