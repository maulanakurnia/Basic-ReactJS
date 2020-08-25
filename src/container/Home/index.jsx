import React, { Component } from "react";
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import GlobalProvider from '../../context'

// pages
import Product from "../pages/Product";
import LifeCycleComp from "../pages/LifeCycleComp";
import BlogPost from "../pages/BlogPost";
import YoutubeCompPage from "../pages/YoutubeCompPage";
import DetailPost from "../pages/BlogPost/DetailPost";
import Hook from "../pages/Hooks";

// css
import './Home.css'

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="navigation">
            <NavLink exact to="/">Blog</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/lifeCycle">LifeCycle</NavLink>
            <NavLink to="/youtube">Youtube</NavLink>
            <NavLink to="/react-hook">React Hook</NavLink>
          </div>
          <Route path="/" exact component={BlogPost}/>
          <Route path="/detail-post/:id" component={DetailPost}/>
          <Route path="/product" component={Product}/>
          <Route path="/lifeCycle" component={LifeCycleComp}/>
          <Route path="/youtube" component={YoutubeCompPage}/>
          <Route path="/react-hook" component={Hook}/>
      </BrowserRouter>
    );
  }
}

export default GlobalProvider(Home);
