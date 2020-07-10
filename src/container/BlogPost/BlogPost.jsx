import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';
class BlogPost extends Component {
    state = {
        post: [],
    }
    componentDidMount(){
        // Pemanggilan API menggunakan Fetch
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        // Pemanggilan API menggunakan Axios
        axios.get('http://127.0.0.1:3000/posts')
            .then((result) => { //parameter result penamaannya bebas...
                this.setState({
                    post: result.data
                })
            })
    }
    render() { 
        return (  
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body}/>
                    })
                }
            </Fragment>
        );
    }
}
 
export default BlogPost;