import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
var data = [];


class Chart extends Component {
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
    {this.state.chartData.map(chartData =>
      data = [
        {name: 12, value: chartData.co2},
        
      ]
      )}
    return (
<div>
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis dataKey="value" />
    <Tooltip />
    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="name" stroke="#82ca9d" />
    </LineChart>
      
</div>
  );
  } 
}
export default Chart