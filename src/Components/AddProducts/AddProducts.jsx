import Swal from "sweetalert2";

const AddProducts = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const addedProductName = form.productName.value;
        const addedBrandName = form.brandName.value;
        const addedProductType = form.productType.value;
        const addedProductPrice = form.productPrice.value;
        const addedProductRating = form.productRating.value;
        const addedProductPhoto = form.productPhoto.value;
        const addedProductDescription = form.productDescription.value;

        const newProduct = { addedProductName, addedBrandName, addedProductType, addedProductPrice, addedProductRating, addedProductPhoto, addedProductDescription };
        //console.log(newProduct);

        fetch('https://future-station-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
    }

    return (
        <div>

            <div className="max-w-4xl p-6 mx-auto bg-base-300 rounded-md shadow-md  mt-20 mb-20">
                <h2 className=" font-semibold capitalize text-center text-4xl mb-10">ADD PRODUCTS</h2>

                <form onSubmit={handleAddProduct}>
                    <div className="  ">
                        <div className="">
                            <label className=" font-bold">Product Name</label>
                            <input id="drop" name="productName" placeholder=" Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring" />
                        </div>
                        <div className="">
                            <label className="  font-bold " >Brand Name</label>
                            <input id="" type="text" name="brandName" placeholder=" Brand" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500  focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Product Type</label>
                            <input id="" type="text" placeholder=" Type" name="productType" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className=" font-bold " >Product Price</label>
                            <input id="" type="number" name="productPrice" placeholder="Price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Product Rating</label>
                            <input id="" type="number" name="productRating" placeholder="Rating" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className=" font-bold " >Product Photo</label>
                            <input id="" type="text" name="productPhoto" placeholder="Photo URL" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>
                        <div className="col-span-2">
                            <label className=" font-bold " >Product Description</label>
                            <textarea className="h-40 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" name="productDescription" placeholder="Short Description about the Product"></textarea>

                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-2 leading-5 text-black font-bold transition-colors bg-green-400 duration-200 transform  rounded-md hover:bg-pink-400 focus:outline-none focus:bg-red-4 00 uppercase w-full">Add Product</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProducts;