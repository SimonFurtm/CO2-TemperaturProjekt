import React, { useEffect, useState } from "react";
import LuftTable from "../components/data/luftTable";

const Luftfeuchtichkeit = () => {
    useEffect (() => {
            document.title = 'Luftfeuchtichkeit';
        }
    );

    return (
        <div>
            <h1>Luftfeuchtichkeit</h1>
            <p>This Page is the Luftfeuchtichkeit Page</p>
            <LuftTable />
        </div>
    )
}

export default Luftfeuchtichkeit;