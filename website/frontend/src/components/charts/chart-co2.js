import React, { Component } from 'react';
import formate from '../data/formate';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
var data3 = [];
var data4 = [];


class ChartCo2 extends Component {
    constructor() {
      super();
      this.state = {
          chartData: []
      };
    }
  
    componentDidMount() { 
      fetch('/daten/get')
        .then(res => res.json())
        .then(chartData => this.setState({chartData}, () => console.log('Data fetched...', chartData)))
        
    }

  render(){
    data3 = this.state.chartData.map((chartData) => ({
      RPI_ID: chartData.RPI_ID, datum: formate.changeDatumFormat(chartData.Datum), co2: chartData.CO2, time: formate.changeTimeFormat(chartData.Uhrzeit)
    }));
    /*
    for(var i = 0; i < data3.length; i++){
        if(data3[i].RPI_ID == this.props.dataFromParent){
          data4[i] = data3[i]
        }

    }*/
    var id = this.props.dataFromParent;
    console.log(id)
    console.log(data3)
      
      
    return (
<div>
    <ResponsiveContainer width={'100%'} height={400} >
      <LineChart width={800} height={400} data={data3} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
      <Line type="monotone" 
      dataKey="co2" unit="ppm" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="datum"/>
      <YAxis unit="ppm"/>
      <Tooltip />
      </LineChart>
    </ResponsiveContainer>   
</div>
  );
  } 
}
export default ChartCo2