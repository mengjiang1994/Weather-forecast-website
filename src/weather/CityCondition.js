import React from 'react';

export default function CityCondition(props) {
  const {city, weather, temp, desc} = props;
  return (
      //React.Freagment can replace useless div
      <React.Fragment>
        <div id="location">{props.city}</div>
	    <div id="weather">{props.weather}</div>
	    <div id="temperature">{props.temp}</div>
	    <div id="desc">{props.desc}</div>
      </React.Fragment>
        
     
    
  )
}