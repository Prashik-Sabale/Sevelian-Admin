import React, { useState, useEffect } from "react";
import axios from "axios";

const OrdersManagement = () => {

    const data = [
        {
            "id": 1,
            "customerName": "John Doe",
            "date": "2024-12-16",
            "total": 120.5,
            "status": "Pending"
        },
        {
            "id": 2,
            "customerName": "Jane Smith",
            "date": "2024-12-15",
            "total": 95.0,
            "status": "Shipped"
        }
    ];


    const [orders, setOrders] = useState([]);
    const [filter, setFilter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch orders from the backend
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/orders")
            .then((response) => setOrders(response.data))
            .catch((error) => console.error("Error fetching orders:", error));
    }, []);

    // Handle order status update
    const updateOrderStatus = (orderId, status) => {
        axios
            .put(`http://localhost:8080/api/orders/${orderId}`, { status })
            .then(() => {
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order.id === orderId ? { ...order, status } : order
                    )
                );
                alert("Order status updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating order status:", error);
                alert("Failed to update order status.");
            });
    };

    // Filter and search logic
    const filteredOrders = orders.filter(
        (order) =>
            (filter === "" || order.status === filter) &&
            (searchTerm === "" ||
                order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.id.toString().includes(searchTerm))
    );

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Orders Management</h2>

            {/* Filters and Search */}
            <div className="flex flex-wrap gap-4 mb-6">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="">All Orders</option>
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
                <input
                    type="text"
                    placeholder="Search by customer or order ID"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-1/3"
                />
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 border-b text-left">Order ID</th>
                            <th className="p-3 border-b text-left">Customer</th>
                            <th className="p-3 border-b text-left">Date</th>
                            <th className="p-3 border-b text-left">Total</th>
                            <th className="p-3 border-b text-left">Status</th>
                            <th className="p-3 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map((order) => (
                            <tr key={order.id} className="border-b">
                                <td className="p-3">{order.id}</td>
                                <td className="p-3">{order.customerName}</td>
                                <td className="p-3">{new Date(order.date).toLocaleDateString()}</td>
                                <td className="p-3">${order.total.toFixed(2)}</td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 rounded text-sm ${order.status === "Pending"
                                            ? "bg-yellow-200 text-yellow-700"
                                            : order.status === "Processing"
                                                ? "bg-blue-200 text-blue-700"
                                                : order.status === "Shipped"
                                                    ? "bg-indigo-200 text-indigo-700"
                                                    : order.status === "Delivered"
                                                        ? "bg-green-200 text-green-700"
                                                        : "bg-red-200 text-red-700"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <select
                                        value={order.status}
                                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                                        className="p-2 border border-gray-300 rounded"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Processing">Processing</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* No Orders Message */}
            {filteredOrders.length === 0 && (
                <div className="mt-6 text-gray-500 text-center">No orders found.</div>
            )}
        </div>
    );
};

export default OrdersManagement;
