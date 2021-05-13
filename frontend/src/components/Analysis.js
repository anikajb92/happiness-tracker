import React, { Component } from 'react';
import Chart from "react-google-charts";

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
    eachDay.unshift(['x', 'mood', 'weather', 'sleep'])
    eachDay.sort(function(a, b) {
      return a - b;
    })
    console.log(eachDay)
    this.setState({
      dateMood: eachDay
    })
    // console.log(data)
    // results.map(result => [...result])

    // const rows = results.split('",');
    // const indi = Array.from(rows);
    // console.log(indi)
  }
  

  render() {
    return (
      <div>
        <Chart
          width={'300px'}
          height={'450px'}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={this.state.dateMood}
          options={{
            hAxis: {
              title: 'Days In The Month Of May, 2021',
            },
            vAxis: {
              title: 'Happiness',
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
