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

                    <label for="CO2">CO2</label>
                    <input type="text" id="CO2" name="CO2" />

                    <label for="luftfeuchtigkeit">Luftfeuchtigkeit</label>
                    <input type="text" id="luftfeuchtigkeit" name="luftfeuchtigkeit" />

                    <label for="temperatur">Temperatur</label>
                    <input type="text" id="temperatur" name="temperatur" />
                
                    <input type="submit" value="Submit" />
                </div>
            </form>  
        </div>
    )
}

export default Grenzwerte;