import React from "react";
// import Table from "../Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]); // State to store products
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        // Fetch data using Axios
        const fetchProducts = async () => {
            try {
                setLoading(true); // Start loading
                const response = await axios.get("http://localhost:5000/api/products"); // Replace with your API URL
                setProducts(response.data); // Store fetched data in state
            } catch (err) {
                setError(err.message); // Handle errors
            } finally {
                setLoading(false); // Stop loading spinner
            }
        };

        fetchProducts();
    }, []); // Empty dependency array ensures it runs once on mount

    // Show a loading spinner
    if (loading) {
        return <div className=" text-white">Loading...</div>;
    }

    // Handle errors
    if (error) {
        return <div className=" text-white">Error: {error}</div>;
    }

    return (
        <div>
            <h2 className="text-xl text-white font-bold mb-6">Products</h2>
            <button

                className="mb-4 bg-indigo-600 text-white px-4 py-2 rounded-2xl"
            >
                <Link to="/add-product">Add Product</Link>
            </button>
            <table className="min-w-full border-collapse border border-gray-200 shadow-lg">
                <thead className="bg-gray-900 text-white ">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Price</th>
                        <th className="border border-gray-300 px-4 py-2">Stock</th>
                        <th className="border border-gray-300 px-4 py-2">Category</th>
                        <th className="border border-gray-300 px-4 py-2">Act</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? (
                        <tr>
                            <td
                                colSpan="4"
                                className="text-center px-4 py-2 border border-gray-300"
                            >
                                No products available.
                            </td>
                        </tr>
                    ) : (
                        products.map((product) => (
                            <tr key={product.id} className=" text-white">
                                <td className="border border-gray-300 text-center px-4 py-2">
                                    {product.id}
                                </td>
                                <td className="border border-gray-300 text-center px-4 py-2">
                                    {product.name}
                                </td>
                                <td className="border border-gray-300 text-center px-4 py-2">
                                    ₹{product.price}
                                </td>
                                <td className="border border-gray-300 text-center px-4 py-2">
                                    {product.stock}
                                </td>
                                <td className="border border-gray-300 px-4 text-center py-2">
                                    {product.category}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button type="button" class="font-medium text-indigo-600 dark:text-indigo-600 hover:underline">Edit</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
        // <div>
        //     <h2 className="text-xl font-bold mb-6">Products</h2>
        //     <button className="mb-4 bg-black text-white px-4 py-2 rounded-2xl">
        //         <Link to="/add-product">Add Product</Link>
        //     </button>
        //     {/* <Table data={products} /> */}
        // </div>
    );
};

export default Products;
