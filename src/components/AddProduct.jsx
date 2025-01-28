import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        slug: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        // shortdsc: "",
        discount: "",

    });
    const [image, setImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("imageFile", image);
        formData.append(
            "product",
            new Blob([JSON.stringify(product)], { type: "application/json" })
        );

        axios
            .post("http://localhost:5000/api/getproduct", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                // console.log("Product added successfully:", response.data);
                toast.success('Product added successfully!', response.data)
            })
            .catch((error) => {
                // console.error("Error adding product:", error);
                toast.error("Error adding product:", error)
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                value={product.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        {/* Slug Field */}
                        {/* <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Short Discription
                            </label>
                            <input
                                type="text"
                                name="shortdsc"
                                placeholder="Enter shortdesc"
                                value={product.shortdsc}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div> */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Discription
                            </label>
                            <input
                                type="text"
                                name="description"
                                placeholder="Enter description"
                                value={product.description}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />

                            {/* <label className="block text-sm font-medium text-gray-700">
                                Discription
                            </label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea> */}

                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Slug
                            </label>
                            <input
                                type="text"
                                name="slug"
                                placeholder="Enter your Slug"
                                value={product.slug}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    {/* Description Field */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Price Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Eg: $1000"
                                value={product.price}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        {/* Category Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                name="category"
                                value={product.category}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select category</option>
                                <option value="Shirts">Shirts</option>
                                <option value="T-Shirts">T-Shirts</option>

                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Stock Quantity Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Stock
                            </label>
                            <input
                                type="number"
                                name="stock"
                                placeholder="Stock Remaining"
                                value={product.stock}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        {/* Discount */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Discount
                            </label>
                            <input
                                type="number"
                                name="discount"
                                placeholder="Eg: 20%"
                                value={product.discount}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        {/* Image Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Image
                            </label>
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
