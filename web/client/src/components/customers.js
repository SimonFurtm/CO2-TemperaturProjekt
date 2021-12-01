import React, { Component } from 'react';
import './table.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/hardcodedData')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <div>
        <h2>Co2 Test Tabelle</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.time} {customer.co2} {customer.temperatur}</li>
        )}
        </ul>
        
      </div>
    );
  }
}

export default Customers;
