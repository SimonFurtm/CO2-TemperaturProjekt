import React, { useEffect, useState } from "react";

import DataTable from "../components/data/dataTable";
import Customers from "../components/customers";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This Page is the Home Page.</p>
            {/*<DataTable />*/}
            <Customers />
        </div>
    );
};

export default Home;