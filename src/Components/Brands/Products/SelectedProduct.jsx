import React from 'react';

const SelectedProduct = ({ products }) => {
    const { _id, addedProductName, addedBrandName, addedProductType, addedProductPrice, addedProductRating, addedProductPhoto, addedProductDescription } = products || {};
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={addedProductPhoto} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{addedProductName}</h2>
                <p>A {addedProductType} by <strong>{addedBrandName}</strong></p>
                <p>About: </p>
                <p>{addedProductDescription}</p>

                <p>Price: {addedProductPrice} </p>

                <p>Rating: {addedProductRating}/10 </p>


                <div className="card-actions justify-end">
                    <h2></h2>
                    <button className="btn btn-secondary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SelectedProduct;