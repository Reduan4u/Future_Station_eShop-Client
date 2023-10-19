import { Link } from "react-router-dom";

const BrandProducts = ({ product }) => {
    const { _id, addedProductName, addedBrandName, addedProductType, addedProductPrice, addedProductRating, addedProductPhoto } = product || {};

    //console.log(product);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={addedProductPhoto} /></figure>
            <div className="card-body">
                <h2 className="card-title">{addedProductName}
                </h2>
                <div className="flex justify-between">
                    <h2>Price: <strong>{addedProductPrice}.00$</strong></h2>
                    <h2>Rating: <strong>{addedProductRating}/10</strong></h2>
                </div>
                <div className="flex justify-between">
                    <h2>Brand: <strong>{addedBrandName}</strong></h2>
                    <h2>Product Type: <strong>{addedProductType}</strong></h2>
                </div>
                <div className="flex justify-between gap-2">
                    <Link to={`/${addedBrandName}/${addedProductName}/${_id}`}>
                        <button className="btn btn-outline btn-info ">Details</button>
                    </Link>
                    <Link to={`/${addedBrandName}/${_id}/update`}>
                        <button className="btn btn-outline btn-success">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;