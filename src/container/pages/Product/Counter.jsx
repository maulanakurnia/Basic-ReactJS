import React, { Component } from 'react';
import {connect} from 'react-redux';
import ActionType from '../../../redux/reducer/globalActionType';

class Counter extends Component {
    inputChangedHandler = (e) => {
        return e.target.value;
    }

    render() { 
        return (  
            <div className="counter">
                <button className="minus" onClick={this.props.handleMinus}>-</button>
                <input className="input-count" type="text" value={this.props.order} onChange={(e)=> this.inputChangedHandler(e)}/>
                <button className="plus" onClick={this.props.handlePlus}>+</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}), // Dispatch / Action <-- Proses pemanggilan sebuah intruksi yang disediakan oleh reducer
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER}), // Dispatch / Action <-- Proses pemanggilan sebuah intruksi yang disediakan oleh reducer
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);