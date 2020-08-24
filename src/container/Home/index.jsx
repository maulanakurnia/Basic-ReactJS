import React, { Component, Fragment } from "react";
import YoutubeComp from "../../component/YoutubeComp";
// import Product from "../Product";
// import LifeCycleComp from "../LifeCycleComp";
import BlogPost from "../BlogPost";

class Home extends Component {
  state = {
    showComponent: true
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showComponent: false
      })
    }, 15000)
  }

  render() {
    return (
      <Fragment>
        {/* <p>Youtube Component</p>
        <hr />
        <YoutubeComp 
            time="8.03" 
            title="Tutorial React JS - Bagian 1" 
            desc="14k ditonton, 12 hari yang lalu"/>
        <YoutubeComp 
            time="7.03" 
            title="Tutorial React JS - Bagian 2" 
            desc="20k ditonton, 10 hari yang lalu"/>
        <YoutubeComp 
            time="5.08" 
            title="Tutorial React JS - Bagian 3" 
            desc="11x ditonton, 8 hari yang lalu"/>
        <YoutubeComp 
            time="9.04" 
            title="Tutorial React JS - Bagian 4" 
            desc="5x ditonton, 4 hari yang lalu"/>
        <YoutubeComp /> */}
        {/* <p>Counter</p>
        <hr/>
        <Product/> */}
        {/* <p>LifeCycle Component</p>
        <hr/>
        {
          this.state.showComponent ? <LifeCycleComp/> : null
        } */}
        <p>Blog Post</p>
        <hr/>
        <BlogPost/>
      </Fragment>
    );
  }
}

YoutubeComp.defaultProps = {
  time: "00.00",
  title: "Title Here",
  desc: "xx ditonton, x hari yang lalu"
};

export default Home;
