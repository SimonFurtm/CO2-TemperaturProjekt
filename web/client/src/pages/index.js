import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './home';
import Raspberry from './raspberry';
import CO2 from './co2';
import Luftfeuchtichkeit from './luftfeuchtichkeit';
import Temperatur from './temperatur';


const Wepbages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" component = {<Home />} />
                <Route path="/#raspberry" component = {<Raspberry />} />
                <Route path="/#show/co2" component = {<CO2 />} />
                <Route path="/#show/air" component = {<Luftfeuchtichkeit />} />
                <Route path="/#show/temp" component = {<Temperatur />} />
            </Routes>
        </Router>
    );
};

export default Wepbages;