import React, { Component } from 'react';
import Header from "./weather/Header"
import Footer from "./weather/Footer"
import Forecaster from "./weather/Forecaster"
import CityCondition from "./weather/CityCondition"
import WeatherChannel from "./weather/WeatherChannel"
//import React from 'react';
//import logo from './logo.svg';
//import './App.css';

var root = document.querySelector('#app');
     // Pass the top level component (e.g. App) to render
const conditionData = {
  city:'Current City',
  weather:'Current Conditions',
  temp:'00',
  desc:"A mix of clouds"
}

const forecastData = [ {weekday:'Tue', high:30, low:15}, {weekday:'Wed', high:29, low:15}, {weekday:'Thu', high:28, low:15},
];
     
    //  function Header(props) {
    //     return (
    //       <header>
    //         <h1>My Weather Channel</h1>
    //         <h2>JSON data from the Weather Underground</h2>
    //       </header>
    //     )
    //     // return DOM structure related to header part
    //   }

    //   function Footer(props) {
    //     return (
    //       <footer>
    //         <p>{'Full Stack Course 101'}</p>
    //       </footer>
    //     )
    //   // return DOM structure related to footer part
    //   }

    //   function CityCondition(props) {
    //   // the left part to show a city's weather condition
    //   // props = {city, weather, temp, desc}

    //   return (
    //     <section id="left">
	  //       <div id="location">{props.location}</div>
	  //       <div id="weather">{props.weather}</div>
	  //       <div id="temp">{props.temp}C</div>
	  //       <div id="desc">{props.desc}</div>
    //     </section>
    //   )
    //   }

     


class App extends Component {
  render(){
    return (
          <div id="wrapper">
            <Header />
            <WeatherChannel />
            <Footer />
          </div>
        )
  }
  
}

 export default App;




