import React, { Component, Fragment } from 'react';
import Post from '../../component/Post'
import './BlogPost.css'
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    getPostAPI = () => {
        axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
        .then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    handleRemove = (id) => {
        let result = window.confirm('yakin?')
        if(result){
            axios.delete(`http://localhost:3001/posts/${id}`)
            .then(() => { 
                this.getPostAPI(); 
            })
            window.alert('berhasil dihapus!')
        }
        window.alert('data anda aman!')
    }

    handleFormChange = (e) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        formBlogPostNew['id'] = timestamp
        formBlogPostNew[e.target.name] = e.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3001/posts', this.state.formBlogPost)
        .then(() => {
            this.getPostAPI();
        },(err) => {
            console.log('error : ', err )
        })
    }

    handleSubmit = () => {
        this.postDataToAPI();
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render() { 
        return (  
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="justify-center">
                    <div className="form-add-post">
                        <label htmlFor="title" className="title">Title</label>
                        <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange}/>
                        <label htmlFor="body">Blog Content</label>
                        <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                        <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                    </div>
                </div>
                <div className="flex">
                    {
                        this.state.post.map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove}/>
                        })
                    }
                </div>
            </Fragment>
        );
    }
}
 
export default BlogPost;