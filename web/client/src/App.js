import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers';
import DataTable from './components/dataTable';
import NavBar from './components/navbar';
import { Button } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
        </header>
        <NavBar /> 
        <Customers />
        <DataTable />
        <Customers />
        <DataTable />
      </div>
    );
  }
}

export default App;
