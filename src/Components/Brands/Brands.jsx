import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProducts from "./BrandProducts";
import ProductBanner from "./ProductBanner";

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
                        <ProductBanner></ProductBanner>
                        <div className="w-10/12 m-auto grid lg:grid-cols-3 md:grid-cols-2 my-20 gap-20">
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