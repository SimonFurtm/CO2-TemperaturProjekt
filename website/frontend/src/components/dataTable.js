import React, { Component } from 'react';
import {Table } from 'react-bootstrap';
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
        <h2>RaspberryPI Daten</h2>
        <Table responsive hover size="sm">
          <thead>
            <tr>
              <th>Raspberry</th>
              <th>Datum</th>
              <th>Zeit</th>
              <th>Temperatur</th>
              <th>Luftfäuchtichkeit</th>
              <th>CO²</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataTable.map(dataTable => 
              <tr>
                <th key={dataTable.RPIS_SensorID}>{dataTable.RPIS_SensorID} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.Datum} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.Uhrzeit} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.Temperatur} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.Luftfeuchtigkeit} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.CO2} </th>
              </tr>
            )}
            
          </tbody>
        </Table>
        
      </div>
    );
  }
}

export default DataTable;