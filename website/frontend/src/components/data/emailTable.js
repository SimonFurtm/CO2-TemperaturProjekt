import React, { Component } from 'react';
import formate from'./formate';

class EmailTable extends Component {
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
          <thead>
            <tr>
              <th>Raspberry</th>
              <th>Datum</th>
              <th>Zeit</th>
              <th>Temperatur</th>
              <th>Luftfeuchtichkeit</th>
              <th>CO₂</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataTable.map(dataTable => 
              <tr>
                <th key={dataTable.RPIS_SensorID}>{dataTable.RPIS_SensorID} </th>
                <th key={dataTable.RPIS_SensorID}>{formate.changeDatumFormat(dataTable.Datum)} </th>
                <th key={dataTable.RPIS_SensorID}>{formate.changeTimeFormat(dataTable.Uhrzeit)} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.Temperatur} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.Luftfeuchtigkeit} </th>
                <th key={dataTable.RPIS_SensorID}>{dataTable.CO2} </th>
              </tr>
            )}
            
          </tbody>        
      </div>
    );
  }
}

export default EmailTable;
