import React, { Component } from 'react';
import './LifeCycleComp.css';
// Refrensi Diagram LifeCycle Component 
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
class LifeCycleCop extends Component {
    constructor(props){ // constructor adalah basic dari ES6.
        super(props); // karena class LifeCycleCop ngeExtends maka gunakan super
        this.state = {
            count: 1
        }
        console.log('Constructor');
    }

    static getDerivedStateFormProps(props, state){
        console.log('getDerivedStateFormProps');
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate');
        // console.log('props: ', nextProps);
        console.log('state: ', nextState);
        console.log('this state: ', this.state)
        console.groupEnd();
        if(nextState.count >= 4){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    changeCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render() { 
        console.log('render');
        return (  
            <button className="btn" onClick={this.changeCount}>Component Button {this.state.count} </button>
        );
    }
}
 
export default LifeCycleCop;