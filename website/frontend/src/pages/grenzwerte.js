import React, { useEffect, useState } from "react";
import Chart from "../components/chart";
import Button from 'react-bootstrap/Button';


const Grenzwerte = () => {
    useEffect (() => {
            document.title = 'Grenzwerte';
        }
    );
    return (
        <div>
            <h1>Grenzwerte</h1>
            <p>Legen Sie ihre Grenzwerte fest</p>

<form>

<div class="formgroup" id="email-form">
    <label for="email">Your e-mail*</label>
    <input type="email" id="email" name="email" />
</div>

<div class="formgroup" id="name-form">
    <label for="name">CO2</label>
    <input type="text" id="name" name="name" />
</div>

<div class="formgroup" id="name-form">
    <label for="name">Luftfeuchtigkeit</label>
    <input type="text" id="name" name="name" />
</div>


<div class="formgroup" id="name-form">
    <label for="name">Temperatur</label>
    <input type="text" id="name" name="name" />
</div>
        <input type="submit" value="Submit" />
    </form>  
        </div>
    )
}

export default Grenzwerte;