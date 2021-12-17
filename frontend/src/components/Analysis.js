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
      this.formatDate(results)
      this.setState({
        dateMood: results
      })
    })
  }

  formatDate = (results) => {
    const eachDay = results.map(i => i )
    eachDay.unshift(['day', 'mood', 'weather', 'sleep'])
    eachDay.sort(function(a, b) {
      return a - b;
    })
    this.setState({
      dateMood: eachDay
    })
  }
  

  render() {
    return (
      <div className="analysis">
        <div className="quoteboxie">
          <h4>Chart the positive changes in your daily life with Bliss Analytics.</h4>
        </div>
        <Chart
          width={'360px'}
          height={'400px'}
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
