import React, { Component } from 'react';
import './customers.css';

class DataTable extends Component {
  constructor() {
    super();
    this.state = {
        dataTable: []
    };
  }


  componentDidMount() {
    fetch('/api/raspberryData')
      .then(res => res.json())
      .then(dataTable => this.setState({dataTable}, () => console.log('Data fetched...', dataTable)));
  }

  render() {
    return (
      <div>
        <h2>Co2 Daten</h2>
        <ul>
        {this.state.dataTable.map(dataTable => 
          <li key={dataTable.id}> {dataTable.time} {dataTable.co2} {dataTable.luftfaeuchtigkeit} {dataTable.temperatur}</li>
        )}
        </ul>
        
      </div>
    );
  }
}

export default DataTable;
