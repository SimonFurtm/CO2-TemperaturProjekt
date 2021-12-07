import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './home';
import Dashboard from './dashboard';
import CO2 from './co2';
import Luftfeuchtichkeit from './luftfeuchtichkeit';
import Temperatur from './temperatur';


const Wepbages = () => {
    return(
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route path="/dashboard" element = {<Dashboard />} /> 
          <Route path="/data" element = {<Dashboard />} />    
          <Route path="/data/co2" element = {<CO2 />} />
          <Route path="/data/air" element = {<Luftfeuchtichkeit />} />
          <Route path="/data/temp" element = {<Temperatur />} />
        </Routes>
    );
};

export default Wepbages;