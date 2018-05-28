import React from 'react';

export default function Toolbar(props) {
    return (
        <React.Fragment>
            <nav>
                <input type='text' value ={props.city} id='city'/>
                 <button onClick={props.onRefresh}>Load</button>
            </nav>
      </React.Fragment>
        
          
       
      
    )
  }