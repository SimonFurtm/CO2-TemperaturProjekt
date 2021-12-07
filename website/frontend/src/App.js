import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router} from "react-router-dom";

//components
import Customers from './components/customers';
import DataTable from './components/dataTable';
import NavBar from './components/navbar';


//pages
import Webpages from './pages/index'

function App() {
  {/*"Main"*/}
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Webpages />
      </div>
    </Router>
  );
}

export default App;
