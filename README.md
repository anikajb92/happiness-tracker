# Bliss


## Table of Contents

* [General Info](#general-info)
* [Preview](#preview)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Examples](#code-examples)

## General Info

Bliss is a happiness tracker that aggregates user data into broader analytics and correlates daily habits with mood.


## Preview

User's full name is conditionally rendered on profile page upon login authentication
![profile page gif](https://media.giphy.com/media/vHX5qSLVO4nvmIvoMC/giphy.gif)

Adding daily user data: Selected date on calendar is prefilled on the next page
![data entry gif](https://media.giphy.com/media/0sqFHdEUGgFohRBkqy/giphy.gif)

## Technologies 
* React
* Ruby 
* CSS
* Google Calendar
* Google Charts

## Launch

 To run this project locally on your machine:

`cd backend`

Navigate into the backend folder

`bundle install`

Install gem files and dependencies

`shotgun`

To start the backend server

`cd frontend`

Navigate to the frontend folder

`npm install`

Install node packages

`npm start`

Now you can view the project in your browser

## Code Examples

```ruby
def moods
    self.entries.map do |entry|
      date = entry.date.strftime("%d").to_i
      [date, entry.mood, entry.weather, entry.sleep]
    end.sort
  end 
```
```javascript
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
 ``` 