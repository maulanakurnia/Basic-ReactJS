import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp'

class YoutubeCompPage extends Component {
    render() { 
        return (  
            <Fragment>
                <p>Youtube Component</p>
                <hr/>
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
                <YoutubeComp />
            </Fragment>
        );
    }
}
 
export default YoutubeCompPage;