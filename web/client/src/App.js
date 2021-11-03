import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import NavBar from './components/navbar';
import { Button } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar /> 
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">COZwei</h1>
        </header>
        
        <Customers />
      </div>
    );
  }
}

export default App;
