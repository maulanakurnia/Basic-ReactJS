import React, { Component } from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'

// pages
import Product from "../pages/Product";
import LifeCycleComp from "../pages/LifeCycleComp";
import BlogPost from "../pages/BlogPost";
import YoutubeCompPage from "../pages/YoutubeCompPage";

// css
import './Home.css'

class Home extends Component {
  state = {
    showComponent: true
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="navigation">
          <Link to="/">Blog</Link>
          <Link to="/product">Product</Link>
          <Link to="/lifeCycle">LifeCycle</Link>
          <Link to="/youtube">Youtube</Link>
        </div>
        <Route path="/" exact component={BlogPost}/>
        <Route path="/product" component={Product}/>
        <Route path="/lifeCycle" component={LifeCycleComp}/>
        <Route path="/youtube" component={YoutubeCompPage}/>
      </BrowserRouter>
    );
  }
}

export default Home;
