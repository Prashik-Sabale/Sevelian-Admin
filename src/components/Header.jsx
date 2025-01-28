import React from "react";

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/admin/login";
    };
    return (
        <header className="bg-slate-900  shadow px-6 py-4 flex justify-between items-center">
            <h1 className="text-lg text-white font-semibold"> Dashboard</h1>
            <div>
                <button onClick={handleLogout} className="bg-indigo-600 text-white px-4 py-2 rounded-2xl">
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;
