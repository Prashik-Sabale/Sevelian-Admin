import React from "react";
import OverviewCard from "../OverviewCard";

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <OverviewCard title="Total Products" value="12" color="bg-green-500" />
                <OverviewCard title="Total Orders" value="1,230" color="bg-blue-500" />
                <OverviewCard title="Total Revenue" value="₹40,000" color="bg-yellow-500" />
                <OverviewCard title="Users" value="800" color="bg-purple-500" />
            </div>
        </div>
    );
};

export default Dashboard;
