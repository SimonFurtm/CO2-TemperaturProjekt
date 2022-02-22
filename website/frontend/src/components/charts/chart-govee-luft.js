import React, { Component } from 'react';
import formate from '../data/formate';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import goveeData from '../goveeData.json'
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
var data3 = [];


class ChartGoveeLuftfeuchtigkeit extends Component {
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
    //changed chartData to goveeData
    console.log("Render")
    var tmp = goveeData.map((goveeData) => ({
      datum: formate.changeDatumFormat(goveeData.Datum), co2: goveeData.Luftfeuchtigkeit, time: formate.changeTimeFormat(goveeData.Uhrzeit)
    }));

    console.log(tmp)
    data3 = tmp;

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
export default ChartGoveeLuftfeuchtigkeit