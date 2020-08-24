import React, { Component, createContext } from 'react';

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
const GlobalProvider = Children => {
    return (
        class ParentComponent extends Component {
            state = {
                totalOrder: 0
            }
            
            dispatch = action => {
                switch(action.type){
                    case "PLUS_ORDER":
                        return this.setState({
                            totalOrder: this.state.totalOrder + 1
                        })
                    case "MINUS_ORDER":
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                    default:
            
                }
            }
            render() {
                return (
                    <Provider value={{state: this.state, dispatch: this.dispatch}}>
                       <Children {...this.props}/>
                    </Provider>
                );
            }
        }
    )
}
export default GlobalProvider;

// Costumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = Children => {
    return (
        class ParentComponent extends Component {
            render() {
                return(
                    <Consumer>
                        {
                            val => {
                                return (
                                    <Children {...this.props} {...val} />
                                );
                            }
                        }
                    </Consumer>
                );
            }
        }
    )
}