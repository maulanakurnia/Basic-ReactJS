import React, { Component } from 'react';
import './DetailPost.css';
import API from '../../../../services';

class DetailPost extends Component {
    state = { 
        post: {
            title: '',
            body: ''
        },
        comments: []
    }

    componentDidMount(){
        let id = this.props.match.params.id
        API.getDetailPost(id).then((res) =>{
            this.setState({
                post:{
                    title: res.title,
                    body: res.body
                }
            })
        })

        API.getComments(`?postId=${id}`).then(res => {
            this.setState({
                comments: res
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
                <p className="detail-title">{this.state.comments.length} Komentar</p>
                <div className="wrapper-detail-comments">
                    {
                        this.state.comments.map(comments => {
                            return(
                                <div key={comments.id} className="detail-comments">
                                    <p className="email-detail-comments">{comments.email}</p>
                                    <p className="body-detail-comments">{comments.body}</p>
                                </div>
                            )
                        })
                    } 
                </div>
            </div>
        );
    }
}
 
export default DetailPost;