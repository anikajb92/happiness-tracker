import React, { Component } from 'react';
import Chart from "react-google-charts";
import { AiOutlinePieChart } from 'react-icons/ai';

export default class Analysis extends Component {

  state = {
    dateMood: []
  }

  componentDidMount() {
    fetch('http://localhost:9393/moods')
    .then(response => response.json())
    .then(results => {
      console.log(results)
      this.something(results)
      this.setState({
        dateMood: results
      })
    })
  }

  something = (results) => {
    console.log("results", results)
    const eachDay = results.map(i => i )
    eachDay.unshift(['day', 'mood', 'weather', 'sleep'])
    eachDay.sort(function(a, b) {
      return a - b;
    })
    console.log(eachDay)
    this.setState({
      dateMood: eachDay
    })
  }
  

  render() {
    return (
      <div className="analysis">
        <h4><em>"Chart the positive changes in your daily life"</em></h4>
        <Chart
          width={'340px'}
          height={'450px'}
          chartType="AreaChart"
          // loader={}
            data={this.state.dateMood}
            options={{
              hAxis: {
                title: 'Days In The Month Of May, 2021',
              },
              vAxis: {
                title: 'Happiness',
              },
              series: {
                0: { color: '#e2431e' },
                1: { color: '#e7711b' },
                2: { color: '#f1ca3a' }
            }
            }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
