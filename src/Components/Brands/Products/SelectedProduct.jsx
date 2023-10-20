import Swal from "sweetalert2";

const SelectedProduct = ({ products }) => {
    const { addedProductName, addedBrandName, addedProductType, addedProductPrice, addedProductRating, addedProductPhoto, addedProductDescription } = products || {};
    const selectedProduct = { addedProductName, addedBrandName, addedProductType, addedProductPrice, addedProductRating, addedProductPhoto, addedProductDescription }
    console.log(selectedProduct);

    const handleAddToCard = event => {
        event.preventDefault();
        console.log(products);



        //Send data to SERVER

        fetch('https://future-station-server.vercel.app/cartProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Added to Cart Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

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


                <form onSubmit={handleAddToCard} className="card-actions justify-end">
                    <button className="btn btn-secondary">Add to Cart</button>
                </form>
            </div>
        </div>
    );
};

export default SelectedProduct;