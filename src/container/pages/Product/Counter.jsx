import React, { Component } from 'react';
import {RootContext} from '../../Home'
class Counter extends Component {
    inputChangedHandler = (e) => {
        return e.target.value;
    }

    render() { 
        return (  
            <RootContext.Consumer>
                {
                    val => {
                        return (
                            <div className="counter">
                                <button className="minus" onClick={()=> val.dispatch({type: "MINUS_ORDER"})}>-</button>
                                <input className="input-count" type="text" value={val.state.totalOrder} onChange={(e)=> this.inputChangedHandler(e)}/>
                                <button className="plus" onClick={()=> val.dispatch({type: "PLUS_ORDER"})}>+</button>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    }
}

export default Counter;