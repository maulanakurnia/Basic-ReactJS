import React, { Component, createContext } from "react";
import {BrowserRouter, Route, NavLink} from 'react-router-dom'

// pages
import Product from "../pages/Product";
import LifeCycleComp from "../pages/LifeCycleComp";
import BlogPost from "../pages/BlogPost";
import YoutubeCompPage from "../pages/YoutubeCompPage";
import DetailPost from "../pages/BlogPost/DetailPost";

// css
import './Home.css'

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
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
      <BrowserRouter>
        <Provider value={{
          state: this.state,
          dispatch: this.dispatch,
        }}>
          <div className="navigation">
            <NavLink exact to="/">Blog</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/lifeCycle">LifeCycle</NavLink>
            <NavLink to="/youtube">Youtube</NavLink>
          </div>
          <Route path="/" exact component={BlogPost}/>
          <Route path="/detail-post/:id" component={DetailPost}/>
          <Route path="/product" component={Product}/>
          <Route path="/lifeCycle" component={LifeCycleComp}/>
          <Route path="/youtube" component={YoutubeCompPage}/>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default Home;
