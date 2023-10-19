import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SelectedProduct from "./SelectedProduct";

const Products = () => {

    const [products, setProducts] = useState();
    const { _id } = useParams();
    const allProducts = useLoaderData();

    useEffect(() => {
        const selectedProduct = allProducts.find(products => products._id == _id);
        setProducts(selectedProduct);
    }, [])

    return (
        <div className="my-10 w-10/12 m-auto">
            <SelectedProduct products={products} ></SelectedProduct>
        </div>
    );
};

export default Products;