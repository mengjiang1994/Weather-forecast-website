import React from 'react';

// internally used by Forecaster, so no need to export
function DailyItem(props) {
    const day = props.day;
    return (
            <div>
	            <span id="weekday">{day.weekday}</span>
	            <span> <img src={day.icon} /></span>
	            <span id="high">{day.high}</span>
	            <span id="low">{day.low}</span>
            </div>
            
    )
}

export default function Forecaster(props) {
    
    return props.days.map(
        (day, i) => <DailyItem key={`${day.weekday}_${i}`} day={day} />
    )
}