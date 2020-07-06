import React, {Component} from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';

class Home extends Component {
    render(){
        return(
            <div>
                <p>YouTube Component</p>
                <br/>
                <YouTubeComp 
                    time="7.12" 
                    title="Tutorial React JS - Bagian 1"
                    desc="2x ditonton. 2 hari yang lalu"/>
                <YouTubeComp 
                    time="8.82" 
                    title="Tutorial React JS - Bagian 2"
                    desc="200x ditonton. 10 hari yang lalu"/>
                <YouTubeComp 
                    time="5.84" 
                    title="Tutorial React JS - Bagian 3"
                    desc="500x ditonton. 14 hari yang lalu"/>
                <YouTubeComp 
                    time="4.12" 
                    title="Tutorial React JS - Bagian 4"
                    desc="10jt ditonton. 15 hari yang lalu"/>
                <YouTubeComp/>
            </div>
        )
    }
}

export default Home;