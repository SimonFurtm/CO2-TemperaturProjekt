import React, { Component } from 'react';
import {Table } from 'react-bootstrap';
import './table.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/hardcodedData')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <div>
        <h2>Co2 Test Tabelle</h2>
        <Table responsive hover size="sm">
          <thead>
            <tr>
              <th> </th>
              <th>Zeit</th>
              <th>Datum</th>
              <th>CO²</th>
              <th>Luftfäuchtichkeit</th>
              <th>Temperatur</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map(customer => 
              <tr>
                <th key={customer.id}>{customer.id} </th>
                <th key={customer.id}>{customer.time} </th>
                <th key={customer.id}>{customer.date} </th>
                <th key={customer.id}>{customer.co2} </th>
                <th key={customer.id}>{customer.lf} </th>
                <th key={customer.id}>{customer.temperatur} </th>
              </tr>
            )}
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Customers;
