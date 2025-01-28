import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiCalendar, FiUserPlus, FiList } from "react-icons/fi";

const Sidebar = () => {
    return (
        <div className="bg-slate-900 h-screen w-64 shadow-md">
            <div className="text-2xl text-white font-bold p-6">SEVELIAN</div>
            <nav className="mt-10">
                <ul>
                    <li className="p-4 flex items-center space-x-4 text-white cursor-pointer">
                        <FiHome className="text-xl" />
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li className="p-4 flex items-center space-x-4 text-white cursor-pointer">
                        <FiCalendar className="text-xl" />
                        {/* <span>Appointments</span> */}
                        <Link to="/products">All products</Link>
                    </li>
                    <li className="p-4 flex items-center space-x-4 text-white cursor-pointer">
                        <FiUserPlus className="text-xl" />
                        {/* <span>Orders</span> */}
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li className="p-4 flex items-center space-x-4 text-white cursor-pointer">
                        <FiList className="text-xl" />
                        {/* <span>Doctors List</span> */}
                        <Link to="/users">Users List</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
