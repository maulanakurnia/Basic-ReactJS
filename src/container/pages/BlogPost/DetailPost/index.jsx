import React, { Component } from 'react';
import axios from 'axios';
import './DetailPost.css';

class DetailPost extends Component {
    state = { 
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`http://localhost:3001/posts/${id}`)
        .then((res) =>{
            this.setState({
                post:{
                    title: res.data.title,
                    body: res.data.body
                }
            })
        })
    }

    render() { 
        return (  
            <div className="p-detail-post">
                <div className="detail-img-thumb-post">
                    <img src="https://placeimg.com/1000/450/tech" alt="dummy"/>
                </div>
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </div>
        );
    }
}
 
export default DetailPost;