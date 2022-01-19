import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './home';
import Dashboard from './dashboard';
import CO2 from './co2';
import Luftfeuchtichkeit from './luftfeuchtichkeit';
import Temperatur from './temperatur';
import PageNotFound from "./404";
import InternalServer from "./InternalServer";
import Impressum from "./Impressum";
import Grenzwerte from "./grenzwerte";


const Wepbages = () => {
    return(
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route path="/grenzwert" element = {<Grenzwerte />} /> 
          <Route path="/dashboard" element = {<Dashboard />} /> 
          <Route path="/data" element = {<Dashboard />} />    
          <Route path="/data/co2" element = {<CO2 />} />
          <Route path="/data/air" element = {<Luftfeuchtichkeit />} />
          <Route path="/data/temp" element = {<Temperatur />} />
          <Route path="/impressum" element = {<Impressum />} />
          <Route path="/500" element = {<InternalServer />} />
          <Route path="*" element = {<PageNotFound />} />     
        </Routes>
    );
};

export default Wepbages;