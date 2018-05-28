const weatherConditionURL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/';
const weatherForecastURL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/';

// import axios from 'axios';
const conditionXHR = new XMLHttpRequest();
const forecastXHR = new XMLHttpRequest();

export function fetchConditionData(city, onLoad){
    conditionXHR.open('GET',`${weatherConditionURL}${city}.json`);
    conditionXHR.send();
    conditionXHR.onload = () => {
        if (conditionXHR.status === 200){
            // console.log(conditionXHR.responseText);
            const dataObj = JSON.parse(conditionXHR.responseText);
            onLoad(dataObj.current_observation)
        }
    }
}

export function fetchForecastData(city, onLoad){
    forecastXHR.open('GET',`${weatherForecastURL}${city}.json`);
    forecastXHR.send();
    forecastXHR.onload = () => {
        if (forecastXHR.status === 200){
            // console.log(forecastXHR.responseText);
            const dataObj = JSON.parse(forecastXHR.responseText);
            onLoad(dataObj.forecast.simpleforecast.forecastday);
        }
    }
}