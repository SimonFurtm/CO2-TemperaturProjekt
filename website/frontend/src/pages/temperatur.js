import React, { useEffect, useState } from "react";
import TempTable from "../components/data/tempTable";

const Temperatur = () => {
    useEffect (() => {
            document.title = 'Temperatur';
        }
    );

    return (
        <div>
            <h1>Temperatur</h1> 
            <p>This Page is the Temperatur Page</p>
            <TempTable />
        </div>
    );
};

export default Temperatur;