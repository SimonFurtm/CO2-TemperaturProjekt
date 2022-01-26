import React, { useEffect, useState } from "react";
import Chart from "../components/chart";


const Dashboard = () => {
    useEffect (() => {
            document.title = 'Dashboard';
        }
    );
    return (
        <div>
            <h1>Dashboard</h1>
            <Chart />
            
        </div>
    )
}

export default Dashboard;