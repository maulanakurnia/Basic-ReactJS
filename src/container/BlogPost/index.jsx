import React, { Component, Fragment } from 'react';
import Post from '../../component/Post'
import './BlogPost.css'
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3001/posts')
        .then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    handleRemove = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3001/posts/${id}`)
        .then(() => { 
            this.getPostAPI(); 
        })
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render() { 
        return (  
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }
            </Fragment>
        );
    }
}
 
export default BlogPost;