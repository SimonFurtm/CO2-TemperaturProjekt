import React, { Component } from 'react';
import formate from '../data/formate';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
var data3 = [];


class ChartLuft extends Component {
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
      datum: formate.changeDatumFormat(chartData.Datum), Luftfeuchtigkeit: chartData.Luftfeuchtigkeit, Uhrzeit: formate.changeTimeFormat(chartData.Uhrzeit)
    }));

    console.log(tmp)
    data3 = tmp;

    console.log(data3)
      
      
    return (
<div>
    <ResponsiveContainer width={'100%'} height={400} >
      <LineChart width={800} height={400} data={data3} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
      <Line type="monotone" dataKey="Luftfeuchtigkeit" unit="%" stroke="#8884d8"  />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="datum"/>
      <YAxis unit="%" />
      <Tooltip />
      </LineChart>
    </ResponsiveContainer>
</div>
  );
  } 
}
export default ChartLuft