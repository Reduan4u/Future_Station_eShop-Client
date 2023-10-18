
const BrandProducts = ({ product }) => {
    const { _id, addedProductName, addedBrandName, addedProductType, addedProductPrice, addedProductRating, addedProductPhoto, addedProductDescription } = product || {};

    //console.log(product);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={addedProductPhoto} /></figure>
            <div className="card-body">
                <h2 className="card-title">{addedProductName}
                    <div className="badge badge-secondary">{addedBrandName}</div>
                </h2>
                <p>{addedProductDescription}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;