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
                <h2 className="card-title  text-xl md:text-3xl lg:text-4xl sm:text-2xl ">{addedProductName}</h2>
                <p className=" text-base sm:text-lg md:text-xl lg:text-2xl  ">A {addedProductType} by <strong>{addedBrandName}</strong></p>
                <p className=" text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">About: <br /><span className="text-sm sm:text-base md:text-lg lg:text-xl font-thin">{addedProductDescription}</span></p>

                <div className="flex justify-between items-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-left">Price: <strong className="text-pink-500">{addedProductPrice}.00$</strong> </p>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-left">Rating: <strong className="text-yellow-400">{addedProductRating}/10</strong> </p>
                </div>


                <form onSubmit={handleAddToCard} className="card-actions justify-end">
                    <button className="btn btn-secondary">Add to Cart</button>
                </form>
            </div>
        </div>
    );
};

export default SelectedProduct;