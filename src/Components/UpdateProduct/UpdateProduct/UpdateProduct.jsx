import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, addedProductName, addedBrandName, addedProductType, addedProductPrice, addedProductRating, addedProductPhoto, addedProductDescription } = product || {};


    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const addedProductName = form.productName.value;
        const addedBrandName = form.brandName.value;
        const addedProductType = form.productType.value;
        const addedProductPrice = form.productPrice.value;
        const addedProductRating = form.productRating.value;
        const addedProductPhoto = form.productPhoto.value;
        const addedProductDescription = form.productDescription.value;

        const updatedProduct = { addedProductName, addedBrandName, addedProductType, addedProductPrice, addedProductRating, addedProductPhoto, addedProductDescription };
        console.log(updatedProduct);

        fetch(`https://future-station-server.vercel.app/cartProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();

                }
            })
    }


    return (

        <div>
            <div className="max-w-4xl p-6 mx-auto bg-blue-950 bg-opacity-85 rounded-md shadow-md  mt-20 mb-20">
                <h2 className=" font-semibold capitalize text-center text-4xl mb-10 text-white">UPDATE {addedProductName}</h2>

                <form onSubmit={handleUpdateProduct}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2  ">
                        <div>
                            <label className="text-gray-100">Product Name</label>
                            <input id="drop" name="productName" placeholder="Name" defaultValue={addedProductName} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" text-gray-100 " >Brand Name</label>
                            <input id="" type="text" name="brandName" placeholder=" Brand" defaultValue={addedBrandName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500  focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-100 " >Product Type</label>
                            <input id="" type="text" placeholder=" Type" defaultValue={addedProductType} name="productType" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-100 " >Product Price</label>
                            <input id="" type="number" name="productPrice" placeholder="Price" defaultValue={addedProductPrice} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-100 " >Product Rating</label>
                            <input id="" type="number" name="productRating" placeholder="Rating" defaultValue={addedProductRating} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-100 " >Product Photo</label>
                            <input id="passwordConfirmation" type="text" name="productPhoto" defaultValue={addedProductPhoto} placeholder="Photo URL" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>
                        <div className="col-span-2">
                            <label className="text-gray-100 " >Product Description</label>
                            <textarea className="textarea w-full textarea-bordered" defaultValue={addedProductDescription} name="productDescription" placeholder="Short Description about the Product"></textarea>

                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-2 leading-5 text-black font-bold transition-colors bg-yellow-400 duration-200 transform rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-4 00 uppercase w-full">Update Product</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateProduct;