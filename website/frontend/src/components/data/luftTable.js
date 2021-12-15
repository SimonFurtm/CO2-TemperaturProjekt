import React, { Component } from 'react';
import {Table } from 'react-bootstrap';

class LuftTable extends Component {
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
        <h2>Luftfeuchtichkeit Tabelle</h2>
        <Table responsive hover size="sm">
          <thead>
            <tr>
              <th> </th>
              <th>Datum</th>
              <th>Zeit</th>
              <th>Luftfeuchtichkeit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataTable.map(dataTable => 
              <tr>
                <th key={dataTable.RPIS_SensorID}>{dataTable.RPIS_SensorID} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.Datum} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.Uhrzeit} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.Luftfeuchtigkeit} </th>
              </tr>
            )}
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default LuftTable;
