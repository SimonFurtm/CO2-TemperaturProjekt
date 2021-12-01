import React, { useEffect } from "react";

const Temperatur = () => {
    useEffect (() => {
            document.title = 'Temperatur';
        }
    );

    return (
        <div>
            <h1>Temperatur</h1>
            <p>This Page is the Temperatur Page</p>
        </div>
    );
};

export default Temperatur;