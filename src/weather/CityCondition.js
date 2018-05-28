import React from 'react';

export default function CityCondition(props) {
  const {city, weather, temp} = props;
  return (
      //React.Freagment can replace useless div
      //React.Freagment can replace useless div
      <React.Fragment>
      <div id="location">{city}</div>
      <div id="weather">{weather}</div>
      <div id="temperature">{temp}</div>
      {/* <div id="desc">{props.desc}</div> */}
    </React.Fragment>
        
     
    
  )
}