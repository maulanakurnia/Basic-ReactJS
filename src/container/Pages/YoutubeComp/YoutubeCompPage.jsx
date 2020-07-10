import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YouTubeComp/YouTubeComp';

class YoutubeCompPage extends Component {
    render() { 
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp
                    time="7.12"
                    title="Tutorial React JS - Bagian 1"
                    desc="2x ditonton, 2 hari yang lalu"/>
                <YoutubeComp
                    time="8.02"
                    title="Tutorial React JS - Bagian 2"
                    desc="200x ditonton, 10 hari yang lalu"/>
                <YoutubeComp
                    time="5.04"
                    title="Tutorial React JS - Bagian 3"
                    desc="500x ditonton, 4 hari yang lalu"/>
                <YoutubeComp
                    time="4.12"
                    title="Tutorial React JS - Bagian 4"
                    desc="1k ditonton, 14 hari yang lalu"/>

            </Fragment>  
        );
    }
}
 
export default YoutubeCompPage;