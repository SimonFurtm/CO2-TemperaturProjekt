import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers';
import DataTable from './components/dataTable';
import NavBar from './components/navbar';
import Buttons from './components/buttons';
import Webpages from './pages'
import { Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar /> 
        </header>
        <body>
          <Webpages />
          <DataTable />
        </body>
        
      </div>
    );
  }
}

export default App;
