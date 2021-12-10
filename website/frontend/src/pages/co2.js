import React, { useEffect } from "react";

import Co2Table from "../components/data/co2Table";

const CO2 = () => {
    useEffect (() => {
            document.title = 'CO2';
        }
    );

    return (
        <div>
            <h1>CO2</h1>
            <p>This Page is the CO2 Page</p>
            <Co2Table />
        </div>
    )
}

export default CO2;