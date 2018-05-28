// WeatherChannel.js
import React, {Component} from 'react';

import CityCondition from './CityCondition';
import Forecaster    from './Forecaster';
import {fetchConditionData, fetchForecastData} from './weather';
// also include another comp for search input and other functions
// import Toolbar       from './Toolbar'; // will define later

// responsible for maintain necessary data (from API response) in the state
// pass them down to child 
export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        // use static data to fill initial state first
        this.state = {
          curCity: 'brisbane',
          conditionData: {
                // city:  '',
                // temp: '',
                // weather: '',
                // desc: "Clear.Low 11C"
            },
            days:  [
                // {weekday: 'Wed', high:23, low:18, icon:'http://icons.wxug.com/i/c/k/clear.gif'},
                // {weekday: 'Thu', high:29, low:18, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'},
                // {weekday: 'Fri', high:20, low:10, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'}
            ]
        }
    }

    handleConditionData(data){
      //console.log("got data from api:",data);
      const conditionData ={
        city: data.display_location.full,
        weather: data.weather,
        temp: data.temp_c
      }
      this.setState({conditionData});
    }

    handleForecastData(data){

    }

    // onSubmit() {
    //   alert('Clicked');
    //   fetchConditionData(this.state.curCity, (data) => {this.handleCondtionData(data)});
    // }

    componentDidMount() {
      alert('Clicked, now run the componentDidMount.');
      fetchConditionData(this.state.curCity, (data) => {this.handleConditionData(data)});
      // get the forecast data:
      fetchForecastData(this.state.curCity, (forecast) => {
        const data = forecast.map(item => {
          return {weekday: item.date.weekday_short, hight: item.high.celsius, low: item.low.celsius, icon_url: item.icon_url
          }
        })
      this.setState({forecast: data});
      });
    }

    render() {
      const {city, weather, temp} = this.state.conditionData;
      return (
        <main>
          {/* <Toolbar /> */}
          <section id="left">
            <CityCondition city={city} 
                           weather={weather} 
                           temp={temp} />
          </section>
          <section id="right">
            <Forecaster days={this.state.days}/>
          </section>
        </main>
      )
    }
}