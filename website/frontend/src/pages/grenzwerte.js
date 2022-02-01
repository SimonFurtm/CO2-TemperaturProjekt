import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import GrenzwerteForm from "../components/form";

const Grenzwerte = () => {
    useEffect (() => {
            document.title = 'Grenzwerte';
        }
    );


    return (
        <div>
            <h1>Grenzwerte</h1>
            <p>Legen Sie ihre Grenzwerte fest</p>
            <GrenzwerteForm />
        </div>
    )
}

export default Grenzwerte;