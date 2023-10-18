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
                <Banner></Banner>
            </div>
            <div className="w-10/12 m-auto grid grid-cols-2 my-10">
                {
                    brandProducts.map(product => <BrandProducts key={product._id} product={product}></BrandProducts>)

                }
            </div>
        </div>
    );
};

export default Brands;