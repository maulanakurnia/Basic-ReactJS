import React, { Component } from 'react';
import { GlobalConsumer } from '../../../context';

class Counter extends Component {
    inputChangedHandler = (e) => {
        return e.target.value;
    }

    render() { 
        console.log(this)
        return (  
            <div className="counter">
                <button className="minus" onClick={()=> this.props.dispatch({type: "MINUS_ORDER"})}>-</button>
                <input className="input-count" type="text" value={this.props.state.totalOrder} onChange={(e)=> this.inputChangedHandler(e)}/>
                <button className="plus" onClick={()=> this.props.dispatch({type: "PLUS_ORDER"})}>+</button>
            </div>
        );
    }
}

export default GlobalConsumer(Counter);