import React from 'react';

export default function Toolbar(props) {
    return (
        <React.Fragment>
            <nav>
                <input value ={props.city}
                        onChange={props.setState}/>
                 
                 
                 <button onClick={props.onRefresh}>Load</button>
                 
            </nav>
       </React.Fragment>
        
        // <nav>
        //     <input value={this.state.curCity}
        //            onChange={(e) => this.setState({curCity:e.target.value})} />
        //     <button onClick={() => {this.onRefresh() } }>Load</button>
        //   </nav>
          
       
      
    )
  }