import React, { Component } from 'react';
import formate from'../components/data/formate'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
var data3 = [];


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
    console.log("Render")
    var tmp = this.state.chartData.map((chartData) => ({
       name: formate.changeDatumFormat(chartData.Datum), uv: chartData.CO2
    }));

    console.log(tmp)
    data3 = tmp;

    console.log(data3)
    
       var data2 = [
         { name: "12.01.2022", uv: 100},
         { name: "13.01.2022", uv: 1000},
         { name: "14.01.2022", uv: 300},
         { name: "15.01.2022", uv: 1000},
         { name: "12.01.2022", uv: 100},
         { name: "13.01.2022", uv: 1000},
         { name: "14.01.2022", uv: 300},
         { name: "15.01.2022", uv: 1000},
         { name: "12.01.2022", uv: 100},
         { name: "13.01.2022", uv: 1000},
         { name: "14.01.2022", uv: 300},
         { name: "15.01.2022", uv: 1000},
         { name: "12.01.2022", uv: 100},
         { name: "13.01.2022", uv: 1000},
         { name: "14.01.2022", uv: 300},
         { name: "15.01.2022", uv: 1000},
         { name: "13.01.2022", uv: 1000},
         { name: "14.01.2022", uv: 300},
         { name: "15.01.2022", uv: 1000},
       ]
       console.log(data2)
      
      
    return (
<div>
    <LineChart width={600} height={300} data={data3} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
      
</div>
  );
  } 
}
export default Chart