import React, { Component, Fragment } from 'react';
import './LifeCycleComp.css'

// LifeCycle yang sering digunakan antara lain: 
// - consturctor
// - render
// - componentDidMount
// - componentDidUpdate
// - componrntWillUnmount

class LifeCycleComp extends Component {
    constructor(props){
        super(props);
        this.state = {  
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) { 
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('componentDidMount')
        // setTimeout(() =>{
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000)
    }

    // haruskah component di update?
    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate')
        console.log('next props', nextProps)
        console.log('next state', nextState)
        console.log('this state', this.state)
        console.groupEnd()
        if(nextState.count >= 4){ // jika state count lebih besar sama dengan 4 maka
            return false // return false / component stop mengupdate
        }
        return true // jika tidak, maka return true / component terus mengupdate
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('shouldComponentUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() { 
        console.log('render')
        return (  
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr/>
                <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
            </Fragment>
        );
    }
}
 
export default LifeCycleComp;