import React, { Component } from 'react';
import {Table } from 'react-bootstrap';

class LuftTable extends Component {
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
        <h2>Luftfeuchtichkeit Tabelle</h2>
        <Table responsive hover size="sm">
          <thead>
            <tr>
              <th> </th>
              <th>Zeit</th>
              <th>Datum</th>
              <th>Luftfäuchtichkeit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map(customer => 
              <tr>
                <th key={customer.id}>{customer.id} </th>
                <th key={customer.id}>{customer.time} </th>
                <th key={customer.id}>{customer.date} </th>
                <th key={customer.id}>{customer.lf} </th>
              </tr>
            )}
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default LuftTable;
