import React, { Component } from 'react';
import './table.css';

class DataTable extends Component {
  constructor() {
    super();
    this.state = {
        dataTable: []
    };
  }


  componentDidMount() {
    fetch('/daten/get')
      .then(res => res.json())
      .then(dataTable => this.setState({dataTable}, () => console.log('Data fetched...', dataTable)));
  }

  render() {
    return (
      <div>
        <h2>Co2 Daten</h2>
        <ul>
        {this.state.dataTable.map(dataTable => 
          <li key={dataTable.RPIS_SensorID}> Raspberry: {dataTable.RPIS_SensorID} <br />Datum: {dataTable.Datum} Uhrzeit: {dataTable.Uhrzeit} Temperatur: {dataTable.Temperatur} Luftfeuchtigkeit: {dataTable.Luftfeuchtigkeit} CO2: {dataTable.CO2}</li>
        )}
        </ul>
        
      </div>
    );
  }
}

export default DataTable;
