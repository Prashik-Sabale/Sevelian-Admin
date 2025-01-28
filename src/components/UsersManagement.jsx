import React, { useState, useEffect } from "react";
import axios from "axios";
import { data } from "react-router-dom";

const UsersManagement = () => {


    const [users, setUsers] = useState([]); // State to store products
    // const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        // Fetch data using Axios
        const fetchUsers = async () => {
            try {
                setLoading(true); // Start loading
                const response = await axios.get("http://localhost:5000/admin/getAllUsers"); // Replace with your API URL
                console.log(response.id);

                setUsers(response.data); // Store fetched data in state
            } catch (err) {
                setError(err.message); // Handle errors
            } finally {
                setLoading(false); // Stop loading spinner
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures it runs once on mount


    // Show a loading spinner
    if (loading) {
        return <div className=" text-white">Loading...</div>;
    }

    // Handle errors
    if (error) {
        return <div className=" text-white">Error: {error}</div>;
    }



    // **********************************************************************
    // const [users, setUsers] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");

    // // Fetch users from the backend
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:5000/admin/getAllUsers")
    //         .then((response) => setUsers(response.data))
    //         .catch((error) => console.error("Error fetching users:", error));
    // }, []);

    // Enable or disable a user account
    // const toggleUserStatus = (userId, isActive) => {
    //     axios
    //         .put(`http://localhost:8080/api/users/${userId}/status`, { isActive })
    //         .then(() => {
    //             setUsers((prevUsers) =>
    //                 prevUsers.map((user) =>
    //                     user.id === userId ? { ...user, isActive } : user
    //                 )
    //             );
    //             alert(`User ${isActive ? "enabled" : "disabled"} successfully!`);
    //         })
    //         .catch((error) => {
    //             console.error("Error updating user status:", error);
    //             alert("Failed to update user status.");
    //         });
    // };

    // Search users by name or email
    // const filteredUsers = users.filter(
    //     (user) =>
    //         users.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         users.email.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Users Management</h2>

            {/* Search Bar */}
            {/* <div className="flex flex-wrap gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-1/3"
                />
            </div> */}

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 border-b text-left">User ID</th>
                            <th className="p-3 border-b text-left">Name</th>
                            <th className="p-3 border-b text-left">Email</th>
                            <th className="p-3 border-b text-left">Role</th>
                            <th className="p-3 border-b text-left">Status</th>
                            <th className="p-3 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-3">{user.id}</td>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">
                                    <span className="px-2 py-1 rounded bg-blue-200 text-blue-700">
                                        user
                                        {/* {user.role} */}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 rounded text-sm ${user.isActive
                                            ? "bg-green-200 text-green-700"
                                            : "bg-red-200 text-red-700"
                                            }`}
                                    >
                                        {user.isActive ? "Active" : "Disabled"}
                                    </span>
                                </td>
                                <td className="p-3 flex gap-2">
                                    <button
                                        className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                                        onClick={() => alert(`Viewing details for ${users.name}`)}
                                    >
                                        View
                                    </button>
                                    <button
                                        className={`px-3 py-1 rounded hover:bg-opacity-90 ${user.isActive
                                            ? "bg-red-500 text-white"
                                            : "bg-green-500 text-white"
                                            }`}
                                    // onClick={() => toggleUserStatus(user.id, !user.isActive)}
                                    >
                                        {user.isActive ? "Disable" : "Enable"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* No Users Message */}
            {users.length === 0 && (
                <div className="mt-6 text-gray-500 text-center">No users found.</div>
            )}
        </div>
    );
};

export default UsersManagement;
