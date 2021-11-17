import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers';
import DataTable from './components/dataTable';
import NavBar from './components/navbar';
import Buttons from './components/buttons';
import { Button } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <NavBar /> 
        </header>
        
        <Customers />
        <DataTable />
        <Buttons />
        <Customers />
        <DataTable />
       
      </div>
    );
  }
}

export default App;
