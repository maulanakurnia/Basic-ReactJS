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
        this.setState({
            count: 2
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
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
    render() { 
        console.log('render');
        return (  
            <button className="btn">Component Button {this.state.count} </button>
        );
    }
}
 
export default LifeCycleCop;