import React, { useEffect, useState } from "react";


const Dashboard = () => {
    useEffect (() => {
            document.title = 'Dashboard';
        }
    );

    return (
        <div>
            <h1>Dashboard</h1>
            <p>This Page is the Dashboard Page</p>
        </div>
    )
}

export default Dashboard;