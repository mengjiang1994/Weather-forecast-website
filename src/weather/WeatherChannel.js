// WeatherChannel.js
import React, {Component} from 'react';

import CityCondition from './CityCondition';
import Forecaster    from './Forecaster';
import Toolbar from './Toolbar';
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
          unit: 'f',
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
        temp: data.temp_c + "°C",
      }

      this.setState({conditionData});
      
    }

    handleConditionDataF(data){
      //console.log("got data from api:",data);
      const conditionData ={
        city: data.display_location.full,
        weather: data.weather,
        temp: data.temp_f + "°F",
      }

      this.setState({conditionData});
      
    }
    // onSubmit() {
    //   alert('Clicked');
    //   fetchConditionData(this.state.curCity, (data) => {this.handleCondtionData(data)});
    // }

    switchC(data) {
      fetchConditionData(this.state.curCity, (data) => {this.handleConditionData(data)});
      // const conditionData ={
      //   city: data.display_location.full,
      //   weather: data.weather,
      //   temp: data.temp_c + "°C",
      // }

      // this.setState({conditionData});
      
    
    }

    switchF(data) {
      fetchConditionData(this.state.curCity, (data) => {this.handleConditionDataF(data)});
      fetchForecastData(this.state.curCity, (forecast) => {
        const data = forecast.map(item => {
          return {weekday: item.date.weekday_short, hight: item.high.fahrenheit, low: item.low.fahrenheit, icon_url: item.icon_url
          }
        })
      this.setState({days: data});
      });
    
    }

    onRefresh() {
      console.log(document.querySelector('input[name=tempunit]:checked').value);
      fetchConditionData(this.state.curCity, (data) => {this.handleConditionData(data)});
      fetchForecastData(this.state.curCity, (forecast) => {
        const data = forecast.map(item => {
          return {weekday: item.date.weekday_short, hight: item.high.celsius, low: item.low.celsius, icon_url: item.icon_url
          }
        })
      this.setState({days: data});
      });
    }

    componentDidMount() {
      // alert('Clicked, now run the componentDidMount.');
      fetchConditionData(this.state.curCity, (data) => {this.handleConditionData(data)});
      // get the forecast data:
      fetchForecastData(this.state.curCity, (forecast) => {
        const data = forecast.map(item => {
          return {weekday: item.date.weekday_short, hight: item.high.celsius, low: item.low.celsius, icon_url: item.icon_url
          }
        })
      this.setState({days: data});
      });
    }

    render() {
      const {city, weather, temp} = this.state.conditionData;
      return (
        <main>
          <nav>
             <input value={this.state.curCity}
                   onChange={(e) => this.setState({curCity:e.target.value})} />
              <button onClick={() => {this.onRefresh() } }>Load</button>
              <form>
                    <input type="radio" id="celsius" name="tempunit" value="celsius" checked={this.state.unit === 'celsius'} onChange={(e) => this.setState({ unit: e.target.value })} onClick={() => {this.onRefresh() }} />°C
                    <input type="radio" id="fahrenheit" name="tempunit" value="fahrenheit" checked={this.state.unit === 'fahrenheit'} onChange={(e) => this.setState({ unit: e.target.value })} onClick={(data) => {this.switchF(data) } } />°F
              </form>
            {/* <input type="radio" value="c" checked={true} />Celsius
            <input type="radio" value="f" />Fahrenheit */}

           

          </nav>
          {/* <section id="Toolbar">
            <Toolbar city={this.state.curCity} onRefresh={() => this.onRefresh()}/>
          </section> */}
          <section id="left">
            <CityCondition city={city} 
                           weather={weather} 
                           temp={temp} />
          </section>
          <section id="right">
            <Forecaster day={this.state.days}/>
          </section>
        </main>
      )
    }
}