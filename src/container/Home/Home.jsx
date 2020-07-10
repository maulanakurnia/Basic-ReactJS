import React, {Component} from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product.jsx';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp.jsx';
import BlogPost from '../BlogPost/BlogPost.jsx';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './Home.css';
class Home extends Component {
    state = {
        showComponent : true
    }
    render(){
        return(
            <BrowserRouter>
                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                </div>
                <Route path="/" exact component={BlogPost} />
                <Route path="/product" component={Product} />
                <Route path="/lifecycle" component={LifeCycleComp} />
            </BrowserRouter>
        )
    }
}

export default Home;