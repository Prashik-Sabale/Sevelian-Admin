import React from "react";

const OverviewCard = ({ title, value, color }) => {
    return (
        <div className={`p-6 rounded-lg shadow-md text-white ${color}`}>
            <h3 className="text-sm font-medium">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
};

export default OverviewCard;
