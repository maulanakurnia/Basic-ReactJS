// Library
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// Pages
import Product from '../Pages/Product/Product.jsx';
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp.jsx';
import BlogPost from '../Pages/BlogPost/BlogPost.jsx';
import YoutubeCompPage from '../Pages/YoutubeComp/YoutubeCompPage.jsx';
// Styling
import './Home.css';
class Home extends Component {
    state = {
        showComponent : true
    }
    render(){
        return(
            <Router>
                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                    <Link to="/youtube">YoutubeComp</Link>
                </div>
                <Route path="/" exact component={BlogPost} />
                <Route path="/product" component={Product} />
                <Route path="/lifecycle" component={LifeCycleComp} />
                <Route path="/youtube" component={YoutubeCompPage} />
            </Router>
        )
    }
}

export default Home;